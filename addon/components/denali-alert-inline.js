/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf, string } from 'prop-types';

import { TYPES } from './denali-alert-enums';

export default class DenaliAlertInlineComponent extends Component {
  @arg(oneOf(TYPES))
  type = TYPES[0];

  @arg(string)
  title;

  @arg(string)
  context;

  get typeClass() {
    const { type } = this;
    return type !== TYPES[0] ? `has-bg-status-${type}` : undefined;
  }
}
