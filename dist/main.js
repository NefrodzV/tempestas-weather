/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  /* Sky Colors */\n  --clr-50: #f0f9ff;\n  --clr-100: #e0f2fe;\n  --clr-200: #bae6fd;\n  --clr-300: #7dd3fc;\n  --clr-400: #38bdf8;\n  --clr-500: #0ea5e9;\n  --clr-600: #0284c7;\n  --clr-700: #0369a1;\n  --clr-800: #075985;\n  --clr-900: #0c4a6e;\n  --clr-950: #082f49;\n\n  --space-100: 8px;\n  --space-200: 16px;\n  --space-300: 24px;\n\n  --clr-primary: var(--clr-400);\n  --clr-secondary: var(--clr-200);\n  --clr-light: var(--clr-100);\n  --clr-dark: var(--clr-950);\n}\n\n/* CSS RESET */\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/** My style begins here */\n\nbody,\nheader,\nmain,\nfooter,\n.logo,\n.searched-location,\n.location-weather,\n.carousel,\n.window,\n.forecast-card,\n.description-weather,\n.sun-wrapper,\n.search-wrapper {\n  display: flex;\n}\n\nbody {\n  font-family: \"Courier New\", Courier, monospace;\n  color: var(--clr-dark);\n  height: 100%;\n  align-items: stretch;\n  line-height: 1;\n}\n\n::placeholder {\n  color: var(--clr-dark);\n}\n\nbody,\nmain,\n.location-weather .card,\n.description-weather .card,\n.forecast-card,\n.search-wrapper {\n  flex-direction: column;\n}\n\nheader {\n  position: relative;\n  background-color: var(--clr-primary);\n  padding: 0 var(--space-300);\n  align-items: center;\n  box-shadow: 0px 0px 6px var(--clr-dark);\n}\n\n.logo {\n  gap: var(--space-100);\n  justify-content: center;\n  align-items: center;\n}\n.logo > img {\n  height: 100%;\n  width: 100%;\n}\n\n.logo p {\n  font-weight: bolder;\n  width: min-content;\n  line-height: 1;\n}\n\n.logo p span {\n  margin-left: 2px;\n}\n\n.name {\n  font-size: 3rem;\n}\n\n.search-wrapper {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n}\n\n#search {\n  /* margin: 0 auto;\n  width: 700px; */\n  cursor: pointer;\n  outline-offset: 1px;\n  background-color: var(--clr-light);\n  padding-inline: 1%;\n  border-radius: 25px;\n  /* border: none; */\n  font-size: 2rem;\n  height: 3rem;\n  box-shadow: 0px 0px 3px var(--clr-dark) inset;\n}\n\n.error {\n  opacity: 0;\n  border-radius: 25px;\n  padding: 1%;\n  transition: all 500ms ease;\n  position: absolute;\n  width: max-content;\n  border: 1px solid red;\n  background-color: var(--clr-50);\n  color: red;\n  bottom: -2rem;\n  align-self: center;\n  transform: scale(0);\n}\n\n.error[show] {\n  opacity: 1;\n  transform: scale(1);\n  width: auto;\n}\n\n.about {\n  font-size: 1.5rem;\n}\n\nmain {\n  background-color: #bae6fd;\n  padding: var(--space-200);\n  flex: 2;\n  gap: var(--space-200);\n}\n.carousel,\n.card {\n  border-radius: 25px;\n}\n\n.location-weather {\n  font-weight: bold;\n  gap: var(--space-300);\n  flex: 5;\n}\n\n.location-weather .card {\n  box-shadow: 0px 0px 3px var(--clr-dark);\n  color: var(--clr-light);\n  background-color: var(--clr-primary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.location-weather .card .body {\n  width: 80%;\n}\n\n.card-header {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0;\n  margin-inline: 0;\n}\n\n#condition-image {\n  height: 150px;\n}\n\n.temperature {\n  font-size: 4rem;\n}\n\n.condition {\n  text-align: center;\n  font-size: 2.5rem;\n  /* width: 25ch; */\n}\n\n.temperature-feels {\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n#location {\n  text-align: center;\n  font-size: 3rem;\n}\n\n.card {\n  flex-basis: 75%;\n}\n\n.carousel,\n.forecast-card {\n  align-items: center;\n  justify-content: center;\n}\n.carousel {\n  flex-basis: 100%;\n  gap: var(--space-100);\n}\n.carousel button {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  cursor: pointer;\n  background-color: var(--clr-secondary);\n  border: none;\n  height: 50px;\n  width: 50px;\n}\n.carousel button img {\n  width: 100%;\n}\n\n.carousel .window {\n  width: 80%;\n  overflow: hidden;\n  gap: var(--space-200);\n  max-width: 737px;\n  height: 80%;\n}\n\n.forecast-card {\n  transition: all 1s ease;\n  margin: 1% 0px;\n  font-weight: bold;\n  color: var(--clr-light);\n  background-color: var(--clr-primary);\n  box-shadow: 0px 0px 6px var(--clr-dark);\n  border-radius: 25px;\n  min-width: 230px;\n  gap: var(--space-200);\n}\n\n#forecast-image {\n  height: 76px;\n}\n\n.forecast-card:first-child {\n  margin-left: 1%;\n}\n\n.forecast-card:last-child {\n  margin-right: 1%;\n}\n\n.forecast-card div {\n  display: flex;\n  align-items: center;\n  gap: var(--space-100);\n}\n\n#forecast-title,\n#rain-percent {\n  font-size: 1.2rem;\n}\n#forecast-temperature {\n  font-size: 2rem;\n}\n.description-weather {\n  flex: 3;\n  gap: var(--space-100);\n}\n\n.description-weather .card {\n  background-color: var(--clr-50);\n  box-shadow: 0px 0px 3px var(--clr-dark);\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.description-weather .card img {\n  width: 96px;\n  height: 96px;\n}\n\n.description-weather .card .title {\n  font-size: 1.8rem;\n}\n\n.description-weather .card .variable {\n  font-size: 1.5rem;\n}\n\n.sun-wrapper {\n  gap: 3rem;\n}\nfooter {\n  box-shadow: 0px 0px 6px var(--clr-dark);\n  position: relative;\n  background-color: var(--clr-primary);\n  font-size: 1.2rem;\n  flex: 0.1;\n  justify-content: center;\n  align-items: center;\n  gap: var(--space-100);\n}\n\n#discord-link img {\n  cursor: pointer;\n  height: 35px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tempestas-weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/intlFormat/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/intlFormat/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ intlFormat)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name intlFormat\n * @category Common Helpers\n * @summary  Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).\n *\n * @description\n * Return the formatted date string in the given format.\n * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.\n * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)\n *\n * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.\n *\n * @param {Date|Number} argument - the original date.\n * @param {Object} [formatOptions] - an object with options.\n * @param {'lookup'|'best fit'} [formatOptions.localeMatcher='best fit'] - locale selection algorithm.\n * @param {'narrow'|'short'|'long'} [formatOptions.weekday] - representation the days of the week.\n * @param {'narrow'|'short'|'long'} [formatOptions.era] - representation of eras.\n * @param {'numeric'|'2-digit'} [formatOptions.year] - representation of years.\n * @param {'numeric'|'2-digit'|'narrow'|'short'|'long'} [formatOptions.month='numeric'] - representation of month.\n * @param {'numeric'|'2-digit'} [formatOptions.day='numeric'] - representation of day.\n * @param {'numeric'|'2-digit'} [formatOptions.hour='numeric'] - representation of hours.\n * @param {'numeric'|'2-digit'} [formatOptions.minute] - representation of minutes.\n * @param {'numeric'|'2-digit'} [formatOptions.second] - representation of seconds.\n * @param {'short'|'long'} [formatOptions.timeZoneName] - representation of names of time zones.\n * @param {'basic'|'best fit'} [formatOptions.formatMatcher='best fit'] - format selection algorithm.\n * @param {Boolean} [formatOptions.hour12] - determines whether to use 12-hour time format.\n * @param {String} [formatOptions.timeZone] - the time zone to use.\n * @param {Object} [localeOptions] - an object with locale.\n * @param {String|String[]} [localeOptions.locale] - the locale code\n * @returns {String} the formatted date string.\n * @throws {TypeError} 1 argument required.\n * @throws {RangeError} `date` must not be Invalid Date\n *\n * @example\n * // Represent 10 October 2019 in German.\n * // Convert the date with format's options and locale's options.\n * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {\n *      weekday: 'long',\n *      year: 'numeric',\n *      month: 'long',\n *      day: 'numeric',\n *    }, {\n *      locale: 'de-DE',\n *  })\n * //=> Freitag, 4. Oktober 2019\n *\n * @example\n * // Represent 10 October 2019.\n * // Convert the date with format's options.\n * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {\n *      year: 'numeric',\n *      month: 'numeric',\n *      day: 'numeric',\n *      hour: 'numeric',\n *  })\n * //=> 10/4/2019, 12 PM\n *\n * @example\n * // Represent 10 October 2019 in Korean.\n * // Convert the date with locale's options.\n * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {\n *      locale: 'ko-KR',\n *  })\n * //=> 2019. 10. 4.\n *\n * @example\n * // Represent 10 October 2019 in middle-endian format:\n * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))\n * //=> 10/4/2019\n */\nfunction intlFormat(date, formatOrLocale, localeOptions) {\n  var _localeOptions;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var formatOptions;\n  if (isFormatOptions(formatOrLocale)) {\n    formatOptions = formatOrLocale;\n  } else {\n    localeOptions = formatOrLocale;\n  }\n  return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);\n}\nfunction isFormatOptions(opts) {\n  return opts !== undefined && !('locale' in opts);\n}\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/date-fns/esm/intlFormat/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tempestas-weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Carousel.js":
/*!*************************!*\
  !*** ./src/Carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Carousel)\n/* harmony export */ });\n/* harmony import */ var _observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers */ \"./src/observers.js\");\n/* harmony import */ var _src_assets_icons_icon_rain_percent_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/icons/icon-rain-percent.svg */ \"./src/assets/icons/icon-rain-percent.svg\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Utils */ \"./src/utils/Utils.js\");\n\n\n\n\nclass Carousel {\n  constructor(carouselElement) {\n    this.counter = 0\n    this.cards = []\n    this.carousel = carouselElement\n    this.leftButton = carouselElement.children[0]\n    this.leftButton.addEventListener(\"click\", () => {\n      if (this.counter === 0) return\n      this.counter++\n      this.applyTranslate()\n    })\n    this.carouselWindow = carouselElement.children[1]\n    this.rightButton = carouselElement.children[2]\n    this.rightButton.addEventListener(\"click\", () => {\n      if (Math.abs(this.counter) + 3 >= this.cards.length) {\n        return\n      }\n      this.counter--\n      this.applyTranslate()\n    })\n    _observers__WEBPACK_IMPORTED_MODULE_0__.ForecastObserver.subscribe(this.update.bind(this))\n  }\n  update(data) {\n    this.clean()\n    const weatherByHour = data.weatherByHour\n    if (weatherByHour.length === 0) {\n      console.log(\"Error in data show error\")\n      return\n    }\n\n    weatherByHour.forEach((hourlyWeather) => {\n      const card = new Card(hourlyWeather)\n      this.cards.push(card)\n      this.appendCard(card)\n    })\n  }\n  appendCard(card) {\n    this.carouselWindow.appendChild(card.getView())\n  }\n\n  clean() {\n    this.counter = 0\n    this.cards.length = 0\n    while (this.carouselWindow.hasChildNodes()) {\n      this.carouselWindow.removeChild(this.carouselWindow.firstChild)\n    }\n  }\n\n  applyTranslate() {\n    this.cards.forEach((card) => {\n      const translate = `${246 * this.counter}px`\n      card.getView().style.transform = `translate(${translate},0)`\n    })\n  }\n}\n\nclass Card {\n  constructor(data) {\n    this.forecastCard = document.createElement(\"div\")\n    this.forecastCard.classList.add(\"forecast-card\")\n\n    this.title = document.createElement(\"p\")\n    this.title.id = \"forecast-title\"\n    this.title.textContent = data.time\n\n    this.image = document.createElement(\"img\")\n    this.image.id = \"forecast-image\"\n    this.image.src = data.condition.img\n\n    this.miniContainer = document.createElement(\"div\")\n\n    this.rainPercentImg = document.createElement(\"img\")\n    this.rainPercentImg.id = \"rain-percent-icon\"\n    this.rainPercentImg.src = _src_assets_icons_icon_rain_percent_svg__WEBPACK_IMPORTED_MODULE_1__\n\n    this.rainPercent = document.createElement(\"p\")\n    this.rainPercent.id = \"rain-percent\"\n    this.rainPercent.textContent = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_2__.formatWeatherChance)(\n      data.chanceOfRain,\n      data.chanceOfSnow\n    )\n\n    this.miniContainer.append(this.rainPercentImg, this.rainPercent)\n    this.forecastCard.append(this.title, this.image, this.miniContainer)\n  }\n\n  getView() {\n    return this.forecastCard\n  }\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/Carousel.js?");

