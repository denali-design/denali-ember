import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table/header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTable::Header as |Header|>
        <Header.Row>row</Header.Row>
      </DenaliTable::Header>
    `);

    assert.dom('thead').exists('A table head is rendered');
    assert.dom('thead tr').hasText('row', 'A table row is yielded');
  });
});
