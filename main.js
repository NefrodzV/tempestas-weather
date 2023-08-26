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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  /* Sky Colors */\n  --clr-50: #f0f9ff;\n  --clr-100: #e0f2fe;\n  --clr-200: #bae6fd;\n  --clr-300: #7dd3fc;\n  --clr-400: #38bdf8;\n  --clr-500: #0ea5e9;\n  --clr-600: #0284c7;\n  --clr-700: #0369a1;\n  --clr-800: #075985;\n  --clr-900: #0c4a6e;\n  --clr-950: #082f49;\n\n  --space-100: 8px;\n  --space-200: 16px;\n  --space-300: 24px;\n\n  --clr-primary: var(--clr-400);\n  --clr-secondary: var(--clr-200);\n  --clr-light: var(--clr-100);\n  --clr-dark: var(--clr-950);\n}\n\n/* CSS RESET */\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/** My style begins here */\n\nbody,\nheader,\nmain,\nfooter,\n.logo,\n.searched-location,\n.location-weather,\n.carousel,\n.window,\n.forecast-card,\n.description-weather,\n.sun-wrapper,\n.search-wrapper {\n  display: flex;\n}\n\nbody {\n  font-family: \"Courier New\", Courier, monospace;\n  color: var(--clr-dark);\n  height: 100%;\n  align-items: stretch;\n  line-height: 1;\n}\n\nbody,\nmain,\n.location-weather .card,\n.description-weather .card,\n.forecast-card,\n.search-wrapper {\n  flex-direction: column;\n}\n\nheader {\n  position: relative;\n  background-color: var(--clr-primary);\n  padding: 0 var(--space-300);\n  align-items: center;\n  box-shadow: 0px 0px 6px var(--clr-dark);\n}\n\n.logo {\n  gap: var(--space-100);\n  justify-content: center;\n  align-items: center;\n}\n.logo > img {\n  height: 100%;\n  width: 100%;\n}\n\n.logo p {\n  font-weight: bolder;\n  width: min-content;\n  line-height: 1;\n}\n\n.logo p span {\n  margin-left: 2px;\n}\n\n.name {\n  font-size: 3rem;\n}\n\n.search-wrapper {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n}\n\n#search {\n  /* margin: 0 auto;\n  width: 700px; */\n  cursor: pointer;\n  outline-offset: 1px;\n  background-color: var(--clr-light);\n  padding-inline: 1%;\n  border-radius: 25px;\n  /* border: none; */\n  font-size: 2rem;\n  height: 3rem;\n  box-shadow: 0px 0px 3px var(--clr-dark) inset;\n}\n\n.error {\n  opacity: 0;\n  border-radius: 25px;\n  padding: 1%;\n  transition: all 500ms ease;\n  position: absolute;\n  width: max-content;\n  border: 1px solid red;\n  background-color: var(--clr-50);\n  color: red;\n  bottom: -2rem;\n  align-self: center;\n  transform: scale(0);\n}\n\n.error[show] {\n  opacity: 1;\n  transform: scale(1);\n  width: auto;\n}\n\n.about {\n  font-size: 1.5rem;\n}\n\nmain {\n  background-color: #bae6fd;\n  padding: var(--space-200);\n  flex: 2;\n  gap: var(--space-200);\n}\n.carousel,\n.card {\n  border-radius: 25px;\n}\n\n.location-weather {\n  gap: var(--space-300);\n  flex: 5;\n}\n\n.location-weather .card {\n  box-shadow: 0px 0px 3px var(--clr-dark);\n  color: var(--clr-light);\n  background-color: var(--clr-primary);\n  display: flex;\n  justify-content: center;\n}\n\n.location-weather .card .body {\n  margin-inline: auto;\n  width: fit-content;\n}\n\n.card-header {\n  display: flex;\n  align-items: flex-end;\n  margin: 0;\n  margin-inline: 0;\n}\n\n#condition-image {\n  height: 150px;\n}\n\n.temperature {\n  font-size: 4rem;\n}\n\n.condition {\n  font-size: 3rem;\n}\n\n.temperature-feels {\n  font-size: 2rem;\n}\n\n#location {\n  font-size: 1.2rem;\n}\n\n.card {\n  flex-basis: 75%;\n}\n\n.carousel,\n.forecast-card {\n  align-items: center;\n  justify-content: center;\n}\n.carousel {\n  flex-basis: 100%;\n  gap: var(--space-100);\n}\n.carousel button {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  cursor: pointer;\n  background-color: var(--clr-secondary);\n  border: none;\n  height: 50px;\n  width: 50px;\n}\n.carousel button img {\n  width: 100%;\n}\n\n.carousel .window {\n  overflow: hidden;\n  gap: var(--space-200);\n  max-width: 737px;\n  height: 80%;\n}\n\n.forecast-card {\n  margin: 1% 0px;\n  font-weight: bold;\n  color: var(--clr-light);\n  background-color: var(--clr-primary);\n  box-shadow: 0px 0px 6px var(--clr-dark);\n  border-radius: 25px;\n  min-width: 230px;\n  gap: var(--space-200);\n}\n\n.forecast-card:first-child {\n  margin-left: 1%;\n}\n\n.forecast-card:last-child {\n  margin-right: 1%;\n}\n\n.forecast-card div {\n  display: flex;\n  align-items: center;\n  gap: var(--space-100);\n}\n\n#forecast-title,\n#rain-percent {\n  font-size: 1.2rem;\n}\n#forecast-temperature {\n  font-size: 2rem;\n}\n.description-weather {\n  flex: 3;\n  gap: var(--space-100);\n}\n\n.description-weather .card {\n  background-color: var(--clr-50);\n  box-shadow: 0px 0px 3px var(--clr-dark);\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.description-weather .card img {\n  width: 96px;\n  height: 96px;\n}\n\n.description-weather .card .title {\n  font-size: 1.8rem;\n}\n\n.description-weather .card .variable {\n  font-size: 1.5rem;\n}\n\n.sun-wrapper {\n  gap: 3rem;\n}\nfooter {\n  box-shadow: 0px 0px 6px var(--clr-dark);\n  position: relative;\n  background-color: var(--clr-primary);\n  font-size: 1.2rem;\n  flex: 0.1;\n  justify-content: center;\n  align-items: center;\n  gap: var(--space-100);\n}\n\n#discord-link img {\n  cursor: pointer;\n  height: 35px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tempestas-weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/Observer.js":
/*!*************************!*\
  !*** ./src/Observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observer)\n/* harmony export */ });\nclass Observer {\n  constructor() {\n    this.observers = []\n  }\n\n  subscribe(func) {\n    this.observers.push(func)\n  }\n\n  unsubscribe(func) {\n    this.observers = this.observers.filter((observer) => observer !== func)\n  }\n\n  notify(data) {\n    this.observers.forEach((observer) => observer(data))\n  }\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/Observer.js?");

/***/ }),

