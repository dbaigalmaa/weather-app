let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let day = days[currentDate.getDay()];
let month = months[currentDate.getMonth()];
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let date = document.querySelector("#date");
date.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".form-control").value;
  let cityName = document.querySelector("h5");
  if (searchInput) {
    cityName.innerHTML = searchInput;
    let unit = "metric";
    let apiKey = "ed238469f9b5e9d801834270e65449bc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
  }
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchCity);

function changeToFahr(event) {
  event.preventDefault();
  let cels = document.querySelector(".temp");
  cels.innerHTML = Math.round((cels.innerHTML * 9) / 5 + 32);
  let linkToFahr = document.querySelector(".fahr");
  let linkToCels = document.querySelector(".cels");
  linkToFahr.style.pointerEvents = "none";
  linkToCels.style.pointerEvents = "all";
  linkToFahr.style.fontWeight = 700;
  linkToCels.style.fontWeight = 200;
}

function changeToCels(event) {
  event.preventDefault();
  let fahr = document.querySelector(".temp");
  fahr.innerHTML = Math.round(((fahr.innerHTML - 32) * 5) / 9);
  let linkToFahr = document.querySelector(".fahr");
  let linkToCels = document.querySelector(".cels");
  linkToFahr.style.pointerEvents = "all";
  linkToCels.style.pointerEvents = "none";
  linkToFahr.style.fontWeight = 200;
  linkToCels.style.fontWeight = 700;
}
let fahrLink = document.querySelector(".fahr");
fahrLink.addEventListener("click", changeToFahr);
let celsLink = document.querySelector(".cels");
celsLink.addEventListener("click", changeToCels);

function showWeather(response) {
  let temp = Math.round(response.data.main.temp);
  let currentCity = response.data.name;
  let humid = response.data.main.humidity;
  let wind = Math.round(response.data.wind.speed);
  let cels = document.querySelector(".temp");
  cels.innerHTML = temp;
  let h5 = document.querySelector("h5");
  h5.innerHTML = currentCity;
  let humidInput = document.querySelector("#hum");
  let windInput = document.querySelector("#wind");
  humidInput.innerHTML = `Humidity: ${humid}﹪`;
  windInput.innerHTML = `Wind: ${wind}m/s`;
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}
navigator.geolocation.getCurrentPosition(getPosition);
