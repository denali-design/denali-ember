import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders in block form', async function (assert) {
    await render(hbs`
      <DenaliAlert>
      </DenaliAlert>
    `);
    assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');
  });

  test('it renders in non-block form', async function (assert) {
    await render(hbs`
      <DenaliAlert/>
    `);
    assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');
  });

  test('it can yield a title sub component in block form', async function (assert) {
    await render(hbs`
      <DenaliAlert as |Alert|>
        <Alert.Title>Alert Title!!1</Alert.Title>
      </DenaliAlert>
    `);

    assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert yields a title sub component');
  });

  test('it can render a title in non-block form', async function (assert) {
    await render(hbs`
        <DenaliAlert @title="Alert Title!!1"/>
    `);

    assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert renders a title');
  });

  test('it can yield a context sub component in block form', async function (assert) {
    await render(hbs`
      <DenaliAlert as |Alert|>
        <Alert.Title>Alert Title!!1</Alert.Title>
        <Alert.Context>Alert Context Details</Alert.Context>
      </DenaliAlert>
    `);

    assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');
  });

  test('it can render a context block in non-block form', async function (assert) {
    await render(hbs`
      <DenaliAlert @title="Alert Title!!1" @context="Alert Context Details"/>
    `);

    assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');
  });

  test('it supports block styles', async function (assert) {
    await render(hbs`
        <DenaliAlert @title="Alert Title!!1" @isBlock={{this.isBlock}}/>
    `);

    assert.dom('.alert').doesNotHaveClass('is-block', 'DenaliAlert does not have block styles by default');

    this.set('isBlock', true);
    assert.dom('.alert').hasClass('is-block', 'DenaliAlert has block styles when `@isBlock` arg is set to true');
  });

  test('it can render different alert types', async function (assert) {
    await render(hbs`
        <DenaliAlert @title="Alert Title!!1" @type={{this.type}}/>
    `);

    assert.dom('.alert .d-icon').hasClass('d-notification', 'DenaliAlert renders the notification icon by default');

    this.set('type', 'info');
    assert.dom('.alert').hasClass('is-info', 'DenaliAlert has info styles when `@type` arg is set to info');
    assert
      .dom('.alert .d-icon')
      .hasClass(
        'd-information-circle',
        'DenaliAlert renders the information-circle icon when `@type` arg is set to info'
      );

    this.set('type', 'warning');
    assert.dom('.alert').hasClass('is-warning', 'DenaliAlert has warning styles when `@type` arg is set to warning');
    assert
      .dom('.alert .d-icon')
      .hasClass('d-warning', 'DenaliAlert renders the warning icon when `@type` arg is set to warning');

    this.set('type', 'success');
    assert.dom('.alert').hasClass('is-success', 'DenaliAlert has success styles when `@type` arg is set to success');
    assert
      .dom('.alert .d-icon')
      .hasClass('d-success', 'DenaliAlert renders the success icon when `@type` arg is set to success');

    this.set('type', 'danger');
    assert.dom('.alert').hasClass('is-danger', 'DenaliAlert has danger styles when `@type` arg is set to danger');
    assert
      .dom('.alert .d-icon')
      .hasClass('d-stop-warning', 'DenaliAlert renders the danger icon when `@type` arg is set to danger');
  });

  test('it renders solid icons when `@isBlock` arg is true', async function (assert) {
    await render(hbs`
      <DenaliAlert
        @title="Alert Title!!1"
        @type={{this.type}}
        @isBlock={{true}}
      />
    `);

    assert
      .dom('.alert .d-icon')
      .hasClass(
        'd-notification-solid',
        'DenaliAlert renders the solid notification icon by default when `@isBlock` is set to true'
      );

    this.set('type', 'info');
    assert
      .dom('.alert .d-icon')
      .hasClass(
        'd-information-circle-solid',
        'DenaliAlert renders the solid information-circle icon when `@type` arg is set to info and `@isBlock` arg is set to true'
      );

    this.set('type', 'warning');
    assert
      .dom('.alert .d-icon')
      .hasClass(
        'd-warning-solid',
        'DenaliAlert renders the solid warning icon when `@type` arg is set to warning and `@isBlock` arg is set to true'
      );

    this.set('type', 'success');
    assert
      .dom('.alert .d-icon')
      .hasClass(
        'd-success-solid',
        'DenaliAlert renders the solid success icon when `@type` arg is set to success and `@isBlock` arg is set to true'
      );

    this.set('type', 'danger');
    assert
      .dom('.alert .d-icon')
      .hasClass(
        'd-stop-warning-solid',
        'DenaliAlert renders the solid danger icon when `@type` arg is set to danger and `@isBlock` arg is set to true'
      );
  });

  test('it can render a close button', async function (assert) {
    assert.expect(3);

    await render(hbs`
        <DenaliAlert @title="Alert Title!!1" @onClose={{this.onClose}}/>
    `);

    assert.dom('.alert span.close').doesNotExist('DenaliAlert does not render a close button by default');

    this.set('onClose', (e) => {
      assert.equal(e.type, 'click', 'DenaliAlert will call `@onClose` action when close button is clicked');
    });
    assert.dom('.alert span.close').exists('DenaliAlert renders a close button when `@onClose` arg is provided');
    await click('.close');
  });
});
