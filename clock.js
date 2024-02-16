// // const hour = today.getUTCHours();
// // const minutes = today.getMinutes();

// const hour_hand = document.getElementById("hour");
// const minute_hand = document.getElementsById("minute-default");
// const seconds_hand = document.getElementsById("seconds");

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
