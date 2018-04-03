#   npm-registry-api Change Log

Notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning 2.0.0](http://semver.org/).

##  [0.1.2] - Apr 4th, 2018

*   Fixed the bug in __npm-registry-rest/getPackage__ that exception 'Not Found' thrown on scoped package name.
*   Fixed the bug in __npm-registry-rest/getStarCount__ that exception 'Not Found' thrown on scoped package name.

##  [0.1.1] - Mar 30th, 2018

*   Enhance __npm-registry-rest/getDownoadCount__ to deal with unexisting package name.

##  [0.1.0] - Mar 29th, 2018

*   __npm-registry-rest/getStarCount__ added.
*   __npm-registry-rest/getPackage__ updated to throw an Error with message `Not Found` when the prefered package does not exist.

##  [0.0.2] - Mar 25th, 2018

*   [__npm-registry-rest/getPackageNames__](./README.md#getpackagenames) added.

##	[0.0.1] - 2018-3-11

Released.

---
This CHANGELOG.md follows [*Keep a CHANGELOG*](http://keepachangelog.com/).
