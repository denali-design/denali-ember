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

  test('it supports value', async function (assert) {
    await render(hbs`
      <DenaliProgress @value={{this.value}}/>
    `);

    assert.dom('.d-progress div').exists('A div is rendered within a wrapper div with class `.d-progress`');
    assert
      .dom('.d-progress div')
      .hasClass('d-progress--bar', 'A div is rendered within a wrapper div with class `.d-progress`');
    assert
      .dom('.d-progress div')
      .hasAttribute('aria-valuenow', '0', 'DenaliProgress percent default value should be `0`');

    this.set('value', 30);
    assert.dom('.d-progress div').hasAttribute('aria-valuenow', '30', 'DenaliProgress percent should be updated to 30');

    this.set('value', 100);
    assert
      .dom('.d-progress div')
      .hasAttribute('aria-valuenow', '100', 'DenaliProgress percent should be updated to 100');

    this.set('value', 0);
    assert.dom('.d-progress div').hasAttribute('aria-valuenow', '0', 'DenaliProgress percent should be updated to 0');
  });

  test('it supports color and shade', async function (assert) {
    await render(hbs`
      <DenaliProgress @value={{this.value}} @color={{this.color}} @shade={{this.shade}} />
    `);

    this.set('value', 30);
    assert
      .dom('.d-progress div')
      .hasAttribute('aria-valuenow', '30', 'DenaliProgress with default color should be displayed');

    this.set('color', 'red');
    assert
      .dom('div.d-progress--bar')
      .hasClass(
        'has-bg-red-500',
        'DenaliProgress displayed with red color when `@color` arg is set to red and default shade value 500'
      );

    this.set('shade', '100');
    assert
      .dom('div.d-progress--bar')
      .hasClass(
        'has-bg-red-100',
        'DenaliProgress displayed with red color and shade 100 when `@color` arg is set to red and `@shade` is set to 100'
      );

    this.set('color', 'green');
    this.set('shade', '300');
    assert
      .dom('div.d-progress--bar')
      .hasClass(
        'has-bg-green-300',
        'DenaliProgress displayed with green color and shade 300 when `@color` arg is set to green and `@shade` is set to 300'
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
    <DenaliProgress
      @size={{size}}
      @isLoading={{isLoading}}
      as |Progress|
      >
      <Progress.Bar @color="red" @value={{10}} @shade="100" />
      <Progress.Bar @color="green" @value={{20}} @shade="200" />
      <Progress.Bar @color="blue" @value={{30}} @shade="300" />
    </DenaliProgress>
    `);

    const nestedEle = findAll('.d-progress div');

    assert
      .dom(nestedEle[0])
      .hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
    assert
      .dom(nestedEle[0])
      .hasClass(
        'has-bg-red-100',
        'DenaliProgress displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100'
      );

    assert
      .dom(nestedEle[1])
      .hasAttribute('aria-valuenow', '20', 'DenaliProgress with 2nd bar with value 20 should be displayed');
    assert
      .dom(nestedEle[1])
      .hasClass(
        'has-bg-green-200',
        'DenaliProgress displayed with green color when `@color` arg is set to green and `@shade` arg is set to 200'
      );

    assert
      .dom(nestedEle[2])
      .hasAttribute('aria-valuenow', '30', 'DenaliProgress with 3rd bar with value 30 should be displayed');
    assert
      .dom(nestedEle[2])
      .hasClass(
        'has-bg-blue-300',
        'DenaliProgress displayed with blue color when `@color` arg is set to blue and `@shade` arg is set to 300'
      );
  });

  test('it supports multi level progress with top level values as defaults', async function (assert) {
    await render(hbs`
    <DenaliProgress
      @size={{size}}
      @isLoading={{isLoading}}
      @color="red" 
      @shade="100"
      as |Progress|
      >
      <Progress.Bar @value={{10}} />
    </DenaliProgress>
    `);

    const nestedEle = findAll('.d-progress div');

    assert
      .dom(nestedEle[0])
      .hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
    assert
      .dom(nestedEle[0])
      .hasClass(
        'has-bg-red-100',
        'DenaliProgress displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level'
      );
  });

  test('it supports multi level progress with top level values as defaults', async function (assert) {
    await render(hbs`
    <DenaliProgress
      @size={{size}}
      @isLoading={{isLoading}}
      @color="red" 
      @shade="100"
      as |Progress|
      >
      <Progress.Bar @value={{10}} />
      <Progress.Bar @value={{20}} />
      <Progress.Bar @color="blue" @value={{30}} @shade="300" />
    </DenaliProgress>
    `);

    const nestedEle = findAll('.d-progress div');

    assert
      .dom(nestedEle[0])
      .hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
    assert
      .dom(nestedEle[0])
      .hasClass(
        'has-bg-red-100',
        'DenaliProgress 1st bar displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level'
      );

    assert
      .dom(nestedEle[1])
      .hasAttribute('aria-valuenow', '20', 'DenaliProgress with 2nd bar with value 20 should be displayed');
    assert
      .dom(nestedEle[1])
      .hasClass(
        'has-bg-red-100',
        'DenaliProgress 2nd bar displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level'
      );

    assert
      .dom(nestedEle[2])
      .hasAttribute('aria-valuenow', '30', 'DenaliProgress with 3rd bar with value 30 should be displayed');
    assert
      .dom(nestedEle[2])
      .hasClass(
        'has-bg-blue-300',
        'DenaliProgress 3rd bar displayed with blue color when `@color` arg is set to blue and `@shade` arg is set to 300'
      );
  });
});
