/**
 * Copyright 2021, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, oneOf } from 'prop-types';
import { SIZES } from './denali-progress-enums';

export default class DenaliProgressComponent extends Component {
  @arg(oneOf(SIZES))
  size = SIZES[0];

  @arg(boolean)
  isLoading = false;

  get sizeClass() {
    if (this.size === SIZES[1]) {
      return 'd-progress__sm';
    } else if (this.size === SIZES[2]) {
      return 'd-progress__md';
    } else if (this.size === SIZES[3]) {
      return 'd-progress__lg';
    } else {
      return undefined;
    }
  }

  get hasLoaderClass() {
    return this.isLoading ? 'd-progress__loading' : undefined;
  }
}
