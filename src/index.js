import "./styles/style_reset.css";
import "./styles/style.css";
import "./images/sun.png";

const form = document.querySelector("form");
// const paragraphs = Array.from(document.querySelectorAll("p[data-key]"));
const inputCity = document.querySelector("#city");
const cityName = document.querySelector("p[data-key=city]");
const temperature = document.querySelector("p[data-key=temp]");
const tempMax = document.querySelector("p[data-key=temp-max]");
const tempMin = document.querySelector("p[data-key=temp-min]");
const tempFeelsLike = document.querySelector("p[data-key=feels-like]");
const humidity = document.querySelector("p[data-key=humidity]");
const pressure = document.querySelector("p[data-key=pressure]");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
	e.preventDefault();
});
button.addEventListener("click", getWeather);
inputCity.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		getWeather();
	} else {
		e.preventDefault;
	}
});

async function getWeather() {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&APPID=922c3cbee1b66ac600e55411468dda27`
	);
	const weatherData = await response.json();
	console.log(weatherData);
	const currentWeather = getSpecificData(weatherData);
	displayData(currentWeather);
}

function getSpecificData(data) {
	let weather = {
		city: data.name,
		temp: data.main.temp,
		temp_max: data.main.temp_max,
		temp_min: data.main.temp_min,
		temp_feels_like: data.main.feels_like,
		humidity: data.main.humidity,
		pressure: data.main.pressure,
	};

	return weather;
}

function displayData(currentWeather) {
	cityName.textContent = currentWeather.city;
	temperature.textContent = currentWeather.temp;
	tempMax.textContent = currentWeather.temp_max;
	tempMin.textContent = currentWeather.temp_min;
	tempFeelsLike.textContent = currentWeather.temp_feels_like;
	humidity.textContent = currentWeather.humidity;
	pressure.textContent = currentWeather.pressure;
}
