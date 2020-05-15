import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const templates = Object.entries({
  h1: hbs`
    <DenaliTitle::H1 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
      {{this.title}}
    </DenaliTitle::H1>
  `,
  h2: hbs`
    <DenaliTitle::H2 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
      {{this.title}}
    </DenaliTitle::H2>
  `,
  h3: hbs`
    <DenaliTitle::H3 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
      {{this.title}}
    </DenaliTitle::H3>, 
  `,
  h4: hbs`
    <DenaliTitle::H4 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
      {{this.title}}
    </DenaliTitle::H4>
  `,
  h5: hbs`
    <DenaliTitle::H5 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
      {{this.title}}
    </DenaliTitle::H5>
  `,
  h6: hbs`
    <DenaliTitle::H6 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
      {{this.title}}
    </DenaliTitle::H6>
  `,
});

module('Integration | Component | denali-title/headings', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    for (const [heading, template] of templates) {
      await render(template);

      this.set('title', 'My Title');
      assert.dom(heading).hasText('My Title', `DenaliTitle::${heading.toUpperCase()} can render.`);
    }
  });

  test('it supports regular style', async function (assert) {
    for (const [heading, template] of templates) {
      await render(template);

      this.set('title', 'My Title');

      this.set('isRegular', undefined);
      assert
        .dom(heading)
        .doesNotHaveClass('is-regular', `Denali::${heading.toUpperCase()} does not have regular styling by default`);

      this.set('isRegular', 'true');
      assert
        .dom(heading)
        .hasClass(
          'is-regular',
          `Denali::${heading.toUpperCase()} has regular styling when @isRegular arg is set to true`
        );
    }
  });

  test('it supports upper casing', async function (assert) {
    for (const [heading, template] of templates) {
      await render(template);

      this.set('title', 'My Title');

      this.set('isUpperCase', undefined);
      assert
        .dom(heading)
        .doesNotHaveClass('upper', `Denali::${heading.toUpperCase()} does not have upper case styling by default`);

      this.set('isUpperCase', 'true');
      assert
        .dom(heading)
        .hasClass(
          'upper',
          `Denali::${heading.toUpperCase()} has upper case styling when @isUpperCase arg is set to true`
        );
    }
  });

  test('it supports statuses', async function (assert) {
    for (const [heading, template] of templates) {
      await render(template);

      this.set('title', 'My Title');

      this.set('status', undefined);
      assert.dom(heading).exists(`DenaliTitle::${heading.toUpperCase()} can render without a status set`);

      this.set('status', 'danger');
      assert
        .dom(heading)
        .hasClass(
          'is-status-danger',
          `DenaliTitle::${heading.toUpperCase()} has status of danger when @status arg is set to danger`
        );

      this.set('status', 'warning');
      assert
        .dom(heading)
        .hasClass(
          'is-status-warning',
          `DenaliTitle::${heading.toUpperCase()} has status of warning when @status arg is set to warning`
        );

      this.set('status', 'success');
      assert
        .dom(heading)
        .hasClass(
          'is-status-success',
          `DenaliTitle::${heading.toUpperCase()} has status of success when @status arg is set to success`
        );

      this.set('status', 'info');
      assert
        .dom(heading)
        .hasClass(
          'is-status-info',
          `DenaliTitle::${heading.toUpperCase()} has status of info when @status arg is set to info`
        );
    }
  });
});
