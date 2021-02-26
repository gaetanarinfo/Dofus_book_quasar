"use strict";
exports.__esModule = true;
var composition_api_1 = require("@vue/composition-api");
var wrappers_1 = require("quasar/wrappers");
exports["default"] = wrappers_1.boot(function (_a) {
    var Vue = _a.Vue;
    Vue.use(composition_api_1["default"]);
});
