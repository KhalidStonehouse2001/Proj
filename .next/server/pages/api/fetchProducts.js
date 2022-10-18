"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/fetchProducts";
exports.ids = ["pages/api/fetchProducts"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/fetchProducts.ts":
/*!************************************!*\
  !*** ./pages/api/fetchProducts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`*[_type == 'product'] {\n    _id, \n    ...\n  }| order(_createdAt desc)`;\nasync function handler(req, res) {\n    const products = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        products\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNkVBQTZFO0FBRzFDO0FBQ1M7QUFJNUMsTUFBTUUsS0FBSyxHQUFHRiw2Q0FBSSxDQUFDOzs7MkJBR1EsQ0FBQztBQUNiLGVBQWVHLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNTCx1REFBa0IsQ0FBQ0MsS0FBSyxDQUFDO0lBRWhERyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVILFFBQVE7S0FBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9mZXRjaFByb2R1Y3RzLnRzPzk4NmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBDYXRlZ29yeSwgUHJvZHVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xuaW1wb3J0IHsgZ3JvcSB9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xuaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiO1xudHlwZSBEYXRhID0ge1xuICBwcm9kdWN0czogUHJvZHVjdFR5cGVbXTtcbn07XG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSAncHJvZHVjdCddIHtcbiAgICBfaWQsIFxuICAgIC4uLlxuICB9fCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpYDtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvZHVjdHMgfSk7XG59XG4iXSwibmFtZXMiOlsiZ3JvcSIsInNhbml0eUNsaWVudCIsInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByb2R1Y3RzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchProducts.ts\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    dataset: \"production\" || 0,\n    token: process.env.SANITY_API_TOKEN,\n    projectId: \"bhdk2tuk\",\n    apiVersion: \"2021-10-21\",\n    useCdn: \"development\" === \"production\"\n};\n// Set up the client for fetching data in the getProps page functions\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n/**\n * Set up a helper function for generating Image URLs with only the asset reference data in your documents.\n * Read more: https://www.sanity.io/docs/image-url\n **/ const urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNXO0FBRS9DLE1BQU1FLE1BQU0sR0FBRztJQUNwQkMsT0FBTyxFQUFFQyxZQUFzQyxJQUFJLENBQVk7SUFDL0RHLEtBQUssRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGdCQUFnQjtJQUNuQ0MsU0FBUyxFQUFFTCxVQUF5QztJQUNwRE8sVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRVIsYUFSRyxLQVFzQixZQUFZO0NBQzlDLENBQUM7QUFFRixxRUFBcUU7QUFDOUQsTUFBTVMsWUFBWSxHQUFHYix5REFBWSxDQUFDRSxNQUFNLENBQUMsQ0FBQztBQUVqRDs7O0VBR0UsR0FDSyxNQUFNWSxNQUFNLEdBQUcsQ0FBQ0MsTUFBTSxHQUFLZCx3REFBcUIsQ0FBQ0MsTUFBTSxDQUFDLENBQUNjLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYW5pdHkuanM/ODVkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcbmltcG9ydCBjcmVhdGVJbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8IFwicHJvZHVjdGlvblwiLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcbiAgYXBpVmVyc2lvbjogXCIyMDIxLTEwLTIxXCIsIC8vIExlYXJuIG1vcmU6IGh0dHBzOi8vd3d3LnNhbml0eS5pby9kb2NzL2FwaS12ZXJzaW9uaW5nXG4gIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufTtcblxuLy8gU2V0IHVwIHRoZSBjbGllbnQgZm9yIGZldGNoaW5nIGRhdGEgaW4gdGhlIGdldFByb3BzIHBhZ2UgZnVuY3Rpb25zXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZyk7XG5cbi8qKlxuICogU2V0IHVwIGEgaGVscGVyIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIEltYWdlIFVSTHMgd2l0aCBvbmx5IHRoZSBhc3NldCByZWZlcmVuY2UgZGF0YSBpbiB5b3VyIGRvY3VtZW50cy5cbiAqIFJlYWQgbW9yZTogaHR0cHM6Ly93d3cuc2FuaXR5LmlvL2RvY3MvaW1hZ2UtdXJsXG4gKiovXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4gY3JlYXRlSW1hZ2VVcmxCdWlsZGVyKGNvbmZpZykuaW1hZ2Uoc291cmNlKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwidG9rZW4iLCJTQU5JVFlfQVBJX1RPS0VOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchProducts.ts"));
module.exports = __webpack_exports__;

})();