import './style.css';
import renderWeatherData from './components/renderParsedData.js';
import { fetchWeatherData, parseWeatherData } from './components/fetchWeather.js';



function init() {
	// const location = document.getElementById('search')

	// location.addEventListener('keypress', (e) => {
	// 	if (e.key === 'Enter') {
	const location = { value: 'berlin' }
	fetchWeatherData(location.value)
		.then((weatherData) => {
			const parsedWeatherData = new parseWeatherData(weatherData);
			const renderHtml = new renderWeatherData(parsedWeatherData, location.value);
			renderHtml.render();
		})
		.catch((error) => {
			console.error(error);
		});
	// }
	// })
}

init();
