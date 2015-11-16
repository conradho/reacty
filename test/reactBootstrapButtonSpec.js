/*eslint-env mocha */

import { expect } from 'chai'

import { setupTestDom } from './testDom.js'
setupTestDom('<html><body><div id="buttony"></div></body></html>');

import '../src/reactBootstrapButton.jsx'

describe('react-bootstrap button', function() {
  'use strict';
  it('should create 7 buttons', function () {
    expect(document.getElementsByTagName('button').length).to.equal(7);
  });
});
