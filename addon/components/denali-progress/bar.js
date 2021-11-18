import { htmlSafe } from '@ember/string';
import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { SHADES, COLORS } from '../color-enums';
import { oneOf, number } from 'prop-types';

@forbidExtraArgs
export default class DenaliProgressBarComponent extends Component {
  @arg(number)
  value = 0;

  @arg(oneOf(COLORS))
  color = COLORS[0];

  @arg(oneOf(SHADES))
  shade = '500';

  get backgroundColorClass() {
    if (this.color) {
      return `has-bg-${this.color}-${this.shade}`;
    }
    return undefined;
  }

  get widthCss() {
    return htmlSafe(`width: ${this.value}%`);
  }
}
