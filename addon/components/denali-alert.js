/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, func, oneOf, string } from 'prop-types';
import { STYLES } from './denali-alert-enums';

export default class DenaliAlertComponent extends Component {
  @arg(oneOf(STYLES))
  style = STYLES[0];

  @arg(boolean)
  isBlock = false;

  @arg(string)
  title;

  @arg(string)
  context;

  @arg(string)
  icon;

  @arg(func)
  onClose;

  get isBlockClass() {
    return this.isBlock ? 'is-block' : undefined;
  }

  get iconClass() {
    const { icon, isBlock } = this;
    return icon ? `d-${icon}${isBlock ? '-solid' : ''}` : undefined;
  }

  get typeClass() {
    const { style } = this;
    return style !== STYLES[0] ? `is-${style}` : undefined;
  }
}