/***/ "./src/data/model/Weather.js":
/*!***********************************!*\
  !*** ./src/data/model/Weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CurrentWeather: () => (/* binding */ CurrentWeather)\n/* harmony export */ });\nclass CurrentWeather {\n  constructor(\n    city,\n    region,\n    localTime,\n    temperatureCelsius,\n    isDay,\n    condition,\n    icon,\n    windsMph,\n    humidity,\n    feelsLikeCelsius,\n    feelsLikeFarenheit,\n    uvIndex\n  ) {\n    this.city = city\n    this.region = region\n    this.localTime = localTime\n    this.temperatureCelsius = temperatureCelsius\n    this.isDay = isDay\n    this.condition = condition\n    this.icon = icon\n    this.windsMph = windsMph\n    this.humidity = humidity\n    this.feelsLikeCelsius = feelsLikeCelsius\n    this.feelsLikeFarenheit = feelsLikeFarenheit\n    this.uvIndex = uvIndex\n  }\n}\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/model/Weather.js?");

/***/ }),

/***/ "./src/data/service/ForecastService.js":
/*!*********************************************!*\
  !*** ./src/data/service/ForecastService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ForecastService: () => (/* binding */ ForecastService)\n/* harmony export */ });\n/* harmony import */ var _model_Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Weather */ \"./src/data/model/Weather.js\");\n\n\nconst ForecastService = (function createForecastService() {\n  const KEY = \"186407c1fe2c47229a5131447231908\"\n\n  async function getForecast(city) {\n    console.log(\"Searching weather\")\n    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3&aqi=no&alerts=no`\n    const response = await fetch(forecastUrl, { mode: \"cors\" })\n    response\n      .json()\n      .then(\n        (response) => {\n          // console.log(response)\n          const currentWeather = new _model_Weather__WEBPACK_IMPORTED_MODULE_0__.CurrentWeather(\n            response.location.name,\n            response.location.region,\n            response.location.localtime,\n            response.current.temp_c,\n            response.current.is_day,\n            response.current.condition.text,\n            response.current.condition.icon,\n            response.current.wind_mph,\n            response.current.humidity,\n            response.current.feelslike_c,\n            response.current.feelslike_f,\n            response.current.uv\n          )\n\n          console.log(currentWeather)\n        },\n        (reject) => {\n          console.log(\"Reject\" + reject)\n        }\n      )\n      .catch((err) => {\n        console.error(err)\n      })\n  }\n\n  return {\n    getForecast,\n  }\n})()\n\n\n//# sourceURL=webpack://tempestas-weather/./src/data/service/ForecastService.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_icons_icon_goddess_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/icon-goddess-logo.svg */ \"./src/assets/icons/icon-goddess-logo.svg\");\n/* harmony import */ var _assets_icons_icon_discord_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/icon-discord.svg */ \"./src/assets/icons/icon-discord.svg\");\n/* harmony import */ var _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/chevron-left.svg */ \"./src/assets/icons/chevron-left.svg\");\n/* harmony import */ var _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/chevron-right.svg */ \"./src/assets/icons/chevron-right.svg\");\n/* harmony import */ var _assets_icons_icon_uv_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/icon-uv.svg */ \"./src/assets/icons/icon-uv.svg\");\n/* harmony import */ var _assets_icons_icon_sunset_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/icon-sunset.svg */ \"./src/assets/icons/icon-sunset.svg\");\n/* harmony import */ var _assets_icons_icon_humidity_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/icon-humidity.svg */ \"./src/assets/icons/icon-humidity.svg\");\n/* harmony import */ var _assets_icons_icon_winds_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icons/icon-winds.svg */ \"./src/assets/icons/icon-winds.svg\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/Utils */ \"./src/utils/Utils.js\");\n/* harmony import */ var _weatherObserver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weatherObserver */ \"./src/weatherObserver.js\");\n/* harmony import */ var _data_service_ForecastService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/service/ForecastService */ \"./src/data/service/ForecastService.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(\"Hello Tempestas\")\n\nconst service = _data_service_ForecastService__WEBPACK_IMPORTED_MODULE_11__.ForecastService\n\n// Setting the default images of the page\nconst logoImage = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\".logo img\")\nconst discordImage = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#discord-link img\")\nconst leftButtonImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#left img\")\nconst rightButtonImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#right img\")\nconst uvImage = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#uv-img\")\nconst humidityImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#humidity-img\")\nconst windsImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#winds-img\")\nconst sunsetImg = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#sunset-img\")\n\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(logoImage, _assets_icons_icon_goddess_logo_svg__WEBPACK_IMPORTED_MODULE_1__)\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(discordImage, _assets_icons_icon_discord_svg__WEBPACK_IMPORTED_MODULE_2__)\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(leftButtonImg, _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__)\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(rightButtonImg, _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_4__)\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(uvImage, _assets_icons_icon_uv_svg__WEBPACK_IMPORTED_MODULE_5__)\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(humidityImg, _assets_icons_icon_humidity_svg__WEBPACK_IMPORTED_MODULE_7__)\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(windsImg, _assets_icons_icon_winds_svg__WEBPACK_IMPORTED_MODULE_8__)\n;(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.loadImage)(sunsetImg, _assets_icons_icon_sunset_svg__WEBPACK_IMPORTED_MODULE_6__)\n\nconst handleEnter = (event) => {\n  const parent = event.target\n  if (\n    event.key === \"Enter\" &&\n    (parent.validity.valueMissing || (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.isBlank)(parent.value))\n  ) {\n    (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.showErrorMessage)(parent, \"Cannot search empty value\")\n    //reset the caret\n    parent.value = \"\"\n    return\n  }\n\n  if (event.key === \"Enter\") {\n    service.getForecast(parent.value)\n    // weatherObserver.notify(parent.value)\n    // TODO: Search the term\n  }\n}\n\nconst handleInput = (event) => {\n  const parent = event.target\n  if (!parent.validity.valueMissing && !(0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.isBlank)(parent.value)) {\n    (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.disableErrorMessage)(parent)\n  }\n}\n\nconst updateWeather = (weather) => {\n  console.log(\"Updating weather\")\n}\n\n_weatherObserver__WEBPACK_IMPORTED_MODULE_10__[\"default\"].subscribe(updateWeather)\n\nconst searchInput = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.getElement)(\"#search\")\nsearchInput.addEventListener(\"keydown\", handleEnter)\nsearchInput.addEventListener(\"input\", handleInput)\n\n\n//# sourceURL=webpack://tempestas-weather/./src/index.js?");

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disableErrorMessage: () => (/* binding */ disableErrorMessage),\n/* harmony export */   getElement: () => (/* binding */ getElement),\n/* harmony export */   isBlank: () => (/* binding */ isBlank),\n/* harmony export */   loadImage: () => (/* binding */ loadImage),\n/* harmony export */   showErrorMessage: () => (/* binding */ showErrorMessage)\n/* harmony export */ });\n// Utility functions\nconst getElement = (selector) => {\n  const element = document.querySelector(selector)\n  return element\n}\n\nconst loadImage = (img, path) => {\n  img.src = path\n}\n\nconst showErrorMessage = (parent, errorMessage) => {\n  const errorElement = parent.nextElementSibling\n  errorElement.textContent = errorMessage\n  if (errorElement.hasAttribute(\"show\")) return\n  errorElement.toggleAttribute(\"show\")\n}\n\nconst disableErrorMessage = (parent) => {\n  const errorElement = parent.nextElementSibling\n  if (errorElement.hasAttribute(\"show\")) {\n    errorElement.toggleAttribute(\"show\")\n  }\n}\n\nconst isBlank = (string) => {\n  return string.trim() === \"\"\n}\n\n\n\n\n//# sourceURL=webpack://tempestas-weather/./src/utils/Utils.js?");

/***/ }),

/***/ "./src/weatherObserver.js":
/*!********************************!*\
  !*** ./src/weatherObserver.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./src/Observer.js\");\n\n\n// Represents the weather data\nconst weatherObserver = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherObserver);\n\n\n//# sourceURL=webpack://tempestas-weather/./src/weatherObserver.js?");

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