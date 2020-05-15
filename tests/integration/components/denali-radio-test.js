import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-radio', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(2);
    await render(hbs`
      <DenaliRadio as |Radio|>
        <Radio.Option @value="">Inner Content</Radio.Option>
      </DenaliRadio>
    `);

    assert.dom('div.radio').exists({ count: 1 }, 'DenaliRadio Option exists');
    assert.dom('div.radio').hasText('Inner Content', 'DenaliRadio Option renders inner content');
  });

  test('handles change events', async function (assert) {
    assert.expect(6);
    await render(hbs`
      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
        <Radio.Option @value={{1}}>1</Radio.Option>
        <Radio.Option @value="surprise">2</Radio.Option>
        <Radio.Option @value={{3}}>3</Radio.Option>
      </DenaliRadio>
    `);

    this.set('onChanged', (value) => assert.equal(value, 3, 'the last value is clicked'));
    await click('.radio input[value="3"]');
    assert.dom('.radio input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');

    this.set('onChanged', (value) => assert.equal(value, 1, 'the first value is clicked'));
    await click('.radio input[value="1"]');
    assert.dom('.radio input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');

    this.set('onChanged', (value) => assert.equal(value, 'surprise', 'the middle value is clicked'));
    await click('.radio input[value="surprise"]');
    assert.dom('.radio input[value="surprise"]').isChecked('The element is marked as checked after being clicked');
  });

  test('disabled elements', async function (assert) {
    assert.expect(2);
    await render(hbs`
      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
        <Radio.Option @value={{1}}>1</Radio.Option>
        <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
      </DenaliRadio>
    `);

    assert.dom('.radio input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');

    this.set('onChanged', () => assert.notOk(true, 'the disabled value cannot be clicked'));
    await click('.radio input[value="surprise"]');
    assert
      .dom('.radio input[value="surprise"]')
      .isNotChecked('The disabled element is not marked as checked after being clicked');
  });

  test('checked elements', async function (assert) {
    assert.expect(6);
    this.checked = false;
    await render(hbs`
      <DenaliRadio as |Radio|>
        <Radio.Option @value={{1}}>1</Radio.Option>
        <Radio.Option @value={{2}} @checked={{this.checked}}>2</Radio.Option>
        <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
      </DenaliRadio>
    `);

    assert.dom('.radio input[value="1"]').isNotChecked('The option is not marked as checked');
    assert.dom('.radio input[value="2"]').isNotChecked('The option is not marked as checked');
    assert.dom('.radio input[value="surprise"]').isNotChecked('The option is not marked as checked');

    this.set('checked', true);
    assert.dom('.radio input[value="1"]').isNotChecked('The option is still not marked as checked');
    assert.dom('.radio input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
    assert.dom('.radio input[value="surprise"]').isNotChecked('The option is still not marked as checked');
  });

  test('clicking label', async function (assert) {
    assert.expect(3);
    await render(hbs`
      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
        <Radio.Option @value={{1}}>1</Radio.Option>
      </DenaliRadio>
    `);

    this.set('onChanged', (value) => assert.equal(value, 1, 'the event is triggered when clicking a label'));
    assert.dom('.radio input').isNotChecked('The option is not marked as checked');
    await click('.radio label');
    assert.dom('.radio input').isChecked('The option is marked as checked after clicking the label');
  });
});
