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
    innerDiv.id = `time-hand-${selected.value}`;

    let newHandStyle = document.getElementById(`hour-hand-${selected.value}`);
    let flagOption = document.getElementById(`time-hand-${selected.value}`);

    flagOption.style.backgroundImage = `url(${getcountryFlag(selected.value)})`;
    let timeoffset = getcountryTime(`${selected.value}`);

    const today = new Date();
    newHandStyle.style["position"] = "absolute";
    newHandStyle.style["width"] = "20px";
    newHandStyle.style["height"] = "280px";
    newHandStyle.style["transform"] = `rotateZ(${
      timeoffset[0] == "+"
        ? (today.getUTCHours() + timeoffset[1]) * 30 - 180
        : (today.getUTCHours() - timeoffset[1]) * 30 - 180
    }deg)`;
    newHandStyle.style["padding-bottom"] = "40px";
    setInterval(() => {
      const today = new Date();

      newHandStyle.style["transform"] = `rotateZ(${
        timeoffset[0] == "+"
          ? (today.getUTCHours() + timeoffset[1]) * 30 - 180
          : (today.getUTCHours() - timeoffset[1]) * 30 - 180
      }deg)`;
    }, 1000);
    countryCount += 1;
    // countryArray.push(`${selected.text}`);
  } else {
    alert("You can't have more than 3 different timezones at a time");
  }
}

// function addNewMinuteHand() {}

function parseUTCOffset(input) {
  const parts = /(\+|\-)(\d{2})\:(\d{2})$/.exec(input);
  const sign = parts[1];
  if (!parts) {
    return null;
  }
  return [sign, ...parts.slice(2).map((p) => parseInt(p, 10))];
}

function getcountryTime(country) {
  let result = countries.find((ele) => ele.name == country);
  let timeoffset = result.timeZone;
  let time = parseUTCOffset(`${timeoffset}`);

  return time;
}

function getcountryFlag(country) {
  let result = countries.find((ele) => ele.name == country);
  let flag = result.flag.large;

  return flag;
}

function moveSeconds() {
  const today = new Date();

  const seconds = today.getSeconds();
  const minute = today.getMinutes();
  const hour = today.getHours();

  const seconds_hand = document.getElementById("seconds-hand");
  const minute_hand = document.getElementById("minute-hand-default");
  const hour_hand = document.getElementById("hour-hand");

  seconds_hand.style.transform = `rotateZ(${seconds * 6 - 180}deg)`;
  minute_hand.style.transform = `rotateZ(${minute * 6 - 180}deg)`;
  hour_hand.style.transform = `rotateZ(${hour * 30 - 180}deg)`;
}

const getCountries = async () => {
  const response = await fetch(
    "https://countryapi.io/api/all?apikey=xQXBxNzCaW2d3cgorjUza2Yu7Ch3qxphSSs3UafH"
  );
  const json = await response.json();

  for (const country in json) {
    let countryObject = {};
    countryObject["name"] = json[country].name;
    countryObject["timeZone"] = json[country].timezones;
    countryObject["flag"] = json[country].flag;
    countries.push(countryObject);
  }
  console.log(json);
};

function countryDropDown() {
  countries.forEach((country) => {
    let Country = document.getElementById("time-zones");
    let options = Country.appendChild(document.createElement("option"));

    options.value = country["name"];
    options.text = `${country["name"]} TimeZone : ${
      country["timeZone"].length > 1
        ? "Multilpe Timezones"
        : country["timeZone"]
    }`;
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
