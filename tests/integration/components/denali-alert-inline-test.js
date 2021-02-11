import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-alert-inline', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders in block form', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliAlertInline>
      </DenaliAlertInline>
    `);

    assert.dom('div.alert.is-inline').exists('Inline alert renders in block form correctly');
  });

  test('it renders in non-block form', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliAlertInline/>
    `);

    assert.dom('div.alert.is-inline').exists('Inline alert renders in non-block form correctly');
  });

  test('it can yield a title sub component in block form', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <DenaliAlertInline as |Alert|>
        <Alert.Title>Test Title</Alert.Title>
      </DenaliAlertInline>
    `);

    assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline yields a title sub component');
  });

  test('it can render a title in non-block form', async function (assert) {
    assert.expect(1);

    await render(hbs`
        <DenaliAlertInline @title="Test Title"/>
    `);

    assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline renders a title');
  });

  test('it can yield a context sub component in block form', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliAlertInline as |Alert|>
        <Alert.Title>Test Title:</Alert.Title>
        <Alert.Context>Alert Context Details</Alert.Context>
      </DenaliAlertInline>
    `);

    assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
    assert
      .dom('.alert p')
      .hasText(
        'Test Title: Alert Context Details',
        'DenaliAlertInline renders both the title and context inside the p element'
      );
  });

  test('it can render a context block in non-block form', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliAlertInline @title="Test Title:" @context="Alert Context Details"/>
    `);

    assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
    assert
      .dom('.alert p')
      .hasText(
        'Test Title: Alert Context Details',
        'DenaliAlertInline renders both the title and context inside the p element'
      );
  });

  test('it can render different alert types', async function (assert) {
    assert.expect(5);

    await render(hbs`
      <DenaliAlertInline @title="Alert Title:" @context="Hello World!" @type={{this.type}}/>
    `);

    assert.dom('.alert.is-inline').hasNoClass('No class is added when type is not set');

    this.set('type', 'info');
    assert
      .dom('.alert.is-inline')
      .hasClass('has-bg-status-info', 'DenaliAlertInline has info styles when `@type` arg is set to info');

    this.set('type', 'warning');
    assert
      .dom('.alert.is-inline')
      .hasClass('has-bg-status-warning', 'DenaliAlertInline has warning styles when `@type` arg is set to warning');

    this.set('type', 'success');
    assert
      .dom('.alert.is-inline')
      .hasClass('has-bg-status-success', 'DenaliAlertInline has success styles when `@type` arg is set to success');

    this.set('type', 'danger');
    assert
      .dom('.alert.is-inline')
      .hasClass('has-bg-status-danger', 'DenaliAlertInline has danger styles when `@type` arg is set to danger');
  });
});
