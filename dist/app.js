require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([11],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);






__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.baseURL = 'https://www.zhengzhicheng.cn/';
__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.adapter = function (config) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      method: config.method === 'post' ? 'POST' : 'GET',
      url: config.url,
      data: config.params ? config.params : config.data,
      header: config.headers,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      },
      complete: function complete() {
        wx.hideLoading();
      }
    });
  });
};
// 添加请求拦截器
__WEBPACK_IMPORTED_MODULE_3_axios___default.a.interceptors.request.use(function (config) {
  wx.showLoading({
    title: '正在拼命加载中...',
    mask: true
  });
  // 在发送请求之前做些什么
  if (wx.getStorageSync('token')) {
    config.headers.Authorization = wx.getStorageSync('token');
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$axios = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;

var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(88);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-226ec6f2", Component.options)
  } else {
    hotAPI.reload("data-v-226ec6f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync("logs") || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync("logs", logs);

    // console.log("app created and cache logs by setStorageSync");
  }
});

/***/ })

},[51]);
//# sourceMappingURL=app.js.map