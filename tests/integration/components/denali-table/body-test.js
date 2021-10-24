import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table/body', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTable::Body as |Body|>
        <Body.Row>row</Body.Row>
      </DenaliTable::Body>
    `);

    assert.dom('tbody').exists('A table body is rendered');
    assert.dom('tbody tr').hasText('row', 'A table row is yielded');
  });
});
