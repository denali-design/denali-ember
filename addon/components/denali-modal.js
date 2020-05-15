/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean } from 'prop-types';

export default class DenaliModalComponent extends Component {
  @arg(boolean) isFullScreen;
  @arg(boolean) isOpen;

  get fullScreenClass() {
    return this.isFullScreen ? 'is-full' : undefined;
  }
}
