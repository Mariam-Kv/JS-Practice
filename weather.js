const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f03e91a2f8mshe176a735048281ep1ab00cjsn2d5f4ea2f79c",
    "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
  },
};

function searchCity() {
  let city = document.getElementById("city-input").value;

  show(city);
}

function show(city) {
  let cityName = document.getElementById("city-name");
  let description = document.getElementById("weather-type");
  let temp = document.getElementById("temp");
  let maxtemp = document.getElementById("min-temp");
  let mintemp = document.getElementById("max-temp");
  fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cityName.innerHTML = response.name;
      description.innerHTML = response.weather[0].main;
      temp.innerHTML = response.main.temp;
      maxtemp.innerHTML = response.main.temp_max;
      mintemp.innerHTML = response.main.temp_min;
    })
    .catch((err) => console.error(err));
}
