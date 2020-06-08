/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf, string } from 'prop-types';

const statusTypes = ['default', 'danger', 'success', 'warning', 'info'];

export default class DenaliAlertInlineComponent extends Component {
  @arg(oneOf(statusTypes))
  type = statusTypes[0];

  @arg(string)
  title;

  @arg(string)
  context;

  get typeClass() {
    const { type } = this;
    return type !== statusTypes[0] ? `has-bg-status-${type}` : undefined;
  }
}
