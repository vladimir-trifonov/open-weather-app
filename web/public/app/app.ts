import Weather from './components/weather/module';
import './common/styles/main.css!';

System.import('jquery').then(function($) {
	$(function() {
		new Weather(window.__env.api);
	});
});