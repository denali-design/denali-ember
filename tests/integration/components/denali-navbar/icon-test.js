import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-navbar/icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('icon', 'code');
    await render(hbs`
      <DenaliNavbar::Icon
        @icon={{this.icon}}
      />
    `);
    assert.dom('.nav-icon .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');

    this.set('icon', 'bug');
    assert.dom('.nav-icon .d-icon.d-bug').exists('DenaliNavbar::Icon exists and has the correct icon class');
  });
});
