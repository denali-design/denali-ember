/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { func } from 'prop-types';
import { guidFor } from '@ember/object/internals';

@forbidExtraArgs
export default class DenaliRadioComponent extends Component {
  @arg(func)
  onChanged = () => null;

  componentId = guidFor(this);
}
