import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-radio-toggle', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliRadioToggle as |Toggle|>
        <Toggle.Option @value="1">Item 1</Toggle.Option>
      </DenaliRadioToggle>`);

    assert.dom('label').hasText('Item 1', 'DenaliRadioToggle.Option exists and renders inner content');

    assert.dom('input').hasAttribute('value', '1', 'DenaliRadioToggle.Option exists and has a value');
  });

  test('it handles change events for radio options', async function (assert) {
    assert.expect(6);
    await render(hbs`
      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
        <Toggle.Option @value={{1}}>1</Toggle.Option>
        <Toggle.Option @value="surprise">2</Toggle.Option>
        <Toggle.Option @value={{3}}>3</Toggle.Option>
      </DenaliRadioToggle>
    `);

    this.set('onChanged', (value) => assert.equal(value, 3, 'the last value is clicked'));
    await click('.toggle input[value="3"]');
    assert.dom('.toggle input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');

    this.set('onChanged', (value) => assert.equal(value, 1, 'the first value is clicked'));
    await click('.toggle input[value="1"]');
    assert.dom('.toggle input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');

    this.set('onChanged', (value) => assert.equal(value, 'surprise', 'the middle value is clicked'));
    await click('.toggle input[value="surprise"]');
    assert.dom('.toggle input[value="surprise"]').isChecked('The element is marked as checked after being clicked');
  });

  test('it handles disabled elements for radio options', async function (assert) {
    assert.expect(2);
    await render(hbs`
      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
        <Toggle.Option @value={{1}}>1</Toggle.Option>
        <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
      </DenaliRadioToggle>
    `);

    assert.dom('.toggle input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');

    this.set('onChanged', () => assert.notOk(true, 'the disabled value cannot be clicked'));
    await click('.toggle input[value="surprise"]');
    assert
      .dom('.toggle input[value="surprise"]')
      .isNotChecked('The disabled element is not marked as checked after being clicked');
  });

  test('it handles checked elements for radio options', async function (assert) {
    assert.expect(6);
    this.checked = false;
    await render(hbs`
      <DenaliRadioToggle as |Toggle|>
        <Toggle.Option @value={{1}}>1</Toggle.Option>
        <Toggle.Option @value={{2}} @checked={{this.checked}}>2</Toggle.Option>
        <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
      </DenaliRadioToggle>
    `);

    assert.dom('.toggle input[value="1"]').isNotChecked('The option is not marked as checked');
    assert.dom('.toggle input[value="2"]').isNotChecked('The option is not marked as checked');
    assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is not marked as checked');

    this.set('checked', true);
    assert.dom('.toggle input[value="1"]').isNotChecked('The option is still not marked as checked');
    assert.dom('.toggle input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
    assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is still not marked as checked');
  });

  test('it handles clicking labels for radio options', async function (assert) {
    assert.expect(3);
    await render(hbs`
      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
        <Toggle.Option @value={{1}}>1</Toggle.Option>
      </DenaliRadioToggle>
    `);

    this.set('onChanged', (value) => assert.equal(value, 1, 'the event is triggered when clicking a label'));
    assert.dom('.toggle input').isNotChecked('The option is not marked as checked');
    await click('.toggle label');
    assert.dom('.toggle input').isChecked('The option is marked as checked after clicking the label');
  });

  test('it supports small size', async function (assert) {
    await render(hbs`
      <DenaliRadioToggle @isSmall={{this.isSmall}} as |Toggle|>
        <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
      </DenaliRadioToggle>
    `);

    assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');

    this.set('isSmall', 'true');
    assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');
  });

  test('it supports inverse colors', async function (assert) {
    await render(hbs`
      <DenaliRadioToggle @isInverse={{this.isInverse}} as |Toggle|>
        <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
      </DenaliRadioToggle>
    `);

    assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');

    this.set('isInverse', 'true');
    assert
      .dom('.toggle')
      .hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');
  });
});
