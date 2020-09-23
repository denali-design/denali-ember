/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { any, func, boolean, array, string } from 'prop-types';
import { action } from '@ember/object';

export default class DenaliMultiSelectComponent extends Component {
  @arg(boolean)
  isSmall = false;

  @arg(boolean)
  isInverse = false;

  @arg(string)
  placeholder = 'Select Items';

  @arg(boolean)
  isSearchEnabled = false;

  @arg(func)
  onSearch = () => {};

  @arg(array.isRequired)
  options;

  @arg(func.isRequired)
  onChange;

  @arg(any)
  selectedOptions;

  @arg(array)
  disabledOptions = [];

  @tracked
  searchValue = '';

  @action
  onSelect(el) {
    this.onChange(el);
  }

  @action
  filterOptions({ target: { value } }) {
    this.searchValue = value;
    this.onSearch(value);
  }

  get isSmallClass() {
    return this.isSmall ? 'is-small' : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
