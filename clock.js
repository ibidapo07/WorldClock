// // const hour = today.getUTCHours();
// // const minutes = today.getMinutes();

// const hour_hand = document.getElementById("hour");
// const minute_hand = document.getElementsById("minute-default");
// const seconds_hand = document.getElementsById("seconds");

var countryCount = 1;
var countryArray = [];
function addNewHourHand(){

  if(countryCount < 3){
    let clock = document.getElementById("center-of-gravity");
  let newHand = clock.insertAdjacentElement("beforebegin",document.createElement("div"))
  newHand.id = `hour-hand-${countryCount}`
  let innerDiv = newHand.appendChild(document.createElement('div'))
  innerDiv.className = `time-hand`

  countryCount += 1
  countryArray.push("country1")
  }else{
    alert ("You can't have more than 3 different timezones at a time")
  }

 console.log(countryCount)
}

function moveSeconds() {
  const today = new Date();

  const seconds = today.getUTCSeconds();
  const minute = today.getUTCMinutes();
  const hour = today.getUTCHours();

  const seconds_hand = document.getElementById("seconds-hand");
  const minute_hand = document.getElementById("minute-hand-default");
  const hour_hand = document.getElementById("hour-hand");

  seconds_hand.style.transform = `rotateZ(${seconds * 6 - 180}deg)`;
  minute_hand.style.transform = `rotateZ(${minute * 6 - 180}deg)`;
  hour_hand.style.transform = `rotateZ(${hour * 30 - 180}deg)`;
}

function startclock() {
  let intvl;

  if (!intvl) {
    intvl = setInterval(moveSeconds, 1);
  }
}

document.onload(startclock());
