import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const option = { text: 'Item 1' };

module('Integration | Component | denali-toggle', function (hooks) {
  setupRenderingTest(hooks);

  test('it requires options', async function (assert) {
    assert.expect(1);

    setupOnerror(function ({ message }) {
      assert.equal(
        message,
        'Failed prop type: The prop `options` is marked as required in `DenaliToggleComponent`, but its value is `undefined`.',
        'If @args() contains a PropType validator, an error will be thrown if the value is incorrect'
      );
    });
    await render(hbs`<DenaliToggle />`);
  });

  test('it renders an option string', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliToggle @options={{array "Item 1"}} as |option|>
        {{option}}
      </DenaliToggle>
    `);

    assert.dom('ul').exists('DenaliToggle renders a list.');

    assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders text.');
  });

  test('it renders an option object', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliToggle @options={{array (hash text="Item 1")}} as |option|>
        {{option.text}}
      </DenaliToggle>
    `);

    assert.dom('ul').exists('DenaliToggle renders a list.');

    assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders an object.');
  });

  test('an option is active', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliToggle @options={{this.options}} @activeOption={{this.activeOption}} as |option|>
        {{option.text}}
      </DenaliToggle>
    `);

    this.set('options', [option]);
    assert.dom('li').doesNotHaveClass('is-active', 'DenaliToggle options are not active by default');

    this.set('activeOption', option);
    assert.dom('li').hasClass('is-active', 'DenaliToggle option is active when `@activeOption` arg is set');
  });

  test('an option is disabled', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliToggle @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
        {{option.text}}
      </DenaliToggle>
    `);

    this.set('options', [option]);
    assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliToggle options are not disabled by default');

    this.set('disabled', [option]);
    assert.dom('li').hasClass('is-disabled', 'DenaliToggle option is disabled when `@isDisabled` arg is set to true');
  });

  test('it supports small size', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliToggle @options={{this.options}} @isSmall={{this.isSmall}} as |option|>
        {{option.text}}
      </DenaliToggle>
    `);

    this.set('options', [option]);
    assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');

    this.set('isSmall', 'true');
    assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');
  });

  test('it supports inverse colors', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliToggle @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
        {{option.text}}
      </DenaliToggle>
    `);

    this.set('options', [option]);
    assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');

    this.set('isInverse', 'true');
    assert
      .dom('.toggle')
      .hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');
  });

  test('it handles change events', async function (assert) {
    assert.expect(4);

    await render(hbs`
      <DenaliToggle
        @options={{this.options}}
        @activeOption={{this.activeOption}}
        @disabledOptions={{this.disabled}}
        @onChange={{this.changeActive}} as |option|>
        {{option.text}}
      </DenaliToggle>
    `);

    this.set('options', [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]);
    this.set('activeOption', this.options[2]);
    assert.dom('li:nth-child(3)').hasClass('is-active', 'The third option is active');

    this.set('changeActive', (option) => {
      this.set('activeOption', option);
      assert.equal(option.text, 'Item 2', 'the second option is clicked');
    });
    await click('li:nth-child(2)');
    assert.dom('li:nth-child(2)').hasClass('is-active', 'The element is active after being clicked');

    this.set('disabled', [this.options[0]]);
    this.set('changeActive', () => {
      assert.notOk(true, '`@onChange` should not be called when option is disabled');
    });
    await click('li:nth-child(1)');
    assert.dom('li:nth-child(2)').hasClass('is-active', 'The original element is still active after being clicked');
  });
});
