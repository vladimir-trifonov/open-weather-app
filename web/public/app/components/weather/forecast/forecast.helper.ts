///<reference path="typings/moment/moment.d.ts" />
import moment from 'moment';

let forecastHelper = {
	// Format the forecast data received from API endpoint
	formatForecast: (forecast) => {
		let formatted = forecast.reduce((result, current) => {
			let date = moment(current.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
			if (!result.temps) {
				// Init week's min/max temps if it's not
				result.temps = {
					min: current.main.temp_min,
					max: current.main.temp_max
				}
			} else {
				// Find min and max temps for the whole forecast period
				result.temps.min = Math.min(current.main.temp_min, result.temps.min);
				result.temps.max = Math.max(current.main.temp_max, result.temps.max);
			}

			if (!result.byDate[date]) {
				// Init day's min/max temps if it's not
				result.byDate[date] = {
					min: current.main.temp_min,
					max: current.main.temp_max,
					parts: {}
				}
			} else {
				// Find min and max temps for the current day
				result.byDate[date].min = Math.min(current.main.temp_min, result.byDate[date].min);
				result.byDate[date].max = Math.max(current.main.temp_max, result.byDate[date].max);
			}

			// Format the forecast's current day data
			let forecastPart = forecastHelper._formatForecastPart(current);
			result.byDate[date].parts[forecastPart.hour] = forecastPart;

			return result;
		}, {
			byDate: {}
		});

		// Sort the forecast data by days and hours
		let byDate = forecastHelper._sortForecast(formatted);

		return {
			// Formatted forecast by days
			byDate,
			// Min/max temperatures for the whole period
			temps: formatted.temps
		}
	},
	_formatForecastPart(part) {
		return {
			// Current day's date
			date: part.dt_txt,
			// Current day's hour
			hour: moment(part.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm'),
			// Average temp for the current hour
			avg: (Math.round(((part.main.temp_min + part.main.temp_max)/2) * 100) / 100).toFixed(2),
			// Icon
			ico: ((part.weather && part.weather.length) ? `http://openweathermap.org/img/w/${part.weather[0].icon}` : null),
			// weather forecast description for the current hour
			desc: ((part.weather && part.weather.length) ? `${part.weather[0].main} (${part.weather[0].description})` : '')
		}
	},
	_sortForecast(formatted) {
		// Sort the forecast by days
		return Object.keys(formatted.byDate).map((k) => {
			let obj = {
				full_date: k,
				date: moment(k, 'YYYY-MM-DD').format('dddd'),
				stat: formatted.byDate[k]
			}

			// Sort the forecast by hours
			obj.stat.parts = forecastHelper._sortForecastParts(obj.stat.parts);
			obj.stat.cnt = obj.stat.parts.length;

			return obj;
		}).sort(forecastHelper._sortByDate);
	},
	_sortForecastParts(parts) {
		return Object.keys(parts)
			.map((k) => parts[k])
			.sort(forecastHelper._sortByDate);
	},
	_sortByDate(a, b) {
		return moment.utc(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD'));
	}
}

export default forecastHelper;