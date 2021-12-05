/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/estilo1.css":
/*!************************************!*\
  !*** ./src/assets/css/estilo1.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/estilo1.css?");

/***/ }),

/***/ "./src/modulos/moduloA.js":
/*!********************************!*\
  !*** ./src/modulos/moduloA.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduloB = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\")\r\nconsole.log(moduloB.saudacao())\r\n\r\n\n\n//# sourceURL=webpack:///./src/modulos/moduloA.js?");

/***/ }),

/***/ "./src/modulos/moduloB.js":
/*!********************************!*\
  !*** ./src/modulos/moduloB.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// esse sitema de modulos é o commons js\r\nmodule.exports = {\r\n    saudacao(){return 'Olá, eu sou o módulo B'}\r\n}\r\n\r\n\r\n// o import ... from... é o do EcmaScript\n\n//# sourceURL=webpack:///./src/modulos/moduloB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/moduloA */ \"./src/modulos/moduloA.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass Pessoa {\r\n// module.exports = class Pessoa {\r\n    cumprimentar(){\r\n        return 'Bom dia!'\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _assets_css_estilo1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/estilo1.css */ \"./src/assets/css/estilo1.css\");\n/* harmony import */ var _assets_css_estilo1_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_estilo1_css__WEBPACK_IMPORTED_MODULE_1__);\n// const Pessoa = require('./pessoa')\r\n\r\n\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });