/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { func, boolean, array, string } from 'prop-types';
import { action, computed, set } from '@ember/object';
import { guidFor } from '@ember/object/internals';

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

  @tracked
  isOpen = false;

  @tracked
  _options;

  constructor(owner, args) {
    super(owner, args);

    this._options = this.options.map((option) => {
      return { id: guidFor(option), item: option, checked: false, filtered: null };
    });
  }

  @computed('_options.@each.filtered')
  get displayOptions() {
    if (this._options.every((option) => option.filtered === null)) {
      return this._options;
    }
    return this._options.filter((option) => option.filtered);
  }

  @computed('_options.@each.checked')
  get selections() {
    return this._options
      .filter((option) => option.checked)
      .map((option) => {
        // if (option.item.text) {
        //   return option.item.text;
        // }
        return option.item;
      });
  }

  @action
  onSelect(el) {
    const selectedIndex = this._options.findIndex((option) => option.id === el.id);
    set(this._options[selectedIndex], 'checked', !this._options[selectedIndex].checked);
  }

  @action
  filterOptions(e) {
    if (e.target.value && e.target.value !== '') {
      this._options.forEach((option) => {
        if (this.searchFunc(option.item, e.target.value)) {
          set(option, 'filtered', true);
        } else {
          set(option, 'filtered', false);
        }
      });
    } else if (e.target.value === '') {
      this._options.forEach((option) => set(option, 'filtered', null));
    }
  }

  get isSmallClass() {
    return this.isSmall ? 'is-small' : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
