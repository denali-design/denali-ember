'use strict';

define("dummy/tests/helpers/ember-power-select", ["exports", "@ember/debug", "ember-power-select/test-support/helpers"], function (_exports, _debug, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.clickTrigger = void 0;
  _exports.default = deprecatedRegisterHelpers;
  _exports.typeInSearch = _exports.triggerKeydown = _exports.touchTrigger = _exports.selectChoose = _exports.nativeTouch = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && (0, _debug.deprecate)(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, {
        until: '1.11.0',
        id: `ember-power-select-test-support-${name}`
      }));
      return fn(...arguments);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && (0, _debug.deprecate)("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("dummy/tests/helpers/setup-router", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /* eslint-disable ember/no-private-routing-service */
  function _default(hooks) {
    hooks.beforeEach(function () {
      const router = this.owner.lookup('router:main');
      router.startRouting(true);
    });
  }
});
define("dummy/tests/integration/components/denali-alert-inline-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-alert-inline', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders in block form', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlertInline>
            </DenaliAlertInline>
          
      */
      {
        "id": "iGU8aS0X",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.alert.is-inline').exists('Inline alert renders in block form correctly');
    });
    (0, _qunit.test)('it renders in non-block form', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlertInline/>
          
      */
      {
        "id": "TrJiSKXm",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.alert.is-inline').exists('Inline alert renders in non-block form correctly');
    });
    (0, _qunit.test)('it can yield a title sub component in block form', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlertInline as |Alert|>
              <Alert.Title>Test Title</Alert.Title>
            </DenaliAlertInline>
          
      */
      {
        "id": "7vyjIzzT",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Test Title\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert-inline\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline yields a title sub component');
    });
    (0, _qunit.test)('it can render a title in non-block form', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <DenaliAlertInline @title="Test Title"/>
          
      */
      {
        "id": "Yd+EvxkX",
        "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\"],[\"Test Title\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline renders a title');
    });
    (0, _qunit.test)('it can yield a context sub component in block form', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlertInline as |Alert|>
              <Alert.Title>Test Title:</Alert.Title>
              <Alert.Context>Alert Context Details</Alert.Context>
            </DenaliAlertInline>
          
      */
      {
        "id": "Ii1GuciO",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Test Title:\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Context\"]],null,null,[[\"default\"],[[[[1,\"Alert Context Details\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert-inline\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
      assert.dom('.alert p').hasText('Test Title: Alert Context Details', 'DenaliAlertInline renders both the title and context inside the p element');
    });
    (0, _qunit.test)('it can render a context block in non-block form', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlertInline @title="Test Title:" @context="Alert Context Details"/>
          
      */
      {
        "id": "W7ssMx8r",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@context\"],[\"Test Title:\",\"Alert Context Details\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
      assert.dom('.alert p').hasText('Test Title: Alert Context Details', 'DenaliAlertInline renders both the title and context inside the p element');
    });
    (0, _qunit.test)('it can render different alert styles', async function (assert) {
      assert.expect(5);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlertInline @title="Alert Title:" @context="Hello World!" @style={{this.style}}/>
          
      */
      {
        "id": "Vsewn/YA",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@context\",\"@style\"],[\"Alert Title:\",\"Hello World!\",[30,0,[\"style\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert.is-inline').hasNoClass('No class is added when style is not set');
      this.set('style', 'info');
      assert.dom('.alert.is-inline').hasClass('has-bg-status-info', 'DenaliAlertInline has info styles when `@style` arg is set to info');
      this.set('style', 'warning');
      assert.dom('.alert.is-inline').hasClass('has-bg-status-warning', 'DenaliAlertInline has warning styles when `@style` arg is set to warning');
      this.set('style', 'success');
      assert.dom('.alert.is-inline').hasClass('has-bg-status-success', 'DenaliAlertInline has success styles when `@style` arg is set to success');
      this.set('style', 'danger');
      assert.dom('.alert.is-inline').hasClass('has-bg-status-danger', 'DenaliAlertInline has danger styles when `@style` arg is set to danger');
    });
  });
});
define("dummy/tests/integration/components/denali-alert-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@ember/template"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _template) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders in block form', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert>
            </DenaliAlert>
          
      */
      {
        "id": "xXN4AfTv",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');
    });
    (0, _qunit.test)('it renders in non-block form', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert/>
          
      */
      {
        "id": "7Uua+AjI",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');
    });
    (0, _qunit.test)('it can yield a title sub component in block form', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert as |Alert|>
              <Alert.Title>Alert Title!!1</Alert.Title>
            </DenaliAlert>
          
      */
      {
        "id": "x/zyV6Cn",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Alert Title!!1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert yields a title sub component');
    });
    (0, _qunit.test)('it can render a title in non-block form', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <DenaliAlert @title="Alert Title!!1"/>
          
      */
      {
        "id": "3Z7MHQH6",
        "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\"],[\"Alert Title!!1\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert renders a title');
    });
    (0, _qunit.test)('it can yield a context sub component in block form', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert as |Alert|>
              <Alert.Title>Alert Title!!1</Alert.Title>
              <Alert.Context>Alert Context Details</Alert.Context>
            </DenaliAlert>
          
      */
      {
        "id": "AnftINnQ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Alert Title!!1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Context\"]],null,null,[[\"default\"],[[[[1,\"Alert Context Details\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');
    });
    (0, _qunit.test)('it can render a context block in non-block form', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert @title="Alert Title!!1" @context="Alert Context Details"/>
          
      */
      {
        "id": "N+850ug+",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@context\"],[\"Alert Title!!1\",\"Alert Context Details\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');
    });
    (0, _qunit.test)('it can render safestrings', async function (assert) {
      this.title = (0, _template.htmlSafe)('<span>title</span>');
      this.context = (0, _template.htmlSafe)('<a href="#">context</a>');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert @title={{this.title}} @context={{this.context}} />
          
      */
      {
        "id": "UXfxgeko",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@context\"],[[30,0,[\"title\"]],[30,0,[\"context\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert h5').hasText('title', 'DenaliAlert renders a title block');
      assert.dom('.alert h5 span').exists('DenaliAlert title renders the html');
      assert.dom('.alert p').hasText('context', 'DenaliAlert renders a context block');
      assert.dom('.alert p a').exists('DenaliAlert context renders the html');
    });
    (0, _qunit.test)('it supports block styles', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <DenaliAlert @title="Alert Title!!1" @isBlock={{this.isBlock}}/>
          
      */
      {
        "id": "HYM35jUW",
        "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@isBlock\"],[\"Alert Title!!1\",[30,0,[\"isBlock\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert').doesNotHaveClass('is-block', 'DenaliAlert does not have block styles by default');
      this.set('isBlock', true);
      assert.dom('.alert').hasClass('is-block', 'DenaliAlert has block styles when `@isBlock` arg is set to true');
    });
    (0, _qunit.test)('it can render different alert styles', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <DenaliAlert @title="Alert Title!!1" @style={{this.style}}/>
          
      */
      {
        "id": "trRFX9Vu",
        "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@style\"],[\"Alert Title!!1\",[30,0,[\"style\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('style', 'info');
      assert.dom('.alert').hasClass('is-info', 'DenaliAlert has info styles when `@style` arg is set to info');
      this.set('style', 'warning');
      assert.dom('.alert').hasClass('is-warning', 'DenaliAlert has warning styles when `@style` arg is set to warning');
      this.set('style', 'success');
      assert.dom('.alert').hasClass('is-success', 'DenaliAlert has success styles when `@style` arg is set to success');
      this.set('style', 'danger');
      assert.dom('.alert').hasClass('is-danger', 'DenaliAlert has danger styles when `@style` arg is set to danger');
    });
    (0, _qunit.test)('it icons when provided with `icon` arg', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert
              @title="Alert Title!!1"
              @icon={{this.icon}}
            />
          
      */
      {
        "id": "Qp2fuCJL",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@icon\"],[\"Alert Title!!1\",[30,0,[\"icon\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert .d-icon').doesNotHaveClass('d-check-circle', 'DenaliAlert does not render an icon by default');
      this.set('icon', 'check-circle');
      assert.dom('.alert .d-icon').hasClass('d-check-circle', 'DenaliAlert renders the specified `@icon` arg');
    });
    (0, _qunit.test)('it renders solid icons when `@isBlock` arg is true', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert
              @title="Alert Title!!1"
              @style={{this.style}}
              @isBlock={{true}}
              @icon="check-circle"
            />
          
      */
      {
        "id": "fCKIEcvp",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@style\",\"@isBlock\",\"@icon\"],[\"Alert Title!!1\",[30,0,[\"style\"]],true,\"check-circle\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert .d-icon').hasClass('d-check-circle-solid', 'DenaliAlert renders the solid notification icon by default when `@isBlock` is set to true');
    });
    (0, _qunit.test)('it can render a close button', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <DenaliAlert @title="Alert Title!!1" @onClose={{this.onClose}}/>
          
      */
      {
        "id": "q4G+LNCs",
        "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@onClose\"],[\"Alert Title!!1\",[30,0,[\"onClose\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.alert span.close').doesNotExist('DenaliAlert does not render a close button by default');
      this.set('onClose', e => {
        assert.equal(e.type, 'click', 'DenaliAlert will call `@onClose` action when close button is clicked');
      });
      assert.dom('.alert span.close').exists('DenaliAlert renders a close button when `@onClose` arg is provided');
      await (0, _testHelpers.click)('.close');
    });
  });
});
define("dummy/tests/integration/components/denali-alert/context-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-alert/context', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert::Context class="my-context">
              Inner Content
            </DenaliAlert::Context>
          
      */
      {
        "id": "Zsrl7xmj",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"my-context\"]],null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert/context\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('p.my-context').hasText('Inner Content', 'DenaliAlert::Context exists and renders inner content');
    });
  });
});
define("dummy/tests/integration/components/denali-alert/title-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-alert/title', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliAlert::Title class="my-title">
              Inner Content
            </DenaliAlert::Title>
          
      */
      {
        "id": "UmFrGa3u",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"my-title\"]],null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert/title\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('h5.my-title').hasText('Inner Content', 'DenaliAlert::Title exists and renders inner content');
    });
  });
});
define("dummy/tests/integration/components/denali-box-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliBox>
              Inner Content
            </DenaliBox>
          
      */
      {
        "id": "P9hBuvc+",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.box').hasText('Inner Content', 'DenaliBox exists and renders inner content');
    });
    (0, _qunit.test)('it can yield a header component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliBox as |Box|>
              <Box.Header>Header</Box.Header>
            </DenaliBox>
          
      */
      {
        "id": "kZ5Fx8Uk",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Header\"]],null,null,[[\"default\"],[[[[1,\"Header\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Box\"],false,[\"denali-box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.box h3').hasText('Header', 'DenaliBox can yield a header component');
    });
    (0, _qunit.test)('it can yield a sub header component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliBox as |Box|>
              <Box.SubHeader>Sub Header</Box.SubHeader>
            </DenaliBox>
          
      */
      {
        "id": "qfWw+8Mb",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"SubHeader\"]],null,null,[[\"default\"],[[[[1,\"Sub Header\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Box\"],false,[\"denali-box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.box h5').hasText('Sub Header', 'DenaliBox can yield a sub header component');
    });
    (0, _qunit.test)('it can yield a footer component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliBox as |Box|>
              <Box.Footer>Footer</Box.Footer>
            </DenaliBox>
          
      */
      {
        "id": "HPzV2ygM",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Footer\"]],null,null,[[\"default\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Box\"],false,[\"denali-box\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.box footer').hasText('Footer', 'DenaliBox can yield a footer component');
    });
  });
});
define("dummy/tests/integration/components/denali-breadcrumb-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-breadcrumb', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(3);
      this.set('items', [1, 2, 3, 4]);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliBreadcrumb
              @items={{this.items}}
              as | item |
            >
              <span class="link">{{item}}</span>
            </DenaliBreadcrumb>
          
      */
      {
        "id": "oLB4T8q6",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@items\"],[[30,0,[\"items\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[10,1],[14,0,\"link\"],[12],[1,[30,1]],[13],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"item\"],false,[\"denali-breadcrumb\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('ul.breadcrumb').exists('A ul with class breadcrumb is rendered');
      assert.dom('.breadcrumb li').exists({
        count: this.items.length
      }, 'The number of li rendered equal the number of items passed through');
      assert.dom('.breadcrumb .link').exists({
        count: this.items.length
      }, 'Each item is wrapped in a span as specified');
    });
  });
});
define("dummy/tests/integration/components/denali-button-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "L8cfc1JR",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('button.button').hasText('Inner Content', 'DenaliButton exists and renders inner content');
    });
    (0, _qunit.test)('it can be disabled', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton disabled={{this.isDisabled}}>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "e8oWlN+z",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[16,\"disabled\",[30,0,[\"isDisabled\"]]]],null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').isNotDisabled('DenaliButton is not disabled by default');
      this.set('isDisabled', true);
      assert.dom('.button').isDisabled('DenaliButton can be disabled by setting the `disabled` attribute to true');
    });
    (0, _qunit.test)('it supports types', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton @type={{this.type}}>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "T0if+q21",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@type\"],[[30,0,[\"type\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').hasAttribute('type', 'button', 'DenaliButton has a type of `button` by default');
      this.set('type', 'submit');
      assert.dom('.button').hasAttribute('type', 'submit', 'DenaliButton has a submit type when `type` arg is set to submit');
    });
    (0, _qunit.test)('it an be set active ', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton @isActive={{this.isActive}}>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "hvAwi6hk",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isActive\"],[[30,0,[\"isActive\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').doesNotHaveClass('is-active', 'DenaliButton is not active by default');
      this.set('isActive', true);
      assert.dom('.button').hasClass('is-active', 'DenaliButton can be set active by setting the `@isActive` arg to true');
    });
    (0, _qunit.test)('it supports styles', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton @style={{this.style}}>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "EbM+AmB8",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@style\"],[[30,0,[\"style\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style by default');
      this.set('style', 'solid');
      assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style when `@style` arg is set to solid');
      this.set('style', 'outline');
      assert.dom('.button').hasClass('is-outline', 'DenaliButton has a outline style when `@style` arg is set to outline');
      this.set('style', 'ghost');
      assert.dom('.button').hasClass('is-ghost', 'DenaliButton has a ghost style when `@style` arg is set to ghost');
      this.set('style', 'text');
      assert.dom('.button').hasClass('is-text', 'DenaliButton has a text style when `@style` arg is set to text');
      this.set('style', 'danger');
      assert.dom('.button').hasClass('is-danger', 'DenaliButton has a danger style when `@style` arg is set to danger');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton @isInverse={{this.isInverse}}>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "YQiLdA3w",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').doesNotHaveClass('is-inverse', 'DenaliButton does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert.dom('.button').hasClass('is-inverse', 'DenaliButton has inverse styling when `@isInverse` arg is set to true');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton @size={{this.size}}>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "MfTTp6C/",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').exists('DenaliButton can render without a size set');
      this.set('size', 'small');
      assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
      this.set('size', 'medium');
      assert.dom('.button').hasClass('is-medium', 'DenaliButton has a medium size when `@size` arg is set to medium');
      this.set('size', 'large');
      assert.dom('.button').hasClass('is-large', 'DenaliButton has a large size when `@size` arg is set to large');
    });
    (0, _qunit.test)('it supports isFull', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton @size={{this.size}} @isFull={{this.isFull}}>
              Inner Content
            </DenaliButton>
          
      */
      {
        "id": "IbP8rvhI",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\",\"@isFull\"],[[30,0,[\"size\"]],[30,0,[\"isFull\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').exists('DenaliButton can render without a size set');
      assert.dom('.button').doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is undefined');
      this.set('isFull', true);
      assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true');
      this.set('size', 'small');
      assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
      assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true and size is set to small');
      this.set('isFull', false);
      assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
      assert.dom('.button').doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is set to false');
    });
    (0, _qunit.test)('it supports icons', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton @style="solid" @icon={{this.icon}} @iconOnly={{this.iconOnly}}>
              Share
            </DenaliButton>
          
      */
      {
        "id": "4Bae1BB7",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@style\",\"@icon\",\"@iconOnly\"],[\"solid\",[30,0,[\"icon\"]],[30,0,[\"iconOnly\"]]]],[[\"default\"],[[[[1,\"\\n        Share\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button .d-icon').doesNotExist('No icon is rendered when none is specified');
      assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class by default');
      this.set('icon', 'share');
      assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
      assert.dom('.button .d-icon').hasClass('d-share', 'DenaliButton renders the specified icon');
      assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class');
      this.set('iconOnly', true);
      assert.dom('.button').hasClass('has-icon', 'DenaliButton has a `has-icon` class when iconOnly arg is set to true');
    });
    (0, _qunit.test)('it supports loading', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliButton 
              @isLoading={{this.isLoading}} 
              @icon="save"
            >
              Save
            </DenaliButton>
          
      */
      {
        "id": "U2UoUGYo",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isLoading\",\"@icon\"],[[30,0,[\"isLoading\"]],\"save\"]],[[\"default\"],[[[[1,\"\\n        Save\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.button').doesNotHaveClass('has-loader', 'DenaliButton does not have a `has-loader` class by default');
      assert.dom('.button').hasText('Save', 'DenaliButton renders inner text by default');
      assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
      assert.dom('.button div.loader').doesNotExist('DenaliButton does render a loader by default');
      this.set('isLoading', true);
      assert.dom('.button').hasClass('has-loader', 'DenaliButton has `has-loader` class when `@isLoading` arg is true');
      assert.dom('.button').hasNoText('DenaliButton does not render inner text when `@isLoading` arg is true');
      assert.dom('.button .d-icon').doesNotExist('DenaliButton does not render an icon when `@isLoading` arg is true');
      assert.dom('.button div.loader').exists('DenaliButton renders a loader when `@isLoading` arg is true');
      assert.dom('.button div.loader--button').exists('DenaliButton renders a loader--button when `@isLoading` arg is true');
    });
  });
});
define("dummy/tests/integration/components/denali-checkbox-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(7);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "avWehxcq",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[16,\"checked\",[30,0,[\"checked\"]]],[16,\"disabled\",[30,0,[\"disabled\"]]],[16,\"data-partial\",[30,0,[\"partialData\"]]]],null,[[\"default\"],[[[[1,\"\\n        Test\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-checkbox\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.denali-checkbox').hasText('Test', 'A denali checkbox is rendered with the specified text');
      assert.dom('.denali-checkbox input').isNotDisabled('The checkbox is not disabled by default');
      assert.dom('.denali-checkbox input').isNotChecked('The checkbox is not checked by default');
      assert.dom('.denali-checkbox input').doesNotHaveAttribute('data-partial', 'The checkbox does not have the data-partial attribute set by default');
      this.set('partialData', true);
      assert.dom('.denali-checkbox input').hasAttribute('data-partial', '', 'The checkbox has the data-partial attribute when set to true');
      this.set('checked', true);
      assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when the checked attribute is set to true');
      this.set('disabled', true);
      assert.dom('.denali-checkbox input').isDisabled('The checkbox is disabled when the disabled attribute is set to true');
    });
    (0, _qunit.test)('action', async function (assert) {
      assert.expect(4);
      this.set('clickHandler', () => {
        assert.ok('The click handler is called when checkbox is clicked');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliCheckbox
              {{on 'click' (action this.clickHandler)}}
            >
              Test
            </DenaliCheckbox>
          
      */
      {
        "id": "jFrkQny/",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[4,[38,1],[\"click\",[28,[37,2],[[30,0],[30,0,[\"clickHandler\"]]],null]],null]],null,[[\"default\"],[[[[1,\"\\n        Test\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-checkbox\",\"on\",\"action\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.denali-checkbox input');
      assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when clicked on');
      await (0, _testHelpers.click)('.denali-checkbox label');
      assert.dom('.denali-checkbox input').isNotChecked('The checkbox is unchecked when clicked again');
    });
  });
});
define("dummy/tests/integration/components/denali-chip-group-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-chip-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliChipGroup as | Group |>
              <Group.Chip>Grouped</Group.Chip> <Group.Chip>Chips</Group.Chip>
            </DenaliChipGroup>
          
      */
      {
        "id": "PMMywOoS",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Chip\"]],null,null,[[\"default\"],[[[[1,\"Grouped\"]],[]]]]],[1,\" \"],[8,[30,1,[\"Chip\"]],null,null,[[\"default\"],[[[[1,\"Chips\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Group\"],false,[\"denali-chip-group\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.chip-group span.chips').exists({
        count: 2
      }, 'Chips are rendered inside group');
      assert.dom('span.chip-group').hasText('Grouped Chips', 'Group has correct text');
    });
  });
});
define("dummy/tests/integration/components/denali-chip-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-chip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliChip>
              Chip Text
            </DenaliChip>
          
      */
      {
        "id": "JYq0fiAz",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Chip Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-chip\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.chips').exists({
        count: 1
      }, 'A chip is rendered');
      assert.dom('span.chips').hasText('Chip Text', 'Chip has yielded text');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliChip @size={{this.size}}>
              Inner Content
            </DenaliChip>
          
      */
      {
        "id": "C4OfM6IL",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-chip\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.chips').exists({
        count: 1
      }, 'DenaliChip can render without a size set');
      assert.dom('.chips').lacksClass(/is-[^\s]*/, 'Ensure that when no size class is not rendered');
      this.set('size', 'small');
      assert.dom('.chips').hasClass('is-small', 'DenaliChip has a small size when `@size` arg is set to small');
    });
    (0, _qunit.test)('it supports color', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliChip @textColor={{this.textColor}} @textShade={{this.textShade}} @backgroundColor={{this.backgroundColor}} @backgroundShade={{this.backgroundShade}}>
              Inner Content
            </DenaliChip>
          
      */
      {
        "id": "3uzLL2s1",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@textColor\",\"@textShade\",\"@backgroundColor\",\"@backgroundShade\"],[[30,0,[\"textColor\"]],[30,0,[\"textShade\"]],[30,0,[\"backgroundColor\"]],[30,0,[\"backgroundShade\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-chip\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.chips').exists({
        count: 1
      }, 'DenaliChip can render without set colors');
      assert.dom('.chips').lacksClass(/is-[^\s]*-[^\s]*/, 'Ensure that when no textColor class is not rendered');
      assert.dom('.chips').lacksClass(/has-bg-[^\s]*-[^\s]*/, 'Ensure that when no backgroundColor class is not rendered');
      this.set('textShade', '300');
      assert.dom('.chips').lacksClass(/is-[^\s]*-300/, 'Ensure that when no textColor class is not rendered with shade');
      this.set('backgroundShade', '300');
      assert.dom('.chips').lacksClass(/has-bg-[^\s]*-300/, 'Ensure that when no backgroundColor class is not rendered with shade');
      this.set('textShade', undefined);
      this.set('backgroundShade', undefined);
      this.set('textColor', 'green');
      assert.dom('.chips').hasClass('is-green-500', 'with text color class is attached and shade is default 500');
      this.set('backgroundColor', 'orange');
      assert.dom('.chips').hasClass('has-bg-orange-500', 'with bg color class is attached and shade is default 500');
      this.set('textShade', '200');
      assert.dom('.chips').hasClass('is-green-200', 'with text shade class is attached and shade is updated');
      this.set('backgroundShade', '100');
      assert.dom('.chips').hasClass('has-bg-orange-100', 'with bg shade class is attached and shade is updated');
    });
  });
});
define("dummy/tests/integration/components/denali-icon-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('icon', 'code');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliIcon
              @icon={{this.icon}}
            />
          
      */
      {
        "id": "VCMAhw/J",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\"],[[30,0,[\"icon\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-icon\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('i.d-icon.d-code').exists('DenaliIcon exists and has the correct icon class');
      this.set('icon', 'bug');
      assert.dom('i.d-icon.d-bug').exists('DenaliIcon exists and has the correct icon class');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliIcon
              @icon="code"
              @size={{this.size}}
            >
              Link Text
            </DenaliIcon>
          
      */
      {
        "id": "P2zX9Go/",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@size\"],[\"code\",[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-icon\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('size', 'extrasmall');
      assert.dom('.d-icon').hasClass('is-extrasmall', 'DenaliIcon has a small size when `@size` arg is set to extrasmall');
      this.set('size', 'small');
      assert.dom('.d-icon').hasClass('is-small', 'DenaliIcon has a small size when `@size` arg is set to small');
      this.set('size', 'medium');
      assert.dom('.d-icon').hasClass('is-medium', 'DenaliIcon has a medium size when `@size` arg is set to medium');
      this.set('size', 'large');
      assert.dom('.d-icon').hasClass('is-large', 'DenaliIcon has a large size when `@size` arg is set to large');
    });
  });
});
define("dummy/tests/integration/components/denali-input-group-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-input-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInputGroup />
      */
      {
        "id": "OoasQhuk",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-input-group\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.input-group').exists('An input group is rendered');
    });
    (0, _qunit.test)('it renders a label', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInputGroup @label={{this.label}}/>
      */
      {
        "id": "GMSIX71K",
        "block": "[[[8,[39,0],null,[[\"@label\"],[[30,0,[\"label\"]]]],null]],[],false,[\"denali-input-group\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('label', 'My Label');
      assert.dom('div.input-group label').hasTextContaining('My Label', 'An input group is rendered with a label');
    });
    (0, _qunit.test)('it yields', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliInputGroup @label="My Label">
              <DenaliInput type="text" placeholder="Text Field" />
            </DenaliInputGroup>
          
      */
      {
        "id": "5V+py056",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\"],[\"My Label\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],null,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.input-group div.input input').exists('`DenaliInputGroup` yields inner content');
    });
    (0, _qunit.test)('it renders stacked', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliInputGroup @label="My Label" @isStacked={{true}}>
              <DenaliCheckbox>
                Test
              </DenaliCheckbox>
            </DenaliInputGroup>
          
      */
      {
        "id": "Lb8A0U4o",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\",\"@isStacked\"],[\"My Label\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n          Test\\n        \"]],[]]]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-checkbox\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.is-stacked').exists('An input group is rendered stacked');
    });
    (0, _qunit.test)('it renders responsively', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliInputGroup @label="My Label" @isResponsive={{true}}>
              <DenaliInput type="text" placeholder="Text Field" />
            </DenaliInputGroup>
          
      */
      {
        "id": "p15Mt0vn",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\",\"@isResponsive\"],[\"My Label\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],null,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.responsive').exists('An input group is rendered responsively');
    });
    (0, _qunit.test)('it adjusts the label width automatically', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliInputGroup @label="My Label" @hasAutoWidth={{true}}>
              <DenaliInput type="text" placeholder="Text Field" />
            </DenaliInputGroup>
          
      */
      {
        "id": "BSK0U056",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\",\"@hasAutoWidth\"],[\"My Label\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],null,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.auto').exists('An input group is rendered with label width adjusted automatically');
    });
  });
});
define("dummy/tests/integration/components/denali-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput value="My Input" />
      */
      {
        "id": "veACe/TR",
        "block": "[[[8,[39,0],[[24,2,\"My Input\"]],null,null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input input').exists('An input is rendered within a wrapper div with class `.input`');
      assert.dom('.input input').isNotDisabled('The input is not disabled by default');
      assert.dom('.input input').hasValue('My Input', 'The input has the specified value');
    });
    (0, _qunit.test)('input types', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput type={{this.type}}/>
      */
      {
        "id": "yj6Rtikp",
        "block": "[[[8,[39,0],[[16,4,[30,0,[\"type\"]]]],null,null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
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
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput @size={{this.size}} />
      */
      {
        "id": "I+jvJpDX",
        "block": "[[[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('size', 'small');
      assert.dom('.input').hasClass('is-small', 'The input wrapper has the appropriate class for small');
      this.set('size', 'medium');
      assert.dom('.input').hasClass('is-medium', 'The input wrapper has the appropriate class for medium');
    });
    (0, _qunit.test)('states', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput @state={{this.state}} />
      */
      {
        "id": "zBkcpNiW",
        "block": "[[[8,[39,0],null,[[\"@state\"],[[30,0,[\"state\"]]]],null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('state', 'active');
      assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');
      this.set('state', 'error');
      assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class for error');
    });
    (0, _qunit.test)('disabled', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput disabled={{true}}/>
      */
      {
        "id": "5AoTu44Y",
        "block": "[[[8,[39,0],[[16,\"disabled\",true]],null,null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input input').isDisabled('The input is disabled when specified');
    });
    (0, _qunit.test)('placeholder', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput type="email" placeholder="Email field"/>
      */
      {
        "id": "N9QjI+8l",
        "block": "[[[8,[39,0],[[24,\"placeholder\",\"Email field\"],[24,4,\"email\"]],null,null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input input').hasAttribute('placeholder', 'Email field', 'The input is has the specified placeholder');
    });
    (0, _qunit.test)('is inverse', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput @isInverse={{this.isInverse}} />
      */
      {
        "id": "bSg7/bgy",
        "block": "[[[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input').doesNotHaveClass('is-inverse', 'The input wrapper by default does not have the inverse class');
      this.set('isInverse', 'true');
      assert.dom('.input').hasClass('is-inverse', 'The input wrapper has the inverse class when specified');
    });
    (0, _qunit.test)('error message', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput @state="error" @errorMsg={{this.errorMsg}} />
      */
      {
        "id": "8CauGpzG",
        "block": "[[[8,[39,0],null,[[\"@state\",\"@errorMsg\"],[\"error\",[30,0,[\"errorMsg\"]]]],null]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input.is-error .message').doesNotExist();
      this.set('errorMsg', 'Email Invalid');
      assert.dom('.input.is-error .message').hasText('Email Invalid', 'The specified error message is rendered');
    });
    (0, _qunit.test)('icons', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliInput
              @iconFront={{this.iconFront}}
              @iconFrontClass="front-icon"
              @iconBack={{this.iconBack}}
              @iconBackClass="back-icon"
            />
          
      */
      {
        "id": "JQN+3yhA",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[[30,0,[\"iconFront\"]],\"front-icon\",[30,0,[\"iconBack\"]],\"back-icon\"]],null],[1,\"\\n    \"]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input.has-icon-front').doesNotExist('The icon-front class is not applied to the input when no front icon is specified');
      assert.dom('.input.has-icon-back').doesNotExist('The icon-back class is not applied to the input when no back icon is specified');
      this.set('iconFront', 'share');
      assert.dom('.input.has-icon-front').exists('The icon-front class is applied to the input when front icon is specified');
      assert.dom('.input.has-icon-front .front-icon').hasClass('d-share', 'The correct denali icon is rendered as the front icon');
      this.set('iconBack', 'close-circle-solid');
      assert.dom('.input.has-icon-back').exists('The icon-back class is applied to the input when back icon is specified');
      assert.dom('.input.has-icon-back .back-icon').hasClass('d-close-circle-solid', 'The correct denali icon is rendered as the back icon');
    });
    (0, _qunit.test)('wrapperClass', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliInput
              @wrapperClass={{this.wrapperClass}}
            />
          
      */
      {
        "id": "TF0foEOZ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@wrapperClass\"],[[30,0,[\"wrapperClass\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-input\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      const wrapperClass = 'wrapperClass';
      assert.dom('.input').doesNotHaveClass(wrapperClass, '`DenaliInput` does not have custom wrapper class by default');
      this.set('wrapperClass', wrapperClass);
      assert.dom('.input').hasClass(wrapperClass, '`DenaliInput` has custom specified wrapper class');
    });
    (0, _qunit.test)('actions', async function (assert) {
      assert.expect(2);
      this.set('handleInput', event => {
        assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliInput
            {{on 'input' (action this.handleInput)}}
          />
      */
      {
        "id": "Mfw/GyU2",
        "block": "[[[8,[39,0],[[4,[38,1],[\"input\",[28,[37,2],[[30,0],[30,0,[\"handleInput\"]]],null]],null]],null,null]],[],false,[\"denali-input\",\"on\",\"action\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      await (0, _testHelpers.fillIn)('.input input', 'Random Text');
      this.set('handleInput', event => {
        assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
      });
      this.element.querySelector('.input input').value = 'More Random Text';
      this.element.querySelector('.input input').dispatchEvent(new Event('input'));
    });
  });
});
define("dummy/tests/integration/components/denali-link-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "equzRIM9",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,6,\"https://denali.design/\"],[24,\"target\",\"_blank\"]],[[\"@size\"],[[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').hasText('Link Text', 'DenaliLink renders an anchor element');
      assert.dom('a.denali-link').hasAttribute('href', 'https://denali.design/', 'DenaliLink has the specified href');
      assert.dom('a.denali-link').hasAttribute('target', '_blank', 'DenaliLink has the specified target');
      assert.dom('a.denali-link').doesNotHaveClass('is-small', 'DenaliLink does not have the is-small class by default');
      this.set('size', 'small');
      assert.dom('a.denali-link').hasClass('is-small', 'DenaliLink has the is-small class when the size is set to small');
    });
    (0, _qunit.test)('secondary and sub links', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLink
              @isSub={{this.sub}}
              @isSecondary={{this.secondary}}
            >
              Link Text
            </DenaliLink>
      */
      {
        "id": "EdZFp13o",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isSub\",\"@isSecondary\"],[[30,0,[\"sub\"]],[30,0,[\"secondary\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]]],[],false,[\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLink by default is not a sub link');
      assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLink by default is not a secondary link');
      this.set('sub', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink is a sub link when isSub arg is set to true');
      this.set('secondary', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink retains the is-sub class');
      assert.dom('a.denali-link').hasClass('is-secondary', 'DenaliLink is a secondary link when secondary arg is set to true');
    });
    (0, _qunit.test)('states', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLink
              @state={{this.state}}
            >
              Link Text
            </DenaliLink>
          
      */
      {
        "id": "rNkfNNzJ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@state\"],[[30,0,[\"state\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLink by default is not active');
      assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLink by default is not disabled');
      this.set('state', 'active');
      assert.dom('a.denali-link').hasClass('is-active', 'DenaliLink is active when state is set to active');
      this.set('state', 'disabled');
      assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLink is disabled when state is set to disabled');
    });
    (0, _qunit.test)('icons', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "t5guv4HN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[[30,0,[\"iconFront\"]],[30,0,[\"iconFrontClass\"]],[30,0,[\"iconBack\"]],[30,0,[\"iconBackClass\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('has-icon-front', 'DenaliLink does not have the `has-icon-front` class by default');
      assert.dom('a.denali-link').doesNotHaveClass('has-icon-back', 'DenaliLink does not have the `has-icon-back` class by default');
      this.set('iconFront', 'add-circle');
      this.set('iconFrontClass', 'link-icon-front');
      assert.dom('a.denali-link').hasClass('has-icon-front', 'DenaliLink has the `has-icon-front` class when iconFront is specified');
      assert.dom('a.denali-link .d-icon.link-icon-front').hasClass('d-add-circle', 'DenaliLink has the specified icon in the front');
      this.set('iconBack', 'external');
      this.set('iconBackClass', 'link-icon-back');
      assert.dom('a.denali-link').hasClass('has-icon-back', 'DenaliLink has the `has-icon-back` class when iconBack is specified');
      assert.dom('a.denali-link .d-icon.link-icon-back').hasClass('d-external', 'DenaliLink has the specified icon in the back');
    });
  });
});
define("dummy/tests/integration/components/denali-link-to-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-link-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLinkTo @route="index" @query={{hash user="jkusa"}}>
              Link Text
            </DenaliLinkTo>
          
      */
      {
        "id": "KkAYKDDN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@query\"],[\"index\",[28,[37,1],null,[[\"user\"],[\"jkusa\"]]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\",\"hash\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.ember-view').hasText('Link Text', 'DenaliLinkTo exists and renders inner content');
      assert.dom('a.denali-link').hasAttribute('href', '/?user=jkusa', 'DenaliLinkTo renders an href based on a route & query');
    });
    (0, _qunit.test)('it is set as active when on current route', async function (assert) {
      this.set('route', 'four-oh-four');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLinkTo @route={{this.route}}>
              Link Text
            </DenaliLinkTo>
          
      */
      {
        "id": "ex/ejVbx",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[[30,0,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLinkTo is not active when not on the current route');
      this.set('route', 'index');
      assert.dom('a.denali-link').hasClass('is-active', 'DenaliLinkTo is active when on the current route');
    });
    (0, _qunit.test)('size', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @size={{this.size}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
      {
        "id": "l0DRmbZv",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@size\"],[\"four-oh-four\",[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('is-small', 'DenaliLinkTo does not have the is-small class by default');
      this.set('size', 'small');
      assert.dom('a.denali-link').hasClass('is-small', 'DenaliLinkTo has the is-small class when the size is set to small');
    });
    (0, _qunit.test)('secondary and sub links', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "YTxucL7C",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@isSub\",\"@isSecondary\"],[\"four-oh-four\",[30,0,[\"sub\"]],[30,0,[\"secondary\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLinkTo by default is not a sub link');
      assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLinkTo by default is not a secondary link');
      this.set('sub', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo is a sub link when isSub arg is set to true');
      this.set('secondary', true);
      assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo retains the is-sub class');
      assert.dom('a.denali-link').hasClass('is-secondary', 'DenaliLinkTo is a secondary link when secondary arg is set to true');
    });
    (0, _qunit.test)('state', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @state={{this.state}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
      {
        "id": "RMxvYI6M",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@state\"],[\"four-oh-four\",[30,0,[\"state\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
      this.set('state', 'disabled');
      assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when state is set to disabled');
    });
    (0, _qunit.test)('disabled', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLinkTo
              @route="four-oh-four"
              @disabled={{this.disabled}}
            >
              Link Text
            </DenaliLinkTo>
          
      */
      {
        "id": "ruXY1jBl",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@disabled\"],[\"four-oh-four\",[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
      this.set('disabled', true);
      assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when disabled is set to true');
    });
    (0, _qunit.test)('icons', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "gLfktXFk",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[\"four-oh-four\",[30,0,[\"iconFront\"]],[30,0,[\"iconFrontClass\"]],[30,0,[\"iconBack\"]],[30,0,[\"iconBackClass\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('a.denali-link').doesNotHaveClass('has-icon-front', 'DenaliLinkTo does not have the `has-icon-front` class by default');
      assert.dom('a.denali-link').doesNotHaveClass('has-icon-back', 'DenaliLinkTo does not have the `has-icon-back` class by default');
      this.set('iconFront', 'add-circle');
      this.set('iconFrontClass', 'link-icon-front');
      assert.dom('a.denali-link').hasClass('has-icon-front', 'DenaliLinkTo has the `has-icon-front` class when iconFront is specified');
      assert.dom('a .d-icon.link-icon-front').hasClass('d-add-circle', 'DenaliLinkTo has the specified icon in the front');
      this.set('iconBack', 'external');
      this.set('iconBackClass', 'link-icon-back');
      assert.dom('a.denali-link').hasClass('has-icon-back', 'DenaliLinkTo has the `has-icon-back` class when iconBack is specified');
      assert.dom('a .d-icon.link-icon-back').hasClass('d-external', 'DenaliLinkTo has the specified icon in the back');
    });
  });
});
define("dummy/tests/integration/components/denali-loader-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-loader', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliLoader />
      */
      {
        "id": "OqJgs8fX",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-loader\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.loader').exists('DenaliLoader can render.');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLoader @size={{this.size}} />
          
      */
      {
        "id": "mCowQjcr",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-loader\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('size', 'extrasmall');
      assert.dom('.loader').hasClass('is-extrasmall', 'DenaliLoader has an extrasmall size when `@size` arg is set to extrasmall');
      this.set('size', 'small');
      assert.dom('.loader').hasClass('is-small', 'DenaliLoader has a small size when `@size` arg is set to small');
      this.set('size', 'medium');
      assert.dom('.loader').hasClass('is-medium', 'DenaliLoader has a medium size when `@size` arg is set to medium');
      this.set('size', 'large');
      assert.dom('.loader').hasClass('is-large', 'DenaliLoader has a large size when `@size` arg is set to large');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliLoader @isInverse={{this.isInverse}} />
          
      */
      {
        "id": "E56FNYW1",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-loader\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.loader').doesNotHaveClass('is-inverse', 'DenaliLoader does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert.dom('.loader').hasClass('is-inverse', 'DenaliLoader has inverse styling when `@isInverse` arg is set to true');
    });
  });
});
define("dummy/tests/integration/components/denali-menu-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliMenu
              @class="class-arg"
              @triggerClass="trigger-class-arg"
              @contentClass="content-class-arg"
              class="test-menu"
              as |Menu|
            >
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
        "id": "Vudl0vlx",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-menu\"]],[[\"@class\",\"@triggerClass\",\"@contentClass\"],[\"class-arg\",\"trigger-class-arg\",\"content-class-arg\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Hover\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[10,\"ul\"],[12],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"One\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Two\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Three\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Menu\"],false,[\"denali-menu\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-menu').exists('The test menu is rendered');
      assert.dom('.test-menu').hasClass('class-arg', 'The menu class is present');
      assert.dom('.test-menu .menu-trigger').hasClass('trigger-class-arg', 'The menu trigger class is present');
      assert.dom('.test-menu .menu-trigger').hasText('Hover', 'The trigger has the appropriate text');
      assert.dom('.test-menu .menu-content').doesNotExist('menu content is not rendered when menu is not active');
      await (0, _testHelpers.triggerEvent)('.test-menu', 'mouseenter');
      assert.dom('.test-menu .menu-content').hasClass('content-class-arg', 'The menu content class is present');
      assert.dom('.test-menu .menu-content li').exists({
        count: 3
      }, 'Three li elements are rendered in the menu content');
      assert.dom('.test-menu .menu-content').hasStyle({
        visibility: 'visible'
      }, 'The menu content is visible when menu is active');
      await (0, _testHelpers.triggerEvent)('.test-menu', 'mouseleave');
      assert.dom('.test-menu .menu-content').doesNotExist('menu content is not rendered when menu is not active');
    });
    (0, _qunit.test)('alignment', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "uV+LXWQQ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-menu\"]],[[\"@alignContent\"],[[30,0,[\"alignContent\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Hover\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[10,\"ul\"],[12],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"One\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Two\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Three\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Menu\"],false,[\"denali-menu\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-menu').doesNotHaveClass('is-left', 'The menu does not have the `is-left` class by default');
      assert.dom('.test-menu').doesNotHaveClass('is-right', 'The menu does not have the `is-right` class by default');
      this.set('alignContent', 'left');
      assert.dom('.test-menu').hasClass('is-left', 'The menu has the `is-left` class when alignContent is set to left');
      this.set('alignContent', 'right');
      assert.dom('.test-menu').hasClass('is-right', 'The menu has the `is-right` class when alignContent is set to right');
    });
  });
});
define("dummy/tests/integration/components/denali-menu/content-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-menu/content', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliMenu::Content @class="class-arg">
              Inner Content
            </DenaliMenu::Content>
          
      */
      {
        "id": "iPmx0Hs1",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@class\"],[\"class-arg\"]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-menu/content\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.menu-content').hasClass('class-arg', 'The content class is present');
      assert.dom('div.menu-content').hasText('Inner Content', 'Menu content div is rendered');
    });
  });
});
define("dummy/tests/integration/components/denali-menu/trigger-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-menu/trigger', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliMenu::Trigger @class="class-arg">
              Trigger
            </DenaliMenu::Trigger>
          
      */
      {
        "id": "x6PVieF4",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@class\"],[\"class-arg\"]],[[\"default\"],[[[[1,\"\\n        Trigger\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-menu/trigger\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.menu-trigger').hasClass('class-arg', 'The trigger class is present');
      assert.dom('div.menu-trigger').hasText('Trigger', 'The trigger renders the text within an anchor tag');
    });
  });
});
define("dummy/tests/integration/components/denali-modal-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(6);
      this.set('isOpen', false);
      this.set('onClose', () => this.set('isOpen', false));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliModal
              class="denali-modal"
              @isOpen={{this.isOpen}}
              @onClose={{this.onClose}}
              as | Modal |
            >
              <Modal.Content class="denali-modal__content">Content</Modal.Content>
            </DenaliModal>
          
      */
      {
        "id": "FWzrkLJY",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"denali-modal\"]],[[\"@isOpen\",\"@onClose\"],[[30,0,[\"isOpen\"]],[30,0,[\"onClose\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Content\"]],[[24,0,\"denali-modal__content\"]],null,[[\"default\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Modal\"],false,[\"denali-modal\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.denali-modal.modal').doesNotExist('Denali Modal is hidden by default');
      assert.dom('.denali-modal .modal').doesNotExist('Denali Modal is not rendered by default');
      this.set('isOpen', true);
      assert.dom('.denali-modal.modal').exists('Denali Modal is rendered only when isActive is set to true');
      assert.dom('.modal-content.denali-modal__content').hasText('Content', 'Denali Modal Content is rendered in the modal');
      assert.dom('.denali-modal.modal .close').exists('Denali Modal renders a close icon in the modal');
      await (0, _testHelpers.click)('.denali-modal.modal .close');
      assert.dom('.denali-modal.modal').doesNotExist('The Denali Modal is hidden when close is clicked');
    });
    (0, _qunit.test)('Full screen', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliModal
              class="denali-modal"
              @isOpen={{true}}
              @isFullScreen={{this.fullScreen}}
              as | Modal |
            >
              <Modal.Content>Content</Modal.Content>
            </DenaliModal>
          
      */
      {
        "id": "Vl3ZtbZL",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"denali-modal\"]],[[\"@isOpen\",\"@isFullScreen\"],[true,[30,0,[\"fullScreen\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Modal\"],false,[\"denali-modal\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.denali-modal .modal-container').doesNotHaveClass('.is-full', 'The modal container does not have the `is-full` class by default');
      this.set('fullScreen', true);
      assert.dom('.denali-modal .modal-container').hasClass('is-full', 'The modal container has the `is-full` when fullScreen arg is set to true');
    });
    (0, _qunit.test)('header and footer', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliModal
              class="denali-modal"
              @isOpen={{true}}
              as | Modal |
            >
              <Modal.Header class="denali-modal__header">Header</Modal.Header>
              <Modal.Content>Content</Modal.Content>
              <Modal.Footer class="denali-modal__footer">Footer</Modal.Footer>
            </DenaliModal>
          
      */
      {
        "id": "bNxe/P6o",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"denali-modal\"]],[[\"@isOpen\"],[true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Header\"]],[[24,0,\"denali-modal__header\"]],null,[[\"default\"],[[[[1,\"Header\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Footer\"]],[[24,0,\"denali-modal__footer\"]],null,[[\"default\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Modal\"],false,[\"denali-modal\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.modal-header.denali-modal__header').hasText('Header', 'Denali Modal header is rendered');
      assert.dom('.modal-footer.denali-modal__footer').hasText('Footer', 'Denali Modal footer is rendered');
    });
  });
});
define("dummy/tests/integration/components/denali-navbar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliNavbar @isFixedTop={{this.isFixedTop}} class="test-nav" />
      */
      {
        "id": "XWMFoyZJ",
        "block": "[[[8,[39,0],[[24,0,\"test-nav\"]],[[\"@isFixedTop\"],[[30,0,[\"isFixedTop\"]]]],null]],[],false,[\"denali-navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('nav.nav.test-nav').exists('DenaliNavbar exists and renders a nav element');
      this.set('isFixedTop', true);
      assert.dom('nav.nav.test-nav').hasClass('is-fixed-top', 'DenaliNavbar has is-fixed-top class when `@isFixedTop` arg is true');
    });
    (0, _qunit.test)('it can support responsive', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar class="test-nav" @isResponsive={{this.isResponsive}} as |Nav|>
              <Nav.Left></Nav.Left>
            </DenaliNavbar>
          
      */
      {
        "id": "q2pZoUFE",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],[[\"@isResponsive\"],[[30,0,[\"isResponsive\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\"],false,[\"denali-navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-nav .nav-left .nav-responsive-menu').doesNotExist('DenaliNavbar does not render a responsive menu button by default');
      assert.dom('.test-nav.nav .nav-responsive').doesNotExist('DenaliNavbar does not render a responsive div by default');
      this.set('isResponsive', true);
      assert.dom('.test-nav .nav-left .nav-responsive-menu').exists('DenaliNavbar renders a responsive menu button when `@isResponsive` arg is true');
      assert.dom('.test-nav.nav .nav-responsive').exists('DenaliNavbar renders a responsive div when `@isResponsive` arg is true');
      assert.dom('.test-nav.nav .nav-responsive.is-active').doesNotExist('DenaliNavbar responsive div is not active default');
      await (0, _testHelpers.click)('.test-nav .nav-responsive-menu');
      assert.dom('.test-nav.nav .nav-responsive.is-active').exists('DenaliNavbar responsive div is toggled active when clicking the responsive menu');
      await (0, _testHelpers.click)('.test-nav .nav-responsive-menu');
      assert.dom('.test-nav.nav .nav-responsive.is-active').doesNotExist('DenaliNavbar responsive div is toggled inactive when clicking the responsive menu');
    });
    (0, _qunit.test)('it can yield left, center, & right section components', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar class="test-nav" as |Nav|>
              <Nav.Left></Nav.Left>
              <Nav.Center></Nav.Center>
              <Nav.Right></Nav.Right>
            </DenaliNavbar>
          
      */
      {
        "id": "OBWCQeXn",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Center\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Right\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\"],false,[\"denali-navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-nav.nav .nav-left').exists('DenaliNavbar can yield a left section component');
      assert.dom('.test-nav.nav .nav-center').exists('DenaliNavbar can yield a center section component');
      assert.dom('.test-nav.nav .nav-right').exists('DenaliNavbar can yield a right section component');
    });
    (0, _qunit.test)('left can yield sub components', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar class="test-nav" as |Nav|>
              <Nav.Left as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>Nav Item</Section.Item>
                <Section.Icon class="nav-icon" @icon="code" />
                <Section.Control>Nav Control</Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
                <Section.Menu as |Menu|>
                  <Menu.Trigger>Test Trigger</Menu.Trigger>
                  <Menu.Content>
                    <DenaliLink href="http://denali.design">Link1</DenaliLink>
                    <DenaliLink href="http://denali.design">Link2</DenaliLink>
                  </Menu.Content>
                </Section.Menu>
              </Nav.Left>
            </DenaliNavbar>
          
      */
      {
        "id": "2zT7k0RQ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"Nav Item\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],[[24,0,\"nav-icon\"]],[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"Nav Control\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Menu\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[8,[30,3,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Test Trigger\"]],[]]]]],[1,\"\\n            \"],[8,[30,3,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link1\"]],[]]]]],[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link2\"]],[]]]]],[1,\"\\n            \"]],[]]]]],[1,\"\\n          \"]],[3]]]]],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\",\"Menu\"],false,[\"denali-navbar\",\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
      assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
      assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
      assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
      assert.dom('.test-nav .nav-left a.nav-item').hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
      assert.dom('.test-nav .nav-left a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');
      assert.dom('.test-nav .nav-left .menu').hasClass('menu--nav', 'Left menu has correct class');
      assert.dom('.test-nav .nav-left .menu .menu-trigger').hasClass('nav-item', 'Left menu trigger has correct class');
      assert.dom('.test-nav .nav-left .menu .menu-trigger').hasText('Test Trigger', 'Left menu can yield a trigger component');
      await (0, _testHelpers.triggerEvent)('.test-nav .nav-left .menu .menu-trigger', 'mouseenter');
      assert.dom('.test-nav .nav-left .menu-content a').exists({
        count: 2
      }, 'Left menu content renders correctly');
    });
    (0, _qunit.test)('left can yield sub components when `@isResponsive` is true', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar class="test-nav" @isResponsive={{true}} as |Nav|>
              <Nav.Left as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>Nav Item</Section.Item>
                <Section.Icon class="nav-icon" @icon="code" />
                <Section.Control>Nav Control</Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
                <Section.Menu as |Menu|>
                  <Menu.Trigger>Test Trigger</Menu.Trigger>
                  <Menu.Content>
                    <DenaliLink href="http://denali.design">Link1</DenaliLink>
                    <DenaliLink href="http://denali.design">Link2</DenaliLink>
                  </Menu.Content>
                </Section.Menu>
              </Nav.Left>
            </DenaliNavbar>
          
      */
      {
        "id": "z/j3k1+f",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],[[\"@isResponsive\"],[true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"Nav Item\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],[[24,0,\"nav-icon\"]],[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"Nav Control\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Menu\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[8,[30,3,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Test Trigger\"]],[]]]]],[1,\"\\n            \"],[8,[30,3,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link1\"]],[]]]]],[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link2\"]],[]]]]],[1,\"\\n            \"]],[]]]]],[1,\"\\n          \"]],[3]]]]],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\",\"Menu\"],false,[\"denali-navbar\",\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
      assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
      assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
      assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
      assert.dom('.test-nav .nav-left a.nav-item').hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
      assert.dom('.test-nav .nav-left a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');
      assert.dom('.test-nav .nav-left .menu').hasClass('menu--nav', 'Left menu has correct class');
      assert.dom('.test-nav .nav-left .menu .menu-trigger').hasClass('nav-item', 'Left menu trigger has correct class');
      assert.dom('.test-nav .nav-left .menu .menu-trigger').hasText('Test Trigger', 'Left menu can yield a trigger component');
      await (0, _testHelpers.triggerEvent)('.test-nav .nav-left .menu .menu-trigger', 'mouseenter');
      assert.dom('.test-nav .nav-left .menu-content a').exists({
        count: 2
      }, 'Left menu content renders correctly');
    });
    (0, _qunit.test)('center can yield sub components', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar class="test-nav" as |Nav|>
              <Nav.Center as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>Nav Item</Section.Item>
                <Section.Icon class="nav-icon" @icon="code" />
                <Section.Control>Nav Control</Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
                <Section.Menu as |Menu|>
                  <Menu.Trigger>Test Trigger</Menu.Trigger>
                  <Menu.Content>
                    <DenaliLink href="http://denali.design">Link1</DenaliLink>
                    <DenaliLink href="http://denali.design">Link2</DenaliLink>
                  </Menu.Content>
                </Section.Menu>
              </Nav.Center>
            </DenaliNavbar>
          
      */
      {
        "id": "/tZ/+JMv",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Center\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"Nav Item\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],[[24,0,\"nav-icon\"]],[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"Nav Control\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Menu\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[8,[30,3,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Test Trigger\"]],[]]]]],[1,\"\\n            \"],[8,[30,3,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link1\"]],[]]]]],[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link2\"]],[]]]]],[1,\"\\n            \"]],[]]]]],[1,\"\\n          \"]],[3]]]]],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\",\"Menu\"],false,[\"denali-navbar\",\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-nav .nav-center .nav-brand').hasAttribute('src', 'img.png', 'Center can yield a nav logo component');
      assert.dom('.test-nav .nav-center .nav-item').hasText('Nav Item', 'Center can yield a nav item component');
      assert.dom('.test-nav .nav-center .nav-icon .d-icon').hasClass('d-code', 'Center can yield a nav icon component');
      assert.dom('.test-nav .nav-center .nav-control').hasText('Nav Control', 'Center can yield a nav control component');
      assert.dom('.test-nav .nav-center a.nav-item').hasAttribute('href', 'http://denali.design', 'Center can yield a nav link component');
      assert.dom('.test-nav .nav-center a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Center can yield a nav link-to component');
      assert.dom('.test-nav .nav-center .menu').hasClass('menu--nav', 'Center menu has correct class');
      assert.dom('.test-nav .nav-center .menu .menu-trigger').hasClass('nav-item', 'Center menu trigger has correct class');
      assert.dom('.test-nav .nav-center .menu .menu-trigger').hasText('Test Trigger', 'Center menu can yield a trigger component');
      await (0, _testHelpers.triggerEvent)('.test-nav .nav-center .menu .menu-trigger', 'mouseenter');
      assert.dom('.test-nav .nav-center .menu-content a').exists({
        count: 2
      }, 'Center menu content renders correctly');
    });
    (0, _qunit.test)('right can yield sub components', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar class="test-nav" as |Nav|>
              <Nav.Right as |Section|>
                <Section.Logo src="img.png"/>
                <Section.Item>Nav Item</Section.Item>
                <Section.Icon class="nav-icon" @icon="code" />
                <Section.Control>Nav Control</Section.Control>
                <Section.Link href="http://denali.design" />
                <Section.LinkTo @route="four-oh-four" />
                <Section.Menu as |Menu|>
                  <Menu.Trigger>Test Trigger</Menu.Trigger>
                  <Menu.Content>
                    <DenaliLink href="http://denali.design">Link1</DenaliLink>
                    <DenaliLink href="http://denali.design">Link2</DenaliLink>
                  </Menu.Content>
                </Section.Menu>
              </Nav.Right>
            </DenaliNavbar>
          
      */
      {
        "id": "4TrtwAXN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Right\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"Nav Item\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],[[24,0,\"nav-icon\"]],[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"Nav Control\"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Menu\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[8,[30,3,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Test Trigger\"]],[]]]]],[1,\"\\n            \"],[8,[30,3,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link1\"]],[]]]]],[1,\"\\n              \"],[8,[39,1],[[24,6,\"http://denali.design\"]],null,[[\"default\"],[[[[1,\"Link2\"]],[]]]]],[1,\"\\n            \"]],[]]]]],[1,\"\\n          \"]],[3]]]]],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\",\"Menu\"],false,[\"denali-navbar\",\"denali-link\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.test-nav .nav-right .nav-brand').hasAttribute('src', 'img.png', 'Right can yield a nav logo component');
      assert.dom('.test-nav .nav-right .nav-item').hasText('Nav Item', 'Right can yield a nav item component');
      assert.dom('.test-nav .nav-right .nav-icon .d-icon').hasClass('d-code', 'Right can yield a nav icon component');
      assert.dom('.test-nav .nav-right .nav-control').hasText('Nav Control', 'Right can yield a nav control component');
      assert.dom('.test-nav .nav-right a.nav-item').hasAttribute('href', 'http://denali.design', 'Right can yield a nav link component');
      assert.dom('.test-nav .nav-right a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Right can yield a nav link-to component');
      assert.dom('.test-nav .nav-right .menu').hasClass('menu--nav', 'Right menu has correct class');
      assert.dom('.test-nav .nav-right .menu .menu-trigger').hasClass('nav-item', 'Right menu trigger has correct class');
      assert.dom('.test-nav .nav-right .menu .menu-trigger').hasText('Test Trigger', 'Right menu can yield a trigger component');
      await (0, _testHelpers.triggerEvent)('.test-nav .nav-right .menu .menu-trigger', 'mouseenter');
      assert.dom('.test-nav .nav-right .menu-content a').exists({
        count: 2
      }, 'Right menu content renders correctly');
    });
  });
});
define("dummy/tests/integration/components/denali-navbar/control-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-navbar/control', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar::Control>
              Inner Content
            </DenaliNavbar::Control>
          
      */
      {
        "id": "qY5zTApT",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-navbar/control\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.nav-control').hasText('Inner Content', 'DenaliNavbar::Control exists and renders inner content');
    });
  });
});
define("dummy/tests/integration/components/denali-navbar/icon-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-navbar/icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('icon', 'code');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar::Icon
              @icon={{this.icon}}
            />
          
      */
      {
        "id": "cpNZbH05",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\"],[[30,0,[\"icon\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-navbar/icon\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.nav-item .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
      this.set('icon', 'bug');
      assert.dom('.nav-item .d-icon.d-bug').exists('DenaliNavbar::Icon exists and has the correct icon class');
    });
    (0, _qunit.test)('name renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar::Icon
              @icon="code"
              @name={{this.name}}
            />
          
      */
      {
        "id": "0sQauIU9",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@name\"],[\"code\",[30,0,[\"name\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-navbar/icon\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.nav-item .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
      assert.dom('.icon-name').doesNotExist('DenaliNavbar::Icon exists and does not have a name.');
      this.set('name', 'My Icon');
      assert.dom('.icon-name').hasText('My Icon', 'DenaliNavbar::Icon exists and has a name.');
    });
  });
});
define("dummy/tests/integration/components/denali-navbar/item-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-navbar/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar::Item>
              Inner Content
            </DenaliNavbar::Item>
          
      */
      {
        "id": "PbEW1jlY",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-navbar/item\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.nav-item').hasText('Inner Content', 'DenaliNavbar::Item exists and renders inner content');
    });
    (0, _qunit.test)('it an be set active ', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliNavbar::Item
              @isActive={{this.isActive}}
            >
              Inner Content
            </DenaliNavbar::Item>
          
      */
      {
        "id": "ttBEfc0o",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isActive\"],[[30,0,[\"isActive\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-navbar/item\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.nav-item').doesNotHaveClass('is-active', 'DenaliNavbar::Item is not active by default');
      this.set('isActive', true);
      assert.dom('span.nav-item').hasClass('is-active', 'DenaliNavbar::Item is active when `@isActive` arg is true');
    });
  });
});
define("dummy/tests/integration/components/denali-navbar/logo-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-navbar/logo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliNavbar::Logo @src="logo.png"/>
      */
      {
        "id": "15Na06+F",
        "block": "[[[8,[39,0],null,[[\"@src\"],[\"logo.png\"]],null]],[],false,[\"denali-navbar/logo\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('img').hasClass('nav-brand', 'DenaliNavbar::Logo renders an img with the correct class');
      assert.dom('img.nav-brand').hasAttribute('src', 'logo.png', 'DenaliNavbar::Logo renders src attr with the correct value');
      assert.dom('img.nav-brand').hasAttribute('alt', 'logo', 'DenaliNavbar::Logo renders alt attr with the default value');
    });
  });
});
define("dummy/tests/integration/components/denali-progress-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-progress', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliProgress />
          
      */
      {
        "id": "cYJacUM5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.d-progress div').exists('A div is rendered within a wrapper div with class `.d-progress`');
      assert.dom('.d-progress div').hasClass('d-progress--bar', 'A div with class ``d-progress--bar is rendered within a wrapper div');
    });
    (0, _qunit.test)('it supports value', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliProgress @value={{this.value}}/>
          
      */
      {
        "id": "t+4ddFq0",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@value\"],[[30,0,[\"value\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.d-progress div').exists('A div is rendered within a wrapper div with class `.d-progress`');
      assert.dom('.d-progress div').hasClass('d-progress--bar', 'A div is rendered within a wrapper div with class `.d-progress`');
      assert.dom('.d-progress div').hasAttribute('aria-valuenow', '0', 'DenaliProgress percent default value should be `0`');
      this.set('value', 30);
      assert.dom('.d-progress div').hasAttribute('aria-valuenow', '30', 'DenaliProgress percent should be updated to 30');
      this.set('value', 100);
      assert.dom('.d-progress div').hasAttribute('aria-valuenow', '100', 'DenaliProgress percent should be updated to 100');
      this.set('value', 0);
      assert.dom('.d-progress div').hasAttribute('aria-valuenow', '0', 'DenaliProgress percent should be updated to 0');
    });
    (0, _qunit.test)('it supports color and shade', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliProgress @value={{this.value}} @color={{this.color}} @shade={{this.shade}} />
          
      */
      {
        "id": "4vcDFoOb",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@value\",\"@color\",\"@shade\"],[[30,0,[\"value\"]],[30,0,[\"color\"]],[30,0,[\"shade\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('value', 30);
      assert.dom('.d-progress div').hasAttribute('aria-valuenow', '30', 'DenaliProgress with default color should be displayed');
      this.set('color', 'red');
      assert.dom('div.d-progress--bar').hasClass('has-bg-red-500', 'DenaliProgress displayed with red color when `@color` arg is set to red and default shade value 500');
      this.set('shade', '100');
      assert.dom('div.d-progress--bar').hasClass('has-bg-red-100', 'DenaliProgress displayed with red color and shade 100 when `@color` arg is set to red and `@shade` is set to 100');
      this.set('color', 'green');
      this.set('shade', '300');
      assert.dom('div.d-progress--bar').hasClass('has-bg-green-300', 'DenaliProgress displayed with green color and shade 300 when `@color` arg is set to green and `@shade` is set to 300');
    });
    (0, _qunit.test)('it supports isLoading', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliProgress @isLoading={{this.isLoading}} @size={{this.size}}/>
          
      */
      {
        "id": "Gf/KOgtC",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isLoading\",\"@size\"],[[30,0,[\"isLoading\"]],[30,0,[\"size\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.d-progress').exists('DenaliProgress can render with default `@isLoading` arg set to false ');
      this.set('isLoading', true);
      assert.dom('div.d-progress').hasClass('d-progress__loading', 'DenaliProgress has a loading class when `@isLoading` arg is set to true');
      this.set('size', 'small');
      assert.dom('div.d-progress').hasClass('d-progress__sm', 'DenaliProgress has a smaill size when `@size` arg is set to small');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliProgress @size={{this.size}}/>
          
      */
      {
        "id": "6Qzl0/Ou",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.d-progress').exists('DenaliProgress can render with default size');
      this.set('size', 'small');
      assert.dom('div.d-progress').hasClass('d-progress__sm', 'DenaliProgress has a smaill size when `@size` arg is set to small');
      this.set('size', 'medium');
      assert.dom('div.d-progress').hasClass('d-progress__md', 'DenaliProgress has a medium size when `@size` arg is set to medium');
      this.set('size', 'large');
      assert.dom('div.d-progress').hasClass('d-progress__lg', 'DenaliProgress has a large size when `@size` arg is set to large');
    });
    (0, _qunit.test)('it supports multi level progress with colors', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
          <DenaliProgress
            @size={{this.size}}
            @isLoading={{this.isLoading}}
            as |Progress|
            >
            <Progress.Bar @color="red" @value={{10}} @shade="100" />
            <Progress.Bar @color="green" @value={{20}} @shade="200" />
            <Progress.Bar @color="blue" @value={{30}} @shade="300" />
          </DenaliProgress>
          
      */
      {
        "id": "VyexoknR",
        "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@size\",\"@isLoading\"],[[30,0,[\"size\"]],[30,0,[\"isLoading\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"red\",10,\"100\"]],null],[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"green\",20,\"200\"]],null],[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"blue\",30,\"300\"]],null],[1,\"\\n    \"]],[1]]]]],[1,\"\\n    \"]],[\"Progress\"],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      const nestedEle = (0, _testHelpers.findAll)('.d-progress div');
      assert.dom(nestedEle[0]).hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
      assert.dom(nestedEle[0]).hasClass('has-bg-red-100', 'DenaliProgress displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100');
      assert.dom(nestedEle[1]).hasAttribute('aria-valuenow', '20', 'DenaliProgress with 2nd bar with value 20 should be displayed');
      assert.dom(nestedEle[1]).hasClass('has-bg-green-200', 'DenaliProgress displayed with green color when `@color` arg is set to green and `@shade` arg is set to 200');
      assert.dom(nestedEle[2]).hasAttribute('aria-valuenow', '30', 'DenaliProgress with 3rd bar with value 30 should be displayed');
      assert.dom(nestedEle[2]).hasClass('has-bg-blue-300', 'DenaliProgress displayed with blue color when `@color` arg is set to blue and `@shade` arg is set to 300');
    });
    (0, _qunit.test)('it supports multi level progress with top level values as defaults', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
          <DenaliProgress
            @size={{this.size}}
            @isLoading={{this.isLoading}}
            @color="red"
            @shade="100"
            as |Progress|
            >
              <Progress.Bar @value={{10}} />
          </DenaliProgress>
          
      */
      {
        "id": "CxZtBAkj",
        "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@size\",\"@isLoading\",\"@color\",\"@shade\"],[[30,0,[\"size\"]],[30,0,[\"isLoading\"]],\"red\",\"100\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Bar\"]],null,[[\"@value\"],[10]],null],[1,\"\\n    \"]],[1]]]]],[1,\"\\n    \"]],[\"Progress\"],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      const nestedEle = (0, _testHelpers.findAll)('.d-progress div');
      assert.dom(nestedEle[0]).hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
      assert.dom(nestedEle[0]).hasClass('has-bg-red-100', 'DenaliProgress displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level');
    });
    (0, _qunit.test)('it supports multi level progress with top level defaults and overrides', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
          <DenaliProgress
            @size={{this.size}}
            @isLoading={{this.isLoading}}
            @color="red"
            @shade="100"
            as |Progress|
            >
              <Progress.Bar @value={{10}} />
              <Progress.Bar @value={{20}} />
              <Progress.Bar @color="blue" @value={{30}} @shade="300" />
          </DenaliProgress>
          
      */
      {
        "id": "2dBvGKOS",
        "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@size\",\"@isLoading\",\"@color\",\"@shade\"],[[30,0,[\"size\"]],[30,0,[\"isLoading\"]],\"red\",\"100\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Bar\"]],null,[[\"@value\"],[10]],null],[1,\"\\n        \"],[8,[30,1,[\"Bar\"]],null,[[\"@value\"],[20]],null],[1,\"\\n        \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"blue\",30,\"300\"]],null],[1,\"\\n    \"]],[1]]]]],[1,\"\\n    \"]],[\"Progress\"],false,[\"denali-progress\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      const nestedEle = (0, _testHelpers.findAll)('.d-progress div');
      assert.dom(nestedEle[0]).hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
      assert.dom(nestedEle[0]).hasClass('has-bg-red-100', 'DenaliProgress 1st bar displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level');
      assert.dom(nestedEle[1]).hasAttribute('aria-valuenow', '20', 'DenaliProgress with 2nd bar with value 20 should be displayed');
      assert.dom(nestedEle[1]).hasClass('has-bg-red-100', 'DenaliProgress 2nd bar displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level');
      assert.dom(nestedEle[2]).hasAttribute('aria-valuenow', '30', 'DenaliProgress with 3rd bar with value 30 should be displayed');
      assert.dom(nestedEle[2]).hasClass('has-bg-blue-300', 'DenaliProgress 3rd bar displayed with blue color when `@color` arg is set to blue and `@shade` arg is set to 300');
    });
  });
});
define("dummy/tests/integration/components/denali-progress/bar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-progress/bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders denali progress bar', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliProgress::Bar @value={{50}} @color="green" @shade="500"/>
      */
      {
        "id": "Nap2d9HY",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@color\",\"@shade\"],[50,\"green\",\"500\"]],null]],[],false,[\"denali-progress/bar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.d-progress--bar').hasClass('has-bg-green-500', 'DenaliProgress Bar displayed with green color when `@color` arg is set to green and `@shade` arg is set to 600');
      assert.dom('.d-progress--bar').hasAttribute('aria-valuenow', '50', 'DenaliProgress Bar with value 50 should be displayed');
    });
  });
});
define("dummy/tests/integration/components/denali-radio-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-radio', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadio as |Radio|>
              <Radio.Option @value="">Inner Content</Radio.Option>
            </DenaliRadio>
          
      */
      {
        "id": "NKHZ5v1W",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"\"]],[[\"default\"],[[[[1,\"Inner Content\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.radio').exists({
        count: 1
      }, 'DenaliRadio Option exists');
      assert.dom('div.radio').hasText('Inner Content', 'DenaliRadio Option renders inner content');
    });
    (0, _qunit.test)('handles change events', async function (assert) {
      assert.expect(6);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
              <Radio.Option @value="surprise">2</Radio.Option>
              <Radio.Option @value={{3}}>3</Radio.Option>
            </DenaliRadio>
          
      */
      {
        "id": "UWPit6+V",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"surprise\"]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[3]],[[\"default\"],[[[[1,\"3\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('onChanged', value => assert.equal(value, 3, 'the last value is clicked'));
      await (0, _testHelpers.click)('.radio input[value="3"]');
      assert.dom('.radio input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', value => assert.equal(value, 1, 'the first value is clicked'));
      await (0, _testHelpers.click)('.radio input[value="1"]');
      assert.dom('.radio input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', value => assert.equal(value, 'surprise', 'the middle value is clicked'));
      await (0, _testHelpers.click)('.radio input[value="surprise"]');
      assert.dom('.radio input[value="surprise"]').isChecked('The element is marked as checked after being clicked');
    });
    (0, _qunit.test)('disabled elements', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
              <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
            </DenaliRadio>
          
      */
      {
        "id": "dqfkDRki",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.radio input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');
    });
    (0, _qunit.test)('checked elements', async function (assert) {
      assert.expect(6);
      this.checked = false;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadio as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
              <Radio.Option @value={{2}} @checked={{this.checked}}>2</Radio.Option>
              <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
            </DenaliRadio>
          
      */
      {
        "id": "fzG5s2lG",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@checked\"],[2,[30,0,[\"checked\"]]]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
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
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
              <Radio.Option @value={{1}}>1</Radio.Option>
            </DenaliRadio>
          
      */
      {
        "id": "9Xe1uK4/",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('onChanged', value => assert.equal(value, 1, 'the event is triggered when clicking a label'));
      assert.dom('.radio input').isNotChecked('The option is not marked as checked');
      await (0, _testHelpers.click)('.radio label');
      assert.dom('.radio input').isChecked('The option is marked as checked after clicking the label');
    });
  });
});
define("dummy/tests/integration/components/denali-radio-toggle-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-radio-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadioToggle as |Toggle|>
              <Toggle.Option @value="1">Item 1</Toggle.Option>
            </DenaliRadioToggle>
      */
      {
        "id": "0+0PGq7z",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"1\"]],[[\"default\"],[[[[1,\"Item 1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('label').hasText('Item 1', 'DenaliRadioToggle.Option exists and renders inner content');
      assert.dom('input').hasAttribute('value', '1', 'DenaliRadioToggle.Option exists and has a value');
    });
    (0, _qunit.test)('it handles change events for radio options', async function (assert) {
      assert.expect(6);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
              <Toggle.Option @value="surprise">2</Toggle.Option>
              <Toggle.Option @value={{3}}>3</Toggle.Option>
            </DenaliRadioToggle>
          
      */
      {
        "id": "mNfbi+jG",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"surprise\"]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[3]],[[\"default\"],[[[[1,\"3\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('onChanged', value => assert.equal(value, 3, 'the last value is clicked'));
      await (0, _testHelpers.click)('.toggle input[value="3"]');
      assert.dom('.toggle input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', value => assert.equal(value, 1, 'the first value is clicked'));
      await (0, _testHelpers.click)('.toggle input[value="1"]');
      assert.dom('.toggle input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
      this.set('onChanged', value => assert.equal(value, 'surprise', 'the middle value is clicked'));
      await (0, _testHelpers.click)('.toggle input[value="surprise"]');
      assert.dom('.toggle input[value="surprise"]').isChecked('The element is marked as checked after being clicked');
    });
    (0, _qunit.test)('it handles disabled elements for radio options', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
              <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
            </DenaliRadioToggle>
          
      */
      {
        "id": "qlsu8JPR",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.toggle input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');
    });
    (0, _qunit.test)('it handles checked elements for radio options', async function (assert) {
      assert.expect(6);
      this.checked = false;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadioToggle as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
              <Toggle.Option @value={{2}} @checked={{this.checked}}>2</Toggle.Option>
              <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
            </DenaliRadioToggle>
          
      */
      {
        "id": "nq/HfCr2",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@checked\"],[2,[30,0,[\"checked\"]]]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
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
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
              <Toggle.Option @value={{1}}>1</Toggle.Option>
            </DenaliRadioToggle>
          
      */
      {
        "id": "h950Un67",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('onChanged', value => assert.equal(value, 1, 'the event is triggered when clicking a label'));
      assert.dom('.toggle input').isNotChecked('The option is not marked as checked');
      await (0, _testHelpers.click)('.toggle label');
      assert.dom('.toggle input').isChecked('The option is marked as checked after clicking the label');
    });
    (0, _qunit.test)('it supports small size', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadioToggle @isSmall={{this.isSmall}} as |Toggle|>
              <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
            </DenaliRadioToggle>
          
      */
      {
        "id": "bm6oPT2y",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isSmall\"],[[30,0,[\"isSmall\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"Item 1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
      this.set('isSmall', 'true');
      assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliRadioToggle @isInverse={{this.isInverse}} as |Toggle|>
              <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
            </DenaliRadioToggle>
          
      */
      {
        "id": "IcWgpIjl",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"Item 1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert.dom('.toggle').hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');
    });
  });
});
define("dummy/tests/integration/components/denali-select-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  const opts = [{
    text: 'Item 1'
  }, {
    text: 'Item 2'
  }, {
    text: 'Item 3'
  }];
  (0, _qunit.module)('Integration | Component | denali-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', async function (assert) {
      assert.expect(1);
      (0, _testHelpers.setupOnerror)(function (_ref2) {
        let {
          message
        } = _ref2;
        assert.equal(message, 'Failed prop type: The prop `options` is marked as required in `DenaliSelectComponent`, but its value is `undefined`.', 'If @args() contains a PropType validator, an error will be thrown if the value is incorrect');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliSelect />
      */
      {
        "id": "weYLhmv3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
    });
    (0, _qunit.test)('it renders an option string', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSelect @options={{array "Item 1"}} @onChange={{this.onChange}} as |option|>
              {{option}}
            </DenaliSelect>
          
      */
      {
        "id": "2nr/LyPw",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@onChange\"],[[28,[37,1],[\"Item 1\"],null],[30,0,[\"onChange\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\",\"array\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
      assert.dom('div.input select').exists('DenaliSelect renders a select element.');
      assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders text.');
    });
    (0, _qunit.test)('it renders an option object', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSelect @options={{array (hash text="Item 1")}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
      {
        "id": "OnHR7BUU",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],[[28,[37,2],null,[[\"text\"],[\"Item 1\"]]]],null]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\",\"array\",\"hash\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
      assert.dom('div.input select').exists('DenaliSelect renders a select element.');
      assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders an object.');
    });
    (0, _qunit.test)('an option is active', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSelect @options={{this.options}} @selectedOption={{this.selectedOption}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
      {
        "id": "hXd0n0qP",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@selectedOption\"],[[30,0,[\"options\"]],[30,0,[\"selectedOption\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', opts);
      this.set('selectedOption', opts[1]);
      assert.equal((0, _testHelpers.find)('div.input select').selectedIndex, 1, 'DenaliSelect selects the object given by the `@selectedOption` arg');
    });
    (0, _qunit.test)('an option is disabled', async function (assert) {
      assert.expect(1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSelect @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
      {
        "id": "9Mk0OiN+",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@disabledOptions\"],[[30,0,[\"options\"]],[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', opts);
      this.set('disabled', [opts[1]]);
      assert.deepEqual((0, _testHelpers.findAll)('div.input option').map(e => e.disabled), [false, true, false], 'DenaliSelect options are enabled and disabled as specified.');
    });
    (0, _qunit.test)('it supports wrapperClass', async function (assert) {
      this.set('options', opts);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSelect
              @options={{this.options}}
              @wrapperClass={{this.wrapperClass}}
              as |option|
            >
              {{option.text}}
            </DenaliSelect>
          
      */
      {
        "id": "iNrwbpsR",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@wrapperClass\"],[[30,0,[\"options\"]],[30,0,[\"wrapperClass\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      const wrapperClass = 'wrapperClass';
      assert.dom('.input').doesNotHaveClass(wrapperClass, 'DenaliSelect wrapper does not have a size class by default');
      this.set('wrapperClass', wrapperClass);
      assert.dom('.input').hasClass(wrapperClass, 'DenaliSelect wrapper has the provided wrapper class');
    });
    (0, _qunit.test)('it supports sizes', async function (assert) {
      this.set('options', opts);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSelect
              @options={{this.options}}
              @size={{this.size}}
              as |option|
            >
              {{option.text}}
            </DenaliSelect>
          
      */
      {
        "id": "KluOz6Iv",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@size\"],[[30,0,[\"options\"]],[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input').doesNotHaveClass(/is-small|is-medium|is-large/, 'DenaliSelect wrapper does not have a size class by default');
      this.set('size', 'small');
      assert.dom('.input').hasClass('is-small', 'DenaliSelect wrapper has the appropriate class for small');
      this.set('size', 'medium');
      assert.dom('.input').hasClass('is-medium', 'DenaliSelect wrapper has the appropriate class for medium');
      this.set('size', 'large');
      assert.dom('.input').hasClass('is-large', 'DenaliSelect wrapper has the appropriate class for large');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSelect @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
              {{option.text}}
            </DenaliSelect>
          
      */
      {
        "id": "+BpzK+ZI",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@isInverse\"],[[30,0,[\"options\"]],[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', opts);
      assert.dom('div.input').doesNotHaveClass('is-inverse', 'DenaliSelect does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert.dom('div.input').hasClass('is-inverse', 'DenaliSelect has inverse styling when `@isInverse` arg is set to true');
    });
    (0, _qunit.test)('it handles change events', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "/GZim44j",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@selectedOption\",\"@disabledOptions\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"selectedOption\"]],[30,0,[\"disabled\"]],[30,0,[\"onChange\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', [{
        text: 'Item 1'
      }, {
        text: 'Item 2'
      }, {
        text: 'Item 3'
      }]);
      this.set('selectedOption', this.options[2]);
      assert.equal((0, _testHelpers.find)('div.input select').selectedIndex, 2);
      this.set('onChange', option => {
        this.set('selectedOption', option);
        assert.equal(option, this.options[1], 'DenaliSelect @onChange action provides the object selected');
      });
      await (0, _testHelpers.fillIn)('div.input select', 'Item 2');
    });
  });
});
define("dummy/tests/integration/components/denali-sidebar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSidebar>
              The Greatest Sidebar
            </DenaliSidebar>
          
      */
      {
        "id": "OnWjf5Wb",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        The Greatest Sidebar\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-sidebar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.tabs').hasClass('is-primary', 'DenaliSidebar renders a primary style by default');
      assert.dom('.tabs').hasClass('is-vertical', 'DenaliSidebar renders a vertical style by default');
    });
    (0, _qunit.test)('it can yield a `Tab` sub component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSidebar as |Sidebar|>
              <Sidebar.Tab>
                The Greatest Tab
              </Sidebar.Tab>
            </DenaliSidebar>
          
      */
      {
        "id": "OAyP4EVm",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Tab\"]],null,null,[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Sidebar\"],false,[\"denali-sidebar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliSidebar can yield a `Tab` sub component');
    });
    (0, _qunit.test)('it can yield a `LinkToTab` sub component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliSidebar as |Sidebar|>
              <Sidebar.LinkToTab
                @route="index"
              >
                The Greatest Tab
              </Sidebar.LinkToTab>
            </DenaliSidebar>
          
      */
      {
        "id": "pEP3Yd8Y",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"LinkToTab\"]],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Sidebar\"],false,[\"denali-sidebar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.tabs li.ember-view a').hasText('The Greatest Tab', 'DenaliSidebar can yield a `LinkToTab` sub component');
    });
  });
});
define("dummy/tests/integration/components/denali-switch-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliSwitch @offLabel="Lights Off" @onLabel="Lights On" />
      */
      {
        "id": "3JUQ5BtF",
        "block": "[[[8,[39,0],null,[[\"@offLabel\",\"@onLabel\"],[\"Lights Off\",\"Lights On\"]],null]],[],false,[\"denali-switch\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.denali-switch.switch').exists('A denali switch component is rendered');
      assert.dom('.denali-switch.switch .label.off').hasText('Lights Off', 'A denali switch renders an off label');
      assert.dom('.denali-switch.switch .label.on').hasText('Lights On', 'A denali switch renders an on label');
      assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
    });
    (0, _qunit.test)('checked and disabled', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliSwitch
            @offLabel="Off"
            @onLabel="On"
            checked={{this.checked}}
            disabled={{this.disabled}}
          />
      */
      {
        "id": "ditibPwG",
        "block": "[[[8,[39,0],[[16,\"checked\",[30,0,[\"checked\"]]],[16,\"disabled\",[30,0,[\"disabled\"]]]],[[\"@offLabel\",\"@onLabel\"],[\"Off\",\"On\"]],null]],[],false,[\"denali-switch\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
      this.set('checked', true);
      assert.dom('.denali-switch.switch input').isChecked('The switch is on when checked is set to true');
      assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
      this.set('disabled', true);
      assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when disabled is set to true');
    });
    (0, _qunit.test)('isEnabled and isDisabled', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliSwitch
            @offLabel="Off"
            @onLabel="On"
            @isEnabled={{this.isEnabled}}
            @isDisabled={{this.isDisabled}}
          />
      */
      {
        "id": "9Ztyxv48",
        "block": "[[[8,[39,0],null,[[\"@offLabel\",\"@onLabel\",\"@isEnabled\",\"@isDisabled\"],[\"Off\",\"On\",[30,0,[\"isEnabled\"]],[30,0,[\"isDisabled\"]]]],null]],[],false,[\"denali-switch\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
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
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliSwitch
            @offLabel="Off"
            @onLabel="On"
            @onChange={{action this.changeHandler}}
            {{on "click" (action this.clickHandler)}}
          />
      */
      {
        "id": "ilzJcZPk",
        "block": "[[[8,[39,0],[[4,[38,2],[\"click\",[28,[37,1],[[30,0],[30,0,[\"clickHandler\"]]],null]],null]],[[\"@offLabel\",\"@onLabel\",\"@onChange\"],[\"Off\",\"On\",[28,[37,1],[[30,0],[30,0,[\"changeHandler\"]]],null]]],null]],[],false,[\"denali-switch\",\"action\",\"on\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
      await (0, _testHelpers.click)('.denali-switch input');
      assert.dom('.denali-switch.switch input').isChecked('The switch is on after click');
      await (0, _testHelpers.click)('.denali-switch input');
      assert.dom('.denali-switch.switch input').isNotChecked('Clicking again turns the switch off');
    });
  });
});
define("dummy/tests/integration/components/denali-table-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  const TEMPLATE = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <DenaliTable
    @isStriped={{this.isStriped}}
    @isCards={{this.isCards}}
    @isFrozen={{this.isFrozen}}
    as |Table|
  >
    <Table.Header>head</Table.Header>
    <Table.Body>body</Table.Body>
    <Table.Footer>footer</Table.Footer>
  </DenaliTable>
  
  */
  {
    "id": "h48zBfEv",
    "block": "[[[1,\"\\n\"],[8,[39,0],null,[[\"@isStriped\",\"@isCards\",\"@isFrozen\"],[[30,0,[\"isStriped\"]],[30,0,[\"isCards\"]],[30,0,[\"isFrozen\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[30,1,[\"Header\"]],null,null,[[\"default\"],[[[[1,\"head\"]],[]]]]],[1,\"\\n  \"],[8,[30,1,[\"Body\"]],null,null,[[\"default\"],[[[[1,\"body\"]],[]]]]],[1,\"\\n  \"],[8,[30,1,[\"Footer\"]],null,null,[[\"default\"],[[[[1,\"footer\"]],[]]]]],[1,\"\\n\"]],[1]]]]],[1,\"\\n\"]],[\"Table\"],false,[\"denali-table\"]]",
    "moduleName": "(unknown template module)",
    "isStrictMode": false
  });
  (0, _qunit.module)('Integration | Component | denali-table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('table').exists('A table is rendered');
      assert.dom('table thead').hasText('head', 'A table head is yielded');
      assert.dom('table tbody').hasText('body', 'A table body is yielded');
      assert.dom('table tfoot').hasText('footer', 'A table footer is yielded');
    });
    (0, _qunit.test)('it supports isFrozen', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('.table-container').doesNotExist('The table container does not exist by default');
      this.set('isFrozen', true);
      assert.dom('.table-container').hasClass('table-container__freeze', 'The table container exists and is frozen');
      assert.dom('.table-container table').exists('The table is rendered in the container');
    });
  });
});
define("dummy/tests/integration/components/denali-table/body-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-table/body', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTable::Body as |Body|>
              <Body.Row>row</Body.Row>
            </DenaliTable::Body>
          
      */
      {
        "id": "oZE95/Kf",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Row\"]],null,null,[[\"default\"],[[[[1,\"row\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Body\"],false,[\"denali-table/body\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('tbody').exists('A table body is rendered');
      assert.dom('tbody tr').hasText('row', 'A table row is yielded');
    });
  });
});
define("dummy/tests/integration/components/denali-table/cell-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  const TEMPLATE = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <DenaliTable::Cell @position={{this.position}} @isMono={{this.isMono}}>
    cell
  </DenaliTable::Cell>
  
  */
  {
    "id": "TKB+n17u",
    "block": "[[[1,\"\\n\"],[8,[39,0],null,[[\"@position\",\"@isMono\"],[[30,0,[\"position\"]],[30,0,[\"isMono\"]]]],[[\"default\"],[[[[1,\"\\n  cell\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"denali-table/cell\"]]",
    "moduleName": "(unknown template module)",
    "isStrictMode": false
  });
  (0, _qunit.module)('Integration | Component | denali-table/cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('td').hasText('cell', 'A table cell is rendered');
    });
    (0, _qunit.test)('it supports position', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('td').hasClass('is-default', 'DenaliTableCell has default styles when `@position` arg is not set');
      this.set('position', 'default');
      assert.dom('td').hasClass('is-default', 'DenaliTableCell has default styles when `@position` arg is set to default');
      this.set('position', 'left');
      assert.dom('td').hasClass('is-left', 'DenaliTableCell has left styles when `@position` arg is set to left');
      this.set('position', 'center');
      assert.dom('td').hasClass('is-center', 'DenaliTableCell has center styles when `@position` arg is set to center');
      this.set('position', 'right');
      assert.dom('td').hasClass('is-right', 'DenaliTableCell has right styles when `@position` arg is set to right');
    });
    (0, _qunit.test)('it supports isMono', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('td').doesNotHaveClass('is-mono', 'DenaliTableCell does not have mono styles when `@isMono` arg is not set');
      this.set('isMono', true);
      assert.dom('td').hasClass('is-mono', 'DenaliTableCell has mono style when `@isMono` arg is set to true');
    });
  });
});
define("dummy/tests/integration/components/denali-table/footer-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-table/footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTable::Footer as |Footer|>
              <Footer.Row>row</Footer.Row>
            </DenaliTable::Footer>
          
      */
      {
        "id": "crw7I/xJ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Row\"]],null,null,[[\"default\"],[[[[1,\"row\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Footer\"],false,[\"denali-table/footer\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('tfoot').exists('A table foot is rendered');
      assert.dom('tfoot tr').hasText('row', 'A table row is yielded');
    });
  });
});
define("dummy/tests/integration/components/denali-table/header-cell-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  const TEMPLATE = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <DenaliTable::HeaderCell
    @position={{this.position}}
    @isMono={{this.isMono}}
    @isSorted={{this.isSorted}}
    @sortDirection={{this.sortDirection}}
  >
    cell
  </DenaliTable::HeaderCell>
  
  */
  {
    "id": "5v0gu6Cl",
    "block": "[[[1,\"\\n\"],[8,[39,0],null,[[\"@position\",\"@isMono\",\"@isSorted\",\"@sortDirection\"],[[30,0,[\"position\"]],[30,0,[\"isMono\"]],[30,0,[\"isSorted\"]],[30,0,[\"sortDirection\"]]]],[[\"default\"],[[[[1,\"\\n  cell\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"denali-table/header-cell\"]]",
    "moduleName": "(unknown template module)",
    "isStrictMode": false
  });
  (0, _qunit.module)('Integration | Component | denali-table/header-cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('th').hasText('cell', 'A table cell is rendered');
    });
    (0, _qunit.test)('it supports position', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('th').hasClass('is-default', 'DenaliTableHeaderCell has default styles when `@position` arg is not set');
      this.set('position', 'default');
      assert.dom('th').hasClass('is-default', 'DenaliTableHeaderCell has default styles when `@position` arg is set to default');
      this.set('position', 'left');
      assert.dom('th').hasClass('is-left', 'DenaliTableHeaderCell has left styles when `@position` arg is set to left');
      this.set('position', 'center');
      assert.dom('th').hasClass('is-center', 'DenaliTableHeaderCell has center styles when `@position` arg is set to center');
      this.set('position', 'right');
      assert.dom('th').hasClass('is-right', 'DenaliTableHeaderCell has right styles when `@position` arg is set to right');
    });
    (0, _qunit.test)('it supports isMono', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('th').doesNotHaveClass('is-mono', 'DenaliTableHeaderCell does not have mono styles when `@isMono` arg is not set');
      this.set('isMono', true);
      assert.dom('th').hasClass('is-mono', 'DenaliTableHeaderCell has mono style when `@isMono` arg is set to true');
    });
    (0, _qunit.test)('it supports isSorted', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('th').doesNotHaveClass('is-sorted', 'DenaliTableHeaderCell does not have sorted styles when `@isSorted` arg is not set');
      this.set('isSorted', true);
      assert.dom('th').hasClass('is-sorted', 'DenaliTableHeaderCell has sorted style when `@isSorted` arg is set to true');
    });
    (0, _qunit.test)('it supports sortDirection', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('th').doesNotHaveClass('is-sorted__default', 'DenaliTableHeaderCell does not have sortDirection styles when `@sortDirection` arg is not set');
      this.set('isSorted', true);
      assert.dom('th').hasClass('is-sorted__default', 'DenaliTableHeaderCell has sortDirection style when `@sortDirection` arg is not set');

      const message = direction => `DenaliTableHeaderCell has sortDirection style when \`@sortDirection\` arg is set to ${direction}`;

      let directions = ['default', 'ascend', 'descend'];
      directions.forEach(direction => {
        this.set('sortDirection', direction);
        assert.dom('th').hasClass(`is-sorted__${direction}`, message(direction));
      });
    });
  });
});
define("dummy/tests/integration/components/denali-table/header-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-table/header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTable::Header as |Header|>
              <Header.Row>row</Header.Row>
            </DenaliTable::Header>
          
      */
      {
        "id": "sk44CQne",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Row\"]],null,null,[[\"default\"],[[[[1,\"row\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Header\"],false,[\"denali-table/header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('thead').exists('A table head is rendered');
      assert.dom('thead tr').hasText('row', 'A table row is yielded');
    });
  });
});
define("dummy/tests/integration/components/denali-table/row-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-table/row', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTable::Row as |Row|>
              <Row.HeaderCell>header</Row.HeaderCell>
              <Row.Cell>cell</Row.Cell>
            </DenaliTable::Row>
          
      */
      {
        "id": "sEVoZI0e",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"HeaderCell\"]],null,null,[[\"default\"],[[[[1,\"header\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Cell\"]],null,null,[[\"default\"],[[[[1,\"cell\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Row\"],false,[\"denali-table/row\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('tr').exists('A table row is rendered');
      assert.dom('tr th').hasText('header', 'A table header cell is yielded');
      assert.dom('tr td').hasText('cell', 'A table cell is yielded');
    });
  });
});
define("dummy/tests/integration/components/denali-table/table-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  const TEMPLATE = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <DenaliTable::Table @isStriped={{this.isStriped}} @isCards={{this.isCards}} as |Table|>
    <Table.Header>head</Table.Header>
    <Table.Body>body</Table.Body>
    <Table.Footer>footer</Table.Footer>
  </DenaliTable::Table>
  
  */
  {
    "id": "/78scbYg",
    "block": "[[[1,\"\\n\"],[8,[39,0],null,[[\"@isStriped\",\"@isCards\"],[[30,0,[\"isStriped\"]],[30,0,[\"isCards\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[30,1,[\"Header\"]],null,null,[[\"default\"],[[[[1,\"head\"]],[]]]]],[1,\"\\n  \"],[8,[30,1,[\"Body\"]],null,null,[[\"default\"],[[[[1,\"body\"]],[]]]]],[1,\"\\n  \"],[8,[30,1,[\"Footer\"]],null,null,[[\"default\"],[[[[1,\"footer\"]],[]]]]],[1,\"\\n\"]],[1]]]]],[1,\"\\n\"]],[\"Table\"],false,[\"denali-table/table\"]]",
    "moduleName": "(unknown template module)",
    "isStrictMode": false
  });
  (0, _qunit.module)('Integration | Component | denali-table/table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('table').exists('A table is rendered');
      assert.dom('table thead').hasText('head', 'A table head is yielded');
      assert.dom('table tbody').hasText('body', 'A table body is yielded');
      assert.dom('table tfoot').hasText('footer', 'A table footer is yielded');
    });
    (0, _qunit.test)('it supports isStriped', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('table').doesNotHaveClass('is-striped', 'DenaliTableTable has non striped styles when `@isStriped` arg is not set');
      this.set('isStriped', true);
      assert.dom('table').hasClass('is-striped', 'DenaliTableTable has striped styles when `@isStriped` arg is set to true');
    });
    (0, _qunit.test)('it supports isCards', async function (assert) {
      await (0, _testHelpers.render)(TEMPLATE);
      assert.dom('table').doesNotHaveClass('is-cards', 'DenaliTableTable has non card styles when `@isCards` arg is not set');
      this.set('isCards', true);
      assert.dom('table').hasClass('is-cards', 'DenaliTableTable has cards styles when `@isCards` arg is set to true');
    });
  });
});
define("dummy/tests/integration/components/denali-tabs-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-tabs', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs>
              Inner Content
            </DenaliTabs>
          
      */
      {
        "id": "5tMaQKBS",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.tabs ul').hasText('Inner Content', 'DenaliTabs exists and renders inner content');
    });
    (0, _qunit.test)('it supports styles', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs
              @style={{this.style}}
            >
              Inner Content
            </DenaliTabs>
          
      */
      {
        "id": "RqUnY9rE",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@style\"],[[30,0,[\"style\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.tabs').hasClass('is-primary', 'DenaliTabs renders a primary style by default');
      assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal style by default');
      this.set('style', 'secondary');
      assert.dom('.tabs').hasClass('is-secondary', 'DenaliTabs renders a secondary style by setting `@style` arg to secondary');
      assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal style by setting `@style` arg to secondary');
    });
    (0, _qunit.test)('it can yield a `Tab` sub component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs as |Tabs|>
              <Tabs.Tab>
                The Greatest Tab
              </Tabs.Tab>
            </DenaliTabs>
          
      */
      {
        "id": "fMd3sMnL",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Tab\"]],null,null,[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Tabs\"],false,[\"denali-tabs\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliTabs can yield a `Tab` sub component');
    });
    (0, _qunit.test)('it can yield a `LinkToTab` sub component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs as |Tabs|>
              <Tabs.LinkToTab
                @route="index"
              >
                The Greatest Tab
              </Tabs.LinkToTab>
            </DenaliTabs>
          
      */
      {
        "id": "543OPy8S",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"LinkToTab\"]],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Tabs\"],false,[\"denali-tabs\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.tabs li.ember-view a').hasText('The Greatest Tab', 'DenaliTabs can yield a `LinkToTab` sub component');
    });
  });
});
define("dummy/tests/integration/components/denali-tabs/link-to-tab-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-tabs/link-to-tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs::LinkToTab
              @route="four-oh-four"
            >
              Inner Content
            </DenaliTabs::LinkToTab>
          
      */
      {
        "id": "oPH81ZNd",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[\"four-oh-four\"]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/link-to-tab\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('li a').hasText('Inner Content', 'DenaliTabs::LinkToTab exists and renders Inner Content');
      assert.dom('li a').hasAttribute('href', '/four-oh-four', 'DenaliTabs::LinkToTab has correct href attribute for given LinkTo arg');
    });
    (0, _qunit.test)('it can be set active', async function (assert) {
      this.set('route', 'four-oh-four');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs::LinkToTab
              @route={{this.route}}
            >
              Inner Content
            </DenaliTabs::LinkToTab>
          
      */
      {
        "id": "mgP1lqgH",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[[30,0,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/link-to-tab\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::LinkToTab is not active when not on the current route');
      this.set('route', 'index');
      assert.dom('li').hasClass('is-active', 'DenaliTabs::LinkToTab is active when on the current route');
    });
    (0, _qunit.test)('it can be set disabled', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs::LinkToTab
              @route="four-oh-four"
              @disabled={{this.disabled}}
            >
              Inner Content
            </DenaliTabs::LinkToTab>
          
      */
      {
        "id": "o/iuwusK",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@disabled\"],[\"four-oh-four\",[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/link-to-tab\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::LinkToTab is not disabled by default');
      this.set('disabled', true);
      assert.dom('li').hasClass('is-disabled', 'DenaliTabs::LinkToTab is disabled when disabled is set to true');
    });
  });
});
define("dummy/tests/integration/components/denali-tabs/tab-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-tabs/tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs::Tab>
              Inner Content
            </DenaliTabs::Tab>
          
      */
      {
        "id": "ZxEq3zAC",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/tab\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('li span').hasText('Inner Content', 'DenaliTabs::Tab exists and renders inner content');
    });
    (0, _qunit.test)('it can be set active', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs::Tab
              @isActive={{this.isActive}}
            >
              Inner Content
            </DenaliTabs::Tab>
          
      */
      {
        "id": "4vTwXDag",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isActive\"],[[30,0,[\"isActive\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/tab\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::Tab is not active by default');
      this.set('isActive', true);
      assert.dom('li').hasClass('is-active', 'DenaliTabs::Tab is active when setting `@isActive` arg to true');
    });
    (0, _qunit.test)('it can be set disabled', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTabs::Tab
              @isDisabled={{this.isDisabled}}
            >
              Inner Content
            </DenaliTabs::Tab>
          
      */
      {
        "id": "RKIDy4dY",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/tab\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::Tab is not disabled by default');
      this.set('isDisabled', true);
      assert.dom('li').hasClass('is-disabled', 'DenaliTabs::Tab is active when setting `@isDisabled` arg to true');
    });
  });
});
define("dummy/tests/integration/components/denali-tag-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTag>
              Inner Content
            </DenaliTag>
          
      */
      {
        "id": "dzZm8S2u",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.tag').hasText('Inner Content', 'DenaliTag exists and renders inner content');
    });
    (0, _qunit.test)('states', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTag @state={{this.state}}>
              Inner Content
            </DenaliTag>
          
      */
      {
        "id": "u0Fe3h7m",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@state\"],[[30,0,[\"state\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.tag').exists('DenaliTag can render without a state set');
      this.set('state', 'disabled');
      assert.dom('span.tag').hasClass('is-disabled', 'DenaliTag can be set disabled by setting the `@state` arg to `disabled`');
      this.set('state', 'active');
      assert.dom('span.tag').hasClass('is-active', 'DenaliTag can be set active by setting the `@state` arg to `active`');
    });
    (0, _qunit.test)('outlined', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTag @isOutlined={{this.outlined}}>
              Inner Content
            </DenaliTag>
          
      */
      {
        "id": "zje0dV4q",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isOutlined\"],[[30,0,[\"outlined\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.tag').doesNotHaveClass('outlined', 'DenaliTag is not outlined by default');
      this.set('outlined', true);
      assert.dom('span.tag').hasClass('outlined', 'DenaliTag can be outlined by setting the `@isOutlined` arg to true');
    });
    (0, _qunit.test)('small', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTag @isSmall={{this.isSmall}}>
              Inner Content
            </DenaliTag>
          
      */
      {
        "id": "qk4UBbGD",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isSmall\"],[[30,0,[\"isSmall\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.tag').doesNotHaveClass('is-small', 'DenaliTag is not small by default');
      this.set('isSmall', true);
      assert.dom('span.tag').hasClass('is-small', 'DenaliTag can be made smaller by setting the `@isSmall` arg to true');
    });
    (0, _qunit.test)('icons', async function (assert) {
      assert.expect(12);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTag
              @iconFront={{this.iconFront}}
              @iconFrontClass={{this.iconFrontClass}}
              @onIconFrontClick={{this.onIconFrontClick}}
              @iconBack={{this.iconBack}}
              @iconBackClass={{this.iconBackClass}}
              @onIconBackClick={{this.onIconBackClick}}
            >Tag Content</DenaliTag>
          
      */
      {
        "id": "eA9gaKkh",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@iconFront\",\"@iconFrontClass\",\"@onIconFrontClick\",\"@iconBack\",\"@iconBackClass\",\"@onIconBackClick\"],[[30,0,[\"iconFront\"]],[30,0,[\"iconFrontClass\"]],[30,0,[\"onIconFrontClick\"]],[30,0,[\"iconBack\"]],[30,0,[\"iconBackClass\"]],[30,0,[\"onIconBackClick\"]]]],[[\"default\"],[[[[1,\"Tag Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.tag').doesNotHaveClass('has-icon-front', 'DenaliTag does not have the `has-icon-front` class by default');
      assert.dom('span.tag').doesNotHaveClass('has-icon-back', 'DenaliTag does not have the `has-icon-back` class by default');
      this.set('iconFront', 'check');
      assert.dom('span.tag').hasClass('has-icon-front', 'DenaliTag has the `has-icon-front` class when iconFront is specified');
      assert.dom('span.tag .d-icon').hasClass('d-check', 'DenaliTag has the specified icon in the front');
      const iconFrontClass = 'iconFrontClass';
      assert.dom('span.tag .d-icon').doesNotHaveClass(iconFrontClass, 'DenaliTag does not have `iconFrontClass` class by default');
      this.set('iconFrontClass', iconFrontClass);
      assert.dom('span.tag .d-check').hasClass(iconFrontClass, 'DenaliTag has the specified `iconFrontClass`');
      this.set('onIconFrontClick', () => assert.ok(true, '`onIconFrontClick` fires on click'));
      await (0, _testHelpers.click)('.d-check'); // unset the front icon to check the back icon

      this.set('iconFront', undefined);
      this.set('onIconFrontClick', undefined);
      this.set('iconBack', 'close');
      assert.dom('span.tag').hasClass('has-icon-back', 'DenaliTag has the `has-icon-back` class when iconBack is specified');
      assert.dom('span.tag .d-icon').hasClass('d-close', 'DenaliTag has the specified icon in the back');
      const iconBackClass = 'iconBackClass';
      assert.dom('span.tag .d-close').doesNotHaveClass(iconBackClass, 'DenaliTag does not have `iconBackClass` class by default');
      this.set('iconBackClass', iconBackClass);
      assert.dom('span.tag .d-icon').hasClass(iconBackClass, 'DenaliTag has the specified `iconBackClass`');
      this.set('onIconBackClick', () => assert.ok(true, '`onIconBackClick` fires on click'));
      await (0, _testHelpers.click)('.d-close');
    });
  });
});
define("dummy/tests/integration/components/denali-text-area-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-text-area', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTextArea>My Input</ DenaliTextArea>
      */
      {
        "id": "/PDipRzc",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"My Input\"]],[]]]]]],[],false,[\"denali-text-area\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input textarea').exists('An textarea is rendered within a wrapper div with class `.input`');
      assert.dom('.input textarea').isNotDisabled('The textarea is not disabled by default');
      assert.dom('.input textarea').hasValue('My Input', 'The textarea has the specified value');
    });
    (0, _qunit.test)('states', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTextArea @state={{this.state}} @errorMsg="error"/>
      */
      {
        "id": "O9YBFDVq",
        "block": "[[[8,[39,0],null,[[\"@state\",\"@errorMsg\"],[[30,0,[\"state\"]],\"error\"]],null]],[],false,[\"denali-text-area\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('state', 'active');
      assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');
      this.set('state', 'error');
      assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class for error');
    });
    (0, _qunit.test)('disabled', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTextArea disabled={{true}}/>
      */
      {
        "id": "mwj7g8Hd",
        "block": "[[[8,[39,0],[[16,\"disabled\",true]],null,null]],[],false,[\"denali-text-area\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input textarea').isDisabled('The textarea is disabled when specified');
    });
    (0, _qunit.test)('placeholder', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTextArea placeholder="Text field"/>
      */
      {
        "id": "QYhBdofU",
        "block": "[[[8,[39,0],[[24,\"placeholder\",\"Text field\"]],null,null]],[],false,[\"denali-text-area\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input textarea').hasAttribute('placeholder', 'Text field', 'The textarea is has the specified placeholder');
    });
    (0, _qunit.test)('error message', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTextArea @state="error" @errorMsg={{this.errorMsg}} />
      */
      {
        "id": "0sxWqABf",
        "block": "[[[8,[39,0],null,[[\"@state\",\"@errorMsg\"],[\"error\",[30,0,[\"errorMsg\"]]]],null]],[],false,[\"denali-text-area\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class.');
      this.set('errorMsg', 'Email Invalid');
      assert.dom('.input.is-error .message').hasText('Email Invalid', 'The specified error message is rendered');
    });
    (0, _qunit.test)('actions', async function (assert) {
      assert.expect(2);
      this.set('handleInput', event => {
        assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTextArea {{on 'input' this.handleInput}} />
      */
      {
        "id": "iHyDU+C2",
        "block": "[[[8,[39,0],[[4,[38,1],[\"input\",[30,0,[\"handleInput\"]]],null]],null,null]],[],false,[\"denali-text-area\",\"on\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      await (0, _testHelpers.fillIn)('.input textarea', 'Random Text');
      this.set('handleInput', event => {
        assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
      });
      this.element.querySelector('.input textarea').value = 'More Random Text';
      this.element.querySelector('.input textarea').dispatchEvent(new Event('input'));
    });
    (0, _qunit.test)('wrapperClass', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTextArea
              @wrapperClass={{this.wrapperClass}}
            />
          
      */
      {
        "id": "/+PBTDHn",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@wrapperClass\"],[[30,0,[\"wrapperClass\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-text-area\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      const wrapperClass = 'wrapperClass';
      assert.dom('.input').doesNotHaveClass(wrapperClass, '`DenaliTextArea` does not have custom wrapper class by default');
      this.set('wrapperClass', wrapperClass);
      assert.dom('.input').hasClass(wrapperClass, '`DenaliTextArea` has custom specified wrapper class');
    });
  });
});
define("dummy/tests/integration/components/denali-title-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | denali-title', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTitle />
      */
      {
        "id": "QUyuR3N/",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-title\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('div.title').exists('DenaliTitle can render.');
    });
    (0, _qunit.test)('it renders with a title argument', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTitle @title={{this.title}} />
      */
      {
        "id": "rc8kZr7I",
        "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],null]],[],false,[\"denali-title\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('title', 'My Title');
      assert.dom('span').hasClass('bar', 'DenaliTitle has a bar.');
      assert.dom('div.title-text').exists('DenaliTitle has a title-text class.');
      assert.dom('h3').hasTextContaining('My Title', 'DenaliTitle renders a title using an argument.');
    });
    (0, _qunit.test)('it renders with a caption argument', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliTitle @title={{this.title}} @caption={{this.caption}} />
      */
      {
        "id": "EJObRvn7",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@caption\"],[[30,0,[\"title\"]],[30,0,[\"caption\"]]]],null]],[],false,[\"denali-title\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('caption', 'My Caption');
      assert.dom('h6').doesNotExist('DenaliTitle does not render a caption without a title.');
      this.set('title', 'My Title');
      assert.dom('h6').hasTextContaining('My Caption', 'DenaliTitle renders a caption using an argument.');
    });
    (0, _qunit.test)('it renders with block components', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "6IyFpR54",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"h1\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h1\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h2\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h2\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h3\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h3\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h4\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h4\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h5\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h5\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h6\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h6\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Title\"],false,[\"denali-title\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
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
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "2iQw984M",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@hasWideBar\"],[[30,0,[\"hasWideBar\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"h1\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"title\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Caption\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"caption\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Title\"],false,[\"denali-title\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('hasWideBar', true);
      assert.dom('span.bar').hasClass('is-wide', 'DenaliTitle has a wide bar.');
    });
    (0, _qunit.test)('it supports statuses for bar', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliTitle @backgroundStatus={{this.backgroundStatus}} />
          
      */
      {
        "id": "rTRAAcwh",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@backgroundStatus\"],[[30,0,[\"backgroundStatus\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-title\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('span.bar').exists('DenaliTitle can render without a backgroundStatus set');
      this.set('backgroundStatus', 'danger');
      assert.dom('span.bar').hasClass('has-bg-status-danger', 'DenaliTitle has background status of danger when `@backgroundStatus` arg is set to danger');
      this.set('backgroundStatus', 'warning');
      assert.dom('span.bar').hasClass('has-bg-status-warning', 'DenaliTitle has background status of warning when `@backgroundStatus` arg is set to warning');
      this.set('backgroundStatus', 'success');
      assert.dom('span.bar').hasClass('has-bg-status-success', 'DenaliTitle has background status of success when `@backgroundStatus` arg is set to success');
      this.set('backgroundStatus', 'info');
      assert.dom('span.bar').hasClass('has-bg-status-info', 'DenaliTitle has background status of info when `@backgroundStatus` arg is set to info');
    });
  });
});
define("dummy/tests/integration/components/denali-title/heading-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  const templates = Object.entries({
    h1: (0, _templateFactory.createTemplateFactory)(
    /*
      
        <DenaliTitle::H1 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H1>
      
    */
    {
      "id": "+m3KZQkU",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h1\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h2: (0, _templateFactory.createTemplateFactory)(
    /*
      
        <DenaliTitle::H2 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H2>
      
    */
    {
      "id": "5LNu5Sli",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h2\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h3: (0, _templateFactory.createTemplateFactory)(
    /*
      
        <DenaliTitle::H3 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H3>, 
      
    */
    {
      "id": "HvivPuIv",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\", \\n  \"]],[],false,[\"denali-title/h3\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h4: (0, _templateFactory.createTemplateFactory)(
    /*
      
        <DenaliTitle::H4 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H4>
      
    */
    {
      "id": "Op9Ptf+6",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h4\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h5: (0, _templateFactory.createTemplateFactory)(
    /*
      
        <DenaliTitle::H5 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H5>
      
    */
    {
      "id": "UO0N1QVQ",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h5\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h6: (0, _templateFactory.createTemplateFactory)(
    /*
      
        <DenaliTitle::H6 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H6>
      
    */
    {
      "id": "sXwqXgms",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h6\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    })
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
        assert.dom(heading).doesNotHaveClass('is-regular', `Denali::${heading.toUpperCase()} does not have regular styling by default`);
        this.set('isRegular', 'true');
        assert.dom(heading).hasClass('is-regular', `Denali::${heading.toUpperCase()} has regular styling when @isRegular arg is set to true`);
      }
    });
    (0, _qunit.test)('it supports upper casing', async function (assert) {
      for (const [heading, template] of templates) {
        await (0, _testHelpers.render)(template);
        this.set('title', 'My Title');
        this.set('isUpperCase', undefined);
        assert.dom(heading).doesNotHaveClass('upper', `Denali::${heading.toUpperCase()} does not have upper case styling by default`);
        this.set('isUpperCase', 'true');
        assert.dom(heading).hasClass('upper', `Denali::${heading.toUpperCase()} has upper case styling when @isUpperCase arg is set to true`);
      }
    });
    (0, _qunit.test)('it supports statuses', async function (assert) {
      for (const [heading, template] of templates) {
        await (0, _testHelpers.render)(template);
        this.set('title', 'My Title');
        this.set('status', undefined);
        assert.dom(heading).exists(`DenaliTitle::${heading.toUpperCase()} can render without a status set`);
        this.set('status', 'danger');
        assert.dom(heading).hasClass('is-status-danger', `DenaliTitle::${heading.toUpperCase()} has status of danger when @status arg is set to danger`);
        this.set('status', 'warning');
        assert.dom(heading).hasClass('is-status-warning', `DenaliTitle::${heading.toUpperCase()} has status of warning when @status arg is set to warning`);
        this.set('status', 'success');
        assert.dom(heading).hasClass('is-status-success', `DenaliTitle::${heading.toUpperCase()} has status of success when @status arg is set to success`);
        this.set('status', 'info');
        assert.dom(heading).hasClass('is-status-info', `DenaliTitle::${heading.toUpperCase()} has status of info when @status arg is set to info`);
      }
    });
  });
});
define("dummy/tests/integration/components/denali-toggle-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  const option = {
    text: 'Item 1'
  };
  (0, _qunit.module)('Integration | Component | denali-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', async function (assert) {
      assert.expect(1);
      (0, _testHelpers.setupOnerror)(function (_ref2) {
        let {
          message
        } = _ref2;
        assert.equal(message, 'Failed prop type: The prop `options` is marked as required in `DenaliToggleComponent`, but its value is `undefined`.', 'If @args() contains a PropType validator, an error will be thrown if the value is incorrect');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DenaliToggle />
      */
      {
        "id": "A54dpGA5",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
    });
    (0, _qunit.test)('it renders an option string', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliToggle @options={{array "Item 1"}} as |option|>
              {{option}}
            </DenaliToggle>
          
      */
      {
        "id": "0b/UUDmu",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],[\"Item 1\"],null]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\",\"array\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('ul').exists('DenaliToggle renders a list.');
      assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders text.');
    });
    (0, _qunit.test)('it renders an option object', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliToggle @options={{array (hash text="Item 1")}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
      {
        "id": "hodVppQt",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],[[28,[37,2],null,[[\"text\"],[\"Item 1\"]]]],null]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\",\"array\",\"hash\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('ul').exists('DenaliToggle renders a list.');
      assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders an object.');
    });
    (0, _qunit.test)('an option is active', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliToggle @options={{this.options}} @activeOption={{this.activeOption}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
      {
        "id": "SG5imNmd",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@activeOption\"],[[30,0,[\"options\"]],[30,0,[\"activeOption\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', [option]);
      assert.dom('li').doesNotHaveClass('is-active', 'DenaliToggle options are not active by default');
      this.set('activeOption', option);
      assert.dom('li').hasClass('is-active', 'DenaliToggle option is active when `@activeOption` arg is set');
    });
    (0, _qunit.test)('an option is disabled', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliToggle @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
      {
        "id": "Eunmap2H",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@disabledOptions\"],[[30,0,[\"options\"]],[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', [option]);
      assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliToggle options are not disabled by default');
      this.set('disabled', [option]);
      assert.dom('li').hasClass('is-disabled', 'DenaliToggle option is disabled when `@isDisabled` arg is set to true');
    });
    (0, _qunit.test)('it supports small size', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliToggle @options={{this.options}} @isSmall={{this.isSmall}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
      {
        "id": "1B06n7Bh",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@isSmall\"],[[30,0,[\"options\"]],[30,0,[\"isSmall\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', [option]);
      assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
      this.set('isSmall', 'true');
      assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');
    });
    (0, _qunit.test)('it supports inverse colors', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DenaliToggle @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
              {{option.text}}
            </DenaliToggle>
          
      */
      {
        "id": "ELc2rqlj",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@isInverse\"],[[30,0,[\"options\"]],[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', [option]);
      assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
      this.set('isInverse', 'true');
      assert.dom('.toggle').hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');
    });
    (0, _qunit.test)('it handles change events', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
        "id": "fnTdyd2a",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@activeOption\",\"@disabledOptions\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"activeOption\"]],[30,0,[\"disabled\"]],[30,0,[\"changeActive\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      this.set('options', [{
        text: 'Item 1'
      }, {
        text: 'Item 2'
      }, {
        text: 'Item 3'
      }]);
      this.set('activeOption', this.options[2]);
      assert.dom('li:nth-child(3)').hasClass('is-active', 'The third option is active');
      this.set('changeActive', option => {
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
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
