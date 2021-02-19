/**
 * Copyright 2021, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { array, boolean, oneOf } from 'prop-types';
import { SIZES } from './denali-progress-enums';

export default class DenaliProgressComponent extends Component {
  @arg(array)
  percent = [0];

  @arg(array)
  colors = [];

  @arg(oneOf(SIZES))
  size = SIZES[0];

  @arg(boolean)
  isLoading = false;

  get renderablePercentages() {
    let renderablePercentages = [];
    const maxLimit = Math.max(this.percent.length, this.colors.length);
    let remainingPercent = 100;
    for (let i = 0; i < maxLimit; i++) {
      let renderValue = Math.min(this.percent[i], remainingPercent);
      let obj = {
        value: renderValue,
        color: this.colors[i] || '',
      };
      renderablePercentages.push(obj);
      remainingPercent -= this.percent[i];
      if (remainingPercent <= 0) {
        break;
      }
    }
    return renderablePercentages;
  }

  get sizeCLass() {
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
