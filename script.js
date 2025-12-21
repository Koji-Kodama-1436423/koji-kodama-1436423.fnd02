'use strict'

const today = new Date();     //Fri Dec 19 2025 12:19:18 GMT+0900 (日本標準時)                 
const year = today.getFullYear(); //2025
const month = today.getMonth() + 1; //11+1
const week = today.getDay(); //5（曜日を返す）
const day = today.getDate(); //　日付を返す
const week_ja = ["日","月","火","水","木","金","土"];
const distDate = new Date(2012, 3, 7);
const diffMilliSec = today - distDate;
const diffDays = (Math.floor(diffMilliSec / 1000 / 60 / 60 / 24) - 1);//日付の差分計算
const years = Math.floor(diffDays / 365)
const days = diffDays % 365

const todayDate = document.querySelector("#today")
todayDate.textContent = "本日は " + year +"年 " + month +"月 " + day + "日 " + week_ja[week]+"曜日です。 "

const record = document.getElementById("record");
record.textContent = "無災害記録表の日数は " + diffDays + "日　" + years+"年と"+days+"日です。";
record.classList.add("record"); // CSSクラスを追加

const rigthBtn = document.querySelector(".choiceRight");
const anser1 = document.querySelector(".anser")
rigthBtn.addEventListener("click", function(){
    anser1.textContent = "正解"
})
const wrongBtn1 = document.querySelector(".choiceWrong1");
wrongBtn1.addEventListener("click", function(){
    anser1.textContent = "不正解"
})
const wrongBtn2 = document.querySelector(".choiceWrong2");
wrongBtn2.addEventListener("click", function(){
    anser1.textContent = "不正解"
})
