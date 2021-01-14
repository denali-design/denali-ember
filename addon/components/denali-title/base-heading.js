/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, oneOf } from 'prop-types';
import { STATUSES } from '../denali-title-enums';

export default class DenaliTitleBaseHeadingComponent extends Component {
  @arg(boolean)
  isRegular = false;

  @arg(boolean)
  isUpperCase = false;

  @arg(oneOf(STATUSES))
  status;

  get isRegularClass() {
    return this.isRegular ? 'is-regular' : undefined;
  }

  get isUpperCaseClass() {
    return this.isUpperCase ? 'upper' : undefined;
  }

  get statusClass() {
    return this.status ? `is-status-${this.status}` : undefined;
  }
}
