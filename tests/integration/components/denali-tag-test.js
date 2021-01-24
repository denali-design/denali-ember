import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliTag>
        Inner Content
      </DenaliTag>
    `);

    assert.dom('span.tag').hasText('Inner Content', 'DenaliTag exists and renders inner content');
  });

  test('states', async function (assert) {
    await render(hbs`
      <DenaliTag @state={{this.state}}>
        Inner Content
      </DenaliTag>
    `);

    assert.dom('span.tag').exists('DenaliTag can render without a state set');

    this.set('state', 'disabled');
    assert
      .dom('span.tag')
      .hasClass('is-disabled', 'DenaliTag can be set disabled by setting the `@state` arg to `disabled`');

    this.set('state', 'active');
    assert.dom('span.tag').hasClass('is-active', 'DenaliTag can be set active by setting the `@state` arg to `active`');
  });

  test('outlined', async function (assert) {
    await render(hbs`
      <DenaliTag @isOutlined={{this.outlined}}>
        Inner Content
      </DenaliTag>
    `);

    assert.dom('span.tag').doesNotHaveClass('outlined', 'DenaliTag is not outlined by default');

    this.set('outlined', true);
    assert.dom('span.tag').hasClass('outlined', 'DenaliTag can be outlined by setting the `@isOutlined` arg to true');
  });

  test('small', async function (assert) {
    await render(hbs`
      <DenaliTag @isSmall={{this.isSmall}}>
        Inner Content
      </DenaliTag>
    `);

    assert.dom('span.tag').doesNotHaveClass('is-small', 'DenaliTag is not small by default');

    this.set('isSmall', true);
    assert.dom('span.tag').hasClass('is-small', 'DenaliTag can be made smaller by setting the `@isSmall` arg to true');
  });

  test('icons', async function (assert) {
    assert.expect(12);

    await render(hbs`
      <DenaliTag
        @iconFront={{this.iconFront}}
        @iconFrontClass={{this.iconFrontClass}}
        @onIconFrontClick={{this.onIconFrontClick}}
        @iconBack={{this.iconBack}}
        @iconBackClass={{this.iconBackClass}}
        @onIconBackClick={{this.onIconBackClick}}
      >Tag Content</DenaliTag>
    `);

    assert
      .dom('span.tag')
      .doesNotHaveClass('has-icon-front', 'DenaliTag does not have the `has-icon-front` class by default');
    assert
      .dom('span.tag')
      .doesNotHaveClass('has-icon-back', 'DenaliTag does not have the `has-icon-back` class by default');

    this.set('iconFront', 'check');
    assert
      .dom('span.tag')
      .hasClass('has-icon-front', 'DenaliTag has the `has-icon-front` class when iconFront is specified');
    assert.dom('span.tag .d-icon').hasClass('d-check', 'DenaliTag has the specified icon in the front');

    const iconFrontClass = 'iconFrontClass';
    assert
      .dom('span.tag .d-icon')
      .doesNotHaveClass(iconFrontClass, 'DenaliTag does not have `iconFrontClass` class by default');
    this.set('iconFrontClass', iconFrontClass);
    assert.dom('span.tag .d-check').hasClass(iconFrontClass, 'DenaliTag has the specified `iconFrontClass`');

    this.set('onIconFrontClick', () => assert.ok(true, '`onIconFrontClick` fires on click'));
    await click('.d-check');

    // unset the front icon to check the back icon
    this.set('iconFront', undefined);
    this.set('onIconFrontClick', undefined);

    this.set('iconBack', 'close');
    assert
      .dom('span.tag')
      .hasClass('has-icon-back', 'DenaliTag has the `has-icon-back` class when iconBack is specified');
    assert.dom('span.tag .d-icon').hasClass('d-close', 'DenaliTag has the specified icon in the back');

    const iconBackClass = 'iconBackClass';
    assert
      .dom('span.tag .d-close')
      .doesNotHaveClass(iconBackClass, 'DenaliTag does not have `iconBackClass` class by default');
    this.set('iconBackClass', iconBackClass);
    assert.dom('span.tag .d-icon').hasClass(iconBackClass, 'DenaliTag has the specified `iconBackClass`');

    this.set('onIconBackClick', () => assert.ok(true, '`onIconBackClick` fires on click'));
    await click('.d-close');
  });
});
