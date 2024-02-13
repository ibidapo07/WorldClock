const today = new Date();
const hour = today.getUTCHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

// const hour_hand = document.getElementById("hour");
// const minute_hand = document.getElementsById("minute-default");

function moveSeconds() {
  //   alert();
  let seconds_hand = document.getElementsByClassName("seconds-hand");
  seconds_hand.style["background-color"] = "red";
}
