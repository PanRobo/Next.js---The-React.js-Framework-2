webpackHotUpdate("static/development/pages/private.js",{

/***/ "./pages/private.js":
/*!**************************!*\
  !*** ./pages/private.js ***!
  \**************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-iron-session */ "./node_modules/next-iron-session/dist/index.js");
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/runner/Nextjs-The-Reactjs-Framework-2/pages/private.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


console.log("hello");
var getServerSideProps = Object(next_iron_session__WEBPACK_IMPORTED_MODULE_2__["withIronSession"])(function _callee(_ref) {
  var req, res, user;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref.req, res = _ref.res;
          user = req.session.get("user");

          if (user) {
            _context.next = 6;
            break;
          }

          res.statusCode = 404;
          res.end();
          return _context.abrupt("return", {
            props: {}
          });

        case 6:
          return _context.abrupt("return", {
            props: {
              user: user
            }
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}, {
  cookieName: "MYSITECOOKIE",
  cookieOptions: {
    secure: false ? undefined : false
  },
  password: "asdfkljhqkfydjtludhtlknedotokrow"
});

var PrivatePage = function PrivatePage(_ref2) {
  var user = _ref2.user;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Hello ", user), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Secret things live here..."));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivatePage);

/***/ })

})
//# sourceMappingURL=private.js.11871c2f5596551a4a14.hot-update.js.map