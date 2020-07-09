/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, oneOf, string } from 'prop-types';

const sizes = ['small', 'medium'];
const states = ['active', 'error'];

export default class DenaliInputComponent extends Component {
  @arg(oneOf(sizes)) size;

  @arg(oneOf(states)) state;

  @arg(boolean) isInverse = false;

  @arg(string) iconFront;

  @arg(string) iconBack;

  @arg(string) iconFrontClass;

  @arg(string) iconBackClass;

  @arg(string) errorMsg;

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  get activeClass() {
    return this.state === 'active' ? 'is-active' : undefined;
  }

  get errorClass() {
    return this.state === 'error' ? 'is-error' : undefined;
  }

  get hasIconBackClass() {
    return this.iconBack ? 'has-icon-back' : undefined;
  }

  get hasIconFrontClass() {
    return this.iconFront ? 'has-icon-front' : undefined;
  }

  get inverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
