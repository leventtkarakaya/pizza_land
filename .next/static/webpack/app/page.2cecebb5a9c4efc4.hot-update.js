"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./CartContext/CartContex.jsx":
/*!************************************!*\
  !*** ./CartContext/CartContex.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: function() { return /* binding */ CartContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ CartContext,default auto */ \nvar _s = $RefreshSig$();\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CardProvider = (param)=>{\n    let { children } = param;\n    _s();\n    // cart open state\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // cart state\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // add top cart\n    const addToCart = (id, image, name, price, additionalTopping, size, crust)=>{\n        // add cart additionalTopping array by name\n        const sortedToppings = additionalTopping.sort((a, b)=>a.name.localeCompare(b.name));\n        console.log(sortedToppings);\n        const newItem = {\n            id,\n            image,\n            name,\n            price,\n            additionalTopping,\n            size,\n            crust,\n            amount: 1\n        };\n        const cartItemIndex = cart.findIndex((item)=>item.id === id && item.price === price && item.name === name && item.image === image && item.size === size && JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) && item.crust === crust);\n        setCart([\n            ...cart,\n            newItem\n        ]);\n        setIsOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            isOpen,\n            setIsOpen,\n            addToCart,\n            cart,\n            setCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olcan\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pizza_land\\\\CartContext\\\\CartContex.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardProvider, \"X4icEER4UWezx6yc+Ecc5tOKHYk=\");\n_c = CardProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardProvider);\nvar _c;\n$RefreshReg$(_c, \"CardProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NhcnRDb250ZXh0L0NhcnRDb250ZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV1RDtBQUVoRCxNQUFNRyw0QkFBY0Ysb0RBQWFBLEdBQUc7QUFFM0MsTUFBTUcsZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDaEMsa0JBQWtCO0lBQ2xCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxhQUFhO0lBQ2IsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsZUFBZTtJQUNmLE1BQU1RLFlBQVksQ0FDaEJDLElBQ0FDLE9BQ0FDLE1BQ0FDLE9BQ0FDLG1CQUNBQyxNQUNBQztRQUVBLDJDQUEyQztRQUMzQyxNQUFNQyxpQkFBaUJILGtCQUFrQkksSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQ2hERCxFQUFFUCxJQUFJLENBQUNTLGFBQWEsQ0FBQ0QsRUFBRVIsSUFBSTtRQUU3QlUsUUFBUUMsR0FBRyxDQUFDTjtRQUNaLE1BQU1PLFVBQVU7WUFDZGQ7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVMsUUFBUTtRQUNWO1FBRUEsTUFBTUMsZ0JBQWdCbkIsS0FBS29CLFNBQVMsQ0FDbEMsQ0FBQ0MsT0FDQ0EsS0FBS2xCLEVBQUUsS0FBS0EsTUFDWmtCLEtBQUtmLEtBQUssS0FBS0EsU0FDZmUsS0FBS2hCLElBQUksS0FBS0EsUUFDZGdCLEtBQUtqQixLQUFLLEtBQUtBLFNBQ2ZpQixLQUFLYixJQUFJLEtBQUtBLFFBQ2RjLEtBQUtDLFNBQVMsQ0FBQ0YsS0FBS2QsaUJBQWlCLE1BQ25DZSxLQUFLQyxTQUFTLENBQUNoQixzQkFDakJjLEtBQUtaLEtBQUssS0FBS0E7UUFHbkJSLFFBQVE7ZUFBSUQ7WUFBTWlCO1NBQVE7UUFFMUJsQixVQUFVO0lBQ1o7SUFDQSxxQkFDRSw4REFBQ0osWUFBWTZCLFFBQVE7UUFDbkJDLE9BQU87WUFBRTNCO1lBQVFDO1lBQVdHO1lBQVdGO1lBQU1DO1FBQVE7a0JBRXBESjs7Ozs7O0FBR1A7R0F0RE1EO0tBQUFBO0FBd0ROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NhcnRDb250ZXh0L0NhcnRDb250ZXguanN4P2Q1NzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IENhcmRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAvLyBjYXJ0IG9wZW4gc3RhdGVcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNhcnQgc3RhdGVcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gYWRkIHRvcCBjYXJ0XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKFxyXG4gICAgaWQsXHJcbiAgICBpbWFnZSxcclxuICAgIG5hbWUsXHJcbiAgICBwcmljZSxcclxuICAgIGFkZGl0aW9uYWxUb3BwaW5nLFxyXG4gICAgc2l6ZSxcclxuICAgIGNydXN0XHJcbiAgKSA9PiB7XHJcbiAgICAvLyBhZGQgY2FydCBhZGRpdGlvbmFsVG9wcGluZyBhcnJheSBieSBuYW1lXHJcbiAgICBjb25zdCBzb3J0ZWRUb3BwaW5ncyA9IGFkZGl0aW9uYWxUb3BwaW5nLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZWRUb3BwaW5ncyk7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBhZGRpdGlvbmFsVG9wcGluZyxcclxuICAgICAgc2l6ZSxcclxuICAgICAgY3J1c3QsXHJcbiAgICAgIGFtb3VudDogMSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FydEl0ZW1JbmRleCA9IGNhcnQuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbSkgPT5cclxuICAgICAgICBpdGVtLmlkID09PSBpZCAmJlxyXG4gICAgICAgIGl0ZW0ucHJpY2UgPT09IHByaWNlICYmXHJcbiAgICAgICAgaXRlbS5uYW1lID09PSBuYW1lICYmXHJcbiAgICAgICAgaXRlbS5pbWFnZSA9PT0gaW1hZ2UgJiZcclxuICAgICAgICBpdGVtLnNpemUgPT09IHNpemUgJiZcclxuICAgICAgICBKU09OLnN0cmluZ2lmeShpdGVtLmFkZGl0aW9uYWxUb3BwaW5nKSA9PT1cclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGFkZGl0aW9uYWxUb3BwaW5nKSAmJlxyXG4gICAgICAgIGl0ZW0uY3J1c3QgPT09IGNydXN0XHJcbiAgICApO1xyXG5cclxuICAgIHNldENhcnQoWy4uLmNhcnQsIG5ld0l0ZW1dKTtcclxuXHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IGlzT3Blbiwgc2V0SXNPcGVuLCBhZGRUb0NhcnQsIGNhcnQsIHNldENhcnQgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb3ZpZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0Q29udGV4dCIsIkNhcmRQcm92aWRlciIsImNoaWxkcmVuIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2FydCIsInNldENhcnQiLCJhZGRUb0NhcnQiLCJpZCIsImltYWdlIiwibmFtZSIsInByaWNlIiwiYWRkaXRpb25hbFRvcHBpbmciLCJzaXplIiwiY3J1c3QiLCJzb3J0ZWRUb3BwaW5ncyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJjb25zb2xlIiwibG9nIiwibmV3SXRlbSIsImFtb3VudCIsImNhcnRJdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./CartContext/CartContex.jsx\n"));

/***/ })

});