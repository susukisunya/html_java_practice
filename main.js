"use strict";

//クリックによって数値が変動するカウンターを作成する
var add1_number = () => {
  const counternumber = document.getElementsByClassName("edit_area_number")[0];
  let intcounternumber = Number(counternumber.textContent);
  intcounternumber++;
  //console.log(intcounternumber);
  counternumber.textContent = intcounternumber;
}

var be0_number = () => {
  const counternumber = document.getElementsByClassName("edit_area_number")[0];
  counternumber.textContent = 0;
}

//秒数を表示する時計を作る
var clock = () => {
  //ドキュメントにあったものをそのまま転用
  var date = new Date();
  var clock = date.getFullYear()
    + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '/' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2)
    + '(JST)';
  //console.log(clock);
  document.getElementsByClassName("clock")[0].innerHTML = clock;
}
//0.1秒(100ミリ秒)ごとに表示内容を更新する
setInterval("clock()", 100);

//文字数カウンタを作成する
var wordcount = () => {
  var inputtext = document.getElementsByClassName("text_input_area")[0];
  inputtext.addEventListener("input", () => { //入力し終わった後に処理したいときは第一引数をchange、入力されたときに処理したいときは第一引数をinput
    window.setTimeout(() => {
      let inputtextlength = inputtext.value.length;
      document.getElementsByClassName("wordcounter")[0].textContent = "文字数 : " + inputtextlength;
      //↓文字数の変化を反映するまでの時間(ms)を変えたいときはここを変える
    }, 1000);
  });
}

setInterval("wordcount()", 1000);