import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupRouting from '../../helpers/setup-router';

module('Integration | Component | denali-navbar', function (hooks) {
  setupRenderingTest(hooks);
  setupRouting(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <DenaliNavbar
        class="test-nav"
      >
      </DenaliNavbar>
    `);

    assert.dom('nav.nav.test-nav').exists('DenaliNavbar exists and renders a nav element');
  });

  test('it can support responsive', async function (assert) {
    await render(hbs`
      <DenaliNavbar
        class="test-nav"
        @isResponsive={{this.isResponsive}}
        as |Nav|
      >
        <Nav.Left></Nav.Left>
      </DenaliNavbar>
    `);
    assert
      .dom('.test-nav .nav-left .nav-responsive-menu')
      .doesNotExist('DenaliNavbar does not render a responsive menu button by default');
    assert
      .dom('.test-nav.nav .nav-responsive')
      .doesNotExist('DenaliNavbar does not render a responsive div by default');

    this.set('isResponsive', true);
    assert
      .dom('.test-nav .nav-left .nav-responsive-menu')
      .exists('DenaliNavbar renders a responsive menu button when `@isResponsive` arg is true');
    assert
      .dom('.test-nav.nav .nav-responsive')
      .exists('DenaliNavbar renders a responsive div when `@isResponsive` arg is true');

    assert
      .dom('.test-nav.nav .nav-responsive.is-active')
      .doesNotExist('DenaliNavbar responsive div is not active default');
    await click('.test-nav .nav-responsive-menu');
    assert
      .dom('.test-nav.nav .nav-responsive.is-active')
      .exists('DenaliNavbar responsive div is toggled active when clicking the responsive menu');
    await click('.test-nav .nav-responsive-menu');
    assert
      .dom('.test-nav.nav .nav-responsive.is-active')
      .doesNotExist('DenaliNavbar responsive div is toggled inactive when clicking the responsive menu');
  });

  test('it can yield left, center, & right section components', async function (assert) {
    await render(hbs`
      <DenaliNavbar
        class="test-nav"
        as |Nav|
      >
        <Nav.Left></Nav.Left>
        <Nav.Center></Nav.Center>
        <Nav.Right></Nav.Right>
      </DenaliNavbar>
    `);

    assert.dom('.test-nav.nav .nav-left').exists('DenaliNavbar can yield a left section component');
    assert.dom('.test-nav.nav .nav-center').exists('DenaliNavbar can yield a center section component');
    assert.dom('.test-nav.nav .nav-right').exists('DenaliNavbar can yield a right section component');
  });

  test('left can yield sub components', async function (assert) {
    await render(hbs`
      <DenaliNavbar
        class="test-nav"
        as |Nav|
      >
        <Nav.Left as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>
            Nav Item
          </Section.Item>
          <Section.Icon @icon="code" />
          <Section.Control>
            Nav Control
          </Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
        </Nav.Left>
      </DenaliNavbar>
    `);

    assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
    assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
    assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
    assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
    assert
      .dom('.test-nav .nav-left a.nav-item')
      .hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
    assert
      .dom('.test-nav .nav-left a.ember-view.nav-item')
      .hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');
  });

  test('left can yield sub components when `@isResponsive` is true', async function (assert) {
    await render(hbs`
      <DenaliNavbar
        class="test-nav"
        @isResponsive={{true}}
        as |Nav|
      >
        <Nav.Left as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>
            Nav Item
          </Section.Item>
          <Section.Icon @icon="code" />
          <Section.Control>
            Nav Control
          </Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
        </Nav.Left>
      </DenaliNavbar>
    `);

    assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
    assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
    assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
    assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
    assert
      .dom('.test-nav .nav-left a.nav-item')
      .hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
    assert
      .dom('.test-nav .nav-left a.ember-view.nav-item')
      .hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');
  });

  test('center can yield sub components', async function (assert) {
    await render(hbs`
      <DenaliNavbar
        class="test-nav"
        as |Nav|
      >
        <Nav.Center as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>
            Nav Item
          </Section.Item>
          <Section.Icon @icon="code" />
          <Section.Control>
            Nav Control
          </Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
        </Nav.Center>
      </DenaliNavbar>
    `);

    assert
      .dom('.test-nav .nav-center .nav-brand')
      .hasAttribute('src', 'img.png', 'Center can yield a nav logo component');
    assert.dom('.test-nav .nav-center .nav-item').hasText('Nav Item', 'Center can yield a nav item component');
    assert.dom('.test-nav .nav-center .nav-icon .d-icon').hasClass('d-code', 'Center can yield a nav icon component');
    assert.dom('.test-nav .nav-center .nav-control').hasText('Nav Control', 'Center can yield a nav control component');
    assert
      .dom('.test-nav .nav-center a.nav-item')
      .hasAttribute('href', 'http://denali.design', 'Center can yield a nav link component');
    assert
      .dom('.test-nav .nav-center a.ember-view.nav-item')
      .hasAttribute('href', '/four-oh-four', 'Center can yield a nav link-to component');
  });

  test('right can yield sub components', async function (assert) {
    await render(hbs`
      <DenaliNavbar
        class="test-nav"
        as |Nav|
      >
        <Nav.Right as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>
            Nav Item
          </Section.Item>
          <Section.Icon @icon="code" />
          <Section.Control>
            Nav Control
          </Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
        </Nav.Right>
      </DenaliNavbar>
    `);

    assert
      .dom('.test-nav .nav-right .nav-brand')
      .hasAttribute('src', 'img.png', 'Right can yield a nav logo component');
    assert.dom('.test-nav .nav-right .nav-item').hasText('Nav Item', 'Right can yield a nav item component');
    assert.dom('.test-nav .nav-right .nav-icon .d-icon').hasClass('d-code', 'Right can yield a nav icon component');
    assert.dom('.test-nav .nav-right .nav-control').hasText('Nav Control', 'Right can yield a nav control component');
    assert
      .dom('.test-nav .nav-right a.nav-item')
      .hasAttribute('href', 'http://denali.design', 'Right can yield a nav link component');
    assert
      .dom('.test-nav .nav-right a.ember-view.nav-item')
      .hasAttribute('href', '/four-oh-four', 'Right can yield a nav link-to component');
  });
});
