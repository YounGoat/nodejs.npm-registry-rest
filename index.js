'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , htp = require('htp')
    , noda = require('noda')

    /* in-package */
    ;

let Rest = {};

Object.assign(Rest, {
    getPackage       : require('./getPackage'),
    getDownloadCount : require('./getDownloadCount'),
});

module.exports = Rest;