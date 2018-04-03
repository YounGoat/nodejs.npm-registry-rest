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
    const pkgName = 'jinang', scopedPkgName = '@exs/addon';
    
    it('normal', done => {
        getPackage(pkgName).then(meta => {
            assert.equal(typeof meta, 'object');
            done();
        });
    });

    it('scoped package', done => {
        getPackage(scopedPkgName).then(meta => {
            assert.equal(typeof meta, 'object');
            done();
        });
    })

    it('not found', done => {
        getPackage('un-existing-pack-age').catch(err => {
            assert.equal(err.message, 'Not Found');
            done();
        });
    });

    it('lite', done => {
        getPackage.lite(pkgName).then(meta => {
            done();
        });
    });
});