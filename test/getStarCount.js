'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , getStarCount = noda.inRequire('getStarCount')
    ;

describe('getStarCount', () => {
    const pkgName = 'jinang', scopedPkgName = '@exs/addon';
    
    it('basic', done => {
        getStarCount(pkgName).then(count => {
            assert.equal(typeof count, 'number');
            done();
        })
    });

    it('scoped package', done => {
        getStarCount(scopedPkgName).then(count => {
            assert.equal(typeof count, 'number');
            done();
        })
    });
});