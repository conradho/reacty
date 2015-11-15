/*eslint-env mocha */

import { setupTestDom } from './testDom.js'
setupTestDom('<html><body></body></html>');
// console.log(document);

describe('hilo', function() {
  'use strict';
  it('should fail', function() {
    expect(1).to.equal(2);
  });
});
