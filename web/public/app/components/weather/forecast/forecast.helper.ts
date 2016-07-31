///<reference path="typings/moment/moment.d.ts" />
import moment from 'moment';

let forecastHelper = {
	formatForecast: (forecast) => {
		let formatted = forecast.reduce((result, current) => {
			let date = moment(current.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
			if (!result.temps) {
				result.temps = {
					min: current.main.temp_min,
					max: current.main.temp_max
				}
			} else {
				result.temps.min = Math.min(current.main.temp_min, result.temps.min);
				result.temps.max = Math.max(current.main.temp_max, result.temps.max);
			}

			if (!result.byDate[date]) {
				result.byDate[date] = {
					min: current.main.temp_min,
					max: current.main.temp_max,
					parts: {}
				}
			} else {
				result.byDate[date].min = Math.min(current.main.temp_min, result.byDate[date].min);
				result.byDate[date].max = Math.max(current.main.temp_max, result.byDate[date].max);
			}

			let forecastPart = forecastHelper.formatForecastPart(current);
			result.byDate[date].parts[forecastPart.hour] = forecastPart;

			return result;
		}, {
			byDate: {}
		});

		let byDate = forecastHelper.sortForecast(formatted);

		return {
			byDate,
			temps: formatted.temps
		}
	},
	formatForecastPart(part) {
		return {
			date: part.dt_txt,
			hour: moment(part.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm'),
			avg: (Math.round(((part.main.temp_min + part.main.temp_max)/2) * 100) / 100).toFixed(2),
			ico: ((part.weather && part.weather.length) ? `http://openweathermap.org/img/w/${part.weather[0].icon}` : null),
			desc: ((part.weather && part.weather.length) ? `${part.weather[0].main} (${part.weather[0].description})` : '')
		}
	},
	sortForecast(formatted) {
		return Object.keys(formatted.byDate).map((k) => {
			let obj = {
				full_date: k,
				date: moment(k, 'YYYY-MM-DD').format('dddd'),
				stat: formatted.byDate[k]
			}

			obj.stat.parts = forecastHelper.sortForecastParts(obj.stat.parts);
			obj.stat.cnt = obj.stat.parts.length;

			return obj;
		}).sort((a, b) => {
			return moment.utc(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD'));
		});
	},
	sortForecastParts(parts) {
		return Object.keys(parts)
			.map((k) => parts[k])
			.sort((a, b) => {
				return moment.utc(a.date, 'YYYY-MM-DD HH:mm:ss').diff(moment(b.date, 'YYYY-MM-DD HH:mm:ss'));
			});
	}
}

export default forecastHelper;