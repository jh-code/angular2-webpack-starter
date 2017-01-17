# Angular2 Webpack Starter
[![Build Status](https://img.shields.io/travis/jh-code/angular2-webpack-starter.svg)](https://travis-ci.org/jh-code/angular2-webpack-starter)
[![Dependency Status](https://img.shields.io/david/jh-code/angular2-webpack-starter.svg)](https://david-dm.org/jh-code/angular2-webpack-starter)
[![devDependency Status](https://img.shields.io/david/dev/jh-code/angular2-webpack-starter.svg)](https://david-dm.org/jh-code/angular2-webpack-starter?type=dev)

This is a basic Angular2 Webpack starter app. It features Ahead-of-Time compilation with tree-shaking for production and a development server without all the extra junk.

It will bundle your entire app into a single HTML file with inline CSS and Javascript. Currently the build size is 1.5MB before gzip.

### Requirements

[Compass](http://compass-style.org) is required for development and production for stylesheets. This is just my preference. Feel free to modify it to your liking.

### Installation

Clone the project

    $ git clone https://github.com/jh-code/angular2-starter-template.git

Install dependencies

    $ cd angular2-starter-template
    $ yarn (or npm install)

### Development

    $ npm start

Then navigate to http://localhost:4200 in the browser.

### AoT/Production

    $ npm run build

To view the bundle in the browser, run:

    $ npm run serve

This will open your browser to http://localhost:3000 with the result of the build.

### Features

- Development server with lite-server and BrowserSync
- AoT compilation with tree-shaking and inline CSS/JS, minification
- Bootstrap 4 starter template with ng-bootstrap
- TSLint, Codelyzer
- Routing

### Todo

- Hot module replacement
- Forms with examples
- Data/API services
