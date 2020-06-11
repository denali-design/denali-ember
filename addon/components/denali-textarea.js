/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf, string } from 'prop-types';

const states = ['active', 'warning'];

export default class DenaliTextareaComponent extends Component {
  @arg(oneOf(states)) state;
  @arg(string) warningMsg;

  get activeClass() {
    return this.state === 'active' ? 'is-active' : undefined;
  }

  get warningClass() {
    return this.state === 'warning' ? 'is-warning' : undefined;
  }
}
