import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, array, text } from '@storybook/addon-knobs';
import { attribute, example } from './knob-categories';

export default {
  title: 'DenaliChipGroup',
  component: 'DenaliChipGroup',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliChipGroup as |Group|>
      <Group.Chip 
        @backgroundColor='purple'
      >
        Denali
      </Group.Chip>
      <Group.Chip 
        @backgroundColor='purple'
        @backgroundShade=300
      >
        Chip Group
      </Group.Chip>
    </DenaliChipGroup>
  `,
});

export const Playground = () => ({
  template: hbs`
    <DenaliChipGroup 
      class={{class}}
      as |Group|
    >
      {{#each items as |item index|}}
        <Group.Chip 
          @backgroundColor='purple'  
          @backgroundShade={{if index '500' '300'}}
        >
          {{item}} 
        </Group.Chip>
      {{/each}}
    </DenaliChipGroup>
  `,
  context: {
    class: text('class', '', attribute),
    items: array('items', ['Denali', 'Chip', 'Group'], ',', example),
  },
});
