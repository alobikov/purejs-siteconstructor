// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"constrains/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.$el = document.querySelector("#site");
  }

  _createClass(Site, [{
    key: "render",
    value: function render(models) {
      var _this = this;

      this.$el.innerHTML = "";
      models.forEach(function (model) {
        _this.$el.insertAdjacentHTML("beforeend", model.toHtml());
      });
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{}],"../utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;
exports.col = col;
exports.css = css;
exports.block = block;
exports.sizedBox = sizedBox;
exports.imageBlock = imageBlock;

function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<div style=\"".concat(styles, "\" class='row'>").concat(content, "</div>");
}

function col(content) {
  return "<div class='col-sm'>".concat(content, "</div>");
}

function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof styles === "string") return styles;

  var toString = function toString(key) {
    return "".concat(key, ": ").concat(styles[key]);
  };

  return Object.keys(styles).map(toString).join(";");
}

function block(type) {
  return "\n    <form name=\"".concat(type, "\">\n    <h5>").concat(type, "</h5>\n    <div class=\"form-group\">\n    <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n    </div>\n    <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-sm\">Add</button>\n    </form>\n    <ht />\n    ");
}

function sizedBox(height) {
  return "\n  <div style=\"height: ".concat(height, "px\"></div>\n  ");
}

function imageBlock() {
  return "\n    <form name=\"image block\">\n      <h5>image block</h5>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"image link\" value=\"https://image.freepik.com/free-vector/construction-site_23-2147513565.jpg\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n      </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\">Add</button>\n    </form>\n    <ht />\n    ";
}
},{}],"constrains/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageBody = exports.TextColumnsBody = exports.TextBody = exports.TitleBody = void 0;

var _utils = require("../../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Body = /*#__PURE__*/function () {
  function Body(value, options) {
    _classCallCheck(this, Body);

    this.value = value;
    this.options = options;
  }

  _createClass(Body, [{
    key: "toHtml",
    value: function toHtml() {
      throw new Error("toHtml method must be implemented");
    }
  }]);

  return Body;
}();

var TitleBody = /*#__PURE__*/function (_Body) {
  _inherits(TitleBody, _Body);

  var _super = _createSuper(TitleBody);

  function TitleBody(value, options) {
    _classCallCheck(this, TitleBody);

    return _super.call(this, value, options);
  }

  _createClass(TitleBody, [{
    key: "toHtml",
    value: function toHtml() {
      var _this$options = this.options,
          styles = _this$options.styles,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? "h1" : _this$options$tag;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), (0, _utils.css)(styles));
    }
  }]);

  return TitleBody;
}(Body);

exports.TitleBody = TitleBody;

var TextBody = /*#__PURE__*/function (_Body2) {
  _inherits(TextBody, _Body2);

  var _super2 = _createSuper(TextBody);

  function TextBody(value, options) {
    _classCallCheck(this, TextBody);

    return _super2.call(this, value, options);
  }

  _createClass(TextBody, [{
    key: "toHtml",
    value: function toHtml() {
      var _this$options2 = this.options,
          styles = _this$options2.styles,
          _this$options2$tag = _this$options2.tag,
          tag = _this$options2$tag === void 0 ? "h1" : _this$options2$tag;
      return (0, _utils.row)((0, _utils.col)("<p>".concat(this.value, "</p>")), (0, _utils.css)(styles));
    }
  }]);

  return TextBody;
}(Body);

exports.TextBody = TextBody;

var TextColumnsBody = /*#__PURE__*/function (_Body3) {
  _inherits(TextColumnsBody, _Body3);

  var _super3 = _createSuper(TextColumnsBody);

  function TextColumnsBody(value, options) {
    _classCallCheck(this, TextColumnsBody);

    return _super3.call(this, value, options);
  }

  _createClass(TextColumnsBody, [{
    key: "toHtml",
    value: function toHtml() {
      var _this$options3 = this.options,
          styles = _this$options3.styles,
          _this$options3$tag = _this$options3.tag,
          tag = _this$options3$tag === void 0 ? "h1" : _this$options3$tag;
      var content = this.value.map(_utils.col).join("");
      return (0, _utils.row)(content, (0, _utils.css)(styles));
    }
  }]);

  return TextColumnsBody;
}(Body);

exports.TextColumnsBody = TextColumnsBody;

