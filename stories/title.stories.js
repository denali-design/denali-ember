import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { argument, attribute, example, rootName } from './knob-categories';
import { STATUSES } from '../addon/components/denali-title-enums';

export default {
  title: `${rootName}/DenaliTitle`,
  component: 'DenaliTag',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliTitle @title="Denali Title" @caption="With Captions"/>
  `,
  context: {},
});

export const BlockForm = () => ({
  template: hbs`
  <DenaliTitle as |Title|>
    <Title.h1>Denali Title</Title.h1>
    <Title.h4>Block Form</Title.h4>
  </DenaliTitle>
  `,
  context: {},
});

const allStatuses = [undefined, ...STATUSES];

export const BlockFormPlayground = () => ({
  template: hbs`
    <DenaliTitle
      @title={{title}}
      @backgroundStatus={{backgroundStatus}}
      @hasWideBar={{hasWideBar}}
      class={{class}}
      as |Title|
    >
      <Title.h1 @status={{status}} @isUpperCase={{isUpperCase}} @isRegular={{isRegular}}>
        {{title}}
      </Title.h1>
    </DenaliTitle>
  `,
  context: {
    backgroundStatus: select('backgroundStatus', allStatuses, allStatuses[0], argument),
    hasWideBar: boolean('hasWideBar', false, argument),
    status: select('status', allStatuses, allStatuses[0], argument),
    isRegular: boolean('isRegular', false, argument),
    isUpperCase: boolean('isUpperCase', false, argument),
    title: text('title', 'Denali Title', example),
    class: text('class', '', attribute),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliTitle
      @title={{title}}
      @caption={{caption}}
      @backgroundStatus={{backgroundStatus}}
      @hasWideBar={{hasWideBar}}
      class={{class}}
    />
  `,
  context: {
    backgroundStatus: select('backgroundStatus', allStatuses, allStatuses[0], argument),
    hasWideBar: boolean('hasWideBar', false, argument),
    title: text('title', 'Denali Title', example),
    caption: text('caption', 'With Caption', example),
    class: text('class', '', attribute),
  },
});
