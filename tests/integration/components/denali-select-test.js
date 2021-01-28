import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, find, findAll, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const opts = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }];

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
    assert.expect(3);

    await render(hbs`
      <DenaliSelect @options={{array "Item 1"}} @onChange={{this.onChange}} as |option|>
        {{option}}
      </DenaliSelect>
    `);

    assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');

    assert.dom('div.input select').exists('DenaliSelect renders a select element.');

    assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders text.');
  });

  test('it renders an option object', async function (assert) {
    assert.expect(3);

    await render(hbs`
      <DenaliSelect @options={{array (hash text="Item 1")}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');

    assert.dom('div.input select').exists('DenaliSelect renders a select element.');

    assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders an object.');
  });

  test('an option is active', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliSelect @options={{this.options}} @selectedOption={{this.selectedOption}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', opts);
    this.set('selectedOption', opts[1]);
    assert.equal(
      find('div.input select').selectedIndex,
      1,
      'DenaliSelect selects the object given by the `@selectedOption` arg'
    );
  });

  test('an option is disabled', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliSelect @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', opts);
    this.set('disabled', [opts[1]]);
    assert.deepEqual(
      findAll('div.input option').map((e) => e.disabled),
      [false, true, false],
      'DenaliSelect options are enabled and disabled as specified.'
    );
  });

  test('it supports wrapperClass', async function (assert) {
    this.set('options', opts);
    await render(hbs`
      <DenaliSelect
        @options={{this.options}}
        @wrapperClass={{this.wrapperClass}}
        as |option|
      >
        {{option.text}}
      </DenaliSelect>
    `);

    const wrapperClass = 'wrapperClass';
    assert.dom('.input').doesNotHaveClass(wrapperClass, 'DenaliSelect wrapper does not have a size class by default');

    this.set('wrapperClass', wrapperClass);
    assert.dom('.input').hasClass(wrapperClass, 'DenaliSelect wrapper has the appropriate class for small');
  });

  test('it supports sizes', async function (assert) {
    this.set('options', opts);
    await render(hbs`
      <DenaliSelect
        @options={{this.options}}
        @size={{this.size}}
        as |option|
      >
        {{option.text}}
      </DenaliSelect>
    `);

    assert
      .dom('.input')
      .doesNotHaveClass(/is-small|is-medium|is-large/, 'DenaliSelect wrapper does not have a size class by default');

    this.set('size', 'small');
    assert.dom('.input').hasClass('is-small', 'DenaliSelect wrapper has the appropriate class for small');

    this.set('size', 'medium');
    assert.dom('.input').hasClass('is-medium', 'DenaliSelect wrapper has the appropriate class for medium');

    this.set('size', 'large');
    assert.dom('.input').hasClass('is-large', 'DenaliSelect wrapper has the appropriate class for large');
  });

  test('it supports inverse colors', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliSelect @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
        {{option.text}}
      </DenaliSelect>
    `);

    this.set('options', opts);
    assert.dom('div.input').doesNotHaveClass('is-inverse', 'DenaliSelect does not have inverse styling by default');

    this.set('isInverse', 'true');
    assert
      .dom('div.input')
      .hasClass('is-inverse', 'DenaliSelect has inverse styling when `@isInverse` arg is set to true');
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
    assert.equal(find('div.input select').selectedIndex, 2);

    this.set('onChange', (option) => {
      this.set('selectedOption', option);
      assert.equal(option, this.options[1], 'DenaliSelect @onChange action provides the object selected');
    });
    await fillIn('div.input select', 'Item 2');
  });
});
