# reacty
a single page react webapp

setup
=====
- install local packages with `npm install`
- `npm install -g browserify karma-cli`
- download a `bootstrap.min.css` from bootstrap

when a js file has changed
==========================
- `browserify -t [ babelify --presets [ react es2015 ] ] src/main.js -o bundle.js`

notes
=====
- doing the browserify way ==> remember to take out the `<script type="text/babel">`
- do not need to do the babel conversion stuff because browserify converts for you


Behind the scenes
=================
- initial setup
    - `npm install -g browserify`
    - `npm install --save react react-dom babelify babel-preset-react babel-preset-es2015 react-bootstrap`
- tests setup
    - `npm install -g karma-cli`
    - `npm install karma mocha karma-mocha chai karma-chai`
    - karma init
    - karma start
