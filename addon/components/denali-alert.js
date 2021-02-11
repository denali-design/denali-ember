/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, func, oneOf, string } from 'prop-types';
import { TYPES } from './denali-alert-enums';

export default class DenaliAlertComponent extends Component {
  @arg(oneOf(TYPES))
  type = TYPES[0];

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
    const { type } = this;
    return type !== TYPES[0] ? `is-${type}` : undefined;
  }
}
