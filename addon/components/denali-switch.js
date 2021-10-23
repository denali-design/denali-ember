/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { boolean, func, string } from 'prop-types';

@forbidExtraArgs
export default class DenaliSwitchComponent extends Component {
  @arg(boolean) isEnabled = false;
  @arg(boolean) isDisabled = false;

  @arg(string) onLabel;
  @arg(string) offLabel;

  @arg(func) onChange = () => null;
}
