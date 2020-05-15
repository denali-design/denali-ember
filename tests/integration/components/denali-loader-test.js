import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-loader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<DenaliLoader />`);
    assert.dom('div.loader').exists('DenaliLoader can render.');
  });

  test('it supports sizes', async function (assert) {
    await render(hbs`
      <DenaliLoader @size={{this.size}} />
    `);

    this.set('size', 'extrasmall');
    assert
      .dom('.loader')
      .hasClass('is-extrasmall', 'DenaliLoader has an extrasmall size when `@size` arg is set to extrasmall');

    this.set('size', 'small');
    assert.dom('.loader').hasClass('is-small', 'DenaliLoader has a small size when `@size` arg is set to small');

    this.set('size', 'medium');
    assert.dom('.loader').hasClass('is-medium', 'DenaliLoader has a medium size when `@size` arg is set to medium');

    this.set('size', 'large');
    assert.dom('.loader').hasClass('is-large', 'DenaliLoader has a large size when `@size` arg is set to large');
  });

  test('it supports inverse colors', async function (assert) {
    await render(hbs`
      <DenaliLoader @isInverse={{this.isInverse}} />
    `);

    assert.dom('.loader').doesNotHaveClass('is-inverse', 'DenaliLoader does not have inverse styling by default');

    this.set('isInverse', 'true');
    assert
      .dom('.loader')
      .hasClass('is-inverse', 'DenaliLoader has inverse styling when `@isInverse` arg is set to true');
  });
});
