webpackHotUpdate_N_E("pages/index",{

/***/ "./components/frontart.js":
/*!********************************!*\
  !*** ./components/frontart.js ***!
  \********************************/
/*! exports provided: FrontArt, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FrontArt\", function() { return FrontArt; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ \"./components/models.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jonathanreis/Projects/BareGenerator/components/frontart.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction MagicMirror(_ref) {\n  _s();\n\n  var children = _ref.children,\n      props = Object(_Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"children\"]);\n\n  var cam = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); // useFBO creates a WebGL2 buffer for us, it's a helper from the \"drei\" library\n\n  var fbo = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"useFBO\"])(); // The is a separate scene that we create, React will portal into that\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(function () {\n    return new three__WEBPACK_IMPORTED_MODULE_3__[\"Scene\"]();\n  }),\n      scene = _useState[0]; // Tie this component into the render-loop\n\n\n  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__[\"useFrame\"])(function (state) {\n    // Our portal has its own camera, but we copy the originals world matrix\n    cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse); // Then we set the render-target to the buffer that we have created\n\n    state.gl.setRenderTarget(fbo); // We render the scene into it, using the local camera that is clamped to the planes aspect ratio\n\n    state.gl.render(scene, cam.current); // And flip the render-target to the default again\n\n    state.gl.setRenderTarget(null);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"mesh\", _objectSpread(_objectSpread({}, props), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"planeGeometry\", {\n        args: [5, 10],\n        position: [0, 10, 10]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meshBasicMaterial\", {\n        map: fbo.texture\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"PerspectiveCamera\"], {\n      manual: true,\n      ref: cam,\n      fov: 150,\n      aspect: 2.5 / 5,\n      onUpdate: function onUpdate(c) {\n        return c.updateProjectionMatrix();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__[\"createPortal\"])(children, scene)]\n  }, void 0, true);\n}\n\n_s(MagicMirror, \"PFjhhyspXTFL24hLj/IO+64f1g4=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"useFBO\"], _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__[\"useFrame\"]];\n});\n\n_c = MagicMirror;\n\nfunction Lights() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"color\", {\n      attach: \"background\",\n      args: ['#f0f0f0']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ambientLight\", {\n      intensity: 3,\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 60,\n      position: [2, 30, 10],\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 6,\n      position: [3, 1, 10],\n      color: \"blue\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 3,\n      position: [3, 10, 30],\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_c2 = Lights;\nfunction FrontArt() {\n  _s2();\n\n  console.log(\"FrontArt\");\n  var controls = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"front-page_wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__[\"Canvas\"], {\n      dpr: (1, 2),\n      camera: {\n        position: [0, 4, 8],\n        fov: 50\n      },\n      gl: {\n        alpha: false\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Lights, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4__[\"Suspense\"], {\n        fallback: null,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"Stage\"], {\n          controls: controls,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MagicMirror, {\n            position: [-13, 3.5, 0],\n            rotation: [0, 0, 0],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Lights, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"Sky\"], {\n              sunPosition: [10000, 10, 10000]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListMirror\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListRight\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListLeft\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListCenter\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"OrbitControls\"], {\n        ref: controls\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(FrontArt, \"7sXNjZ85F+QCyh0RVZRnHOVcH8w=\");\n\n_c3 = FrontArt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontArt);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MagicMirror\");\n$RefreshReg$(_c2, \"Lights\");\n$RefreshReg$(_c3, \"FrontArt\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcm9udGFydC5qcz8xMTI1Il0sIm5hbWVzIjpbIk1hZ2ljTWlycm9yIiwiY2hpbGRyZW4iLCJwcm9wcyIsImNhbSIsInVzZVJlZiIsImZibyIsInVzZUZCTyIsInVzZVN0YXRlIiwiVEhSRUUiLCJzY2VuZSIsInVzZUZyYW1lIiwic3RhdGUiLCJjdXJyZW50IiwibWF0cml4V29ybGRJbnZlcnNlIiwiY29weSIsImNhbWVyYSIsImdsIiwic2V0UmVuZGVyVGFyZ2V0IiwicmVuZGVyIiwidGV4dHVyZSIsImMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY3JlYXRlUG9ydGFsIiwiTGlnaHRzIiwiRnJvbnRBcnQiLCJjb25zb2xlIiwibG9nIiwiY29udHJvbHMiLCJwb3NpdGlvbiIsImZvdiIsImFscGhhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFdBQVQsT0FBNkM7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBVEMsS0FBUzs7QUFDM0MsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQixDQUQyQyxDQUUzQzs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGdFQUFNLEVBQWxCLENBSDJDLENBSTNDOztBQUoyQyxrQkFLM0JDLHNEQUFRLENBQUM7QUFBQSxXQUFNLElBQUlDLDJDQUFKLEVBQU47QUFBQSxHQUFELENBTG1CO0FBQUEsTUFLcENDLEtBTG9DLGlCQU0zQzs7O0FBQ0FDLHFFQUFRLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xCO0FBQ0FSLE9BQUcsQ0FBQ1MsT0FBSixDQUFZQyxrQkFBWixDQUErQkMsSUFBL0IsQ0FBb0NILEtBQUssQ0FBQ0ksTUFBTixDQUFhRixrQkFBakQsRUFGa0IsQ0FHbEI7O0FBQ0FGLFNBQUssQ0FBQ0ssRUFBTixDQUFTQyxlQUFULENBQXlCWixHQUF6QixFQUprQixDQUtsQjs7QUFDQU0sU0FBSyxDQUFDSyxFQUFOLENBQVNFLE1BQVQsQ0FBZ0JULEtBQWhCLEVBQXVCTixHQUFHLENBQUNTLE9BQTNCLEVBTmtCLENBT2xCOztBQUNBRCxTQUFLLENBQUNLLEVBQU4sQ0FBU0MsZUFBVCxDQUF5QixJQUF6QjtBQUNELEdBVE8sQ0FBUjtBQVVBLHNCQUVFO0FBQUEsNEJBR0UsNkdBQVVmLEtBQVY7QUFBQSw4QkFDRTtBQUFlLFlBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBQXJCO0FBQThCLGdCQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU47QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBbUIsV0FBRyxFQUFFRyxHQUFHLENBQUNjO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQVNFLHFFQUFDLG1FQUFEO0FBQW1CLFlBQU0sTUFBekI7QUFBMEIsU0FBRyxFQUFFaEIsR0FBL0I7QUFBb0MsU0FBRyxFQUFFLEdBQXpDO0FBQThDLFlBQU0sRUFBRSxNQUFNLENBQTVEO0FBQStELGNBQVEsRUFBRSxrQkFBQ2lCLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLHNCQUFGLEVBQVA7QUFBQTtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsRUFXR0MsdUVBQVksQ0FBQ3JCLFFBQUQsRUFBV1EsS0FBWCxDQVhmO0FBQUEsa0JBRkY7QUFrQkQ7O0dBbkNRVCxXO1VBR0tNLHdELEVBSVpJLDJEOzs7S0FQT1YsVzs7QUFxQ1QsU0FBU3VCLE1BQVQsR0FBa0I7QUFDaEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLFlBQU0sRUFBQyxZQUFkO0FBQTJCLFVBQUksRUFBRSxDQUFDLFNBQUQ7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBYyxlQUFTLEVBQUUsQ0FBekI7QUFBNEIsV0FBSyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQVksZUFBUyxFQUFFLEVBQXZCO0FBQTJCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixDQUFyQztBQUFrRCxXQUFLLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBWSxlQUFTLEVBQUUsQ0FBdkI7QUFBMEIsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxFQUFQLENBQXBDO0FBQWdELFdBQUssRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFZLGVBQVMsRUFBRSxDQUF2QjtBQUEwQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FBcEM7QUFBaUQsV0FBSyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBU0Q7O01BVlFBLE07QUFZRixTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsTUFBTUMsUUFBUSxHQUFHdkIsb0RBQU0sRUFBdkI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDJCQUNBLHFFQUFDLHlEQUFEO0FBQVEsU0FBRyxHQUFHLEdBQUUsQ0FBTCxDQUFYO0FBQW9CLFlBQU0sRUFBRTtBQUFFd0IsZ0JBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaO0FBQXVCQyxXQUFHLEVBQUU7QUFBNUIsT0FBNUI7QUFBOEQsUUFBRSxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQWxFO0FBQUEsOEJBQ0UscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyw4Q0FBRDtBQUFVLGdCQUFRLEVBQUUsSUFBcEI7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUFPLGtCQUFRLEVBQUVILFFBQWpCO0FBQUEsa0NBQ0UscUVBQUMsV0FBRDtBQUFhLG9CQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxHQUFOLEVBQVcsQ0FBWCxDQUF2QjtBQUFzQyxvQkFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWhEO0FBQUEsb0NBQ0UscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMscURBQUQ7QUFBSyx5QkFBVyxFQUFFLENBQUMsS0FBRCxFQUFRLEVBQVIsRUFBWSxLQUFaO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFPRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLGVBUUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFnQkUscUVBQUMsK0RBQUQ7QUFBZSxXQUFHLEVBQUVBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztJQXpCZUgsUTs7TUFBQUEsUTtBQTJCREEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zyb250YXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgUmVhY3QsIHsgIFN1c3BlbnNlLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCBjcmVhdGVQb3J0YWwgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXG5pbXBvcnQgeyB1c2VHTFRGLCBTdGFnZSwgU2t5LCBTdGFycywgdXNlRkJPLCBPcmJpdENvbnRyb2xzLCByb3RhdGlvbiwgUGVyc3BlY3RpdmVDYW1lcmEsIENhbWVyYVNoYWtlLCBDb250YWN0U2hhZG93cyB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xuaW1wb3J0IHsgIEJlZXIsIENvbmNoYSwgQW5nZWwsIFBsYW50IH0gZnJvbSAnLi9tb2RlbHMnXG5pbXBvcnQge09iamVjdExpc3RMZWZ0LCBPYmplY3RMaXN0UmlnaHQsIE9iamVjdExpc3RDZW50ZXIsIE9iamVjdExpc3RNaXJyb3J9IGZyb20gJy4vbW9kZWxzJ1xuXG5cbmZ1bmN0aW9uIE1hZ2ljTWlycm9yKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgY2FtID0gdXNlUmVmKClcbiAgLy8gdXNlRkJPIGNyZWF0ZXMgYSBXZWJHTDIgYnVmZmVyIGZvciB1cywgaXQncyBhIGhlbHBlciBmcm9tIHRoZSBcImRyZWlcIiBsaWJyYXJ5XG4gIGNvbnN0IGZibyA9IHVzZUZCTygpXG4gIC8vIFRoZSBpcyBhIHNlcGFyYXRlIHNjZW5lIHRoYXQgd2UgY3JlYXRlLCBSZWFjdCB3aWxsIHBvcnRhbCBpbnRvIHRoYXRcbiAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKCgpID0+IG5ldyBUSFJFRS5TY2VuZSgpKVxuICAvLyBUaWUgdGhpcyBjb21wb25lbnQgaW50byB0aGUgcmVuZGVyLWxvb3BcbiAgdXNlRnJhbWUoKHN0YXRlKSA9PiB7XG4gICAgLy8gT3VyIHBvcnRhbCBoYXMgaXRzIG93biBjYW1lcmEsIGJ1dCB3ZSBjb3B5IHRoZSBvcmlnaW5hbHMgd29ybGQgbWF0cml4XG4gICAgY2FtLmN1cnJlbnQubWF0cml4V29ybGRJbnZlcnNlLmNvcHkoc3RhdGUuY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZSlcbiAgICAvLyBUaGVuIHdlIHNldCB0aGUgcmVuZGVyLXRhcmdldCB0byB0aGUgYnVmZmVyIHRoYXQgd2UgaGF2ZSBjcmVhdGVkXG4gICAgc3RhdGUuZ2wuc2V0UmVuZGVyVGFyZ2V0KGZibylcbiAgICAvLyBXZSByZW5kZXIgdGhlIHNjZW5lIGludG8gaXQsIHVzaW5nIHRoZSBsb2NhbCBjYW1lcmEgdGhhdCBpcyBjbGFtcGVkIHRvIHRoZSBwbGFuZXMgYXNwZWN0IHJhdGlvXG4gICAgc3RhdGUuZ2wucmVuZGVyKHNjZW5lLCBjYW0uY3VycmVudClcbiAgICAvLyBBbmQgZmxpcCB0aGUgcmVuZGVyLXRhcmdldCB0byB0aGUgZGVmYXVsdCBhZ2FpblxuICAgIHN0YXRlLmdsLnNldFJlbmRlclRhcmdldChudWxsKVxuICB9KVxuICByZXR1cm4gKFxuXG4gICAgPD5cblxuICAgXG4gICAgICA8bWVzaCB7Li4ucHJvcHN9PlxuICAgICAgICA8cGxhbmVHZW9tZXRyeSBhcmdzPXtbNSwgMTBdfSBwb3NpdGlvbj17WzAsMTAsMTBdfSAvPlxuICAgICAgICB7LyogVGhlIFwibWlycm9yXCIgaXMganVzdCBhIGJvcmluZyBwbGFuZSwgYnV0IGl0IHJlY2VpdmVzIHRoZSBidWZmZXIgdGV4dHVyZSAqL31cbiAgICAgICAgPG1lc2hCYXNpY01hdGVyaWFsIG1hcD17ZmJvLnRleHR1cmV9IC8+XG4gICAgICA8L21lc2g+XG4gICAgXG4gICAgICA8UGVyc3BlY3RpdmVDYW1lcmEgbWFudWFsIHJlZj17Y2FtfSBmb3Y9ezE1MH0gYXNwZWN0PXsyLjUgLyA1fSBvblVwZGF0ZT17KGMpID0+IGMudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpfSAvPlxuICAgICAgey8qIFRoaXMgaXMgUmVhY3QgYmVpbmcgYXdlc29tZSwgd2UgcG9ydGFsIHRoaXMgY29tcG9uZW50cyBjaGlsZHJlbiBpbnRvIHRoZSBzZXBhcmF0ZSBzY2VuZSBhYm92ZSAqL31cbiAgICAgIHtjcmVhdGVQb3J0YWwoY2hpbGRyZW4sIHNjZW5lKX1cbiAgICA8Lz5cbiBcbiAgXG4gIClcbn1cblxuZnVuY3Rpb24gTGlnaHRzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Y29sb3IgYXR0YWNoPVwiYmFja2dyb3VuZFwiIGFyZ3M9e1snI2YwZjBmMCddfSAvPlxuICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezN9IGNvbG9yPVwicmVkXCIgLz5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17NjB9IHBvc2l0aW9uPXtbMiwgMzAsIDEwXX0gY29sb3I9XCJyZWRcIiAvPlxuICAgICAgPHBvaW50TGlnaHQgaW50ZW5zaXR5PXs2fSBwb3NpdGlvbj17WzMsIDEsIDEwXX0gY29sb3I9XCJibHVlXCIgLz5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17M30gcG9zaXRpb249e1szLCAxMCwgMzBdfSBjb2xvcj1cInJlZFwiIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZyb250QXJ0KCkge1xuICBjb25zb2xlLmxvZyhcIkZyb250QXJ0XCIpO1xuICBjb25zdCBjb250cm9scyA9IHVzZVJlZigpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udC1wYWdlX3dyYXBwZXJcIj5cbiAgICA8Q2FudmFzIGRwcj17KDEsMil9IGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDQsIDhdLCBmb3Y6IDUwIH19IGdsPXt7IGFscGhhOiBmYWxzZSB9fT5cbiAgICAgIDxMaWdodHMgLz5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgIDxTdGFnZSBjb250cm9scz17Y29udHJvbHN9PlxuICAgICAgICAgIDxNYWdpY01pcnJvciBwb3NpdGlvbj17Wy0xMywgMy41LCAwXX0gcm90YXRpb249e1swLCAwLCAwXX0+XG4gICAgICAgICAgICA8TGlnaHRzIC8+XG4gICAgICAgICAgICA8U2t5IHN1blBvc2l0aW9uPXtbMTAwMDAsIDEwLCAxMDAwMF19IC8+XG4gICAgICAgICAgICA8T2JqZWN0TGlzdE1pcnJvciAvPlxuICAgICAgICAgIDwvTWFnaWNNaXJyb3I+XG4gICAgICAgICAgPE9iamVjdExpc3RSaWdodCAvPlxuICAgICAgICAgIDxPYmplY3RMaXN0TGVmdCAvPlxuICAgICAgICAgIDxPYmplY3RMaXN0Q2VudGVyIC8+XG4gICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgPC9TdGFnZT5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8T3JiaXRDb250cm9scyByZWY9e2NvbnRyb2xzfSAvPlxuICAgIDwvQ2FudmFzPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250QXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/frontart.js\n");

/***/ })

})