import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupRouting from '../../helpers/setup-router';

module('Integration | Component | denali-navbar', function (hooks) {
  setupRenderingTest(hooks);
  setupRouting(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<DenaliNavbar @isFixedTop={{this.isFixedTop}} class="test-nav" />`);

    assert.dom('nav.nav.test-nav').exists('DenaliNavbar exists and renders a nav element');
    this.set('isFixedTop', true);
    assert
      .dom('nav.nav.test-nav')
      .hasClass('is-fixed-top', 'DenaliNavbar has is-fixed-top class when `@isFixedTop` arg is true');
  });

  test('it can support responsive', async function (assert) {
    await render(hbs`
      <DenaliNavbar class="test-nav" @isResponsive={{this.isResponsive}} as |Nav|>
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
      <DenaliNavbar class="test-nav" as |Nav|>
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
      <DenaliNavbar class="test-nav" as |Nav|>
        <Nav.Left as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>Nav Item</Section.Item>
          <Section.Icon class="nav-icon" @icon="code" />
          <Section.Control>Nav Control</Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
          <Section.Menu as |Menu|>
            <Menu.Trigger>Test Trigger</Menu.Trigger>
            <Menu.Content>
              <DenaliLink href="http://denali.design">Link1</DenaliLink>
              <DenaliLink href="http://denali.design">Link2</DenaliLink>
            </Menu.Content>
          </Section.Menu>
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
    assert.dom('.test-nav .nav-left .menu').hasClass('menu--nav', 'Left menu has correct class');
    assert.dom('.test-nav .nav-left .menu .menu-trigger').hasClass('nav-item', 'Left menu trigger has correct class');
    assert
      .dom('.test-nav .nav-left .menu .menu-trigger')
      .hasText('Test Trigger', 'Left menu can yield a trigger component');
    await triggerEvent('.test-nav .nav-left .menu .menu-trigger', 'mouseenter');

    assert.dom('.test-nav .nav-left .menu-content a').exists({ count: 2 }, 'Left menu content renders correctly');
  });

  test('left can yield sub components when `@isResponsive` is true', async function (assert) {
    await render(hbs`
      <DenaliNavbar class="test-nav" @isResponsive={{true}} as |Nav|>
        <Nav.Left as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>Nav Item</Section.Item>
          <Section.Icon class="nav-icon" @icon="code" />
          <Section.Control>Nav Control</Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
          <Section.Menu as |Menu|>
            <Menu.Trigger>Test Trigger</Menu.Trigger>
            <Menu.Content>
              <DenaliLink href="http://denali.design">Link1</DenaliLink>
              <DenaliLink href="http://denali.design">Link2</DenaliLink>
            </Menu.Content>
          </Section.Menu>
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

    assert.dom('.test-nav .nav-left .menu').hasClass('menu--nav', 'Left menu has correct class');
    assert.dom('.test-nav .nav-left .menu .menu-trigger').hasClass('nav-item', 'Left menu trigger has correct class');
    assert
      .dom('.test-nav .nav-left .menu .menu-trigger')
      .hasText('Test Trigger', 'Left menu can yield a trigger component');
    await triggerEvent('.test-nav .nav-left .menu .menu-trigger', 'mouseenter');

    assert.dom('.test-nav .nav-left .menu-content a').exists({ count: 2 }, 'Left menu content renders correctly');
  });

  test('center can yield sub components', async function (assert) {
    await render(hbs`
      <DenaliNavbar class="test-nav" as |Nav|>
        <Nav.Center as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>Nav Item</Section.Item>
          <Section.Icon class="nav-icon" @icon="code" />
          <Section.Control>Nav Control</Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
          <Section.Menu as |Menu|>
            <Menu.Trigger>Test Trigger</Menu.Trigger>
            <Menu.Content>
              <DenaliLink href="http://denali.design">Link1</DenaliLink>
              <DenaliLink href="http://denali.design">Link2</DenaliLink>
            </Menu.Content>
          </Section.Menu>
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

    assert.dom('.test-nav .nav-center .menu').hasClass('menu--nav', 'Center menu has correct class');
    assert
      .dom('.test-nav .nav-center .menu .menu-trigger')
      .hasClass('nav-item', 'Center menu trigger has correct class');
    assert
      .dom('.test-nav .nav-center .menu .menu-trigger')
      .hasText('Test Trigger', 'Center menu can yield a trigger component');
    await triggerEvent('.test-nav .nav-center .menu .menu-trigger', 'mouseenter');

    assert.dom('.test-nav .nav-center .menu-content a').exists({ count: 2 }, 'Center menu content renders correctly');
  });

  test('right can yield sub components', async function (assert) {
    await render(hbs`
      <DenaliNavbar class="test-nav" as |Nav|>
        <Nav.Right as |Section|>
          <Section.Logo src="img.png"/>
          <Section.Item>Nav Item</Section.Item>
          <Section.Icon class="nav-icon" @icon="code" />
          <Section.Control>Nav Control</Section.Control>
          <Section.Link href="http://denali.design" />
          <Section.LinkTo @route="four-oh-four" />
          <Section.Menu as |Menu|>
            <Menu.Trigger>Test Trigger</Menu.Trigger>
            <Menu.Content>
              <DenaliLink href="http://denali.design">Link1</DenaliLink>
              <DenaliLink href="http://denali.design">Link2</DenaliLink>
            </Menu.Content>
          </Section.Menu>
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

    assert.dom('.test-nav .nav-right .menu').hasClass('menu--nav', 'Right menu has correct class');
    assert.dom('.test-nav .nav-right .menu .menu-trigger').hasClass('nav-item', 'Right menu trigger has correct class');
    assert
      .dom('.test-nav .nav-right .menu .menu-trigger')
      .hasText('Test Trigger', 'Right menu can yield a trigger component');
    await triggerEvent('.test-nav .nav-right .menu .menu-trigger', 'mouseenter');

    assert.dom('.test-nav .nav-right .menu-content a').exists({ count: 2 }, 'Right menu content renders correctly');
  });
});
