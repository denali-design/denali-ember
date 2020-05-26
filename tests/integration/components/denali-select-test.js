import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, find, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const option = { text: 'Item 1' };

module('Integration | Component | denali-select', function (hooks) {
  setupRenderingTest(hooks);

  test('it requires options', async function (assert) {
    assert.expect(1);

    setupOnerror(function ({ message }) {
      assert.equal(
        message,
        'Failed prop type: The prop `options` is marked as required in `DenaliSelectComponent`, but its value is `undefined`.',
        'If @args() contains a PropType validator, an error will be thrown if the value is incorrect'
      );
    });
    await render(hbs`<DenaliSelect />`);
  });

  test('it renders an option string', async function (assert) {
    assert.expect(4);

    await render(hbs`
      <DenaliSelect @options={{array "Item 1"}} @onChange={{this.onChange}} as |option|>
        {{option}}
      </DenaliSelect>
    `);

    assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');

    assert.dom('select').exists('DenaliSelect renders a select element.');

    assert.dom('option').hasText('Item 1', 'DenaliSelect option exists and renders text.');
  });

  test('it renders an option object', async function (assert) {
    assert.expect(4);

    await render(hbs`
      <DenaliSelect @options={{array (hash text="Item 1")}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    assert.dom('div').hasClass('input', 'DenaliSelect renders a select input.');

    assert.dom('div').hasClass('has-arrow', 'DenaliSelect renders an arrow.');

    assert.dom('select').exists('DenaliSelect renders a select element.');

    assert.dom('option').hasText('Item 1', 'DenaliSelect option exists and renders an object.');
  });

  test('an option is active', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliSelect @options={{this.options}} @selectedOption={{this.selectedOption}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', [option]);
    this.set('selectedOption', option);
    assert.equal(find('select').selectedIndex, 0);
  });

  test('an option is disabled', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliSelect @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', [option]);
    assert.dom('option').doesNotHaveAttribute('disabled', 'DenaliSelect options are not disabled by default');

    this.set('disabled', [option]);
    assert.dom('option').isDisabled('DenaliSelect option is disabled when `@disabledOptions` arg is set');
  });

  test('it supports small size', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliSelect @options={{this.options}} @isSmall={{this.isSmall}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', [option]);
    assert.dom('div.input').doesNotHaveClass('is-small', 'DenaliSelect does not have small styling by default');

    this.set('isSmall', 'true');
    assert.dom('div.input').hasClass('is-small', 'DenaliSelect has a small size when `@isSmall` arg is set to true');
  });

  test('it supports inverse colors', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliSelect @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', [option]);
    assert.dom('div.input').doesNotHaveClass('is-inverse', 'DenaliSelect does not have inverse styling by default');

    this.set('isInverse', 'true');
    assert.dom('div.input').hasClass('is-inverse', 'DenaliSelect has inverse styling when `@isInverse` arg is set to true');
  });

  test('it handles change events', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliSelect
        @options={{this.options}}
        @selectedOption={{this.selectedOption}}
        @disabledOptions={{this.disabled}}
        @onChange={{this.onChange}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]);
    this.set('selectedOption', this.options[2]);
    assert.equal(find('select').selectedIndex, 2);

    this.set('onChange', (option) => {
      this.set('selectedOption', option);
      assert.equal(find('select').selectedIndex, 1);
    });
    await fillIn('select', 'Item 2');
  });
});
