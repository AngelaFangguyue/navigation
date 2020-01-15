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
})({"afD/":[function(require,module,exports) {
module.exports = "juejin.abfdc994.svg";
},{}],"gJ9Y":[function(require,module,exports) {
module.exports = "sifou.802f3938.png";
},{}],"OXEt":[function(require,module,exports) {
module.exports = "Vue.cb4025ab.png";
},{}],"f5EN":[function(require,module,exports) {
module.exports = "React.9c4899db.png";
},{}],"yUSZ":[function(require,module,exports) {
module.exports = "Angular.eed96449.png";
},{}],"EO3B":[function(require,module,exports) {
module.exports = "ant design.dda12cae.svg";
},{}],"nXc9":[function(require,module,exports) {
module.exports = "iview.846fc82d.svg";
},{}],"mvJh":[function(require,module,exports) {
module.exports = "element.bdeba2fb.png";
},{}],"1jEL":[function(require,module,exports) {
module.exports = "bilibili.b2c05f1d.png";
},{}],"ytop":[function(require,module,exports) {
module.exports = "github.65f27d79.png";
},{}],"A6Ir":[function(require,module,exports) {
module.exports = "github2.ce286451.png";
},{}],"qfhl":[function(require,module,exports) {
module.exports = "github3.06335c28.png";
},{}],"uLZU":[function(require,module,exports) {
module.exports = "yx.9348f7e0.png";
},{}],"B4au":[function(require,module,exports) {
module.exports = "yx2.e98dc29f.png";
},{}],"ilno":[function(require,module,exports) {
module.exports = "yx3.629d4d93.png";
},{}],"AK+L":[function(require,module,exports) {
module.exports = "zh.b30ef678.png";
},{}],"JbG3":[function(require,module,exports) {
module.exports = "zh2.fcfa1bfb.png";
},{}],"zOyp":[function(require,module,exports) {
module.exports = "zh3.2fd872ea.png";
},{}],"epB2":[function(require,module,exports) {
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
      $newA = $("<a href='".concat(node.href, "'>\n      <div class=\"con\">\n        <div class=\"logo\">\n        <img src=\"").concat(node.img, "\">\n        </div>\n        <div class=\"urll\">").concat(node.urll, "</div>\n        <div class=\"close\">\n          <svg class=\"icon\" aria-hidden=\"true\">\n              <use xlink:href=", "#icon-iclose", "></use>\n          </svg></div>\n      </div>\n      </a>"));
    } else {
      $newA = $("<a href='".concat(node.href, "'>\n      <div class=\"con\">\n        <div class=\"logo\">").concat(node.logo, "</div>\n        <div class=\"urll\">").concat(node.urll, "</div>\n        <div class=\"close\">\n          <svg class=\"icon\" aria-hidden=\"true\">\n              <use xlink:href=", "#icon-iclose", "></use>\n          </svg></div>\n      </div>\n      </a>"));
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
},{"./img/juejin.svg":"afD/","./img/sifou.png":"gJ9Y","./img/Vue.png":"OXEt","./img/React.png":"f5EN","./img/Angular.png":"yUSZ","./img/ant design.svg":"EO3B","./img/iview.svg":"nXc9","./img/element.png":"mvJh","./img/bilibili.png":"1jEL","./img/github.png":"ytop","./img/github2.png":"A6Ir","./img/github3.png":"qfhl","./img/yx.png":"uLZU","./img/yx2.png":"B4au","./img/yx3.png":"ilno","./img/zh.png":"AK+L","./img/zh2.png":"JbG3","./img/zh3.png":"zOyp"}]},{},["epB2"], null)
//# sourceMappingURL=main.01645dd0.js.map