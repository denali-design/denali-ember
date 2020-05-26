/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { func, boolean, array, any } from 'prop-types';
import { action } from '@ember/object';

export default class DenaliSelectComponent extends Component {
  @arg(boolean)
  isSmall = false;

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

  get isSmallClass() {
    return this.isSmall ? 'is-small' : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
