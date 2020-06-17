import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-textarea', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(3);

    await render(hbs`<DenaliTextArea @value="My Input" />`);

    assert.dom('.input textarea').exists('An textarea is rendered within a wrapper div with class `.input`');
    assert.dom('.input textarea').isNotDisabled('The textarea is not disabled by default');
    assert.dom('.input textarea').hasValue('My Input', 'The textarea has the specified value');
  });

  test('states', async function (assert) {
    assert.expect(2);

    await render(hbs`<DenaliTextArea @state={{this.state}} />`);

    this.set('state', 'active');
    assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');

    this.set('state', 'warning');
    assert.dom('.input').hasClass('is-warning', 'The input wrapper has the appropriate class for warning');
  });

  test('disabled', async function (assert) {
    assert.expect(1);

    await render(hbs`<DenaliTextArea disabled={{true}}/>`);
    assert.dom('.input textarea').isDisabled('The textarea is disabled when specified');
  });

  test('placeholder', async function (assert) {
    assert.expect(1);

    await render(hbs`<DenaliTextArea placeholder="Text field"/>`);
    assert
      .dom('.input textarea')
      .hasAttribute('placeholder', 'Text field', 'The textarea is has the specified placeholder');
  });

  test('warning message', async function (assert) {
    assert.expect(2);

    await render(hbs`<DenaliTextArea @state="warning" @warningMsg={{this.warningMsg}} />`);
    assert.dom('.input.is-warning .message').hasNoText('No message is rendered when none is specified');

    this.set('warningMsg', 'Email Invalid');
    assert.dom('.input.is-warning .message').hasText('Email Invalid', 'The specified warning message is rendered');
  });

  test('actions', async function (assert) {
    assert.expect(2);

    this.set('handleInput', (event) => {
      assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
    });
    await render(hbs`<DenaliTextArea {{on 'input' this.handleInput}} />`);

    await fillIn('.input textarea', 'Random Text');

    this.set('handleInput', (event) => {
      assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
    });

    this.element.querySelector('.input textarea').value = 'More Random Text';
    this.element.querySelector('.input textarea').dispatchEvent(new Event('input'));
  });
});
