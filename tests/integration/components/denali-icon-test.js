import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('icon', 'code');
    await render(hbs`
      <DenaliIcon
        @icon={{this.icon}}
      />
    `);
    assert.dom('i.d-icon.d-code').exists('DenaliIcon exists and has the correct icon class');

    this.set('icon', 'bug');
    assert.dom('i.d-icon.d-bug').exists('DenaliIcon exists and has the correct icon class');
  });

  test('it supports sizes', async function (assert) {
    await render(hbs`
      <DenaliIcon
        @icon="code"
        @size={{this.size}}
      >
        Link Text
      </DenaliIcon>
    `);

    this.set('size', 'extrasmall');
    assert
      .dom('.d-icon')
      .hasClass('is-extrasmall', 'DenaliIcon has a small size when `@size` arg is set to extrasmall');

    this.set('size', 'small');
    assert.dom('.d-icon').hasClass('is-small', 'DenaliIcon has a small size when `@size` arg is set to small');

    this.set('size', 'medium');
    assert.dom('.d-icon').hasClass('is-medium', 'DenaliIcon has a medium size when `@size` arg is set to medium');

    this.set('size', 'large');
    assert.dom('.d-icon').hasClass('is-large', 'DenaliIcon has a large size when `@size` arg is set to large');
  });
});
