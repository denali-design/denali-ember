import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-menu/trigger', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliMenu::Trigger>
        Trigger
      </DenaliMenu::Trigger>
    `);

    assert.dom('a.menu-trigger').hasText('Trigger', 'The trigger renders the text within an anchor tag');
  });
});
