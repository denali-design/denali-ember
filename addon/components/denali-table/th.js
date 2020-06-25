import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf } from 'prop-types';

const alignment = ['left', 'right', 'center'];

export default class DenaliThComponent extends Component {
  @arg(oneOf(alignment)) alignContent;

  get alignContentClass() {
    return this.alignContent ? `is-${this.alignContent}` : undefined;
  }
}
