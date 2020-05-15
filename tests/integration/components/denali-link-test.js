import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliLink
        href="https://denali.design/"
        target="_blank"
        @size={{this.size}}
      >
        Link Text
      </DenaliLink>
    `);

    assert.dom('a.denali-link').hasText('Link Text', 'DenaliLink renders an anchor element');
    assert.dom('a.denali-link').hasAttribute('href', 'https://denali.design/', 'DenaliLink has the specified href');
    assert.dom('a.denali-link').hasAttribute('target', '_blank', 'DenaliLink has the specified target');
    assert.dom('a.denali-link').doesNotHaveClass('is-small', 'DenaliLink does not have the is-small class by default');

    this.set('size', 'small');
    assert.dom('a.denali-link').hasClass('is-small', 'DenaliLink has the is-small class when the size is set to small');
  });

  test('secondary and sub links', async function (assert) {
    await render(hbs`
      <DenaliLink
        @isSub={{this.sub}}
        @isSecondary={{this.secondary}}
      >
        Link Text
      </DenaliLink>`);

    assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLink by default is not a sub link');
    assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLink by default is not a secondary link');

    this.set('sub', true);
    assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink is a sub link when isSub arg is set to true');

    this.set('secondary', true);
    assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink retains the is-sub class');
    assert
      .dom('a.denali-link')
      .hasClass('is-secondary', 'DenaliLink is a secondary link when secondary arg is set to true');
  });

  test('states', async function (assert) {
    await render(hbs`
      <DenaliLink
        @state={{this.state}}
      >
        Link Text
      </DenaliLink>
    `);

    assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLink by default is not active');
    assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLink by default is not disabled');

    this.set('state', 'active');
    assert.dom('a.denali-link').hasClass('is-active', 'DenaliLink is active when state is set to active');

    this.set('state', 'disabled');
    assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLink is disabled when state is set to disabled');
  });

  test('icons', async function (assert) {
    await render(hbs`
      <DenaliLink
        @iconFront={{this.iconFront}}
        @iconFrontClass={{this.iconFrontClass}}
        @iconBack={{this.iconBack}}
        @iconBackClass={{this.iconBackClass}}
      >
        Link Text
      </DenaliLink>
    `);

    assert
      .dom('a.denali-link')
      .doesNotHaveClass('has-icon-front', 'DenaliLink does not have the `has-icon-front` class by default');
    assert
      .dom('a.denali-link')
      .doesNotHaveClass('has-icon-back', 'DenaliLink does not have the `has-icon-back` class by default');

    this.set('iconFront', 'add-circle');
    this.set('iconFrontClass', 'link-icon-front');
    assert
      .dom('a.denali-link')
      .hasClass('has-icon-front', 'DenaliLink has the `has-icon-front` class when iconFront is specified');
    assert
      .dom('a.denali-link .d-icon.link-icon-front')
      .hasClass('d-add-circle', 'DenaliLink has the specified icon in the front');

    this.set('iconBack', 'external');
    this.set('iconBackClass', 'link-icon-back');
    assert
      .dom('a.denali-link')
      .hasClass('has-icon-back', 'DenaliLink has the `has-icon-back` class when iconBack is specified');
    assert
      .dom('a.denali-link .d-icon.link-icon-back')
      .hasClass('d-external', 'DenaliLink has the specified icon in the back');
  });
});
