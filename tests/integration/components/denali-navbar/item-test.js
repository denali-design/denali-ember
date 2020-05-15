import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-navbar/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliNavbar::Item>
        Inner Content
      </DenaliNavbar::Item>
    `);
    assert.dom('span.nav-item').hasText('Inner Content', 'DenaliNavbar::Item exists and renders inner content');
  });

  test('it an be set active ', async function (assert) {
    await render(hbs`
      <DenaliNavbar::Item
        @isActive={{this.isActive}}
      >
        Inner Content
      </DenaliNavbar::Item>
    `);
    assert.dom('span.nav-item').doesNotHaveClass('is-active', 'DenaliNavbar::Item is not active by default');

    this.set('isActive', true);
    assert.dom('span.nav-item').hasClass('is-active', 'DenaliNavbar::Item is active when `@isActive` arg is true');
  });
});
