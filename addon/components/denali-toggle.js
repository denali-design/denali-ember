/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { action } from '@ember/object';
import { boolean, array, any, func } from 'prop-types';

@forbidExtraArgs
export default class DenaliToggleComponent extends Component {
  @arg(boolean)
  isSmall = false;

  @arg(boolean)
  isInverse = false;

  @arg(array.isRequired)
  options;

  @arg(any)
  activeOption;

  @arg(array)
  disabledOptions = [];

  @arg(func.isRequired)
  onChange;

  @action
  onClick(option) {
    if (!this.disabledOptions.includes(option)) {
      this.onChange(option);
    }
  }

  get isSmallClass() {
    return this.isSmall ? 'is-small' : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
