/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { boolean, oneOf, string } from 'prop-types';
import { SIZES, STATES } from './denali-link-enums';

@forbidExtraArgs
export default class DenaliLinkComponent extends Component {
  @arg(string) class;
  @arg(oneOf(STATES)) state;
  @arg(oneOf(SIZES)) size;
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
