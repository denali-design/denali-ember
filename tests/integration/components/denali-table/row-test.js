import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table/row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTable::Row as |Row|>
        <Row.HeaderCell>header</Row.HeaderCell>
        <Row.Cell>cell</Row.Cell>
      </DenaliTable::Row>
    `);

    assert.dom('tr').exists('A table row is rendered');
    assert.dom('tr th').hasText('header', 'A table header cell is yielded');
    assert.dom('tr td').hasText('cell', 'A table cell is yielded');
  });
});
