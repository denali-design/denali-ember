import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { argument } from './knob-categories';

export default {
  title: 'DenaliNavbar',
  component: 'DenaliNavbar',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
  <DenaliNavbar
        @isResponsive={{isResponsive}}
        @isMenuActive={{isMenuActive}}
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
  context: {
    isResponsive: boolean('isResponsive', true, argument),
    isMenuActive: boolean('isMenuActive', true, argument),
  },
});