/***/ }),

/***/ "./src/Observer.js":
/*!*************************!*\
  !*** ./src/Observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observer)\n/* harmony export */ });\nclass Observer {\n  constructor() {\n    this.observers = []\n  }\n\n  subscribe(func) {\n    this.observers.push(func)\n  }\n\n  unsubscribe(func) {\n    this.observers = this.observers.filter((observer) => observer !== func)\n  }\n\n  notify(data) {\n    this.observers.forEach((observer) => observer(data))\n  }\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/Observer.js?");

/***/ }),

/***/ "./src/data/model/CurrentWeatherModel.js":
/*!***********************************************!*\
  !*** ./src/data/model/CurrentWeatherModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrentWeatherModel)\n/* harmony export */ });\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Utils */ \"./src/utils/Utils.js\");\n/* harmony import */ var _WeatherConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherConditions */ \"./src/data/model/WeatherConditions.js\");\n\n\n\n// TODO: Change this to get the condition code and chnage the condition to text\n// Adding properties like contion description, condition code, condtion img or icon\nfunction CurrentWeatherModel(\n  farenheitTemperature,\n  isDay,\n  code,\n  windMph,\n  humidity,\n  feelsLikeinFarenheit,\n  uvIndex,\n  sunrise,\n  sunset\n) {\n  this.farenheitTemperature = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.roundNumber)(farenheitTemperature)\n  this.isDay = isDay\n  this.code = code\n  this.condition = _WeatherConditions__WEBPACK_IMPORTED_MODULE_1__.WeatherConditions.getCondition(code, isDay)\n  this.windMph = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.roundNumber)(windMph)\n  this.humidity = humidity\n  this.feelsLikeinFarenheit = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.roundNumber)(feelsLikeinFarenheit)\n  this.uvIndex = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.formatUvIndex)(uvIndex)\n  this.sunrise = sunrise\n  this.sunset = sunset\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/model/CurrentWeatherModel.js?");

