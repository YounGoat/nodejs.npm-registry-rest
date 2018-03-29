#	npm-registry-rest
__NPM Registry RESTful API__

[![total downloads of npm-registry-rest](https://img.shields.io/npm/dt/npm-registry-rest.svg)](https://www.npmjs.com/package/npm-registry-rest)
[![npm-registry-rest's License](https://img.shields.io/npm/l/npm-registry-rest.svg)](https://www.npmjs.com/package/npm-registry-rest)
[![latest version of npm-registry-rest](https://img.shields.io/npm/v/npm-registry-rest.svg)](https://www.npmjs.com/package/npm-registry-rest)

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

*   [Promise(number | Object) __getDownloadCount__(Object *options*)](#getdownloadcount)
*   [Promise(Object) __getPackage__(string *name*)](#getpackage)
*   [Promise(Object) __getPackage.lite__(string *name*)](#getpackages)
*   [Promise(Array) __getPackageNames__(Object *options*)](#getpackagenames)
*   [Promise(number) __getStarCount__(string *packageName*)](#getstarcount)

All methods are asynchronous and will return instances of `Promise`. Hereafter, *response* means what to be obtained in `.then((response) => { /* ... */ })`.

All member methods may be required and invoked by itself.

### getDownloadCount

To get download count of specified package(s) in given day.

*   __options.name__ *string*
*   __options.name__ *string[]*
*   __options.range__ *string*

What returned will be:
*   a number if *options.name* is a string representing a package name.
*   an object in form of `{ "<packageName>" : <downloadCount>, ... }` if *options.name* is an array of string.

### getPackage

To get meta info of given package.

What returned will look like:

```javascript
{
    name /* string */,
    description /* string */,
    "dist-tags": {
        /* <tagName> : <version>, ... */
    },
    "versions": {
        /* <version> : <versionPackageJson>, ... */
    },
    readme /* string */,
    "maintainers": [
        { email, name } /* , ... */
    ],
    "time": {
        modified /* DateTime_in_ISO_format */,
        created /* DateTime_in_ISO_format */,
        /* <version> : <publishedTime>, ... */
    },
    homepage /* string(url) */,
    keywords /* string[] */,
    "repository": {
        type /* string */,
        url /* string */
    },
    "author": {
        name /* string */,
        email /* string(email) */,
        url /* string(url) */
    },
    "bugs": {
        url /* string(url) */
    },
    readmeFilename /* string */,
    "users": { /* Object OPTIONAL, users who stared the package */
        /* string <username> : boolean true, ... */
    }
    /* <misc>, ... */
}
```

`<versionPackageJson>` may look like:
```javascript
{
    "bin": {
        /* <commandName> : <path>, ... */
    },
    "dependencies": {
        /* <packageName> : <semver>, ... */
    },
    "devDependencies": {
        /* <packageName> : <semver>, ... */
    },
    "directories": {
        /* <directoryTypeName> : <dirName>, ... */
    }
    "scripts": {
        /* <scriptName> : <command>, ... */
    }
    name /* string */,
    version /* string(semver) */,
    main /* string(path) */,
    keywords /* string[] */,
    homepage /* string(url) */,
    description /* string */,
    "repository": {
        type /* string */,
        url /* string */
    },
    "author": {
        name /* string */,
        email /* string(email) */,
        url /* string(url) */
    },
    "engines": {
        /* <engineName> : <semver>, ... */
    },
    "bugs": {
        url /* string(url) */
    },
    "maintainers": [
        { email, name } /* , ... */
    ],
    /* <misc>, ... */
}
```

### getPackage.lite

To get abbreviated meta info of given package.

### getPackgeNames

To get package names by owner, author, etc.

*   __options.author__ *string* OPTINOAL
*   __options.owner__ *string* OPTINOAL

What returned will be an array of package names.

### getStarCount

To get number of stars of a specified package.

##  References

*   [📦 📒 the npm registry public tracker](https://github.com/npm/registry)