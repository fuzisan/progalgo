// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

/*puzzle用*/
/*参考引用元http://www.htmq.com/dnd/*/
/***** ドラッグ開始時の処理 *****/
function f_dragstart(event){
  //ドラッグするデータのid名をDataTransferオブジェクトにセット
  event.dataTransfer.setData("text", event.target.id);
}

/***** ドラッグ要素がドロップ要素に重なっている間の処理 *****/
function f_dragover(event){
  //dragoverイベントをキャンセルして、ドロップ先の要素がドロップを受け付けるようにする
  event.preventDefault();
}

/***** ドロップ時の処理 *****/
function f_drop(event){
  //ドラッグされたデータのid名をDataTransferオブジェクトから取得
  var id_name = event.dataTransfer.getData("text");
  //id名からドラッグされた要素を取得
  var drag_elm =document.getElementById(id_name);
  //ドロップ先にドラッグされた要素を追加
  event.currentTarget.appendChild(drag_elm);
  //エラー回避のため、ドロップ処理の最後にdropイベントをキャンセルしておく
  event.preventDefault();
}

/*task　解説，動画タブ*/
(function($){

  $(document).ready(function(){
    var tablist = $("#tab_head li");
    var tabbody = $("#tab_body li");

    tablist.click(function(){
      var idx = tablist.index($(this));
      tablist.removeClass("on").eq(idx).addClass("on");
      tabbody.removeClass("on").eq(idx).addClass("on");
    });

  });
})(jQuery);

/*task1ans1の解説アニメーション*/
function task1ans1movie() {
  var $deferredAnim = $.Deferred( function( deferredAnim ){

    //thenでファンクション名を繋げる
    deferredAnim.then(anim_234)
    .then(anim_234text)
    .then(anim_235)
    .then(anim_235text)
    .then(anim_2310)
    .then(anim_2310text)
    .then(anim_245)
    .then(anim_245text)
    .then(anim_2410)
    .then(anim_2410text)
    .then(anim_2510)
    .then(anim_2510text)
    .then(anim_345)
    .then(anim_345text)
    .then(anim_3410)
    .then(anim_3410text)
    .then(anim_3510)
    .then(anim_3510text)
    .then(anim_4510)
    .then(anim_4510text)
    .then(finish)
    .then(anim_12)
    .then(anim_12text)
    .done(task1ans1movie)
  });

  //実行
  $deferredAnim.resolve();
  /*2,3,4*/
  function anim_234 (){
    return $("#two").delay(250).animate({
      "background-color": "red"
    },1000),$("#three").delay(250).animate({
      "background-color": "blue"
    },1000),$("#four").delay(250).animate({
      "background-color": "green"
    },1000)
  }

  function anim_234text(){
    $("#circumference").text("9 circumference");
    $("#sum").text("9 sum");
    $("#max").text("4 max");
    $("#rest").text("5 rest");
    $("#maxrest").text("true max<rest");
  }

  /*2,3,5*/
  function anim_235 (){
    return $("#four").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#five").delay(250).animate({
      "background-color": "green"
    },1000)
  }

  function anim_235text(){
    $("#circumference").text("9 circumference");
    $("#sum").text("10 sum");
    $("#max").text("5 max");
    $("#rest").text("5 rest");
    $("#maxrest").text("false max<rest");
  }

  /*2,3,10*/
  function anim_2310 (){
    return $("#five").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#ten").delay(250).animate({
      "background-color": "green"
    },1000)
  }

  function anim_2310text(){
    $("#circumference").text("9 circumference");
    $("#sum").text("15 sum");
    $("#max").text("10 max");
    $("#rest").text("5 rest");
    $("#maxrest").text("false max<rest");
  }

  /*2,4,5*/
  function anim_245 (){
    return $("#three").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#ten").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#four").delay(250).animate({
      "background-color": "blue"
    },1000),$("#five").delay(250).animate({
      "background-color": "green"
    },1000)
  }

  function anim_245text(){
    $("#circumference").text("11 circumference");
    $("#sum").text("11 sum");
    $("#max").text("5 max");
    $("#rest").text("6 rest");
    $("#maxrest").text("true max<rest");
  }

  /*2,4,10*/
  function anim_2410 (){
    return $("#five").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#ten").delay(250).animate({
      "background-color": "green"
    },1000)
  }

  function anim_2410text(){
    $("#circumference").text("11 circumference");
    $("#sum").text("16 sum");
    $("#max").text("10 max");
    $("#rest").text("6 rest");
    $("#maxrest").text("false max<rest");
  }

  /*2,5,10*/
  function anim_2510 (){
    return $("#four").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#five").delay(250).animate({
      "background-color": "blue"
    },1000),$("#ten").delay(250).animate({
      "background-color": "green"
    },1000)
  }

  function anim_2510text(){
    $("#circumference").text("11 circumference");
    $("#sum").text("17 sum");
    $("#max").text("10 max");
    $("#rest").text("7 rest");
    $("#maxrest").text("false max<rest");
  }

  /*3,4,5*/
  function anim_345(){
    return $("#two").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#ten").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#three").delay(250).animate({
      "background-color": "red"
    },1000),$("#four").delay(250).animate({
      "background-color": "blue"
    },1000),$("#five").delay(250).animate({
      "background-color": "green"
    },1000)
  }

  function anim_345text(){
    $("#circumference").text("12 circumference");
    $("#sum").text("12 sum");
    $("#max").text("5 max");
    $("#rest").text("7 rest");
    $("#maxrest").text("true max<rest");
  }

  /*3,4,10*/
  function anim_3410(){
    return $("#five").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#ten").delay(250).animate({
      "background-color": "green"
    },1000)

  }

  function anim_3410text(){
    $("#circumference").text("12 circumference");
    $("#sum").text("17 sum");
    $("#max").text("10 max");
    $("#rest").text("7 rest");
    $("#maxrest").text("false max<rest");
  }

  /*3,5,10*/
  function anim_3510(){
    return $("#four").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#five").delay(250).animate({
      "background-color": "blue"
    },1000)
  }

  function anim_3510text(){
    $("#circumference").text("12 circumference");
    $("#sum").text("18 sum");
    $("#max").text("10 max");
    $("#rest").text("8 rest");
    $("#maxrest").text("false max<rest");
  }

  /*4,5,10*/
  function anim_4510(){
    return $("#three").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#four").delay(250).animate({
      "background-color": "red"
    },1000)
  }

  function anim_4510text(){
    $("#circumference").text("12 circumference");
    $("#sum").text("19 sum");
    $("#max").text("10 max");
    $("#rest").text("9 rest");
    $("#maxrest").text("false max<rest");
  }

  function finish(){
    return $("#circumference").delay(250).animate({
      "background-color": "red"
    },1000)
  }

  function anim_12(){
    return $("#four").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#five").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#ten").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#circumference").delay(250).animate({
      "background-color": "#ddd"
    },1000)
  }

  function anim_12text(){
    $("#circumference").text("0 circumference");
    $("#sum").text("sum");
    $("#max").text("max");
    $("#rest").text("rest");
    $("#maxrest").text("false max<rest");
  }
}

