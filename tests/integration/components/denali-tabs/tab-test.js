import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-tabs/tab', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTabs::Tab>
        Inner Content
      </DenaliTabs::Tab>
    `);

    assert.dom('li span').hasText('Inner Content', 'DenaliTabs::Tab exists and renders inner content');
  });

  test('it can be set active', async function (assert) {
    await render(hbs`
      <DenaliTabs::Tab
        @isActive={{this.isActive}}
      >
        Inner Content
      </DenaliTabs::Tab>
    `);

    assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::Tab is not active by default');

    this.set('isActive', true);
    assert.dom('li').hasClass('is-active', 'DenaliTabs::Tab is active when setting `@isActive` arg to true');
  });

  test('it can be set disabled', async function (assert) {
    await render(hbs`
      <DenaliTabs::Tab
        @isDisabled={{this.isDisabled}}
      >
        Inner Content
      </DenaliTabs::Tab>
    `);

    assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::Tab is not disabled by default');

    this.set('isDisabled', true);
    assert.dom('li').hasClass('is-disabled', 'DenaliTabs::Tab is active when setting `@isDisabled` arg to true');
  });
});