var ImageBody = /*#__PURE__*/function (_Body4) {
  _inherits(ImageBody, _Body4);

  var _super4 = _createSuper(ImageBody);

  function ImageBody(value, options) {
    _classCallCheck(this, ImageBody);

    return _super4.call(this, value, options);
  }

  _createClass(ImageBody, [{
    key: "toHtml",
    value: function toHtml() {
      var _this$options4 = this.options,
          styles = _this$options4.styles,
          is = _this$options4.imageStyles,
          _this$options4$alt = _this$options4.alt,
          alt = _this$options4$alt === void 0 ? "" : _this$options4$alt;
      return (0, _utils.row)("\n      <img src=".concat(this.value, " alt=\"").concat(alt, "\" style=\"").concat((0, _utils.css)(is), "\">"), (0, _utils.css)(styles));
    }
  }]);

  return ImageBody;
}(Body);

exports.ImageBody = ImageBody;
},{"../../utils":"../utils.js"}],"constrains/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _utils = require("../../utils");

var _model = require("./model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, addCallback) {
    _classCallCheck(this, Sidebar);

    this.$el = document.querySelector(selector);
    this.updateSite = addCallback;
    this.init();
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$el.insertAdjacentHTML("afterbegin", this.template);
      this.$el.insertAdjacentHTML("afterbegin", "<h2>ToolBox</h2>");
      this.$el.addEventListener("submit", this.add.bind(this));
    }
  }, {
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var type = event.target.name;
      var value = event.target.value.value;
      var styles = event.target.styles.value;
      var block = this.reducer(type, value, styles);
      event.target.value.value = "";
      event.target.styles.value = "";
      this.updateSite(block);
    }
  }, {
    key: "reducer",
    value: function reducer(type, value, styles) {
      switch (type) {
        case "text block":
          return new _model.TextBody(value, {
            styles: styles
          });

        case "title block":
          return new _model.TitleBody(value, {
            styles: styles
          });

        case "image block":
          return new _model.ImageBody(value, {
            styles: styles
          });

        default:
          return new _model.TextBody("Bad block type", {});
      }
    }
  }, {
    key: "template",
    get: function get() {
      return [(0, _utils.sizedBox)(20), (0, _utils.block)("text block"), (0, _utils.sizedBox)(40), (0, _utils.block)("title block"), (0, _utils.sizedBox)(40), (0, _utils.imageBlock)()].join("");
    }
  }]);

  return Sidebar;
}();

exports.Sidebar = Sidebar;
},{"../../utils":"../utils.js","./model":"constrains/model.js"}],"constrains/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _site = require("./site");

var _sidebar = require("./sidebar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site("#site");
      site.render(this.model);

      var updateCallback = function updateCallback(newBlock) {
        console.log(newBlock);

        _this.model.push(newBlock);

        site.render(_this.model);
      };

      new _sidebar.Sidebar("#panel", updateCallback);
    }
  }]);

  return App;
}();

exports.default = App;
},{"./site":"constrains/site.js","./sidebar":"constrains/sidebar.js"}],"assets/website-construction.jpg":[function(require,module,exports) {
module.exports = "/website-construction.d668179b.jpg";
},{}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _websiteConstruction = _interopRequireDefault(require("./assets/website-construction.jpg"));

var _model = require("./constrains/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = [new _model.TitleBody("Site Constructor Powered by Pure JavaScript", {
  styles: {
    color: "#a3520a",
    "text-align": "center",
    padding: "1.5rem",
    "font-weight": "bold"
  },
  tag: "h1"
}), new _model.ImageBody(_websiteConstruction.default, {
  styles: {
    "padding-bottom": "2rem",
    display: "flex",
    "justify-content": "center"
  },
  imageStyles: {
    width: "800px",
    height: "auto"
  },
  alt: "Cup of coffee" // styles: "display: block;  margin-left: auto; margin-right: auto",

}), new _model.TextColumnsBody(["Features", "Learned"], {
  //? destructuring with default value, destructuring with rename
  styles: {
    background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
    padding: "2rem",
    color: "#fff",
    "font-weight": "bold"
  }
}), new _model.TextBody("Models built as classes", {
  styles: {
    background: "linear-gradient(to bottom, #f2994a, #f2c94c)",
    padding: "1rem",
    "font-weight": "bold"
  }
}), new _model.TextBody("No external libraries used!", {
  styles: {
    background: "linear-gradient(to bottom, #f2994a, #f2c94c)",
    padding: "1rem",
    "font-weight": "bold"
  }
})];
exports.model = model;
},{"./assets/website-construction.jpg":"assets/website-construction.jpg","./constrains/model":"constrains/model.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _app = _interopRequireDefault(require("./constrains/app"));

var _model = require("./model");

require("./styles/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app.default(_model.model).init();
},{"./constrains/app":"constrains/app.js","./model":"model.js","./styles/main.css":"styles/main.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56401" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map