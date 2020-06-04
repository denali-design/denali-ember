import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-chip', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliChip>
        Chip Text
      </DenaliChip>
    `);

    assert.dom('span.chips').exists({ count: 1 }, 'A chip is rendered');

    assert.dom('span.chips').hasText('Chip Text', 'Chip has yielded text');
  });

  test('it supports sizes', async function (assert) {
    await render(hbs`
      <DenaliChip @size={{this.size}}>
        Inner Content
      </DenaliChip>
    `);

    assert.dom('.chips').exists({ count: 1 }, 'DenaliChip can render without a size set');
    assert.dom('.chips').lacksClass(/is-[^\s]*/, 'Ensure that when no size class is not rendered');

    this.set('size', 'small');
    assert.dom('.chips').hasClass('is-small', 'DenaliChip has a small size when `@size` arg is set to small');
  });

  test('it supports color', async function (assert) {
    await render(hbs`
      <DenaliChip @textColor={{this.textColor}} @textShade={{this.textShade}} @backgroundColor={{this.backgroundColor}} @backgroundShade={{this.backgroundShade}}>
        Inner Content
      </DenaliChip>
    `);

    assert.dom('.chips').exists({ count: 1 }, 'DenaliChip can render without set colors');
    assert.dom('.chips').lacksClass(/is-[^\s]*-[^\s]*/, 'Ensure that when no textColor class is not rendered');
    assert
      .dom('.chips')
      .lacksClass(/has-bg-[^\s]*-[^\s]*/, 'Ensure that when no backgroundColor class is not rendered');

    this.set('textShade', '300');
    assert.dom('.chips').lacksClass(/is-[^\s]*-300/, 'Ensure that when no textColor class is not rendered with shade');

    this.set('backgroundShade', '300');
    assert
      .dom('.chips')
      .lacksClass(/has-bg-[^\s]*-300/, 'Ensure that when no backgroundColor class is not rendered with shade');

    this.set('textShade', undefined);
    this.set('backgroundShade', undefined);

    this.set('textColor', 'green');
    assert.dom('.chips').hasClass('is-green-500', 'with text color class is attached and shade is default 500');

    this.set('backgroundColor', 'orange');
    assert.dom('.chips').hasClass('has-bg-orange-500', 'with bg color class is attached and shade is default 500');

    this.set('textShade', '200');
    assert.dom('.chips').hasClass('is-green-200', 'with text shade class is attached and shade is updated');

    this.set('backgroundShade', '100');
    assert.dom('.chips').hasClass('has-bg-orange-100', 'with bg shade class is attached and shade is updated');
  });
});
