import { hbs } from 'ember-cli-htmlbars';
import { withKnobs } from '@storybook/addon-knobs';
import { rootName } from '../knob-categories';

export default {
  title: `${rootName}/DenaliNavbar/Sections`,
  component: 'DenaliNavbar',
  decorators: [withKnobs],
};

export const Left = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Left as |Left|>
        <Left.Logo @src="https://denali-design.github.io/denali-css/denali-logo.svg" />
      </Nav.Left>
    </DenaliNavbar>
  `,
});

export const Center = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Center as |Center|>
        <Center.Item @isActive={{true}}>Home</Center.Item>
      </Nav.Center>
    </DenaliNavbar>
  `,
});

export const Right = () => ({
  template: hbs`
    <DenaliNavbar @isResponsive={{true}} as |Nav|>
      <Nav.Right as |Right|>
        <Right.Icon @icon="user-profile-circle" />
      </Nav.Right>
    </DenaliNavbar>
  `,
});
