import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-input-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    await render(hbs`<DenaliInputGroup />`);

    assert.dom('div.input-group').exists('An input group is rendered');
  });

  test('it renders a label', async function (assert) {
    assert.expect(1);

    await render(hbs`<DenaliInputGroup @label={{this.label}}/>`);

    this.set('label', 'My Label');
    assert.dom('div.input-group label').hasTextContaining('My Label', 'An input group is rendered with a label');
  });

  test('it renders an input', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" as |Group|>
        <Group.Input type="text" placeholder="Text Field" />
      </DenaliInputGroup>
    `);

    assert.dom('div.input-group div.input input').exists('Group.Input is rendered');
  });

  test('it renders a button', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" as |Group|>
        <Group.Button>
          Inner Content
        </Group.Button>
      </DenaliInputGroup>
    `);

    assert
      .dom('div.input-group button.button')
      .hasText('Inner Content', 'Group.Button exists and renders inner content');
  });

  test('it renders a radio', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliInputGroup @label="My Label" as |Group|>
        <Group.Radio as |Radio|>
          <Radio.Option @value="">Inner Content</Radio.Option>
        </Group.Radio>
      </DenaliInputGroup>
    `);

    assert.dom('div.input-group div.radio').exists({ count: 1 }, 'Group.Radio Option exists');
    assert.dom('div.input-group div.radio').hasText('Inner Content', 'Group.Radio Option renders inner content');
  });

  test('it renders a toggle', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliInputGroup @label="My Label" as |Group|>
        <Group.Toggle @options={{array "Item 1"}} as |option|>
          {{option}}
        </Group.Toggle>
      </DenaliInputGroup>
    `);

    assert.dom('div.input-group ul').exists('DenaliToggle renders a list.');
    assert.dom('div.input-group ul li').hasText('Item 1', 'DenaliToggle option exists and renders text.');
  });

  test('it renders a checkbox', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" as |Group|>
        <DenaliCheckbox>
          Test
        </DenaliCheckbox>
      </DenaliInputGroup>
    `);
    assert
      .dom('div.input-group .denali-checkbox')
      .hasText('Test', 'A denali checkbox is rendered with the specified text');
  });

  test('it renders a switch', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" as |Group|>
        <Group.Switch @offLabel="Lights Off" @onLabel="Lights On" />
      </DenaliInputGroup>
    `);
    assert.dom('div.input-group .denali-switch.switch').exists('Group.Switch component is rendered');
  });

  test('it renders a select', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliInputGroup @label="My Label" as |Group|>
        <DenaliSelect @options={{array "Item 1"}} @onChange={{this.onChange}} as |option|>
         {{option}}
        </DenaliSelect>
      </DenaliInputGroup>
    `);
    assert.dom('div.input-group div.input select').exists('Group.Select renders a select element.');
    assert.dom('div.input-group div.input option').hasText('Item 1', 'Group.Select option exists and renders text.');
  });

  test('it renders stacked', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" @isStacked={{true}} as |Group|>
        <Group.Checkbox>
          Test
        </Group.Checkbox>
      </DenaliInputGroup>
    `);
    assert.dom('div.is-stacked').exists('An input group is rendered stacked');
  });

  test('it renders responsively', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" @isResponsive={{true}} as |Group|>
        <Group.Input type="text" placeholder="Text Field" />
      </DenaliInputGroup>
    `);
    assert.dom('div.responsive').exists('An input group is rendered responsively');
  });

  test('it adjusts the label width automatically', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" @hasAutoWidth={{true}} as |Group|>
        <Group.Input type="text" placeholder="Text Field" />
      </DenaliInputGroup>
    `);
    assert.dom('div.auto').exists('An input group is rendered with label width adjusted automatically');
  });
});
