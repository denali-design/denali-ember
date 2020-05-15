import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-menu', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(4);

    await render(hbs`
      <DenaliMenu class="test-menu" as |Menu|>
        <Menu.Trigger>Hover</Menu.Trigger>
        <Menu.Content>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </Menu.Content>
      </DenaliMenu>
    `);

    assert.dom('.test-menu').exists('The test menu is rendered');

    assert.dom('.test-menu .menu-trigger').hasText('Hover', 'The trigger has the appropriate text');

    assert
      .dom('.test-menu .menu-content li')
      .exists({ count: 3 }, 'Three li elements are rendered in the menu content');

    assert
      .dom('.test-menu .menu-content')
      .hasStyle({ visibility: 'hidden' }, 'The menu content is not visible by default');
  });

  test('alignment', async function (assert) {
    assert.expect(4);

    await render(hbs`
      <DenaliMenu class="test-menu" @alignContent={{this.alignContent}} as |Menu|>
        <Menu.Trigger>Hover</Menu.Trigger>
        <Menu.Content>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </Menu.Content>
      </DenaliMenu>
    `);

    assert.dom('.test-menu').doesNotHaveClass('is-left', 'The menu does not have the `is-left` class by default');
    assert.dom('.test-menu').doesNotHaveClass('is-right', 'The menu does not have the `is-right` class by default');

    this.set('alignContent', 'left');
    assert.dom('.test-menu').hasClass('is-left', 'The menu has the `is-left` class when alignContent is set to left');
    this.set('alignContent', 'right');
    assert
      .dom('.test-menu')
      .hasClass('is-right', 'The menu has the `is-right` class when alignContent is set to right');
  });
});
