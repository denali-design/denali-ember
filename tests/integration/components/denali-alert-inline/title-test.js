import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-alert-inline/title', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliAlertInline::Title class="my-title">
        Inner Content
      </DenaliAlertInline::Title>
    `);

    assert.dom('span.is-bold.my-title').hasText('Inner Content', 'DenaliAlertInline::Title exists and renders inner content');
  });
});
