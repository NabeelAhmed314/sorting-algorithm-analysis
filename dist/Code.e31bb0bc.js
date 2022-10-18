// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"numbers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NumberGenerator = /*#__PURE__*/function () {
  // 1 element
  // 10 element
  // 100 element
  // 1000 element
  // 10000 element
  // 100000 element
  // 100 sorted element
  function NumberGenerator(min, max) {
    _classCallCheck(this, NumberGenerator);

    _defineProperty(this, "vEasy", []);

    _defineProperty(this, "easy", []);

    _defineProperty(this, "medium", []);

    _defineProperty(this, "hard", []);

    _defineProperty(this, "expert", []);

    _defineProperty(this, "advanced", []);

    _defineProperty(this, "sorted", []);

    this.min = min;
    this.max = max;
  }

  _createClass(NumberGenerator, [{
    key: "initialize",
    value: function initialize() {
      for (var i = 0; i < 100000; i++) {
        var a = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        if (i < 1) this.vEasy.push(a);
        if (i < 10) this.easy.push(a);

        if (i < 100) {
          this.medium.push(a);
          this.sorted.push(i + 1);
        }

        if (i < 1000) this.hard.push(a);
        if (i < 10000) this.expert.push(a);
        if (i < 100000) this.advanced.push(a);
      }
    }
  }]);

  return NumberGenerator;
}();

exports.default = NumberGenerator;
},{}],"bubbleSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BubbleSort = /*#__PURE__*/function () {
  function BubbleSort() {
    _classCallCheck(this, BubbleSort);
  }

  _createClass(BubbleSort, [{
    key: "sort",
    value: function sort(arr) {
      var n = arr.length;
      var sorted = false;

      while (!sorted) {
        sorted = true;

        for (var i = 0; i < n; i++) {
          if (arr[i] > arr[i + 1]) {
            var t = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = t;
            sorted = false;
          }
        }
      }

      return arr;
    }
  }]);

  return BubbleSort;
}();

exports.default = BubbleSort;
},{}],"insertionSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var InsertionSort = /*#__PURE__*/function () {
  function InsertionSort() {
    _classCallCheck(this, InsertionSort);
  }

  _createClass(InsertionSort, [{
    key: "sort",
    value: function sort(arr) {
      var n = arr.length;

      for (var i = 1; i < n; i++) {
        var current = arr[i];
        var j = i - 1;

        while (j > -1 && current < arr[j]) {
          arr[j + 1] = arr[j];
          j--;
        }

        arr[j + 1] = current;
      }

      return arr;
    }
  }]);

  return InsertionSort;
}();

exports.default = InsertionSort;
},{}],"mergeSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MergeSort = /*#__PURE__*/function () {
  function MergeSort() {
    _classCallCheck(this, MergeSort);
  }

  _createClass(MergeSort, [{
    key: "sort",
    value: function sort(arr) {
      var half = arr.length / 2; // Base case or terminating case

      if (arr.length < 2) {
        return arr;
      }

      var left = arr.splice(0, half);
      return this.merge(this.sort(left), this.sort(arr));
    }
  }, {
    key: "merge",
    value: function merge(left, right) {
      var arr = []; // Break out of loop if any one of the array gets empty

      while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (left[0] < right[0]) {
          arr.push(left.shift());
        } else {
          arr.push(right.shift());
        }
      } // Concatenating the leftover elements
      // (in case we didn't go through the entire left or right array)


      return [].concat(arr, _toConsumableArray(left), _toConsumableArray(right));
    }
  }]);

  return MergeSort;
}();

exports.default = MergeSort;
},{}],"quickSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var QuickSort = /*#__PURE__*/function () {
  function QuickSort() {
    _classCallCheck(this, QuickSort);
  }

  _createClass(QuickSort, [{
    key: "sort",
    value: function sort(arr, start, end) {
      // Base case or terminating case
      if (start >= end) {
        return;
      } // Returns pivotIndex


      var index = this.partition(arr, start, end); // Recursively apply the same logic to the left and right subarrays

      this.sort(arr, start, index - 1);
      this.sort(arr, index + 1, end);
    }
  }, {
    key: "partition",
    value: function partition(arr, start, end) {
      // Taking the last element as the pivot
      var pivotValue = arr[end];
      var pivotIndex = start;

      for (var i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
          // Swapping elements
          var _ref = [arr[pivotIndex], arr[i]];
          arr[i] = _ref[0];
          arr[pivotIndex] = _ref[1];
          // Moving to next element
          pivotIndex++;
        }
      } // Putting the pivot value in the middle


      var _ref2 = [arr[end], arr[pivotIndex]];
      arr[pivotIndex] = _ref2[0];
      arr[end] = _ref2[1];
      return pivotIndex;
    }
  }]);

  return QuickSort;
}();

