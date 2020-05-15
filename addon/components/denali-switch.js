/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, func } from 'prop-types';

export default class DenaliSwitchComponent extends Component {
  @arg(boolean) isEnabled = false;
  @arg(boolean) isDisabled = false;

  @arg(func) onChange = () => null;
}