/***/ }),

/***/ "./src/data/model/DailyWeatherModel.js":
/*!*********************************************!*\
  !*** ./src/data/model/DailyWeatherModel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DailyWeatherModel)\n/* harmony export */ });\n/* harmony import */ var _WeatherConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherConditions */ \"./src/data/model/WeatherConditions.js\");\n\n\n// Weather by day object\nfunction DailyWeatherModel(\n  timeZone,\n  dateEpoch,\n  averageFarenheitTemperature,\n  code,\n  dailyChanceOfRain,\n  dailyChanceOfSnow\n) {\n  this.timeZone = timeZone\n  this.dateEpoch = dateEpoch\n  this.date = dateEpoch // Needs to be formatted\n  this.averageFarenheitTemperature = averageFarenheitTemperature\n  this.code = code\n  this.condition = _WeatherConditions__WEBPACK_IMPORTED_MODULE_0__.WeatherConditions.getCondition(code, false)\n  this.dailyChanceOfRain = dailyChanceOfRain\n  this.dailyChanceOfSnow = dailyChanceOfSnow\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/model/DailyWeatherModel.js?");

/***/ }),

/***/ "./src/data/model/ForecastModel.js":
/*!*****************************************!*\
  !*** ./src/data/model/ForecastModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ForecastModel)\n/* harmony export */ });\nfunction ForecastModel(\n  LocationModel,\n  CurrentWeather,\n  weatherByDays,\n  weatherByHours\n) {\n  this.location = LocationModel\n  this.currentWeather = CurrentWeather\n  this.weatherByDays = weatherByDays\n  this.weatherByHour = weatherByHours\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/model/ForecastModel.js?");

/***/ }),

/***/ "./src/data/model/HourlyWeatherModel.js":
/*!**********************************************!*\
  !*** ./src/data/model/HourlyWeatherModel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HourlyWeatherModel)\n/* harmony export */ });\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Utils */ \"./src/utils/Utils.js\");\n/* harmony import */ var _WeatherConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherConditions */ \"./src/data/model/WeatherConditions.js\");\n\n\n\nfunction HourlyWeatherModel(\n  timeZone,\n  epocTime,\n  isDay,\n  code,\n  farenheitTemperature,\n  chanceOfRain,\n  chanceOfSnow\n) {\n  this.timeZone = timeZone\n  this.epocTime = epocTime\n  this.time = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.formatEpochTime)(epocTime, timeZone)\n  this.isDay = isDay\n  this.code = code\n  this.condition = _WeatherConditions__WEBPACK_IMPORTED_MODULE_1__.WeatherConditions.getCondition(code, isDay)\n  this.farenheitTemperature = farenheitTemperature\n  this.chanceOfRain = chanceOfRain\n  this.chanceOfSnow = chanceOfSnow\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/model/HourlyWeatherModel.js?");

/***/ }),

/***/ "./src/data/model/LocationModel.js":
/*!*****************************************!*\
  !*** ./src/data/model/LocationModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocationModel)\n/* harmony export */ });\nfunction LocationModel(city, localTime, timeZone) {\n  this.city = city\n  this.localTime = localTime\n  this.timeZone = timeZone\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/model/LocationModel.js?");

/***/ }),

