"use strict";

const NUMS_API = "http://numbersapi.com";

async function getNum(num) {
  let p = await axios(`${NUMS_API}/${num}?json`);
  console.log(p);
  $("#p1-1").append(p.data.text);
}

getNum(34);

const numArr = [1, 5, 83, 4];
async function getMultipleNums(nums) {
  let p = await axios(`${NUMS_API}/${nums.toString()}?json`);
  console.log(p);
  console.log(nums.length);

  for (let num of nums) {
    $("#p1-2").append(p.data[num]);
  }
}

getMultipleNums(numArr);

async function getSameNum(num) {
  let p = await axios(`${NUMS_API}/${num}?json`);
  console.log(p);
  $("#p1-3").append(p.data.text);
}

for (let i = 0; i < 4; i++) {
  getSameNum(4).data;
}