/*task1ans2の解説アニメーション*/
function task1ans2movie() {
  var $deferredAnim = $.Deferred( function( deferredAnim ){

    //thenでファンクション名を繋げる
    deferredAnim.then(anim_01)
    .then(anim_02)
    .then(anim_03)
    .then(anim_04)
    .then(anim_05)
    .then(anim_06)
    .then(anim_07)
    .then(anim_08)
    .done( task1ans2movie )
  });

  //実行
  $deferredAnim.resolve();

  function anim_01 (){
    return $("#line_5").delay(250).animate({
      "background-color": "#87CEEB"
    },1000),$("#ten").delay(250).animate({
      "background-color": "#87CEEB"
    },1000),$("#five").delay(250).animate({
      "background-color": "#87CEEB"
    },1000),$("#four").delay(250).animate({
      "background-color": "#87CEEB"
    },1000)
  }
  function anim_02 (){
    return $("#line_5").delay(250).animate({
      "background-color": "#778899"
    },1000),$("#line_8").delay(250).animate({
      "background-color": "#87CEEB"
    },1000)

  }
  function anim_03 (){
    return $("#line_8").delay(250).animate({
      "background-color": "#778899"
    },1000),$("#ten").delay(250).animate({
      "background-color": "#87CEEB"
    },1000)
  }
  function anim_04 (){
    return $("#line_5").delay(250).animate({
      "background-color": "#87CEEB"
    },1000),$("#ten").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#three").delay(250).animate({
      "background-color": "#87CEEB"
    },1000)

  }
  function anim_05 (){
    return $("#line_5").delay(250).animate({
      "background-color": "#778899"
    },1000),$("#line_6").delay(250).animate({
      "background-color": "#87CEEB"
    },1000),$("#circumference").delay(250).animate({
      "background-color": "#87CEEB"
    },1000),$("#line_7").delay(250).animate({
      "background-color": "#87CEEB"
    },1000)
  }
  function anim_06 (){
    $("#circumference").text("12 circumference");
    return $("#line_6").delay(250).animate({
      "background-color": "#778899"
    },1000),$("#line_7").delay(250).animate({
      "background-color": "#778899"
    },1000),$("#line_10").delay(250).animate({
      "background-color": "#87CEEB"
    },1000)
  }

  function anim_07(){
    return $("#line_10").delay(250).animate({
      "background-color": "#778899"
    },1000),$("#five").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#four").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#three").delay(250).animate({
      "background-color": "#ddd"
    },1000),$("#circumference").delay(250).animate({
      "background-color": "#ddd"
    },1000)

  }
  function anim_08(){
    $("#circumference").text("0 circumference");

  }

}


<!--/*　ace editorをスクロールと一緒に動かす　*/-->
function aceeditorscroll(){
var initPosition = $(".code").offset().top;
$(window).scroll(function() {
  var scroll = $(document).scrollTop();

  // 移動後ポジション
  var movePosition = initPosition + scroll +500+ "px";
  $(".code").animate({
    top : movePosition
  }, {
    duration : 0,
    queue : false
  });

});
}

<!--/*　paiza editorをスクロールと一緒に動かす　*/-->
function paizaeditorscroll(){
var initPosition = $(".code").offset().top;
$(window).scroll(function() {
  var scroll = $(document).scrollTop();
  // 移動後ポジション
  var movePosition = initPosition + scroll - 120+ "px";
  $(".code").animate({
    top : movePosition
  }, {
    duration : 0,
    queue : false
  });

});
}
