# reacty
a single page react webapp

setup
=====
- install local packages with `npm install`
- `npm install -g browserify karma-cli`
- download a `bootstrap.min.css` from bootstrap
- run a `node run build`

when a js file has changed
==========================
- `node run build` (see package.json for details on what it does)


Behind the scenes
=================
- initial setup
    - `npm install -g browserify`
    - `npm install --save react react-dom babelify babel-preset-react babel-preset-es2015 react-bootstrap`
- then `npm install react-boostrap`
- tests setup
    - `npm install -g karma-cli`
    - `npm install karma mocha karma-mocha chai karma-chai`
    - karma init
    - karma start

notes
=====
- doing the browserify way ==> remember to take out the `<script type="text/babel">`
- do not need to do the babel conversion stuff because browserify converts for you
