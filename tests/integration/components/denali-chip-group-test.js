import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-chip-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliChipGroup as | Group |>
        <Group.Chip>Grouped</Group.Chip> <Group.Chip>Chips</Group.Chip>
      </DenaliChipGroup>
    `);

    assert.dom('span.chip-group span.chips').exists({ count: 2 }, 'Chips are rendered inside group');

    assert.dom('span.chip-group').hasText('Grouped Chips', 'Group has correct text');
  });
});
