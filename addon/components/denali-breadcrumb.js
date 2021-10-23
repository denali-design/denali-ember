/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { array } from 'prop-types';

@forbidExtraArgs
export default class DenaliBreadcrumbComponent extends Component {
  @arg(array)
  items = [];
}
