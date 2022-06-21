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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"24 june 2022\");\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  //получение элементов со страницы\r\n  const timerHours = document.querySelector(\"#timer-hours\");\r\n  const timerMinutes = document.querySelector(\"#timer-minutes\");\r\n  const timerSeconds = document.querySelector(\"#timer-seconds\");\r\n\r\n  // определение deadline\r\n  // let = \"24 june 2022\";\r\n\r\n  const getTimeRemaining = function () {\r\n    //получаем точки времени в миллисекундах\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n\r\n    // получаем оставшееся время в секундах\r\n\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    // получаем часы, минуты,секунды\r\n\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    // функция возвращает объект\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    // получаем объект\r\n    let getTime = getTimeRemaining();\r\n\r\n    // передаем значения на страницу\r\n    // if (getTime.hours < 10) {\r\n    timerHours.textContent = getTime.hours;\r\n    // }\r\n    // if (getTime.minutes < 10) {\r\n    timerMinutes.textContent = getTime.minutes;\r\n    // }\r\n    if (getTime.seconds < 10) {\r\n      timerSeconds.textContent = getTime.seconds;\r\n      // }\r\n\r\n      // вызов функции только при положительном значении\r\n      // if (getTime.timeRemaining > 0) {\r\n      //   setInterval(updateClock, 1000);\r\n      // }\r\n\r\n      if (getTime.timeRemaining <= 0) {\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n      }\r\n    }\r\n  };\r\n  setInterval(updateClock, 1000);\r\n  // setInterval(updateClock, 1000, \"24 june 2022\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;