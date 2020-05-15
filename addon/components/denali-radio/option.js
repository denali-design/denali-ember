/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { arg } from 'ember-arg-types';
import { boolean, string, number, oneOfType } from 'prop-types';

export default class DenaliRadioComponent extends Component {
  @arg(boolean)
  checked = false;

  @arg(boolean)
  disabled = false;

  @arg(string.isRequired)
  group;

  @arg(oneOfType([string, number]))
  value;

  componentId = guidFor(this);

  @action
  onChanged() {
    const { onSelect, value } = this.args;
    onSelect(value);
  }
}
