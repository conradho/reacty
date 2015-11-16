/*eslint-env node*/


import { jsdom } from 'jsdom'
import { expect } from 'chai'

export function setupTestDom (markup) {
  // commented this out because otherwise setupTestDom will not run after the first test imports it
  // but then won't work in browser tests. see http://www.asbjornenge.com/wwc/testing_react_components.html
  // if (typeof document !== 'undefined') return;
  global.document = jsdom(markup || '');
  global.window = document.defaultView;
  // jsdom chgd it's api once and window was just silently set to undefined
  expect(window).not.to.be.undefined;
  global.navigator = {
    userAgent: 'node.js'
  };
} // no semicolon!
