/*eslint-env mocha */

import { expect } from 'chai'

import { setupTestDom } from './testDom.js'

import { render } from 'react-dom';
import { buttonsInstance } from '../src/reactBootstrapButton.jsx'

describe('react-bootstrap button', function() {
  'use strict';
  it('should be able to inject into dom', function() {
    // console.log(document);
    setupTestDom('<html><body><div id="hi"></div></body></html>');
    expect(document.getElementById("hi")).not.to.be.null;
  });
  it('should create 7 buttons', function () {
    setupTestDom('<html><body><div id="buttony"></div></body></html>');
    expect(document.getElementById('buttony')).not.to.be.null;
    render(
      buttonsInstance,
      document.getElementById('buttony')
    );

    expect(document.getElementsByTagName('button').length).to.equal(7);
  });
});
