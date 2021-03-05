import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute } from './knob-categories';

export default {
  title: 'DenaliNavbar',
  component: 'DenaliNavbar',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
  <DenaliNavbar
        @isResponsive={{true}}
        @isMenuActive={{true}}
        as |Nav| >
    <Nav.Left as |Section|>
      <Section.Logo src="https://denali-design.github.io/denali-css/denali-logo.svg"/>
    </Nav.Left>
    <Nav.Center as |Section|>
      <Section.Item>
        Home
      </Section.Item>
      <Section.Item>
        About
      </Section.Item>
      <Section.Item>
        Contact
      </Section.Item>
    </Nav.Center>
    <Nav.Right as |Section|>
      <Section.Icon
        @icon="dashboard"
      />
      <Section.Icon
        @icon="menu-dialpad"
      />
      <Section.Icon
        @icon="user-profile-circle"
      />
    </Nav.Right>
  </DenaliNavbar>
  `,
});

export const Items = () => ({
  template: hbs`
  <DenaliNavbar
    @isResponsive={{true}}
    @isMenuActive={{true}}
    as |Nav|
  >
    <Nav.Left as |Section|>
      <Section.Logo src="https://denali-design.github.io/denali-css/denali-logo.svg"/>
    </Nav.Left>
    <Nav.Right as |Section|>
      <Section.Item @isActive={{true}}>
        Home
      </Section.Item>
      <Section.Item>
        About
      </Section.Item>
      <Section.Item>
        Contact
      </Section.Item>
    </Nav.Right>
  </DenaliNavbar>
  `,
});

export const Icons = () => ({
  template: hbs`
  <DenaliNavbar
    @isResponsive={{true}}
    @isMenuActive={{true}}
    as |Nav|
  >
    <Nav.Left as |Section|>
      <Section.Logo src="https://denali-design.github.io/denali-css/denali-logo.svg"/>
    </Nav.Left>
    <Nav.Right as |Section|>
      <Section.Icon
        @icon="dashboard"
      />
      <Section.Icon
        @icon="menu-dialpad"
      />
      <Section.Icon
        @icon="user-profile-circle"
      />
    </Nav.Right>
  </DenaliNavbar>
  `,
});

export const Left = () => ({
  template: hbs`
  <DenaliNavbar
    @isResponsive={{true}}
    @isMenuActive={{true}}
    as |Nav|
  >
    <Nav.Left as |Section|>
      <Section.Logo src="https://denali-design.github.io/denali-css/denali-logo.svg"/>
    </Nav.Left>
  </DenaliNavbar>
  `,
});

export const Center = () => ({
  template: hbs`
  <DenaliNavbar
    @isResponsive={{true}}
    @isMenuActive={{true}}
    as |Nav|
  >
    <Nav.Left as |Section|>
      <Section.Logo src="https://denali-design.github.io/denali-css/denali-logo.svg"/>
    </Nav.Left>
    <Nav.Center as |Section|>
      <Section.Item>
        Center
      </Section.Item>
    </Nav.Center>
  </DenaliNavbar>
  `,
});

export const Right = () => ({
  template: hbs`
  <DenaliNavbar
    @isResponsive={{true}}
    @isMenuActive={{true}}
    as |Nav|
  >
    <Nav.Left as |Section|>
      <Section.Logo src="https://denali-design.github.io/denali-css/denali-logo.svg"/>
    </Nav.Left>
    <Nav.Right as |Section|>
      <Section.Icon
        @icon="user-profile-circle"
      />
    </Nav.Right>
  </DenaliNavbar>
  `,
});

export const Playground = () => ({
  template: hbs`
  <DenaliNavbar
    @isResponsive={{isResponsive}}
    @isMenuActive={{isMenuActive}}
    class={{class}}
    as |Nav|
  >
    <Nav.Left as |Section|>
      <Section.Logo src="https://denali-design.github.io/denali-css/denali-logo.svg"/>
    </Nav.Left>
    <Nav.Center as |Section|>
      <Section.Item @isActive={{true}}>
        Home
      </Section.Item>
      <Section.Item>
        About
      </Section.Item>
      <Section.Item>
        Contact
      </Section.Item>
    </Nav.Center>
    <Nav.Right as |Section|>
      <Section.Icon
        @icon="dashboard"
      />
      <Section.Icon
        @icon="menu-dialpad"
      />
      <Section.Icon
        @icon="user-profile-circle"
      />
    </Nav.Right>
  </DenaliNavbar>
  `,
  context: {
    isResponsive: boolean('isResponsive', true, argument),
    isMenuActive: boolean('isMenuActive', true, argument),
    class: text('class', '', attribute),
  },
});
