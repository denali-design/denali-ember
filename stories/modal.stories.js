import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, content } from './knob-categories';

export default {
  title: 'DenaliModal',
  component: 'DenaliModal',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliModal @isOpen={{true}} as |Modal|>
      <Modal.Header>{{headerContent}}</Modal.Header>
      <Modal.Content>{{bodyContent}}</Modal.Content>
      <Modal.Footer>{{footerContent}}</Modal.Footer>
    </DenaliModal>
  `,
  context: {
    headerContent: 'Modal Header',
    bodyContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    footerContent: 'Modal Footer',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliModal
      @isOpen={{isOpen}}
      @isFullScreen={{isFullScreen}}
      @onClose={{onClose}}
      class={{class}}
      as |Modal|
    >
      <Modal.Header>{{headerContent}}</Modal.Header>
      <Modal.Content>{{bodyContent}}</Modal.Content>
      <Modal.Footer>{{footerContent}}</Modal.Footer>
    </DenaliModal>
  `,
  context: {
    isOpen: boolean('isOpen', true, argument),
    isFullScreen: boolean('isFullScreen', false, argument),
    headerContent: text('headerContent', 'Modal Header', content),
    bodyContent: text('bodyContent', 'Modal Body', content),
    footerContent: text('footerContent', 'Modal Footer', content),
    class: text('class', '', attribute),
    onClose: action('onClose'),
  },
});
