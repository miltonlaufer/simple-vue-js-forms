(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./node_modules/element-ui/lib/menu-item.js":
/*!**************************************************!*\
  !*** ./node_modules/element-ui/lib/menu-item.js ***!
  \**************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports =\n/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== \'undefined\' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: \'Module\' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, \'__esModule\', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === \'object\' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, \'default\', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != \'string\') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module[\'default\']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, \'a\', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = "/dist/";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 101);\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ 0:\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n"use strict";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === \'function\'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = \'data-v-\' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== \'undefined\') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn\'t\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n/***/ }),\n\n/***/ 101:\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n"use strict";\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu/src/menu-item.vue?vue&type=template&id=2a5dbfea&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "li",\n    {\n      staticClass: "el-menu-item",\n      class: {\n        "is-active": _vm.active,\n        "is-disabled": _vm.disabled\n      },\n      style: [\n        _vm.paddingStyle,\n        _vm.itemStyle,\n        { backgroundColor: _vm.backgroundColor }\n      ],\n      attrs: { role: "menuitem", tabindex: "-1" },\n      on: {\n        click: _vm.handleClick,\n        mouseenter: _vm.onMouseEnter,\n        focus: _vm.onMouseEnter,\n        blur: _vm.onMouseLeave,\n        mouseleave: _vm.onMouseLeave\n      }\n    },\n    [\n      _vm.parentMenu.$options.componentName === "ElMenu" &&\n      _vm.rootMenu.collapse &&\n      _vm.$slots.title\n        ? _c("el-tooltip", { attrs: { effect: "dark", placement: "right" } }, [\n            _c(\n              "div",\n              { attrs: { slot: "content" }, slot: "content" },\n              [_vm._t("title")],\n              2\n            ),\n            _c(\n              "div",\n              {\n                staticStyle: {\n                  position: "absolute",\n                  left: "0",\n                  top: "0",\n                  height: "100%",\n                  width: "100%",\n                  display: "inline-block",\n                  "box-sizing": "border-box",\n                  padding: "0 20px"\n                }\n              },\n              [_vm._t("default")],\n              2\n            )\n          ])\n        : [_vm._t("default"), _vm._t("title")]\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./packages/menu/src/menu-item.vue?vue&type=template&id=2a5dbfea&\n\n// EXTERNAL MODULE: ./packages/menu/src/menu-mixin.js\nvar menu_mixin = __webpack_require__(36);\n\n// EXTERNAL MODULE: external "element-ui/lib/tooltip"\nvar tooltip_ = __webpack_require__(29);\nvar tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);\n\n// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"\nvar emitter_ = __webpack_require__(4);\nvar emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu/src/menu-item.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ var menu_itemvue_type_script_lang_js_ = ({\n  name: \'ElMenuItem\',\n\n  componentName: \'ElMenuItem\',\n\n  mixins: [menu_mixin["a" /* default */], emitter_default.a],\n\n  components: { ElTooltip: tooltip_default.a },\n\n  props: {\n    index: {\n      default: null,\n      validator: function validator(val) {\n        return typeof val === \'string\' || val === null;\n      }\n    },\n    route: [String, Object],\n    disabled: Boolean\n  },\n  computed: {\n    active: function active() {\n      return this.index === this.rootMenu.activeIndex;\n    },\n    hoverBackground: function hoverBackground() {\n      return this.rootMenu.hoverBackground;\n    },\n    backgroundColor: function backgroundColor() {\n      return this.rootMenu.backgroundColor || \'\';\n    },\n    activeTextColor: function activeTextColor() {\n      return this.rootMenu.activeTextColor || \'\';\n    },\n    textColor: function textColor() {\n      return this.rootMenu.textColor || \'\';\n    },\n    mode: function mode() {\n      return this.rootMenu.mode;\n    },\n    itemStyle: function itemStyle() {\n      var style = {\n        color: this.active ? this.activeTextColor : this.textColor\n      };\n      if (this.mode === \'horizontal\' && !this.isNested) {\n        style.borderBottomColor = this.active ? this.rootMenu.activeTextColor ? this.activeTextColor : \'\' : \'transparent\';\n      }\n      return style;\n    },\n    isNested: function isNested() {\n      return this.parentMenu !== this.rootMenu;\n    }\n  },\n  methods: {\n    onMouseEnter: function onMouseEnter() {\n      if (this.mode === \'horizontal\' && !this.rootMenu.backgroundColor) return;\n      this.$el.style.backgroundColor = this.hoverBackground;\n    },\n    onMouseLeave: function onMouseLeave() {\n      if (this.mode === \'horizontal\' && !this.rootMenu.backgroundColor) return;\n      this.$el.style.backgroundColor = this.backgroundColor;\n    },\n    handleClick: function handleClick() {\n      if (!this.disabled) {\n        this.dispatch(\'ElMenu\', \'item-click\', this);\n        this.$emit(\'click\', this);\n      }\n    }\n  },\n  mounted: function mounted() {\n    this.parentMenu.addItem(this);\n    this.rootMenu.addItem(this);\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.parentMenu.removeItem(this);\n    this.rootMenu.removeItem(this);\n  }\n});\n// CONCATENATED MODULE: ./packages/menu/src/menu-item.vue?vue&type=script&lang=js&\n /* harmony default export */ var src_menu_itemvue_type_script_lang_js_ = (menu_itemvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./packages/menu/src/menu-item.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["a" /* default */])(\n  src_menu_itemvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "packages/menu/src/menu-item.vue"\n/* harmony default export */ var menu_item = (component.exports);\n// CONCATENATED MODULE: ./packages/menu-item/index.js\n\n\n/* istanbul ignore next */\nmenu_item.install = function (Vue) {\n  Vue.component(menu_item.name, menu_item);\n};\n\n/* harmony default export */ var packages_menu_item = __webpack_exports__["default"] = (menu_item);\n\n/***/ }),\n\n/***/ 29:\n/***/ (function(module, exports) {\n\nmodule.exports = __webpack_require__(/*! element-ui/lib/tooltip */ "./node_modules/element-ui/lib/tooltip.js");\n\n/***/ }),\n\n/***/ 36:\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n"use strict";\n/* harmony default export */ __webpack_exports__["a"] = ({\n  inject: [\'rootMenu\'],\n  computed: {\n    indexPath: function indexPath() {\n      var path = [this.index];\n      var parent = this.$parent;\n      while (parent.$options.componentName !== \'ElMenu\') {\n        if (parent.index) {\n          path.unshift(parent.index);\n        }\n        parent = parent.$parent;\n      }\n      return path;\n    },\n    parentMenu: function parentMenu() {\n      var parent = this.$parent;\n      while (parent && [\'ElMenu\', \'ElSubmenu\'].indexOf(parent.$options.componentName) === -1) {\n        parent = parent.$parent;\n      }\n      return parent;\n    },\n    paddingStyle: function paddingStyle() {\n      if (this.rootMenu.mode !== \'vertical\') return {};\n\n      var padding = 20;\n      var parent = this.$parent;\n\n      if (this.rootMenu.collapse) {\n        padding = 20;\n      } else {\n        while (parent && parent.$options.componentName !== \'ElMenu\') {\n          if (parent.$options.componentName === \'ElSubmenu\') {\n            padding += 20;\n          }\n          parent = parent.$parent;\n        }\n      }\n      return { paddingLeft: padding + \'px\' };\n    }\n  }\n});\n\n/***/ }),\n\n/***/ 4:\n/***/ (function(module, exports) {\n\nmodule.exports = __webpack_require__(/*! element-ui/lib/mixins/emitter */ "./node_modules/element-ui/lib/mixins/emitter.js");\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC11aS9saWIvbWVudS1pdGVtLmpzPzRjYjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyRkFBMkYsMkJBQTJCLEVBQUU7QUFDeEg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXhELE9BQU87O0FBRVAsVUFBVSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9lbGVtZW50LXVpL2xpYi9tZW51LWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwMSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIDA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBub3JtYWxpemVDb21wb25lbnQ7IH0pO1xuLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5mdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMTAxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYWNrYWdlcy9tZW51L3NyYy9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhNWRiZmVhJlxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxpXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZWwtbWVudS1pdGVtXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICBcImlzLWFjdGl2ZVwiOiBfdm0uYWN0aXZlLFxuICAgICAgICBcImlzLWRpc2FibGVkXCI6IF92bS5kaXNhYmxlZFxuICAgICAgfSxcbiAgICAgIHN0eWxlOiBbXG4gICAgICAgIF92bS5wYWRkaW5nU3R5bGUsXG4gICAgICAgIF92bS5pdGVtU3R5bGUsXG4gICAgICAgIHsgYmFja2dyb3VuZENvbG9yOiBfdm0uYmFja2dyb3VuZENvbG9yIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyByb2xlOiBcIm1lbnVpdGVtXCIsIHRhYmluZGV4OiBcIi0xXCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBfdm0uaGFuZGxlQ2xpY2ssXG4gICAgICAgIG1vdXNlZW50ZXI6IF92bS5vbk1vdXNlRW50ZXIsXG4gICAgICAgIGZvY3VzOiBfdm0ub25Nb3VzZUVudGVyLFxuICAgICAgICBibHVyOiBfdm0ub25Nb3VzZUxlYXZlLFxuICAgICAgICBtb3VzZWxlYXZlOiBfdm0ub25Nb3VzZUxlYXZlXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0ucGFyZW50TWVudS4kb3B0aW9ucy5jb21wb25lbnROYW1lID09PSBcIkVsTWVudVwiICYmXG4gICAgICBfdm0ucm9vdE1lbnUuY29sbGFwc2UgJiZcbiAgICAgIF92bS4kc2xvdHMudGl0bGVcbiAgICAgICAgPyBfYyhcImVsLXRvb2x0aXBcIiwgeyBhdHRyczogeyBlZmZlY3Q6IFwiZGFya1wiLCBwbGFjZW1lbnQ6IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwiY29udGVudFwiIH0sIHNsb3Q6IFwiY29udGVudFwiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3QoXCJ0aXRsZVwiKV0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBcImJveC1zaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMjBweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IFtfdm0uX3QoXCJkZWZhdWx0XCIpLCBfdm0uX3QoXCJ0aXRsZVwiKV1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3BhY2thZ2VzL21lbnUvc3JjL21lbnUtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmE1ZGJmZWEmXG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9wYWNrYWdlcy9tZW51L3NyYy9tZW51LW1peGluLmpzXG52YXIgbWVudV9taXhpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IGV4dGVybmFsIFwiZWxlbWVudC11aS9saWIvdG9vbHRpcFwiXG52YXIgdG9vbHRpcF8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcbnZhciB0b29sdGlwX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHRvb2x0aXBfKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCBcImVsZW1lbnQtdWkvbGliL21peGlucy9lbWl0dGVyXCJcbnZhciBlbWl0dGVyXyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgZW1pdHRlcl9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihlbWl0dGVyXyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhY2thZ2VzL21lbnUvc3JjL21lbnUtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cblxuXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgbWVudV9pdGVtdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfID0gKHtcbiAgbmFtZTogJ0VsTWVudUl0ZW0nLFxuXG4gIGNvbXBvbmVudE5hbWU6ICdFbE1lbnVJdGVtJyxcblxuICBtaXhpbnM6IFttZW51X21peGluW1wiYVwiIC8qIGRlZmF1bHQgKi9dLCBlbWl0dGVyX2RlZmF1bHQuYV0sXG5cbiAgY29tcG9uZW50czogeyBFbFRvb2x0aXA6IHRvb2x0aXBfZGVmYXVsdC5hIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBpbmRleDoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsID09PSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgcm91dGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW5cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3RpdmU6IGZ1bmN0aW9uIGFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4ID09PSB0aGlzLnJvb3RNZW51LmFjdGl2ZUluZGV4O1xuICAgIH0sXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiBmdW5jdGlvbiBob3ZlckJhY2tncm91bmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290TWVudS5ob3ZlckJhY2tncm91bmQ7XG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZ1bmN0aW9uIGJhY2tncm91bmRDb2xvcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvb3RNZW51LmJhY2tncm91bmRDb2xvciB8fCAnJztcbiAgICB9LFxuICAgIGFjdGl2ZVRleHRDb2xvcjogZnVuY3Rpb24gYWN0aXZlVGV4dENvbG9yKCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdE1lbnUuYWN0aXZlVGV4dENvbG9yIHx8ICcnO1xuICAgIH0sXG4gICAgdGV4dENvbG9yOiBmdW5jdGlvbiB0ZXh0Q29sb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290TWVudS50ZXh0Q29sb3IgfHwgJyc7XG4gICAgfSxcbiAgICBtb2RlOiBmdW5jdGlvbiBtb2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdE1lbnUubW9kZTtcbiAgICB9LFxuICAgIGl0ZW1TdHlsZTogZnVuY3Rpb24gaXRlbVN0eWxlKCkge1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICBjb2xvcjogdGhpcy5hY3RpdmUgPyB0aGlzLmFjdGl2ZVRleHRDb2xvciA6IHRoaXMudGV4dENvbG9yXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnICYmICF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgIHN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gdGhpcy5hY3RpdmUgPyB0aGlzLnJvb3RNZW51LmFjdGl2ZVRleHRDb2xvciA/IHRoaXMuYWN0aXZlVGV4dENvbG9yIDogJycgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG4gICAgaXNOZXN0ZWQ6IGZ1bmN0aW9uIGlzTmVzdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50TWVudSAhPT0gdGhpcy5yb290TWVudTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJyAmJiAhdGhpcy5yb290TWVudS5iYWNrZ3JvdW5kQ29sb3IpIHJldHVybjtcbiAgICAgIHRoaXMuJGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuaG92ZXJCYWNrZ3JvdW5kO1xuICAgIH0sXG4gICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcgJiYgIXRoaXMucm9vdE1lbnUuYmFja2dyb3VuZENvbG9yKSByZXR1cm47XG4gICAgICB0aGlzLiRlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICB9LFxuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKCdFbE1lbnUnLCAnaXRlbS1jbGljaycsIHRoaXMpO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLnBhcmVudE1lbnUuYWRkSXRlbSh0aGlzKTtcbiAgICB0aGlzLnJvb3RNZW51LmFkZEl0ZW0odGhpcyk7XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5wYXJlbnRNZW51LnJlbW92ZUl0ZW0odGhpcyk7XG4gICAgdGhpcy5yb290TWVudS5yZW1vdmVJdGVtKHRoaXMpO1xuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vcGFja2FnZXMvbWVudS9zcmMvbWVudS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcbiAvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzcmNfbWVudV9pdGVtdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfID0gKG1lbnVfaXRlbXZ1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyk7IFxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcbnZhciBjb21wb25lbnROb3JtYWxpemVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9wYWNrYWdlcy9tZW51L3NyYy9tZW51LWl0ZW0udnVlXG5cblxuXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuXG52YXIgY29tcG9uZW50ID0gT2JqZWN0KGNvbXBvbmVudE5vcm1hbGl6ZXJbXCJhXCIgLyogZGVmYXVsdCAqL10pKFxuICBzcmNfbWVudV9pdGVtdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChmYWxzZSkgeyB2YXIgYXBpOyB9XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhY2thZ2VzL21lbnUvc3JjL21lbnUtaXRlbS52dWVcIlxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgbWVudV9pdGVtID0gKGNvbXBvbmVudC5leHBvcnRzKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vcGFja2FnZXMvbWVudS1pdGVtL2luZGV4LmpzXG5cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbm1lbnVfaXRlbS5pbnN0YWxsID0gZnVuY3Rpb24gKFZ1ZSkge1xuICBWdWUuY29tcG9uZW50KG1lbnVfaXRlbS5uYW1lLCBtZW51X2l0ZW0pO1xufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcGFja2FnZXNfbWVudV9pdGVtID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobWVudV9pdGVtKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDI5OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVtZW50LXVpL2xpYi90b29sdGlwXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMzY6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9ICh7XG4gIGluamVjdDogWydyb290TWVudSddLFxuICBjb21wdXRlZDoge1xuICAgIGluZGV4UGF0aDogZnVuY3Rpb24gaW5kZXhQYXRoKCkge1xuICAgICAgdmFyIHBhdGggPSBbdGhpcy5pbmRleF07XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy4kcGFyZW50O1xuICAgICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5jb21wb25lbnROYW1lICE9PSAnRWxNZW51Jykge1xuICAgICAgICBpZiAocGFyZW50LmluZGV4KSB7XG4gICAgICAgICAgcGF0aC51bnNoaWZ0KHBhcmVudC5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9LFxuICAgIHBhcmVudE1lbnU6IGZ1bmN0aW9uIHBhcmVudE1lbnUoKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy4kcGFyZW50O1xuICAgICAgd2hpbGUgKHBhcmVudCAmJiBbJ0VsTWVudScsICdFbFN1Ym1lbnUnXS5pbmRleE9mKHBhcmVudC4kb3B0aW9ucy5jb21wb25lbnROYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH0sXG4gICAgcGFkZGluZ1N0eWxlOiBmdW5jdGlvbiBwYWRkaW5nU3R5bGUoKSB7XG4gICAgICBpZiAodGhpcy5yb290TWVudS5tb2RlICE9PSAndmVydGljYWwnKSByZXR1cm4ge307XG5cbiAgICAgIHZhciBwYWRkaW5nID0gMjA7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy4kcGFyZW50O1xuXG4gICAgICBpZiAodGhpcy5yb290TWVudS5jb2xsYXBzZSkge1xuICAgICAgICBwYWRkaW5nID0gMjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC4kb3B0aW9ucy5jb21wb25lbnROYW1lICE9PSAnRWxNZW51Jykge1xuICAgICAgICAgIGlmIChwYXJlbnQuJG9wdGlvbnMuY29tcG9uZW50TmFtZSA9PT0gJ0VsU3VibWVudScpIHtcbiAgICAgICAgICAgIHBhZGRpbmcgKz0gMjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4geyBwYWRkaW5nTGVmdDogcGFkZGluZyArICdweCcgfTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlbWVudC11aS9saWIvbWl4aW5zL2VtaXR0ZXJcIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/element-ui/lib/menu-item.js\n')}}]);