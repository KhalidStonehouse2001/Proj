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
exports.id = "pages/api/getSession";
exports.ids = ["pages/api/getSession"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/getSession.ts":
/*!*********************************!*\
  !*** ./pages/api/getSession.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    const sessionID = req.query.session_id;\n    const session = await stripe.checkout.sessions.listLineItems(sessionID);\n    res.status(200).json({\n        session\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFXQyxtQkFBTyxDQUFDLHNCQUFRLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQixDQUFDO0FBQ3hELGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU1DLFNBQVMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLFVBQVU7SUFFdEMsTUFBTUMsT0FBTyxHQUFHLE1BQU1YLE1BQU0sQ0FBQ1ksUUFBUSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ04sU0FBUyxDQUFDO0lBRXZFRCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVMLE9BQU87S0FBRSxDQUFDLENBQUM7QUFDcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9nZXRTZXNzaW9uLnRzP2MzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcbmNvbnN0IHN0cmlwZTogU3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHNlc3Npb25JRCA9IHJlcS5xdWVyeS5zZXNzaW9uX2lkIGFzIHN0cmluZztcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMoc2Vzc2lvbklEKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb24gfSk7XG59XG4iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uSUQiLCJxdWVyeSIsInNlc3Npb25faWQiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImxpc3RMaW5lSXRlbXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSession.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSession.ts"));
module.exports = __webpack_exports__;

})();