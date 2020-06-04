'use strict';

define('dummy/tests/helpers/setup-router', ['exports'], function (_exports) {
  'use strict';

  Object.defineProperty(_exports, '__esModule', {
    value: true,
  });
  _exports.default = _default;

  function _default(hooks) {
    hooks.beforeEach(function () {
      const router = this.owner.lookup('router:main');
      router.startRouting(true);
    });
  }
});
define('dummy/tests/integration/components/denali-box-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (
  _qunit,
  _emberQunit,
  _testHelpers
) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliBox>
              Inner Content
            </DenaliBox>
          
      */
          {
            id: '0IhjxMRG',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-box",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('div.box').hasText('Inner Content', 'DenaliBox exists and renders inner content');
    });
    (0, _qunit.test)('it can yield a header component', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliBox as |Box|>
              <Box.Header>Header</Box.Header>
            </DenaliBox>
          
      */
          {
            id: 'GvCrviQF',
            block:
              '{"symbols":["Box"],"statements":[[2,"\\n      "],[8,"denali-box",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Header"]],[],[[],[]],[["default"],[{"statements":[[2,"Header"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.box h3').hasText('Header', 'DenaliBox can yield a header component');
    });
    (0, _qunit.test)('it can yield a sub header component', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliBox as |Box|>
              <Box.SubHeader>Sub Header</Box.SubHeader>
            </DenaliBox>
          
      */
          {
            id: 'Ib83l9xu',
            block:
              '{"symbols":["Box"],"statements":[[2,"\\n      "],[8,"denali-box",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["SubHeader"]],[],[[],[]],[["default"],[{"statements":[[2,"Sub Header"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.box h5').hasText('Sub Header', 'DenaliBox can yield a sub header component');
    });
    (0, _qunit.test)('it can yield a footer component', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliBox as |Box|>
              <Box.Footer>Footer</Box.Footer>
            </DenaliBox>
          
      */
          {
            id: 'WsUxpSpn',
            block:
              '{"symbols":["Box"],"statements":[[2,"\\n      "],[8,"denali-box",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Footer"]],[],[[],[]],[["default"],[{"statements":[[2,"Footer"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.box footer').hasText('Footer', 'DenaliBox can yield a footer component');
    });
  });
});
define('dummy/tests/integration/components/denali-breadcrumb-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-breadcrumb', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(3);
      this.set('items', [1, 2, 3, 4]);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliBreadcrumb
              @items={{this.items}}
              as | item |
            >
              <span class="link">{{item}}</span>
            </DenaliBreadcrumb>
          
      */
          {
            id: 'an9TsXVM',
            block:
              '{"symbols":["item"],"statements":[[2,"\\n      "],[8,"denali-breadcrumb",[],[["@items"],[[32,0,["items"]]]],[["default"],[{"statements":[[2,"\\n        "],[10,"span"],[14,0,"link"],[12],[1,[32,1]],[13],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('ul.breadcrumb').exists('A ul with class breadcrumb is rendered');
      assert.dom('.breadcrumb li').exists(
        {
          count: this.items.length,
        },
        'The number of li rendered equal the number of items passed through'
      );
      assert.dom('.breadcrumb .link').exists(
        {
          count: this.items.length,
        },
        'Each item is wrapped in a span as specified'
      );
    });
  });
});
define('dummy/tests/integration/components/denali-button-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton>
              Inner Content
            </DenaliButton>
          
      */
          {
            id: 't6MFYKsJ',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('button.button').hasText('Inner Content', 'DenaliButton exists and renders inner content');
    });
    (0, _qunit.test)('it can be disabled', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton disabled={{this.isDisabled}}>
              Inner Content
            </DenaliButton>
          
      */
          {
            id: 'tFGsm9hY',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[[16,"disabled",[32,0,["isDisabled"]]]],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.button').isNotDisabled('DenaliButton is not disabled by default');
      this.set('isDisabled', true);
      assert.dom('.button').isDisabled('DenaliButton can be disabled by setting the `disabled` attribute to true');
    });
    (0, _qunit.test)('it supports types', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton @type={{this.type}}>
              Inner Content
            </DenaliButton>
          
      */
          {
            id: 'Nt/rk7kI',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[["@type"],[[32,0,["type"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.button').hasAttribute('type', 'button', 'DenaliButton has a type of `button` by default');
      this.set('type', 'submit');
      assert
        .dom('.button')
        .hasAttribute('type', 'submit', 'DenaliButton has a submit type when `type` arg is set to submit');
    });
    (0, _qunit.test)('it an be set active ', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton @isActive={{this.isActive}}>
              Inner Content
            </DenaliButton>
          
      */
          {
            id: 'RYqCfyEh',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[["@isActive"],[[32,0,["isActive"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.button').doesNotHaveClass('is-active', 'DenaliButton is not active by default');
      this.set('isActive', true);
      assert
        .dom('.button')
        .hasClass('is-active', 'DenaliButton can be set active by setting the `@isActive` arg to true');
    });
    (0, _qunit.test)('it supports styles', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton @style={{this.style}}>
              Inner Content
            </DenaliButton>
          
      */
          {
            id: 'ZpBv1HWL',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[["@style"],[[32,0,["style"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style by default');
      this.set('style', 'solid');
      assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style when `@style` arg is set to solid');
      this.set('style', 'outline');
      assert
        .dom('.button')
        .hasClass('is-outline', 'DenaliButton has a outline style when `@style` arg is set to outline');
      this.set('style', 'ghost');
      assert.dom('.button').hasClass('is-ghost', 'DenaliButton has a ghost style when `@style` arg is set to ghost');
      this.set('style', 'text');
      assert.dom('.button').hasClass('is-text', 'DenaliButton has a text style when `@style` arg is set to text');
      this.set('style', 'danger');
      assert.dom('.button').hasClass('is-danger', 'DenaliButton has a danger style when `@style` arg is set to danger');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton @isInverse={{this.isInverse}}>
              Inner Content
            </DenaliButton>
          
      */
          {
            id: 'ytWRFhtu',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[["@isInverse"],[[32,0,["isInverse"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.button').doesNotHaveClass('is-inverse', 'DenaliButton does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert
        .dom('.button')
        .hasClass('is-inverse', 'DenaliButton has inverse styling when `@isInverse` arg is set to true');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton @size={{this.size}}>
              Inner Content
            </DenaliButton>
          
      */
          {
            id: 'XF2nwcfA',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[["@size"],[[32,0,["size"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.button').exists('DenaliButton can render without a size set');
      this.set('size', 'small');
      assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
      this.set('size', 'medium');
      assert.dom('.button').hasClass('is-medium', 'DenaliButton has a medium size when `@size` arg is set to medium');
      this.set('size', 'large');
      assert.dom('.button').hasClass('is-large', 'DenaliButton has a large size when `@size` arg is set to large');
      this.set('size', 'full');
      assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@size` arg is set to full');
    });
    (0, _qunit.test)('it supports icons', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton @style="solid" @icon={{this.icon}} @iconOnly={{this.iconOnly}}>
              Share
            </DenaliButton>
          
      */
          {
            id: 'mtEyfhtt',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[["@style","@icon","@iconOnly"],["solid",[32,0,["icon"]],[32,0,["iconOnly"]]]],[["default"],[{"statements":[[2,"\\n        Share\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.button .d-icon').doesNotExist('No icon is rendered when none is specified');
      assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class by default');
      this.set('icon', 'share');
      assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
      assert.dom('.button .d-icon').hasClass('d-share', 'DenaliButton renders the specified icon');
      assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class');
      this.set('iconOnly', true);
      assert
        .dom('.button')
        .hasClass('has-icon', 'DenaliButton has a `has-icon` class when iconOnly arg is set to true');
    });
    (0, _qunit.test)('it supports loading', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliButton 
              @isLoading={{this.isLoading}} 
              @icon="save"
            >
              Save
            </DenaliButton>
          
      */
          {
            id: 'UTyeTiCB',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-button",[],[["@isLoading","@icon"],[[32,0,["isLoading"]],"save"]],[["default"],[{"statements":[[2,"\\n        Save\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.button')
        .doesNotHaveClass('has-loader', 'DenaliButton does not have a `has-loader` class by default');
      assert.dom('.button').hasText('Save', 'DenaliButton renders inner text by default');
      assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
      assert.dom('.button div.loader').doesNotExist('DenaliButton does render a loader by default');
      this.set('isLoading', true);
      assert.dom('.button').hasClass('has-loader', 'DenaliButton has `has-loader` class when `@isLoading` arg is true');
      assert.dom('.button').hasNoText('DenaliButton does not render inner text when `@isLoading` arg is true');
      assert.dom('.button .d-icon').doesNotExist('DenaliButton does not render an icon when `@isLoading` arg is true');
      assert.dom('.button div.loader').exists('DenaliButton renders a loader when `@isLoading` arg is true');
    });
  });
});
define('dummy/tests/integration/components/denali-checkbox-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(7);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliCheckbox
              checked={{this.checked}}
              disabled={{this.disabled}}
              data-partial={{this.partialData}}
            >
              Test
            </DenaliCheckbox>
          
      */
          {
            id: 'rfkBcWE0',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-checkbox",[[16,"checked",[32,0,["checked"]]],[16,"disabled",[32,0,["disabled"]]],[16,"data-partial",[32,0,["partialData"]]]],[[],[]],[["default"],[{"statements":[[2,"\\n        Test\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.denali-checkbox').hasText('Test', 'A denali checkbox is rendered with the specified text');
      assert.dom('.denali-checkbox input').isNotDisabled('The checkbox is not disabled by default');
      assert.dom('.denali-checkbox input').isNotChecked('The checkbox is not checked by default');
      assert
        .dom('.denali-checkbox input')
        .doesNotHaveAttribute('data-partial', 'The checkbox does not have the data-partial attribute set by default');
      this.set('partialData', true);
      assert
        .dom('.denali-checkbox input')
        .hasAttribute('data-partial', '', 'The checkbox has the data-partial attribute when set to true');
      this.set('checked', true);
      assert
        .dom('.denali-checkbox input')
        .isChecked('The checkbox is checked when the checked attribute is set to true');
      this.set('disabled', true);
      assert
        .dom('.denali-checkbox input')
        .isDisabled('The checkbox is disabled when the disabled attribute is set to true');
    });
    (0, _qunit.test)('action', async function (assert) {
      assert.expect(4);
      this.set('clickHandler', () => {
        assert.ok('The click handler is called when checkbox is clicked');
      });
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliCheckbox
              {{on 'click' (action this.clickHandler)}}
            >
              Test
            </DenaliCheckbox>
          
      */
          {
            id: 'uZdVvoFp',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-checkbox",[[4,[38,1],["click",[30,[36,0],[[32,0],[32,0,["clickHandler"]]],null]],null]],[[],[]],[["default"],[{"statements":[[2,"\\n        Test\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["action","on"]}',
            meta: {},
          }
        )
      );
      await (0, _testHelpers.click)('.denali-checkbox input');
      assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when clicked on');
      await (0, _testHelpers.click)('.denali-checkbox label');
      assert.dom('.denali-checkbox input').isNotChecked('The checkbox is unchecked when clicked again');
    });
  });
});
define('dummy/tests/integration/components/denali-icon-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('icon', 'code');
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliIcon
              @icon={{this.icon}}
            />
          
      */
          {
            id: 'uC8q2oga',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-icon",[],[["@icon"],[[32,0,["icon"]]]],null],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('i.d-icon.d-code').exists('DenaliIcon exists and has the correct icon class');
      this.set('icon', 'bug');
      assert.dom('i.d-icon.d-bug').exists('DenaliIcon exists and has the correct icon class');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliIcon
              @icon="code"
              @size={{this.size}}
            >
              Link Text
            </DenaliIcon>
          
      */
          {
            id: '7iPwaexT',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-icon",[],[["@icon","@size"],["code",[32,0,["size"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('size', 'extrasmall');
      assert
        .dom('.d-icon')
        .hasClass('is-extrasmall', 'DenaliIcon has a small size when `@size` arg is set to extrasmall');
      this.set('size', 'small');
      assert.dom('.d-icon').hasClass('is-small', 'DenaliIcon has a small size when `@size` arg is set to small');
      this.set('size', 'medium');
      assert.dom('.d-icon').hasClass('is-medium', 'DenaliIcon has a medium size when `@size` arg is set to medium');
      this.set('size', 'large');
      assert.dom('.d-icon').hasClass('is-large', 'DenaliIcon has a large size when `@size` arg is set to large');
    });
  });
});
define('dummy/tests/integration/components/denali-input-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput value="My Input" />
      */
          {
            id: 'lHMi4LYN',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[[24,2,"My Input"]],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.input input').exists('An input is rendered within a wrapper div with class `.input`');
      assert.dom('.input input').isNotDisabled('The input is not disabled by default');
      assert.dom('.input input').hasValue('My Input', 'The input has the specified value');
    });
    (0, _qunit.test)('input types', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput type={{this.type}}/>
      */
          {
            id: 'E49Y92IU',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[[16,4,[32,0,["type"]]]],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('type', 'text');
      assert.dom('.input input').hasAttribute('type', 'text', 'The input has the default type attribute text');
      this.set('type', 'email');
      assert.dom('.input input').hasAttribute('type', 'email', 'The input type attribute has the value email');
      this.set('type', 'password');
      assert.dom('.input input').hasAttribute('type', 'password', 'The input type attribute has the value password');
      this.set('type', 'number');
      assert.dom('.input input').hasAttribute('type', 'number', 'The input type attribute has the value number');
    });
    (0, _qunit.test)('input size', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput @size={{this.size}} />
      */
          {
            id: 'pqlo4gRs',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[],[["@size"],[[32,0,["size"]]]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('size', 'small');
      assert.dom('.input').hasClass('is-small', 'The input wrapper has the appropriate class for small');
      this.set('size', 'medium');
      assert.dom('.input').hasClass('is-medium', 'The input wrapper has the appropriate class for medium');
    });
    (0, _qunit.test)('states', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput @state={{this.state}} />
      */
          {
            id: 'C9YRkgGp',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[],[["@state"],[[32,0,["state"]]]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('state', 'active');
      assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');
      this.set('state', 'warning');
      assert.dom('.input').hasClass('is-warning', 'The input wrapper has the appropriate class for warning');
    });
    (0, _qunit.test)('disabled', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput disabled={{true}}/>
      */
          {
            id: '5WImOJWQ',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[[16,"disabled",true]],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.input input').isDisabled('The input is disabled when specified');
    });
    (0, _qunit.test)('placeholder', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput type="email" placeholder="Email field"/>
      */
          {
            id: 'ZaiSA1xd',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[[24,"placeholder","Email field"],[24,4,"email"]],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.input input')
        .hasAttribute('placeholder', 'Email field', 'The input is has the specified placeholder');
    });
    (0, _qunit.test)('is inverse', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput @isInverse={{this.isInverse}} />
      */
          {
            id: '6xaiklyg',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[],[["@isInverse"],[[32,0,["isInverse"]]]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.input')
        .doesNotHaveClass('is-inverse', 'The input wrapper by default does not have the inverse class');
      this.set('isInverse', 'true');
      assert.dom('.input').hasClass('is-inverse', 'The input wrapper has the inverse class when specified');
    });
    (0, _qunit.test)('warning message', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput @state="warning" @warningMsg={{this.warningMsg}} />
      */
          {
            id: 'LyTYNU+P',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[],[["@state","@warningMsg"],["warning",[32,0,["warningMsg"]]]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.input.is-warning .message').hasNoText('No message is rendered when none is specified');
      this.set('warningMsg', 'Email Invalid');
      assert.dom('.input.is-warning .message').hasText('Email Invalid', 'The specified warning message is rendered');
    });
    (0, _qunit.test)('icons', async function (assert) {
      assert.expect(6);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput
            @iconFront={{this.iconFront}}
            @iconFrontClass="front-icon"
            @iconBack={{this.iconBack}}
            @iconBackClass="back-icon"
          />
      */
          {
            id: 'srVnbqHv',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[],[["@iconFront","@iconFrontClass","@iconBack","@iconBackClass"],[[32,0,["iconFront"]],"front-icon",[32,0,["iconBack"]],"back-icon"]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.input.has-icon-front')
        .doesNotExist('The icon-front class is not applied to the input when no front icon is specified');
      assert
        .dom('.input.has-icon-back')
        .doesNotExist('The icon-back class is not applied to the input when no back icon is specified');
      this.set('iconFront', 'share');
      assert
        .dom('.input.has-icon-front')
        .exists('The icon-front class is applied to the input when front icon is specified');
      assert
        .dom('.input.has-icon-front .front-icon')
        .hasClass('d-share', 'The correct denali icon is rendered as the front icon');
      this.set('iconBack', 'close-circle-solid');
      assert
        .dom('.input.has-icon-back')
        .exists('The icon-back class is applied to the input when back icon is specified');
      assert
        .dom('.input.has-icon-back .back-icon')
        .hasClass('d-close-circle-solid', 'The correct denali icon is rendered as the back icon');
    });
    (0, _qunit.test)('actions', async function (assert) {
      assert.expect(2);
      this.set('handleInput', (event) => {
        assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
      });
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliInput
            {{on 'input' (action this.handleInput)}}
          />
      */
          {
            id: 'lwMjG9na',
            block:
              '{"symbols":[],"statements":[[8,"denali-input",[[4,[38,1],["input",[30,[36,0],[[32,0],[32,0,["handleInput"]]],null]],null]],[[],[]],null]],"hasEval":false,"upvars":["action","on"]}',
            meta: {},
          }
        )
      );
      await (0, _testHelpers.fillIn)('.input input', 'Random Text');
      this.set('handleInput', (event) => {
        assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
      });
      this.element.querySelector('.input input').value = 'More Random Text';
      this.element.querySelector('.input input').dispatchEvent(new Event('input'));
      await (0, _testHelpers.settled)();
    });
  });
});
define('dummy/tests/integration/components/denali-link-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLink
              href="https://denali.design/"
              target="_blank"
              @size={{this.size}}
            >
              Link Text
            </DenaliLink>
          
      */
          {
            id: 'xC0VVetd',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link",[[24,6,"https://denali.design/"],[24,"target","_blank"]],[["@size"],[[32,0,["size"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('a.denali-link').hasText('Link Text', 'DenaliLink renders an anchor element');
      assert.dom('a.denali-link').hasAttribute('href', 'https://denali.design/', 'DenaliLink has the specified href');
      assert.dom('a.denali-link').hasAttribute('target', '_blank', 'DenaliLink has the specified target');
      assert
        .dom('a.denali-link')
        .doesNotHaveClass('is-small', 'DenaliLink does not have the is-small class by default');
      this.set('size', 'small');
      assert
        .dom('a.denali-link')
        .hasClass('is-small', 'DenaliLink has the is-small class when the size is set to small');
    });
    (0, _qunit.test)('secondary and sub links', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLink
              @isSub={{this.sub}}
              @isSecondary={{this.secondary}}
            >
              Link Text
            </DenaliLink>
      */
          {
            id: 'HiIpu6gG',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link",[],[["@isSub","@isSecondary"],[[32,0,["sub"]],[32,0,["secondary"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLink by default is not a sub link');
      assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLink by default is not a secondary link');
      this.set('sub', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink is a sub link when isSub arg is set to true');
      this.set('secondary', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink retains the is-sub class');
      assert
        .dom('a.denali-link')
        .hasClass('is-secondary', 'DenaliLink is a secondary link when secondary arg is set to true');
    });
    (0, _qunit.test)('states', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLink
              @state={{this.state}}
            >
              Link Text
            </DenaliLink>
          
      */
          {
            id: 'KP6BCf63',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link",[],[["@state"],[[32,0,["state"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLink by default is not active');
      assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLink by default is not disabled');
      this.set('state', 'active');
      assert.dom('a.denali-link').hasClass('is-active', 'DenaliLink is active when state is set to active');
      this.set('state', 'disabled');
      assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLink is disabled when state is set to disabled');
    });
    (0, _qunit.test)('icons', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLink
              @iconFront={{this.iconFront}}
              @iconFrontClass={{this.iconFrontClass}}
              @iconBack={{this.iconBack}}
              @iconBackClass={{this.iconBackClass}}
            >
              Link Text
            </DenaliLink>
          
      */
          {
            id: 'FIelm/bk',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link",[],[["@iconFront","@iconFrontClass","@iconBack","@iconBackClass"],[[32,0,["iconFront"]],[32,0,["iconFrontClass"]],[32,0,["iconBack"]],[32,0,["iconBackClass"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('a.denali-link')
        .doesNotHaveClass('has-icon-front', 'DenaliLink does not have the `has-icon-front` class by default');
      assert
        .dom('a.denali-link')
        .doesNotHaveClass('has-icon-back', 'DenaliLink does not have the `has-icon-back` class by default');
      this.set('iconFront', 'add-circle');
      this.set('iconFrontClass', 'link-icon-front');
      assert
        .dom('a.denali-link')
        .hasClass('has-icon-front', 'DenaliLink has the `has-icon-front` class when iconFront is specified');
      assert
        .dom('a.denali-link .d-icon.link-icon-front')
        .hasClass('d-add-circle', 'DenaliLink has the specified icon in the front');
      this.set('iconBack', 'external');
      this.set('iconBackClass', 'link-icon-back');
      assert
        .dom('a.denali-link')
        .hasClass('has-icon-back', 'DenaliLink has the `has-icon-back` class when iconBack is specified');
      assert
        .dom('a.denali-link .d-icon.link-icon-back')
        .hasClass('d-external', 'DenaliLink has the specified icon in the back');
    });
  });
});
define('dummy/tests/integration/components/denali-link-to-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
  'dummy/tests/helpers/setup-router',
], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-link-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLinkTo @route="index" @query={{hash user="jkusa"}}>
              Link Text
            </DenaliLinkTo>
          
      */
          {
            id: 'mBMeDRF5',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link-to",[],[["@route","@query"],["index",[30,[36,0],null,[["user"],["jkusa"]]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["hash"]}',
            meta: {},
          }
        )
      );
      assert.dom('a.ember-view').hasText('Link Text', 'DenaliLinkTo exists and renders inner content');
      assert
        .dom('a.denali-link')
        .hasAttribute('href', '/?user=jkusa', 'DenaliLinkTo renders an href based on a route & query');
    });
    (0, _qunit.test)('it is set as active when on current route', async function (assert) {
      this.set('route', 'four-oh-four');
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLinkTo @route={{this.route}}>
              Link Text
            </DenaliLinkTo>
          
      */
          {
            id: 'wjDvOX64',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link-to",[],[["@route"],[[32,0,["route"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('a.denali-link')
        .doesNotHaveClass('is-active', 'DenaliLinkTo is not active when not on the current route');
      this.set('route', 'index');
      assert.dom('a.denali-link').hasClass('is-active', 'DenaliLinkTo is active when on the current route');
    });
    (0, _qunit.test)('size', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @size={{this.size}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
          {
            id: '69K5KiSA',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link-to",[],[["@route","@size"],["four-oh-four",[32,0,["size"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('a.denali-link')
        .doesNotHaveClass('is-small', 'DenaliLinkTo does not have the is-small class by default');
      this.set('size', 'small');
      assert
        .dom('a.denali-link')
        .hasClass('is-small', 'DenaliLinkTo has the is-small class when the size is set to small');
    });
    (0, _qunit.test)('secondary and sub links', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @isSub={{this.sub}}
              @isSecondary={{this.secondary}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
          {
            id: 'gp/FQ//z',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link-to",[],[["@route","@isSub","@isSecondary"],["four-oh-four",[32,0,["sub"]],[32,0,["secondary"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLinkTo by default is not a sub link');
      assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLinkTo by default is not a secondary link');
      this.set('sub', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo is a sub link when isSub arg is set to true');
      this.set('secondary', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo retains the is-sub class');
      assert
        .dom('a.denali-link')
        .hasClass('is-secondary', 'DenaliLinkTo is a secondary link when secondary arg is set to true');
    });
    (0, _qunit.test)('state', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @state={{this.state}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
          {
            id: '0lXzxmez',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link-to",[],[["@route","@state"],["four-oh-four",[32,0,["state"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
      this.set('state', 'disabled');
      assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when state is set to disabled');
    });
    (0, _qunit.test)('disabled', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @disabled={{this.disabled}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
          {
            id: 'PW4SJFsX',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link-to",[],[["@route","@disabled"],["four-oh-four",[32,0,["disabled"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
      this.set('disabled', true);
      assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when disabled is set to true');
    });
    (0, _qunit.test)('icons', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @iconFront={{this.iconFront}}
              @iconFrontClass={{this.iconFrontClass}}
              @iconBack={{this.iconBack}}
              @iconBackClass={{this.iconBackClass}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
          {
            id: 'BKzsc0Li',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-link-to",[],[["@route","@iconFront","@iconFrontClass","@iconBack","@iconBackClass"],["four-oh-four",[32,0,["iconFront"]],[32,0,["iconFrontClass"]],[32,0,["iconBack"]],[32,0,["iconBackClass"]]]],[["default"],[{"statements":[[2,"\\n        Link Text\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('a.denali-link')
        .doesNotHaveClass('has-icon-front', 'DenaliLinkTo does not have the `has-icon-front` class by default');
      assert
        .dom('a.denali-link')
        .doesNotHaveClass('has-icon-back', 'DenaliLinkTo does not have the `has-icon-back` class by default');
      this.set('iconFront', 'add-circle');
      this.set('iconFrontClass', 'link-icon-front');
      assert
        .dom('a.denali-link')
        .hasClass('has-icon-front', 'DenaliLinkTo has the `has-icon-front` class when iconFront is specified');
      assert
        .dom('a .d-icon.link-icon-front')
        .hasClass('d-add-circle', 'DenaliLinkTo has the specified icon in the front');
      this.set('iconBack', 'external');
      this.set('iconBackClass', 'link-icon-back');
      assert
        .dom('a.denali-link')
        .hasClass('has-icon-back', 'DenaliLinkTo has the `has-icon-back` class when iconBack is specified');
      assert.dom('a .d-icon.link-icon-back').hasClass('d-external', 'DenaliLinkTo has the specified icon in the back');
    });
  });
});
define('dummy/tests/integration/components/denali-loader-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-loader', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliLoader />
      */
          {
            id: 'AJMvzw+x',
            block: '{"symbols":[],"statements":[[8,"denali-loader",[],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('div.loader').exists('DenaliLoader can render.');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLoader @size={{this.size}} />
          
      */
          {
            id: 'T+WIAvJO',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-loader",[],[["@size"],[[32,0,["size"]]]],null],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('size', 'extrasmall');
      assert
        .dom('.loader')
        .hasClass('is-extrasmall', 'DenaliLoader has an extrasmall size when `@size` arg is set to extrasmall');
      this.set('size', 'small');
      assert.dom('.loader').hasClass('is-small', 'DenaliLoader has a small size when `@size` arg is set to small');
      this.set('size', 'medium');
      assert.dom('.loader').hasClass('is-medium', 'DenaliLoader has a medium size when `@size` arg is set to medium');
      this.set('size', 'large');
      assert.dom('.loader').hasClass('is-large', 'DenaliLoader has a large size when `@size` arg is set to large');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliLoader @isInverse={{this.isInverse}} />
          
      */
          {
            id: 'UY5rlCaF',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-loader",[],[["@isInverse"],[[32,0,["isInverse"]]]],null],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.loader').doesNotHaveClass('is-inverse', 'DenaliLoader does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert
        .dom('.loader')
        .hasClass('is-inverse', 'DenaliLoader has inverse styling when `@isInverse` arg is set to true');
    });
  });
});
define('dummy/tests/integration/components/denali-menu-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliMenu class="test-menu" as |Menu|>
              <Menu.Trigger>Hover</Menu.Trigger>
              <Menu.Content>
                <ul>
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </ul>
              </Menu.Content>
            </DenaliMenu>
          
      */
          {
            id: 'BQ7EtPuD',
            block:
              '{"symbols":["Menu"],"statements":[[2,"\\n      "],[8,"denali-menu",[[24,0,"test-menu"]],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Trigger"]],[],[[],[]],[["default"],[{"statements":[[2,"Hover"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Content"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[10,"ul"],[12],[2,"\\n            "],[10,"li"],[12],[2,"One"],[13],[2,"\\n            "],[10,"li"],[12],[2,"Two"],[13],[2,"\\n            "],[10,"li"],[12],[2,"Three"],[13],[2,"\\n          "],[13],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.test-menu').exists('The test menu is rendered');
      assert.dom('.test-menu .menu-trigger').hasText('Hover', 'The trigger has the appropriate text');
      assert.dom('.test-menu .menu-content li').exists(
        {
          count: 3,
        },
        'Three li elements are rendered in the menu content'
      );
      assert.dom('.test-menu .menu-content').hasStyle(
        {
          visibility: 'hidden',
        },
        'The menu content is not visible by default'
      );
    });
    (0, _qunit.test)('alignment', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliMenu class="test-menu" @alignContent={{this.alignContent}} as |Menu|>
              <Menu.Trigger>Hover</Menu.Trigger>
              <Menu.Content>
                <ul>
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </ul>
              </Menu.Content>
            </DenaliMenu>
          
      */
          {
            id: 'PiCpA6N+',
            block:
              '{"symbols":["Menu"],"statements":[[2,"\\n      "],[8,"denali-menu",[[24,0,"test-menu"]],[["@alignContent"],[[32,0,["alignContent"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Trigger"]],[],[[],[]],[["default"],[{"statements":[[2,"Hover"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Content"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[10,"ul"],[12],[2,"\\n            "],[10,"li"],[12],[2,"One"],[13],[2,"\\n            "],[10,"li"],[12],[2,"Two"],[13],[2,"\\n            "],[10,"li"],[12],[2,"Three"],[13],[2,"\\n          "],[13],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.test-menu').doesNotHaveClass('is-left', 'The menu does not have the `is-left` class by default');
      assert.dom('.test-menu').doesNotHaveClass('is-right', 'The menu does not have the `is-right` class by default');
      this.set('alignContent', 'left');
      assert.dom('.test-menu').hasClass('is-left', 'The menu has the `is-left` class when alignContent is set to left');
      this.set('alignContent', 'right');
      assert
        .dom('.test-menu')
        .hasClass('is-right', 'The menu has the `is-right` class when alignContent is set to right');
    });
  });
});
define('dummy/tests/integration/components/denali-menu/content-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-menu/content', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliMenu::Content>
              Inner Content
            </DenaliMenu::Content>
          
      */
          {
            id: '0XKkoajd',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-menu/content",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('div.menu-content').hasText('Inner Content', 'Menu content div is rendered');
    });
  });
});
define('dummy/tests/integration/components/denali-menu/trigger-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-menu/trigger', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliMenu::Trigger>
              Trigger
            </DenaliMenu::Trigger>
          
      */
          {
            id: 'L2+w9+IB',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-menu/trigger",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Trigger\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('a.menu-trigger').hasText('Trigger', 'The trigger renders the text within an anchor tag');
    });
  });
});
define('dummy/tests/integration/components/denali-modal-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(6);
      this.set('isOpen', false);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliModal
              class="denali-modal"
              @isOpen={{this.isOpen}}
              @onClose={{fn (mut this.isOpen) false}}
              as | Modal |
            >
              <Modal.Content @class="denali-modal__content">Content</Modal.Content>
            </DenaliModal>
          
      */
          {
            id: 'AdhmHfPC',
            block:
              '{"symbols":["Modal"],"statements":[[2,"\\n      "],[8,"denali-modal",[[24,0,"denali-modal"]],[["@isOpen","@onClose"],[[32,0,["isOpen"]],[30,[36,1],[[30,[36,0],[[32,0,["isOpen"]]],null],false],null]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Content"]],[],[["@class"],["denali-modal__content"]],[["default"],[{"statements":[[2,"Content"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["mut","fn"]}',
            meta: {},
          }
        )
      );
      assert.dom('.denali-modal.modal').doesNotExist('Denali Modal is hidden by default');
      assert.dom('.denali-modal .modal').doesNotExist('Denali Modal is not rendered by default');
      this.set('isOpen', true);
      assert.dom('.denali-modal.modal').exists('Denali Modal is rendered only when isActive is set to true');
      assert
        .dom('.denali-modal.modal .denali-modal__content')
        .hasText('Content', 'Denali Modal Content is rendered in the modal');
      assert.dom('.denali-modal.modal .close').exists('Denali Modal renders a close icon in the modal');
      await (0, _testHelpers.click)('.denali-modal.modal .close');
      assert.dom('.denali-modal.modal').doesNotExist('The Denali Modal is hidden when close is clicked');
    });
    (0, _qunit.test)('Full screen', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliModal
              class="denali-modal"
              @isOpen={{true}}
              @isFullScreen={{this.fullScreen}}
              @onClose={{fn (mut this.isOpen) false}}
              as | Modal |
            >
              <Modal.Content>Content</Modal.Content>
            </DenaliModal>
          
      */
          {
            id: '5FaDCe6m',
            block:
              '{"symbols":["Modal"],"statements":[[2,"\\n      "],[8,"denali-modal",[[24,0,"denali-modal"]],[["@isOpen","@isFullScreen","@onClose"],[true,[32,0,["fullScreen"]],[30,[36,1],[[30,[36,0],[[32,0,["isOpen"]]],null],false],null]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Content"]],[],[[],[]],[["default"],[{"statements":[[2,"Content"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["mut","fn"]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.denali-modal .modal-container')
        .doesNotHaveClass('.is-full', 'The modal container does not have the `is-full` class by default');
      this.set('fullScreen', true);
      assert
        .dom('.denali-modal .modal-container')
        .hasClass('is-full', 'The modal container has the `is-full` when fullScreen arg is set to true');
    });
    (0, _qunit.test)('header and footer', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliModal
              class="denali-modal"
              @isOpen={{true}}
              @onClose={{fn (mut this.isOpen) false}}
              as | Modal |
            >
              <Modal.Header @class="denali-modal__header">Header</Modal.Header>
              <Modal.Content>Content</Modal.Content>
              <Modal.Footer @class="denali-modal__footer">Footer</Modal.Footer>
            </DenaliModal>
          
      */
          {
            id: 'XZEtwqRk',
            block:
              '{"symbols":["Modal"],"statements":[[2,"\\n      "],[8,"denali-modal",[[24,0,"denali-modal"]],[["@isOpen","@onClose"],[true,[30,[36,1],[[30,[36,0],[[32,0,["isOpen"]]],null],false],null]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Header"]],[],[["@class"],["denali-modal__header"]],[["default"],[{"statements":[[2,"Header"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Content"]],[],[[],[]],[["default"],[{"statements":[[2,"Content"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Footer"]],[],[["@class"],["denali-modal__footer"]],[["default"],[{"statements":[[2,"Footer"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["mut","fn"]}',
            meta: {},
          }
        )
      );
      assert.dom('.denali-modal__header').hasText('Header', 'Denali Modal header is rendered');
      assert.dom('.denali-modal__footer').hasText('Footer', 'Denali Modal footer is rendered');
    });
  });
});
define('dummy/tests/integration/components/denali-navbar-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
  'dummy/tests/helpers/setup-router',
], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar
              class="test-nav"
            >
            </DenaliNavbar>
          
      */
          {
            id: 'SsQzQIOp',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-navbar",[[24,0,"test-nav"]],[[],[]],[["default"],[{"statements":[[2,"\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('nav.nav.test-nav').exists('DenaliNavbar exists and renders a nav element');
    });
    (0, _qunit.test)('it can support responsive', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar
              class="test-nav"
              @isResponsive={{this.isResponsive}}
              as |Nav|
            >
              <Nav.Left></Nav.Left>
            </DenaliNavbar>
          
      */
          {
            id: 'Ox9XQE1f',
            block:
              '{"symbols":["Nav"],"statements":[[2,"\\n      "],[8,"denali-navbar",[[24,0,"test-nav"]],[["@isResponsive"],[[32,0,["isResponsive"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Left"]],[],[[],[]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.test-nav .nav-left .nav-responsive-menu')
        .doesNotExist('DenaliNavbar does not render a responsive menu button by default');
      assert
        .dom('.test-nav.nav .nav-responsive')
        .doesNotExist('DenaliNavbar does not render a responsive div by default');
      this.set('isResponsive', true);
      assert
        .dom('.test-nav .nav-left .nav-responsive-menu')
        .exists('DenaliNavbar renders a responsive menu button when `@isResponsive` arg is true');
      assert
        .dom('.test-nav.nav .nav-responsive')
        .exists('DenaliNavbar renders a responsive div when `@isResponsive` arg is true');
      assert
        .dom('.test-nav.nav .nav-responsive.is-active')
        .doesNotExist('DenaliNavbar responsive div is not active default');
      await (0, _testHelpers.click)('.test-nav .nav-responsive-menu');
      assert
        .dom('.test-nav.nav .nav-responsive.is-active')
        .exists('DenaliNavbar responsive div is toggled active when clicking the responsive menu');
      await (0, _testHelpers.click)('.test-nav .nav-responsive-menu');
      assert
        .dom('.test-nav.nav .nav-responsive.is-active')
        .doesNotExist('DenaliNavbar responsive div is toggled inactive when clicking the responsive menu');
    });
    (0, _qunit.test)('it can yield left, center, & right section components', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar
              class="test-nav"
              as |Nav|
            >
              <Nav.Left></Nav.Left>
              <Nav.Center></Nav.Center>
              <Nav.Right></Nav.Right>
            </DenaliNavbar>
          
      */
          {
            id: 'BefI7qhd',
            block:
              '{"symbols":["Nav"],"statements":[[2,"\\n      "],[8,"denali-navbar",[[24,0,"test-nav"]],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Left"]],[],[[],[]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Center"]],[],[[],[]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Right"]],[],[[],[]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.test-nav.nav .nav-left').exists('DenaliNavbar can yield a left section component');
      assert.dom('.test-nav.nav .nav-center').exists('DenaliNavbar can yield a center section component');
      assert.dom('.test-nav.nav .nav-right').exists('DenaliNavbar can yield a right section component');
    });
    (0, _qunit.test)('left can yield sub components', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar
              class="test-nav"
              as |Nav|
            >
              <Nav.Left as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>
                  Nav Item
                </Section.Item>
                <Section.Icon @icon="code" />
                <Section.Control>
                  Nav Control
                </Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
              </Nav.Left>
            </DenaliNavbar>
          
      */
          {
            id: 'C8cv5X78',
            block:
              '{"symbols":["Nav","Section"],"statements":[[2,"\\n      "],[8,"denali-navbar",[[24,0,"test-nav"]],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Left"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[8,[32,2,["Logo"]],[[24,"src","img.png"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["Item"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Item\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Icon"]],[],[["@icon"],["code"]],null],[2,"\\n          "],[8,[32,2,["Control"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Control\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Link"]],[[24,6,"http://denali.design"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["LinkTo"]],[],[["@route"],["four-oh-four"]],null],[2,"\\n        "]],"parameters":[2]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.test-nav .nav-left .nav-brand')
        .hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
      assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
      assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
      assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
      assert
        .dom('.test-nav .nav-left a.nav-item')
        .hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
      assert
        .dom('.test-nav .nav-left a.ember-view.nav-item')
        .hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');
    });
    (0, _qunit.test)('left can yield sub components when `@isResponsive` is true', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar
              class="test-nav"
              @isResponsive={{true}}
              as |Nav|
            >
              <Nav.Left as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>
                  Nav Item
                </Section.Item>
                <Section.Icon @icon="code" />
                <Section.Control>
                  Nav Control
                </Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
              </Nav.Left>
            </DenaliNavbar>
          
      */
          {
            id: 'Qy9Jy2M8',
            block:
              '{"symbols":["Nav","Section"],"statements":[[2,"\\n      "],[8,"denali-navbar",[[24,0,"test-nav"]],[["@isResponsive"],[true]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Left"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[8,[32,2,["Logo"]],[[24,"src","img.png"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["Item"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Item\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Icon"]],[],[["@icon"],["code"]],null],[2,"\\n          "],[8,[32,2,["Control"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Control\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Link"]],[[24,6,"http://denali.design"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["LinkTo"]],[],[["@route"],["four-oh-four"]],null],[2,"\\n        "]],"parameters":[2]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.test-nav .nav-left .nav-brand')
        .hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
      assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
      assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
      assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
      assert
        .dom('.test-nav .nav-left a.nav-item')
        .hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
      assert
        .dom('.test-nav .nav-left a.ember-view.nav-item')
        .hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');
    });
    (0, _qunit.test)('center can yield sub components', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar
              class="test-nav"
              as |Nav|
            >
              <Nav.Center as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>
                  Nav Item
                </Section.Item>
                <Section.Icon @icon="code" />
                <Section.Control>
                  Nav Control
                </Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
              </Nav.Center>
            </DenaliNavbar>
          
      */
          {
            id: 'BurmFSL3',
            block:
              '{"symbols":["Nav","Section"],"statements":[[2,"\\n      "],[8,"denali-navbar",[[24,0,"test-nav"]],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Center"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[8,[32,2,["Logo"]],[[24,"src","img.png"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["Item"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Item\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Icon"]],[],[["@icon"],["code"]],null],[2,"\\n          "],[8,[32,2,["Control"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Control\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Link"]],[[24,6,"http://denali.design"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["LinkTo"]],[],[["@route"],["four-oh-four"]],null],[2,"\\n        "]],"parameters":[2]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.test-nav .nav-center .nav-brand')
        .hasAttribute('src', 'img.png', 'Center can yield a nav logo component');
      assert.dom('.test-nav .nav-center .nav-item').hasText('Nav Item', 'Center can yield a nav item component');
      assert.dom('.test-nav .nav-center .nav-icon .d-icon').hasClass('d-code', 'Center can yield a nav icon component');
      assert
        .dom('.test-nav .nav-center .nav-control')
        .hasText('Nav Control', 'Center can yield a nav control component');
      assert
        .dom('.test-nav .nav-center a.nav-item')
        .hasAttribute('href', 'http://denali.design', 'Center can yield a nav link component');
      assert
        .dom('.test-nav .nav-center a.ember-view.nav-item')
        .hasAttribute('href', '/four-oh-four', 'Center can yield a nav link-to component');
    });
    (0, _qunit.test)('right can yield sub components', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar
              class="test-nav"
              as |Nav|
            >
              <Nav.Right as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>
                  Nav Item
                </Section.Item>
                <Section.Icon @icon="code" />
                <Section.Control>
                  Nav Control
                </Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
              </Nav.Right>
            </DenaliNavbar>
          
      */
          {
            id: 'A/SLMXvy',
            block:
              '{"symbols":["Nav","Section"],"statements":[[2,"\\n      "],[8,"denali-navbar",[[24,0,"test-nav"]],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Right"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[8,[32,2,["Logo"]],[[24,"src","img.png"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["Item"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Item\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Icon"]],[],[["@icon"],["code"]],null],[2,"\\n          "],[8,[32,2,["Control"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n            Nav Control\\n          "]],"parameters":[]}]]],[2,"\\n          "],[8,[32,2,["Link"]],[[24,6,"http://denali.design"]],[[],[]],null],[2,"\\n          "],[8,[32,2,["LinkTo"]],[],[["@route"],["four-oh-four"]],null],[2,"\\n        "]],"parameters":[2]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.test-nav .nav-right .nav-brand')
        .hasAttribute('src', 'img.png', 'Right can yield a nav logo component');
      assert.dom('.test-nav .nav-right .nav-item').hasText('Nav Item', 'Right can yield a nav item component');
      assert.dom('.test-nav .nav-right .nav-icon .d-icon').hasClass('d-code', 'Right can yield a nav icon component');
      assert.dom('.test-nav .nav-right .nav-control').hasText('Nav Control', 'Right can yield a nav control component');
      assert
        .dom('.test-nav .nav-right a.nav-item')
        .hasAttribute('href', 'http://denali.design', 'Right can yield a nav link component');
      assert
        .dom('.test-nav .nav-right a.ember-view.nav-item')
        .hasAttribute('href', '/four-oh-four', 'Right can yield a nav link-to component');
    });
  });
});
define('dummy/tests/integration/components/denali-navbar/control-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-navbar/control', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar::Control>
              Inner Content
            </DenaliNavbar::Control>
          
      */
          {
            id: 'prwHmvN4',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-navbar/control",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('div.nav-control').hasText('Inner Content', 'DenaliNavbar::Control exists and renders inner content');
    });
  });
});
define('dummy/tests/integration/components/denali-navbar/icon-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-navbar/icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('icon', 'code');
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar::Icon
              @icon={{this.icon}}
            />
          
      */
          {
            id: 'UvM2/al7',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-navbar/icon",[],[["@icon"],[[32,0,["icon"]]]],null],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.nav-icon .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
      this.set('icon', 'bug');
      assert.dom('.nav-icon .d-icon.d-bug').exists('DenaliNavbar::Icon exists and has the correct icon class');
    });
  });
});
define('dummy/tests/integration/components/denali-navbar/item-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-navbar/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar::Item>
              Inner Content
            </DenaliNavbar::Item>
          
      */
          {
            id: 'cw+xySuR',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-navbar/item",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('span.nav-item').hasText('Inner Content', 'DenaliNavbar::Item exists and renders inner content');
    });
    (0, _qunit.test)('it an be set active ', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliNavbar::Item
              @isActive={{this.isActive}}
            >
              Inner Content
            </DenaliNavbar::Item>
          
      */
          {
            id: 'sVWCsKjf',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-navbar/item",[],[["@isActive"],[[32,0,["isActive"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('span.nav-item').doesNotHaveClass('is-active', 'DenaliNavbar::Item is not active by default');
      this.set('isActive', true);
      assert.dom('span.nav-item').hasClass('is-active', 'DenaliNavbar::Item is active when `@isActive` arg is true');
    });
  });
});
define('dummy/tests/integration/components/denali-navbar/logo-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-navbar/logo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliNavbar::Logo @src="logo.png"/>
      */
          {
            id: 'LuzWpGOa',
            block:
              '{"symbols":[],"statements":[[8,"denali-navbar/logo",[],[["@src"],["logo.png"]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('img').hasClass('nav-brand', 'DenaliNavbar::Logo renders an img with the correct class');
      assert
        .dom('img.nav-brand')
        .hasAttribute('src', 'logo.png', 'DenaliNavbar::Logo renders src attr with the correct value');
      assert
        .dom('img.nav-brand')
        .hasAttribute('alt', 'logo', 'DenaliNavbar::Logo renders alt attr with the default value');
    });
  });
});
define('dummy/tests/integration/components/denali-radio-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-radio', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadio as |Radio|>
              <Radio.Option @value="">Inner Content</Radio.Option>
            </DenaliRadio>
          
      */
          {
            id: 'qpLk9Hn8',
            block:
              '{"symbols":["Radio"],"statements":[[2,"\\n      "],[8,"denali-radio",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[""]],[["default"],[{"statements":[[2,"Inner Content"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('div.radio').exists(
        {
          count: 1,
        },
        'DenaliRadio Option exists'
      );
      assert.dom('div.radio').hasText('Inner Content', 'DenaliRadio Option renders inner content');
    });
    (0, _qunit.test)('handles change events', async function (assert) {
      assert.expect(6);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
              <Radio.Option @value="surprise">2</Radio.Option>
              <Radio.Option @value={{3}}>3</Radio.Option>
            </DenaliRadio>
          
      */
          {
            id: 'FO8o7JGU',
            block:
              '{"symbols":["Radio"],"statements":[[2,"\\n      "],[8,"denali-radio",[],[["@onChanged"],[[32,0,["onChanged"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],["surprise"]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[3]],[["default"],[{"statements":[[2,"3"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('onChanged', (value) => assert.equal(value, 3, 'the last value is clicked'));
      await (0, _testHelpers.click)('.radio input[value="3"]');
      assert.dom('.radio input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', (value) => assert.equal(value, 1, 'the first value is clicked'));
      await (0, _testHelpers.click)('.radio input[value="1"]');
      assert.dom('.radio input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', (value) => assert.equal(value, 'surprise', 'the middle value is clicked'));
      await (0, _testHelpers.click)('.radio input[value="surprise"]');
      assert.dom('.radio input[value="surprise"]').isChecked('The element is marked as checked after being clicked');
    });
    (0, _qunit.test)('disabled elements', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
              <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
            </DenaliRadio>
          
      */
          {
            id: 'DiR5hZci',
            block:
              '{"symbols":["Radio"],"statements":[[2,"\\n      "],[8,"denali-radio",[],[["@onChanged"],[[32,0,["onChanged"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value","@disabled"],["surprise",true]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.radio input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');
      this.set('onChanged', () => assert.notOk(true, 'the disabled value cannot be clicked'));
      await (0, _testHelpers.click)('.radio input[value="surprise"]');
      assert
        .dom('.radio input[value="surprise"]')
        .isNotChecked('The disabled element is not marked as checked after being clicked');
    });
    (0, _qunit.test)('checked elements', async function (assert) {
      assert.expect(6);
      this.checked = false;
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadio as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
              <Radio.Option @value={{2}} @checked={{this.checked}}>2</Radio.Option>
              <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
            </DenaliRadio>
          
      */
          {
            id: 'CwmAvA6q',
            block:
              '{"symbols":["Radio"],"statements":[[2,"\\n      "],[8,"denali-radio",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value","@checked"],[2,[32,0,["checked"]]]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value","@disabled"],["surprise",true]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.radio input[value="1"]').isNotChecked('The option is not marked as checked');
      assert.dom('.radio input[value="2"]').isNotChecked('The option is not marked as checked');
      assert.dom('.radio input[value="surprise"]').isNotChecked('The option is not marked as checked');
      this.set('checked', true);
      assert.dom('.radio input[value="1"]').isNotChecked('The option is still not marked as checked');
      assert.dom('.radio input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
      assert.dom('.radio input[value="surprise"]').isNotChecked('The option is still not marked as checked');
    });
    (0, _qunit.test)('clicking label', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
            </DenaliRadio>
          
      */
          {
            id: 'OUIqnqGH',
            block:
              '{"symbols":["Radio"],"statements":[[2,"\\n      "],[8,"denali-radio",[],[["@onChanged"],[[32,0,["onChanged"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('onChanged', (value) => assert.equal(value, 1, 'the event is triggered when clicking a label'));
      assert.dom('.radio input').isNotChecked('The option is not marked as checked');
      await (0, _testHelpers.click)('.radio label');
      assert.dom('.radio input').isChecked('The option is marked as checked after clicking the label');
    });
  });
});
define('dummy/tests/integration/components/denali-radio-toggle-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-radio-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadioToggle as |Toggle|>
              <Toggle.Option @value="1">Item 1</Toggle.Option>
            </DenaliRadioToggle>
      */
          {
            id: 'O4Phug/6',
            block:
              '{"symbols":["Toggle"],"statements":[[2,"\\n      "],[8,"denali-radio-toggle",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],["1"]],[["default"],[{"statements":[[2,"Item 1"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('label').hasText('Item 1', 'DenaliRadioToggle.Option exists and renders inner content');
      assert.dom('input').hasAttribute('value', '1', 'DenaliRadioToggle.Option exists and has a value');
    });
    (0, _qunit.test)('it handles change events for radio options', async function (assert) {
      assert.expect(6);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
              <Toggle.Option @value="surprise">2</Toggle.Option>
              <Toggle.Option @value={{3}}>3</Toggle.Option>
            </DenaliRadioToggle>
          
      */
          {
            id: 'M4gDSaa1',
            block:
              '{"symbols":["Toggle"],"statements":[[2,"\\n      "],[8,"denali-radio-toggle",[],[["@onChanged"],[[32,0,["onChanged"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],["surprise"]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[3]],[["default"],[{"statements":[[2,"3"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('onChanged', (value) => assert.equal(value, 3, 'the last value is clicked'));
      await (0, _testHelpers.click)('.toggle input[value="3"]');
      assert.dom('.toggle input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', (value) => assert.equal(value, 1, 'the first value is clicked'));
      await (0, _testHelpers.click)('.toggle input[value="1"]');
      assert.dom('.toggle input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', (value) => assert.equal(value, 'surprise', 'the middle value is clicked'));
      await (0, _testHelpers.click)('.toggle input[value="surprise"]');
      assert.dom('.toggle input[value="surprise"]').isChecked('The element is marked as checked after being clicked');
    });
    (0, _qunit.test)('it handles disabled elements for radio options', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
              <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
            </DenaliRadioToggle>
          
      */
          {
            id: 'lFwcRacx',
            block:
              '{"symbols":["Toggle"],"statements":[[2,"\\n      "],[8,"denali-radio-toggle",[],[["@onChanged"],[[32,0,["onChanged"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value","@disabled"],["surprise",true]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.toggle input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');
      this.set('onChanged', () => assert.notOk(true, 'the disabled value cannot be clicked'));
      await (0, _testHelpers.click)('.toggle input[value="surprise"]');
      assert
        .dom('.toggle input[value="surprise"]')
        .isNotChecked('The disabled element is not marked as checked after being clicked');
    });
    (0, _qunit.test)('it handles checked elements for radio options', async function (assert) {
      assert.expect(6);
      this.checked = false;
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadioToggle as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
              <Toggle.Option @value={{2}} @checked={{this.checked}}>2</Toggle.Option>
              <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
            </DenaliRadioToggle>
          
      */
          {
            id: 'JwUSlL8k',
            block:
              '{"symbols":["Toggle"],"statements":[[2,"\\n      "],[8,"denali-radio-toggle",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value","@checked"],[2,[32,0,["checked"]]]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value","@disabled"],["surprise",true]],[["default"],[{"statements":[[2,"2"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.toggle input[value="1"]').isNotChecked('The option is not marked as checked');
      assert.dom('.toggle input[value="2"]').isNotChecked('The option is not marked as checked');
      assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is not marked as checked');
      this.set('checked', true);
      assert.dom('.toggle input[value="1"]').isNotChecked('The option is still not marked as checked');
      assert.dom('.toggle input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
      assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is still not marked as checked');
    });
    (0, _qunit.test)('it handles clicking labels for radio options', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
            </DenaliRadioToggle>
          
      */
          {
            id: 'QbyGDWKL',
            block:
              '{"symbols":["Toggle"],"statements":[[2,"\\n      "],[8,"denali-radio-toggle",[],[["@onChanged"],[[32,0,["onChanged"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"1"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('onChanged', (value) => assert.equal(value, 1, 'the event is triggered when clicking a label'));
      assert.dom('.toggle input').isNotChecked('The option is not marked as checked');
      await (0, _testHelpers.click)('.toggle label');
      assert.dom('.toggle input').isChecked('The option is marked as checked after clicking the label');
    });
    (0, _qunit.test)('it supports small size', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadioToggle @isSmall={{this.isSmall}} as |Toggle|>
              <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
            </DenaliRadioToggle>
          
      */
          {
            id: 'dpnU1EQH',
            block:
              '{"symbols":["Toggle"],"statements":[[2,"\\n      "],[8,"denali-radio-toggle",[],[["@isSmall"],[[32,0,["isSmall"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"Item 1"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
      this.set('isSmall', 'true');
      assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliRadioToggle @isInverse={{this.isInverse}} as |Toggle|>
              <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
            </DenaliRadioToggle>
          
      */
          {
            id: 'a69DkjVz',
            block:
              '{"symbols":["Toggle"],"statements":[[2,"\\n      "],[8,"denali-radio-toggle",[],[["@isInverse"],[[32,0,["isInverse"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Option"]],[],[["@value"],[1]],[["default"],[{"statements":[[2,"Item 1"]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert
        .dom('.toggle')
        .hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');
    });
  });
});
define('dummy/tests/integration/components/denali-select-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  const opts = [
    {
      text: 'Item 1',
    },
    {
      text: 'Item 2',
    },
    {
      text: 'Item 3',
    },
  ];
  (0, _qunit.module)('Integration | Component | denali-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', async function (assert) {
      assert.expect(1);
      (0, _testHelpers.setupOnerror)(function ({ message }) {
        assert.equal(
          message,
          'Failed prop type: The prop `options` is marked as required in `DenaliSelectComponent`, but its value is `undefined`.',
          'If @args() contains a PropType validator, an error will be thrown if the value is incorrect'
        );
      });
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliSelect />
      */
          {
            id: 'Twl/vb1l',
            block: '{"symbols":[],"statements":[[8,"denali-select",[],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
    });
    (0, _qunit.test)('it renders an option string', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliSelect @options={{array "Item 1"}} @onChange={{this.onChange}} as |option|>
              {{option}}
            </DenaliSelect>
          
      */
          {
            id: 'q2dz6w/e',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-select",[],[["@options","@onChange"],[[30,[36,0],["Item 1"],null],[32,0,["onChange"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["array"]}',
            meta: {},
          }
        )
      );
      assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
      assert.dom('div.input select').exists('DenaliSelect renders a select element.');
      assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders text.');
    });
    (0, _qunit.test)('it renders an option object', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliSelect @options={{array (hash text="Item 1")}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
          {
            id: 'Yy1oNePP',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-select",[],[["@options"],[[30,[36,1],[[30,[36,0],null,[["text"],["Item 1"]]]],null]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["hash","array"]}',
            meta: {},
          }
        )
      );
      assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
      assert.dom('div.input select').exists('DenaliSelect renders a select element.');
      assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders an object.');
    });
    (0, _qunit.test)('an option is active', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliSelect @options={{this.options}} @selectedOption={{this.selectedOption}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
          {
            id: 'xImrGvJi',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-select",[],[["@options","@selectedOption"],[[32,0,["options"]],[32,0,["selectedOption"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', opts);
      this.set('selectedOption', opts[1]);
      assert.equal(
        (0, _testHelpers.find)('div.input select').selectedIndex,
        1,
        'DenaliSelect selects the object given by the `@selectedOption` arg'
      );
    });
    (0, _qunit.test)('an option is disabled', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliSelect @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
          {
            id: 'thexireZ',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-select",[],[["@options","@disabledOptions"],[[32,0,["options"]],[32,0,["disabled"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', opts);
      this.set('disabled', [opts[1]]);
      assert.deepEqual(
        (0, _testHelpers.findAll)('div.input option').map((e) => e.disabled),
        [false, true, false],
        'DenaliSelect options are enabled and disabled as specified.'
      );
    });
    (0, _qunit.test)('it supports small size', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliSelect @options={{this.options}} @isSmall={{this.isSmall}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
          {
            id: 'k7Pjl20c',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-select",[],[["@options","@isSmall"],[[32,0,["options"]],[32,0,["isSmall"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', opts);
      assert.dom('div.input').doesNotHaveClass('is-small', 'DenaliSelect does not have small styling by default');
      this.set('isSmall', 'true');
      assert.dom('div.input').hasClass('is-small', 'DenaliSelect has a small size when `@isSmall` arg is set to true');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliSelect @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
          {
            id: 'Fb4qNbCs',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-select",[],[["@options","@isInverse"],[[32,0,["options"]],[32,0,["isInverse"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', opts);
      assert.dom('div.input').doesNotHaveClass('is-inverse', 'DenaliSelect does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert
        .dom('div.input')
        .hasClass('is-inverse', 'DenaliSelect has inverse styling when `@isInverse` arg is set to true');
    });
    (0, _qunit.test)('it handles change events', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliSelect
              @options={{this.options}}
              @selectedOption={{this.selectedOption}}
              @disabledOptions={{this.disabled}}
              @onChange={{this.onChange}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
          {
            id: 'V7E9T2xu',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-select",[],[["@options","@selectedOption","@disabledOptions","@onChange"],[[32,0,["options"]],[32,0,["selectedOption"]],[32,0,["disabled"]],[32,0,["onChange"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', [
        {
          text: 'Item 1',
        },
        {
          text: 'Item 2',
        },
        {
          text: 'Item 3',
        },
      ]);
      this.set('selectedOption', this.options[2]);
      assert.equal((0, _testHelpers.find)('div.input select').selectedIndex, 2);
      this.set('onChange', (option) => {
        this.set('selectedOption', option);
        assert.equal(option, this.options[1], 'DenaliSelect @onChange action provides the object selected');
      });
      await (0, _testHelpers.fillIn)('div.input select', 'Item 2');
    });
  });
});
define('dummy/tests/integration/components/denali-switch-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliSwitch @offLabel="Lights Off" @onLabel="Lights On" />
      */
          {
            id: 'CEeg5ZhH',
            block:
              '{"symbols":[],"statements":[[8,"denali-switch",[],[["@offLabel","@onLabel"],["Lights Off","Lights On"]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.denali-switch.switch').exists('A denali switch component is rendered');
      assert.dom('.denali-switch.switch .label.off').hasText('Lights Off', 'A denali switch renders an off label');
      assert.dom('.denali-switch.switch .label.on').hasText('Lights On', 'A denali switch renders an on label');
      assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
    });
    (0, _qunit.test)('checked and disabled', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliSwitch
            @offLabel="Off"
            @onLabel="On"
            checked={{this.checked}}
            disabled={{this.disabled}}
          />
      */
          {
            id: 'vSa4Pp8z',
            block:
              '{"symbols":[],"statements":[[8,"denali-switch",[[16,"checked",[32,0,["checked"]]],[16,"disabled",[32,0,["disabled"]]]],[["@offLabel","@onLabel"],["Off","On"]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
      this.set('checked', true);
      assert.dom('.denali-switch.switch input').isChecked('The switch is on when checked is set to true');
      assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
      this.set('disabled', true);
      assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when disabled is set to true');
    });
    (0, _qunit.test)('isEnabled and isDisabled', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliSwitch
            @offLabel="Off"
            @onLabel="On"
            @isEnabled={{this.isEnabled}}
            @isDisabled={{this.isDisabled}}
          />
      */
          {
            id: '541Z9DZu',
            block:
              '{"symbols":[],"statements":[[8,"denali-switch",[],[["@offLabel","@onLabel","@isEnabled","@isDisabled"],["Off","On",[32,0,["isEnabled"]],[32,0,["isDisabled"]]]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
      this.set('isEnabled', true);
      assert.dom('.denali-switch.switch input').isChecked('The switch is on when isEnabled is set to true');
      assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
      this.set('isDisabled', true);
      assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when isDisabled is set to true');
    });
    (0, _qunit.test)('click and onChange action', async function (assert) {
      assert.expect(7);
      this.set('clickHandler', () => {
        assert.ok('Click handler is called on click');
      });
      this.set('changeHandler', () => {
        assert.ok('Change handler is called on click');
      });
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliSwitch
            @offLabel="Off"
            @onLabel="On"
            @onChange={{action this.changeHandler}}
            {{on "click" (action this.clickHandler)}}
          />
      */
          {
            id: '/AGB9oyM',
            block:
              '{"symbols":[],"statements":[[8,"denali-switch",[[4,[38,1],["click",[30,[36,0],[[32,0],[32,0,["clickHandler"]]],null]],null]],[["@offLabel","@onLabel","@onChange"],["Off","On",[30,[36,0],[[32,0],[32,0,["changeHandler"]]],null]]],null]],"hasEval":false,"upvars":["action","on"]}',
            meta: {},
          }
        )
      );
      assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
      await (0, _testHelpers.click)('.denali-switch input');
      assert.dom('.denali-switch.switch input').isChecked('The switch is on after click');
      await (0, _testHelpers.click)('.denali-switch input');
      assert.dom('.denali-switch.switch input').isNotChecked('Clicking again turns the switch off');
    });
  });
});
define('dummy/tests/integration/components/denali-tabs-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-tabs', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs>
              Inner Content
            </DenaliTabs>
          
      */
          {
            id: '2OaR0VKz',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('div.tabs ul').hasText('Inner Content', 'DenaliTabs exists and renders inner content');
    });
    (0, _qunit.test)('it supports styles', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs
              @style={{this.style}}
            >
              Inner Content
            </DenaliTabs>
          
      */
          {
            id: 'JYFm9YEE',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs",[],[["@style"],[[32,0,["style"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.tabs').hasClass('is-primary', 'DenaliTabs renders a primary style by default');
      this.set('style', 'secondary');
      assert
        .dom('.tabs')
        .hasClass('is-secondary', 'DenaliTabs renders a secondary style by setting `@style` arg to secondary');
    });
    (0, _qunit.test)('it supports alignment', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs
              @alignment={{this.alignment}}
            >
              Inner Content
            </DenaliTabs>
          
      */
          {
            id: 'orSnB54d',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs",[],[["@alignment"],[[32,0,["alignment"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal alignment by default');
      this.set('alignment', 'vertical');
      assert
        .dom('.tabs')
        .hasClass('is-vertical', 'DenaliTabs renders a vertical alignment by setting `@alignment` arg to vertical');
    });
    (0, _qunit.test)('it can yield a `Tab` sub component', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs as |Tabs|>
              <Tabs.Tab>
                The Greatest Tab
              </Tabs.Tab>
            </DenaliTabs>
          
      */
          {
            id: 'dlSfOFWb',
            block:
              '{"symbols":["Tabs"],"statements":[[2,"\\n      "],[8,"denali-tabs",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["Tab"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          The Greatest Tab\\n        "]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliTabs can yield a `Tab` sub component');
    });
    (0, _qunit.test)('it can yield a `LinkToTab` sub component', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs as |Tabs|>
              <Tabs.LinkToTab
                @route="/"
              >
                The Greatest Tab
              </Tabs.LinkToTab>
            </DenaliTabs>
          
      */
          {
            id: 'wTu1Xays',
            block:
              '{"symbols":["Tabs"],"statements":[[2,"\\n      "],[8,"denali-tabs",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["LinkToTab"]],[],[["@route"],["/"]],[["default"],[{"statements":[[2,"\\n          The Greatest Tab\\n        "]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('.tabs li.ember-view a')
        .hasText('The Greatest Tab', 'DenaliTabs can yield a `LinkToTab` sub component');
    });
  });
});
define('dummy/tests/integration/components/denali-tabs/link-to-tab-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
  'dummy/tests/helpers/setup-router',
], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-tabs/link-to-tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs::LinkToTab
              @route="four-oh-four"
            >
              Inner Content
            </DenaliTabs::LinkToTab>
          
      */
          {
            id: 'zP7i78ah',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs/link-to-tab",[],[["@route"],["four-oh-four"]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('li a').hasText('Inner Content', 'DenaliTabs::LinkToTab exists and renders Inner Content');
      assert
        .dom('li a')
        .hasAttribute('href', '/four-oh-four', 'DenaliTabs::LinkToTab has correct href attribute for given LinkTo arg');
    });
    (0, _qunit.test)('it can be set active', async function (assert) {
      this.set('route', 'four-oh-four');
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs::LinkToTab
              @route={{this.route}}
            >
              Inner Content
            </DenaliTabs::LinkToTab>
          
      */
          {
            id: 'N6iB7HWS',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs/link-to-tab",[],[["@route"],[[32,0,["route"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('li')
        .doesNotHaveClass('is-active', 'DenaliTabs::LinkToTab is not active when not on the current route');
      this.set('route', 'index');
      assert.dom('li').hasClass('is-active', 'DenaliTabs::LinkToTab is active when on the current route');
    });
    (0, _qunit.test)('it can be set disabled', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs::LinkToTab
              @route="four-oh-four"
              @disabled={{this.disabled}}
            >
              Inner Content
            </DenaliTabs::LinkToTab>
          
      */
          {
            id: 'IUx8crIW',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs/link-to-tab",[],[["@route","@disabled"],["four-oh-four",[32,0,["disabled"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::LinkToTab is not disabled by default');
      this.set('disabled', true);
      assert.dom('li').hasClass('is-disabled', 'DenaliTabs::LinkToTab is disabled when disabled is set to true');
    });
  });
});
define('dummy/tests/integration/components/denali-tabs/tab-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-tabs/tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs::Tab>
              Inner Content
            </DenaliTabs::Tab>
          
      */
          {
            id: 'PJd9Hi85',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs/tab",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('li span').hasText('Inner Content', 'DenaliTabs::Tab exists and renders inner content');
    });
    (0, _qunit.test)('it can be set active', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs::Tab
              @isActive={{this.isActive}}
            >
              Inner Content
            </DenaliTabs::Tab>
          
      */
          {
            id: 'BO5uDAWO',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs/tab",[],[["@isActive"],[[32,0,["isActive"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::Tab is not active by default');
      this.set('isActive', true);
      assert.dom('li').hasClass('is-active', 'DenaliTabs::Tab is active when setting `@isActive` arg to true');
    });
    (0, _qunit.test)('it can be set disabled', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTabs::Tab
              @isDisabled={{this.isDisabled}}
            >
              Inner Content
            </DenaliTabs::Tab>
          
      */
          {
            id: 'ItwKFkqj',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tabs/tab",[],[["@isDisabled"],[[32,0,["isDisabled"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::Tab is not disabled by default');
      this.set('isDisabled', true);
      assert.dom('li').hasClass('is-disabled', 'DenaliTabs::Tab is active when setting `@isDisabled` arg to true');
    });
  });
});
define('dummy/tests/integration/components/denali-tag-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (
  _qunit,
  _emberQunit,
  _testHelpers
) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTag>
              Inner Content
            </DenaliTag>
          
      */
          {
            id: 'kuDYlkHS',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tag",[],[[],[]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('span.tag').hasText('Inner Content', 'DenaliTag exists and renders inner content');
    });
    (0, _qunit.test)('states', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTag @state={{this.state}}>
              Inner Content
            </DenaliTag>
          
      */
          {
            id: 'ahjtebqo',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tag",[],[["@state"],[[32,0,["state"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('span.tag').exists('DenaliTag can render without a state set');
      this.set('state', 'disabled');
      assert
        .dom('span.tag')
        .hasClass('is-disabled', 'DenaliTag can be set disabled by setting the `@state` arg to `disabled`');
      this.set('state', 'active');
      assert
        .dom('span.tag')
        .hasClass('is-active', 'DenaliTag can be set active by setting the `@state` arg to `active`');
    });
    (0, _qunit.test)('outlined', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTag @isOutlined={{this.outlined}}>
              Inner Content
            </DenaliTag>
          
      */
          {
            id: 'trjv8M+h',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tag",[],[["@isOutlined"],[[32,0,["outlined"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('span.tag').doesNotHaveClass('outlined', 'DenaliTag is not outlined by default');
      this.set('outlined', true);
      assert.dom('span.tag').hasClass('outlined', 'DenaliTag can be outlined by setting the `@isOutlined` arg to true');
    });
    (0, _qunit.test)('small', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTag @isSmall={{this.isSmall}}>
              Inner Content
            </DenaliTag>
          
      */
          {
            id: 'cZ1MG2zu',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tag",[],[["@isSmall"],[[32,0,["isSmall"]]]],[["default"],[{"statements":[[2,"\\n        Inner Content\\n      "]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('span.tag').doesNotHaveClass('is-small', 'DenaliTag is not small by default');
      this.set('isSmall', true);
      assert
        .dom('span.tag')
        .hasClass('is-small', 'DenaliTag can be made smaller by setting the `@isSmall` arg to true');
    });
    (0, _qunit.test)('icons', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTag
              @iconFront={{this.iconFront}}
              @iconBack={{this.iconBack}}
            >Tag Content</DenaliTag>
          
      */
          {
            id: 'DmcHQJEt',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-tag",[],[["@iconFront","@iconBack"],[[32,0,["iconFront"]],[32,0,["iconBack"]]]],[["default"],[{"statements":[[2,"Tag Content"]],"parameters":[]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert
        .dom('span.tag')
        .doesNotHaveClass('has-icon-front', 'DenaliTag does not have the `has-icon-front` class by default');
      assert
        .dom('span.tag')
        .doesNotHaveClass('has-icon-back', 'DenaliTag does not have the `has-icon-back` class by default');
      this.set('iconFront', 'check');
      assert
        .dom('span.tag')
        .hasClass('has-icon-front', 'DenaliTag has the `has-icon-front` class when iconFront is specified');
      assert.dom('span.tag .d-icon').hasClass('d-check', 'DenaliTag has the specified icon in the front'); // unset the front icon to check the back icon

      this.set('iconFront', undefined);
      this.set('iconBack', 'close');
      assert
        .dom('span.tag')
        .hasClass('has-icon-back', 'DenaliTag has the `has-icon-back` class when iconBack is specified');
      assert.dom('span.tag .d-icon').hasClass('d-close', 'test');
    });
  });
});
define('dummy/tests/integration/components/denali-title-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | denali-title', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliTitle />
      */
          {
            id: 'Viyhl0aT',
            block: '{"symbols":[],"statements":[[8,"denali-title",[],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('div.title').exists('DenaliTitle can render.');
    });
    (0, _qunit.test)('it renders with a title argument', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliTitle @title={{this.title}} />
      */
          {
            id: 'S6BpDGHN',
            block:
              '{"symbols":[],"statements":[[8,"denali-title",[],[["@title"],[[32,0,["title"]]]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('title', 'My Title');
      assert.dom('span').hasClass('bar', 'DenaliTitle has a bar.');
      assert.dom('div.title-text').exists('DenaliTitle has a title-text class.');
      assert.dom('h3').hasTextContaining('My Title', 'DenaliTitle renders a title using an argument.');
    });
    (0, _qunit.test)('it renders with a caption argument', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliTitle @title={{this.title}} @caption={{this.caption}} />
      */
          {
            id: 'cY/xB2ES',
            block:
              '{"symbols":[],"statements":[[8,"denali-title",[],[["@title","@caption"],[[32,0,["title"]],[32,0,["caption"]]]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('caption', 'My Caption');
      assert.dom('h6').doesNotExist('DenaliTitle does not render a caption without a title.');
      this.set('title', 'My Title');
      assert.dom('h6').hasTextContaining('My Caption', 'DenaliTitle renders a caption using an argument.');
    });
    (0, _qunit.test)('it renders with block components', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTitle as |Title|>
              <Title.h1>
                {{this.h1}}
              </Title.h1>
              <Title.h2>
                {{this.h2}}
              </Title.h2>
              <Title.h3>
                {{this.h3}}
              </Title.h3>
              <Title.h4>
                {{this.h4}}
              </Title.h4>
              <Title.h5>
                {{this.h5}}
              </Title.h5>
              <Title.h6>
                {{this.h6}}
              </Title.h6>
            </DenaliTitle>
          
      */
          {
            id: 'VYjbRo73',
            block:
              '{"symbols":["Title"],"statements":[[2,"\\n      "],[8,"denali-title",[],[[],[]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["h1"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["h1"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["h2"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["h2"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["h3"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["h3"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["h4"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["h4"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["h5"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["h5"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["h6"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["h6"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('h1', 'My H1');
      assert.dom('h1').hasText('My H1', 'DenaliTitle renders block content for h1.');
      this.set('h2', 'My H2');
      assert.dom('h2').hasText('My H2', 'DenaliTitle renders block content for h2.');
      this.set('h3', 'My H3');
      assert.dom('h3').hasText('My H3', 'DenaliTitle renders block content for h3.');
      this.set('h4', 'My H4');
      assert.dom('h4').hasText('My H4', 'DenaliTitle renders block content for h4.');
      this.set('h5', 'My H5');
      assert.dom('h5').hasText('My H5', 'DenaliTitle renders block content for h5.');
      this.set('h6', 'My H6');
      assert.dom('h6').hasText('My H6', 'DenaliTitle renders block content for h6.');
    });
    (0, _qunit.test)('it supports a wide bar', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTitle @hasWideBar={{this.hasWideBar}} as |Title|>
              <Title.h1>
                {{this.title}}
              </Title.h1>
              <Title.Caption>
                {{this.caption}}
              </Title.Caption>
            </DenaliTitle>
          
      */
          {
            id: '9Jd/hdGi',
            block:
              '{"symbols":["Title"],"statements":[[2,"\\n      "],[8,"denali-title",[],[["@hasWideBar"],[[32,0,["hasWideBar"]]]],[["default"],[{"statements":[[2,"\\n        "],[8,[32,1,["h1"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["title"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n        "],[8,[32,1,["Caption"]],[],[[],[]],[["default"],[{"statements":[[2,"\\n          "],[1,[32,0,["caption"]]],[2,"\\n        "]],"parameters":[]}]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('hasWideBar', true);
      assert.dom('span.bar').hasClass('is-wide', 'DenaliTitle has a wide bar.');
    });
    (0, _qunit.test)('it supports statuses for bar', async function (assert) {
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliTitle @backgroundStatus={{this.backgroundStatus}} />
          
      */
          {
            id: 'Qw2fSNGU',
            block:
              '{"symbols":[],"statements":[[2,"\\n      "],[8,"denali-title",[],[["@backgroundStatus"],[[32,0,["backgroundStatus"]]]],null],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      assert.dom('span.bar').exists('DenaliTitle can render without a backgroundStatus set');
      this.set('backgroundStatus', 'danger');
      assert
        .dom('span.bar')
        .hasClass(
          'has-bg-status-danger',
          'DenaliTitle has background status of danger when `@backgroundStatus` arg is set to danger'
        );
      this.set('backgroundStatus', 'warning');
      assert
        .dom('span.bar')
        .hasClass(
          'has-bg-status-warning',
          'DenaliTitle has background status of warning when `@backgroundStatus` arg is set to warning'
        );
      this.set('backgroundStatus', 'success');
      assert
        .dom('span.bar')
        .hasClass(
          'has-bg-status-success',
          'DenaliTitle has background status of success when `@backgroundStatus` arg is set to success'
        );
      this.set('backgroundStatus', 'info');
      assert
        .dom('span.bar')
        .hasClass(
          'has-bg-status-info',
          'DenaliTitle has background status of info when `@backgroundStatus` arg is set to info'
        );
    });
  });
});
define('dummy/tests/integration/components/denali-title/heading-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  const templates = Object.entries({
    h1: Ember.HTMLBars.template(
      /*
      
        <DenaliTitle::H1 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H1>
      
    */
      {
        id: 'i6eJZflN',
        block:
          '{"symbols":[],"statements":[[2,"\\n    "],[8,"denali-title/h1",[],[["@isRegular","@isUpperCase","@status"],[[32,0,["isRegular"]],[32,0,["isUpperCase"]],[32,0,["status"]]]],[["default"],[{"statements":[[2,"\\n      "],[1,[32,0,["title"]]],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "]],"hasEval":false,"upvars":[]}',
        meta: {},
      }
    ),
    h2: Ember.HTMLBars.template(
      /*
      
        <DenaliTitle::H2 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H2>
      
    */
      {
        id: 'z/i/9/WK',
        block:
          '{"symbols":[],"statements":[[2,"\\n    "],[8,"denali-title/h2",[],[["@isRegular","@isUpperCase","@status"],[[32,0,["isRegular"]],[32,0,["isUpperCase"]],[32,0,["status"]]]],[["default"],[{"statements":[[2,"\\n      "],[1,[32,0,["title"]]],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "]],"hasEval":false,"upvars":[]}',
        meta: {},
      }
    ),
    h3: Ember.HTMLBars.template(
      /*
      
        <DenaliTitle::H3 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H3>, 
      
    */
      {
        id: 'WFkIuu86',
        block:
          '{"symbols":[],"statements":[[2,"\\n    "],[8,"denali-title/h3",[],[["@isRegular","@isUpperCase","@status"],[[32,0,["isRegular"]],[32,0,["isUpperCase"]],[32,0,["status"]]]],[["default"],[{"statements":[[2,"\\n      "],[1,[32,0,["title"]]],[2,"\\n    "]],"parameters":[]}]]],[2,", \\n  "]],"hasEval":false,"upvars":[]}',
        meta: {},
      }
    ),
    h4: Ember.HTMLBars.template(
      /*
      
        <DenaliTitle::H4 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H4>
      
    */
      {
        id: '2K7dZFs6',
        block:
          '{"symbols":[],"statements":[[2,"\\n    "],[8,"denali-title/h4",[],[["@isRegular","@isUpperCase","@status"],[[32,0,["isRegular"]],[32,0,["isUpperCase"]],[32,0,["status"]]]],[["default"],[{"statements":[[2,"\\n      "],[1,[32,0,["title"]]],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "]],"hasEval":false,"upvars":[]}',
        meta: {},
      }
    ),
    h5: Ember.HTMLBars.template(
      /*
      
        <DenaliTitle::H5 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H5>
      
    */
      {
        id: '5pUqlBea',
        block:
          '{"symbols":[],"statements":[[2,"\\n    "],[8,"denali-title/h5",[],[["@isRegular","@isUpperCase","@status"],[[32,0,["isRegular"]],[32,0,["isUpperCase"]],[32,0,["status"]]]],[["default"],[{"statements":[[2,"\\n      "],[1,[32,0,["title"]]],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "]],"hasEval":false,"upvars":[]}',
        meta: {},
      }
    ),
    h6: Ember.HTMLBars.template(
      /*
      
        <DenaliTitle::H6 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H6>
      
    */
      {
        id: '8UQnNeBa',
        block:
          '{"symbols":[],"statements":[[2,"\\n    "],[8,"denali-title/h6",[],[["@isRegular","@isUpperCase","@status"],[[32,0,["isRegular"]],[32,0,["isUpperCase"]],[32,0,["status"]]]],[["default"],[{"statements":[[2,"\\n      "],[1,[32,0,["title"]]],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "]],"hasEval":false,"upvars":[]}',
        meta: {},
      }
    ),
  });
  (0, _qunit.module)('Integration | Component | denali-title/headings', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      for (const [heading, template] of templates) {
        await (0, _testHelpers.render)(template);
        this.set('title', 'My Title');
        assert.dom(heading).hasText('My Title', `DenaliTitle::${heading.toUpperCase()} can render.`);
      }
    });
    (0, _qunit.test)('it supports regular style', async function (assert) {
      for (const [heading, template] of templates) {
        await (0, _testHelpers.render)(template);
        this.set('title', 'My Title');
        this.set('isRegular', undefined);
        assert
          .dom(heading)
          .doesNotHaveClass('is-regular', `Denali::${heading.toUpperCase()} does not have regular styling by default`);
        this.set('isRegular', 'true');
        assert
          .dom(heading)
          .hasClass(
            'is-regular',
            `Denali::${heading.toUpperCase()} has regular styling when @isRegular arg is set to true`
          );
      }
    });
    (0, _qunit.test)('it supports upper casing', async function (assert) {
      for (const [heading, template] of templates) {
        await (0, _testHelpers.render)(template);
        this.set('title', 'My Title');
        this.set('isUpperCase', undefined);
        assert
          .dom(heading)
          .doesNotHaveClass('upper', `Denali::${heading.toUpperCase()} does not have upper case styling by default`);
        this.set('isUpperCase', 'true');
        assert
          .dom(heading)
          .hasClass(
            'upper',
            `Denali::${heading.toUpperCase()} has upper case styling when @isUpperCase arg is set to true`
          );
      }
    });
    (0, _qunit.test)('it supports statuses', async function (assert) {
      for (const [heading, template] of templates) {
        await (0, _testHelpers.render)(template);
        this.set('title', 'My Title');
        this.set('status', undefined);
        assert.dom(heading).exists(`DenaliTitle::${heading.toUpperCase()} can render without a status set`);
        this.set('status', 'danger');
        assert
          .dom(heading)
          .hasClass(
            'is-status-danger',
            `DenaliTitle::${heading.toUpperCase()} has status of danger when @status arg is set to danger`
          );
        this.set('status', 'warning');
        assert
          .dom(heading)
          .hasClass(
            'is-status-warning',
            `DenaliTitle::${heading.toUpperCase()} has status of warning when @status arg is set to warning`
          );
        this.set('status', 'success');
        assert
          .dom(heading)
          .hasClass(
            'is-status-success',
            `DenaliTitle::${heading.toUpperCase()} has status of success when @status arg is set to success`
          );
        this.set('status', 'info');
        assert
          .dom(heading)
          .hasClass(
            'is-status-info',
            `DenaliTitle::${heading.toUpperCase()} has status of info when @status arg is set to info`
          );
      }
    });
  });
});
define('dummy/tests/integration/components/denali-toggle-test', [
  'qunit',
  'ember-qunit',
  '@ember/test-helpers',
], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  const option = {
    text: 'Item 1',
  };
  (0, _qunit.module)('Integration | Component | denali-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', async function (assert) {
      assert.expect(1);
      (0, _testHelpers.setupOnerror)(function ({ message }) {
        assert.equal(
          message,
          'Failed prop type: The prop `options` is marked as required in `DenaliToggleComponent`, but its value is `undefined`.',
          'If @args() contains a PropType validator, an error will be thrown if the value is incorrect'
        );
      });
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        <DenaliToggle />
      */
          {
            id: '/pIp6aCD',
            block: '{"symbols":[],"statements":[[8,"denali-toggle",[],[[],[]],null]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
    });
    (0, _qunit.test)('it renders an option string', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliToggle @options={{array "Item 1"}} as |option|>
              {{option}}
            </DenaliToggle>
          
      */
          {
            id: 'BVFsqqTp',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-toggle",[],[["@options"],[[30,[36,0],["Item 1"],null]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["array"]}',
            meta: {},
          }
        )
      );
      assert.dom('ul').exists('DenaliToggle renders a list.');
      assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders text.');
    });
    (0, _qunit.test)('it renders an option object', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliToggle @options={{array (hash text="Item 1")}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
          {
            id: '+ZWecQCr',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-toggle",[],[["@options"],[[30,[36,1],[[30,[36,0],null,[["text"],["Item 1"]]]],null]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":["hash","array"]}',
            meta: {},
          }
        )
      );
      assert.dom('ul').exists('DenaliToggle renders a list.');
      assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders an object.');
    });
    (0, _qunit.test)('an option is active', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliToggle @options={{this.options}} @activeOption={{this.activeOption}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
          {
            id: 'zdQLOWGD',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-toggle",[],[["@options","@activeOption"],[[32,0,["options"]],[32,0,["activeOption"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', [option]);
      assert.dom('li').doesNotHaveClass('is-active', 'DenaliToggle options are not active by default');
      this.set('activeOption', option);
      assert.dom('li').hasClass('is-active', 'DenaliToggle option is active when `@activeOption` arg is set');
    });
    (0, _qunit.test)('an option is disabled', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliToggle @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
          {
            id: 't+O0Bux7',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-toggle",[],[["@options","@disabledOptions"],[[32,0,["options"]],[32,0,["disabled"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', [option]);
      assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliToggle options are not disabled by default');
      this.set('disabled', [option]);
      assert.dom('li').hasClass('is-disabled', 'DenaliToggle option is disabled when `@isDisabled` arg is set to true');
    });
    (0, _qunit.test)('it supports small size', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliToggle @options={{this.options}} @isSmall={{this.isSmall}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
          {
            id: '8q1bsG/8',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-toggle",[],[["@options","@isSmall"],[[32,0,["options"]],[32,0,["isSmall"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', [option]);
      assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
      this.set('isSmall', 'true');
      assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliToggle @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
          {
            id: '1cLLkgyl',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-toggle",[],[["@options","@isInverse"],[[32,0,["options"]],[32,0,["isInverse"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', [option]);
      assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert
        .dom('.toggle')
        .hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');
    });
    (0, _qunit.test)('it handles change events', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)(
        Ember.HTMLBars.template(
          /*
        
            <DenaliToggle
              @options={{this.options}}
              @activeOption={{this.activeOption}}
              @disabledOptions={{this.disabled}}
              @onChange={{this.changeActive}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
          {
            id: 'fVpW8v8/',
            block:
              '{"symbols":["option"],"statements":[[2,"\\n      "],[8,"denali-toggle",[],[["@options","@activeOption","@disabledOptions","@onChange"],[[32,0,["options"]],[32,0,["activeOption"]],[32,0,["disabled"]],[32,0,["changeActive"]]]],[["default"],[{"statements":[[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n      "]],"parameters":[1]}]]],[2,"\\n    "]],"hasEval":false,"upvars":[]}',
            meta: {},
          }
        )
      );
      this.set('options', [
        {
          text: 'Item 1',
        },
        {
          text: 'Item 2',
        },
        {
          text: 'Item 3',
        },
      ]);
      this.set('activeOption', this.options[2]);
      assert.dom('li:nth-child(3)').hasClass('is-active', 'The third option is active');
      this.set('changeActive', (option) => {
        this.set('activeOption', option);
        assert.equal(option.text, 'Item 2', 'the second option is clicked');
      });
      await (0, _testHelpers.click)('li:nth-child(2)');
      assert.dom('li:nth-child(2)').hasClass('is-active', 'The element is active after being clicked');
      this.set('disabled', [this.options[0]]);
      this.set('changeActive', () => {
        assert.notOk(true, '`@onChange` should not be called when option is disabled');
      });
      await (0, _testHelpers.click)('li:nth-child(1)');
      assert.dom('li:nth-child(2)').hasClass('is-active', 'The original element is still active after being clicked');
    });
  });
});
define('dummy/tests/test-helper', [
  'dummy/app',
  'dummy/config/environment',
  '@ember/test-helpers',
  'ember-qunit',
], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function () {
  var prefix = 'dummy';
  try {
    var metaName = prefix + '/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    var config = JSON.parse(decodeURIComponent(rawConfig));

    var exports = { default: config };

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '".');
  }
});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
