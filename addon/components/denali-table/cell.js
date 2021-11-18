/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { bool, oneOf } from 'prop-types';
import { POSITIONS } from './cell-enums';

@forbidExtraArgs
export default class DenaliTableCellComponent extends Component {
  @arg(oneOf(POSITIONS))
  position = POSITIONS[0];

  @arg(bool)
  isMono = false;

  get positionClass() {
    return this.position ? `is-${this.position}` : '';
  }

  get isMonoClass() {
    return this.isMono ? 'is-mono' : '';
  }
}
