import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-title', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<DenaliTitle />`);

    assert.dom('div.title').exists('DenaliTitle can render.');
  });

  test('it renders with a title argument', async function (assert) {
    await render(hbs`<DenaliTitle @title={{this.title}} />`);

    this.set('title', 'My Title');
    assert.dom('span').hasClass('bar', 'DenaliTitle has a bar.');

    assert.dom('div.title-text').exists('DenaliTitle has a title-text class.');

    assert.dom('h3').hasTextContaining('My Title', 'DenaliTitle renders a title using an argument.');
  });

  test('it renders with a caption argument', async function (assert) {
    await render(hbs`<DenaliTitle @title={{this.title}} @caption={{this.caption}} />`);

    this.set('caption', 'My Caption');
    assert.dom('h6').doesNotExist('DenaliTitle does not render a caption without a title.');

    this.set('title', 'My Title');
    assert.dom('h6').hasTextContaining('My Caption', 'DenaliTitle renders a caption using an argument.');
  });

  test('it renders with block components', async function (assert) {
    await render(hbs`
      <DenaliTitle as |Title|>
        <Title.h1>
          {{this.h1}}
        </Title.h1>
        <Title.h2>
          {{this.h2}}
        </Title.h2>
        <Title.h3>
          {{this.h3}}
        </Title.h3>
        <Title.h4>
          {{this.h4}}
        </Title.h4>
        <Title.h5>
          {{this.h5}}
        </Title.h5>
        <Title.h6>
          {{this.h6}}
        </Title.h6>
      </DenaliTitle>
    `);

    this.set('h1', 'My H1');
    assert.dom('h1').hasText('My H1', 'DenaliTitle renders block content for h1.');

    this.set('h2', 'My H2');
    assert.dom('h2').hasText('My H2', 'DenaliTitle renders block content for h2.');

    this.set('h3', 'My H3');
    assert.dom('h3').hasText('My H3', 'DenaliTitle renders block content for h3.');

    this.set('h4', 'My H4');
    assert.dom('h4').hasText('My H4', 'DenaliTitle renders block content for h4.');

    this.set('h5', 'My H5');
    assert.dom('h5').hasText('My H5', 'DenaliTitle renders block content for h5.');

    this.set('h6', 'My H6');
    assert.dom('h6').hasText('My H6', 'DenaliTitle renders block content for h6.');
  });

  test('it supports a wide bar', async function (assert) {
    await render(hbs`
      <DenaliTitle @hasWideBar={{this.hasWideBar}} as |Title|>
        <Title.h1>
          {{this.title}}
        </Title.h1>
        <Title.Caption>
          {{this.caption}}
        </Title.Caption>
      </DenaliTitle>
    `);

    this.set('hasWideBar', true);
    assert.dom('span.bar').hasClass('is-wide', 'DenaliTitle has a wide bar.');
  });

  test('it supports statuses for bar', async function (assert) {
    await render(hbs`
      <DenaliTitle @backgroundStatus={{this.backgroundStatus}} />
    `);

    assert.dom('span.bar').exists('DenaliTitle can render without a backgroundStatus set');

    this.set('backgroundStatus', 'danger');
    assert
      .dom('span.bar')
      .hasClass(
        'has-bg-status-danger',
        'DenaliTitle has background status of danger when `@backgroundStatus` arg is set to danger'
      );

    this.set('backgroundStatus', 'warning');
    assert
      .dom('span.bar')
      .hasClass(
        'has-bg-status-warning',
        'DenaliTitle has background status of warning when `@backgroundStatus` arg is set to warning'
      );

    this.set('backgroundStatus', 'success');
    assert
      .dom('span.bar')
      .hasClass(
        'has-bg-status-success',
        'DenaliTitle has background status of success when `@backgroundStatus` arg is set to success'
      );

    this.set('backgroundStatus', 'info');
    assert
      .dom('span.bar')
      .hasClass(
        'has-bg-status-info',
        'DenaliTitle has background status of info when `@backgroundStatus` arg is set to info'
      );
  });
});
