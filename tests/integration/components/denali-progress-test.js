import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-progress', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliProgress />
    `);

    assert.dom('.d-progress div').exists('A div is rendered within a wrapper div with class `.d-progress`');
    assert
      .dom('.d-progress div')
      .hasClass('d-progress--bar', 'A div with class ``d-progress--bar is rendered within a wrapper div');
  });

  test('it supports percent', async function (assert) {
    await render(hbs`
      <DenaliProgress @percents={{this.percents}}/>
    `);

    assert.dom('.d-progress div').exists('A div is rendered within a wrapper div with class `.d-progress`');
    assert
      .dom('.d-progress div')
      .hasClass('d-progress--bar', 'A div is rendered within a wrapper div with class `.d-progress`');
    assert
      .dom('.d-progress div')
      .hasAttribute('aria-valuenow', '0', 'DenaliProgress percent default value should be `0`');

    this.set('percents', [30]);
    assert.dom('.d-progress div').hasAttribute('aria-valuenow', '30', 'DenaliProgress percent should be updated to 30');

    this.set('percents', [100]);
    assert
      .dom('.d-progress div')
      .hasAttribute('aria-valuenow', '100', 'DenaliProgress percent should be updated to 100');

    this.set('percents', [0]);
    assert.dom('.d-progress div').hasAttribute('aria-valuenow', '0', 'DenaliProgress percent should be updated to 0');
  });

  test('it supports colors', async function (assert) {
    await render(hbs`
      <DenaliProgress @percents={{this.percents}} @colors={{this.colors}} />
    `);

    this.set('percents', [30]);
    assert
      .dom('.d-progress div')
      .hasAttribute('aria-valuenow', '30', 'DenaliProgress with default color should be displayed');

    this.set('colors', ['red']);
    assert
      .dom('.d-progress div')
      .hasAttribute('style', 'width: 30%;background-color: red', 'DenaliProgress with red color should be displayed');

    this.set('colors', ['green']);
    assert
      .dom('.d-progress div')
      .hasAttribute(
        'style',
        'width: 30%;background-color: green',
        'DenaliProgress with green color should be displayed'
      );
  });

  test('it supports isLoading', async function (assert) {
    await render(hbs`
      <DenaliProgress @isLoading={{this.isLoading}} @size={{this.size}}/>
    `);

    assert.dom('div.d-progress').exists('DenaliProgress can render with default `@isLoading` arg set to false ');
    this.set('isLoading', true);
    assert
      .dom('div.d-progress')
      .hasClass('d-progress__loading', 'DenaliProgress has a loading class when `@isLoading` arg is set to true');

    this.set('size', 'small');
    assert
      .dom('div.d-progress')
      .hasClass('d-progress__sm', 'DenaliProgress has a smaill size when `@size` arg is set to small');
  });

  test('it supports sizes', async function (assert) {
    await render(hbs`
      <DenaliProgress @size={{this.size}}/>
    `);

    assert.dom('div.d-progress').exists('DenaliProgress can render with default size');

    this.set('size', 'small');
    assert
      .dom('div.d-progress')
      .hasClass('d-progress__sm', 'DenaliProgress has a smaill size when `@size` arg is set to small');

    this.set('size', 'medium');
    assert
      .dom('div.d-progress')
      .hasClass('d-progress__md', 'DenaliProgress has a medium size when `@size` arg is set to medium');

    this.set('size', 'large');
    assert
      .dom('div.d-progress')
      .hasClass('d-progress__lg', 'DenaliProgress has a large size when `@size` arg is set to large');
  });

  test('it supports multi level progress with colors', async function (assert) {
    await render(hbs`
      <DenaliProgress @percents={{this.percents}} @colors={{this.colors}} />
    `);

    this.set('percents', [30, 40]);
    this.set('colors', ['orange', 'yellow']);

    const nestedEle = findAll('.d-progress div');

    assert.dom(
      nestedEle[0].hasAttribute('ariaValueNow', '30', 'DenaliProgress with 1st bar with value 30 should be displayed')
    );
    assert.equal(
      nestedEle[0].style.backgroundColor,
      'orange',
      'DenaliProgress with 1st bar in orange color should be displayed'
    );

    assert.dom(
      nestedEle[1].hasAttribute('ariaValueNow', '40', 'DenaliProgress with 2nd bar with value 40 should be displayed')
    );
    assert.equal(
      nestedEle[1].style.backgroundColor,
      'yellow',
      'DenaliProgress with 1st bar in yellow color should be displayed'
    );
  });
});
