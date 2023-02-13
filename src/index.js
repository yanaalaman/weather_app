//=================================
// MAIN LETs
//================================
let cityName;
let tempHTML;


//=================================
// Functions section
//=================================
function capitalizeName(name) {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function checkCity() {
  cityName = document.getElementById("cityInput").value.toLowerCase();
  changeHTMLbyCity(cityName);
  return cityName;
}

function getWeather(response) {
  console.log(response);

  let humidity = response.data.data.current_condition[0].humidity;
  document.getElementById("humidity").innerText = humidity;

  let weatherDesc =
    response.data.data.current_condition[0].weatherDesc[0].value;
  document.getElementById("weatherDesc").innerText = weatherDesc;

  let weatherIconUrl =
    response.data.data.current_condition[0].weatherIconUrl[0].value;

  let windspeedKmph = response.data.data.current_condition[0].windspeedKmph;
  document.getElementById("windspeedKmph").innerText = windspeedKmph;

  let city = response.data.data.request[0].query;
  document.getElementById("cityID").innerText = city;
  document.getElementById("cityID2").innerText = city;

  let temp_C = response.data.data.current_condition[0].temp_C;
  document.getElementById("tempHTML").innerText = temp_C;
}

// Change HTML upon City function
function changeHTMLbyCity(cityName) {
  cityName = capitalizeName(cityName);
  axios.get(apiUrl + "&q=" + cityName).then(getWeather);
}

// Time functions
let date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hour = date.getHours();
let year = date.getFullYear();
let month = date.getMonth(); // beware: January = 0; February = 1, etc.
let day = date.getDate();
let dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
let milliSeconds = date.getMilliseconds();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

//=================================
// Running section
//=================================

let checkWeatherButton = document.querySelector("button");
checkWeatherButton.addEventListener("click", checkCity);

document.getElementById(
  "current_time"
).innerText = `Today: ${days[dayOfWeek]} ${hour}:${minutes}`;

// API Section
let apiKey = "ac2f5c0684a04511bc834115231002";
let apiUrl = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${apiKey}&format=json`;
