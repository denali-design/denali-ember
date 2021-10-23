/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { func, boolean, string, array, any, oneOf } from 'prop-types';
import { action } from '@ember/object';
import { SIZES } from './denali-select-enums';

@forbidExtraArgs
export default class DenaliSelectComponent extends Component {
  @arg(string)
  wrapperClass;

  @arg(oneOf(SIZES))
  size;

  @arg(boolean)
  isInverse = false;

  @arg(array.isRequired)
  options;

  @arg(any)
  selectedOption;

  @arg(array)
  disabledOptions = [];

  @arg(func.isRequired)
  onChange;

  @action
  onSelect(e) {
    this.onChange(this.options[e.target.selectedIndex]);
  }

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
