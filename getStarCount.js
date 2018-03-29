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
	;
	
function getStarCount(name) { return co(function*() {
	let urlname = modifyUrl.pathname(config('endPoint.meta'), name, 'a');
	let response = yield htp.get(urlname);
	
	if (response.statusCode != 200) {
		throw new Error(response.statusMessage);
	}
	
	let meta;
	if (typeof response.body == 'string') {
		meta = JSON.parse(response.body);
	}
	else {
		meta = response.body;
	}

	let count = 0;
	if (meta.users) {
		count = Object.keys(meta.users).length;
	}

	return count;
}) };

module.exports = getStarCount;