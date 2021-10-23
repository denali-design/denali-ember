/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { bool } from 'prop-types';

@forbidExtraArgs
export default class DenaliTableTableComponent extends Component {
  @arg(bool) isStriped = false;
  @arg(bool) isCards = false;

  get isStripedClass() {
    return this.isStriped ? 'is-striped' : '';
  }

  get isCardsClass() {
    return this.isCards ? 'is-cards' : '';
  }
}
