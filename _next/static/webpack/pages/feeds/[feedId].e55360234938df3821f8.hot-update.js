webpackHotUpdate_N_E("pages/feeds/[feedId]",{

/***/ "./pages/feeds/[feedId].js":
/*!*********************************!*\
  !*** ./pages/feeds/[feedId].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_koozaki_github_flexbox_flex_analytics_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_koozaki_github_flexbox_flex_analytics_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_koozaki_github_flexbox_flex_analytics_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_koozaki_github_flexbox_flex_analytics_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/utils.js */ \"./utils.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/koozaki/github/flexbox/flex-analytics-front/pages/feeds/[feedId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Feeds = function Feeds() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var feedId = router.query.feedId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    captures: []\n  }),\n      feed = _useState[0],\n      setFeed = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var f = /*#__PURE__*/function () {\n      var _ref = Object(_Users_koozaki_github_flexbox_flex_analytics_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_koozaki_github_flexbox_flex_analytics_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, feedData;\n        return _Users_koozaki_github_flexbox_flex_analytics_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return node_fetch__WEBPACK_IMPORTED_MODULE_7___default()(\"\".concat(\"http://localhost:3000/\", \"feeds/\").concat(feedId));\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                feedData = _context.sent;\n                setFeed(feedData);\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](0);\n                throw _context.t0;\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 10]]);\n      }));\n\n      return function f() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    feedId && f();\n  }, [feedId]);\n  var title = \"\\u300E\".concat(feed.title, \"\\u300F\\u306E\\u30AD\\u30E3\\u30D7\\u30C1\\u30E3\\u4E00\\u89A7\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [title, \" - \", \"FLEX ANALYTICS (β)\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n      variant: \"h5\",\n      component: \"h1\",\n      style: {\n        marginBottom: '1rem'\n      },\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        justifyContent: 'start',\n        overflow: 'hidden'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"GridList\"], {\n        style: {\n          flexWrap: 'nowrap'\n        },\n        children: feed.captures.map(function (d, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"GridListTile\"], {\n            style: {\n              border: '1px solid rgba(0, 0, 0, 0.5)',\n              width: '300px',\n              height: '1000px'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://api.flexbox-inc.com/captures/\".concat(d.img_path),\n              target: \"_blank\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                style: {\n                  width: '100%',\n                  height: '1000px',\n                  backgroundImage: \"url(https://api.flexbox-inc.com/captures/\".concat(d.img_path, \")\")\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"GridListTileBar\"], {\n              title: Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__[\"date\"])(d.modified) + ' ' + Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__[\"time\"])(d.modified)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Feeds, \"ore8GjWaykWzd8YUtAyhV3fwmGM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Feeds;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feeds);\n\nvar _c;\n\n$RefreshReg$(_c, \"Feeds\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZHMvW2ZlZWRJZF0uanM/NzAyMCJdLCJuYW1lcyI6WyJGZWVkcyIsInJvdXRlciIsInVzZVJvdXRlciIsImZlZWRJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJjYXB0dXJlcyIsImZlZWQiLCJzZXRGZWVkIiwidXNlRWZmZWN0IiwiZiIsImZldGNoIiwicHJvY2VzcyIsInJlcyIsImpzb24iLCJmZWVkRGF0YSIsInRpdGxlIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyIsIm1hcCIsImQiLCJpIiwiYm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJpbWdfcGF0aCIsImJhY2tncm91bmRJbWFnZSIsImRhdGUiLCJtb2RpZmllZCIsInRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEa0IsTUFFVkMsTUFGVSxHQUVDRixNQUFNLENBQUNHLEtBRlIsQ0FFVkQsTUFGVTs7QUFBQSxrQkFJTUUsc0RBQVEsQ0FBQztBQUMvQkMsWUFBUSxFQUFFO0FBRHFCLEdBQUQsQ0FKZDtBQUFBLE1BSVhDLElBSlc7QUFBQSxNQUlMQyxPQUpLOztBQVFsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsQ0FBQztBQUFBLG9XQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFWUMsaURBQUssV0FBSUMsd0JBQUosbUJBQTRCVCxNQUE1QixFQUZqQjs7QUFBQTtBQUVBVSxtQkFGQTtBQUFBO0FBQUEsdUJBR2lCQSxHQUFHLENBQUNDLElBQUosRUFIakI7O0FBQUE7QUFHQUMsd0JBSEE7QUFJTlAsdUJBQU8sQ0FBQ08sUUFBRCxDQUFQO0FBSk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFETCxDQUFDO0FBQUE7QUFBQTtBQUFBLE9BQVA7O0FBVUFQLFVBQU0sSUFBSU8sQ0FBQyxFQUFYO0FBQ0QsR0FaUSxFQVlOLENBQUNQLE1BQUQsQ0FaTSxDQUFUO0FBY0EsTUFBTWEsS0FBSyxtQkFBT1QsSUFBSSxDQUFDUyxLQUFaLDJEQUFYO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dBLEtBREgsU0FDYUosb0JBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsNERBQUQ7QUFDRSxhQUFPLEVBQUMsSUFEVjtBQUVFLGVBQVMsRUFBQyxJQUZaO0FBR0UsV0FBSyxFQUFFO0FBQ0xLLG9CQUFZLEVBQUU7QUFEVCxPQUhUO0FBQUEsZ0JBT0dEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBZUU7QUFDRSxXQUFLLEVBQUU7QUFDTEUsZUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVEsRUFBRSxNQUZMO0FBR0xDLHNCQUFjLEVBQUUsT0FIWDtBQUlMQyxnQkFBUSxFQUFFO0FBSkwsT0FEVDtBQUFBLDZCQVFFLHFFQUFDLDBEQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQ0xGLGtCQUFRLEVBQUU7QUFETCxTQURUO0FBQUEsa0JBS0daLElBQUksQ0FBQ0QsUUFBTCxDQUFjZ0IsR0FBZCxDQUFrQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDakIscUVBQUMsOERBQUQ7QUFFRSxpQkFBSyxFQUFFO0FBQ0xDLG9CQUFNLEVBQUUsOEJBREg7QUFFTEMsbUJBQUssRUFBRSxPQUZGO0FBR0xDLG9CQUFNLEVBQUU7QUFISCxhQUZUO0FBQUEsb0NBUUU7QUFDRSxrQkFBSSxpREFBMENKLENBQUMsQ0FBQ0ssUUFBNUMsQ0FETjtBQUVFLG9CQUFNLEVBQUMsUUFGVDtBQUFBLHFDQUlFO0FBQ0UscUJBQUssRUFBRTtBQUNMRix1QkFBSyxFQUFFLE1BREY7QUFFTEMsd0JBQU0sRUFBRSxRQUZIO0FBR0xFLGlDQUFlLHFEQUE4Q04sQ0FBQyxDQUFDSyxRQUFoRDtBQUhWO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFvQkUscUVBQUMsaUVBQUQ7QUFDRSxtQkFBSyxFQUFFRSxzREFBSSxDQUFDUCxDQUFDLENBQUNRLFFBQUgsQ0FBSixHQUFtQixHQUFuQixHQUF5QkMsc0RBQUksQ0FBQ1QsQ0FBQyxDQUFDUSxRQUFIO0FBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJGO0FBQUEsYUFDT1AsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURpQjtBQUFBLFNBQWxCO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJERCxDQW5GRDs7R0FBTXhCLEs7VUFDV0UscUQ7OztLQURYRixLO0FBcUZTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZlZWRzL1tmZWVkSWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge1xuICBHcmlkTGlzdCxcbiAgR3JpZExpc3RUaWxlLFxuICBHcmlkTGlzdFRpbGVCYXIsXG4gIFR5cG9ncmFwaHlcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgZGF0ZSwgdGltZSB9IGZyb20gJ34vdXRpbHMuanMnO1xuXG5jb25zdCBGZWVkcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZmVlZElkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW2ZlZWQsIHNldEZlZWRdID0gdXNlU3RhdGUoe1xuICAgIGNhcHR1cmVzOiBbXVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGYgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5hcGl9ZmVlZHMvJHtmZWVkSWR9YCk7XG4gICAgICAgIGNvbnN0IGZlZWREYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2V0RmVlZChmZWVkRGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZlZWRJZCAmJiBmKCk7XG4gIH0sIFtmZWVkSWRdKTtcblxuICBjb25zdCB0aXRsZSA9IGDjgI4ke2ZlZWQudGl0bGV944CP44Gu44Kt44Oj44OX44OB44Oj5LiA6KanYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIHt0aXRsZX0gLSB7cHJvY2Vzcy5lbnYudGl0bGV9XG4gICAgICAgIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PSdoNSdcbiAgICAgICAgY29tcG9uZW50PSdoMSdcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxcmVtJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxHcmlkTGlzdFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2ZlZWQuY2FwdHVyZXMubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICA8R3JpZExpc3RUaWxlXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAwcHgnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vYXBpLmZsZXhib3gtaW5jLmNvbS9jYXB0dXJlcy8ke2QuaW1nX3BhdGh9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMDBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2FwaS5mbGV4Ym94LWluYy5jb20vY2FwdHVyZXMvJHtkLmltZ19wYXRofSlgXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPEdyaWRMaXN0VGlsZUJhclxuICAgICAgICAgICAgICAgIHRpdGxlPXtkYXRlKGQubW9kaWZpZWQpICsgJyAnICsgdGltZShkLm1vZGlmaWVkKX1cbiAgICAgICAgICAgICAgPjwvR3JpZExpc3RUaWxlQmFyPlxuICAgICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZExpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feeds/[feedId].js\n");

/***/ })

})