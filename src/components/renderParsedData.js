class renderWeatherData {
	constructor(parsedWeatherData) {
		this.parsedWeatherData = parsedWeatherData;
	}

	render() {
		this.renderCurrentWeather();
		this.renderDailyWeather();
		this.renderHourlyWeather();
	}

	formatDateTime(epochTime) {
		const date = new Date(epochTime * 1000);

		return {
			weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
			time: date.toLocaleTimeString('en-US', {
				hour: 'numeric',
				minute: '2-digit',
				hour12: true,
			}),
			date: date.toLocaleDateString('en-US', {
				month: 'short',
				day: 'numeric',
			}),
		};
	}

	renderCurrentWeather() {
		const currentWeather = this.parsedWeatherData.getCurrentWeather();
		const currentDayWeather = this.parsedWeatherData.getDailyWeather()[0];

		console.log('Current Weather:', currentWeather);

		const currentWeatherContainer =
			document.getElementsByClassName('current-info')[0];
		currentWeatherContainer.innerHTML = `
			<div class="city-name">delhi</div>
			<div class="time-day">
				<div class="weekday">${this.formatDateTime(currentWeather.datetimeEpoch).weekday
			}</div>
				<div class="current-time">${this.formatDateTime(currentWeather.datetimeEpoch).time
			}</div>
			</div>
			<div class="weather-icon">${currentWeather.icon}</div>
			<div class="temp">${currentWeather.temp}</div>
			<div class="small-text">
				<div class="high">${currentDayWeather.tempmax}</div>
				<div class="low">${currentDayWeather.tempmin}</div>
				<div class="weather-type">${currentWeather.conditions}</div>
			</div>
		`;
	}

	renderDailyWeather() {
		const dailyWeather = this.parsedWeatherData.getDailyWeather();
		console.log('Daily Weather:', dailyWeather);

		const dailyWeatherContainer =
			document.getElementsByClassName('weekday-container')[0];

		dailyWeatherContainer.innerHTML = dailyWeather
			.map(
				(day) => `
				<div class="day-name">${this.formatDateTime(day.datetimeEpoch).weekday}</div>
				<div class="weather-icon">${day.icon}</div>
				<div class="temp">
					<div class="high">${day.tempmax}</div>
					<div class="low">${day.tempmin}</div>
				</div>
			`
			)
			.join('');
	}

	renderHourlyWeather() {
		const hourlyWeather = this.parsedWeatherData.getHourlyWeather();
		console.log('Hourly Weather:', hourlyWeather);
		const hourlyWeatherContainer =
			document.getElementsByClassName('hourly-info')[0];

		hourlyWeatherContainer.innerHTML = hourlyWeather
			.map(
				(hour) => `
					<div class="time">${this.formatDateTime(hour.datetimeEpoch).time}</div>
					<div class="weather-icon">${hour.icon}</div>
					<div class="temp">${hour.temp}</div>
				`
			)
			.join('');
	}
}

export default renderWeatherData;