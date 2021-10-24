import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table/head', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTable::Head as |Head|>
        <Head.Row>row</Head.Row>
      </DenaliTable::Head>
    `);

    assert.dom('thead').exists('A table head is rendered');
    assert.dom('thead tr').hasText('row', 'A table row is yielded');
  });
});
