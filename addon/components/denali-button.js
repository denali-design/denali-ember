/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, oneOf, string } from 'prop-types';

const styles = ['solid', 'outline', 'ghost', 'text', 'danger'];

const sizes = ['small', 'medium', 'large', 'full'];

const types = ['button', 'submit', 'reset'];

export default class DenaliButtonComponent extends Component {
  @arg(boolean)
  isActive = false;

  @arg(oneOf(styles))
  style = styles[0];

  @arg(oneOf(sizes))
  size;

  @arg(boolean)
  isInverse = false;

  @arg(string)
  icon;

  @arg(boolean)
  iconOnly;

  @arg(boolean)
  isLoading = false;

  //TODO deprecate after https://github.com/emberjs/ember.js/issues/18232
  @arg(oneOf(types))
  type = types[0];

  get isActiveClass() {
    return this.isActive ? 'is-active' : undefined;
  }

  get styleClass() {
    return `is-${this.style}`;
  }

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }

  get iconClass() {
    return this.icon ? `d-${this.args.icon}` : undefined;
  }

  get hasIconClass() {
    return this.iconOnly ? 'has-icon' : undefined;
  }

  get hasLoaderClass() {
    return this.isLoading ? 'has-loader' : undefined;
  }
}
