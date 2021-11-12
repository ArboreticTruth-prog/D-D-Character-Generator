"use strict";

/*roll 7 sets of 4d6 keep the highest 3 of the d6 per set and drop the lowest set of 4d6*/
function roll_four_d_six() {
  /*Rolls 4 "D6" dice, then sorts and takes the highest 3 and adds them together.*/
  var die_six = [];

  for (i = 0; i < 4; i++) {
    die_six[i] = Math.floor(Math.random() * 6 + 1);
  }

  die_six.sort();
  die_six.shift();
  var sum = 0;

  for (var _i = 0; _i < die_six.length; _i++) {
    sum += die_six[_i];
  }

  return sum;
}

function roll_seven_sets() {
  var setOne = roll_four_d_six();
  var setTwo = roll_four_d_six();
  var setThree = roll_four_d_six();
  var setFour = roll_four_d_six();
  var setFive = roll_four_d_six();
  var setSix = roll_four_d_six();
  var setSeven = roll_four_d_six();
  var sets = [setOne, setTwo, setThree, setFour, setFive, setSix, setSeven];
  sets.sort();
  sets.shift();
  document.querySelector("p").innerText = sets;
}