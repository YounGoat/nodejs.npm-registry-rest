/**
 * SEE
 *   https://api-docs.npms.io
 */

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
	/* NPM */
	, htp = require('htp')
	, co = require('jinang/co')
	, modifyUrl = require('jinang/modifyUrl')
	, noda = require('noda')
    
	/* in-package */
	, config = noda.inRequire('lib/config')

	/* in-file */
	, endPoint = 'https://api.npms.io/v2/search'
	;
	

/**
 * @param {Object}   options
 * @param {string}   options.author
 * @param {string}   options.owner
 */
function getPackageNames(options) { return co.easy(function*() {

	let Q = [];
	options = options ? options : {};
	if (options.author) {
		Q.push([ 'author', options.author ]);
	}
	if (options.owner) {
		Q.push([ 'maintainer', options.owner ]);
	}
	if (Q.length == 0) {
		throw new Error('at lease one condition should be appointed');
	}
	let q = Q.map(kv => `${kv[0]}:${kv[1]}`).join('+');

	// 250 is the max value of `size`.
	let names = [], from = 0, size = 25;
	do {
		let urlname = modifyUrl.query(endPoint, { q, from: names.length, size }, 'w');
		
		let body = (yield htp.get(urlname)).body;

		// Extract package names.
		body.results.forEach(ret => names.push(ret.package.name));

		// When all packages returned.
		if (names.length == body.total) {
			break;
		}
	} while(true)

	return names;
}) };

module.exports = getPackageNames;