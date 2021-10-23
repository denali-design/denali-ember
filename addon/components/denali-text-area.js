/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { oneOf, string } from 'prop-types';
import { STATES } from './denali-text-area-enums';

@forbidExtraArgs
export default class DenaliTextAreaComponent extends Component {
  @arg(oneOf(STATES))
  state;

  @arg(string)
  errorMsg;

  @arg(string)
  wrapperClass;

  get activeClass() {
    return this.state === 'active' ? 'is-active' : undefined;
  }

  get errorClass() {
    return this.state === 'error' ? 'is-error' : undefined;
  }
}
