/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { string } from 'prop-types';

export default class DenaliMenuTriggerComponent extends Component {
  @arg(string) triggerClass = '';
}
