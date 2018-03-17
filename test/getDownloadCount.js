'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , getDownloadCount = noda.inRequire('getDownloadCount')
    ;

describe.only('getDownloadCount', () => {
    const pkgName = 'jinang';
    const pkgNames = [ 'jinang', 'overload2' ];
    
    it('last-day', done => {
        getDownloadCount({ name: pkgName, range: 'last-day' }).then(count => {
            done();
        }).catch(err => { throw err; });
    });

    it('bulk query', done => {
        getDownloadCount({ names: pkgNames, range: 'last-day' }).then(count => {
            done();
        }).catch(err => { throw err; });
    });
});