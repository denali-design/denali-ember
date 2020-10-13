import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, example, content } from './knob-categories';
import { STATUSES } from '../addon/components/denali-title-enums';

export default {
  title: 'DenaliTitle',
  component: 'DenaliTitle',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliTitle @title={{title}} @caption={{caption}} />
  `,
  context: {
    title: 'Title Content',
    caption: 'Caption Content',
  },
});

const AllStatuses = [undefined, ...STATUSES];

export const Playground = () => ({
  template: hbs`
    <DenaliTitle class={{class}} @hasWideBar={{hasWideBar}} @backgroundStatus={{backgroundStatus}} as |Title|>
      <Title.h3 @status={{titleBackgroundStatus}} @isRegular={{titleIsRegular}} @isUpperCase={{titleIsUpperCase}}>{{titleContent}}</Title.h3>
      <Title.h6 @status={{captionBackgroundStatus}} @isRegular={{captionIsRegular}} @isUpperCase={{captionIsUpperCase}}>{{captionContent}}</Title.h6>
    </DenaliTitle>
  `,
  context: {
    hasWideBar: boolean('hasWideBar', false, argument),
    backgroundStatus: select('backgroundStatus', AllStatuses, AllStatuses[0], argument),
    titleBackgroundStatus: select('titleBackgroundStatus', AllStatuses, AllStatuses[0], example),
    titleIsRegular: boolean('titleIsRegular', false, example),
    titleIsUpperCase: boolean('titleIsUpperCase', false, example),
    captionBackgroundStatus: select('captionBackgroundStatus', AllStatuses, AllStatuses[0], example),
    captionIsRegular: boolean('captionIsRegular', false, example),
    captionIsUpperCase: boolean('captionIsUpperCase', false, example),

    titleContent: text('titleContent', 'My Title', content),
    captionContent: text('captionContent', 'My Caption', content),
    class: text('class', '', attribute),
  },
});