exports.default = QuickSort;
},{}],"selectionSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SelectionSort = /*#__PURE__*/function () {
  function SelectionSort() {
    _classCallCheck(this, SelectionSort);
  }

  _createClass(SelectionSort, [{
    key: "sort",
    value: function sort(arr) {
      var n = arr.length;

      for (var i = 0; i < n; i++) {
        var min = i;

        for (var j = i + 1; j < n; j++) {
          if (arr[j] < arr[min]) {
            min = j;
          }
        }

        if (min != i) {
          var tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
        }
      }

      return arr;
    }
  }]);

  return SelectionSort;
}();

exports.default = SelectionSort;
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortDifficulty = getSortDifficulty;
exports.getSortDifficultyItems = getSortDifficultyItems;
exports.getSortType = getSortType;
exports.getSortTypeTitle = getSortTypeTitle;

var _bubbleSort = _interopRequireDefault(require("./bubbleSort"));

var _insertionSort = _interopRequireDefault(require("./insertionSort"));

var _mergeSort = _interopRequireDefault(require("./mergeSort"));

var _quickSort = _interopRequireDefault(require("./quickSort"));

var _selectionSort = _interopRequireDefault(require("./selectionSort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSortType(type) {
  switch (type) {
    case 0:
      return new _insertionSort.default();

    case 1:
      return new _bubbleSort.default();

    case 2:
      return new _selectionSort.default();

    case 3:
      return new _quickSort.default();

    case 4:
      return new _mergeSort.default();

    default:
      return new _insertionSort.default();
  }
}

function getSortTypeTitle(type) {
  switch (type) {
    case 0:
      return "Insertion Sort";

    case 1:
      return "Bubble Sort";

    case 2:
      return "Selection Sort";

    case 3:
      return "Quick Sort";

    case 4:
      return "Merge Sort";

    default:
      return "Instertion Sort";
  }
}

function getSortDifficulty(difficulty) {
  switch (difficulty) {
    case 0:
      return "vEasy";

    case 1:
      return "easy";

    case 2:
      return "medium";

    case 3:
      return "hard";

    case 4:
      return "expert";

    case 5:
      return "advanced";

    case 6:
      return "sorted";

    default:
      return "vEasy";
  }
}

function getSortDifficultyItems(difficulty) {
  switch (difficulty) {
    case 0:
      return "1 item";

    case 1:
      return "10 items";

    case 2:
      return "100 items";

    case 3:
      return "1000 items";

    case 4:
      return "10000 items";

    case 5:
      return "100000 items";

    case 6:
      return "100 sorted items";

    default:
      return "vEasy";
  }
}
},{"./bubbleSort":"bubbleSort.js","./insertionSort":"insertionSort.js","./mergeSort":"mergeSort.js","./quickSort":"quickSort.js","./selectionSort":"selectionSort.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _numbers = _interopRequireDefault(require("./numbers"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Style = {
  base: ["color: #fff", "background-color: #444", "padding: 2px 4px", "border-radius: 2px", "background-color: green"]
};

var log = function log(text) {
  var style = Style.base.join(";") + ";";
  console.log("%c".concat(text), style);
};

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    log("Analysis Loaded");
    initialize();
  }
};

function initialize() {
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("main").appendChild(table);
  var headingRow = document.createElement("tr");
  var headingCol = document.createElement("th");
  headingCol.innerHTML = "Algorithm";
  headingRow.appendChild(headingCol);

  for (var i = 0; i < 7; i++) {
    var _headingCol = document.createElement("th");

    _headingCol.innerHTML = (0, _utils.getSortDifficultyItems)(i);
    headingRow.appendChild(_headingCol);
  }

  thead.appendChild(headingRow);
  var start = performance.now();
  var numberGenerator = new _numbers.default(1, 1000);
  numberGenerator.initialize();
  var end = performance.now();

  for (var j = 0; j < 5; j++) {
    var sort = (0, _utils.getSortType)(j);
    var row = document.createElement("tr");
    var col = document.createElement("td");
    col.innerHTML = (0, _utils.getSortTypeTitle)(j);
    row.appendChild(col);

    for (var _i = 0; _i < 7; _i++) {
      start = performance.now();
      var arr = numberGenerator[(0, _utils.getSortDifficulty)(_i)];

      if (j === 3) {
        sort.sort(arr, 0, arr.length - 1);
      } else {
        sort.sort(arr);
      }

      end = performance.now();

      var _headingCol2 = document.createElement("td");

      _headingCol2.innerHTML = "".concat(end - start);
      row.appendChild(_headingCol2);
    }

    tbody.appendChild(row);
  }
}
},{"./numbers":"numbers.js","./utils":"utils.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64783" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Code.e31bb0bc.js.map