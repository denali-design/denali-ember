/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf, string } from 'prop-types';
import { STYLES } from './denali-alert-enums';

export default class DenaliAlertInlineComponent extends Component {
  @arg(oneOf(STYLES))
  style = STYLES[0];

  @arg(string)
  title;

  @arg(string)
  context;

  get styleClass() {
    const { style } = this;
    return style !== STYLES[0] ? `has-bg-status-${style}` : undefined;
  }
}
