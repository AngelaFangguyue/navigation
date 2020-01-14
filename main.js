import img_juejin from "./img/juejin.svg";

import img_sifou from "./img/sifou.png";

import img_vue from "./img/Vue.png";

import img_rea from "./img/React.png";

import img_angular from "./img/Angular.png";

import img_antDesign from "./img/ant design.svg";

import img_iview from "./img/iview.svg";

import img_element from "./img/element.png";

import img_bili from "./img/bilibili.png";

import img_github from "./img/github.png";
import img_github2 from "./img/github2.png";
import img_github3 from "./img/github3.png";

import img_yx from "./img/yx.png";
import img_yx2 from "./img/yx2.png";
import img_yx3 from "./img/yx3.png";

import img_zh from "./img/zh.png";
import img_zh2 from "./img/zh2.png";
import img_zh3 from "./img/zh3.png";

// import yx from "./img/yinxiang.png";

let $last = $(".last");

//定义hashData数据;
let a = localStorage.getItem("hashDa");
let hashL = JSON.parse(localStorage.getItem("hashDa"));
//console.log("a hashL", a, hashL);
if (hashL.length === 0) {
  window.hashData = [
    {
      logo: "J",
      img: img_juejin,
      urll: "juejin.im",
      href: "https://juejin.im/"
    },
    {
      logo: "S",
      img:img_sifou,
      urll: "segmentfault.com",
      href: "https://segmentfault.com/"
    },
    {
      logo: "V",
      img: img_vue,
      urll: "cn.vuejs.org",
      href: "https://cn.vuejs.org/"
    },
    {
      logo: "R",
      img: img_rea,
      urll: "react.docschina.org",
      href: "https://react.docschina.org/"
    },
    {
      logo: "A",
      img: img_angular,
      urll: "angular.io",
      href: "https://angular.io/"
    },
    {
      logo: "G",
      img: img_github3,
      urll: "github.com",
      href: "https://github.com/"
    },
    {
      logo: "Y",
      img:img_yx3,
      urll: "yinxiang.com",
      href: "https://yinxiang.com/"
    },
    {
      logo: "Z",
      img: img_zh3,
      urll: "www.zhihu.com",
      href: "https://www.zhihu.com/"
    },
    // {
    //   logo: "A",
    //   img: "aa",
    //   urll: "acfun.cn",
    //   href: "https://www.acfun.cn/"
    // },
    {
      logo: "B",
      img: img_bili,
      urll: "www.bilibili.com",
      href: "https://www.bilibili.com/"
    }
  ];
} else {
  window.hashData = hashL;
}

//定义一个简化url的函数
function simpUrl(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
}

//定义生成页面中元素的render方法
function render() {
  $last.siblings().remove();
  let $newA;
  hashData.forEach((node, index) => {
    //console.log(node);
    if (node.img.indexOf("http") === 0) {
      //console.log(node.img);
      $newA = $(`<a href='${node.href}'>
      <div class="con">
        <div class="logo">
         <img src="${node.img}" alt="${node.logo}">
        </div>
        <div class="urll">${node.urll}</div>
        <div class="close">
          <svg class="icon" aria-hidden="true">
              <use xlink:href=${"#icon-iclose"}></use>
          </svg></div>
      </div>
      </a>`);
    } else if (node.img.indexOf("/") === 0) {
     // console.log('node.img.indexOf("/"');
     // console.log(node.img);
      $newA = $(`<a href='${node.href}'>
      <div class="con">
        <div class="logo">
        ${'<img src="' + node.img + '" alt=" '+node.logo+'">'}
        </div>
        <div class="urll">${node.urll}</div>
        <div class="close">
          <svg class="icon" aria-hidden="true">
              <use xlink:href=${"#icon-iclose"}></use>
          </svg></div>
      </div>
      </a>`);
    } else {
      $newA = $(`<a href='${node.href}'>
      <div class="con">
        <div class="logo">${node.logo}</div>
        <div class="urll">${node.urll}</div>
        <div class="close">
          <svg class="icon" aria-hidden="true">
              <use xlink:href=${"#icon-iclose"}></use>
          </svg></div>
      </div>
      </a>`);
    }

    $newA.insertBefore($last);
    //添加删除功能：
    $newA.on("click", ".close", e => {
      //阻止冒泡
      e.stopPropagation();
      e.preventDefault();
      hashData.splice(index, 1);
      render();
    });
  });
  //下面这段话并不会随机获取背景图片
  console.log("body.css",$("body").css("background-image"));
  $("body").css(
    "background-image",
    "url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)"
  ); //每次重新渲染并不会执行获取随机图片
  // console.log("设置背景图");
}

render();

$last.on("click", () => {
  $(".popwra").css("visibility", "visible");
  $(".pop").css({ opacity: 1, transform: "translate(-50%, -50%)" });
  // //提醒用户输入要添加的网址
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

window.onbeforeunload = function() {
  //将hash数据存储在本地localStorage里
  localStorage.setItem("hashDa", JSON.stringify(hashData));
};

$(document).on("keypress", e => {
  //console.log(e);
  //console.log(`$(".popwra").style.color`);
  console.log($(".popwra").css("visibility"));
  if ($(".popwra").css("visibility") !== "hidden") {
    //console.log("不执行按键事件");
    return;
  } //解决在新增网址的时候，输入字母会触发键盘点击事件
  let code = e.key.toUpperCase();
  for (let d = 0; d < hashData.length; d++) {
    if (code == hashData[d].logo) {
      window.open(hashData[d].href);
      break;
    }
  }
});
// $("body").css(
//   "background-image",
//   "url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)"
// );
window.onload = function() {
  var pos = $(".for>input").offset(); // offset() 获得div1当前的位置，左上角坐标(x,y)
  $(window).scroll(function() {
    //滚动条滚动事件
    if ($(this).scrollTop() > pos.top) {
      //console.log("pos.top", pos.top);
      //console.log("$(this).scrollTop()", $(this).scrollTop());
      $(".hea")
        .css("top", $(this).scrollTop())
        .css("position", "relative")
        .css("z-index", "5")
        .css("background-color", "rgba(255,255,255,.3)");
    } else if ($(this).scrollTop() <= pos.top) {
      $(".hea")
        .css("top", 0)
        .css("position", "relative")
        .css("z-index", "")
        .css("background-color", "");
    }
  });
};
$(".bt1").on("click", () => {
  console.log($("#in1").val(""));
  console.log($("#in2").val(""));
  $(".popwra").css("visibility", "hidden");
  $(".pop").css({ opacity: 0, transform: "translate(-50%, -250%)" });
});

$(".bt2").on("click", () => {
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
    let url = $("#in1").val();
    if (url.indexOf("http") !== 0) {
      url = ("https://" + url).toLowerCase();
    }

    hashData.push({
      logo: simpUrl(url)[0].toUpperCase(),
      img: simpUrl(url)[0].toUpperCase(),
      urll: simpUrl(url),
      href: url
    });
    //console.log(`$("#in1").val()`);
    //console.log($("#in1").val());
    //console.log($(".pop>input").val());
    console.log($("#in1").val(""));
    console.log($("#in2").val("")); //下次弹出添加新增网站的框的时候，还是会出来字样，不会把之前填写的带出来
    $(".popwra").css("visibility", "hidden");
    $(".pop").css({ opacity: 0, transform: "translate(-50%, -250%)" });
    render();
  }
});
// $(".popwra").on("keypress", "#in1", "#in2", e => {
//   e.stopPropagation();
//   e.preventDefault();
// });

