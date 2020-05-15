/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { func } from 'prop-types';
import { guidFor } from '@ember/object/internals';

export default class DenaliRadioComponent extends Component {
  @arg(func)
  onChanged = () => null;

  componentId = guidFor(this);
}
