webpackHotUpdate_N_E("pages/index",{

/***/ "./components/frontart.js":
/*!********************************!*\
  !*** ./components/frontart.js ***!
  \********************************/
/*! exports provided: FrontArt, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FrontArt\", function() { return FrontArt; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ \"./components/models.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jonathanreis/Projects/BareGenerator/components/frontart.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nObject(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"extend\"])({\n  div: div\n});\n\nfunction MagicMirror(_ref) {\n  _s();\n\n  var children = _ref.children,\n      props = Object(_Users_jonathanreis_Projects_BareGenerator_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"children\"]);\n\n  var cam = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(); // useFBO creates a WebGL2 buffer for us, it's a helper from the \"drei\" library\n\n  var fbo = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"useFBO\"])(); // The is a separate scene that we create, React will portal into that\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(function () {\n    return new three__WEBPACK_IMPORTED_MODULE_3__[\"Scene\"]();\n  }),\n      scene = _useState[0]; // Tie this component into the render-loop\n\n\n  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useFrame\"])(function (state) {\n    // Our portal has its own camera, but we copy the originals world matrix\n    cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse); // Then we set the render-target to the buffer that we have created\n\n    state.gl.setRenderTarget(fbo); // We render the scene into it, using the local camera that is clamped to the planes aspect ratio\n\n    state.gl.render(scene, cam.current); // And flip the render-target to the default again\n\n    state.gl.setRenderTarget(null);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"mesh\", _objectSpread(_objectSpread({}, props), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"planeGeometry\", {\n        args: [5, 10],\n        position: [0, 10, 10]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meshBasicMaterial\", {\n        map: fbo.texture\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"PerspectiveCamera\"], {\n      manual: true,\n      ref: cam,\n      fov: 150,\n      aspect: 2.5 / 5,\n      onUpdate: function onUpdate(c) {\n        return c.updateProjectionMatrix();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"createPortal\"])(children, scene)]\n  }, void 0, true);\n}\n\n_s(MagicMirror, \"PFjhhyspXTFL24hLj/IO+64f1g4=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"useFBO\"], _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useFrame\"]];\n});\n\n_c = MagicMirror;\n\nfunction Lights() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"color\", {\n      attach: \"background\",\n      args: ['#f0f0f0']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ambientLight\", {\n      intensity: 3,\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 60,\n      position: [2, 30, 10],\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 6,\n      position: [3, 1, 10],\n      color: \"blue\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pointLight\", {\n      intensity: 3,\n      position: [3, 10, 30],\n      color: \"red\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_c2 = Lights;\nfunction FrontArt() {\n  _s2();\n\n  console.log(\"FrontArt\");\n  var controls = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"front-page_wrapper\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"], {\n      dpr: (1, 2),\n      camera: {\n        position: [0, 4, 8],\n        fov: 50\n      },\n      gl: {\n        alpha: false\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Lights, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_5__[\"Suspense\"], {\n        fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"loading\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 27\n        }, this),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"Stage\"], {\n          controls: controls,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MagicMirror, {\n            position: [-13, 3.5, 0],\n            rotation: [0, 0, 0],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Lights, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"Sky\"], {\n              sunPosition: [10000, 10, 10000]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListMirror\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListRight\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListLeft\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_models__WEBPACK_IMPORTED_MODULE_7__[\"ObjectListCenter\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__[\"OrbitControls\"], {\n        ref: controls\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(FrontArt, \"7sXNjZ85F+QCyh0RVZRnHOVcH8w=\");\n\n_c3 = FrontArt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontArt);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MagicMirror\");\n$RefreshReg$(_c2, \"Lights\");\n$RefreshReg$(_c3, \"FrontArt\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcm9udGFydC5qcz8xMTI1Il0sIm5hbWVzIjpbImV4dGVuZCIsImRpdiIsIk1hZ2ljTWlycm9yIiwiY2hpbGRyZW4iLCJwcm9wcyIsImNhbSIsInVzZVJlZiIsImZibyIsInVzZUZCTyIsInVzZVN0YXRlIiwiVEhSRUUiLCJzY2VuZSIsInVzZUZyYW1lIiwic3RhdGUiLCJjdXJyZW50IiwibWF0cml4V29ybGRJbnZlcnNlIiwiY29weSIsImNhbWVyYSIsImdsIiwic2V0UmVuZGVyVGFyZ2V0IiwicmVuZGVyIiwidGV4dHVyZSIsImMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY3JlYXRlUG9ydGFsIiwiTGlnaHRzIiwiRnJvbnRBcnQiLCJjb25zb2xlIiwibG9nIiwiY29udHJvbHMiLCJwb3NpdGlvbiIsImZvdiIsImFscGhhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsaUVBQU0sQ0FBQztBQUFFQyxLQUFHLEVBQUhBO0FBQUYsQ0FBRCxDQUFOOztBQUtBLFNBQVNDLFdBQVQsT0FBNkM7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBVEMsS0FBUzs7QUFDM0MsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQixDQUQyQyxDQUUzQzs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGdFQUFNLEVBQWxCLENBSDJDLENBSTNDOztBQUoyQyxrQkFLM0JDLHNEQUFRLENBQUM7QUFBQSxXQUFNLElBQUlDLDJDQUFKLEVBQU47QUFBQSxHQUFELENBTG1CO0FBQUEsTUFLcENDLEtBTG9DLGlCQU0zQzs7O0FBQ0FDLHFFQUFRLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xCO0FBQ0FSLE9BQUcsQ0FBQ1MsT0FBSixDQUFZQyxrQkFBWixDQUErQkMsSUFBL0IsQ0FBb0NILEtBQUssQ0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXBCO0FBQUEsK0JBQ0UscUVBQUMsdURBQUQ7QUFBTyxrQkFBUSxFQUFFSCxRQUFqQjtBQUFBLGtDQUNFLHFFQUFDLFdBQUQ7QUFBYSxvQkFBUSxFQUFFLENBQUMsQ0FBQyxFQUFGLEVBQU0sR0FBTixFQUFXLENBQVgsQ0FBdkI7QUFBc0Msb0JBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFoRDtBQUFBLG9DQUNFLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLHFEQUFEO0FBQUsseUJBQVcsRUFBRSxDQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksS0FBWjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLGVBT0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQVFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBZ0JFLHFFQUFDLCtEQUFEO0FBQWUsV0FBRyxFQUFFQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7SUF6QmVILFE7O01BQUFBLFE7QUEyQkRBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mcm9udGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xuaW1wb3J0IFJlYWN0LCB7ICBTdXNwZW5zZSwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSwgY3JlYXRlUG9ydGFsIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xuaW1wb3J0IHsgdXNlR0xURiwgU3RhZ2UsIFNreSwgU3RhcnMsIHVzZUZCTywgT3JiaXRDb250cm9scywgcm90YXRpb24sIFBlcnNwZWN0aXZlQ2FtZXJhLCBDYW1lcmFTaGFrZSwgQ29udGFjdFNoYWRvd3MgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSdcbmltcG9ydCB7ICBCZWVyLCBDb25jaGEsIEFuZ2VsLCBQbGFudCB9IGZyb20gJy4vbW9kZWxzJ1xuaW1wb3J0IHtPYmplY3RMaXN0TGVmdCwgT2JqZWN0TGlzdFJpZ2h0LCBPYmplY3RMaXN0Q2VudGVyLCBPYmplY3RMaXN0TWlycm9yfSBmcm9tICcuL21vZGVscydcbmV4dGVuZCh7IGRpdiB9KVxuXG5cblxuXG5mdW5jdGlvbiBNYWdpY01pcnJvcih7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IGNhbSA9IHVzZVJlZigpXG4gIC8vIHVzZUZCTyBjcmVhdGVzIGEgV2ViR0wyIGJ1ZmZlciBmb3IgdXMsIGl0J3MgYSBoZWxwZXIgZnJvbSB0aGUgXCJkcmVpXCIgbGlicmFyeVxuICBjb25zdCBmYm8gPSB1c2VGQk8oKVxuICAvLyBUaGUgaXMgYSBzZXBhcmF0ZSBzY2VuZSB0aGF0IHdlIGNyZWF0ZSwgUmVhY3Qgd2lsbCBwb3J0YWwgaW50byB0aGF0XG4gIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgVEhSRUUuU2NlbmUoKSlcbiAgLy8gVGllIHRoaXMgY29tcG9uZW50IGludG8gdGhlIHJlbmRlci1sb29wXG4gIHVzZUZyYW1lKChzdGF0ZSkgPT4ge1xuICAgIC8vIE91ciBwb3J0YWwgaGFzIGl0cyBvd24gY2FtZXJhLCBidXQgd2UgY29weSB0aGUgb3JpZ2luYWxzIHdvcmxkIG1hdHJpeFxuICAgIGNhbS5jdXJyZW50Lm1hdHJpeFdvcmxkSW52ZXJzZS5jb3B5KHN0YXRlLmNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UpXG4gICAgLy8gVGhlbiB3ZSBzZXQgdGhlIHJlbmRlci10YXJnZXQgdG8gdGhlIGJ1ZmZlciB0aGF0IHdlIGhhdmUgY3JlYXRlZFxuICAgIHN0YXRlLmdsLnNldFJlbmRlclRhcmdldChmYm8pXG4gICAgLy8gV2UgcmVuZGVyIHRoZSBzY2VuZSBpbnRvIGl0LCB1c2luZyB0aGUgbG9jYWwgY2FtZXJhIHRoYXQgaXMgY2xhbXBlZCB0byB0aGUgcGxhbmVzIGFzcGVjdCByYXRpb1xuICAgIHN0YXRlLmdsLnJlbmRlcihzY2VuZSwgY2FtLmN1cnJlbnQpXG4gICAgLy8gQW5kIGZsaXAgdGhlIHJlbmRlci10YXJnZXQgdG8gdGhlIGRlZmF1bHQgYWdhaW5cbiAgICBzdGF0ZS5nbC5zZXRSZW5kZXJUYXJnZXQobnVsbClcbiAgfSlcbiAgcmV0dXJuIChcblxuICAgIDw+XG5cbiAgIFxuICAgICAgPG1lc2ggey4uLnByb3BzfT5cbiAgICAgICAgPHBsYW5lR2VvbWV0cnkgYXJncz17WzUsIDEwXX0gcG9zaXRpb249e1swLDEwLDEwXX0gLz5cbiAgICAgICAgey8qIFRoZSBcIm1pcnJvclwiIGlzIGp1c3QgYSBib3JpbmcgcGxhbmUsIGJ1dCBpdCByZWNlaXZlcyB0aGUgYnVmZmVyIHRleHR1cmUgKi99XG4gICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCBtYXA9e2Ziby50ZXh0dXJlfSAvPlxuICAgICAgPC9tZXNoPlxuICAgIFxuICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIG1hbnVhbCByZWY9e2NhbX0gZm92PXsxNTB9IGFzcGVjdD17Mi41IC8gNX0gb25VcGRhdGU9eyhjKSA9PiBjLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKX0gLz5cbiAgICAgIHsvKiBUaGlzIGlzIFJlYWN0IGJlaW5nIGF3ZXNvbWUsIHdlIHBvcnRhbCB0aGlzIGNvbXBvbmVudHMgY2hpbGRyZW4gaW50byB0aGUgc2VwYXJhdGUgc2NlbmUgYWJvdmUgKi99XG4gICAgICB7Y3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBzY2VuZSl9XG4gICAgPC8+XG4gXG4gIFxuICApXG59XG5cbmZ1bmN0aW9uIExpZ2h0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGNvbG9yIGF0dGFjaD1cImJhY2tncm91bmRcIiBhcmdzPXtbJyNmMGYwZjAnXX0gLz5cbiAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXszfSBjb2xvcj1cInJlZFwiIC8+XG4gICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezYwfSBwb3NpdGlvbj17WzIsIDMwLCAxMF19IGNvbG9yPVwicmVkXCIgLz5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17Nn0gcG9zaXRpb249e1szLCAxLCAxMF19IGNvbG9yPVwiYmx1ZVwiIC8+XG4gICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezN9IHBvc2l0aW9uPXtbMywgMTAsIDMwXX0gY29sb3I9XCJyZWRcIiAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcm9udEFydCgpIHtcbiAgY29uc29sZS5sb2coXCJGcm9udEFydFwiKTtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VSZWYoKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnQtcGFnZV93cmFwcGVyXCI+XG4gICAgPENhbnZhcyBkcHI9eygxLDIpfSBjYW1lcmE9e3sgcG9zaXRpb246IFswLCA0LCA4XSwgZm92OiA1MCB9fSBnbD17eyBhbHBoYTogZmFsc2UgfX0+XG4gICAgICA8TGlnaHRzIC8+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+bG9hZGluZzwvZGl2Pn0+XG4gICAgICAgIDxTdGFnZSBjb250cm9scz17Y29udHJvbHN9PlxuICAgICAgICAgIDxNYWdpY01pcnJvciBwb3NpdGlvbj17Wy0xMywgMy41LCAwXX0gcm90YXRpb249e1swLCAwLCAwXX0+XG4gICAgICAgICAgICA8TGlnaHRzIC8+XG4gICAgICAgICAgICA8U2t5IHN1blBvc2l0aW9uPXtbMTAwMDAsIDEwLCAxMDAwMF19IC8+XG4gICAgICAgICAgICA8T2JqZWN0TGlzdE1pcnJvciAvPlxuICAgICAgICAgIDwvTWFnaWNNaXJyb3I+XG4gICAgICAgICAgPE9iamVjdExpc3RSaWdodCAvPlxuICAgICAgICAgIDxPYmplY3RMaXN0TGVmdCAvPlxuICAgICAgICAgIDxPYmplY3RMaXN0Q2VudGVyIC8+XG4gICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgPC9TdGFnZT5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8T3JiaXRDb250cm9scyByZWY9e2NvbnRyb2xzfSAvPlxuICAgIDwvQ2FudmFzPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250QXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/frontart.js\n");

/***/ })

})