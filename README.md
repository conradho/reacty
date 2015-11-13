# reacty
a single page react webapp

initial setup
=============
- `npm install -g browserify`
- `npm install --save react react-dom babelify babel-preset-react babel-preset-es2015 react-bootstrap`

- download a `bootstrap.min.css` from bootstrap

when a js file has changed
==========================
- `browserify -t [ babelify --presets [ react es2015 ] ] src/main.js -o bundle.js`

note
====
- doing the browserify way ==> remember to take out the `<script type="text/babel">`
- do not need to do the babel conversion stuff because browserify converts for you

test setup
==========
- `npm install -g karma karma-jasmine`
- karma init
- karma start
