# grunt-simple-karma
Basic configurations for bootstrapping a Project with Karma + Jasmine + Grunt.

> Grunt plugin for [Karma](https://github.com/karma-runner/karma)

This current version uses `karma@0.13.x`. For using older versions see the
old releases of grunt-karma.

## Pre-requisites
* Grunt & Grunt-cli installed and working on command line.

## Getting Started
install dependencies for this project with the following command:

```bash
$ npm install
```

Install Bower dependencies

```bash
$ bower install
```

## Run tests

```bash
grunt test
```

## Example output

```
$ grunt test
Running "karma:single" (karma) task
01 11 2015 12:02:31.300:INFO [karma]: Karma v0.13.14 server started at http://localhost:9876/
01 11 2015 12:02:31.309:INFO [launcher]: Starting browser Chrome
01 11 2015 12:02:32.923:INFO [Chrome 46.0.2490 (Mac OS X 10.10.5)]: Connected on socket 75b1EhC4r15eVNViAAAA with id 1964298
Chrome 46.0.2490 (Mac OS X 10.10.5) Simple Test: a is infact 'hello world!' and b to be not null FAILED
	Error: expected 'hello world!' to equal 'hello world'
	    at Assertion.assert (/poc/simple-karma/node_modules/expect.js/index.js:96:13)
	    at Assertion.be.Assertion.equal (/Users/katarina/poc/simple-karma/node_modules/expect.js/index.js:216:10)
	    at Assertion.(anonymous function) [as be] (/poc/simple-karma/node_modules/expect.js/index.js:69:24)
	    at Context.<anonymous> (/poc/simple-karma/test/basicspec.js:5:22)
Chrome 46.0.2490 (Mac OS X 10.10.5): Executed 1 of 1 (1 FAILED) ERROR (0.022 secs / 0.006 secs)
Warning: Task "karma:single" failed. Use --force to continue.
Aborted due to warnings.
```