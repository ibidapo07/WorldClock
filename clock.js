const today = new Date();
const hour = today.getUTCHours();
const minutes = today.getMinutes();
var seconds = today.getSeconds();

const hour_hand = document.getElementById("hour");
const minute_hand = document.getElementsById("minute-default");
const seconds_hand = document.getElementsById("seconds");

function moveSeconds() {
  let seconds_hand = document.getElementById("seconds-hand");
  seconds_hand.animate(
    {
      transform: `rotateZ(${(seconds / 60) * 3600}deg)`,
    },
    {
      duration: 500000,
      iterations: 3,
    }
  );
  let text = document.getElementById("text");

  text.innerHTML = (seconds / 60) * 360;
}
