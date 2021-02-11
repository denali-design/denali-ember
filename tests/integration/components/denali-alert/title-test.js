import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-alert/title', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliAlert::Title class="my-title">
        Inner Content
      </DenaliAlert::Title>
    `);

    assert.dom('h5.my-title').hasText('Inner Content', 'DenaliAlert::Title exists and renders inner content');
  });
});
