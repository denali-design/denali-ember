/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { func, boolean, array, any } from 'prop-types';
import { action, computed, set } from '@ember/object';

export default class DenaliMultiSelectComponent extends Component {
  @arg(boolean)
  isSmall = false;

  @arg(boolean)
  isInverse = false;

  @arg(boolean)
  isSearchEnabled = false;

  @arg(func.isRequired)
  searchFunc = () => {};

  @arg(array.isRequired)
  options;

  @arg(any)
  selectedOption;

  @arg(func.isRequired)
  onChange;

  @tracked
  isOpen = false;

  @tracked
  _options;

  @computed('_options')
  get filteredOptions() {
    if (this._options === undefined) {
      this._options = this.options.map((option) => {
        return { item: option, checked: false };
      });
    }
    return this._options;
  }

  set filteredOptions(value) {
    this._options = value;
  }
  @computed('_options')
  get selections() {
    if (this._options) {
      debugger;
      return this._options.filter((option) => option.checked).map((option) => option.item);
    }
    return [];
  }

  @action
  onSelect(e) {
    const selectedValue = e.target.nextElementSibling.textContent.trim();
    const selectedIndex = this.filteredOptions.findIndex((option) => this.searchFunc(option.item, selectedValue));
    let test = this._options[selectedIndex];
    set(test, 'checked', !this._options[selectedIndex].checked);
    // this._options[selectedIndex].checked = !this._options[selectedIndex].checked;
  }

  @action
  filterOptions(e) {
    if (e.target.value) {
      set(
        this,
        '_options',
        this._options.filter((val) => this.searchFunc(val.item, e.target.value))
      );
    }
  }

  get isSmallClass() {
    return this.isSmall ? 'is-small' : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
