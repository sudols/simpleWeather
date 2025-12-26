import './style.css';
import '@tabler/icons-webfont/dist/tabler-icons.min.css';
import renderWeatherData from './components/renderParsedData.js';
import { fetchWeatherData, parseWeatherData } from './components/fetchWeather.js';



// Reusable function to load weather for a location
function loadWeather(locationName) {
	fetchWeatherData(locationName)
		.then((weatherData) => {
			const parsedWeatherData = new parseWeatherData(weatherData);
			const renderHtml = new renderWeatherData(parsedWeatherData, locationName);
			renderHtml.render();
		})
		.catch((error) => {
			console.error(error);
		});
}

function init() {
	// Load Berlin on page load
	loadWeather('berlin');

	// Also load when user searches
	const searchInput = document.getElementById('search');
	searchInput.addEventListener('keypress', (e) => {
		if (e.key === 'Enter' && searchInput.value.trim()) {
			loadWeather(searchInput.value.trim());
		}
	})

	const hourlyToggle = document.getElementById('hourly-toggle');
	hourlyToggle.addEventListener('click', () => {
		const hourlyContainer = document.querySelector('.hourly-container');
		hourlyContainer.classList.toggle('expanded');
		hourlyToggle.children[1].classList.toggle('toggle-arrow');
	})

}

init();
