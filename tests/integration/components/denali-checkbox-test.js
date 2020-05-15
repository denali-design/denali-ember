import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(7);
    await render(hbs`
      <DenaliCheckbox
        checked={{this.checked}}
        disabled={{this.disabled}}
        data-partial={{this.partialData}}
      >
        Test
      </DenaliCheckbox>
    `);

    assert.dom('.denali-checkbox').hasText('Test', 'A denali checkbox is rendered with the specified text');
    assert.dom('.denali-checkbox input').isNotDisabled('The checkbox is not disabled by default');
    assert.dom('.denali-checkbox input').isNotChecked('The checkbox is not checked by default');
    assert
      .dom('.denali-checkbox input')
      .doesNotHaveAttribute('data-partial', 'The checkbox does not have the data-partial attribute set by default');

    this.set('partialData', true);
    assert
      .dom('.denali-checkbox input')
      .hasAttribute('data-partial', '', 'The checkbox has the data-partial attribute when set to true');

    this.set('checked', true);
    assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when the checked attribute is set to true');

    this.set('disabled', true);
    assert
      .dom('.denali-checkbox input')
      .isDisabled('The checkbox is disabled when the disabled attribute is set to true');
  });

  test('action', async function (assert) {
    assert.expect(4);

    this.set('clickHandler', () => {
      assert.ok('The click handler is called when checkbox is clicked');
    });
    await render(hbs`
      <DenaliCheckbox
        {{on 'click' (action this.clickHandler)}}
      >
        Test
      </DenaliCheckbox>
    `);

    await click('.denali-checkbox input');
    assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when clicked on');
    await click('.denali-checkbox label');
    assert.dom('.denali-checkbox input').isNotChecked('The checkbox is unchecked when clicked again');
  });
});
