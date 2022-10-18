let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
// let city = prompt("Please enter a city");
// city = city.trim().toLowerCase();
if (city in weather) {
  let cityTemp = Math.round(weather[city].temp);
  let cityHumidity = Math.round(weather[city].humidity);
  let cityTempF = (cityTemp * 9) / 5 + 32;
  alert(
    `It is currently ${cityTemp}°C (${cityTempF}°F) in ${city} with a humidity of ${cityHumidity}﹪`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}