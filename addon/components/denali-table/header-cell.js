/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import DenaliTableCellComponent from './cell';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { bool, oneOf } from 'prop-types';
import { SORT_DIRECTIONS } from './cell-enums';

@forbidExtraArgs
export default class DenaliTableHeaderCellComponent extends DenaliTableCellComponent {
  @arg(oneOf(SORT_DIRECTIONS))
  sortDirection = SORT_DIRECTIONS[0];

  @arg(bool)
  isSorted = false;

  get sortDirectionClass() {
    return this.isSorted ? `is-sorted is-sorted__${this.sortDirection}` : '';
  }
}
