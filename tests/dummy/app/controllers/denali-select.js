import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const opts = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }];

const optsInverse = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const optsSmall = [1, 2, 3, 4];

export default class DenaliSelectController extends Controller {
  options = opts;

  optionsInverse = optsInverse;

  optionsSmall = optsSmall;

  @tracked selected = opts[1];

  @tracked selectedInverse = optsInverse[3];

  @tracked selectedSmall = optsSmall[2];

  disabled = [opts[3]];

  @action
  onChange(option) {
    this.selected = option;
  }

  @action
  onChangeInverse(option) {
    this.selectedInverse = option;
  }

  @action
  onChangeSmall(option) {
    this.selectedSmall = option;
  }
}
