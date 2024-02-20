// // const hour = today.getUTCHours();
// // const minutes = today.getMinutes();

// const hour_hand = document.getElementById("hour");
// const minute_hand = document.getElementsById("minute-default");
// const seconds_hand = document.getElementsById("seconds");

var countryCount = 1;
var countries = [];
function addNewHourHand() {
  let Country = document.getElementById("time-zones");
  let selected = Country.options[Country.selectedIndex];
  if (countryCount < 3) {
    let clock = document.getElementById("center-of-gravity");
    let newHand = clock.insertAdjacentElement(
      "beforebegin",
      document.createElement("div")
    );
    newHand.id = `hour-hand-${selected.value}`;
    let innerDiv = newHand.appendChild(document.createElement("div"));
    innerDiv.className = `time-hand`;

    countryCount += 1;
    countryArray.push(`${selected.text}`);
  } else {
    alert("You can't have more than 3 different timezones at a time");
  }
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

const getCountries = async () => {
  const response = await fetch(
    "https://countryapi.io/api/all?apikey=ygMN9HYIZDMKnU4wTPDD3iiAvULddJ8LdbrfNhgg"
  );
  const json = await response.json();

  for (const country in json) {
    countries.push(json[country].name);
  }
};

function countryDropDown() {
  countries.forEach((country) => {
    let Country = document.getElementById("time-zones");
    let options = Country.appendChild(document.createElement("option"));
    options.value = country;
    options.text = country;
  });
}

function startclock() {
  getCountries().then(() => {
    countryDropDown();
  });
  let intvl;

  if (!intvl) {
    intvl = setInterval(moveSeconds, 1);
  }
}

document.onload(startclock());
