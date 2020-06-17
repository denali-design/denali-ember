import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(3);

    await render(hbs`<DenaliInput value="My Input" />`);

    assert.dom('.input input').exists('An input is rendered within a wrapper div with class `.input`');
    assert.dom('.input input').isNotDisabled('The input is not disabled by default');
    assert.dom('.input input').hasValue('My Input', 'The input has the specified value');
  });

  test('input types', async function (assert) {
    assert.expect(4);

    await render(hbs`<DenaliInput type={{this.type}}/>`);

    this.set('type', 'text');
    assert.dom('.input input').hasAttribute('type', 'text', 'The input has the default type attribute text');

    this.set('type', 'email');
    assert.dom('.input input').hasAttribute('type', 'email', 'The input type attribute has the value email');

    this.set('type', 'password');
    assert.dom('.input input').hasAttribute('type', 'password', 'The input type attribute has the value password');

    this.set('type', 'number');
    assert.dom('.input input').hasAttribute('type', 'number', 'The input type attribute has the value number');
  });

  test('input size', async function (assert) {
    assert.expect(2);

    await render(hbs`<DenaliInput @size={{this.size}} />`);
    this.set('size', 'small');
    assert.dom('.input').hasClass('is-small', 'The input wrapper has the appropriate class for small');

    this.set('size', 'medium');
    assert.dom('.input').hasClass('is-medium', 'The input wrapper has the appropriate class for medium');
  });

  test('states', async function (assert) {
    assert.expect(2);

    await render(hbs`<DenaliInput @state={{this.state}} />`);

    this.set('state', 'active');
    assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');

    this.set('state', 'warning');
    assert.dom('.input').hasClass('is-warning', 'The input wrapper has the appropriate class for warning');
  });

  test('disabled', async function (assert) {
    assert.expect(1);

    await render(hbs`<DenaliInput disabled={{true}}/>`);
    assert.dom('.input input').isDisabled('The input is disabled when specified');
  });

  test('placeholder', async function (assert) {
    assert.expect(1);

    await render(hbs`<DenaliInput type="email" placeholder="Email field"/>`);
    assert.dom('.input input').hasAttribute('placeholder', 'Email field', 'The input is has the specified placeholder');
  });

  test('is inverse', async function (assert) {
    assert.expect(2);

    await render(hbs`<DenaliInput @isInverse={{this.isInverse}} />`);
    assert.dom('.input').doesNotHaveClass('is-inverse', 'The input wrapper by default does not have the inverse class');

    this.set('isInverse', 'true');
    assert.dom('.input').hasClass('is-inverse', 'The input wrapper has the inverse class when specified');
  });

  test('warning message', async function (assert) {
    assert.expect(2);

    await render(hbs`<DenaliInput @state="warning" @warningMsg={{this.warningMsg}} />`);
    assert.dom('.input.is-warning .message').hasNoText('No message is rendered when none is specified');

    this.set('warningMsg', 'Email Invalid');
    assert.dom('.input.is-warning .message').hasText('Email Invalid', 'The specified warning message is rendered');
  });

  test('icons', async function (assert) {
    assert.expect(6);

    await render(hbs`<DenaliInput
      @iconFront={{this.iconFront}}
      @iconFrontClass="front-icon"
      @iconBack={{this.iconBack}}
      @iconBackClass="back-icon"
    />`);

    assert
      .dom('.input.has-icon-front')
      .doesNotExist('The icon-front class is not applied to the input when no front icon is specified');
    assert
      .dom('.input.has-icon-back')
      .doesNotExist('The icon-back class is not applied to the input when no back icon is specified');

    this.set('iconFront', 'share');
    assert
      .dom('.input.has-icon-front')
      .exists('The icon-front class is applied to the input when front icon is specified');
    assert
      .dom('.input.has-icon-front .front-icon')
      .hasClass('d-share', 'The correct denali icon is rendered as the front icon');

    this.set('iconBack', 'close-circle-solid');
    assert
      .dom('.input.has-icon-back')
      .exists('The icon-back class is applied to the input when back icon is specified');
    assert
      .dom('.input.has-icon-back .back-icon')
      .hasClass('d-close-circle-solid', 'The correct denali icon is rendered as the back icon');
  });

  test('actions', async function (assert) {
    assert.expect(2);

    this.set('handleInput', (event) => {
      assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
    });
    await render(hbs`<DenaliInput
      {{on 'input' (action this.handleInput)}}
    />`);

    await fillIn('.input input', 'Random Text');

    this.set('handleInput', (event) => {
      assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
    });

    this.element.querySelector('.input input').value = 'More Random Text';
    this.element.querySelector('.input input').dispatchEvent(new Event('input'));
  });
});
