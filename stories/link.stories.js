import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { argument, content, attribute } from './knob-categories';
import { SIZES, STATES } from '../addon/components/denali-link-enums';

export default {
  title: 'DenaliLink',
  component: 'DenaliLink',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliLink href="https://denali.design">
      Denali Link
    </DenaliLink>
  `,
});

export const Playground = () => ({
  template: hbs`
    <DenaliLink
      @iconFront={{iconFront}}
      @iconBack={{iconBack}}
      @state={{state}}
      @size={{size}}
      @isSecondary={{isSecondary}}
      @isSub={{isSub}}
      href={{href}}
      class={{class}}
    >
      {{content}}
    </DenaliLink>
  `,
  context: {
    route: text('route', 'index', argument),
    iconFront: text('iconFront', 'denali', argument),
    iconBack: text('iconBack', '', argument),
    size: select('size', SIZES, SIZES[0], argument),
    state: select('state', STATES, STATES[0], argument),
    isSecondary: boolean('isSecondary', false, argument),
    isSub: boolean('isSub', false, argument),
    href: text('href', 'https://denali.design', attribute),
    class: text('class', '', attribute),
    content: text('content', 'Denali Design', content),
  },
});
