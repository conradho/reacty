# reacty
a single page react webapp

setup
=====
- make sure you are running updated node
    - `npm install -g nvm`
    - then after sourcing bash again, nvm install 5.0.0
- install local packages with `npm install`
- `gem install --user-install sass bourbon neat`
- cd stylesheets/vendor && bourbon install && neat install
- download a `bootstrap.min.css` from bootstrap
- `nvm run build` to build bundle.js and bundle.css each change
    - or `nvm run js`, `nvm run css` to build individually
- `nvm test` or `nvm run test` to run tests


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

- use jest for unittests because your can parallelize
    - but figure out when we can mock more of `node_modules/*`
    - see if they ever solve the import hoisting = cannot dontMock issue
- jest preprocessor for babel requires .babelrc with es2015 and react presets
- maybe still use mocha/something else for integrationy tests?
    - `npm test` to run both? vs `npm run unittest` etc will run only jest
- for a component
    - test it has xyz in header after rendering
    - test it has incorp'd xyz component?
    - test on click etc behavior
- react reading
    - https://speakerdeck.com/vjeux/react-css-in-js
    - https://github.com/enaqx/awesome-react
    - http://aeflash.com/2015-02/react-tips-and-best-practices.html
- [hterm reference]( https://github.com/macton/hterm/blob/master/src/hterm_terminal_io.js)

todo
====
- maybe at some pt move some of the jest unmockedModulePathPatterns stuff into individual specs (eg: bootstrap)
- zoom in / zoom out, detailed view with edit/trash etc vs just mobile view with clickable
- local storage of what was previously selected?
