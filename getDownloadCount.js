/**
 * SEE
 *   https://github.com/npm/registry/blob/master/docs/download-counts.md
 */

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
	/* NPM */
	, htp = require('htp')
	, co = require('jinang/co')
	, cloneObject = require('jinang/cloneObject')
	, modifyUrl = require('jinang/modifyUrl')
	, noda = require('noda')
	, date_format = require('dafo/php')
    
	/* in-package */
	, config = noda.inRequire('lib/config')
	;
	
/**
 * @param  {Object}    options
 * @param  {string}   [options.name]
 * @param  {string[]} [options.names]
 * @param  {string}    options.range
 */
function getDownloadCount(options) { return co(function*() {
	let { range, name, names } = options;
	let mul = names && names.length ? true : false;
	let pkgnames = names ? names.join(',') : name;
	
	let pathname = `point/${range}/${pkgnames}`;
	let urlname = modifyUrl.pathname(config('endPoint.downloads'), pathname, 'a');

	let response = yield htp.get(urlname);
	if (response.statusCode != 200) {
		throw new Error(`HTTP ${response.statusCode}, ${response.statusMessage}`);
	}
	
	let body = response.body;
	if (mul) {
		return cloneObject(body, (name, value) => [ name, value.downloads ]);
	}
	else {
		return body.downloads;
	}
}) }

module.exports = getDownloadCount;