#	npm-registry-rest
__NPM Registry RESTful API__

##  Description

Depends on NPM official web service API.

##	ToC

*	[Get Started](#get-started)
*	[API](#api)
* 	[Examples](#examples)
*	[References](#references)
*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/nodejs.npm-registry-api)

##	Get Started

```javascript
const rest = require('npm-registry-rest');
rest.getPackage('htp')
    .then(meta => {
        // ...
    })
    .catch(err => {
        // ...
    });
```

Each API in this package may be required as standalone module.

```javascript
const getPackage = require('npm-registry-rest/getPackage');
getPackage('htp')
    .then(meta => {
        // ...
    })
    .catch(err => {
        // ...
    });
```

##	API

*   Promise(number | Object) __getDownloadCount__(Object *options*)
*   Promise(Object) __getPackage__(string *name*)
*   Promise(Object) __getPackage.lite__(string *name*)

All methods are asynchronous and will return instances of `Promise`. Hereafter, *response* means what to be obtained in `.then((response) => { /* ... */ })`.

All member methods may be required and invoked by itself.

### getDownloadCount

To get download count of specified package(s) in given day.

*   __options.name__ *string*
*   __options.name__ *string[]*
*   __options.range__ *string*

### getPackage

To get meta info of given package.

### getPackage.lite

To get abbreviated meta info of given package.

##  References

*   [📦 📒 the npm registry public tracker](https://github.com/npm/registry)