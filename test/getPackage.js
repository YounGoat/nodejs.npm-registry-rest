'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , getPackage = noda.inRequire('getPackage')
    ;

describe('getPackage', () => {
    const pkgName = 'jinang';
    
    it('normal', done => {
        getPackage(pkgName).then(meta => {
            done();
        })
    });

    it('lite', done => {
        getPackage.lite(pkgName).then(meta => {
            done();
        });
    });
});