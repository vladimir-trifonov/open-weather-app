import Weather from './components/weather/module';

System.import('jquery').then(function($) {
	new Weather(window.__env.api);
});