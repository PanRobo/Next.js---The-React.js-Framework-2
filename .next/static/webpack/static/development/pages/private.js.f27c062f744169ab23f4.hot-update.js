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



var PrivatePage = function PrivatePage(_ref) {
  var user = _ref.user;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Hello ", user), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Secret things live here..."));
};

var getServerSideProps = Object(next_iron_session__WEBPACK_IMPORTED_MODULE_2__["withIronSession"])(function _callee(_ref2) {
  var req, res, user;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req, res = _ref2.res;
          user = req.session.get("user");
          console.log(user, "wh");

          if (user) {
            _context.next = 7;
            break;
          }

          res.statusCode = 404;
          res.end();
          return _context.abrupt("return", {
            props: {}
          });

        case 7:
          return _context.abrupt("return", {
            props: {
              user: user
            }
          });

        case 8:
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
/* harmony default export */ __webpack_exports__["default"] = (PrivatePage);

/***/ })

})
//# sourceMappingURL=private.js.f27c062f744169ab23f4.hot-update.js.map