/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, func, oneOf, string } from 'prop-types';

const typeIcons = {
  default: 'notification',
  info: 'information-circle',
  warning: 'warning',
  success: 'success',
  danger: 'stop-warning'
}

const types = Object.keys(typeIcons);

export default class DenaliAlertComponent extends Component {
  @arg(oneOf(types))
  type = types[0];

  @arg(boolean)
  isBlock = false;

  @arg(string)
  title;

  @arg(string)
  context;

  @arg(func)
  onClose;

  get isBlockClass() {
    return this.isBlock ? 'is-block': undefined;
  }

  get iconClass() {
    const { type, isBlock } = this;
    return `d-${typeIcons[type]}${isBlock ? '-solid' : ''}`;
  }

  get typeClass() {
    const { type } = this;
    return type !== type[0] ? `is-${type}` : undefined;
  }
}
