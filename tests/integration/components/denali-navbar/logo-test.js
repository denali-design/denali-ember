import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-navbar/logo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<DenaliNavbar::Logo @src="logo.png"/>`);
    assert.dom('img').hasClass('nav-brand', 'DenaliNavbar::Logo renders an img with the correct class');
    assert
      .dom('img.nav-brand')
      .hasAttribute('src', 'logo.png', 'DenaliNavbar::Logo renders src attr with the correct value');
    assert
      .dom('img.nav-brand')
      .hasAttribute('alt', 'logo', 'DenaliNavbar::Logo renders alt attr with the default value');
  });
});
