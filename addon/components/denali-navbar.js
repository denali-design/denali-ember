/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { arg } from 'ember-arg-types';
import { bool } from 'prop-types';

export default class DenaliNavbarComponent extends Component {
  @arg(bool)
  isResponsive = false;

  @arg(bool)
  isFixedTop = false;

  @tracked
  isMenuActive = false;

  get isMenuActiveClass() {
    return this.isMenuActive ? 'is-active' : undefined;
  }

  get isFixedTopClass() {
    return this.isFixedTop ? 'is-fixed-top' : undefined;
  }

  @action
  onMenuToggle() {
    this.isMenuActive = !this.isMenuActive;
  }
}
