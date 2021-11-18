import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const opts = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }];

export default class DenaliInputGroupController extends Controller {
  toggleOptions = opts;

  @tracked toggleActive = opts[0];

  toggleDisabled = [opts[3]];

  @action
  toggleChangeActive(option) {
    this.active = option;
  }

  selectOptions = opts;

  @tracked selectedOption = opts[2];

  selectDisabled = [opts[3]];

  @action
  selectOnChange(option) {
    this.selectedOption = option;
  }
}
