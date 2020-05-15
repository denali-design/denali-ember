import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupRouting from '../../../helpers/setup-router';

module('Integration | Component | denali-tabs/link-to-tab', function (hooks) {
  setupRenderingTest(hooks);
  setupRouting(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTabs::LinkToTab
        @route="four-oh-four"
      >
        Inner Content
      </DenaliTabs::LinkToTab>
    `);
    assert.dom('li a').hasText('Inner Content', 'DenaliTabs::LinkToTab exists and renders Inner Content');
    assert
      .dom('li a')
      .hasAttribute('href', '/four-oh-four', 'DenaliTabs::LinkToTab has correct href attribute for given LinkTo arg');
  });

  test('it can be set active', async function (assert) {
    this.set('route', 'four-oh-four');
    await render(hbs`
      <DenaliTabs::LinkToTab
        @route={{this.route}}
      >
        Inner Content
      </DenaliTabs::LinkToTab>
    `);

    assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::LinkToTab is not active when not on the current route');

    this.set('route', 'index');
    assert.dom('li').hasClass('is-active', 'DenaliTabs::LinkToTab is active when on the current route');
  });

  test('it can be set disabled', async function (assert) {
    await render(hbs`
      <DenaliTabs::LinkToTab
        @route="four-oh-four"
        @disabled={{this.disabled}}
      >
        Inner Content
      </DenaliTabs::LinkToTab>
    `);

    assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::LinkToTab is not disabled by default');

    this.set('disabled', true);
    assert.dom('li').hasClass('is-disabled', 'DenaliTabs::LinkToTab is disabled when disabled is set to true');
  });
});
