/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, oneOf, string } from 'prop-types';

const states = ['active', 'disabled'];
const sizes = ['small'];

export default class DenaliLinkComponent extends Component {
  @arg(oneOf(states)) state;
  @arg(oneOf(sizes)) size;
  @arg(boolean) isSecondary;
  @arg(boolean) isSub;
  @arg(string) iconFront;
  @arg(string) iconBack;
  @arg(string) iconFrontClass;
  @arg(string) iconBackClass;

  get activeClass() {
    return this.state === 'active' ? 'is-active' : undefined;
  }

  get disabledClass() {
    return this.state === 'disabled' ? 'is-disabled' : undefined;
  }

  get hasIconBackClass() {
    return this.iconBack ? 'has-icon-back' : undefined;
  }

  get hasIconFrontClass() {
    return this.iconFront ? 'has-icon-front' : undefined;
  }

  get secondaryClass() {
    return this.isSecondary ? 'is-secondary' : undefined;
  }

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  get isSubClass() {
    return this.isSub ? `is-sub` : undefined;
  }
}
