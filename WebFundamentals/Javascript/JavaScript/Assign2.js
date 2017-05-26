var HOUR = 8;
var MINUTE = 5;
var PERIOD = "AM";



if (MINUTE == 30) {
    console.log("Its half past", HOUR, morningOrEvening(PERIOD));
} else if (MINUTE == 15) {
    console.log("It's quarter past", HOUR, morningOrEvening(PERIOD));
} else if (MINUTE < 30) {
    console.log("Its just after", HOUR, morningOrEvening(PERIOD));
} else if (MINUTE == 5) {
    console.log("It's five after", HOUR, morningOrEvening(PERIOD));
} else {
    console.log("Its almost", HOUR+1, morningOrEvening(PERIOD));
}

function morningOrEvening(PERIOD ) {
  if (PERIOD === "AM") {
    return "in the morning";
  }
  else {
    return "in the evening";
  }
}