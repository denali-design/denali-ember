import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, array, text } from '@storybook/addon-knobs';
import { rootName, argument, example } from '../knob-categories';

export default {
  title: `${rootName}/DenaliNavbar`,
  component: 'DenaliNavbar',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/denali-logo.svg" />
      </Nav.Left>

      <Nav.Center as |Center|>
        <Center.Item @isActive={{true}}>Home</Center.Item>
        <Center.Item>About</Center.Item>
        <Center.Item>Contact</Center.Item>
      </Nav.Center>

      <Nav.Right as |Right|>
        <Right.Menu as |Menu|>
          <Menu.Trigger>Menu<DenaliIcon @size="small" @icon="arrowhead-down" /></Menu.Trigger>

          <Menu.Content>
            <DenaliLink>Menu Item #1</DenaliLink>
          </Menu.Content>
        </Right.Menu>

        <Right.Icon @icon="user-profile-circle" @name="Profile" /> User
      </Nav.Right>
    </DenaliNavbar>
  `,
});

export const Playground = () => ({
  template: hbs`
    <DenaliNavbar
      @isResponsive={{this.isResponsive}}
      @isFixedTop={{this.isFixedTop}}
      style="background:{{this.navBackground}};" as |Nav|
    >
      <Nav.Left as |Left|>
        <Left.Logo @src={{this.logo}} />
      </Nav.Left>

      <Nav.Center as |Center|>
        {{#each this.centerItems as |item|}}
          <Center.Item @isActive={{eq item this.activeCenter}}>{{item}}</Center.Item>
        {{/each}}
      </Nav.Center>

      <Nav.Right as |Right|>
        {{#if this.menuItems.length}}
          <Right.Menu as |Menu|>
            <Menu.Trigger>{{this.menu}}<DenaliIcon @size="small" @icon="arrowhead-down" /></Menu.Trigger>

            <Menu.Content>
              {{#each this.menuItems as |item|}}
                <DenaliLink>{{item}}</DenaliLink>
              {{/each}}
            </Menu.Content>
          </Right.Menu>
        {{/if}}

        {{#each this.rightIcons as |icon|}}
          <Right.Icon @icon={{icon}} @name={{icon}} />
        {{/each}}
      </Nav.Right>
    </DenaliNavbar>
  `,
  context: {
    isResponsive: boolean('isResponsive', false, argument),
    isFixedTop: boolean('isFixedTop', false, argument),

    logo: text('logo', 'https://denali-design.github.io/denali-css/denali-logo.svg', example),
    navBackground: text('navBackground', '', example),
    activeCenter: text('activeCenter', 'Home', example),
    centerItems: array('centerItems', ['Home', 'About', 'Contact'], ',', example),
    menu: text('menu', 'Menu', example),
    menuItems: array('menuItems', ['Menu Item #1', 'Menu Item #2'], ',', example),
    rightIcons: array('rightIcons', ['dashboard', 'user-profile-circle'], ',', example),
  },
});
