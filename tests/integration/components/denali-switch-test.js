import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-switch', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(4);

    await render(hbs`<DenaliSwitch @offLabel="Lights Off" @onLabel="Lights On" />`);
    assert.dom('.denali-switch.switch').exists('A denali switch component is rendered');

    assert.dom('.denali-switch.switch .label.off').hasText('Lights Off', 'A denali switch renders an off label');

    assert.dom('.denali-switch.switch .label.on').hasText('Lights On', 'A denali switch renders an on label');

    assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
  });

  test('checked and disabled', async function (assert) {
    assert.expect(4);

    await render(hbs`<DenaliSwitch
      @offLabel="Off"
      @onLabel="On"
      checked={{this.checked}}
      disabled={{this.disabled}}
    />`);

    assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
    this.set('checked', true);
    assert.dom('.denali-switch.switch input').isChecked('The switch is on when checked is set to true');

    assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
    this.set('disabled', true);
    assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when disabled is set to true');
  });

  test('isEnabled and isDisabled', async function (assert) {
    assert.expect(4);

    await render(hbs`<DenaliSwitch
      @offLabel="Off"
      @onLabel="On"
      @isEnabled={{this.isEnabled}}
      @isDisabled={{this.isDisabled}}
    />`);

    assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
    this.set('isEnabled', true);
    assert.dom('.denali-switch.switch input').isChecked('The switch is on when isEnabled is set to true');

    assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
    this.set('isDisabled', true);
    assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when isDisabled is set to true');
  });

  test('click and onChange action', async function (assert) {
    assert.expect(7);

    this.set('clickHandler', () => {
      assert.ok('Click handler is called on click');
    });

    this.set('changeHandler', () => {
      assert.ok('Change handler is called on click');
    });

    await render(hbs`<DenaliSwitch
      @offLabel="Off"
      @onLabel="On"
      @onChange={{action this.changeHandler}}
      {{on "click" (action this.clickHandler)}}
    />`);

    assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');

    await click('.denali-switch input');
    assert.dom('.denali-switch.switch input').isChecked('The switch is on after click');

    await click('.denali-switch input');
    assert.dom('.denali-switch.switch input').isNotChecked('Clicking again turns the switch off');
  });
});
