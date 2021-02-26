import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { SHADES, COLORS } from './denali-progress-enums';
import { oneOf } from 'prop-types';

export default class DenaliProgressBarComponent extends Component {
  @arg
  value = 0;

  @arg(oneOf(COLORS))
  color;

  @arg(oneOf(SHADES))
  shade = '500';

  get backgroundColorClass() {
    if (this.color) {
      return `has-bg-${this.color}-${this.shade}`;
    }
    return undefined;
  }
}
