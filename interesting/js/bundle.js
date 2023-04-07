/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/int.js":
/*!********************!*\
  !*** ./src/int.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ int)
/* harmony export */ });
function int() {
  // console.log("String" > "StrinG");
  // console.log("a" > "b");
  // let data = {
  //   name: "Mari",
  // };
  // let reg = /\w+/g;
  // let str = "fd!";
  // let res = str.match(reg);
  // console.log(res);

  let obj = {
    name: "Test",
    [{ 2: 4 }]: 22,
  };
  // let id = Symbol("id");

  // obj[id] = 1;
  // Object.freeze(obj);
  // obj.age = 3;
  // let arr = [45];
  // for (let key in obj) {
  //   console.log(obj[key]);
  // }
  // console.log(obj.hasOwnProperty("name"));
  // console.log(obj);
  // let map = new Map();
  // map.set("age", 23);

  // console.log(map.keys()[0]);
  // let arr = [3, 4, 1, 5, 2, 4, 2, 2, 2, 2];
  //find return first value(not index) that corresponds to condition
  // console.log(arr.find((el) => el>3));
  // console.log(Number.MAX_SAFE_INTEGER);
  // let b = BigInt(35);
  // console.log(b + 34);
  // ("use strict");
  // let user = { name: "Ivan" };
  // let map = new WeakMap();
  // map.set(user, "data");
  // user = null;
  // console.log(map);
  // function User() {
  //   this.name = "dsd";
  // }
  // User.prototype.hello = function () {
  //   return "312" + this.name;
  // };
  // let t = new User();
  // console.log(t.hello());
  // function incrementString(strng) {
  //   let regN = /\d/g;
  //   let regL = /[a-zA-Z]+/g;
  //   let incrementedString = "";
  //   let litters = strng.match(regL)?.join("");

  //   let numbers = strng
  //     .split("")
  //     ?.splice(strng.lastIndexOf(litters[litters.length - 1]))
  //     ?.join("")
  //     ?.match(regN)
  //     ?.join("");

  //   if (numbers) {
  //     incrementedString = `${litters ? litters : ""}${+numbers + 1}`;
  //   } else {
  //     incrementedString = `${litters ? litters : ""}1`;
  //   }
  //   return incrementedString;
  // }
  // console.log(incrementString("fo99obar1"));
  // console.log(000 + 3);
  let a = 3;
  console.log(a);
}


/***/ }),

/***/ "./src/int2.js":
/*!*********************!*\
  !*** ./src/int2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ int2)
/* harmony export */ });
function int2() {
  function permutations(string) {
    var results = [];

    function permute(arr, memo) {
      var cur,
        memo = memo || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur).join(""));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }

      return [...new Set(results)];
    }

    return permute(string.split(""));
  }
  permutations("aa");
  let a = 5;
  console.log(a);
  
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./int.js */ "./src/int.js");
/* harmony import */ var _int2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./int2.js */ "./src/int2.js");


(0,_int_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_int2_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map