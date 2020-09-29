/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf, string } from 'prop-types';
import { SIZES } from './denali-icon-enums';

export default class DenaliIconComponent extends Component {
  @arg(string.isRequired)
  icon;

  @arg(oneOf(SIZES))
  size;

  get iconClass() {
    const { icon } = this;
    return `d-${icon}`;
  }

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }
}
