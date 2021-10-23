/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { oneOf, boolean, string, func } from 'prop-types';
import { STATES } from './denali-tag-enums';

@forbidExtraArgs
export default class DenaliTagComponent extends Component {
  @arg(oneOf(STATES))
  state;

  @arg(boolean)
  isOutlined = false;

  @arg(boolean)
  isSmall = false;

  @arg(string)
  iconFront;

  @arg(string)
  iconBack;

  @arg(string)
  iconFrontClass;

  @arg(string)
  iconBackClass;

  @arg(func)
  onIconFrontClick = () => null;

  @arg(func)
  onIconBackClick = () => null;

  get isActiveClass() {
    return this.state === 'active' ? 'is-active' : undefined;
  }

  get isDisabledClass() {
    return this.state === 'disabled' ? 'is-disabled' : undefined;
  }

  get isOutlinedClass() {
    return this.isOutlined ? 'outlined' : undefined;
  }

  get isSmallClass() {
    return this.isSmall ? 'is-small' : undefined;
  }

  get hasIconFront() {
    return this.iconFront ? 'has-icon-front' : undefined;
  }

  get hasIconBack() {
    return this.iconBack ? 'has-icon-back' : undefined;
  }
}
