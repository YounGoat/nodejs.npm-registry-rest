/**
 * SEE
 *   https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md
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
	// , getNpmAgent = noda.inRequire('lib/getNpmAgent')
	;
	
function getPackage(name, abbreviated = false) { return co(function*() {
	let urlname = modifyUrl.pathname(config('endPoint.meta'), name, 'a');
	let headers = {};
	if (abbreviated) {
		headers['Accept'] = config('meta.mime');
	}
	let response = yield htp.get(urlname, headers);
	
	let meta;
	if (typeof response.body == 'string') {
		meta = JSON.parse(response.body);
	}
	else {
		meta = response.body;
	}

	return meta;
}) };

getPackage.lite = (name) => {
	return getPackage(name, true);
};

module.exports = getPackage;