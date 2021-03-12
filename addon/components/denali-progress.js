/**
 * Copyright 2021, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, number, oneOf } from 'prop-types';
import { COLORS, SHADES } from './color-enums';
import { SIZES } from './denali-progress-enums';

export default class DenaliProgressComponent extends Component {
  @arg(number)
  value = 0;

  @arg(oneOf(COLORS))
  color = COLORS[0];

  @arg(oneOf(SHADES))
  shade = '500';

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
