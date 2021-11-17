import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
<DenaliTable::Cell @position={{this.position}} @isMono={{this.isMono}}>
  cell
</DenaliTable::Cell>
`;

module('Integration | Component | denali-table/cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(TEMPLATE);

    assert.dom('td').hasText('cell', 'A table cell is rendered');
  });

  test('it supports position', async function (assert) {
    await render(TEMPLATE);

    assert.dom('td').hasClass('is-default', 'DenaliTableCell has default styles when `@position` arg is not set');
    this.set('position', 'default');
    assert
      .dom('td')
      .hasClass('is-default', 'DenaliTableCell has default styles when `@position` arg is set to default');
    this.set('position', 'left');
    assert.dom('td').hasClass('is-left', 'DenaliTableCell has left styles when `@position` arg is set to left');
    this.set('position', 'center');
    assert.dom('td').hasClass('is-center', 'DenaliTableCell has center styles when `@position` arg is set to center');
    this.set('position', 'right');
    assert.dom('td').hasClass('is-right', 'DenaliTableCell has right styles when `@position` arg is set to right');
  });

  test('it supports isMono', async function (assert) {
    await render(TEMPLATE);

    assert
      .dom('td')
      .doesNotHaveClass('is-mono', 'DenaliTableCell does not have mono styles when `@isMono` arg is not set');
    this.set('isMono', true);
    assert.dom('td').hasClass('is-mono', 'DenaliTableCell has mono style when `@isMono` arg is set to true');
  });
});
