"use strict";

//クリックによって数値が変動するカウンターを作成する
var plus1_number = () => {
  var counternumber = document.querySelector(".edit_area_number");//getElementsByClassNameではうまくいかなかった　なんで？
  var intcounternumber = Number(counternumber.textContent);
  intcounternumber++;
  console.log(intcounternumber);
  counternumber.textContent = intcounternumber;
}

var be0_number = () => {
  var counternumber = document.querySelector(".edit_area_number");
  counternumber.textContent = 0;
}

//秒数を表示する時計を作る
var clock = () => {
  var date = new Date();
  var clock = date.getFullYear()
  + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
  + '/' + ('0' + date.getDate()).slice(-2)
  + ' ' + ('0' + date.getHours()).slice(-2)
  + ':' + ('0' + date.getMinutes()).slice(-2)
  + ':' + ('0' + date.getSeconds()).slice(-2)
  + '(JST)';
  document.getElementsByClassName("clock").textContent = clock;
}