import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, text } from '@storybook/addon-knobs';
import { attribute, content } from './knob-categories';

export default {
  title: 'DenaliBox',
  component: 'DenaliBox',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliBox as |Box|>
      <p>{{bodyContent}}</p>
    </DenaliBox>
  `,
  context: {
    bodyContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliBox 
      class={{class}}
    as |Box|>
      <Box.Header>{{headerContent}}</Box.Header>
      <Box.SubHeader>{{subHeaderContent}}</Box.SubHeader>
      <p>{{bodyContent}}</p>
      <Box.Footer>{{footerContent}}</Box.Footer>
    </DenaliBox>
  `,
  context: {
    headerContent: text('headerContent', 'Box Header', content),
    subHeaderContent: text('subHeaderContent', 'Box Sub Header', content),
    bodyContent: text(
      'bodyContent',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
      content
    ),
    footerContent: text('footerContent', 'Box Footer', content),
    class: text('class', '', attribute),
  },
});
