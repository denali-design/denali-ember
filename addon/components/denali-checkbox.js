/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { forbidExtraArgs } from 'ember-arg-types';
import { guidFor } from '@ember/object/internals';

@forbidExtraArgs
export default class DenaliCheckboxComponent extends Component {
  checkboxId = guidFor(this);
}
