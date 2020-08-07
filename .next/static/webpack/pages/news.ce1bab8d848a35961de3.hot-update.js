webpackHotUpdate_N_E("pages/news",{

/***/ "./pages/news.jsx":
/*!************************!*\
  !*** ./pages/news.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "G:\\Programming\\React\\React-Mentoring-Program\\pages\\news.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import {Link, Head} from 'next';







const News = ({
  news
}) => {
  _s();

  const {
    0: searchQuery,
    1: setSearchQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('react');

  const handleTextChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/news/?searchTerm=${searchQuery}`);
  };

  const searchForm = () => __jsx("div", {
    className: "add-padding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    value: searchQuery,
    onChange: handleTextChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Search"));

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mainTitle: "News",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, searchForm(), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), news.map((news, index) => __jsx("p", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: news.url,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, news.title)))));
};

_s(News, "gtWxUTNVp3ko0+SGIc+31ryautk=");

_c = News;

News.getInitialProps = async ({
  query
}) => {
  let news;

  try {
    const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm}`);
    news = await res.json();
  } catch (err) {
    console.log(`ERROR ${err}`);
    news = [];
  }

  return {
    news: news.hits
  };
};

/* harmony default export */ __webpack_exports__["default"] = (News);

var _c;

$RefreshReg$(_c, "News");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy5qc3giXSwibmFtZXMiOlsiTmV3cyIsIm5ld3MiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidXNlU3RhdGUiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwic2VhcmNoRm9ybSIsIm1hcCIsImluZGV4IiwidXJsIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlcyIsImZldGNoIiwic2VhcmNoVGVybSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGl0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQUE7O0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxPQUFELENBQTlDOztBQUVBLFFBQU1DLGdCQUFnQixHQUFHQyxDQUFDLElBQUk7QUFDMUJILGtCQUFjLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFDSCxHQUZEOztBQUlBLFFBQU1DLFlBQVksR0FBR0gsQ0FBQyxJQUFJO0FBQ3RCQSxLQUFDLENBQUNJLGNBQUY7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFhLHFCQUFvQlYsV0FBWSxFQUE3QztBQUNILEdBSEQ7O0FBS0EsUUFBTVcsVUFBVSxHQUFHLE1BQ2Y7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxZQUFRLEVBQUdKLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBRVAsV0FBMUI7QUFBdUMsWUFBUSxFQUFHRyxnQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosQ0FESjs7QUFTQSxTQUNJLE1BQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1EsVUFBVSxFQURmLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0taLElBQUksQ0FBQ2EsR0FBTCxDQUFTLENBQUNiLElBQUQsRUFBT2MsS0FBUCxLQUNOO0FBQUcsT0FBRyxFQUFFQSxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBRWQsSUFBSSxDQUFDZSxHQUFkO0FBQW1CLFVBQU0sRUFBQyxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDZixJQUFJLENBQUNnQixLQUExQyxDQURKLENBREgsQ0FITCxDQURKLENBREo7QUFhSCxDQWxDRDs7R0FBTWpCLEk7O0tBQUFBLEk7O0FBb0NOQSxJQUFJLENBQUNrQixlQUFMLEdBQXVCLE9BQU87QUFBRUM7QUFBRixDQUFQLEtBQXFCO0FBQ3hDLE1BQUlsQixJQUFKOztBQUNBLE1BQUk7QUFDQSxVQUFNbUIsR0FBRyxHQUFHLE1BQU1DLHVEQUFLLENBQUUsOENBQTZDRixLQUFLLENBQUNHLFVBQVcsRUFBaEUsQ0FBdkI7QUFDQXJCLFFBQUksR0FBRyxNQUFNbUIsR0FBRyxDQUFDRyxJQUFKLEVBQWI7QUFDSCxHQUhELENBR0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLFNBQVFGLEdBQUksRUFBekI7QUFDQXZCLFFBQUksR0FBRyxFQUFQO0FBQ0g7O0FBRUQsU0FBTztBQUNIQSxRQUFJLEVBQUVBLElBQUksQ0FBQzBCO0FBRFIsR0FBUDtBQUdILENBYkQ7O0FBZWUzQixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzLmNlMWJhYjhkODQ4YTM1OTYxZGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge0xpbmssIEhlYWR9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IE5ld3MgPSAoeyBuZXdzIH0pID0+IHtcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCdyZWFjdCcpO1xuXG4gICAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IGUgPT4ge1xuICAgICAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFJvdXRlci5wdXNoKGAvbmV3cy8/c2VhcmNoVGVybT0ke3NlYXJjaFF1ZXJ5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSAoKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGQtcGFkZGluZyc+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGhhbmRsZVN1Ym1pdCB9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXsgaGFuZGxlVGV4dENoYW5nZSB9IC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBtYWluVGl0bGU9J05ld3MnPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7c2VhcmNoRm9ybSgpfVxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAge25ld3MubWFwKChuZXdzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e25ld3MudXJsfSB0YXJnZXQ9J19ibGFuayc+eyBuZXdzLnRpdGxlIH08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbk5ld3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICAgIGxldCBuZXdzO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9JHtxdWVyeS5zZWFyY2hUZXJtfWApO1xuICAgICAgICBuZXdzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEVSUk9SICR7ZXJyfWApO1xuICAgICAgICBuZXdzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3czogbmV3cy5oaXRzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzOyJdLCJzb3VyY2VSb290IjoiIn0=