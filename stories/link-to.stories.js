import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, text } from '@storybook/addon-knobs';
import { argument, content, attribute } from './knob-categories';
export default {
  title: 'DenaliLinkTo',
  component: 'DenaliLinkTo',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliLinkTo @route="index">
      Denali Link To
    </DenaliLinkTo>
  `,
});

export const Playground = () => ({
  template: hbs`
    <DenaliLinkTo
      @route="/"
      @iconFront={{iconFront}}
      @iconBack={{iconBack}}
      class={{class}}
    >
      {{content}}
    </DenaliLinkTo>
  `,
  context: {
    route: text('route', 'index', argument),
    iconFront: text('iconFront', 'home', argument),
    iconBack: text('iconBack', '', argument),
    content: text('content', 'Link To Home', content),
    class: text('class', '', attribute),
  },
});
