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

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"62eae3e005c5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2E4NjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2MmVhZTNlMDA1YzVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./CartContext/CartContex.jsx":
/*!************************************!*\
  !*** ./CartContext/CartContex.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: function() { return /* binding */ CartContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ CartContext,default auto */ \nvar _s = $RefreshSig$();\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CardProvider = (param)=>{\n    let { children } = param;\n    _s();\n    // cart open state\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // cart state\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // cart total state\n    const [cartTotal, setCartTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // item amount state\n    const [itemAmount, setItemAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // update item amount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const amount = cart.reduce((a, b)=>{\n            return a + b.amount;\n        }, 0);\n        setItemAmount(amount);\n    }, []);\n    // update cart total price\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const amount = cart.reduce((a, b)=>{\n            return a + Number(b.price) * b.amount;\n        }, 0);\n    }, [\n        cart\n    ]);\n    // add top cart\n    const addToCart = (id, image, name, price, additionalTopping, size, crust)=>{\n        // add cart additionalTopping array by name\n        additionalTopping.sort((a, b)=>a.name.localeCompare(b.name));\n        const newItem = {\n            id,\n            image,\n            name,\n            price,\n            additionalTopping,\n            size,\n            crust,\n            amount: 1\n        };\n        const cartItemIndex = cart.findIndex((item)=>item.id === id && item.price === price && item.size === size && item.image === image && JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) && item.crust === crust);\n        if (cartItemIndex === -1) {\n            setCart([\n                ...cart,\n                newItem\n            ]);\n        } else {\n            const newCart = [\n                ...cart\n            ];\n            newCart[cartItemIndex].amount += 1;\n            setCart(newCart);\n        }\n        // open cart\n        setIsOpen(true);\n    };\n    // remove item cart\n    const removeItem = (id, price, crust)=>{\n        const itemIndex = cart.findIndex((item)=>item.id === id && item.price === price && item.crust === crust);\n        if (itemIndex !== -1) {\n            const newCart = [\n                ...cart\n            ];\n            newCart.splice(itemIndex, 1);\n            setCart(newCart);\n        }\n    };\n    // increase Amount\n    const increaseAmount = (id, price)=>{\n        const itemIndex = cart.findIndex((item)=>item.id === id && item.price === price);\n        if (itemIndex !== -1) {\n            const newItem = [\n                ...cart\n            ];\n            newItem[itemIndex].amount += 1;\n            setCart(newItem);\n        }\n    };\n    // decrease Amount\n    const decraseAmount = (id, price)=>{\n        const itemIndex = cart.findIndex((item)=>item.id === id && item.price === price);\n        if (itemIndex !== -1) {\n            const newItem = [\n                ...cart\n            ];\n            if (newItem[itemIndex].amount > 1) {\n                newItem[itemIndex].amount -= 1;\n            }\n            setCart(newItem);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            isOpen,\n            setIsOpen,\n            addToCart,\n            cart,\n            setCart,\n            removeItem,\n            increaseAmount,\n            decraseAmount,\n            itemAmount,\n            cartTotal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\olcan\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pizza_land\\\\CartContext\\\\CartContex.jsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardProvider, \"tfdrHeXqqSmk6TKOnwaK682D13I=\");\n_c = CardProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardProvider);\nvar _c;\n$RefreshReg$(_c, \"CardProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NhcnRDb250ZXh0L0NhcnRDb250ZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVrRTtBQUUzRCxNQUFNSSw0QkFBY0gsb0RBQWFBLEdBQUc7QUFFM0MsTUFBTUksZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDaEMsa0JBQWtCO0lBQ2xCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxhQUFhO0lBQ2IsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxvQkFBb0I7SUFDcEIsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTdDLHFCQUFxQjtJQUNyQkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxTQUFTTixLQUFLTyxNQUFNLENBQUMsQ0FBQ0MsR0FBR0M7WUFDN0IsT0FBT0QsSUFBSUMsRUFBRUgsTUFBTTtRQUNyQixHQUFHO1FBQ0hELGNBQWNDO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLDBCQUEwQjtJQUMxQmIsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxTQUFTTixLQUFLTyxNQUFNLENBQUMsQ0FBQ0MsR0FBR0M7WUFDN0IsT0FBT0QsSUFBSUUsT0FBT0QsRUFBRUUsS0FBSyxJQUFJRixFQUFFSCxNQUFNO1FBQ3ZDLEdBQUc7SUFDTCxHQUFHO1FBQUNOO0tBQUs7SUFFVCxlQUFlO0lBQ2YsTUFBTVksWUFBWSxDQUNoQkMsSUFDQUMsT0FDQUMsTUFDQUosT0FDQUssbUJBQ0FDLE1BQ0FDO1FBRUEsMkNBQTJDO1FBQzNDRixrQkFBa0JHLElBQUksQ0FBQyxDQUFDWCxHQUFHQyxJQUFNRCxFQUFFTyxJQUFJLENBQUNLLGFBQWEsQ0FBQ1gsRUFBRU0sSUFBSTtRQUM1RCxNQUFNTSxVQUFVO1lBQ2RSO1lBQ0FDO1lBQ0FDO1lBQ0FKO1lBQ0FLO1lBQ0FDO1lBQ0FDO1lBQ0FaLFFBQVE7UUFDVjtRQUVBLE1BQU1nQixnQkFBZ0J0QixLQUFLdUIsU0FBUyxDQUNsQyxDQUFDQyxPQUNDQSxLQUFLWCxFQUFFLEtBQUtBLE1BQ1pXLEtBQUtiLEtBQUssS0FBS0EsU0FDZmEsS0FBS1AsSUFBSSxLQUFLQSxRQUNkTyxLQUFLVixLQUFLLEtBQUtBLFNBQ2ZXLEtBQUtDLFNBQVMsQ0FBQ0YsS0FBS1IsaUJBQWlCLE1BQ25DUyxLQUFLQyxTQUFTLENBQUNWLHNCQUNqQlEsS0FBS04sS0FBSyxLQUFLQTtRQUduQixJQUFJSSxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hCckIsUUFBUTttQkFBSUQ7Z0JBQU1xQjthQUFRO1FBQzVCLE9BQU87WUFDTCxNQUFNTSxVQUFVO21CQUFJM0I7YUFBSztZQUN6QjJCLE9BQU8sQ0FBQ0wsY0FBYyxDQUFDaEIsTUFBTSxJQUFJO1lBQ2pDTCxRQUFRMEI7UUFDVjtRQUNBLFlBQVk7UUFDWjVCLFVBQVU7SUFDWjtJQUNBLG1CQUFtQjtJQUNuQixNQUFNNkIsYUFBYSxDQUFDZixJQUFJRixPQUFPTztRQUM3QixNQUFNVyxZQUFZN0IsS0FBS3VCLFNBQVMsQ0FDOUIsQ0FBQ0MsT0FBU0EsS0FBS1gsRUFBRSxLQUFLQSxNQUFNVyxLQUFLYixLQUFLLEtBQUtBLFNBQVNhLEtBQUtOLEtBQUssS0FBS0E7UUFFckUsSUFBSVcsY0FBYyxDQUFDLEdBQUc7WUFDcEIsTUFBTUYsVUFBVTttQkFBSTNCO2FBQUs7WUFDekIyQixRQUFRRyxNQUFNLENBQUNELFdBQVc7WUFDMUI1QixRQUFRMEI7UUFDVjtJQUNGO0lBQ0Esa0JBQWtCO0lBQ2xCLE1BQU1JLGlCQUFpQixDQUFDbEIsSUFBSUY7UUFDMUIsTUFBTWtCLFlBQVk3QixLQUFLdUIsU0FBUyxDQUM5QixDQUFDQyxPQUFTQSxLQUFLWCxFQUFFLEtBQUtBLE1BQU1XLEtBQUtiLEtBQUssS0FBS0E7UUFFN0MsSUFBSWtCLGNBQWMsQ0FBQyxHQUFHO1lBQ3BCLE1BQU1SLFVBQVU7bUJBQUlyQjthQUFLO1lBQ3pCcUIsT0FBTyxDQUFDUSxVQUFVLENBQUN2QixNQUFNLElBQUk7WUFDN0JMLFFBQVFvQjtRQUNWO0lBQ0Y7SUFDQSxrQkFBa0I7SUFDbEIsTUFBTVcsZ0JBQWdCLENBQUNuQixJQUFJRjtRQUN6QixNQUFNa0IsWUFBWTdCLEtBQUt1QixTQUFTLENBQzlCLENBQUNDLE9BQVNBLEtBQUtYLEVBQUUsS0FBS0EsTUFBTVcsS0FBS2IsS0FBSyxLQUFLQTtRQUU3QyxJQUFJa0IsY0FBYyxDQUFDLEdBQUc7WUFDcEIsTUFBTVIsVUFBVTttQkFBSXJCO2FBQUs7WUFDekIsSUFBSXFCLE9BQU8sQ0FBQ1EsVUFBVSxDQUFDdkIsTUFBTSxHQUFHLEdBQUc7Z0JBQ2pDZSxPQUFPLENBQUNRLFVBQVUsQ0FBQ3ZCLE1BQU0sSUFBSTtZQUMvQjtZQUNBTCxRQUFRb0I7UUFDVjtJQUNGO0lBQ0EscUJBQ0UsOERBQUMxQixZQUFZc0MsUUFBUTtRQUNuQkMsT0FBTztZQUNMcEM7WUFDQUM7WUFDQWE7WUFDQVo7WUFDQUM7WUFDQTJCO1lBQ0FHO1lBQ0FDO1lBQ0E1QjtZQUNBRjtRQUNGO2tCQUVDTDs7Ozs7O0FBR1A7R0ExSE1EO0tBQUFBO0FBNEhOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NhcnRDb250ZXh0L0NhcnRDb250ZXguanN4P2Q1NzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQ2FyZFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIGNhcnQgb3BlbiBzdGF0ZVxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY2FydCBzdGF0ZVxyXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjYXJ0IHRvdGFsIHN0YXRlXHJcbiAgY29uc3QgW2NhcnRUb3RhbCwgc2V0Q2FydFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIC8vIGl0ZW0gYW1vdW50IHN0YXRlXHJcbiAgY29uc3QgW2l0ZW1BbW91bnQsIHNldEl0ZW1BbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIHVwZGF0ZSBpdGVtIGFtb3VudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBjYXJ0LnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICByZXR1cm4gYSArIGIuYW1vdW50O1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRJdGVtQW1vdW50KGFtb3VudCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyB1cGRhdGUgY2FydCB0b3RhbCBwcmljZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBjYXJ0LnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICByZXR1cm4gYSArIE51bWJlcihiLnByaWNlKSAqIGIuYW1vdW50O1xyXG4gICAgfSwgMCk7XHJcbiAgfSwgW2NhcnRdKTtcclxuXHJcbiAgLy8gYWRkIHRvcCBjYXJ0XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKFxyXG4gICAgaWQsXHJcbiAgICBpbWFnZSxcclxuICAgIG5hbWUsXHJcbiAgICBwcmljZSxcclxuICAgIGFkZGl0aW9uYWxUb3BwaW5nLFxyXG4gICAgc2l6ZSxcclxuICAgIGNydXN0XHJcbiAgKSA9PiB7XHJcbiAgICAvLyBhZGQgY2FydCBhZGRpdGlvbmFsVG9wcGluZyBhcnJheSBieSBuYW1lXHJcbiAgICBhZGRpdGlvbmFsVG9wcGluZy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIGFkZGl0aW9uYWxUb3BwaW5nLFxyXG4gICAgICBzaXplLFxyXG4gICAgICBjcnVzdCxcclxuICAgICAgYW1vdW50OiAxLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYXJ0SXRlbUluZGV4ID0gY2FydC5maW5kSW5kZXgoXHJcbiAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgIGl0ZW0uaWQgPT09IGlkICYmXHJcbiAgICAgICAgaXRlbS5wcmljZSA9PT0gcHJpY2UgJiZcclxuICAgICAgICBpdGVtLnNpemUgPT09IHNpemUgJiZcclxuICAgICAgICBpdGVtLmltYWdlID09PSBpbWFnZSAmJlxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGl0ZW0uYWRkaXRpb25hbFRvcHBpbmcpID09PVxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYWRkaXRpb25hbFRvcHBpbmcpICYmXHJcbiAgICAgICAgaXRlbS5jcnVzdCA9PT0gY3J1c3RcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGNhcnRJdGVtSW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHNldENhcnQoWy4uLmNhcnQsIG5ld0l0ZW1dKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uY2FydF07XHJcbiAgICAgIG5ld0NhcnRbY2FydEl0ZW1JbmRleF0uYW1vdW50ICs9IDE7XHJcbiAgICAgIHNldENhcnQobmV3Q2FydCk7XHJcbiAgICB9XHJcbiAgICAvLyBvcGVuIGNhcnRcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIC8vIHJlbW92ZSBpdGVtIGNhcnRcclxuICBjb25zdCByZW1vdmVJdGVtID0gKGlkLCBwcmljZSwgY3J1c3QpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGNhcnQuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQgJiYgaXRlbS5wcmljZSA9PT0gcHJpY2UgJiYgaXRlbS5jcnVzdCA9PT0gY3J1c3RcclxuICAgICk7XHJcbiAgICBpZiAoaXRlbUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLmNhcnRdO1xyXG4gICAgICBuZXdDYXJ0LnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG4gICAgICBzZXRDYXJ0KG5ld0NhcnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gaW5jcmVhc2UgQW1vdW50XHJcbiAgY29uc3QgaW5jcmVhc2VBbW91bnQgPSAoaWQsIHByaWNlKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtSW5kZXggPSBjYXJ0LmZpbmRJbmRleChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkICYmIGl0ZW0ucHJpY2UgPT09IHByaWNlXHJcbiAgICApO1xyXG4gICAgaWYgKGl0ZW1JbmRleCAhPT0gLTEpIHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IFsuLi5jYXJ0XTtcclxuICAgICAgbmV3SXRlbVtpdGVtSW5kZXhdLmFtb3VudCArPSAxO1xyXG4gICAgICBzZXRDYXJ0KG5ld0l0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gZGVjcmVhc2UgQW1vdW50XHJcbiAgY29uc3QgZGVjcmFzZUFtb3VudCA9IChpZCwgcHJpY2UpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGNhcnQuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQgJiYgaXRlbS5wcmljZSA9PT0gcHJpY2VcclxuICAgICk7XHJcbiAgICBpZiAoaXRlbUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0gWy4uLmNhcnRdO1xyXG4gICAgICBpZiAobmV3SXRlbVtpdGVtSW5kZXhdLmFtb3VudCA+IDEpIHtcclxuICAgICAgICBuZXdJdGVtW2l0ZW1JbmRleF0uYW1vdW50IC09IDE7XHJcbiAgICAgIH1cclxuICAgICAgc2V0Q2FydChuZXdJdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc09wZW4sXHJcbiAgICAgICAgc2V0SXNPcGVuLFxyXG4gICAgICAgIGFkZFRvQ2FydCxcclxuICAgICAgICBjYXJ0LFxyXG4gICAgICAgIHNldENhcnQsXHJcbiAgICAgICAgcmVtb3ZlSXRlbSxcclxuICAgICAgICBpbmNyZWFzZUFtb3VudCxcclxuICAgICAgICBkZWNyYXNlQW1vdW50LFxyXG4gICAgICAgIGl0ZW1BbW91bnQsXHJcbiAgICAgICAgY2FydFRvdGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FyZFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjYXJ0Iiwic2V0Q2FydCIsImNhcnRUb3RhbCIsInNldENhcnRUb3RhbCIsIml0ZW1BbW91bnQiLCJzZXRJdGVtQW1vdW50IiwiYW1vdW50IiwicmVkdWNlIiwiYSIsImIiLCJOdW1iZXIiLCJwcmljZSIsImFkZFRvQ2FydCIsImlkIiwiaW1hZ2UiLCJuYW1lIiwiYWRkaXRpb25hbFRvcHBpbmciLCJzaXplIiwiY3J1c3QiLCJzb3J0IiwibG9jYWxlQ29tcGFyZSIsIm5ld0l0ZW0iLCJjYXJ0SXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdDYXJ0IiwicmVtb3ZlSXRlbSIsIml0ZW1JbmRleCIsInNwbGljZSIsImluY3JlYXNlQW1vdW50IiwiZGVjcmFzZUFtb3VudCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./CartContext/CartContex.jsx\n"));

/***/ })

});