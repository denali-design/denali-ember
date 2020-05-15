/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import DenaliLinkToComponent from '../denali-link-to';
import { computed } from '@ember/object';

export default class DenaliTabsLinkToTabComponent extends DenaliLinkToComponent {
  tagName = 'li';

  @computed('_currentRouterState', '_route', '_models', '_query', 'tagName', 'loading', 'loadingHref')
  get href() {
    if (this.loading) {
      return this.loadingHref;
    }

    const { _route: route, _models: models, _query: query, _routing: routing } = this;
    return routing.generateURL(route, models, query);
  }
}
