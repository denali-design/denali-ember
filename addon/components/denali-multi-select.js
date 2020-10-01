/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { any, func, boolean, array, string } from 'prop-types';
import { action, set } from '@ember/object';

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
  searchFunc = () => {};

  @arg(array.isRequired)
  options;

  @arg(func.isRequired)
  onChange;

  @arg(array)
  selectedOptions;

  @arg(array)
  disabledOptions = [];

  @tracked
  searchValue = '';

  @tracked
  _isFiltered = false;

  @tracked
  _filteredOptions = [];

  get _displayedOptions() {
    if (this.searchValue) {
      return this.options.filter((option) => this.searchFunc(option, this.searchValue));
    } else {
      return this.options;
    }
  }

  @action
  onSelect(el) {
    if (this.selectedOptions.includes(el)) {
      const index = this.selectedOptions.indexOf(el);
      this.selectedOptions.splice(index, 1);
      this.onChange([...this.selectedOptions]);
    } else {
      this.onChange([...this.selectedOptions, el]);
    }
  }

  @action
  filterOptions({ target: { value } }) {
    this.searchValue = value;
  }

  get isSmallClass() {
    return this.isSmall ? 'is-small' : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
