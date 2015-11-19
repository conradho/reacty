/*eslint-env jest */

jest.dontMock('./jestDontMockExample.js');

// this doesn't work
import hiModule, { hiConst, hiObj, hiFunction, hiClass } from './jestDontMockExample.js';

describe('Jest dontMock does not work with ES6 imports', () => {
  // see here for details https://github.com/babel/babel-jest/issues/16
  // import gets hoisted to the top -> jest.dontMock doesn't work
  it('does not mock out constants', () => {
    expect(hiConst).toEqual('hiConst');
  });
  it('does not mock out objects', () => {
    expect(hiObj).toEqual({'a': 'hi', 'b': 'hi'});
  });
  it('does mock out functions', () => {
    expect(hiFunction._isMockFunction).toBe(true);
    expect(hiFunction()).toBe(undefined);
  });
  it('does mock out default functions', () => {
    expect(hiModule.default._isMockFunction).toBe(true);
    expect(hiModule.default()).toBe(undefined);
  });
  it('does mock out classes in a spec-ed out way', () => {
    expect(hiClass._isMockFunction).toBe(true);
    expect(hiClass.hiFunction).toBe(undefined);
    const hiInstance = new hiClass;
    expect(hiInstance.hiClassFunction._isMockFunction).toBe(true);
  });
});


const es6Module = require('./jestDontMockExample.js');

describe('Jest dontMock barely works with requirejs', () => {
  it('does not mock out functions', () => {
    expect(es6Module.hiFunction()).toBe('hiFunction');
  });
  it('does not mock out classes', () => {
    const hiInstance = new es6Module.hiClass;
    expect(hiInstance.hiClassFunction()).toBe('hiFunction within hiClass');
  });
  it('need to use module.default to access default export', () => {
    expect(es6Module.default()).toBe('hiDefaultFunction');
  });
});
