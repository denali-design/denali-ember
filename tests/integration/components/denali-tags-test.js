import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-tags', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`

      <DenaliTags as |Tags|>
        <Tags.Tag>Inner Content</Tags.Tag>
      </DenaliTags>
    `);

    assert.dom('span.tag').hasText('Inner Content', 'DenaliTag exists and renders inner content');
  });

  test('states', async function (assert) {
    await render(hbs`
      <DenaliTags as |Tags|>
        <Tags.Tag @state={{this.state}}>Inner Content</Tags.Tag>
      </DenaliTags>
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
      <DenaliTags as |Tags|>
        <Tags.Tag @isOutlined={{this.outlined}}>Inner Content</Tags.Tag>
      </DenaliTags>
    `);

    assert.dom('span.tag').doesNotHaveClass('outlined', 'DenaliTag is not outlined by default');

    this.set('outlined', true);
    assert.dom('span.tag').hasClass('outlined', 'DenaliTag can be outlined by setting the `@isOutlined` arg to true');
  });

  test('small', async function (assert) {
    await render(hbs`
      <DenaliTags as |Tags|>
        <Tags.Tag @isSmall={{this.isSmall}}>Inner Content</Tags.Tag>
      </DenaliTags>
    `);

    assert.dom('span.tag').doesNotHaveClass('is-small', 'DenaliTag is not small by default');

    this.set('isSmall', true);
    assert.dom('span.tag').hasClass('is-small', 'DenaliTag can be made smaller by setting the `@isSmall` arg to true');
  });

  test('icons', async function (assert) {
    await render(hbs`
      <DenaliTags as |Tags|>
        <Tags.Tag
          @iconFront={{this.iconFront}}
          @iconBack={{this.iconBack}}
        >
          Inner Content
        </Tags.Tag>
      </DenaliTags>
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

    // unset the front icon to check the back icon
    this.set('iconFront', undefined);
    this.set('iconBack', 'close');
    assert
      .dom('span.tag')
      .hasClass('has-icon-back', 'DenaliTag has the `has-icon-back` class when iconBack is specified');
    assert.dom('span.tag .d-icon').hasClass('d-close', 'test');
  });
});
