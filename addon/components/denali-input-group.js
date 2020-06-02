import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { string, boolean } from 'prop-types';

export default class DenaliInputGroupComponent extends Component {
  @arg(string)
  label;

  @arg(boolean)
  isStacked = false;

  @arg(boolean)
  isResponsive;

  @arg(boolean)
  autoWidth;

  get isStackedClass() {
    return this.isStacked ? 'is-stacked' : undefined;
  }

  get isResponsiveClass() {
    return this.isResponsive ? 'responsive' : undefined;
  }

  get autoWidthClass() {
    return this.autoWidth ? 'auto' : undefined;
  }
}
