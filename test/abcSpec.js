/*eslint-env mocha */

import { expect } from 'chai'
import { setupTestDom } from './testDom.js'
import { unmountComponentAtNode } from 'react-dom'

describe('quickcheck that jsdom/setupTestDom works as expected', function() {
  'use strict';
  afterEach(function(done) {
    unmountComponentAtNode(document.body); // Assuming mounted to document.body
    document.body.innerHTML = "";                // Just to be sure :-P
    setTimeout(done); //push callback to next tick of event loop to be more stable
  });
  it('should be able to inject into dom', function() {
    // console.log(document);
    setupTestDom('<html><body><div id="hi"></div></body></html>');
    expect(document.getElementsByTagName('div').length).to.equal(1);
    expect(document.getElementById("hi")).not.to.be.null;
  });
});
