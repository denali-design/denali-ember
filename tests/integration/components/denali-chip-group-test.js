import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-chip-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliChipGroup>
        <DenaliChip>Grouped</DenaliChip> <DenaliChip>Chips</DenaliChip>
      </DenaliChipGroup>
    `);

    assert.dom('span.chip-group span.chips').exists({ count: 2 }, 'Chips are rendered inside group');

    assert.dom('span.chip-group').hasText('Grouped Chips', 'Group has correct text');
  });
});
