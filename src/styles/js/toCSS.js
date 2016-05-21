//this is run from lib so all paths are inside it
module.exports = function(api) {
	api.import([
		__dirname + '/reset.css',
		__dirname + '/colors.js',
		__dirname + '/typeography.css',
		__dirname + '/header.css'
	]);
}