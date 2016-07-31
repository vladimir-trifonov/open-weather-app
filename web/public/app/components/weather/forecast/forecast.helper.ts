///<reference path="typings/moment/moment.d.ts" />
import moment from 'moment';

export default {
	formatForecast: (forecast) => {
		let formatted = forecast.reduce((result, current) => {
			let date = moment(current.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
			if (!result[date]) {
				result[date] = {
					min: current.main.temp_min,
					max: current.main.temp_max
				}
			} else {
				result[date].min = Math.min(current.main.temp_min, result[date].min);
				result[date].max = Math.max(current.main.temp_max, result[date].max);

				//let weather = ((current.weather && current.weather.length) ? current.weather[0] : {});

				result[date].weather = ''//weather.main ? weather.main : '';
				result[date].style = ''//result[date].weather.toLowerCase();
				//result[date].ico = //weather.icon ? weather.icon : '';
			}

			return result;
		}, {});

		return Object.keys(formatted).map((k) => {
			return {
				full_date: k,
				date: moment(k, 'YYYY-MM-DD').format('dddd'),
				stat: formatted[k]
			}
		}).sort((a, b) => {
			return moment.utc(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD'));
		});
	}
}