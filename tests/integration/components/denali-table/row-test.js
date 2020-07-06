import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table/row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DenaliTable::Row />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <DenaliTable::Row>
        template block text
      </DenaliTable::Row>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it can yield a `th` sub component', async function (assert) {
    await render(hbs`
    <DenaliTable as |Table|>
      <Table.tr as |Tr|>
        <Tr.th>Its a header</Tr.th>
      </Table.tr>
    </DenaliTable>
    `);

    assert.dom('.table tr th').exists();
  });

  test('it can yield a `td` sub component', async function (assert) {
    await render(hbs`
    <DenaliTable as |Table|>
      <Table.tr as |Tr|>
        <Tr.td>Its a data element</Tr.td>
      </Table.tr>
    </DenaliTable>
    `);

    assert.dom('.table tr td').exists();
  });
});