/***/ "./src/data/model/WeatherConditions.js":
/*!*********************************************!*\
  !*** ./src/data/model/WeatherConditions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WeatherConditions: () => (/* binding */ WeatherConditions)\n/* harmony export */ });\n/* harmony import */ var _assets_weather_condition_sunny_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/weather-condition/sunny.svg */ \"./src/assets/weather-condition/sunny.svg\");\n/* harmony import */ var _assets_weather_condition_clear_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/weather-condition/clear.svg */ \"./src/assets/weather-condition/clear.svg\");\n/* harmony import */ var _assets_weather_condition_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/weather-condition/partly-cloudy.svg */ \"./src/assets/weather-condition/partly-cloudy.svg\");\n/* harmony import */ var _assets_weather_condition_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/weather-condition/partly-cloudy-night.svg */ \"./src/assets/weather-condition/partly-cloudy-night.svg\");\n/* harmony import */ var _assets_weather_condition_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/weather-condition/cloudy.svg */ \"./src/assets/weather-condition/cloudy.svg\");\n/* harmony import */ var _assets_weather_condition_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/weather-condition/cloudy-night.svg */ \"./src/assets/weather-condition/cloudy-night.svg\");\n/* harmony import */ var _assets_weather_condition_overcast_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/weather-condition/overcast.svg */ \"./src/assets/weather-condition/overcast.svg\");\n/* harmony import */ var _assets_weather_condition_mist_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/weather-condition/mist.svg */ \"./src/assets/weather-condition/mist.svg\");\n/* harmony import */ var _assets_weather_condition_mist_night_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/weather-condition/mist-night.svg */ \"./src/assets/weather-condition/mist-night.svg\");\n/* harmony import */ var _assets_weather_condition_patchy_snow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/weather-condition/patchy-snow.svg */ \"./src/assets/weather-condition/patchy-snow.svg\");\n/* harmony import */ var _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/weather-condition/patchy-rain.svg */ \"./src/assets/weather-condition/patchy-rain.svg\");\n/* harmony import */ var _assets_weather_condition_patchy_sleet_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/weather-condition/patchy-sleet.svg */ \"./src/assets/weather-condition/patchy-sleet.svg\");\n/* harmony import */ var _assets_weather_condition_patchy_drizzle_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/weather-condition/patchy-drizzle.svg */ \"./src/assets/weather-condition/patchy-drizzle.svg\");\n/* harmony import */ var _assets_weather_condition_thunder_outbreak_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/weather-condition/thunder-outbreak.svg */ \"./src/assets/weather-condition/thunder-outbreak.svg\");\n/* harmony import */ var _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/weather-condition/snow.svg */ \"./src/assets/weather-condition/snow.svg\");\n/* harmony import */ var _assets_weather_condition_drizzle_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/weather-condition/drizzle.svg */ \"./src/assets/weather-condition/drizzle.svg\");\n/* harmony import */ var _assets_weather_condition_sleet_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/weather-condition/sleet.svg */ \"./src/assets/weather-condition/sleet.svg\");\n/* harmony import */ var _assets_weather_condition_fog_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/weather-condition/fog.svg */ \"./src/assets/weather-condition/fog.svg\");\n/* harmony import */ var _assets_weather_condition_fog_night_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/weather-condition/fog-night.svg */ \"./src/assets/weather-condition/fog-night.svg\");\n/* harmony import */ var _assets_weather_condition_moderate_rain_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/weather-condition/moderate-rain.svg */ \"./src/assets/weather-condition/moderate-rain.svg\");\n/* harmony import */ var _assets_weather_condition_ice_pellets_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/weather-condition/ice-pellets.svg */ \"./src/assets/weather-condition/ice-pellets.svg\");\n/* harmony import */ var _assets_weather_condition_torrential_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/weather-condition/torrential.svg */ \"./src/assets/weather-condition/torrential.svg\");\n/* harmony import */ var _assets_weather_condition_blizzard_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/weather-condition/blizzard.svg */ \"./src/assets/weather-condition/blizzard.svg\");\n/* harmony import */ var _assets_weather_condition_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/weather-condition/heavy-rain.svg */ \"./src/assets/weather-condition/heavy-rain.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst WeatherConditions = (function () {\n  const conditions = [\n    {\n      code: 1000,\n      day: \"Sunny\",\n      night: \"Clear\",\n      img: _assets_weather_condition_sunny_svg__WEBPACK_IMPORTED_MODULE_0__,\n      imgNight: _assets_weather_condition_clear_svg__WEBPACK_IMPORTED_MODULE_1__,\n    },\n    {\n      code: 1003,\n      day: \"Partly cloudy\",\n      night: \"Partly cloudy\",\n      img: _assets_weather_condition_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__,\n      imgNight: _assets_weather_condition_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_3__,\n    },\n    {\n      code: 1006,\n      day: \"Cloudy\",\n      night: \"Cloudy\",\n      img: _assets_weather_condition_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__,\n      imgNight: _assets_weather_condition_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__,\n    },\n    {\n      code: 1009,\n      day: \"Overcast\",\n      night: \"Overcast\",\n      img: _assets_weather_condition_overcast_svg__WEBPACK_IMPORTED_MODULE_6__,\n    },\n    {\n      code: 1030,\n      day: \"Mist\",\n      night: \"Mist\",\n      img: _assets_weather_condition_mist_svg__WEBPACK_IMPORTED_MODULE_7__,\n      imgNight: _assets_weather_condition_mist_night_svg__WEBPACK_IMPORTED_MODULE_8__,\n    },\n    {\n      code: 1063,\n      day: \"Patchy rain possible\",\n      night: \"Patchy rain possible\",\n      img: _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__,\n    },\n    {\n      code: 1066,\n      day: \"Patchy snow possible\",\n      night: \"Patchy snow possible\",\n      img: _assets_weather_condition_patchy_snow_svg__WEBPACK_IMPORTED_MODULE_9__,\n    },\n    {\n      code: 1069,\n      day: \"Patchy sleet possible\",\n      night: \"Patchy sleet possible\",\n      img: _assets_weather_condition_patchy_sleet_svg__WEBPACK_IMPORTED_MODULE_11__,\n    },\n    {\n      code: 1072,\n      day: \"Patchy freezing drizzle possible\",\n      night: \"Patchy freezing drizzle possible\",\n      img: _assets_weather_condition_patchy_drizzle_svg__WEBPACK_IMPORTED_MODULE_12__,\n    },\n    {\n      code: 1087,\n      day: \"Thundery outbreaks possible\",\n      night: \"Thundery outbreaks possible\",\n      img: _assets_weather_condition_thunder_outbreak_svg__WEBPACK_IMPORTED_MODULE_13__,\n    },\n    {\n      code: 1114,\n      day: \"Blowing snow\",\n      night: \"Blowing snow\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1117,\n      day: \"Blizzard\",\n      night: \"Blizzard\",\n      img: _assets_weather_condition_blizzard_svg__WEBPACK_IMPORTED_MODULE_22__,\n    },\n    {\n      code: 1135,\n      day: \"Fog\",\n      night: \"Fog\",\n      img: _assets_weather_condition_fog_svg__WEBPACK_IMPORTED_MODULE_17__,\n      imgNight: _assets_weather_condition_fog_night_svg__WEBPACK_IMPORTED_MODULE_18__,\n    },\n    {\n      code: 1147,\n      day: \"Freezing fog\",\n      night: \"Freezing fog\",\n      img: _assets_weather_condition_fog_svg__WEBPACK_IMPORTED_MODULE_17__,\n      imgNight: _assets_weather_condition_fog_night_svg__WEBPACK_IMPORTED_MODULE_18__,\n    },\n    {\n      code: 1150,\n      day: \"Patchy light drizzle\",\n      night: \"Patchy light drizzle\",\n      img: _assets_weather_condition_patchy_drizzle_svg__WEBPACK_IMPORTED_MODULE_12__,\n    },\n    {\n      code: 1153,\n      day: \"Light drizzle\",\n      night: \"Light drizzle\",\n      img: _assets_weather_condition_patchy_drizzle_svg__WEBPACK_IMPORTED_MODULE_12__,\n    },\n    {\n      code: 1168,\n      day: \"Freezing drizzle\",\n      night: \"Freezing drizzle\",\n      img: _assets_weather_condition_patchy_drizzle_svg__WEBPACK_IMPORTED_MODULE_12__,\n    },\n    {\n      code: 1171,\n      day: \"Heavy freezing drizzle\",\n      night: \"Heavy freezing drizzle\",\n      img: _assets_weather_condition_drizzle_svg__WEBPACK_IMPORTED_MODULE_15__,\n    },\n    {\n      code: 1180,\n      day: \"Patchy light rain\",\n      night: \"Patchy light rain\",\n      img: _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__,\n    },\n    {\n      code: 1183,\n      day: \"Light rain\",\n      night: \"Light rain\",\n      img: _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__,\n    },\n    {\n      code: 1186,\n      day: \"Moderate rain at times\",\n      night: \"Moderate rain at times\",\n      img: _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__,\n    },\n    {\n      code: 1189,\n      day: \"Moderate rain\",\n      night: \"Moderate rain\",\n      img: _assets_weather_condition_moderate_rain_svg__WEBPACK_IMPORTED_MODULE_19__,\n    },\n    {\n      code: 1192,\n      day: \"Heavy rain at times\",\n      night: \"Heavy rain at times\",\n      img: _assets_weather_condition_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_23__,\n    },\n    {\n      code: 1195,\n      day: \"Heavy rain\",\n      night: \"Heavy rain\",\n      img: _assets_weather_condition_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_23__,\n    },\n    {\n      code: 1198,\n      day: \"Light freezing rain\",\n      night: \"Light freezing rain\",\n      img: _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__,\n    },\n    {\n      code: 1201,\n      day: \"Moderate or heavy freezing rain\",\n      night: \"Moderate or heavy freezing rain\",\n      img: _assets_weather_condition_moderate_rain_svg__WEBPACK_IMPORTED_MODULE_19__,\n    },\n    {\n      code: 1204,\n      day: \"Light sleet\",\n      night: \"Light sleet\",\n      img: _assets_weather_condition_patchy_sleet_svg__WEBPACK_IMPORTED_MODULE_11__,\n    },\n    {\n      code: 1207,\n      day: \"Moderate or heavy sleet\",\n      night: \"Moderate or heavy sleet\",\n      img: _assets_weather_condition_sleet_svg__WEBPACK_IMPORTED_MODULE_16__,\n    },\n    {\n      code: 1210,\n      day: \"Patchy light snow\",\n      night: \"Patchy light snow\",\n      img: _assets_weather_condition_patchy_snow_svg__WEBPACK_IMPORTED_MODULE_9__,\n    },\n    {\n      code: 1213,\n      day: \"Light snow\",\n      night: \"Light snow\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1216,\n      day: \"Patchy moderate snow\",\n      night: \"Patchy moderate snow\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1219,\n      day: \"Moderate snow\",\n      night: \"Moderate snow\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1222,\n      day: \"Patchy heavy snow\",\n      night: \"Patchy heavy snow\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1225,\n      day: \"Heavy snow\",\n      night: \"Heavy snow\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1237,\n      day: \"Ice pellets\",\n      night: \"Ice pellets\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1240,\n      day: \"Light rain shower\",\n      night: \"Light rain shower\",\n      img: _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__,\n    },\n    {\n      code: 1243,\n      day: \"Moderate or heavy rain shower\",\n      night: \"Moderate or heavy rain shower\",\n      img: _assets_weather_condition_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_23__,\n    },\n    {\n      code: 1246,\n      day: \"Torrential rain shower\",\n      night: \"Torrential rain shower\",\n      img: _assets_weather_condition_torrential_svg__WEBPACK_IMPORTED_MODULE_21__,\n    },\n    {\n      code: 1249,\n      day: \"Light sleet showers\",\n      night: \"Light sleet showers\",\n      img: _assets_weather_condition_sleet_svg__WEBPACK_IMPORTED_MODULE_16__,\n    },\n    {\n      code: 1252,\n      day: \"Moderate or heavy sleet showers\",\n      night: \"Moderate or heavy sleet showers\",\n      img: _assets_weather_condition_sleet_svg__WEBPACK_IMPORTED_MODULE_16__,\n    },\n    {\n      code: 1255,\n      day: \"Light snow\",\n      night: \"Light snow showers\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1258,\n      day: \"Moderate or heavy snow showers\",\n      night: \"Moderate or heavy snow showers\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n    {\n      code: 1261,\n      day: \"Light showers of ice pellets\",\n      night: \"Light showers of ice pellets\",\n      img: _assets_weather_condition_ice_pellets_svg__WEBPACK_IMPORTED_MODULE_20__,\n    },\n    {\n      code: 1264,\n      day: \"Moderate or heavy showers of ice pellets\",\n      night: \"Moderate or heavy showers of ice pellets\",\n      img: _assets_weather_condition_ice_pellets_svg__WEBPACK_IMPORTED_MODULE_20__,\n    },\n    {\n      code: 1273,\n      day: \"Patchy light rain with thunder\",\n      night: \"Patchy light rain with thunder\",\n      img: _assets_weather_condition_patchy_rain_svg__WEBPACK_IMPORTED_MODULE_10__,\n    },\n    {\n      code: 1276,\n      day: \"Moderate or heavy rain with thunder\",\n      night: \"Moderate or heavy rain with thunder\",\n      img: _assets_weather_condition_moderate_rain_svg__WEBPACK_IMPORTED_MODULE_19__,\n    },\n    {\n      code: 1279,\n      day: \"Patchy light snow with thunder\",\n      night: \"Patchy light snow with thunder\",\n      img: _assets_weather_condition_patchy_snow_svg__WEBPACK_IMPORTED_MODULE_9__,\n    },\n    {\n      code: 1282,\n      day: \"Moderate or heavy snow with thunder\",\n      night: \"Moderate or heavy snow with thunder\",\n      img: _assets_weather_condition_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\n    },\n  ]\n\n  return {\n    getCondition(code, isDay) {\n      const obj = {\n        text: null,\n        img: null,\n      }\n      conditions.forEach((condition) => {\n        if (condition.code === code) {\n          // If its not day and has imgNight prop\n          if (!isDay && condition.hasOwnProperty(\"imgNight\")) {\n            obj.text = condition.night\n            obj.img = condition.imgNight\n            return\n          }\n          obj.text = condition.day\n          obj.img = condition.img\n        }\n      })\n\n      return obj\n    },\n  }\n})()\n\n\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/model/WeatherConditions.js?");

