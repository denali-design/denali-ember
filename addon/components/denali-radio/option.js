/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { boolean, func, string, number, oneOfType } from 'prop-types';

@forbidExtraArgs
export default class DenaliRadioOptionComponent extends Component {
  @arg(boolean)
  checked = false;

  @arg(boolean)
  disabled = false;

  @arg(string.isRequired)
  group;

  @arg(oneOfType([string, number]))
  value;

  @arg(func)
  onSelect;

  componentId = guidFor(this);

  @action
  onChanged() {
    const { onSelect, value } = this;
    onSelect(value);
  }
}
