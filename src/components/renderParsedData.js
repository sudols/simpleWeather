import weatherIconMap from './weatherIconMap.js';

class renderWeatherData {
	constructor(parsedWeatherData, location) {
		this.parsedWeatherData = parsedWeatherData;
		this.location = location;
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
			<div class="flex flex-col ml-5 gap-1">
				<div class="city-name text-4xl font-bold">${this.location}</div>

				<div class="time-day flex text-xl text-text-3 gap-3">
					<div class="weekday">${this.formatDateTime(currentWeather.datetimeEpoch).weekday},</div>
					<div class="current-time">${this.formatDateTime(currentWeather.datetimeEpoch).time}</div>
				</div>
			</div>

			<div class="flex mr-5 flex-col gap-0">
				<div class="flex gap-4 items-center ">
					<div class="weather-icon"><img src="${weatherIconMap[currentWeather.icon]}" alt="" height="70" width="70" /></div>
					<div class="temp text-5xl font-bold">${currentWeather.temp}°C</div>

					<div class="small-text flex flex-col text-text-3">
						<div class="high">High ${currentDayWeather.tempmax}°C</div>
						<div class="low">Low ${currentDayWeather.tempmin}°C</div>
					</div>
				</div>
				<div class="self-end text-xl text-text-3">
					<div class="weather-type">${currentWeather.conditions}</div>
				</div>
			</div>
		`;
	}

	renderDailyWeather() {
		const dailyWeather = this.parsedWeatherData.getDailyWeather();
		console.log('Daily Weather:', dailyWeather);

		const dailyWeatherContainer =
			document.getElementsByClassName('weekday-container')[0];

		dailyWeatherContainer.innerHTML = dailyWeather.slice(0, 7)
			.map(
				(day) => `
					<div class="grid grid-cols-[1fr_1fr_1fr] items-center">
						<div class="day-name font-bold">${this.formatDateTime(day.datetimeEpoch).weekday}</div>
						<div class="weather-icon justify-self-center"><img src="${weatherIconMap[day.icon]}" alt="" height="50" width="50" /></div>
						<div class="temp flex gap-2 justify-self-end">
							<div class="high font-bold text-lg w-8 text-right">${day.tempmax}°</div>
							<div class="low text-text-3 w-10 text-right">${day.tempmin}°</div>
						</div>
					</div>
			`
			)
			.join('');
	}

	renderHourlyWeather() {
		const hourlyWeather = this.parsedWeatherData.getHourlyWeather();
		console.log('Hourly Weather:', hourlyWeather);
		const hourlyWeatherContainer =
			document.getElementsByClassName('hourly-container')[0];

		hourlyWeatherContainer.innerHTML = hourlyWeather
			.map(
				(hour) => {
					if (Date.now() / 1000 < hour.datetimeEpoch) {
						return `
						<div class="flex flex-col items-center shrink-0">
							<div class="time">${this.formatDateTime(hour.datetimeEpoch).time}</div>
							<div class="weather-icon"><img src="${weatherIconMap[hour.icon]}" alt="" height="50" width="50" /></div>
							<div class="temp">${hour.temp}</div>
						</div>`
					}
				}
			)
			.join('');
	}
}

export default renderWeatherData;