/***/ }),

/***/ "./src/data/service/ForecastService.js":
/*!*********************************************!*\
  !*** ./src/data/service/ForecastService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ForecastService: () => (/* binding */ ForecastService)\n/* harmony export */ });\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Utils */ \"./src/utils/Utils.js\");\n/* harmony import */ var _observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observers */ \"./src/observers.js\");\n\n\n\nconst ForecastService = (function createForecastService() {\n  const KEY = \"186407c1fe2c47229a5131447231908\"\n\n  async function getForecast(city) {\n    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3&aqi=no&alerts=no`\n    await fetch(forecastUrl, { mode: \"cors\" })\n      .then((response) => {\n        if (response.ok) {\n          return response.json()\n        }\n        //This will make the next then() run reject callback\n        throw new Error(\"Https error! status: \" + response.status)\n      })\n      .then(\n        function onSuccess(response) {\n          const ForecastModel = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.getForecastFromJson)(response)\n          _observers__WEBPACK_IMPORTED_MODULE_1__.ForecastObserver.notify(ForecastModel)\n          console.log(ForecastModel)\n          console.log(response)\n        },\n        function onReject(reject) {\n          console.log(\"Promise rejected\")\n          console.log(reject)\n          _observers__WEBPACK_IMPORTED_MODULE_1__.SearchErrorObserver.notify()\n        }\n      )\n  }\n\n  return {\n    getForecast,\n  }\n})()\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/service/ForecastService.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_icons_icon_goddess_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/icon-goddess-logo.svg */ \"./src/assets/icons/icon-goddess-logo.svg\");\n/* harmony import */ var _assets_icons_icon_discord_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/icon-discord.svg */ \"./src/assets/icons/icon-discord.svg\");\n/* harmony import */ var _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/chevron-left.svg */ \"./src/assets/icons/chevron-left.svg\");\n/* harmony import */ var _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/chevron-right.svg */ \"./src/assets/icons/chevron-right.svg\");\n/* harmony import */ var _assets_icons_icon_uv_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/icon-uv.svg */ \"./src/assets/icons/icon-uv.svg\");\n/* harmony import */ var _assets_icons_icon_sunset_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/icon-sunset.svg */ \"./src/assets/icons/icon-sunset.svg\");\n/* harmony import */ var _assets_icons_icon_humidity_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/icon-humidity.svg */ \"./src/assets/icons/icon-humidity.svg\");\n/* harmony import */ var _assets_icons_icon_winds_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icons/icon-winds.svg */ \"./src/assets/icons/icon-winds.svg\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/Utils */ \"./src/utils/Utils.js\");\n/* harmony import */ var _observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers */ \"./src/observers.js\");\n/* harmony import */ var _data_service_ForecastService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/service/ForecastService */ \"./src/data/service/ForecastService.js\");\n/* harmony import */ var _res_Strings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./res/Strings */ \"./src/res/Strings.js\");\n/* harmony import */ var _data_model_WeatherConditions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/model/WeatherConditions */ \"./src/data/model/WeatherConditions.js\");\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Carousel */ \"./src/Carousel.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst service = _data_service_ForecastService__WEBPACK_IMPORTED_MODULE_11__.ForecastService\n\n// Setting the default images of the page\n\nconst loadTabIcon = () => {\n  const link = document.createElement(\"link\")\n  link.setAttribute(\"rel\", \"icon\")\n  link.href = _assets_icons_icon_goddess_logo_svg__WEBPACK_IMPORTED_MODULE_1__\n  document.head.appendChild(link)\n}\n\nconst loadDefaultImages = () => {\n  const logoImage = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\".logo img\")\n  const discordImage = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#discord-link img\")\n  const leftButtonImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#left img\")\n  const rightButtonImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#right img\")\n  const uvImage = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#uv-img\")\n  const humidityImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#humidity-img\")\n  const windsImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#winds-img\")\n  const sunsetImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#sunset-img\")\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(logoImage, _assets_icons_icon_goddess_logo_svg__WEBPACK_IMPORTED_MODULE_1__)\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(discordImage, _assets_icons_icon_discord_svg__WEBPACK_IMPORTED_MODULE_2__)\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(leftButtonImg, _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__)\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(rightButtonImg, _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_4__)\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(uvImage, _assets_icons_icon_uv_svg__WEBPACK_IMPORTED_MODULE_5__)\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(humidityImg, _assets_icons_icon_humidity_svg__WEBPACK_IMPORTED_MODULE_7__)\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(windsImg, _assets_icons_icon_winds_svg__WEBPACK_IMPORTED_MODULE_8__)\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(sunsetImg, _assets_icons_icon_sunset_svg__WEBPACK_IMPORTED_MODULE_6__)\n}\nconst getDefaultWeather = () => {\n  service.getForecast(\"Ponce\")\n}\nconst handleEnter = (event) => {\n  const parent = event.target\n  if (\n    event.key === \"Enter\" &&\n    (parent.validity.valueMissing || (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.isBlank)(parent.value))\n  ) {\n    (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.showErrorMessage)(parent, \"Cannot search empty value\")\n    //reset the caret\n    parent.value = \"\"\n    return\n  }\n\n  if (event.key === \"Enter\") {\n    service.getForecast(parent.value)\n  }\n}\n\nconst handleInput = (event) => {\n  const parent = event.target\n  if (!parent.validity.valueMissing && !(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.isBlank)(parent.value)) {\n    (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.disableErrorMessage)(parent)\n  }\n}\n\nconst updateLocationWeather = (data) => {\n  // current weather obj\n  const temperaturePara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\".temperature\")\n  const conditionImage = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#condition-image\")\n  const conditionPara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\".condition\")\n  const temperatureFeelsPara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\".temperature-feels\")\n  const locationPara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#location\")\n\n  const currentWeather = data.currentWeather\n\n  temperaturePara.textContent =\n    currentWeather.farenheitTemperature + _res_Strings__WEBPACK_IMPORTED_MODULE_12__.Strings.DEGREE_SYMBOL_HEX\n\n  conditionPara.textContent = currentWeather.condition.text\n  temperatureFeelsPara.textContent =\n    \"Feels like \" +\n    currentWeather.feelsLikeinFarenheit +\n    _res_Strings__WEBPACK_IMPORTED_MODULE_12__.Strings.DEGREE_SYMBOL_HEX\n\n  conditionImage.src = currentWeather.condition.img\n  locationPara.textContent = data.location.city\n}\n\nconst updateWeatherDescriptions = (data) => {\n  const uvIndexPara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#uv-index\")\n  const humidityPara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#humidity\")\n  const windsPara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#winds\")\n  const sunrisePara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#sunrise\")\n  const sunsetPara = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#sunset\")\n\n  uvIndexPara.textContent = data.currentWeather.uvIndex\n  humidityPara.textContent =\n    data.currentWeather.humidity + _res_Strings__WEBPACK_IMPORTED_MODULE_12__.Strings.PERCENT_SYMBOL\n  windsPara.textContent = `${data.currentWeather.windMph} ${_res_Strings__WEBPACK_IMPORTED_MODULE_12__.Strings.MILES_PER_HOUR}`\n\n  sunrisePara.textContent = data.currentWeather.sunrise\n  sunsetPara.textContent = data.currentWeather.sunset\n}\n\nconst showSearchError = () => {\n  const searchInput = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#search\")\n  ;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.showErrorMessage)(searchInput, \"Could not find a match in the server\")\n}\n\n// Main\nloadTabIcon()\nloadDefaultImages()\ngetDefaultWeather()\n\nconst searchInput = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#search\")\nsearchInput.addEventListener(\"keydown\", handleEnter)\nsearchInput.addEventListener(\"input\", handleInput)\n\nconst carouselElement = document.querySelector(\".carousel\")\nconst carousel = new _Carousel__WEBPACK_IMPORTED_MODULE_14__[\"default\"](carouselElement)\n\n// Setting my observers\n_observers__WEBPACK_IMPORTED_MODULE_10__.ForecastObserver.subscribe(updateLocationWeather)\n_observers__WEBPACK_IMPORTED_MODULE_10__.ForecastObserver.subscribe(updateWeatherDescriptions)\n_observers__WEBPACK_IMPORTED_MODULE_10__.SearchErrorObserver.subscribe(showSearchError)\n\n\n//# sourceURL=webpack://tempestas-weather/./src/index.js?");

