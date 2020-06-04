/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import { arg } from 'ember-arg-types';
import { oneOf } from 'prop-types';
import Component from '@glimmer/component';

const sizes = ['small'];

const color = ['brand', 'grey', 'red', 'orange', 'yellow', 'lime', 'green', 'sky', 'blue', 'purple', 'violet', 'pink'];

const shade = ['100', '200', '300', '400', '500', '600', '700', '800'];

export default class DenaliChipComponent extends Component {
  @arg(oneOf(sizes))
  size;

  @arg(oneOf(color))
  backgroundColor;

  @arg(oneOf(color))
  textColor;

  @arg(oneOf(shade))
  backgroundShade = '500';

  @arg(oneOf(shade))
  textShade = '500';

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  get backgroundColorClass() {
    if (this.backgroundColor) {
      return `has-bg-${this.backgroundColor}-${this.backgroundShade}`;
    }

    return undefined;
  }

  get textColorClass() {
    if (this.textColor) {
      return `is-${this.textColor}-${this.textShade}`;
    }

    return undefined;
  }
}
