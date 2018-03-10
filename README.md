# Modern JS Project Template
>Created originally by [Lucas Werner](https://www.linkedin.com/in/lucas-werner/).
Template project that contains a ready-to-go JS project.
This project is mainly focused on the use of JS latests technologies, that sometimes is difficult to setup or takes a long.
## Installation
>You can use either [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/) to install all the packages
```javascript
yarn
```
```javascript
npm install
```
## Project structure
>The initial structure will give you something like:
```
PROJECT

│   .gitignore
│   gulpfile.js
│   gulp.constants.js
│   README.md
│   nightwatch.json
│   package.json
│   tslint.json
│   tsconfig.json
│
└───public
│   │   index.html
│   │
│   └───test
│   │    │   index.js
│   │    └───functional
│   │    │    └───src
│   │    │        │ main.js
│   │    └───js
│   │        │  main.spec.js
│   │
└───ts
    │   index.ts
    └───class
      │   developer.ts
      │   person.ts
```
## Use of the template
>To start working with the template, just **install the packages and execute**
```javascript
gulp
```
>This will give you a **ready to compile environment**. So you can start coding your own classes and see the final results instantly.

>To execute **functional tests**
```javascript
yarn run functional-test || npm run functional-test
```
>To execute **unit tests**
```javascript
yarn run test || npm run test
```
## Technologies
>In order to use the latests JS technologies, here is the list that contains all the selected technologies for this purpose:
 1. [Gulp](https://gulpjs.com/)
 2. [TypeScript](https://www.typescriptlang.org/)
 3. [TSLint](https://palantir.github.io/tslint/) ( AirBnB configuration )
 4. [Browserify](http://browserify.org/)
 5. [Babel](https://babeljs.io/repl/)
 6. [Mocha](https://mochajs.org/) ( Unit tests )
 7. [Nightwatch](http://nightwatchjs.org/) ( Functional tests )
## About the project
>This is an open source project. The final goal is to have a [Yeoman](http://yeoman.io/) package available everywhere.
So, as usual, feel free to collaborate with it.
## TODOs
>This is an **outline** version. So, a lot of changes and improvements are needed. Among all of them, some of them have a higher priority:
1. Add a gulp webserver to reload the page once a change is detected.
2. Include gulp SASS compilation within the default task.
3. Create a PRODUCTION compilation.
4. Include minify for JS files, CSS files and HTML files.
5. Include TypeScript definition files.
6. Include Typescript sourcemaps.
## About Me
>My name is **Lucas Werner** and I'm a **Software Engineer**, working in [Oracle Cloud](https://cloud.oracle.com/), based in Prague. I'm focused on JS technologies (frontend and backend) and I'm passionate about AI and all its applications.
Feel free to [contact me](https://www.linkedin.com/in/lucas-werner/).
