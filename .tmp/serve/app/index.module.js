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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global malarkey:false, moment:false */
	
	'use strict';
	
	var _indexConfig = __webpack_require__(1);
	
	var _indexRoute = __webpack_require__(2);
	
	var _indexRun = __webpack_require__(3);
	
	var _mainMainController = __webpack_require__(4);
	
	var _giftsGiftsController = __webpack_require__(5);
	
	var _appComponentsGithubContributorGithubContributorService = __webpack_require__(6);
	
	var _appComponentsWebDevTecWebDevTecService = __webpack_require__(7);
	
	var _giftsGiftsProductsService = __webpack_require__(8);
	
	var _appComponentsNavbarNavbarDirective = __webpack_require__(9);
	
	var _appComponentsMalarkeyMalarkeyDirective = __webpack_require__(10);
	
	angular.module('generatorGulpAngular', ['ngResource', 'ui.router', 'ngMaterial', 'toastr']).constant('malarkey', malarkey).constant('moment', moment).config(_indexConfig.config).config(_indexRoute.routerConfig).run(_indexRun.runBlock).service('githubContributor', _appComponentsGithubContributorGithubContributorService.GithubContributorService).service('webDevTec', _appComponentsWebDevTecWebDevTecService.WebDevTecService).service('giftsProducts', _giftsGiftsProductsService.GiftsProductsService).controller('MainController', _mainMainController.MainController).controller('GiftsController', _giftsGiftsController.GiftsController).directive('acmeNavbar', _appComponentsNavbarNavbarDirective.NavbarDirective).directive('acmeMalarkey', _appComponentsMalarkeyMalarkeyDirective.MalarkeyDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.config = config;
	
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.routerConfig = routerConfig;
	
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  }).state('gift', {
	    url: '/gifts',
	    templateUrl: 'app/gifts/gifts.html',
	    controller: 'GiftsController',
	    controllerAs: 'gift'
	  });
	
	  $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.runBlock = runBlock;
	
	function runBlock($log) {
	  'ngInject';
	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MainController = (function () {
	  MainController.$inject = ["$timeout", "webDevTec", "toastr"];
	  function MainController($timeout, webDevTec, toastr) {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	
	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1455565054135;
	    this.toastr = toastr;
	
	    this.activate($timeout, webDevTec);
	  }
	
	  _createClass(MainController, [{
	    key: 'activate',
	    value: function activate($timeout, webDevTec) {
	      var _this = this;
	
	      this.getWebDevTec(webDevTec);
	      $timeout(function () {
	        _this.classAnimation = 'rubberBand';
	      }, 4000);
	    }
	  }, {
	    key: 'getWebDevTec',
	    value: function getWebDevTec(webDevTec) {
	      this.awesomeThings = webDevTec.getTec();
	
	      angular.forEach(this.awesomeThings, function (awesomeThing) {
	        awesomeThing.rank = Math.random();
	      });
	    }
	  }, {
	    key: 'showToastr',
	    value: function showToastr() {
	      this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
	      this.classAnimation = '';
	    }
	  }]);
	
	  return MainController;
	})();
	
	exports.MainController = MainController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var GiftsController = (function () {
		GiftsController.$inject = ["giftsProducts", "toastr"];
		function GiftsController(giftsProducts, toastr) {
			'ngInject';
	
			_classCallCheck(this, GiftsController);
	
			this.title = 'Hello, Holi Cow';
			this.inputTitle = 'Default';
			this.boxes = giftsProducts.getList();
			this.classAnimation = '';
			this.toastr = toastr;
		}
	
		_createClass(GiftsController, [{
			key: 'showToastr',
			value: function showToastr() {
				this.toastr.info('First toast');
			}
		}]);
	
		return GiftsController;
	})();
	
	exports.GiftsController = GiftsController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var GithubContributorService = (function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors(limit) {
	      var _this = this;
	
	      if (!limit) {
	        limit = 30;
	      }
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      })['catch'](function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	})();
	
	exports.GithubContributorService = GithubContributorService;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var WebDevTecService = (function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Angular Material Design',
	      'url': 'https://material.angularjs.org/#/',
	      'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
	      'logo': 'angular-material.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }, {
	      'key': 'jade',
	      'title': 'Jade',
	      'url': 'http://jade-lang.com/',
	      'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
	      'logo': 'jade.png'
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);
	
	  return WebDevTecService;
	})();
	
	exports.WebDevTecService = WebDevTecService;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var GiftsProductsService = (function () {
	  function GiftsProductsService() {
	    'ngInject';
	
	    _classCallCheck(this, GiftsProductsService);
	
	    this.products = [{ enName: 'pen', ruName: 'Канцелярская ручка', price: '24000' }, { enName: 'sweet', ruName: 'Леденцы', price: '39000' }, { enName: 'candle', ruName: 'Свеча', price: '91000' }, { enName: 'toy', ruName: 'Игрушка', price: '65000' }, { enName: 'cupwhite', ruName: 'Кружка белая', price: '91000' }, { enName: 'tea', ruName: 'Кофе/Чай', price: '56000' }, { enName: 'honey', ruName: 'Мед', price: '65000' }, { enName: 'notebook', ruName: 'Блокнот в эко обложке', price: '65000' }, { enName: 'cardholder', ruName: 'Визитница', price: '130000' }, { enName: 'sleepmask', ruName: 'Маска для сна', price: '156000' }, { enName: 'ball', ruName: 'Мяч антистресс', price: '56000' }, { enName: 'cookie', ruName: 'Имбирное печенье', price: '33000' }, { enName: 'syrup', ruName: 'Сироп в ассортименте', price: '169000' }, { enName: 'cuptogo', ruName: 'Кружка to go', price: '260000' }, { enName: 'coloring', ruName: 'Раскраска', price: '65000' }, { enName: 'wine', ruName: 'Кружка для глинтвейна', price: '78000' }, { enName: 'spices', ruName: 'Специи в мешочке', price: '52000' }, { enName: 'cinnamon', ruName: 'Палочки корицы', price: '26000' }];
	
	    this.boxes = [{ enName: 'GiftMe Colours',
	      section: '<a href="#large_boxes">Large</a>',
	      price: 450000,
	      productNames: ['notebook', 'ball', 'cuptogo', 'coloring'] }, { enName: 'GiftMe Cheers',
	      section: '<a href="#large_boxes">Large</a>',
	      price: 450000,
	      productNames: ['honey', 'cookie', 'wine', 'spices'] }, { enName: 'GiftMe Smells',
	      section: '<a href="#large_boxes">Large</a>',
	      price: 450000,
	      productNames: ['tea', 'honey', 'cookie', 'syrup'] }, { enName: 'GiftMe Tea',
	      section: '<a href="#medium_boxes">Medium</a>',
	      price: 250000,
	      productNames: ['cupwhite', 'honey', 'tea'] }, { enName: 'GiftMe Profit',
	      section: '<a href="#medium_boxes">Medium</a>',
	      price: 300000,
	      productNames: ['cupwhite', 'notebook', 'cardholder'] }, { enName: 'GiftMe Relax',
	      section: '<a href="#medium_boxes">Medium</a>',
	      price: 250000,
	      productNames: ['tea', 'ball', 'sleepmask'] }, { enName: 'GiftMe Coffee',
	      section: '<a href="#medium_boxes">Medium</a>',
	      price: 300000,
	      productNames: ['tea', 'cookie', 'syrup'] }, { enName: 'GiftMe Sweet',
	      section: '<a href="#small_boxes">Small</a>',
	      price: 59000,
	      productNames: ['sweet'] }, { enName: 'GiftMe Pin',
	      section: '<a href="#small_boxes">Small</a>',
	      price: 79000,
	      productNames: ['toy'] }, { enName: 'GiftMe Light',
	      section: '<a href="#small_boxes">Small</a>',
	      price: 109000,
	      productNames: ['candle'] }];
	  }
	
	  _createClass(GiftsProductsService, [{
	    key: 'getList',
	    value: function getList() {
	      return this.boxes;
	    }
	  }]);
	
	  return GiftsProductsService;
	})();
	
	exports.GiftsProductsService = GiftsProductsService;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creation" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = undefined;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause()['delete']();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause()['delete']();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = (function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODIxNDJkMjJlYjY0ZGY5NmM1ZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9naWZ0cy9naWZ0cy5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZ2lmdHMvZ2lmdHMuY29udHJvbGxlci5qcz8zZmI2Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzPzUyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9naWZ0cy9naWZ0c1Byb2R1Y3RzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9naWZ0cy9naWZ0c1Byb2R1Y3RzLnNlcnZpY2UuanM/YzkwZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzPzMxNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzP2Y1ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUEsS0FBSSxlQUFlLG9CQ0ZJOztBREl2QixLQUFJLGNBQWMsb0JDSFc7O0FESzdCLEtBQUksWUFBWSxvQkNKUzs7QURNekIsS0FBSSxzQkFBc0Isb0JDTEs7O0FETy9CLEtBQUksd0JBQXdCLG9CQ05JOztBRFFoQyxLQUFJLDBEQUEwRCxvQkNQckI7O0FEU3pDLEtBQUksMENBQTBDLG9CQ1JiOztBRFVqQyxLQUFJLDZCQUE2QixvQkNUSTs7QURXckMsS0FBSSxzQ0FBc0Msb0JDVlY7O0FEWWhDLEtBQUksMENBQTBDLG9CQ1haOztBQUVsQyxTQUFRLE9BQU8sd0JBQXdCLENBQUMsY0FBYyxhQUFhLGNBQWMsV0FDOUUsU0FBUyxZQUFZLFVBQ3JCLFNBQVMsVUFBVSxR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LFVBQU87S0FDWCxJQUFJLFNBQVMsU0FBUyxHQUFHLElBQUk7T0FDM0IsV0FBVztPQUNYLGFBQWE7T0FDYixZQUFZO09BQ1osTUFBTTtPQUNOLFNBQVM7OztLQUdYLEdBQUcsU0FBUzs7S0FFWixRQUFRLFFBQVEsTUFBTSxhQUFhLFVBQUMsT0FBVTtPQUM1QyxPQUFPLEtBQUssT0FBTyxRQUFPOzs7S0FHNUIsVUFBVSxNQUFNLE9BQU8sbUJBQW1CLFlBQU07T0FDOUMsUUFBUSxRQUFRLEdBQUcsY0FBYyxVQUFDLGFBQWdCO1NBQ2hELE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBTzs7OztLQUkxQyxNQUFNLElBQUksWUFBWSxZQUFNO09BQzFCOzs7Ozs7OERBTWtCO0dBQ1YsU0FEUixtQkFDUyxNQUFNLG1CQUFtQjtLQUNwQzs7S0RhQSxnQkFBZ0IsTUNmZDs7S0FJRixLQUFLLE9BQU87S0FDWixLQUFLLGVBQWU7O0tBRXBCLEtBQUssU0FBUzs7O0dEZ0JoQixhQ3ZCSSxvQkFBa0I7S0R3QnBCLEtBQUs7S0FDTCxPQ2ZNLGtCQUFDLG1CQUFtQjtPRGdCeEIsSUFBSSxRQUFROztPQ2ZkLE9BQU8sS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssWUFBTTtTQUN4RCxNQUFLLEtBQUssS0FBSzs7O01Eb0JoQjtLQUNELEtBQUs7S0FDTCxPQ2xCYSx5QkFBQyxtQkFBbUI7T0RtQi9CLElBQUksU0FBUzs7T0NsQmYsT0FBTyxrQkFBa0IsZ0JBQWdCLElBQUksS0FBSyxVQUFDLE1BQVM7U0FDMUQsT0FBSyxlQUFlOztTQUVwQixPQUFPLE9BQUs7Ozs7O0dEeUJoQixPQzdDSSIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDgyMTQyZDIyZWI2NGRmOTZjNWUxXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luZGV4Q29uZmlnID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcblxudmFyIF9pbmRleFJvdXRlID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4UnVuID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcblxudmFyIF9tYWluTWFpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XG5cbnZhciBfZ2lmdHNHaWZ0c0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2dpZnRzL2dpZnRzLmNvbnRyb2xsZXInKTtcblxudmFyIF9hcHBDb21wb25lbnRzR2l0aHViQ29udHJpYnV0b3JHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c1dlYkRldlRlY1dlYkRldlRlY1NlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnKTtcblxudmFyIF9naWZ0c0dpZnRzUHJvZHVjdHNTZXJ2aWNlID0gcmVxdWlyZSgnLi9naWZ0cy9naWZ0c1Byb2R1Y3RzLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzTmF2YmFyTmF2YmFyRGlyZWN0aXZlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnKTtcblxudmFyIF9hcHBDb21wb25lbnRzTWFsYXJrZXlNYWxhcmtleURpcmVjdGl2ZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZScpO1xuXG5hbmd1bGFyLm1vZHVsZSgnZ2VuZXJhdG9yR3VscEFuZ3VsYXInLCBbJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ25nTWF0ZXJpYWwnLCAndG9hc3RyJ10pLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KS5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KS5jb25maWcoX2luZGV4Q29uZmlnLmNvbmZpZykuY29uZmlnKF9pbmRleFJvdXRlLnJvdXRlckNvbmZpZykucnVuKF9pbmRleFJ1bi5ydW5CbG9jaykuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSkuc2VydmljZSgnd2ViRGV2VGVjJywgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlLldlYkRldlRlY1NlcnZpY2UpLnNlcnZpY2UoJ2dpZnRzUHJvZHVjdHMnLCBfZ2lmdHNHaWZ0c1Byb2R1Y3RzU2VydmljZS5HaWZ0c1Byb2R1Y3RzU2VydmljZSkuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBfbWFpbk1haW5Db250cm9sbGVyLk1haW5Db250cm9sbGVyKS5jb250cm9sbGVyKCdHaWZ0c0NvbnRyb2xsZXInLCBfZ2lmdHNHaWZ0c0NvbnRyb2xsZXIuR2lmdHNDb250cm9sbGVyKS5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBfYXBwQ29tcG9uZW50c05hdmJhck5hdmJhckRpcmVjdGl2ZS5OYXZiYXJEaXJlY3RpdmUpLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgX2FwcENvbXBvbmVudHNNYWxhcmtleU1hbGFya2V5RGlyZWN0aXZlLk1hbGFya2V5RGlyZWN0aXZlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcbmltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSAnLi9tYWluL21haW4uY29udHJvbGxlcic7XG5pbXBvcnQgeyBHaWZ0c0NvbnRyb2xsZXIgfSBmcm9tICcuL2dpZnRzL2dpZnRzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcbmltcG9ydCB7IEdpZnRzUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi9naWZ0cy9naWZ0c1Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZ2VuZXJhdG9yR3VscEFuZ3VsYXInLCBbJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ25nTWF0ZXJpYWwnLCAndG9hc3RyJ10pXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoJ2dpZnRzUHJvZHVjdHMnLCBHaWZ0c1Byb2R1Y3RzU2VydmljZSlcbiAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdHaWZ0c0NvbnRyb2xsZXInLCBHaWZ0c0NvbnRyb2xsZXIpXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XG5cbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yb3V0ZXJDb25maWcgPSByb3V0ZXJDb25maWc7XG5cbmZ1bmN0aW9uIHJvdXRlckNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgIHVybDogJy8nLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gIH0pLnN0YXRlKCdnaWZ0Jywge1xuICAgIHVybDogJy9naWZ0cycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZ2lmdHMvZ2lmdHMuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0dpZnRzQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnZ2lmdCdcbiAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdnaWZ0Jywge1xuICAgICAgdXJsOiAnL2dpZnRzJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2dpZnRzL2dpZnRzLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0dpZnRzQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdnaWZ0J1xuICAgIH0pO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJ1bkJsb2NrID0gcnVuQmxvY2s7XG5cbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4LnJ1bi5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWluQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDU1NTY1MDU0MTM1O1xuICAgIHRoaXMudG9hc3RyID0gdG9hc3RyO1xuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYWluQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnO1xuICAgICAgfSwgNDAwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0V2ViRGV2VGVjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xuICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCBmdW5jdGlvbiAoYXdlc29tZVRoaW5nKSB7XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3dUb2FzdHInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93VG9hc3RyKCkge1xuICAgICAgdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLk1haW5Db250cm9sbGVyID0gTWFpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDU1NTY1MDU0MTM1O1xuICAgIHRoaXMudG9hc3RyID0gdG9hc3RyO1xuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xuICAgICR0aW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XG4gICAgfSwgNDAwMCk7XG4gIH1cblxuICBnZXRXZWJEZXZUZWMod2ViRGV2VGVjKSB7XG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgKGF3ZXNvbWVUaGluZykgPT4ge1xuICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1RvYXN0cigpIHtcbiAgICB0aGlzLnRvYXN0ci5pbmZvKCdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPicpO1xuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBHaWZ0c0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBHaWZ0c0NvbnRyb2xsZXIoZ2lmdHNQcm9kdWN0cywgdG9hc3RyKSB7XG5cdFx0J25nSW5qZWN0JztcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHaWZ0c0NvbnRyb2xsZXIpO1xuXG5cdFx0dGhpcy50aXRsZSA9ICdIZWxsbywgSG9saSBDb3cnO1xuXHRcdHRoaXMuaW5wdXRUaXRsZSA9ICdEZWZhdWx0Jztcblx0XHR0aGlzLmJveGVzID0gZ2lmdHNQcm9kdWN0cy5nZXRMaXN0KCk7XG5cdFx0dGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xuXHRcdHRoaXMudG9hc3RyID0gdG9hc3RyO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEdpZnRzQ29udHJvbGxlciwgW3tcblx0XHRrZXk6ICdzaG93VG9hc3RyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2hvd1RvYXN0cigpIHtcblx0XHRcdHRoaXMudG9hc3RyLmluZm8oJ0ZpcnN0IHRvYXN0Jyk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEdpZnRzQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuR2lmdHNDb250cm9sbGVyID0gR2lmdHNDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9naWZ0cy9naWZ0cy5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIEdpZnRzQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yIChnaWZ0c1Byb2R1Y3RzLCB0b2FzdHIpIHtcblx0XHQnbmdJbmplY3QnO1xuXG5cdFx0dGhpcy50aXRsZSA9ICdIZWxsbywgSG9saSBDb3cnO1xuXHRcdHRoaXMuaW5wdXRUaXRsZSA9ICdEZWZhdWx0Jztcblx0XHR0aGlzLmJveGVzID0gZ2lmdHNQcm9kdWN0cy5nZXRMaXN0KCk7XG5cdFx0dGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xuXHRcdHRoaXMudG9hc3RyID0gdG9hc3RyO1xuXHR9XG5cblxuXHRzaG93VG9hc3RyKCkge1xuXHRcdHRoaXMudG9hc3RyLmluZm8oJ0ZpcnN0IHRvYXN0Jyk7XG5cdH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2dpZnRzL2dpZnRzLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghbGltaXQpIHtcbiAgICAgICAgbGltaXQgPSAzMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5HaXRodWJDb250cmlidXRvclNlcnZpY2UgPSBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICBpZiAoIWxpbWl0KSB7XG4gICAgICBsaW1pdCA9IDMwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFdlYkRldlRlY1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXZWJEZXZUZWNTZXJ2aWNlKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViRGV2VGVjU2VydmljZSk7XG5cbiAgICB0aGlzLmRhdGEgPSBbe1xuICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnQW5ndWxhciBNYXRlcmlhbCBEZXNpZ24nLFxuICAgICAgJ3VybCc6ICdodHRwczovL21hdGVyaWFsLmFuZ3VsYXJqcy5vcmcvIy8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBBbmd1bGFyIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgR29vZ2xlXFwncyBNYXRlcmlhbCBEZXNpZ24gc3BlY2lmaWNhdGlvbi4nLFxuICAgICAgJ2xvZ28nOiAnYW5ndWxhci1tYXRlcmlhbC5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICB9LCB7XG4gICAgICAna2V5JzogJ2phZGUnLFxuICAgICAgJ3RpdGxlJzogJ0phZGUnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vamFkZS1sYW5nLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0phZGUgaXMgYSBoaWdoIHBlcmZvcm1hbmNlIHRlbXBsYXRlIGVuZ2luZSBoZWF2aWx5IGluZmx1ZW5jZWQgYnkgSGFtbCBhbmQgaW1wbGVtZW50ZWQgd2l0aCBKYXZhU2NyaXB0IGZvciBub2RlLicsXG4gICAgICAnbG9nbyc6ICdqYWRlLnBuZydcbiAgICB9XTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhXZWJEZXZUZWNTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldFRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRlYygpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdlYkRldlRlY1NlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBXZWJEZXZUZWNTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXIgTWF0ZXJpYWwgRGVzaWduJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL21hdGVyaWFsLmFuZ3VsYXJqcy5vcmcvIy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIEFuZ3VsYXIgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBHb29nbGVcXCdzIE1hdGVyaWFsIERlc2lnbiBzcGVjaWZpY2F0aW9uLicsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXItbWF0ZXJpYWwucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2tleSc6ICdqYWRlJyxcbiAgICAgICAgJ3RpdGxlJzogJ0phZGUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYWRlLWxhbmcuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdKYWRlIGlzIGEgaGlnaCBwZXJmb3JtYW5jZSB0ZW1wbGF0ZSBlbmdpbmUgaGVhdmlseSBpbmZsdWVuY2VkIGJ5IEhhbWwgYW5kIGltcGxlbWVudGVkIHdpdGggSmF2YVNjcmlwdCBmb3Igbm9kZS4nLFxuICAgICAgICAnbG9nbyc6ICdqYWRlLnBuZydcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgZ2V0VGVjKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgR2lmdHNQcm9kdWN0c1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHaWZ0c1Byb2R1Y3RzU2VydmljZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdpZnRzUHJvZHVjdHNTZXJ2aWNlKTtcblxuICAgIHRoaXMucHJvZHVjdHMgPSBbeyBlbk5hbWU6ICdwZW4nLCBydU5hbWU6ICfQmtCw0L3RhtC10LvRj9GA0YHQutCw0Y8g0YDRg9GH0LrQsCcsIHByaWNlOiAnMjQwMDAnIH0sIHsgZW5OYW1lOiAnc3dlZXQnLCBydU5hbWU6ICfQm9C10LTQtdC90YbRiycsIHByaWNlOiAnMzkwMDAnIH0sIHsgZW5OYW1lOiAnY2FuZGxlJywgcnVOYW1lOiAn0KHQstC10YfQsCcsIHByaWNlOiAnOTEwMDAnIH0sIHsgZW5OYW1lOiAndG95JywgcnVOYW1lOiAn0JjQs9GA0YPRiNC60LAnLCBwcmljZTogJzY1MDAwJyB9LCB7IGVuTmFtZTogJ2N1cHdoaXRlJywgcnVOYW1lOiAn0JrRgNGD0LbQutCwINCx0LXQu9Cw0Y8nLCBwcmljZTogJzkxMDAwJyB9LCB7IGVuTmFtZTogJ3RlYScsIHJ1TmFtZTogJ9Ca0L7RhNC1L9Cn0LDQuScsIHByaWNlOiAnNTYwMDAnIH0sIHsgZW5OYW1lOiAnaG9uZXknLCBydU5hbWU6ICfQnNC10LQnLCBwcmljZTogJzY1MDAwJyB9LCB7IGVuTmFtZTogJ25vdGVib29rJywgcnVOYW1lOiAn0JHQu9C+0LrQvdC+0YIg0LIg0Y3QutC+INC+0LHQu9C+0LbQutC1JywgcHJpY2U6ICc2NTAwMCcgfSwgeyBlbk5hbWU6ICdjYXJkaG9sZGVyJywgcnVOYW1lOiAn0JLQuNC30LjRgtC90LjRhtCwJywgcHJpY2U6ICcxMzAwMDAnIH0sIHsgZW5OYW1lOiAnc2xlZXBtYXNrJywgcnVOYW1lOiAn0JzQsNGB0LrQsCDQtNC70Y8g0YHQvdCwJywgcHJpY2U6ICcxNTYwMDAnIH0sIHsgZW5OYW1lOiAnYmFsbCcsIHJ1TmFtZTogJ9Cc0Y/RhyDQsNC90YLQuNGB0YLRgNC10YHRgScsIHByaWNlOiAnNTYwMDAnIH0sIHsgZW5OYW1lOiAnY29va2llJywgcnVOYW1lOiAn0JjQvNCx0LjRgNC90L7QtSDQv9C10YfQtdC90YzQtScsIHByaWNlOiAnMzMwMDAnIH0sIHsgZW5OYW1lOiAnc3lydXAnLCBydU5hbWU6ICfQodC40YDQvtC/INCyINCw0YHRgdC+0YDRgtC40LzQtdC90YLQtScsIHByaWNlOiAnMTY5MDAwJyB9LCB7IGVuTmFtZTogJ2N1cHRvZ28nLCBydU5hbWU6ICfQmtGA0YPQttC60LAgdG8gZ28nLCBwcmljZTogJzI2MDAwMCcgfSwgeyBlbk5hbWU6ICdjb2xvcmluZycsIHJ1TmFtZTogJ9Cg0LDRgdC60YDQsNGB0LrQsCcsIHByaWNlOiAnNjUwMDAnIH0sIHsgZW5OYW1lOiAnd2luZScsIHJ1TmFtZTogJ9Ca0YDRg9C20LrQsCDQtNC70Y8g0LPQu9C40L3RgtCy0LXQudC90LAnLCBwcmljZTogJzc4MDAwJyB9LCB7IGVuTmFtZTogJ3NwaWNlcycsIHJ1TmFtZTogJ9Ch0L/QtdGG0LjQuCDQsiDQvNC10YjQvtGH0LrQtScsIHByaWNlOiAnNTIwMDAnIH0sIHsgZW5OYW1lOiAnY2lubmFtb24nLCBydU5hbWU6ICfQn9Cw0LvQvtGH0LrQuCDQutC+0YDQuNGG0YsnLCBwcmljZTogJzI2MDAwJyB9XTtcblxuICAgIHRoaXMuYm94ZXMgPSBbeyBlbk5hbWU6ICdHaWZ0TWUgQ29sb3VycycsXG4gICAgICBzZWN0aW9uOiAnPGEgaHJlZj1cIiNsYXJnZV9ib3hlc1wiPkxhcmdlPC9hPicsXG4gICAgICBwcmljZTogNDUwMDAwLFxuICAgICAgcHJvZHVjdE5hbWVzOiBbJ25vdGVib29rJywgJ2JhbGwnLCAnY3VwdG9nbycsICdjb2xvcmluZyddIH0sIHsgZW5OYW1lOiAnR2lmdE1lIENoZWVycycsXG4gICAgICBzZWN0aW9uOiAnPGEgaHJlZj1cIiNsYXJnZV9ib3hlc1wiPkxhcmdlPC9hPicsXG4gICAgICBwcmljZTogNDUwMDAwLFxuICAgICAgcHJvZHVjdE5hbWVzOiBbJ2hvbmV5JywgJ2Nvb2tpZScsICd3aW5lJywgJ3NwaWNlcyddIH0sIHsgZW5OYW1lOiAnR2lmdE1lIFNtZWxscycsXG4gICAgICBzZWN0aW9uOiAnPGEgaHJlZj1cIiNsYXJnZV9ib3hlc1wiPkxhcmdlPC9hPicsXG4gICAgICBwcmljZTogNDUwMDAwLFxuICAgICAgcHJvZHVjdE5hbWVzOiBbJ3RlYScsICdob25leScsICdjb29raWUnLCAnc3lydXAnXSB9LCB7IGVuTmFtZTogJ0dpZnRNZSBUZWEnLFxuICAgICAgc2VjdGlvbjogJzxhIGhyZWY9XCIjbWVkaXVtX2JveGVzXCI+TWVkaXVtPC9hPicsXG4gICAgICBwcmljZTogMjUwMDAwLFxuICAgICAgcHJvZHVjdE5hbWVzOiBbJ2N1cHdoaXRlJywgJ2hvbmV5JywgJ3RlYSddIH0sIHsgZW5OYW1lOiAnR2lmdE1lIFByb2ZpdCcsXG4gICAgICBzZWN0aW9uOiAnPGEgaHJlZj1cIiNtZWRpdW1fYm94ZXNcIj5NZWRpdW08L2E+JyxcbiAgICAgIHByaWNlOiAzMDAwMDAsXG4gICAgICBwcm9kdWN0TmFtZXM6IFsnY3Vwd2hpdGUnLCAnbm90ZWJvb2snLCAnY2FyZGhvbGRlciddIH0sIHsgZW5OYW1lOiAnR2lmdE1lIFJlbGF4JyxcbiAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI21lZGl1bV9ib3hlc1wiPk1lZGl1bTwvYT4nLFxuICAgICAgcHJpY2U6IDI1MDAwMCxcbiAgICAgIHByb2R1Y3ROYW1lczogWyd0ZWEnLCAnYmFsbCcsICdzbGVlcG1hc2snXSB9LCB7IGVuTmFtZTogJ0dpZnRNZSBDb2ZmZWUnLFxuICAgICAgc2VjdGlvbjogJzxhIGhyZWY9XCIjbWVkaXVtX2JveGVzXCI+TWVkaXVtPC9hPicsXG4gICAgICBwcmljZTogMzAwMDAwLFxuICAgICAgcHJvZHVjdE5hbWVzOiBbJ3RlYScsICdjb29raWUnLCAnc3lydXAnXSB9LCB7IGVuTmFtZTogJ0dpZnRNZSBTd2VldCcsXG4gICAgICBzZWN0aW9uOiAnPGEgaHJlZj1cIiNzbWFsbF9ib3hlc1wiPlNtYWxsPC9hPicsXG4gICAgICBwcmljZTogNTkwMDAsXG4gICAgICBwcm9kdWN0TmFtZXM6IFsnc3dlZXQnXSB9LCB7IGVuTmFtZTogJ0dpZnRNZSBQaW4nLFxuICAgICAgc2VjdGlvbjogJzxhIGhyZWY9XCIjc21hbGxfYm94ZXNcIj5TbWFsbDwvYT4nLFxuICAgICAgcHJpY2U6IDc5MDAwLFxuICAgICAgcHJvZHVjdE5hbWVzOiBbJ3RveSddIH0sIHsgZW5OYW1lOiAnR2lmdE1lIExpZ2h0JyxcbiAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI3NtYWxsX2JveGVzXCI+U21hbGw8L2E+JyxcbiAgICAgIHByaWNlOiAxMDkwMDAsXG4gICAgICBwcm9kdWN0TmFtZXM6IFsnY2FuZGxlJ10gfV07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2lmdHNQcm9kdWN0c1NlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0TGlzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ib3hlcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2lmdHNQcm9kdWN0c1NlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLkdpZnRzUHJvZHVjdHNTZXJ2aWNlID0gR2lmdHNQcm9kdWN0c1NlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2dpZnRzL2dpZnRzUHJvZHVjdHMuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBHaWZ0c1Byb2R1Y3RzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy5wcm9kdWN0cyA9IFtcbiAgICAgICAgeyBlbk5hbWU6ICdwZW4nLCBydU5hbWU6J9Ca0LDQvdGG0LXQu9GP0YDRgdC60LDRjyDRgNGD0YfQutCwJywgcHJpY2U6ICcyNDAwMCcgfSxcbiAgICAgICAgeyBlbk5hbWU6ICdzd2VldCcsIHJ1TmFtZTogJ9Cb0LXQtNC10L3RhtGLJywgcHJpY2U6ICczOTAwMCcgfSxcbiAgICAgICAgeyBlbk5hbWU6ICdjYW5kbGUnLCBydU5hbWU6J9Ch0LLQtdGH0LAnLCBwcmljZTogJzkxMDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ3RveScsIHJ1TmFtZTon0JjQs9GA0YPRiNC60LAnLCBwcmljZTogJzY1MDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ2N1cHdoaXRlJywgcnVOYW1lOifQmtGA0YPQttC60LAg0LHQtdC70LDRjycsIHByaWNlOiAnOTEwMDAnIH0sXG4gICAgICAgIHsgZW5OYW1lOiAndGVhJywgcnVOYW1lOifQmtC+0YTQtS/Qp9Cw0LknLCBwcmljZTogJzU2MDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ2hvbmV5JywgcnVOYW1lOifQnNC10LQnLCBwcmljZTogJzY1MDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ25vdGVib29rJywgcnVOYW1lOifQkdC70L7QutC90L7RgiDQsiDRjdC60L4g0L7QsdC70L7QttC60LUnLCBwcmljZTogJzY1MDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ2NhcmRob2xkZXInLCBydU5hbWU6J9CS0LjQt9C40YLQvdC40YbQsCcsIHByaWNlOiAnMTMwMDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ3NsZWVwbWFzaycsIHJ1TmFtZTon0JzQsNGB0LrQsCDQtNC70Y8g0YHQvdCwJywgcHJpY2U6ICcxNTYwMDAnIH0sXG4gICAgICAgIHsgZW5OYW1lOiAnYmFsbCcsIHJ1TmFtZTon0JzRj9GHINCw0L3RgtC40YHRgtGA0LXRgdGBJywgcHJpY2U6ICc1NjAwMCcgfSxcbiAgICAgICAgeyBlbk5hbWU6ICdjb29raWUnLCBydU5hbWU6J9CY0LzQsdC40YDQvdC+0LUg0L/QtdGH0LXQvdGM0LUnLCBwcmljZTogJzMzMDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ3N5cnVwJywgcnVOYW1lOifQodC40YDQvtC/INCyINCw0YHRgdC+0YDRgtC40LzQtdC90YLQtScsIHByaWNlOiAnMTY5MDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ2N1cHRvZ28nLCBydU5hbWU6J9Ca0YDRg9C20LrQsCB0byBnbycsIHByaWNlOiAnMjYwMDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ2NvbG9yaW5nJywgcnVOYW1lOifQoNCw0YHQutGA0LDRgdC60LAnLCBwcmljZTogJzY1MDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ3dpbmUnLCBydU5hbWU6J9Ca0YDRg9C20LrQsCDQtNC70Y8g0LPQu9C40L3RgtCy0LXQudC90LAnLCBwcmljZTogJzc4MDAwJyB9LFxuICAgICAgICB7IGVuTmFtZTogJ3NwaWNlcycsIHJ1TmFtZTon0KHQv9C10YbQuNC4INCyINC80LXRiNC+0YfQutC1JywgcHJpY2U6ICc1MjAwMCcgfSxcbiAgICAgICAgeyBlbk5hbWU6ICdjaW5uYW1vbicsIHJ1TmFtZTon0J/QsNC70L7Rh9C60Lgg0LrQvtGA0LjRhtGLJywgcHJpY2U6ICcyNjAwMCcgfVxuXG4gICAgXTtcblxuICAgIHRoaXMuYm94ZXMgPSBbXG4gICAgICAgIHsgZW5OYW1lOiAnR2lmdE1lIENvbG91cnMnLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI2xhcmdlX2JveGVzXCI+TGFyZ2U8L2E+JyxcbiAgICAgICAgICBwcmljZTo0NTAwMDAsXG4gICAgICAgICAgcHJvZHVjdE5hbWVzOlsnbm90ZWJvb2snLCAnYmFsbCcsICdjdXB0b2dvJywgJ2NvbG9yaW5nJ10gfSxcbiAgICAgICAgeyBlbk5hbWU6ICdHaWZ0TWUgQ2hlZXJzJyxcbiAgICAgICAgICBzZWN0aW9uOiAnPGEgaHJlZj1cIiNsYXJnZV9ib3hlc1wiPkxhcmdlPC9hPicsXG4gICAgICAgICAgcHJpY2U6NDUwMDAwLFxuICAgICAgICAgIHByb2R1Y3ROYW1lczpbJ2hvbmV5JywgJ2Nvb2tpZScsICd3aW5lJywgJ3NwaWNlcyddIH0sICBcbiAgICAgICAgeyBlbk5hbWU6ICdHaWZ0TWUgU21lbGxzJyxcbiAgICAgICAgICBzZWN0aW9uOiAnPGEgaHJlZj1cIiNsYXJnZV9ib3hlc1wiPkxhcmdlPC9hPicsXG4gICAgICAgICAgcHJpY2U6NDUwMDAwLFxuICAgICAgICAgIHByb2R1Y3ROYW1lczpbJ3RlYScsICdob25leScsICdjb29raWUnLCAnc3lydXAnXSB9LFxuICAgICAgICB7IGVuTmFtZTogJ0dpZnRNZSBUZWEnLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI21lZGl1bV9ib3hlc1wiPk1lZGl1bTwvYT4nLFxuICAgICAgICAgIHByaWNlOjI1MDAwMCxcbiAgICAgICAgICBwcm9kdWN0TmFtZXM6WydjdXB3aGl0ZScsICdob25leScsICd0ZWEnXSB9LFxuICAgICAgICB7IGVuTmFtZTogJ0dpZnRNZSBQcm9maXQnLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI21lZGl1bV9ib3hlc1wiPk1lZGl1bTwvYT4nLFxuICAgICAgICAgIHByaWNlOjMwMDAwMCxcbiAgICAgICAgICBwcm9kdWN0TmFtZXM6WydjdXB3aGl0ZScsICdub3RlYm9vaycsICdjYXJkaG9sZGVyJ10gfSxcbiAgICAgICAgeyBlbk5hbWU6ICdHaWZ0TWUgUmVsYXgnLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI21lZGl1bV9ib3hlc1wiPk1lZGl1bTwvYT4nLFxuICAgICAgICAgIHByaWNlOjI1MDAwMCxcbiAgICAgICAgICBwcm9kdWN0TmFtZXM6Wyd0ZWEnLCAnYmFsbCcsICdzbGVlcG1hc2snXSB9LFxuICAgICAgICB7IGVuTmFtZTogJ0dpZnRNZSBDb2ZmZWUnLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI21lZGl1bV9ib3hlc1wiPk1lZGl1bTwvYT4nLFxuICAgICAgICAgIHByaWNlOjMwMDAwMCxcbiAgICAgICAgICBwcm9kdWN0TmFtZXM6Wyd0ZWEnLCAnY29va2llJywgJ3N5cnVwJ10gfSxcbiAgICAgICAgeyBlbk5hbWU6ICdHaWZ0TWUgU3dlZXQnLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI3NtYWxsX2JveGVzXCI+U21hbGw8L2E+JyxcbiAgICAgICAgICBwcmljZTo1OTAwMCxcbiAgICAgICAgICBwcm9kdWN0TmFtZXM6Wydzd2VldCddIH0sICAgICAgICAgIFxuICAgICAgICB7IGVuTmFtZTogJ0dpZnRNZSBQaW4nLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI3NtYWxsX2JveGVzXCI+U21hbGw8L2E+JyxcbiAgICAgICAgICBwcmljZTo3OTAwMCxcbiAgICAgICAgICBwcm9kdWN0TmFtZXM6Wyd0b3knXSB9LCBcbiAgICAgICAgeyBlbk5hbWU6ICdHaWZ0TWUgTGlnaHQnLFxuICAgICAgICAgIHNlY3Rpb246ICc8YSBocmVmPVwiI3NtYWxsX2JveGVzXCI+U21hbGw8L2E+JyxcbiAgICAgICAgICBwcmljZToxMDkwMDAsXG4gICAgICAgICAgcHJvZHVjdE5hbWVzOlsnY2FuZGxlJ10gfSAgICBcblxuICAgIF07XG4gIH1cblxuICBnZXRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmJveGVzO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvZ2lmdHMvZ2lmdHNQcm9kdWN0cy5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTmF2YmFyRGlyZWN0aXZlID0gTmF2YmFyRGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxudmFyIE5hdmJhckNvbnRyb2xsZXIgPSBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKG1vbWVudCkge1xuICAnbmdJbmplY3QnO1xuXG4gIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmJhckNvbnRyb2xsZXIpO1xuXG4gIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHMuTWFsYXJrZXlEaXJlY3RpdmUgPSBNYWxhcmtleURpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIHZhciB3YXRjaGVyID0gdW5kZWZpbmVkO1xuICAgIHZhciB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKClbJ2RlbGV0ZSddKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCBmdW5jdGlvbiAoY29udHJpYnV0b3IpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKClbJ2RlbGV0ZSddKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFsYXJrZXlDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hbGFya2V5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBfdGhpczIuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRyaWJ1dG9ycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWxhcmtleUNvbnRyb2xsZXI7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==