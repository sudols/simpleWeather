/**
 * Weather Icon Mapping
 * Maps Visual Crossing API icon names to @bybas/weather-icons SVGs
 */

const weatherIconMap = {
	// === iconSet=icons1 (default) ===
	'snow': require('@bybas/weather-icons/production/fill/all/snow.svg'),
	'rain': require('@bybas/weather-icons/production/fill/all/rain.svg'),
	'fog': require('@bybas/weather-icons/production/fill/all/fog.svg'),
	'wind': require('@bybas/weather-icons/production/fill/all/wind.svg'),
	'cloudy': require('@bybas/weather-icons/production/fill/all/cloudy.svg'),
	'partly-cloudy-day': require('@bybas/weather-icons/production/fill/all/partly-cloudy-day.svg'),
	'partly-cloudy-night': require('@bybas/weather-icons/production/fill/all/partly-cloudy-night.svg'),
	'clear-day': require('@bybas/weather-icons/production/fill/all/clear-day.svg'),
	'clear-night': require('@bybas/weather-icons/production/fill/all/clear-night.svg'),

	// === iconSet=icons2 (extended) ===
	'snow-showers-day': require('@bybas/weather-icons/production/fill/all/partly-cloudy-day-snow.svg'),
	'snow-showers-night': require('@bybas/weather-icons/production/fill/all/partly-cloudy-night-snow.svg'),
	'thunder-rain': require('@bybas/weather-icons/production/fill/all/thunderstorms-rain.svg'),
	'thunder-showers-day': require('@bybas/weather-icons/production/fill/all/thunderstorms-day-rain.svg'),
	'thunder-showers-night': require('@bybas/weather-icons/production/fill/all/thunderstorms-night-rain.svg'),
	'showers-day': require('@bybas/weather-icons/production/fill/all/partly-cloudy-day-rain.svg'),
	'showers-night': require('@bybas/weather-icons/production/fill/all/partly-cloudy-night-rain.svg'),
};

export default weatherIconMap;
