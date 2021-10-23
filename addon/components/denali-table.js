/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import DenaliTableTableComponent from './denali-table/table';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { bool } from 'prop-types';

@forbidExtraArgs
export default class DenaliTableComponent extends DenaliTableTableComponent {
  @arg(bool) isFrozen = false;
}
