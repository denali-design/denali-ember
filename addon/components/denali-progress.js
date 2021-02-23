/**
 * Copyright 2021, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { array, boolean, oneOf } from 'prop-types';
import { SIZES } from './denali-progress-enums';
import { htmlSafe } from '@ember/template';

export default class DenaliProgressComponent extends Component {
  @arg(array)
  percents = [0];

  @arg(array)
  colors = [];

  @arg(oneOf(SIZES))
  size = SIZES[0];

  @arg(boolean)
  isLoading = false;

  get renderablePercentages() {
    let renderablePercentages = [];
    const maxLimit = Math.max(this.percents.length, this.colors.length);
    let remainingPercent = 100;
    for (let i = 0; i < maxLimit; i++) {
      let renderValue = Math.min(this.percents[i], remainingPercent);
      let colorVal = this.colors[i] || '';
      const obj = {
        value: renderValue,
        color: colorVal,
        style: colorVal
          ? htmlSafe(`width: ${renderValue}%;background-color: ${colorVal}`)
          : htmlSafe(`width: ${renderValue}%;`),
      };
      renderablePercentages.push(obj);
      remainingPercent -= this.percents[i];
      if (remainingPercent <= 0) {
        break;
      }
    }
    return renderablePercentages;
  }

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
