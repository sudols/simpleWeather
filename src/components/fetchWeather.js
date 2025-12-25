async function fetchWeatherData(location) {
	const apiKey = process.env.WEATHER_API_KEY;
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json&include=days,hours,current`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Network response was not ok: ' + response.statusText);
		}
		const weatherData = await response.json();
		return weatherData;
	} catch (error) {
		console.error(
			'There has been a problem with your fetch operation:',
			error.message
		);
	}
}

class parseWeatherData {
	constructor(weatherData) {
		this.weatherData = weatherData;
	}

	getCurrentWeather() {
		return this.weatherData.currentConditions;
	}

	getDailyWeather() {
		return this.weatherData.days;
	}

	getHourlyWeather() {
		return this.weatherData.days[0].hours;
	}
}

export { fetchWeatherData, parseWeatherData };