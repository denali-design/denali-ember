import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-table/footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTable::Footer as |Footer|>
        <Footer.Row>row</Footer.Row>
      </DenaliTable::Footer>
    `);

    assert.dom('tfoot').exists('A table foot is rendered');
    assert.dom('tfoot tr').hasText('row', 'A table row is yielded');
  });
});
