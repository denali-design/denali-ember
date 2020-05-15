import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupRouting from '../../helpers/setup-router';

module('Integration | Component | denali-link-to', function (hooks) {
  setupRenderingTest(hooks);
  setupRouting(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliLinkTo @route="index" @query={{hash user="jkusa"}}>
        Link Text
      </DenaliLinkTo>
    `);
    assert.dom('a.ember-view').hasText('Link Text', 'DenaliLinkTo exists and renders inner content');
    assert
      .dom('a.denali-link')
      .hasAttribute('href', '/?user=jkusa', 'DenaliLinkTo renders an href based on a route & query');
  });

  test('it is set as active when on current route', async function (assert) {
    this.set('route', 'four-oh-four');
    await render(hbs`
      <DenaliLinkTo @route={{this.route}}>
        Link Text
      </DenaliLinkTo>
    `);
    assert
      .dom('a.denali-link')
      .doesNotHaveClass('is-active', 'DenaliLinkTo is not active when not on the current route');

    this.set('route', 'index');
    assert.dom('a.denali-link').hasClass('is-active', 'DenaliLinkTo is active when on the current route');
  });

  test('size', async function (assert) {
    await render(hbs`
      <DenaliLinkTo
        @route="four-oh-four"
        @size={{this.size}}
      >
        Link Text
      </DenaliLinkTo>
    `);

    assert
      .dom('a.denali-link')
      .doesNotHaveClass('is-small', 'DenaliLinkTo does not have the is-small class by default');

    this.set('size', 'small');
    assert
      .dom('a.denali-link')
      .hasClass('is-small', 'DenaliLinkTo has the is-small class when the size is set to small');
  });

  test('secondary and sub links', async function (assert) {
    await render(hbs`
      <DenaliLinkTo
        @route="four-oh-four"
        @isSub={{this.sub}}
        @isSecondary={{this.secondary}}
      >
        Link Text
      </DenaliLinkTo>
    `);

    assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLinkTo by default is not a sub link');
    assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLinkTo by default is not a secondary link');

    this.set('sub', true);
    assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo is a sub link when isSub arg is set to true');

    this.set('secondary', true);
    assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo retains the is-sub class');
    assert
      .dom('a.denali-link')
      .hasClass('is-secondary', 'DenaliLinkTo is a secondary link when secondary arg is set to true');
  });

  test('state', async function (assert) {
    await render(hbs`
      <DenaliLinkTo
        @route="four-oh-four"
        @state={{this.state}}
      >
        Link Text
      </DenaliLinkTo>
    `);

    assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');

    this.set('state', 'disabled');
    assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when state is set to disabled');
  });

  test('disabled', async function (assert) {
    await render(hbs`
      <DenaliLinkTo
        @route="four-oh-four"
        @disabled={{this.disabled}}
      >
        Link Text
      </DenaliLinkTo>
    `);

    assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');

    this.set('disabled', true);
    assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when disabled is set to true');
  });

  test('icons', async function (assert) {
    await render(hbs`
      <DenaliLinkTo
        @route="four-oh-four"
        @iconFront={{this.iconFront}}
        @iconFrontClass={{this.iconFrontClass}}
        @iconBack={{this.iconBack}}
        @iconBackClass={{this.iconBackClass}}
      >
        Link Text
      </DenaliLinkTo>
    `);

    assert
      .dom('a.denali-link')
      .doesNotHaveClass('has-icon-front', 'DenaliLinkTo does not have the `has-icon-front` class by default');
    assert
      .dom('a.denali-link')
      .doesNotHaveClass('has-icon-back', 'DenaliLinkTo does not have the `has-icon-back` class by default');

    this.set('iconFront', 'add-circle');
    this.set('iconFrontClass', 'link-icon-front');
    assert
      .dom('a.denali-link')
      .hasClass('has-icon-front', 'DenaliLinkTo has the `has-icon-front` class when iconFront is specified');
    assert
      .dom('a .d-icon.link-icon-front')
      .hasClass('d-add-circle', 'DenaliLinkTo has the specified icon in the front');

    this.set('iconBack', 'external');
    this.set('iconBackClass', 'link-icon-back');
    assert
      .dom('a.denali-link')
      .hasClass('has-icon-back', 'DenaliLinkTo has the `has-icon-back` class when iconBack is specified');
    assert.dom('a .d-icon.link-icon-back').hasClass('d-external', 'DenaliLinkTo has the specified icon in the back');
  });
});
