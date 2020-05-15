/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import LinkComponent from '@ember/routing/link-component';
import { computed } from '@ember/object';

export default class DenaliLinkToComponent extends LinkComponent {
  classNames = ['denali-link'];

  get classNameBindings() {
    return [
      ...super.classNameBindings,
      'disabledStateClass',
      'hasIconBackClass',
      'hasIconFrontClass',
      'secondaryClass',
      'sizeClass',
      'isSubClass',
    ];
  }

  activeClass = 'is-active';

  disabledClass = 'is-disabled';

  @computed('disabledClass', 'state')
  get disabledStateClass() {
    return this.state === 'disabled' ? this.disabledClass : undefined;
  }

  @computed('iconBack')
  get hasIconBackClass() {
    return this.iconBack ? 'has-icon-back' : undefined;
  }

  @computed('iconFront')
  get hasIconFrontClass() {
    return this.iconFront ? 'has-icon-front' : undefined;
  }

  @computed('isSecondary')
  get secondaryClass() {
    return this.isSecondary ? 'is-secondary' : undefined;
  }

  @computed('size')
  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  @computed('isSub')
  get isSubClass() {
    return this.isSub ? `is-sub` : undefined;
  }
}
