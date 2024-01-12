/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/exenv";
exports.ids = ["vendor-chunks/exenv"];
exports.modules = {

/***/ "(ssr)/./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2015 Jed Watson.\n  Based on code that is Copyright 2013-2015, Facebook, Inc.\n  All rights reserved.\n*/ /* global define */ (function() {\n    \"use strict\";\n    var canUseDOM = !!( false && 0);\n    var ExecutionEnvironment = {\n        canUseDOM: canUseDOM,\n        canUseWorkers: typeof Worker !== \"undefined\",\n        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),\n        canUseViewport: canUseDOM && !!window.screen\n    };\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n            return ExecutionEnvironment;\n        }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQSxHQUNBLGlCQUFpQixHQUVoQjtJQUNBO0lBRUEsSUFBSUEsWUFBWSxDQUFDLENBQ2hCLE9BQ2UsSUFDZkMsQ0FBNkI7SUFHOUIsSUFBSUcsdUJBQXVCO1FBRTFCSixXQUFXQTtRQUVYSyxlQUFlLE9BQU9DLFdBQVc7UUFFakNDLHNCQUNDUCxhQUFhLENBQUMsQ0FBRUMsQ0FBQUEsT0FBT08sZ0JBQWdCLElBQUlQLE9BQU9RLFdBQVc7UUFFOURDLGdCQUFnQlYsYUFBYSxDQUFDLENBQUNDLE9BQU9VLE1BQU07SUFFN0M7SUFFQSxJQUFJLElBQTRFLEVBQUU7UUFDakZDLG1DQUFPO1lBQ04sT0FBT1I7UUFDUixDQUFDO0FBQUEsa0dBQUM7SUFDSCxPQUFPLEVBSU47QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLy4vbm9kZV9tb2R1bGVzL2V4ZW52L2luZGV4LmpzP2NjMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiJdLCJuYW1lcyI6WyJjYW5Vc2VET00iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJFeGVjdXRpb25FbnZpcm9ubWVudCIsImNhblVzZVdvcmtlcnMiLCJXb3JrZXIiLCJjYW5Vc2VFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImNhblVzZVZpZXdwb3J0Iiwic2NyZWVuIiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/exenv/index.js\n");

/***/ })

};
;