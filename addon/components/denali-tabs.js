/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { oneOf } from 'prop-types';
import { STYLES } from './denali-tabs-enums';

@forbidExtraArgs
export default class DenaliTabsComponent extends Component {
  @arg(oneOf(STYLES))
  style = STYLES[0];

  get styleClass() {
    return `is-${this.style}`;
  }
}
