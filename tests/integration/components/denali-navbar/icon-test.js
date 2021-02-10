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

  test('name renders', async function (assert) {
    await render(hbs`
      <DenaliNavbar::Icon
        @icon="code"
        @name={{this.name}}
      />
    `);
    assert.dom('.nav-icon .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
    assert.dom('.icon-name').doesNotExist('DenaliNavbar::Icon exists and does not have a name.');

    this.set('name', 'My Icon');
    assert.dom('.icon-name').hasText('My Icon', 'DenaliNavbar::Icon exists and has a name.');
  });
});
