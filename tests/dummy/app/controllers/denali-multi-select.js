import Controller from '@ember/controller';
import { action } from '@ember/object';

const opts = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }, { text: 'Item 5' }];

const optsInverse = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const optsSmall = [1, 2, 3, 4];

export default class DenaliMultiSelectController extends Controller {
  options = opts;

  optionsInverse = optsInverse;

  optionsSmall = optsSmall;

  @action
  onChange(option) {
    this.selected = option;
  }

  @action
  onChangeSmall(option) {
    this.selectedSmall = option;
  }

  @action
  onChangeInverse(option) {
    this.selectedInverse = option;
  }

  @action
  searchFunc(val, target) {
    return val.text.toLowerCase().includes(target.toLowerCase());
  }
}
