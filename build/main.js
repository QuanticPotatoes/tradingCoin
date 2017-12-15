require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("koa-mount");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }]
  },

  build: {
    vendor: ['vuetify', 'vue-i18n', 'axios'],
    loader: [{
      test: /\/.styl$/,
      loader: ['style', 'css', 'stylus']
    }]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~plugins/vuetify.js', '~/plugins/i18n.js'],
  css: ['~assets/css/main.css', '~assets/css/app.styl'],

  loading: { color: '#3B8070' }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = __webpack_require__(0);

var _koa2 = _interopRequireDefault(_koa);

var _koaMount = __webpack_require__(2);

var _koaMount2 = _interopRequireDefault(_koaMount);

var _login = __webpack_require__(9);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.use((0, _koaMount2.default)('/login', _login2.default));

exports.default = app;

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = __webpack_require__(0);

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = __webpack_require__(10);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var router = new _koaRouter2.default();

router.post('/', function (ctx, next) {
  var _ctx$request$body = ctx.request.body,
      email = _ctx$request$body.email,
      password = _ctx$request$body.password;

  if (email === 'admin' && password === 'password') {
    ctx.session.authUser = { username: 'admin' };
    ctx.response.body = { username: 'admin' };
    return;
  }
  ctx.throw(401, 'bad credentials');
});

app.use(router.routes());
app.use(router.allowedMethods());

exports.default = app;

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(5);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var start = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new _koa2.default();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;
            config = __webpack_require__(3);

            config.dev = !(app.env === 'production');

            nuxt = new _nuxt.Nuxt(config);

            if (!config.dev) {
              _context2.next = 10;
              break;
            }

            builder = new _nuxt.Builder(nuxt);
            _context2.next = 10;
            return builder.build();

          case 10:

            app.keys = ['i love potatoes'];
            app.use((0, _koaSession2.default)(app));
            app.use((0, _koaBodyparser2.default)());
            app.use((0, _koaMount2.default)('/api', _api2.default));

            app.use(function () {
              var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200;return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port);
          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

var _koa = __webpack_require__(0);

var _koa2 = _interopRequireDefault(_koa);

var _koaMount = __webpack_require__(2);

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaBodyparser = __webpack_require__(1);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaSession = __webpack_require__(12);

var _koaSession2 = _interopRequireDefault(_koaSession);

var _nuxt = __webpack_require__(8);

var _api = __webpack_require__(4);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

start();

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ }
/******/ ]);
//# sourceMappingURL=main.map