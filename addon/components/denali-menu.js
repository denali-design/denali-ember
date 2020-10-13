/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf } from 'prop-types';
import { ALIGNMENTS } from './denali-menu-enums';

export default class DenaliMenuComponent extends Component {
  @arg(oneOf(ALIGNMENTS)) alignContent;

  get alignContentClass() {
    return this.alignContent ? `is-${this.alignContent}` : undefined;
  }
}
