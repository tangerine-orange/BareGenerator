webpackHotUpdate_N_E("pages/index",{

/***/ "./components/frontart.js":
/*!********************************!*\
  !*** ./components/frontart.js ***!
  \********************************/
/*! exports provided: FrontArt, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FrontArt\", function() { return FrontArt; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/Roboto.json */ \"./fonts/Roboto.json\");\nvar _fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../fonts/Roboto.json */ \"./fonts/Roboto.json\", 1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models */ \"./components/models.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jonathanreis/Projects/BareGenerator/components/frontart.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nfunction MagicMirror(_ref) {\n  _s();\n\n  var children = _ref.children,\n      props = Object(_Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"children\"]);\n\n  var cam = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(); // useFBO creates a WebGL2 buffer for us, it's a helper from the \"drei\" library\n\n  var fbo = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__[\"useFBO\"])(); // The is a separate scene that we create, React will portal into that\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(function () {\n    return new three__WEBPACK_IMPORTED_MODULE_3__[\"Scene\"]();\n  }),\n      scene = _useState[0]; // Tie this component into the render-loop\n\n\n  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__[\"useFrame\"])(function (state) {\n    // Our portal has its own camera, but we copy the originals world matrix\n    cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse); // Then we set the render-target to the buffer that we have created\n\n    state.gl.setRenderTarget(fbo); // We render the scene into it, using the local camera that is clamped to the planes aspect ratio\n\n    state.gl.render(scene, cam.current); // And flip the render-target to the default again\n\n    state.gl.setRenderTarget(null);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"mesh\", _objectSpread(_objectSpread({}, props), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"planeGeometry\", {\n        args: [5, 10],\n        position: [0, 10, 10]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meshBasicMaterial\", {\n        map: fbo.texture\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__[\"PerspectiveCamera\"], {\n      manual: true,\n      ref: cam,\n      fov: 150,\n      aspect: 2.5 / 5,\n      onUpdate: function onUpdate(c) {\n        return c.updateProjectionMatrix();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__[\"createPortal\"])(children, scene)]\n  }, void 0, true);\n}\n\n_s(MagicMirror, \"PFjhhyspXTFL24hLj/IO+64f1g4=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_7__[\"useFBO\"], _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__[\"useFrame\"]];\n});\n\n_c = MagicMirror;\n\nfunction Lights() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"color\", {\n      attach: \"background\",\n      args: ['#f0f0f0']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ambientLight\", {\n      intensity: 3,\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 60,\n      position: [2, 30, 10],\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 6,\n      position: [3, 1, 10],\n      color: \"blue\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 3,\n      position: [3, 10, 30],\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_c2 = Lights;\n\nfunction LoadingText() {\n  var textOptions = {\n    font: new three__WEBPACK_IMPORTED_MODULE_3__[\"FontLoader\"]().parse(_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_4__),\n    size: 500,\n    height: 100\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textGeometry\", {\n      attach: \"geometry\",\n      args: ['Loading...', textOptions]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meshStandardMaterial\", {\n      attach: \"material\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_c3 = LoadingText;\nfunction FrontArt() {\n  _s2();\n\n  console.log(\"FrontArt\");\n  var controls = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"front-page_wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__[\"Canvas\"], {\n      dpr: (1, 2),\n      camera: {\n        position: [0, 4, 8],\n        fov: 50\n      },\n      gl: {\n        alpha: false\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Lights, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_5__[\"Suspense\"], {\n        fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingText, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 27\n        }, this),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__[\"Stage\"], {\n          controls: controls,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingText, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 9\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__[\"OrbitControls\"], {\n        ref: controls\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(FrontArt, \"7sXNjZ85F+QCyh0RVZRnHOVcH8w=\");\n\n_c4 = FrontArt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontArt);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MagicMirror\");\n$RefreshReg$(_c2, \"Lights\");\n$RefreshReg$(_c3, \"LoadingText\");\n$RefreshReg$(_c4, \"FrontArt\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcm9udGFydC5qcz8xMTI1Il0sIm5hbWVzIjpbIk1hZ2ljTWlycm9yIiwiY2hpbGRyZW4iLCJwcm9wcyIsImNhbSIsInVzZVJlZiIsImZibyIsInVzZUZCTyIsInVzZVN0YXRlIiwiVEhSRUUiLCJzY2VuZSIsInVzZUZyYW1lIiwic3RhdGUiLCJjdXJyZW50IiwibWF0cml4V29ybGRJbnZlcnNlIiwiY29weSIsImNhbWVyYSIsImdsIiwic2V0UmVuZGVyVGFyZ2V0IiwicmVuZGVyIiwidGV4dHVyZSIsImMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY3JlYXRlUG9ydGFsIiwiTGlnaHRzIiwiTG9hZGluZ1RleHQiLCJ0ZXh0T3B0aW9ucyIsImZvbnQiLCJwYXJzZSIsIlJvYm90byIsInNpemUiLCJoZWlnaHQiLCJGcm9udEFydCIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9scyIsInBvc2l0aW9uIiwiZm92IiwiYWxwaGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFdBQVQsT0FBNkM7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBVEMsS0FBUzs7QUFDM0MsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQixDQUQyQyxDQUUzQzs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGdFQUFNLEVBQWxCLENBSDJDLENBSTNDOztBQUoyQyxrQkFLM0JDLHNEQUFRLENBQUM7QUFBQSxXQUFNLElBQUlDLDJDQUFKLEVBQU47QUFBQSxHQUFELENBTG1CO0FBQUEsTUFLcENDLEtBTG9DLGlCQU0zQzs7O0FBQ0FDLHFFQUFRLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xCO0FBQ0FSLE9BQUcsQ0FBQ1MsT0FBSixDQUFZQyxrQkFBWixDQUErQkMsSUFBL0IsQ0FBb0NILEtB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VUFBWjtBQUNBLE1BQU1DLFFBQVEsR0FBRzlCLG9EQUFNLEVBQXZCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQSwyQkFDQSxxRUFBQyx5REFBRDtBQUFRLFNBQUcsR0FBRyxHQUFFLENBQUwsQ0FBWDtBQUFvQixZQUFNLEVBQUU7QUFBRStCLGdCQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWjtBQUF1QkMsV0FBRyxFQUFFO0FBQTVCLE9BQTVCO0FBQThELFFBQUUsRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFsRTtBQUFBLDhCQUNFLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsOENBQUQ7QUFBVSxnQkFBUSxlQUFFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBcEI7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUFPLGtCQUFRLEVBQUVILFFBQWpCO0FBQUEsaUNBQ0EscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU9FLHFFQUFDLCtEQUFEO0FBQWUsV0FBRyxFQUFFQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0lBaEJlSCxROztNQUFBQSxRO0FBa0JEQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZnJvbnRhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCBSb2JvdG8gZnJvbSAnLi4vZm9udHMvUm9ib3RvLmpzb24nO1xuaW1wb3J0IFJlYWN0LCB7ICBTdXNwZW5zZSwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSwgY3JlYXRlUG9ydGFsIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xuaW1wb3J0IHsgdXNlR0xURiwgU3RhZ2UsIFNreSwgU3RhcnMsIHVzZUZCTywgT3JiaXRDb250cm9scywgcm90YXRpb24sIFBlcnNwZWN0aXZlQ2FtZXJhLCBDYW1lcmFTaGFrZSwgQ29udGFjdFNoYWRvd3MgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSdcbmltcG9ydCB7ICBCZWVyLCBDb25jaGEsIEFuZ2VsLCBQbGFudCB9IGZyb20gJy4vbW9kZWxzJ1xuaW1wb3J0IHtPYmplY3RMaXN0TGVmdCwgT2JqZWN0TGlzdFJpZ2h0LCBPYmplY3RMaXN0Q2VudGVyLCBPYmplY3RMaXN0TWlycm9yfSBmcm9tICcuL21vZGVscydcblxuXG5mdW5jdGlvbiBNYWdpY01pcnJvcih7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IGNhbSA9IHVzZVJlZigpXG4gIC8vIHVzZUZCTyBjcmVhdGVzIGEgV2ViR0wyIGJ1ZmZlciBmb3IgdXMsIGl0J3MgYSBoZWxwZXIgZnJvbSB0aGUgXCJkcmVpXCIgbGlicmFyeVxuICBjb25zdCBmYm8gPSB1c2VGQk8oKVxuICAvLyBUaGUgaXMgYSBzZXBhcmF0ZSBzY2VuZSB0aGF0IHdlIGNyZWF0ZSwgUmVhY3Qgd2lsbCBwb3J0YWwgaW50byB0aGF0XG4gIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgVEhSRUUuU2NlbmUoKSlcbiAgLy8gVGllIHRoaXMgY29tcG9uZW50IGludG8gdGhlIHJlbmRlci1sb29wXG4gIHVzZUZyYW1lKChzdGF0ZSkgPT4ge1xuICAgIC8vIE91ciBwb3J0YWwgaGFzIGl0cyBvd24gY2FtZXJhLCBidXQgd2UgY29weSB0aGUgb3JpZ2luYWxzIHdvcmxkIG1hdHJpeFxuICAgIGNhbS5jdXJyZW50Lm1hdHJpeFdvcmxkSW52ZXJzZS5jb3B5KHN0YXRlLmNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UpXG4gICAgLy8gVGhlbiB3ZSBzZXQgdGhlIHJlbmRlci10YXJnZXQgdG8gdGhlIGJ1ZmZlciB0aGF0IHdlIGhhdmUgY3JlYXRlZFxuICAgIHN0YXRlLmdsLnNldFJlbmRlclRhcmdldChmYm8pXG4gICAgLy8gV2UgcmVuZGVyIHRoZSBzY2VuZSBpbnRvIGl0LCB1c2luZyB0aGUgbG9jYWwgY2FtZXJhIHRoYXQgaXMgY2xhbXBlZCB0byB0aGUgcGxhbmVzIGFzcGVjdCByYXRpb1xuICAgIHN0YXRlLmdsLnJlbmRlcihzY2VuZSwgY2FtLmN1cnJlbnQpXG4gICAgLy8gQW5kIGZsaXAgdGhlIHJlbmRlci10YXJnZXQgdG8gdGhlIGRlZmF1bHQgYWdhaW5cbiAgICBzdGF0ZS5nbC5zZXRSZW5kZXJUYXJnZXQobnVsbClcbiAgfSlcbiAgcmV0dXJuIChcblxuICAgIDw+XG5cbiAgIFxuICAgICAgPG1lc2ggey4uLnByb3BzfT5cbiAgICAgICAgPHBsYW5lR2VvbWV0cnkgYXJncz17WzUsIDEwXX0gcG9zaXRpb249e1swLDEwLDEwXX0gLz5cbiAgICAgICAgey8qIFRoZSBcIm1pcnJvclwiIGlzIGp1c3QgYSBib3JpbmcgcGxhbmUsIGJ1dCBpdCByZWNlaXZlcyB0aGUgYnVmZmVyIHRleHR1cmUgKi99XG4gICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCBtYXA9e2Ziby50ZXh0dXJlfSAvPlxuICAgICAgPC9tZXNoPlxuICAgIFxuICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIG1hbnVhbCByZWY9e2NhbX0gZm92PXsxNTB9IGFzcGVjdD17Mi41IC8gNX0gb25VcGRhdGU9eyhjKSA9PiBjLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKX0gLz5cbiAgICAgIHsvKiBUaGlzIGlzIFJlYWN0IGJlaW5nIGF3ZXNvbWUsIHdlIHBvcnRhbCB0aGlzIGNvbXBvbmVudHMgY2hpbGRyZW4gaW50byB0aGUgc2VwYXJhdGUgc2NlbmUgYWJvdmUgKi99XG4gICAgICB7Y3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBzY2VuZSl9XG4gICAgPC8+XG4gXG4gIFxuICApXG59XG5cbmZ1bmN0aW9uIExpZ2h0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGNvbG9yIGF0dGFjaD1cImJhY2tncm91bmRcIiBhcmdzPXtbJyNmMGYwZjAnXX0gLz5cbiAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXszfSBjb2xvcj1cInJlZFwiIC8+XG4gICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezYwfSBwb3NpdGlvbj17WzIsIDMwLCAxMF19IGNvbG9yPVwicmVkXCIgLz5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17Nn0gcG9zaXRpb249e1szLCAxLCAxMF19IGNvbG9yPVwiYmx1ZVwiIC8+XG4gICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezN9IHBvc2l0aW9uPXtbMywgMTAsIDMwXX0gY29sb3I9XCJyZWRcIiAvPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIExvYWRpbmdUZXh0KCkge1xuICBjb25zdCB0ZXh0T3B0aW9ucyA9IHtcbiAgICBmb250OiBuZXcgVEhSRUUuRm9udExvYWRlcigpLnBhcnNlKFJvYm90byksXG4gICAgc2l6ZTogNTAwLFxuICAgIGhlaWdodDogMTAwXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRleHRHZW9tZXRyeSBhdHRhY2g9J2dlb21ldHJ5JyBhcmdzPXtbJ0xvYWRpbmcuLi4nLCB0ZXh0T3B0aW9uc119IC8+XG4gICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgYXR0YWNoPSdtYXRlcmlhbCcgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZyb250QXJ0KCkge1xuICBjb25zb2xlLmxvZyhcIkZyb250QXJ0XCIpO1xuICBjb25zdCBjb250cm9scyA9IHVzZVJlZigpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udC1wYWdlX3dyYXBwZXJcIj5cbiAgICA8Q2FudmFzIGRwcj17KDEsMil9IGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDQsIDhdLCBmb3Y6IDUwIH19IGdsPXt7IGFscGhhOiBmYWxzZSB9fT5cbiAgICAgIDxMaWdodHMgLz5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmdUZXh0IC8+fT5cbiAgICAgICAgPFN0YWdlIGNvbnRyb2xzPXtjb250cm9sc30+XG4gICAgICAgIDxMb2FkaW5nVGV4dCAvPlxuICAgICAgICA8L1N0YWdlPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDxPcmJpdENvbnRyb2xzIHJlZj17Y29udHJvbHN9IC8+XG4gICAgPC9DYW52YXM+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRBcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/frontart.js\n");

/***/ })

})