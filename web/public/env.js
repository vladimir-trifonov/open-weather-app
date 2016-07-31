(function(window) {
	window.__env = window.__env || {};

	// API url
	window.__env.api = {
		url: 'http://localhost:8080',
		routes: {
			forecast: '/api/forecast'
		}
	}
}(this));