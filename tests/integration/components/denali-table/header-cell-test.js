import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
<DenaliTable::HeaderCell
  @position={{this.position}}
  @isMono={{this.isMono}}
  @isSorted={{this.isSorted}}
  @sortDirection={{this.sortDirection}}
>
  cell
</DenaliTable::HeaderCell>
`;

module('Integration | Component | denali-table/header-cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(TEMPLATE);

    assert.dom('th').hasText('cell', 'A table cell is rendered');
  });

  test('it supports position', async function (assert) {
    await render(TEMPLATE);

    assert.dom('th').hasClass('is-default', 'DenaliTableHeaderCell has default styles when `@position` arg is not set');
    this.set('position', 'default');
    assert
      .dom('th')
      .hasClass('is-default', 'DenaliTableHeaderCell has default styles when `@position` arg is set to default');
    this.set('position', 'left');
    assert.dom('th').hasClass('is-left', 'DenaliTableHeaderCell has left styles when `@position` arg is set to left');
    this.set('position', 'center');
    assert
      .dom('th')
      .hasClass('is-center', 'DenaliTableHeaderCell has center styles when `@position` arg is set to center');
    this.set('position', 'right');
    assert
      .dom('th')
      .hasClass('is-right', 'DenaliTableHeaderCell has right styles when `@position` arg is set to right');
  });

  test('it supports isMono', async function (assert) {
    await render(TEMPLATE);

    assert
      .dom('th')
      .doesNotHaveClass('is-mono', 'DenaliTableHeaderCell does not have mono styles when `@isMono` arg is not set');
    this.set('isMono', true);
    assert.dom('th').hasClass('is-mono', 'DenaliTableHeaderCell has mono style when `@isMono` arg is set to true');
  });

  test('it supports isSorted', async function (assert) {
    await render(TEMPLATE);

    assert
      .dom('th')
      .doesNotHaveClass(
        'is-sorted',
        'DenaliTableHeaderCell does not have sorted styles when `@isSorted` arg is not set'
      );
    this.set('isSorted', true);
    assert
      .dom('th')
      .hasClass('is-sorted', 'DenaliTableHeaderCell has sorted style when `@isSorted` arg is set to true');
  });

  test('it supports sortDirection', async function (assert) {
    await render(TEMPLATE);

    assert
      .dom('th')
      .doesNotHaveClass(
        'is-sorted__default',
        'DenaliTableHeaderCell does not have sortDirection styles when `@sortDirection` arg is not set'
      );
    this.set('isSorted', true);
    assert
      .dom('th')
      .hasClass(
        'is-sorted__default',
        'DenaliTableHeaderCell has sortDirection style when `@sortDirection` arg is not set'
      );

    const message = (direction) =>
      `DenaliTableHeaderCell has sortDirection style when \`@sortDirection\` arg is set to ${direction}`;
    let directions = ['default', 'ascend', 'descend'];
    directions.forEach((direction) => {
      this.set('sortDirection', direction);
      assert.dom('th').hasClass(`is-sorted__${direction}`, message(direction));
    });
  });
});
