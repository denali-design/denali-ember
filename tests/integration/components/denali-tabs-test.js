import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-tabs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTabs>
        Inner Content
      </DenaliTabs>
    `);

    assert.dom('div.tabs ul').hasText('Inner Content', 'DenaliTabs exists and renders inner content');
  });

  test('it supports styles', async function (assert) {
    await render(hbs`
      <DenaliTabs
        @style={{this.style}}
      >
        Inner Content
      </DenaliTabs>
    `);
    assert.dom('.tabs').hasClass('is-primary', 'DenaliTabs renders a primary style by default');

    this.set('style', 'secondary');
    assert
      .dom('.tabs')
      .hasClass('is-secondary', 'DenaliTabs renders a secondary style by setting `@style` arg to secondary');
  });

  test('it supports alignment', async function (assert) {
    await render(hbs`
      <DenaliTabs
        @alignment={{this.alignment}}
      >
        Inner Content
      </DenaliTabs>
    `);
    assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal alignment by default');

    this.set('alignment', 'vertical');
    assert
      .dom('.tabs')
      .hasClass('is-vertical', 'DenaliTabs renders a vertical alignment by setting `@alignment` arg to vertical');
  });

  test('it can yield a `Tab` sub component', async function (assert) {
    await render(hbs`
      <DenaliTabs as |Tabs|>
        <Tabs.Tab>
          The Greatest Tab
        </Tabs.Tab>
      </DenaliTabs>
    `);

    assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliTabs can yield a `Tab` sub component');
  });

  test('it can yield a `LinkToTab` sub component', async function (assert) {
    await render(hbs`
      <DenaliTabs as |Tabs|>
        <Tabs.LinkToTab
          @route="/"
        >
          The Greatest Tab
        </Tabs.LinkToTab>
      </DenaliTabs>
    `);
    assert.dom('.tabs li.ember-view a').hasText('The Greatest Tab', 'DenaliTabs can yield a `LinkToTab` sub component');
  });
});
