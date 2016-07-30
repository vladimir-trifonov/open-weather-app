var Arrow = require('arrow');

var User = Arrow.Model.extend('user',{
	fields: {
		apikey: {type:String}
	},
	connector: 'appc.arrowdb'
});

module.exports = User;