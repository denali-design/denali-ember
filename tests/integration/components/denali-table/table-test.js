import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
<DenaliTable::Table @isStriped={{this.isStriped}} @isCards={{this.isCards}} as |Table|>
  <Table.Header>head</Table.Header>
  <Table.Body>body</Table.Body>
  <Table.Footer>footer</Table.Footer>
</DenaliTable::Table>
`;

module('Integration | Component | denali-table/table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(TEMPLATE);

    assert.dom('table').exists('A table is rendered');
    assert.dom('table thead').hasText('head', 'A table head is yielded');
    assert.dom('table tbody').hasText('body', 'A table body is yielded');
    assert.dom('table tfoot').hasText('footer', 'A table footer is yielded');
  });

  test('it supports isStriped', async function (assert) {
    await render(TEMPLATE);

    assert
      .dom('table')
      .doesNotHaveClass('is-striped', 'DenaliTableTable has non striped styles when `@isStriped` arg is not set');
    this.set('isStriped', true);
    assert
      .dom('table')
      .hasClass('is-striped', 'DenaliTableTable has striped styles when `@isStriped` arg is set to true');
  });

  test('it supports isCards', async function (assert) {
    await render(TEMPLATE);

    assert
      .dom('table')
      .doesNotHaveClass('is-cards', 'DenaliTableTable has non card styles when `@isCards` arg is not set');
    this.set('isCards', true);
    assert.dom('table').hasClass('is-cards', 'DenaliTableTable has cards styles when `@isCards` arg is set to true');
  });
});
