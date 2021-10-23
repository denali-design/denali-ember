/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import DenaliToggleComponent from '@denali-design/ember/components/denali-toggle';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { func } from 'prop-types';
import { guidFor } from '@ember/object/internals';

@forbidExtraArgs
export default class DenaliRadioToggleComponent extends DenaliToggleComponent {
  @arg(func.isRequired)
  onChanged;

  componentId = guidFor(this);
}
