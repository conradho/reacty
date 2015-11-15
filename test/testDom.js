/*eslint-env node*/


import { jsdom } from 'jsdom'

export function setupTestDom (markup) {
  // if (typeof document !== 'undefined') return;
  global.document = jsdom(markup || '');
  global.window = document.parentWindow;
  global.navigator = {
    userAgent: 'node.js'
  };
} // no semicolon!
