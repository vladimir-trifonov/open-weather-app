import Weather from './components/weather/module';
import './common/styles/main.css!';

System.import('jquery').then(function($) {
	$(function() {
		// Init Weather component' after jquery is loaded and the dom is ready
		new Weather(window.__env.api);
	});
});