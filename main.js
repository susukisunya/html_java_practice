"use strict";

//クリックによって数値が変動するカウンターを作成する
var plus1_number = () => {
  var countnumber = document.querySelector(".edit_area_number");//getElementsByClassNameではうまくいかなかった　なんで？
  var intcountnumber = Number(countnumber.textContent);
  intcountnumber++;
  console.log(intcountnumber);
  countnumber.textContent = intcountnumber;
}

var be0_number = () => {
    document.querySelector(".edit_area_number").textContent = 0;
}