!function(e){var n={};function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./main.js")}({"../node_modules/get-json-data/index.js":
/*!**********************************************!*\
  !*** ../node_modules/get-json-data/index.js ***!
  \**********************************************/
/*! no static exports found */function(module,exports){eval("// get-json-data\n//code from https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started\n(function() {\n  var makeRequest = function(url,callback,opt) {\n    var xhr;\n    if (XMLHttpRequest) { // Mozilla, Safari, ...\n      xhr = new XMLHttpRequest();\n    } else if (ActiveXObject) { // IE\n      try {\n        xhr = new ActiveXObject(\"Msxml2.XMLHTTP\");\n      } \n      catch (e) {\n        try {\n          xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\n        } \n        catch (e) {}\n      }\n    }\n\n    if (!xhr) {\n      callback.call(this,\n        'Giving up :( Cannot create an XMLHTTP instance',\n        null);\n      return false;\n    }\n    xhr.onreadystatechange = function() {\n      if (xhr.readyState === 4) {\n        if (xhr.status >= 200 && xhr.status <400) {\n          var data = xhr.responseText,\n            raw = opt && opt.hasOwnProperty('raw') ? opt.raw : false;  \n          if(!raw) {\n            try {\n              data = JSON.parse(data);\n            } catch (e) {\n              callback.call(this, e,null);\n              return;\n            }\n          }\n          callback.call(this,null,data);\n        } else {\n          callback.call(this,\n            new Error('There was a problem with the request'),\n            null);\n        }\n      }\n    };\n    var method = opt && opt.method ? opt.method : 'GET';\n    if (method == 'GET') { \n      var params = [];\n      if (opt && opt.params && typeof(opt.params) == 'object') {\n        for( var key in opt.params) {\n          params.push(key +'='+ encodeURIComponent(opt.params[key]));\n        }\n      }\n      url = params.length > 0 ? url+'?'+params.join('&') : url;\n      xhr.open('GET', url);\n      xhr.send();\n    } else if (method == 'POST') {\n      var data = opt && opt.data ? opt.data : opt.params ? opt.params : {};\n      xhr.open('POST', url);\n      xhr.send(JSON.stringify(data));\n    }\n    return xhr;\n  }\n\n  if(typeof module !== 'undefined' && module.exports) {\n    module.exports = makeRequest;\n  }\n  if(typeof window!== 'undefined') {\n    window.getJSONData = makeRequest;\n  } \n})();\n\n\n//# sourceURL=webpack:///../node_modules/get-json-data/index.js?")},"./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Config =\n/*#__PURE__*/\nfunction () {\n  function Config(scheme) {\n    _classCallCheck(this, Config);\n\n    this.scheme = scheme;\n  }\n\n  _createClass(Config, [{\n    key: "load",\n    value: function load() {\n      var _this = this;\n\n      var scheme = this.scheme;\n      Object.keys(this.scheme).forEach(function (key) {\n        var info = _this.scheme[key];\n        var type = info["type"];\n        var value = localStorage[key];\n\n        if (value === undefined || value === null) {\n          value = info["default"];\n        }\n\n        if (type === Boolean) {\n          _this[key] = value == \'true\' || value == true ? true : false;\n        } else if (type === Number) {\n          _this[key] = Number(value);\n        } else if (type === String) {\n          _this[key] = String(value);\n        } else {\n          _this[key] = value;\n        }\n      }, this);\n    }\n  }, {\n    key: "save",\n    value: function save() {\n      var _this2 = this;\n\n      var partial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n\n      if (partial) {\n        Object.keys(partial).forEach(function (key) {\n          localStorage[key] = partial[key];\n          _this2[key] = partial[key];\n        });\n      } else {\n        Object.keys(this.scheme).forEach(function (key) {\n          localStorage[key] = _this2[key];\n        });\n      }\n    }\n  }]);\n\n  return Config;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Config);\n\n//# sourceURL=webpack:///./config.js?')},"./date_formatter.js":
/*!***************************!*\
  !*** ./date_formatter.js ***!
  \***************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DateFormatter =\n/*#__PURE__*/\nfunction () {\n  function DateFormatter() {\n    _classCallCheck(this, DateFormatter);\n  }\n\n  _createClass(DateFormatter, [{\n    key: "getMonthText",\n    value: function getMonthText(d) {\n      var MM = d.getMonth() + 1;\n      var DD = d.getDate();\n      if (MM < 10) MM = "0" + MM;\n      if (DD < 10) DD = "0" + DD;\n      var hh = d.getHours();\n      var mm = d.getMinutes();\n      var ss = d.getSeconds();\n      if (hh < 10) hh = "0" + hh;\n      if (mm < 10) mm = "0" + mm;\n      if (ss < 10) ss = "0" + ss;\n      return MM + "/" + DD + " " + hh + ":" + mm + ":" + ss;\n    }\n  }, {\n    key: "getMinText",\n    value: function getMinText(d) {\n      var mm = d.getMinutes();\n      var ss = d.getSeconds();\n      var SSS = d.getMilliseconds();\n      if (mm < 10) mm = "0" + mm;\n      if (ss < 10) ss = "0" + ss;\n\n      if (SSS < 10) {\n        SSS = "00" + SSS;\n      } else if (SSS < 100) {\n        SSS = "0" + SSS;\n      }\n\n      return mm + ":" + ss + "." + SSS;\n    }\n  }]);\n\n  return DateFormatter;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (DateFormatter);\n\n//# sourceURL=webpack:///./date_formatter.js?')},"./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _salmonrun_time_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salmonrun_time_timer */ "./salmonrun_time_timer.js");\n/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_formatter */ "./date_formatter.js");\n/* harmony import */ var _time_offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time_offset */ "./time_offset.js");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./config.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar date_formatter = new _date_formatter__WEBPACK_IMPORTED_MODULE_1__["default"]();\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.time_offset = new _time_offset__WEBPACK_IMPORTED_MODULE_2__["default"]();\n    this.timer = new _salmonrun_time_timer__WEBPACK_IMPORTED_MODULE_0__["default"](this.time_offset);\n    this.config = new _config__WEBPACK_IMPORTED_MODULE_3__["default"]({\n      "mode_friend": {\n        "type": Boolean,\n        "default": false\n      },\n      "mode_frequency_update": {\n        "type": Boolean,\n        "default": false\n      }\n    });\n    this.elmEta = document.getElementById("eta");\n    this.elmEtaArea = document.getElementById("eta_area");\n    this.elmEtaLabel = document.getElementById("eta_label");\n    this.elmOffset = document.getElementById("offset");\n    this.elmModeFriend = document.getElementById("mode_friend");\n    this.elmModeFriend.onclick = this.on_change_modeFriend.bind(this);\n    this.elmModeFrequencyUpdate = document.getElementById("mode_frequency_update");\n    this.elmModeFrequencyUpdate.onclick = this.on_change_modeFrequencyUpdate.bind(this);\n    this.config.load();\n    this.on_load();\n    this.update(true);\n  }\n\n  _createClass(App, [{\n    key: "calc_eta",\n    value: function calc_eta() {\n      this.list = this.timer.listup_next_STT();\n      var now = this.time_offset.get_time();\n      var eta = this.list[0] - now;\n      this.eta = new Date(eta);\n    }\n  }, {\n    key: "update_eta",\n    value: function update_eta() {\n      // eta\n      var textEta = date_formatter.getMinText(this.eta);\n      this.elmEta.innerHTML = textEta; // show label\n\n      var labelText = \'ST\';\n\n      if (this.time_offset.offset_friend != 0) {\n        labelText += \'(フレ部屋)\';\n      }\n\n      labelText += \'まで\';\n      this.elmEtaLabel.innerHTML = labelText; // show offset text\n\n      if (this.time_offset.offset_jst) {\n        var textOffset = \'\';\n\n        if (this.time_offset.offset_jst < 0) {\n          textOffset += "-" + date_formatter.getMinText(new Date(-this.time_offset.offset_jst));\n        } else {\n          textOffset += "+" + date_formatter.getMinText(new Date(this.time_offset.offset_jst));\n        }\n\n        textOffset += \' を補正済み\';\n\n        if (this.time_offset.offset_friend != 0) {\n          textOffset += " (更に2秒遅れ中)";\n        }\n\n        this.elmOffset.innerHTML = textOffset;\n      } else {\n        this.elmOffset.innerHTML = "時刻合わせ中 ...";\n      }\n    }\n  }, {\n    key: "update_list",\n    value: function update_list() {\n      // list\n      for (var i in this.list) {\n        var elmSTT = document.getElementById("stt-item-" + (Number(i) + 1));\n        var textSTT = date_formatter.getMonthText(this.list[i]);\n        elmSTT.innerHTML = textSTT;\n      }\n    }\n  }, {\n    key: "update",\n    value: function update() {\n      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      this.calc_eta();\n      this.update_eta();\n      this.update_list();\n      var modeFrequencyUpdate = this.config["mode_frequency_update"];\n\n      if (loop) {\n        if (this.timeout) {\n          clearTimeout(this.timeout);\n        }\n\n        var interval = 1000;\n\n        if (modeFrequencyUpdate || this.eta < 60 * 1000) {\n          interval = 50;\n        }\n\n        this.timeout = setTimeout(this.update.bind(this, true), interval);\n      }\n    }\n  }, {\n    key: "on_load",\n    value: function on_load() {\n      this.elmModeFriend.checked = this.config["mode_friend"];\n      this.elmModeFrequencyUpdate.checked = this.config["mode_frequency_update"];\n      this.on_change_modeFriend();\n      this.on_change_modeFrequencyUpdate();\n    }\n  }, {\n    key: "on_change_modeFriend",\n    value: function on_change_modeFriend() {\n      var classForNornalModeBack = \'mdl-color--grey-800\';\n      var classForFriendModeBack = \'mdl-color--green-900\';\n      var classForNornalModeFore = \'mdl-color-text--grey-600\';\n      var classForFriendModeFore = \'mdl-color-text--yellow-600\';\n      var modeFriend = this.elmModeFriend.checked;\n      this.elmEtaArea.classList.remove(classForNornalModeBack);\n      this.elmEtaArea.classList.remove(classForFriendModeBack);\n      this.elmEtaLabel.classList.remove(classForNornalModeFore);\n      this.elmEtaLabel.classList.remove(classForFriendModeFore);\n      this.elmOffset.classList.remove(classForNornalModeFore);\n      this.elmOffset.classList.remove(classForFriendModeFore);\n\n      if (modeFriend) {\n        this.time_offset.set_offset_friend(-2 * 1000);\n        this.elmEtaArea.classList.add(classForFriendModeBack);\n        this.elmEtaLabel.classList.add(classForFriendModeFore);\n        this.elmOffset.classList.add(classForFriendModeFore);\n      } else {\n        this.time_offset.set_offset_friend(0);\n        this.elmEtaArea.classList.add(classForNornalModeBack);\n        this.elmEtaLabel.classList.add(classForNornalModeFore);\n        this.elmOffset.classList.add(classForNornalModeFore);\n      }\n\n      this.config.save({\n        "mode_friend": modeFriend\n      });\n      this.update(false);\n    }\n  }, {\n    key: "on_change_modeFrequencyUpdate",\n    value: function on_change_modeFrequencyUpdate() {\n      var modeFrequencyUpdate = this.elmModeFrequencyUpdate.checked;\n      this.config.save({\n        "mode_frequency_update": modeFrequencyUpdate\n      });\n      this.update(true);\n    }\n  }]);\n\n  return App;\n}();\n\nwindow.onload = function () {\n  var app = new App();\n};\n\n//# sourceURL=webpack:///./main.js?')},"./salmonrun_time_timer.js":
/*!*********************************!*\
  !*** ./salmonrun_time_timer.js ***!
  \*********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SalmonrunTimeTimer =\n/*#__PURE__*/\nfunction () {\n  function SalmonrunTimeTimer() {\n    var time_offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n    _classCallCheck(this, SalmonrunTimeTimer);\n\n    this.time_offset = time_offset;\n  } // テストしやすいように基準の日時を渡せるようにした\n\n\n  _createClass(SalmonrunTimeTimer, [{\n    key: "listup_next_STT",\n    value: function listup_next_STT() {\n      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();\n      var list = [];\n      var base;\n\n      if (this.time_offset) {\n        base = this.time_offset.get_time(date);\n      } else {\n        base = new Date(date);\n      } //  period |   0   |            1            | 2  ...  6 |            7            | 8\n      // minutes | 00 01 | 02 03 04 05 06 07 08 09 | 10 ... 49 | 50 51 52 53 54 55 56 57 | 58 59\n\n\n      var period = Math.floor((base.getMinutes() - 2) / 8) + 1; // it becomes 0 to 8\n      // in this hour (upto 1st(:02),2nd(:10), ... ,7th(:50))\n\n      var hours = base.getHours(); // iterate about hours\n\n      for (; list.length < 7;) {\n        // in this hour\n        // i が 8 なら次の時間へ、もしくは 7 件埋まれば終了\n        for (var i = period + 1; i <= 7 && list.length < 7; ++i) {\n          var minutes = 2 + (i - 1) * 8;\n          var d = new Date(base);\n          d.setHours(hours);\n          d.setMinutes(minutes);\n          d.setSeconds(0);\n          d.setMilliseconds(0);\n          list.push(d);\n        } // for next hour\n\n\n        period = 0;\n        hours += 1;\n      }\n\n      return list;\n    }\n  }]);\n\n  return SalmonrunTimeTimer;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (SalmonrunTimeTimer);\n\n//# sourceURL=webpack:///./salmonrun_time_timer.js?')},"./time_offset.js":
/*!************************!*\
  !*** ./time_offset.js ***!
  \************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var get_json_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-json-data */ "../node_modules/get-json-data/index.js");\n/* harmony import */ var get_json_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(get_json_data__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// based on https://www.nict.go.jp/JST/JST5.js\nvar ServerList = ["https://ntp-a1.nict.go.jp/cgi-bin/json", "https://ntp-b1.nict.go.jp/cgi-bin/json", "https://ntp-a4.nict.go.jp/cgi-bin/json"];\n\n\nvar TimeOffset =\n/*#__PURE__*/\nfunction () {\n  function TimeOffset() {\n    var offset_friend = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n    _classCallCheck(this, TimeOffset);\n\n    this.offset_jst = 0;\n    this.set_offset_friend(offset_friend);\n    this.get_offset_jst();\n  }\n\n  _createClass(TimeOffset, [{\n    key: "get_time",\n    value: function get_time() {\n      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();\n      var offset = 0;\n\n      if (this.offset_jst) {\n        offset += this.offset_jst;\n      }\n\n      if (this.offset_friend) {\n        offset += this.offset_friend;\n      }\n\n      return new Date(date + offset);\n    }\n  }, {\n    key: "set_offset_friend",\n    value: function set_offset_friend(offset_friend) {\n      this.offset_friend = offset_friend;\n    }\n  }, {\n    key: "get_offset_jst",\n    value: function get_offset_jst() {\n      var _this = this;\n\n      this.results = new Array();\n      var server_no = Math.floor(Math.random() * 3);\n      var server_addr = ServerList[server_no]; // ランダムで一つのサーバにアクセスすれば十分\n\n      get_json_data__WEBPACK_IMPORTED_MODULE_0___default()(server_addr + "?" + new Date().getTime() / 1000, function (err, json) {\n        if (err) {\n          //console.log(String(err));\n          return;\n        }\n\n        var now = new Date(); // Receive time\n\n        if (json.st && json.it && json.leap && json.next && json.step) {\n          json.rt = now.getTime(); // Receive time\n\n          json.it = Number(json.it) * 1000; // Initiate time\n\n          json.st = Number(json.st) * 1000; // Send time\n\n          json.lb = json.it - 16 - json.st; // estimated lower bound\n\n          json.ub = json.rt + 16 - json.st; // estimated upper bound\n          // 詰まるところ必要なのは中央の修正値だけ\n\n          _this.offset_jst = -(json.lb + json.ub) / 2;\n        }\n      });\n    }\n  }]);\n\n  return TimeOffset;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (TimeOffset);\n\n//# sourceURL=webpack:///./time_offset.js?')}});