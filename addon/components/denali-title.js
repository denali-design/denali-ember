/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { string, boolean, oneOf } from 'prop-types';
import { STATUSES } from './denali-title-enums';

@forbidExtraArgs
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
