import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliButton>
        Inner Content
      </DenaliButton>
    `);

    assert.dom('button.button').hasText('Inner Content', 'DenaliButton exists and renders inner content');
  });

  test('it can be disabled', async function (assert) {
    await render(hbs`
      <DenaliButton disabled={{this.isDisabled}}>
        Inner Content
      </DenaliButton>
    `);
    assert.dom('.button').isNotDisabled('DenaliButton is not disabled by default');

    this.set('isDisabled', true);
    assert.dom('.button').isDisabled('DenaliButton can be disabled by setting the `disabled` attribute to true');
  });

  test('it supports types', async function (assert) {
    await render(hbs`
      <DenaliButton @type={{this.type}}>
        Inner Content
      </DenaliButton>
    `);

    assert.dom('.button').hasAttribute('type', 'button', 'DenaliButton has a type of `button` by default');

    this.set('type', 'submit');
    assert
      .dom('.button')
      .hasAttribute('type', 'submit', 'DenaliButton has a submit type when `type` arg is set to submit');
  });

  test('it an be set active ', async function (assert) {
    await render(hbs`
      <DenaliButton @isActive={{this.isActive}}>
        Inner Content
      </DenaliButton>
    `);

    assert.dom('.button').doesNotHaveClass('is-active', 'DenaliButton is not active by default');

    this.set('isActive', true);
    assert
      .dom('.button')
      .hasClass('is-active', 'DenaliButton can be set active by setting the `@isActive` arg to true');
  });

  test('it supports styles', async function (assert) {
    await render(hbs`
      <DenaliButton @style={{this.style}}>
        Inner Content
      </DenaliButton>
    `);

    assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style by default');

    this.set('style', 'solid');
    assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style when `@style` arg is set to solid');

    this.set('style', 'outline');
    assert
      .dom('.button')
      .hasClass('is-outline', 'DenaliButton has a outline style when `@style` arg is set to outline');

    this.set('style', 'ghost');
    assert.dom('.button').hasClass('is-ghost', 'DenaliButton has a ghost style when `@style` arg is set to ghost');

    this.set('style', 'text');
    assert.dom('.button').hasClass('is-text', 'DenaliButton has a text style when `@style` arg is set to text');

    this.set('style', 'danger');
    assert.dom('.button').hasClass('is-danger', 'DenaliButton has a danger style when `@style` arg is set to danger');
  });

  test('it supports inverse colors', async function (assert) {
    await render(hbs`
      <DenaliButton @isInverse={{this.isInverse}}>
        Inner Content
      </DenaliButton>
    `);

    assert.dom('.button').doesNotHaveClass('is-inverse', 'DenaliButton does not have inverse styling by default');

    this.set('isInverse', 'true');
    assert
      .dom('.button')
      .hasClass('is-inverse', 'DenaliButton has inverse styling when `@isInverse` arg is set to true');
  });

  test('it supports sizes', async function (assert) {
    await render(hbs`
      <DenaliButton @size={{this.size}}>
        Inner Content
      </DenaliButton>
    `);

    assert.dom('.button').exists('DenaliButton can render without a size set');

    this.set('size', 'small');
    assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');

    this.set('size', 'medium');
    assert.dom('.button').hasClass('is-medium', 'DenaliButton has a medium size when `@size` arg is set to medium');

    this.set('size', 'large');
    assert.dom('.button').hasClass('is-large', 'DenaliButton has a large size when `@size` arg is set to large');
  });

  test('it supports isFull', async function (assert) {
    await render(hbs`
      <DenaliButton @size={{this.size}} @isFull={{this.isFull}}>
        Inner Content
      </DenaliButton>
    `);

    assert.dom('.button').exists('DenaliButton can render without a size set');
    assert
      .dom('.button')
      .doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is undefined');

    this.set('isFull', true);
    assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true');

    this.set('size', 'small');
    assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
    assert
      .dom('.button')
      .hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true and size is set to small');

    this.set('isFull', false);
    assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
    assert
      .dom('.button')
      .doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is set to false');
  });

  test('it supports icons', async function (assert) {
    await render(hbs`
      <DenaliButton @style="solid" @icon={{this.icon}} @iconOnly={{this.iconOnly}}>
        Share
      </DenaliButton>
    `);

    assert.dom('.button .d-icon').doesNotExist('No icon is rendered when none is specified');
    assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class by default');

    this.set('icon', 'share');
    assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
    assert.dom('.button .d-icon').hasClass('d-share', 'DenaliButton renders the specified icon');
    assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class');

    this.set('iconOnly', true);
    assert.dom('.button').hasClass('has-icon', 'DenaliButton has a `has-icon` class when iconOnly arg is set to true');
  });

  test('it supports loading', async function (assert) {
    await render(hbs`
      <DenaliButton 
        @isLoading={{this.isLoading}} 
        @icon="save"
      >
        Save
      </DenaliButton>
    `);

    assert.dom('.button').doesNotHaveClass('has-loader', 'DenaliButton does not have a `has-loader` class by default');
    assert.dom('.button').hasText('Save', 'DenaliButton renders inner text by default');
    assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
    assert.dom('.button div.loader').doesNotExist('DenaliButton does render a loader by default');

    this.set('isLoading', true);
    assert.dom('.button').hasClass('has-loader', 'DenaliButton has `has-loader` class when `@isLoading` arg is true');
    assert.dom('.button').hasNoText('DenaliButton does not render inner text when `@isLoading` arg is true');
    assert.dom('.button .d-icon').doesNotExist('DenaliButton does not render an icon when `@isLoading` arg is true');
    assert.dom('.button div.loader').exists('DenaliButton renders a loader when `@isLoading` arg is true');
  });
});
