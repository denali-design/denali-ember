import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table/th', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DenaliTable::Th />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <DenaliTable::Th>
        template block text
      </DenaliTable::Th>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('alignment', async function (assert) {
    assert.expect(4);

    await render(hbs`
    <DenaliTable as |Table|>
      <Table.tr as |Tr|>
        <Tr.th>Its a data element</Tr.th>
      </Table.tr>
    </DenaliTable>
    `);

    assert.dom('.table tr th').doesNotHaveClass('is-left', 'The th does not have the `is-left` class by default');
    assert.dom('.table tr th').doesNotHaveClass('is-right', 'The th does not have the `is-right` class by default');

    this.set('alignContent', 'left');
    await render(hbs`
    <DenaliTable as |Table|>
      <Table.tr as |Tr|>
        <Tr.th @alignContent={{this.alignContent}}>Its a data element</Tr.th>
      </Table.tr>
    </DenaliTable>
    `);
    assert.dom('.table tr th').hasClass('is-left', 'The th has the `is-left` class when alignContent is set to left');
    this.set('alignContent', 'right');
    await render(hbs`
    <DenaliTable as |Table|>
      <Table.tr as |Tr|>
        <Tr.th @alignContent={{this.alignContent}}>Its a data element</Tr.th>
      </Table.tr>
    </DenaliTable>
    `);
    assert
      .dom('.table tr th')
      .hasClass('is-right', 'The th has the `is-right` class when alignContent is set to right');
  });
});
