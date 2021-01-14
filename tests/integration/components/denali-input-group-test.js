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

  test('it yields', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label">
        <DenaliInput type="text" placeholder="Text Field" />
      </DenaliInputGroup>
    `);

    assert.dom('div.input-group div.input input').exists('`DenaliInputGroup` yields inner content');
  });

  test('it renders stacked', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" @isStacked={{true}}>
        <DenaliCheckbox>
          Test
        </DenaliCheckbox>
      </DenaliInputGroup>
    `);
    assert.dom('div.is-stacked').exists('An input group is rendered stacked');
  });

  test('it renders responsively', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" @isResponsive={{true}}>
        <DenaliInput type="text" placeholder="Text Field" />
      </DenaliInputGroup>
    `);
    assert.dom('div.responsive').exists('An input group is rendered responsively');
  });

  test('it adjusts the label width automatically', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliInputGroup @label="My Label" @hasAutoWidth={{true}}>
        <DenaliInput type="text" placeholder="Text Field" />
      </DenaliInputGroup>
    `);
    assert.dom('div.auto').exists('An input group is rendered with label width adjusted automatically');
  });
});
