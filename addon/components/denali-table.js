/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean } from 'prop-types';

export default class DenaliTableComponent extends Component {
  @arg(boolean) isStriped;

  get stripedClass() {
    return this.isStriped ? 'is-striped' : undefined;
  }
}
