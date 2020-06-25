import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DenaliTable />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <DenaliTable>
        template block text
      </DenaliTable>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it can yield a `Tr` sub component', async function (assert) {
    await render(hbs`
      <DenaliTable as |Table|>
        <Table.tr>
          A row
        </Table.tr>
      </DenaliTable>
    `);

    assert.dom('.table tr').exists();
  });

  test('it supports stripped', async function (assert) {
    this.set('isStriped', 'true');
    await render(hbs`
      <DenaliTable
        @isStriped={{this.isStriped}}
      >
      </DenaliTable>
    `);
    assert.dom('.table').hasClass('is-striped', 'DenaliTable is striped');
  });
});
