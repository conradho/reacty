/*eslint-env mocha */

import { expect } from 'chai'
import { setupTestDom } from './testDom.js'
setupTestDom('<html><body><div id="hi"></div></body></html>');

describe('quickcheck for jsdom/setupTestDom', function() {
  'use strict';
  it('testing abc', function () {
    expect('hello').to.equal('hello');
  });
  it('should be able to inject into dom', function() {
    console.log(document);
    expect(document.getElementsByTagName('div').length).to.equal(1);
    expect(document.getElementById("hi")).not.to.be.null;
  });
});
