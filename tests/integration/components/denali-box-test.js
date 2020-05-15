import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-box', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliBox>
        Inner Content
      </DenaliBox>
    `);

    assert.dom('div.box').hasText('Inner Content', 'DenaliBox exists and renders inner content');
  });

  test('it can yield a header component', async function (assert) {
    await render(hbs`
      <DenaliBox as |Box|>
        <Box.Header>Header</Box.Header>
      </DenaliBox>
    `);

    assert.dom('.box h3').hasText('Header', 'DenaliBox can yield a header component');
  });

  test('it can yield a sub header component', async function (assert) {
    await render(hbs`
      <DenaliBox as |Box|>
        <Box.SubHeader>Sub Header</Box.SubHeader>
      </DenaliBox>
    `);

    assert.dom('.box h5').hasText('Sub Header', 'DenaliBox can yield a sub header component');
  });

  test('it can yield a footer component', async function (assert) {
    await render(hbs`
      <DenaliBox as |Box|>
        <Box.Footer>Footer</Box.Footer>
      </DenaliBox>
    `);

    assert.dom('.box footer').hasText('Footer', 'DenaliBox can yield a footer component');
  });
});