/***/ }),

/***/ "./src/observers.js":
/*!**************************!*\
  !*** ./src/observers.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ForecastObserver: () => (/* binding */ ForecastObserver),\n/* harmony export */   SearchErrorObserver: () => (/* binding */ SearchErrorObserver)\n/* harmony export */ });\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./src/Observer.js\");\n\n\n// Observer for the forecast Model\nconst ForecastObserver = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n// Observer for\nconst SearchErrorObserver = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n\n\n//# sourceURL=webpack://tempestas-weather/./src/observers.js?");

/***/ }),

/***/ "./src/res/Strings.js":
/*!****************************!*\
  !*** ./src/res/Strings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Strings: () => (/* binding */ Strings)\n/* harmony export */ });\nconst Strings = {\n  DEGREE_SYMBOL_HEX: `\\xB0`,\n  PERCENT_SYMBOL: \"%\",\n  MILES_PER_HOUR: \"mph\",\n  FARENHEIT_SYMBOL: \"F\",\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/res/Strings.js?");

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disableErrorMessage: () => (/* binding */ disableErrorMessage),\n/* harmony export */   formatEpochTime: () => (/* binding */ formatEpochTime),\n/* harmony export */   formatUvIndex: () => (/* binding */ formatUvIndex),\n/* harmony export */   formatWeatherChance: () => (/* binding */ formatWeatherChance),\n/* harmony export */   getCurrentWeatherFromJson: () => (/* binding */ getCurrentWeatherFromJson),\n/* harmony export */   getElement: () => (/* binding */ getElement),\n/* harmony export */   getForecastFromJson: () => (/* binding */ getForecastFromJson),\n/* harmony export */   isBlank: () => (/* binding */ isBlank),\n/* harmony export */   loadImage: () => (/* binding */ loadImage),\n/* harmony export */   roundNumber: () => (/* binding */ roundNumber),\n/* harmony export */   showErrorMessage: () => (/* binding */ showErrorMessage)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/intlFormat/index.js\");\n/* harmony import */ var _data_model_CurrentWeatherModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/model/CurrentWeatherModel */ \"./src/data/model/CurrentWeatherModel.js\");\n/* harmony import */ var _data_model_DailyWeatherModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/model/DailyWeatherModel */ \"./src/data/model/DailyWeatherModel.js\");\n/* harmony import */ var _data_model_ForecastModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/model/ForecastModel */ \"./src/data/model/ForecastModel.js\");\n/* harmony import */ var _data_model_HourlyWeatherModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/model/HourlyWeatherModel */ \"./src/data/model/HourlyWeatherModel.js\");\n/* harmony import */ var _data_model_LocationModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/model/LocationModel.js */ \"./src/data/model/LocationModel.js\");\n\n\n\n\n\n\n\n// Utility functions\nconst getElement = (selector) => {\n  const element = document.querySelector(selector)\n  return element\n}\n\nconst loadImage = (img, path) => {\n  img.src = path\n}\n\nconst showErrorMessage = (parent, errorMessage) => {\n  const errorElement = parent.nextElementSibling\n  errorElement.textContent = errorMessage\n  if (errorElement.hasAttribute(\"show\")) return\n  errorElement.toggleAttribute(\"show\")\n}\n\nconst disableErrorMessage = (parent) => {\n  const errorElement = parent.nextElementSibling\n  if (errorElement.hasAttribute(\"show\")) {\n    errorElement.toggleAttribute(\"show\")\n  }\n}\n\nconst isBlank = (string) => {\n  return string.trim() === \"\"\n}\n\nconst roundNumber = (number) => {\n  return Math.round(number)\n}\n\nconst formatUvIndex = (uvIndex) => {\n  const LOW = \"Low\"\n  const MEDIUM = \"Medium\"\n  const HIGH = \"High\"\n  if (uvIndex < 3) return LOW\n  if (uvIndex > 2 && uvIndex < 8) return MEDIUM\n  return HIGH\n}\n\nconst getCurrentWeatherFromJson = (response) => {\n  let sunrise = null\n  let sunset = null\n\n  if (response.forecast.forecastday.length != 0) {\n    sunrise = response.forecast.forecastday[0].astro.sunrise\n    sunset = response.forecast.forecastday[0].astro.sunset\n  }\n\n  return new _data_model_CurrentWeatherModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n    response.current.temp_f,\n    response.current.is_day,\n    response.current.condition.code,\n    response.current.wind_mph,\n    response.current.humidity,\n    response.current.feelslike_f,\n    response.current.uv,\n    sunrise,\n    sunset\n  )\n}\nconst getLocationFromJson = (response) => {\n  const name = response.location.name\n  const epocLocalTime = response.location.localtime_epoch\n  const timeZone = response.location.tz_id\n  return new _data_model_LocationModel_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](name, epocLocalTime, timeZone)\n}\n\nconst getWeatherByDaysFromJson = (response, timeZone) => {\n  const dailyWeatherModels = []\n  const forecastDays = response.forecast.forecastday\n\n  if (forecastDays.length === 0) {\n    return dailyWeatherModels\n  }\n  forecastDays.forEach((element) => {\n    const dailyWeatherModel = new _data_model_DailyWeatherModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      timeZone,\n      element.date_epoch,\n      element.day.avgtemp_f,\n      element.day.condition.code,\n      element.day.daily_chance_of_rain,\n      element.day.daily_chance_of_snow\n    )\n    dailyWeatherModels.push(dailyWeatherModel)\n  })\n  return dailyWeatherModels\n}\n\n// This will probably need an update only get the hourly weather from one day\n// and if its 11pm or more it doesnt return anything\nconst getHourlyWeatherFromJson = (response, timeZone) => {\n  const hourlyWeatherModels = []\n  const forecastDays = response.forecast.forecastday\n  if (forecastDays.length === 0) {\n    return hourlyWeatherModels\n  }\n  const localTimeEpoch = response.location.localtime_epoch\n  const weatherByHours = forecastDays[0].hour\n\n  weatherByHours.forEach((hourlyWeather) => {\n    if (hourlyWeather.time_epoch > localTimeEpoch) {\n      const hourlyWeatherModel = new _data_model_HourlyWeatherModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        timeZone,\n        hourlyWeather.time_epoch,\n        hourlyWeather.is_day,\n        hourlyWeather.condition.code,\n        hourlyWeather.temp_f,\n        hourlyWeather.chance_of_rain,\n        hourlyWeather.chance_of_snow\n      )\n      hourlyWeatherModels.push(hourlyWeatherModel)\n    }\n  })\n  return hourlyWeatherModels\n}\n\nconst getForecastFromJson = (response) => {\n  const LocationModel = getLocationFromJson(response)\n  const CurrentWeatherModel = getCurrentWeatherFromJson(response)\n  const dailyWeatherModels = getWeatherByDaysFromJson(\n    response,\n    LocationModel.timeZone\n  )\n  const hourlyWeatherModels = getHourlyWeatherFromJson(\n    response,\n    LocationModel.timeZone\n  )\n  return new _data_model_ForecastModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n    LocationModel,\n    CurrentWeatherModel,\n    dailyWeatherModels,\n    hourlyWeatherModels\n  )\n}\n\nconst formatWeatherChance = (rainChance, snowChance) => {\n  const rainChanceFormat = `${rainChance}%`\n  const snowChanceFormat = `${snowChance}%`\n  return rainChance > snowChance ? rainChanceFormat : snowChanceFormat\n}\n\n// Need to get the timezone from the server and add it here\nconst formatEpochTime = (epochValue, timeZone) => {\n  const time = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(epochValue)\n\n  const formatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(time, {\n    hour: \"numeric\",\n    hour12: true,\n    timeZone,\n  })\n\n  return formatted\n}\n\n\n\n//# sourceURL=webpack://tempestas-weather/./src/utils/Utils.js?");

