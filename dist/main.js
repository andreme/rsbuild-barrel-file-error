(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./src/dummy.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  testFunc: function() { return testFunc; }
});
function testFunc() {
    console.log('test');
}


}),
"./src/dummy_export.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DummyType: function() { return /* reexport safe */ _dummy__WEBPACK_IMPORTED_MODULE_0__.DummyType; },
  testFunc: function() { return /* reexport safe */ _dummy__WEBPACK_IMPORTED_MODULE_0__.testFunc; }
});
/* harmony import */var _dummy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy */ "./src/dummy.ts");
 // fails
 // export {/*DummyType,*/ testFunc} from './dummy' // works


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.0.8";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.0.8";

})();
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _dummy_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy_export */ "./src/dummy_export.ts");

(0,_dummy_export__WEBPACK_IMPORTED_MODULE_0__.testFunc)();

})()
;