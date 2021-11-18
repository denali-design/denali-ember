/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { bool } from 'prop-types';

@forbidExtraArgs
export default class DenaliTabsTabComponent extends Component {
  @arg(bool)
  isActive = false;

  @arg(bool)
  isDisabled = false;

  get isActiveClass() {
    return this.isActive ? 'is-active' : undefined;
  }

  get isDisabledClass() {
    return this.isDisabled ? 'is-disabled' : undefined;
  }
}
