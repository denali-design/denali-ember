import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-navbar/control', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliNavbar::Control>
        Inner Content
      </DenaliNavbar::Control>
    `);

    assert.dom('div.nav-control').hasText('Inner Content', 'DenaliNavbar::Control exists and renders inner content');
  });
});
