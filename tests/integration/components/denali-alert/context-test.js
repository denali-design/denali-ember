import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-alert/context', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliAlert::Context class="my-context">
        Inner Content
      </DenaliAlert::Context>
    `);

    assert.dom('p.my-context').hasText('Inner Content', 'DenaliAlert::Context exists and renders inner content');
  });
});
