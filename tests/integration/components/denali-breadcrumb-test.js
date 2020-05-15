import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | denali-breadcrumb', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(3);

    this.set('items', [1, 2, 3, 4]);
    await render(hbs`
      <DenaliBreadcrumb
        @items={{this.items}}
        as | item |
      >
        <span class="link">{{item}}</span>
      </DenaliBreadcrumb>
    `);

    assert.dom('ul.breadcrumb').exists('A ul with class breadcrumb is rendered');
    assert
      .dom('.breadcrumb li')
      .exists({ count: this.items.length }, 'The number of li rendered equal the number of items passed through');
    assert.dom('.breadcrumb .link').exists({ count: this.items.length }, 'Each item is wrapped in a span as specified');
  });
});
