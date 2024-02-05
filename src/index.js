function weatherSearchUpdate(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);

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


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",searchButton);

weatherSearchCity("Paris");