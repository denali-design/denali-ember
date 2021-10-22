import { hbs } from 'ember-cli-htmlbars';
import { withKnobs } from '@storybook/addon-knobs';
import { rootName } from '../knob-categories';

export default {
  title: `${rootName}/DenaliNavbar/Elements`,
  component: 'DenaliNavbar',
  decorators: [withKnobs],
};

export const Brand = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/denali-logo.svg" />
      </Nav.Left>
    </DenaliNavbar>
  `,
});

export const Items = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/denali-logo.svg" />
      </Nav.Left>

      <Nav.Right as |Right|>
        <Right.Item @isActive={{true}}>Home</Right.Item>
        <Right.Item>About</Right.Item>
        <Right.Item>Contact</Right.Item>
      </Nav.Right>
    </DenaliNavbar>
  `,
});

export const Icons = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/denali-logo.svg" />
      </Nav.Left>

      <Nav.Right as |Right|>
        <Right.Icon @icon="dashboard" @name="Dashboard" />
        <Right.Icon @icon="menu-dialpad" @name="Apps" />
        <Right.Icon @icon="user-profile-circle" @name="Profile" />
      </Nav.Right>
    </DenaliNavbar>
  `,
});

export const Control = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/denali-logo.svg" />
      </Nav.Left>

      <Nav.Right as |Right|>
        <Right.Control>
          <DenaliInput @isInverse={{true}} @iconBack="search" @iconBackClass="link" placeholder="Search" />
        </Right.Control>
      </Nav.Right>
    </DenaliNavbar>
  `,
});

export const Menu = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/denali-logo.svg" />
      </Nav.Left>

      <Nav.Right as |Right|>
        <Right.Menu as |Menu|>
          <Menu.Trigger>Menu<DenaliIcon @size="small" @icon="arrowhead-down" /></Menu.Trigger>

          <Menu.Content>
            <DenaliLink>Menu Item #1</DenaliLink>
            <DenaliLink>Menu Item #2</DenaliLink>
            <DenaliLink>Menu Item #3</DenaliLink>
          </Menu.Content>
        </Right.Menu>
      </Nav.Right>
    </DenaliNavbar>
  `,
});

export const BackgroundModifier = () => ({
  template: hbs`
    <DenaliNavbar style="background:#0C301E;" @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/paas-logo.png" />
      </Nav.Left>
    </DenaliNavbar>
  `,
});
