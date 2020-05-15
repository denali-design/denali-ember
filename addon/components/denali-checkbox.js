/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class DenaliCheckboxComponent extends Component {
  checkboxId = guidFor(this);
}
