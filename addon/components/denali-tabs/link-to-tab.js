/**
 * Copyright Yahoo 2021
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

/* eslint-disable ember/no-computed-properties-in-native-classes */
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
