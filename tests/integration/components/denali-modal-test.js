import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(6);

    this.set('isOpen', false);
    await render(hbs`
      <DenaliModal
        class="denali-modal"
        @isOpen={{this.isOpen}}
        @onClose={{fn (mut this.isOpen) false}}
        as | Modal |
      >
        <Modal.Content @class="denali-modal__content">Content</Modal.Content>
      </DenaliModal>
    `);

    assert.dom('.denali-modal.modal').doesNotExist('Denali Modal is hidden by default');
    assert.dom('.denali-modal .modal').doesNotExist('Denali Modal is not rendered by default');

    this.set('isOpen', true);
    assert.dom('.denali-modal.modal').exists('Denali Modal is rendered only when isActive is set to true');
    assert
      .dom('.denali-modal.modal .denali-modal__content')
      .hasText('Content', 'Denali Modal Content is rendered in the modal');
    assert.dom('.denali-modal.modal .close').exists('Denali Modal renders a close icon in the modal');

    await click('.denali-modal.modal .close');
    assert.dom('.denali-modal.modal').doesNotExist('The Denali Modal is hidden when close is clicked');
  });

  test('Full screen', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliModal
        class="denali-modal"
        @isOpen={{true}}
        @isFullScreen={{this.fullScreen}}
        @onClose={{fn (mut this.isOpen) false}}
        as | Modal |
      >
        <Modal.Content>Content</Modal.Content>
      </DenaliModal>
    `);

    assert
      .dom('.denali-modal .modal-container')
      .doesNotHaveClass('.is-full', 'The modal container does not have the `is-full` class by default');
    this.set('fullScreen', true);
    assert
      .dom('.denali-modal .modal-container')
      .hasClass('is-full', 'The modal container has the `is-full` when fullScreen arg is set to true');
  });

  test('header and footer', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliModal
        class="denali-modal"
        @isOpen={{true}}
        @onClose={{fn (mut this.isOpen) false}}
        as | Modal |
      >
        <Modal.Header @class="denali-modal__header">Header</Modal.Header>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer @class="denali-modal__footer">Footer</Modal.Footer>
      </DenaliModal>
    `);

    assert.dom('.denali-modal__header').hasText('Header', 'Denali Modal header is rendered');
    assert.dom('.denali-modal__footer').hasText('Footer', 'Denali Modal footer is rendered');
  });
});
