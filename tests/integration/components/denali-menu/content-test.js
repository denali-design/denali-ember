import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-menu/content', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliMenu::Content @class="class-arg">
        Inner Content
      </DenaliMenu::Content>
    `);

    assert.dom('div.menu-content').hasClass('class-arg', 'The content class is present');
    assert.dom('div.menu-content').hasText('Inner Content', 'Menu content div is rendered');
  });
});
