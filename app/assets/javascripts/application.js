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
