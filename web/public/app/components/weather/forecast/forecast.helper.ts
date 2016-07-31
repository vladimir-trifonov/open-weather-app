///<reference path="typings/moment/moment.d.ts" />
import moment from 'moment';

export default {
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
					parts: []
				}
			} else {
				result.byDate[date].min = Math.min(current.main.temp_min, result.byDate[date].min);
				result.byDate[date].max = Math.max(current.main.temp_max, result.byDate[date].max);
			}

			result.byDate[date].parts.push(current);

			return result;
		}, {
			byDate: {}
		});

		let byDate = Object.keys(formatted.byDate).map((k) => {
			return {
				full_date: k,
				date: moment(k, 'YYYY-MM-DD').format('dddd'),
				stat: formatted.byDate[k]
			}
		}).sort((a, b) => {
			return moment.utc(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD'));
		});

		return {
			byDate,
			temps: formatted.temps
		}
	}
}