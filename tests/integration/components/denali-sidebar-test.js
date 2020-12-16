import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-sidebar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliSidebar>
        The Greatest Sidebar
      </DenaliSidebar>
    `);

    assert.dom('.tabs').hasClass('is-primary', 'DenaliSidebar renders a primary style by default');
    assert.dom('.tabs').hasClass('is-vertical', 'DenaliSidebar renders a vertical style by default');
  });

  test('it can yield a `Tab` sub component', async function (assert) {
    await render(hbs`
      <DenaliSidebar as |Sidebar|>
        <Sidebar.Tab>
          The Greatest Tab
        </Sidebar.Tab>
      </DenaliSidebar>
    `);

    assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliSidebar can yield a `Tab` sub component');
  });

  test('it can yield a `LinkToTab` sub component', async function (assert) {
    await render(hbs`
      <DenaliSidebar as |Sidebar|>
        <Sidebar.LinkToTab
          @route="/"
        >
          The Greatest Tab
        </Sidebar.LinkToTab>
      </DenaliSidebar>
    `);
    assert
      .dom('.tabs li.ember-view a')
      .hasText('The Greatest Tab', 'DenaliSidebar can yield a `LinkToTab` sub component');
  });
});
