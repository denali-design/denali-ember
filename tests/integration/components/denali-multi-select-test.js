import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror, findAll, click, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-multi-select', function (hooks) {
  setupRenderingTest(hooks);

  test('it requires options', async function (assert) {
    assert.expect(1);

    setupOnerror(function ({ message }) {
      assert.equal(
        message,
        'Failed prop type: The prop `selectedOptions` is marked as required in `DenaliMultiSelectComponent`, but its value is `undefined`.',
        'If @args() contains a PropType validator, an error will be thrown if the value is incorrect'
      );
    });
    await render(hbs`<DenaliMultiSelect />`);
  });

  test('it renders placeholder string', async function (assert) {
    await render(hbs`
      <DenaliMultiSelect 
        @options={{array "Item 1"}} 
        @selectedOptions={{array }} 
        @onChange={{this.onChange}} 
        as |option|
      >
        {{option}}
      </DenaliMultiSelect>
    `);

    assert.dom('ul.multi-select__selections.has-arrow').exists('DenaliMultiSelect renders an wrapper ul');

    assert.deepEqual(
      findAll('.multi-select__selections-item').map((selection) => selection.textContent),
      ['Select Items'],
      'DenaliMultiSelect renders placeholder element'
    );
  });

  test('it renders custom placeholder string', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <DenaliMultiSelect 
        @placeholder="Custom placeholder" 
        @options={{array "Item 1"}} 
        @selectedOptions={{array }} 
        @onChange={{this.onChange}} as |option|
      >
        {{option}}
      </DenaliMultiSelect>
    `);

    assert.dom('ul.multi-select__selections.has-arrow').exists('DenaliMultiSelect renders an wrapper ul');

    assert.deepEqual(
      findAll('.multi-select__selections-item').map((selection) => selection.textContent),
      ['Custom placeholder'],
      'DenaliMultiSelect renders a custom placeholder element'
    );
  });

  test('options as strings', async function (assert) {
    await render(hbs`
      <DenaliMultiSelect 
        @options={{array "Item 1" "Item 2" "Item 3"}} 
        @onChange={{this.onChange}} 
        as |option|
      >
        {{option}}
      </DenaliMultiSelect>
    `);

    await click('.multi-select__selections');

    assert.dom('.multi-select__dropdown').exists('Dropdown pane is rendered');

    assert.deepEqual(
      findAll('.multi-select__dropdown-option').map((option) => option.labels[0].textContent.trim()),
      ['Item 1', 'Item 2', 'Item 3'],
      'DenaliMultiSelect renders a string option element'
    );
  });

  test('options as objects', async function (assert) {
    this.set('selectedOptions', []);
    await render(hbs`
      <DenaliMultiSelect 
        @options={{array (hash text="Item 1") (hash text="Item 2") (hash text="Item 3")}}
        @selectedOptions={{this.selectedOptions}} 
        @onChange={{fn (mut this.selectedOptions)}} as |option|
      >
        {{option.text}}
      </DenaliMultiSelect>
    `);

    await click('.multi-select__selections');

    assert.dom('.multi-select__dropdown').exists('Dropdown pane is rendered');

    assert.deepEqual(
      findAll('.multi-select__dropdown-option').map((option) => option.labels[0].textContent.trim()),
      ['Item 1', 'Item 2', 'Item 3'],
      'DenaliMultiSelect renders a object option element'
    );
  });

  test('it renders a selection', async function (assert) {
    assert.expect(2);

    this.set('selected', []);
    await render(hbs`
      <DenaliMultiSelect 
        @options={{array "Item 1" "Item 2" "Item 3"}}
        @selectedOptions={{this.selected}} 
        @onChange={{fn (mut this.selected)}} 
        as |option|
      >
        {{option}}
      </DenaliMultiSelect>
    `);

    await click('.multi-select__selections');

    assert.dom('.multi-select__dropdown').exists('Dropdown pane is rendered');

    await click('.multi-select__dropdown-option');

    assert.deepEqual(
      findAll('.multi-select__selections-item').map((selection) => selection.textContent.trim()),
      ['Item 1'],
      'DenaliMultiSelect renders selected element'
    );
  });

  test('it supports small size', async function (assert) {
    assert.expect(1);

    this.set('isSmall', 'true');
    await render(hbs`
      <DenaliMultiSelect @options={{array "Item 1"}} @isSmall={{this.isSmall}} as |option|>
        {{option}}
      </DenaliMultiSelect>
    `);

    assert
      .dom('div.multi-select')
      .hasClass('is-small', 'DenaliMultiSelect has a small size when `@isSmall` arg is set to true');
  });

  test('it supports inverse colors', async function (assert) {
    assert.expect(1);

    this.set('isInverse', 'true');
    await render(hbs`
      <DenaliMultiSelect @options={{array "Item 1"}} @isInverse={{this.isInverse}} as |option|>
        {{option}}
      </DenaliMultiSelect>
    `);

    assert
      .dom('div.multi-select')
      .hasClass('is-inverse', 'DenaliMultiSelect has inverse colors when `@isInverse` arg is set to true');
  });

  test('it supports search', async function (assert) {
    this.set('options', [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]);
    this.set('searchFunc', (value, target) => value.text.toLowerCase().includes(target.toLowerCase()));
    this.set('selectedOptions', []);
    await render(hbs`
      <DenaliMultiSelect 
        @options={{this.options}} 
        @selectedOptions={{this.selectedOptions}} 
        @onChange={{fn (mut this.selectedOptions)}} 
        @isSearchEnabled={{true}} 
        @searchFunc={{this.searchFunc}} as |option|
      >
        {{option.text}}
      </DenaliMultiSelect>
    `);

    await click('.multi-select__selections');

    assert.deepEqual(
      findAll('.multi-select__dropdown-option').map((option) => option.labels[0].textContent.trim()),
      ['Item 1', 'Item 2', 'Item 3'],
      'DenaliMultiSelect renders selected element'
    );

    await fillIn('.multi-select__dropdown-search', 'item 2');
    await triggerKeyEvent('.multi-select__dropdown-search', 'keyup', 13);

    assert.deepEqual(
      findAll('.multi-select__dropdown-option').map((option) => option.labels[0].textContent.trim()),
      ['Item 2'],
      'DenaliMultiSelect renders a filtered option element'
    );
  });
});
