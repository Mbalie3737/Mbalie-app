function searchCity(city) {
    let apiKey = "b3afab731284f4b16ot5f2d9945e5053";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
}


function searchButton(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = searchInputElement.value;
    searchCity(searchInput.value);

}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",searchButton);