/***/ }),

/***/ "./src/assets/icons/chevron-left.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/chevron-left.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3490f5eea08639f690a3.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/chevron-left.svg?");

/***/ }),

/***/ "./src/assets/icons/chevron-right.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/chevron-right.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb3e629604702ef8bc66.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/chevron-right.svg?");

/***/ }),

/***/ "./src/assets/icons/icon-discord.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/icon-discord.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0614fb94370f48eb85f5.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/icon-discord.svg?");

/***/ }),

/***/ "./src/assets/icons/icon-goddess-logo.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/icon-goddess-logo.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7896a79392db8ef0c323.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/icon-goddess-logo.svg?");

/***/ }),

/***/ "./src/assets/icons/icon-humidity.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/icon-humidity.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c887af31bd62b2d2f25.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/icon-humidity.svg?");

/***/ }),

/***/ "./src/assets/icons/icon-rain-percent.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/icon-rain-percent.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a542ed65987421f1a57c.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/icon-rain-percent.svg?");

/***/ }),

/***/ "./src/assets/icons/icon-sunset.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/icon-sunset.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76dc4279a8eec0574ac6.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/icon-sunset.svg?");

/***/ }),

/***/ "./src/assets/icons/icon-uv.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/icon-uv.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e293ade4e1e12f0295a.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/icon-uv.svg?");

