/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { string, boolean, oneOf } from 'prop-types';
import { STATUSES } from './denali-title-enums';

export default class DenaliTitleComponent extends Component {
  @arg(string)
  title;

  @arg(string)
  caption;

  @arg(boolean)
  hasWideBar = false;

  @arg(oneOf(STATUSES))
  backgroundStatus;

  get hasWideBarClass() {
    return this.hasWideBar ? 'is-wide' : undefined;
  }

  get backgroundStatusClass() {
    return this.backgroundStatus ? `has-bg-status-${this.backgroundStatus}` : undefined;
  }
}
