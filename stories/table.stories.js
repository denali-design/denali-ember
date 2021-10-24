import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs';
import { argument, attribute, example, rootName } from './knob-categories';
import { POSITIONS, SORT_DIRECTIONS } from '../addon/components/denali-table/cell-enums';

export default {
  title: `${rootName}/DenaliTable`,
  component: 'DenaliTable',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliTable @isStriped={{true}} as |Table|>
      <Table.Header as |Head|>
        <Head.Row as |Row|>
          <Row.HeaderCell @isSorted={{true}} @sortDirection="descend">Date</Row.HeaderCell>
          <Row.HeaderCell>Device</Row.HeaderCell>
          <Row.HeaderCell @isSorted={{true}} @position="right">Stock</Row.HeaderCell>
        </Head.Row>
      </Table.Header>

      <Table.Body as |Body|>
        {{#each this.data as |row|}}
          <Body.Row as |Row|>
            {{#each (range 0 row.length) as |index|}}
              <Row.Cell @position={{if (eq index 2) "right"}}>{{get row index}}</Row.Cell>
            {{/each}}
          </Body.Row>
        {{/each}}
      </Table.Body>

      <Table.Footer as |Foot|>
        <Foot.Row class="is-bold" as |Row|>
          <Row.Cell>Total</Row.Cell>
          <Row.Cell></Row.Cell>
          <Row.Cell @position="right">18</Row.Cell>
        </Foot.Row>
      </Table.Footer>
    </DenaliTable>
  `,
  context: {
    data: [
      ['08/12/2021', 'Mobile', 2],
      ['08/12/2021', 'Desktop', 4],
      ['08/12/2021', 'Other', 1],

      ['08/13/2021', 'Mobile', 4],
      ['08/13/2021', 'Desktop', 5],
      ['08/13/2021', 'Other', 2],
    ],
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliTable
      class={{this.class}}
      @isFrozen={{this.isFrozen}}
      @isStriped={{this.isStriped}}
      @isCards={{this.isCards}}
      as |Table|
    >
      <Table.Header as |Head|>
        <Head.Row as |Row|>
          {{#each (range 1 this.numCols true) as |colNum|}}
            <Row.HeaderCell
              @position={{this.position}}
              @isMono={{this.isMono}}
              @isSorted={{this.isSorted}}
              @sortDirection={{this.sortDirection}}
            >
              H{{colNum}}
            </Row.HeaderCell>
          {{/each}}
        </Head.Row>
      </Table.Header>

      <Table.Body as |Body|>
        {{#each (range 1 this.numRows true) as |rowNum|}}
          <Body.Row as |Row|>
            {{#each (range 1 this.numCols true) as |colNum|}}
              {{#if (eq colNum 1)}}
                <Row.HeaderCell @position={{this.position}}>{{rowNum}}:{{colNum}}</Row.HeaderCell>
              {{else}}
                <Row.Cell @position={{this.position}}>{{rowNum}}:{{colNum}}</Row.Cell>
              {{/if}}
            {{/each}}
          </Body.Row>
        {{/each}}
      </Table.Body>

      <Table.Footer as |Foot|>
        <Foot.Row as |Row|>
          {{#each (range 1 this.numCols true) as |colNum|}}
            {{#if (eq colNum 1)}}
              <Row.HeaderCell @position={{this.position}}>F{{colNum}}</Row.HeaderCell>
            {{else}}
              <Row.Cell @position={{this.position}}>F{{colNum}}</Row.Cell>
            {{/if}}
          {{/each}}
        </Foot.Row>
      </Table.Footer>
    </DenaliTable>
  `,
  context: {
    isFrozen: boolean('isFrozen', false, argument),
    isStriped: boolean('isStriped', false, argument),
    isCards: boolean('isCards', false, argument),
    class: text('class', '', attribute),
    position: select('position', POSITIONS, POSITIONS[0], argument),
    isSorted: boolean('isSorted', false, argument),
    sortDirection: select('sortDirection', SORT_DIRECTIONS, SORT_DIRECTIONS[0], argument),
    isMono: boolean('isMono', false, argument),
    numRows: number('numRows', 5, { min: 1, max: 99 }, example),
    numCols: number('numCols', 3, { min: 1, max: 20 }, example),
  },
});