/***/ }),

/***/ "./src/assets/icons/icon-winds.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/icon-winds.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b55595abbd2ac6f4426.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/icons/icon-winds.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/blizzard.svg":
/*!***************************************************!*\
  !*** ./src/assets/weather-condition/blizzard.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92465be975a7661f8d3d.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/blizzard.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/clear.svg":
/*!************************************************!*\
  !*** ./src/assets/weather-condition/clear.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9a575a8679b1892e1d9.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/clear.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/cloudy-night.svg":
/*!*******************************************************!*\
  !*** ./src/assets/weather-condition/cloudy-night.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6890cee8c1efb8ffffa1.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/cloudy-night.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/cloudy.svg":
/*!*************************************************!*\
  !*** ./src/assets/weather-condition/cloudy.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a709534cd291138b2642.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/cloudy.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/drizzle.svg":
/*!**************************************************!*\
  !*** ./src/assets/weather-condition/drizzle.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4df6a5884464be6965d3.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/drizzle.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/fog-night.svg":
/*!****************************************************!*\
  !*** ./src/assets/weather-condition/fog-night.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9114192ca50005a9254f.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/fog-night.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/fog.svg":
/*!**********************************************!*\
  !*** ./src/assets/weather-condition/fog.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eea37afed2d32bc367fa.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/fog.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/heavy-rain.svg":
/*!*****************************************************!*\
  !*** ./src/assets/weather-condition/heavy-rain.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e1c34cd5a13e08b3b76c.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/heavy-rain.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/ice-pellets.svg":
/*!******************************************************!*\
  !*** ./src/assets/weather-condition/ice-pellets.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d85a5ae9bbb1dbef282.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/ice-pellets.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/mist-night.svg":
/*!*****************************************************!*\
  !*** ./src/assets/weather-condition/mist-night.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9114192ca50005a9254f.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/mist-night.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/mist.svg":
/*!***********************************************!*\
  !*** ./src/assets/weather-condition/mist.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eea37afed2d32bc367fa.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/mist.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/moderate-rain.svg":
/*!********************************************************!*\
  !*** ./src/assets/weather-condition/moderate-rain.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25d1e1616e093f432e73.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/moderate-rain.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/overcast.svg":
/*!***************************************************!*\
  !*** ./src/assets/weather-condition/overcast.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1b2a997735a41800150.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/overcast.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/partly-cloudy-night.svg":
/*!**************************************************************!*\
  !*** ./src/assets/weather-condition/partly-cloudy-night.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6890cee8c1efb8ffffa1.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/partly-cloudy-night.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/partly-cloudy.svg":
/*!********************************************************!*\
  !*** ./src/assets/weather-condition/partly-cloudy.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a709534cd291138b2642.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/partly-cloudy.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/patchy-drizzle.svg":
/*!*********************************************************!*\
  !*** ./src/assets/weather-condition/patchy-drizzle.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4df6a5884464be6965d3.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/patchy-drizzle.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/patchy-rain.svg":
/*!******************************************************!*\
  !*** ./src/assets/weather-condition/patchy-rain.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4df6a5884464be6965d3.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/patchy-rain.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/patchy-sleet.svg":
/*!*******************************************************!*\
  !*** ./src/assets/weather-condition/patchy-sleet.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d2d3872587b0be2ddb0.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/patchy-sleet.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/patchy-snow.svg":
/*!******************************************************!*\
  !*** ./src/assets/weather-condition/patchy-snow.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"762517eb8c1fc90da1b7.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/patchy-snow.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/sleet.svg":
/*!************************************************!*\
  !*** ./src/assets/weather-condition/sleet.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d2d3872587b0be2ddb0.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/sleet.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/snow.svg":
/*!***********************************************!*\
  !*** ./src/assets/weather-condition/snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1888aa28fbfbf5102df2.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/snow.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/sunny.svg":
/*!************************************************!*\
  !*** ./src/assets/weather-condition/sunny.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e7305b649d023e1eb30.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/sunny.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/thunder-outbreak.svg":
/*!***********************************************************!*\
  !*** ./src/assets/weather-condition/thunder-outbreak.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db40898cc957438dbea4.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/thunder-outbreak.svg?");

/***/ }),

/***/ "./src/assets/weather-condition/torrential.svg":
/*!*****************************************************!*\
  !*** ./src/assets/weather-condition/torrential.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49087656903016236b7e.svg\";\n\n//# sourceURL=webpack://tempestas-weather/./src/assets/weather-condition/torrential.svg?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://tempestas-weather/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;