function weatherSearchUpdate(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-city");
    let conditionElement = document.querySelector("#condition");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#weather-time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");


    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
    timeElement.innerHTML = formatDate(date);
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    conditionElement.innerHTML = response.data.condition.description;
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
getForecast(response.data.city);
}
function formatDate(date) {
let minutes = date.getMinutes();
let hours = date.getHours();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[date.getDay()];
if (minutes < 10) {
    minutes = `0${minutes}`;
}
    return `${day} ${hours}:${minutes}`;
}

function weatherSearchCity(city) {
    let apiKey = "b3afab731284f4b16ot5f2d9945e5053";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherSearchUpdate);
}



function searchButton(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-form-input");

    weatherSearchCity(searchInputElement.value);

}
function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
}
function getForecast(city) {
    let apiKey = "b3afab731284f4b16ot5f2d9945e5053";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
    let forecastHTML = "";

    response.data.daily.forEach(function (day, index) {
        if (index < 3) {
        forecastHTML =
        forecastHTML +
        `<div class="weather-forecast-container>
        <div class="weather-forecast-day">${formatDay(day.time)}</div>
        <img src="${day.condition.icon_url}" class="weather-icon"/>
        <div class="weather-forecast-temperature"></div>
        <strong class="weather-forecast-temperature-max">${Math.round(day.temperature.maximum)}&deg</strong>
        <span class="weather-forecast-temperature-min">${Math.round(day.temperature.minimum)}&deg</span>
        </div>`;
        }
    });
    let forecastElement = document.querySelector("#weather-forecast-container");
    forecastElement.innerHTML = forecastHTML;

}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",searchButton);
weatherSearchCity("paris");

