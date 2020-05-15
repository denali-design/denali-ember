/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf } from 'prop-types';

const styles = ['primary', 'secondary'];
const alignments = ['horizontal', 'vertical'];

export default class DenaliTabsComponent extends Component {
  @arg(oneOf(styles))
  style = styles[0];

  @arg(oneOf(alignments))
  alignment = alignments[0];

  get styleClass() {
    return `is-${this.style}`;
  }

  get alignmentClass() {
    return `is-${this.alignment}`;
  }
}
