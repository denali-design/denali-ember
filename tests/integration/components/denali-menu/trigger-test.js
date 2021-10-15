import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-menu/trigger', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliMenu::Trigger @class="class-arg">
        Trigger
      </DenaliMenu::Trigger>
    `);

    assert.dom('div.menu-trigger').hasClass('class-arg', 'The trigger class is present');
    assert.dom('div.menu-trigger').hasText('Trigger', 'The trigger renders the text within an anchor tag');
  });
});
