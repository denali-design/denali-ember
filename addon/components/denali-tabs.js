/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf } from 'prop-types';
import { STYLES } from './denali-tabs-enums';

export default class DenaliTabsComponent extends Component {
  @arg(oneOf(STYLES))
  style = STYLES[0];

  get styleClass() {
    return `is-${this.style}`;
  }
}
