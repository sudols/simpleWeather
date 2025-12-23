import './style.css';
import renderWeatherData from './components/renderParsedData.js';
import { fetchWeatherData, parseWeatherData } from './components/fetchWeather.js';



async function init() {
	const parsedWeatherData = new parseWeatherData(await fetchWeatherData());
	const renderHtml = new renderWeatherData(parsedWeatherData);
	renderHtml.render();
}

init();
