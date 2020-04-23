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
})({"img/juejin.svg":[function(require,module,exports) {
module.exports = "/juejin.c3c97f58.svg";
},{}],"img/sifou.png":[function(require,module,exports) {
module.exports = "/sifou.e9cdf5c9.png";
},{}],"img/Vue.png":[function(require,module,exports) {
module.exports = "/Vue.06dda841.png";
},{}],"img/React.png":[function(require,module,exports) {
module.exports = "/React.05662dba.png";
},{}],"img/Angular.png":[function(require,module,exports) {
module.exports = "/Angular.bec3e279.png";
},{}],"img/ant design.svg":[function(require,module,exports) {
module.exports = "/ant design.dc53b349.svg";
},{}],"img/iview.svg":[function(require,module,exports) {
module.exports = "/iview.fc9b8abd.svg";
},{}],"img/element.png":[function(require,module,exports) {
module.exports = "/element.b87b6df1.png";
},{}],"img/bilibili.png":[function(require,module,exports) {
module.exports = "/bilibili.cd58a1aa.png";
},{}],"img/github.png":[function(require,module,exports) {
module.exports = "/github.8994e164.png";
},{}],"img/github2.png":[function(require,module,exports) {
module.exports = "/github2.8c1bd8db.png";
},{}],"img/github3.png":[function(require,module,exports) {
module.exports = "/github3.0855e0b5.png";
},{}],"img/yx.png":[function(require,module,exports) {
module.exports = "/yx.a1f953eb.png";
},{}],"img/yx2.png":[function(require,module,exports) {
module.exports = "/yx2.d521d8b8.png";
},{}],"img/yx3.png":[function(require,module,exports) {
module.exports = "/yx3.b19507ee.png";
},{}],"img/zh.png":[function(require,module,exports) {
module.exports = "/zh.f0e11eb7.png";
},{}],"img/zh2.png":[function(require,module,exports) {
module.exports = "/zh2.c8099299.png";
},{}],"img/zh3.png":[function(require,module,exports) {
module.exports = "/zh3.d1a91a76.png";
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _juejin = _interopRequireDefault(require("./img/juejin.svg"));

var _sifou = _interopRequireDefault(require("./img/sifou.png"));

var _Vue = _interopRequireDefault(require("./img/Vue.png"));

var _React = _interopRequireDefault(require("./img/React.png"));

var _Angular = _interopRequireDefault(require("./img/Angular.png"));

var _antDesign = _interopRequireDefault(require("./img/ant design.svg"));

var _iview = _interopRequireDefault(require("./img/iview.svg"));

var _element = _interopRequireDefault(require("./img/element.png"));

var _bilibili = _interopRequireDefault(require("./img/bilibili.png"));

var _github = _interopRequireDefault(require("./img/github.png"));

var _github2 = _interopRequireDefault(require("./img/github2.png"));

var _github3 = _interopRequireDefault(require("./img/github3.png"));

var _yx = _interopRequireDefault(require("./img/yx.png"));

var _yx2 = _interopRequireDefault(require("./img/yx2.png"));

var _yx3 = _interopRequireDefault(require("./img/yx3.png"));

var _zh = _interopRequireDefault(require("./img/zh.png"));

var _zh2 = _interopRequireDefault(require("./img/zh2.png"));

var _zh3 = _interopRequireDefault(require("./img/zh3.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $last = $(".last"); //定义hashData数据;

var a = localStorage.getItem("hashDa");
var hashL = JSON.parse(localStorage.getItem("hashDa"));
console.log("a hashL", a, hashL);

if (hashL === "" || hashL === null) {
  window.hashData = [{
    logo: "J",
    img: _juejin.default,
    urll: "juejin.im",
    href: "https://juejin.im/"
  }, {
    logo: "S",
    img: _sifou.default,
    urll: "segmentfault.com",
    href: "https://segmentfault.com/"
  }, {
    logo: "V",
    img: _Vue.default,
    urll: "cn.vuejs.org",
    href: "https://cn.vuejs.org/"
  }, {
    logo: "R",
    img: _React.default,
    urll: "react.docschina.org",
    href: "https://react.docschina.org/"
  }, {
    logo: "A",
    img: _Angular.default,
    urll: "angular.io",
    href: "https://angular.io/"
  }, {
    logo: "G",
    img: _github3.default,
    urll: "github.com",
    href: "https://github.com/"
  }, {
    logo: "Y",
    img: _yx3.default,
    urll: "yinxiang.com",
    href: "https://yinxiang.com/"
  }, {
    logo: "Z",
    img: _zh3.default,
    urll: "www.zhihu.com",
    href: "https://www.zhihu.com/"
  }, {
    logo: "B",
    img: _bilibili.default,
    urll: "www.bilibili.com",
    href: "https://www.bilibili.com/"
  }];
} else {
  window.hashData = hashL;
} //定义一个简化url的函数


function simpUrl(url) {
  return url.replace("http://", "").replace("https://", "").replace("www.", "").replace(/\/.*/, "");
} //定义生成页面中元素的render方法


function render() {
  $last.siblings().remove();
  var $newA;
  hashData.forEach(function (node, index) {
    console.log("hashdata foreach", node);

    if (node.img !== "") {
      $newA = $("<a href=\"".concat(node.href, "\">\n      <div class=\"con\">\n        <div class=\"logo\">\n        <img src=\"").concat(node.img, "\">\n        </div>\n        <div class=\"urll\">").concat(node.urll, "</div>\n        <div class=\"close\">\n          <svg class=\"icon\" aria-hidden=\"true\">\n              <use xlink:href=", "#icon-iclose", "></use>\n          </svg></div>\n      </div>\n      </a>"));
    } else {
      $newA = $("<a href=\"".concat(node.href, "\">\n      <div class=\"con\">\n        <div class=\"logo\">").concat(node.logo, "</div>\n        <div class=\"urll\">").concat(node.urll, "</div>\n        <div class=\"close\">\n          <svg class=\"icon\" aria-hidden=\"true\">\n              <use xlink:href=", "#icon-iclose", "></use>\n          </svg></div>\n      </div>\n      </a>"));
    } // if (node.img.indexOf("http") === 0) {
    //   console.log('node.img.indexOf("http") === 0', node.img);
    //   $newA = $(`<a href='${node.href}'>
    //   <div class="con">
    //     <div class="logo">
    //      <img src="${node.img}" alt="${node.logo}">
    //     </div>
    //     <div class="urll">${node.urll}</div>
    //     <div class="close">
    //       <svg class="icon" aria-hidden="true">
    //           <use xlink:href=${"#icon-iclose"}></use>
    //       </svg></div>
    //   </div>
    //   </a>`);
    // } else if (node.img.indexOf("/") === 0) {
    //   console.log('node.img.indexOf("/")', node.img);
    //   $newA = $(`<a href='${node.href}'>
    //   <div class="con">
    //     <div class="logo">
    //     ${'<img src="' + node.img + '" alt=" ' + node.logo + '">'}
    //     </div>
    //     <div class="urll">${node.urll}</div>
    //     <div class="close">
    //       <svg class="icon" aria-hidden="true">
    //           <use xlink:href=${"#icon-iclose"}></use>
    //       </svg></div>
    //   </div>
    //   </a>`);
    // } else {
    //   console.log("node.img.else", node.img);
    //   $newA = $(`<a href='${node.href}'>
    //   <div class="con">
    //     <div class="logo">${node.logo}</div>
    //     <div class="urll">${node.urll}</div>
    //     <div class="close">
    //       <svg class="icon" aria-hidden="true">
    //           <use xlink:href=${"#icon-iclose"}></use>
    //       </svg></div>
    //   </div>
    //   </a>`);
    // }


    $newA.insertBefore($last); //添加删除功能：

    $newA.on("click", ".close", function (e) {
      //阻止冒泡
      e.stopPropagation();
      e.preventDefault();
      hashData.splice(index, 1);
      render();
    });
  }); //下面这段话每次刷新页面，随机获取背景图片

  console.log("body.css", $("body").css("background-image"));
  $("body").css("background-image", "url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)");
}

render();
$last.on("click", function () {
  $(".popwra").css("visibility", "visible");
  $(".pop").css({
    opacity: 1,
    transform: "translate(-50%, -50%)"
  }); // //提醒用户输入要添加的网址
  // let url = window.prompt("请输入你想要添加的网址：");
  // if (url.indexOf("http") !== 0) {
  //   url = ("https://" + url).toLowerCase();
  //   //弹出div，提醒用户输入网址，这个div居中显示
  // }
  // hashData.push({
  //   logo: simpUrl(url)[0].toUpperCase(),
  //   img: simpUrl(url)[0].toUpperCase(),
  //   urll: simpUrl(url),
  //   href: url
  // });
  //render();
});

window.onbeforeunload = function () {
  //将hash数据存储在本地localStorage里
  localStorage.setItem("hashDa", JSON.stringify(hashData));
};

$(document).on("keypress", function (e) {
  //console.log(e);
  //console.log(`$(".popwra").style.color`);
  console.log($(".popwra").css("visibility"));

  if ($(".popwra").css("visibility") !== "hidden") {
    //console.log("不执行按键事件");
    return;
  } //解决在新增网址的时候，输入字母会触发键盘点击事件


  var code = e.key.toUpperCase();

  for (var d = 0; d < hashData.length; d++) {
    if (code == hashData[d].logo) {
      window.open(hashData[d].href);
      break;
    }
  }
}); // $("body").css(
//   "background-image",
//   "url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)"
// );

window.onload = function () {
  var pos = $(".for>input").offset(); // offset() 获得div1当前的位置，左上角坐标(x,y)

  $(window).scroll(function () {
    //滚动条滚动事件
    if ($(this).scrollTop() > pos.top) {
      //console.log("pos.top", pos.top);
      //console.log("$(this).scrollTop()", $(this).scrollTop());
      $(".hea").css("top", $(this).scrollTop()).css("position", "relative").css("z-index", "5").css("background-color", "rgba(255,255,255,.3)");
    } else if ($(this).scrollTop() <= pos.top) {
      $(".hea").css("top", 0).css("position", "relative").css("z-index", "").css("background-color", "");
    }
  });
};

$(".bt1").on("click", function () {
  console.log($("#in1").val(""));
  console.log($("#in2").val(""));
  $(".popwra").css("visibility", "hidden");
  $(".pop").css({
    opacity: 0,
    transform: "translate(-50%, -250%)"
  });
});
$(".bt2").on("click", function () {
  // if ($("#in1").val() === "") {
  //   $(".ale").css("display", "block");
  // }
  //   $(`<div class="ale">
  //   请输入网址
  // </div>`).//这里是想当用户输入的网址为空的时候，让alert弹出的对话框在div.pop的地方出现，在同一水平线上
  if ($("#in1").val() === "") {
    alert("请输入网址");
    return;
  } else {
    var url = $("#in1").val();

    if (url.indexOf("http") !== 0) {
      url = ("https://" + url).toLowerCase();
    }

    var lg = $("#in2").val();
    console.log("lg", lg);
    hashData.push({
      logo: simpUrl(url)[0].toUpperCase(),
      img: lg,
      urll: simpUrl(url),
      href: url
    }); //console.log(`$("#in1").val()`);
    //console.log($("#in1").val());
    //console.log($(".pop>input").val());

    console.log($("#in1").val(""));
    console.log($("#in2").val("")); //下次弹出添加新增网站的框的时候，还是会出来字样，不会把之前填写的带出来

    $(".popwra").css("visibility", "hidden");
    $(".pop").css({
      opacity: 0,
      transform: "translate(-50%, -250%)"
    });
    render();
  }
}); // $(".popwra").on("keypress", "#in1", "#in2", e => {
//   e.stopPropagation();
//   e.preventDefault();
// });
//为解决手机端click以及touchstart事件的冲突
// const Button = document.getElementById("targetButton");

var clickEvent = function () {
  if ("ontouchstart" in document.documentElement === true) return "touchstart";else return "click";
}(); // Button.addEventListener(clickEvent, e => {
//   console.log("things happened!");
// });
},{"./img/juejin.svg":"img/juejin.svg","./img/sifou.png":"img/sifou.png","./img/Vue.png":"img/Vue.png","./img/React.png":"img/React.png","./img/Angular.png":"img/Angular.png","./img/ant design.svg":"img/ant design.svg","./img/iview.svg":"img/iview.svg","./img/element.png":"img/element.png","./img/bilibili.png":"img/bilibili.png","./img/github.png":"img/github.png","./img/github2.png":"img/github2.png","./img/github3.png":"img/github3.png","./img/yx.png":"img/yx.png","./img/yx2.png":"img/yx2.png","./img/yx3.png":"img/yx3.png","./img/zh.png":"img/zh.png","./img/zh2.png":"img/zh2.png","./img/zh3.png":"img/zh3.png"}],"C:/Users/18234/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53010" + '/');

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
},{}]},{},["C:/Users/18234/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map