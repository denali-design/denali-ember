import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DenaliModalController extends Controller {
  @tracked
  isOpen = false;

  @action
  toggleModal() {
    this.isOpen = !this.isOpen;
  }
}
