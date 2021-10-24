import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
<DenaliTable
  @isStriped={{this.isStriped}}
  @isCards={{this.isCards}}
  @isFrozen={{this.isFrozen}}
  as |Table|
>
  <Table.Header>head</Table.Header>
  <Table.Body>body</Table.Body>
  <Table.Footer>footer</Table.Footer>
</DenaliTable>
`;

module('Integration | Component | denali-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(TEMPLATE);

    assert.dom('table').exists('A table is rendered');
    assert.dom('table thead').hasText('head', 'A table head is yielded');
    assert.dom('table tbody').hasText('body', 'A table body is yielded');
    assert.dom('table tfoot').hasText('footer', 'A table footer is yielded');
  });

  test('it supports isFrozen', async function (assert) {
    await render(TEMPLATE);

    assert.dom('.table-container').doesNotExist('The table container does not exist by default');
    this.set('isFrozen', true);
    assert.dom('.table-container').hasClass('table-container__freeze', 'The table container exists and is frozen');
    assert.dom('.table-container table').exists('The table is rendered in the container');
  });
});
