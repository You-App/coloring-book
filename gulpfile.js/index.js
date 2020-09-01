const { series, parallel } = require('gulp');
const { js } = require('./tasks/js.js')
const { css, minifyCss } = require('./tasks/css.js')
const { static } = require('./tasks/static.js')
const del = require('del')

async function _clean(callback) {
	await del(path.join(__dirname, '../build/'))
	console.log('clean task')
	callback()
}

exports.static = static;
exports.css = css;
exports.build = series(_clean, parallel(minifyCss, js))
// exports.default = build;