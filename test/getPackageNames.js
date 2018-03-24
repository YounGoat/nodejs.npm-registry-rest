'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , getPackageNames = noda.inRequire('getPackageNames')
    ;

describe('getPackageNames', () => {    
    it('by owner', done => {
        getPackageNames({ owner: 'youngoat' }).then(names => {
            assert(names instanceof Array);
            assert(names.includes('ching'));
            done();
        });
    });

    it('by author', done => {
        getPackageNames({ author: 'youngoat' }).then(names => {
            assert(names instanceof Array);
            done();
        });
    });
    
    it('throws when no options', done => {
        getPackageNames().catch(ex => {
            done();
        });
    });
});