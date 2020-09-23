import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const opts = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }, { text: 'Item 5' }];

const optsInverse = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const optsSmall = [1, 2, 3, 4];

const optsSearch = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }, { text: 'Item 5' }];

export default class DenaliMultiSelectController extends Controller {
  options = opts;

  optionsInverse = optsInverse;

  optionsSmall = optsSmall;

  optionsSearch = optsSearch;

  @tracked selected = [opts[1]];

  @tracked selectedInverse = [optsInverse[3]];

  @tracked selectedSmall = [optsSmall[2]];

  @tracked selectedSearch = [];

  disabled = [opts[3]];

  @action
  onChange(option) {
    if (this.selected.includes(option)) {
      const index = this.selected.indexOf(option);
      this.selected.splice(index, 1);
      this.selected = [...this.selected];
    } else {
      this.selected = [...this.selected, option];
    }
  }

  @action
  onChangeSmall(option) {
    if (this.selectedSmall.includes(option)) {
      const index = this.selectedSmall.indexOf(option);
      this.selectedSmall.splice(index, 1);
      this.selectedSmall = [...this.selectedSmall];
    } else {
      this.selectedSmall = [...this.selectedSmall, option];
    }
  }

  @action
  onChangeInverse(option) {
    if (this.selectedInverse.includes(option)) {
      const index = this.selectedInverse.indexOf(option);
      this.selectedInverse.splice(index, 1);
      this.selectedInverse = [...this.selectedInverse];
    } else {
      this.selectedInverse = [...this.selectedInverse, option];
    }
  }

  @action
  onChangeSearch(option) {
    if (this.selectedSearch.includes(option)) {
      const index = this.selectedSearch.indexOf(option);
      this.selectedSearch.splice(index, 1);
      this.selectedSearch = [...this.selectedSearch];
    } else {
      this.selectedSearch = [...this.selectedSearch, option];
    }
  }

  @action
  onSearch(value) {
    if (value?.length) {
      const filtered = optsSearch.filter((option) => this.searchFunc(option.text, value));
      set(this, 'optionsSearch', filtered);
    } else if (value === '') {
      set(this, 'optionsSearch', optsSearch);
    }
  }

  searchFunc(value, target) {
    return value.toLowerCase().includes(target.toLowerCase());
  }
}
