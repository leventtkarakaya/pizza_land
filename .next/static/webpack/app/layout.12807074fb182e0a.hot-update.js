"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./CartContext/CartContex.jsx":
/*!************************************!*\
  !*** ./CartContext/CartContex.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: function() { return /* binding */ CartContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ CartContext,default auto */ \nvar _s = $RefreshSig$();\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CardProvider = (param)=>{\n    let { children } = param;\n    _s();\n    // cart open state\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // cart state\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // add top cart\n    const addToCart = (id, image, name, price, additionalTopping, size, crust)=>{\n        console.log(id, image, name, price, additionalTopping, size, crust);\n        // add cart additionalTopping array by name\n        const sortedToppings = additionalTopping.map((topping)=>({\n                name: topping.name,\n                id: topping.id\n            })).sort((a, b)=>a.name.localeCompare(b.name));\n        const newItem = {\n            id,\n            image,\n            name,\n            price,\n            additionalTopping,\n            size,\n            crust,\n            amount: 1\n        };\n        setCart([\n            ...cart,\n            newItem\n        ]);\n    };\n    console.log(cart);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            isOpen,\n            setIsOpen,\n            addToCart,\n            cart,\n            setCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LEVENT\\\\Desktop\\\\pizza\\\\CartContext\\\\CartContex.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardProvider, \"X4icEER4UWezx6yc+Ecc5tOKHYk=\");\n_c = CardProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardProvider);\nvar _c;\n$RefreshReg$(_c, \"CardProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NhcnRDb250ZXh0L0NhcnRDb250ZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV1RDtBQUVoRCxNQUFNRyw0QkFBY0Ysb0RBQWFBLEdBQUc7QUFFM0MsTUFBTUcsZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDaEMsa0JBQWtCO0lBQ2xCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxhQUFhO0lBQ2IsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsZUFBZTtJQUNmLE1BQU1RLFlBQVksQ0FDaEJDLElBQ0FDLE9BQ0FDLE1BQ0FDLE9BQ0FDLG1CQUNBQyxNQUNBQztRQUVBQyxRQUFRQyxHQUFHLENBQUNSLElBQUlDLE9BQU9DLE1BQU1DLE9BQU9DLG1CQUFtQkMsTUFBTUM7UUFDN0QsMkNBQTJDO1FBQzNDLE1BQU1HLGlCQUFpQkwsa0JBQ3BCTSxHQUFHLENBQUMsQ0FBQ0MsVUFBYTtnQkFBRVQsTUFBTVMsUUFBUVQsSUFBSTtnQkFBRUYsSUFBSVcsUUFBUVgsRUFBRTtZQUFDLElBQ3ZEWSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRVgsSUFBSSxDQUFDYSxhQUFhLENBQUNELEVBQUVaLElBQUk7UUFFN0MsTUFBTWMsVUFBVTtZQUNkaEI7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVcsUUFBUTtRQUNWO1FBQ0FuQixRQUFRO2VBQUlEO1lBQU1tQjtTQUFRO0lBQzVCO0lBQ0FULFFBQVFDLEdBQUcsQ0FBQ1g7SUFDWixxQkFDRSw4REFBQ0wsWUFBWTBCLFFBQVE7UUFDbkJDLE9BQU87WUFBRXhCO1lBQVFDO1lBQVdHO1lBQVdGO1lBQU1DO1FBQVE7a0JBRXBESjs7Ozs7O0FBR1A7R0F6Q01EO0tBQUFBO0FBMkNOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NhcnRDb250ZXh0L0NhcnRDb250ZXguanN4P2Q1NzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IENhcmRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAvLyBjYXJ0IG9wZW4gc3RhdGVcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNhcnQgc3RhdGVcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gYWRkIHRvcCBjYXJ0XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKFxyXG4gICAgaWQsXHJcbiAgICBpbWFnZSxcclxuICAgIG5hbWUsXHJcbiAgICBwcmljZSxcclxuICAgIGFkZGl0aW9uYWxUb3BwaW5nLFxyXG4gICAgc2l6ZSxcclxuICAgIGNydXN0XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgaW1hZ2UsIG5hbWUsIHByaWNlLCBhZGRpdGlvbmFsVG9wcGluZywgc2l6ZSwgY3J1c3QpO1xyXG4gICAgLy8gYWRkIGNhcnQgYWRkaXRpb25hbFRvcHBpbmcgYXJyYXkgYnkgbmFtZVxyXG4gICAgY29uc3Qgc29ydGVkVG9wcGluZ3MgPSBhZGRpdGlvbmFsVG9wcGluZ1xyXG4gICAgICAubWFwKCh0b3BwaW5nKSA9PiAoeyBuYW1lOiB0b3BwaW5nLm5hbWUsIGlkOiB0b3BwaW5nLmlkIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcblxyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgYWRkaXRpb25hbFRvcHBpbmcsXHJcbiAgICAgIHNpemUsXHJcbiAgICAgIGNydXN0LFxyXG4gICAgICBhbW91bnQ6IDEsXHJcbiAgICB9O1xyXG4gICAgc2V0Q2FydChbLi4uY2FydCwgbmV3SXRlbV0pO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2coY2FydCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBpc09wZW4sIHNldElzT3BlbiwgYWRkVG9DYXJ0LCBjYXJ0LCBzZXRDYXJ0IH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJkUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNldElzT3BlbiIsImNhcnQiLCJzZXRDYXJ0IiwiYWRkVG9DYXJ0IiwiaWQiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImFkZGl0aW9uYWxUb3BwaW5nIiwic2l6ZSIsImNydXN0IiwiY29uc29sZSIsImxvZyIsInNvcnRlZFRvcHBpbmdzIiwibWFwIiwidG9wcGluZyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJuZXdJdGVtIiwiYW1vdW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./CartContext/CartContex.jsx\n"));

/***/ })

});