/**
 * Copyright 2021, Yahoo! Inc
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, func, oneOf, oneOfType, instanceOf, string } from 'prop-types';
import { STYLES } from './denali-alert-enums';
import { htmlSafe } from '@ember/template';

const SafeString = htmlSafe().constructor;

export default class DenaliAlertComponent extends Component {
  @arg(oneOf(STYLES))
  style = STYLES[0];

  @arg(boolean)
  isBlock = false;

  @arg(oneOfType([string, instanceOf(SafeString)]))
  title;

  @arg(oneOfType([string, instanceOf(SafeString)]))
  context;

  @arg(string)
  icon;

  @arg(func)
  onClose;

  get isBlockClass() {
    return this.isBlock ? 'is-block' : undefined;
  }

  get iconClass() {
    const { icon, isBlock } = this;
    return icon ? `d-${icon}${isBlock ? '-solid' : ''}` : undefined;
  }

  get typeClass() {
    const { style } = this;
    return style !== STYLES[0] ? `is-${style}` : undefined;
  }
}
