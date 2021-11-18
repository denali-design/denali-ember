/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { boolean, oneOf } from 'prop-types';
import { SIZES } from './denali-loader-enums';

@forbidExtraArgs
export default class DenaliLoaderComponent extends Component {
  @arg(oneOf(SIZES))
  size;

  @arg(boolean)
  isInverse = false;

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
