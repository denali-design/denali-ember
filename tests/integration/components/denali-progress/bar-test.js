import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-progress/bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders denali progress bar', async function (assert) {
    await render(hbs`<DenaliProgress::Bar  @value={{50}} @color="green" @shade="500"/>`);

    assert
      .dom('.d-progress--bar')
      .hasClass(
        'has-bg-green-500',
        'DenaliProgress Bar displayed with green color when `@color` arg is set to green and `@shade` arg is set to 600'
      );
    assert
      .dom('.d-progress--bar')
      .hasAttribute('aria-valuenow', '50', 'DenaliProgress Bar with value 50 should be displayed');
  });
});
