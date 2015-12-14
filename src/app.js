import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import ConsoleToolbar from './components/consoleToolbar.jsx';

const toolbarItems = [
  {
    'menuName': 'Navigation',
    'menuItems': {
      'list (ls)': 'ls',
      'chgdir (cd)': 'cd',
    }
  },
  {
    'menuName': 'Keypresses',
    'menuItems': {
      'ctrl-c': 'c',
      'ctrl': '',
      'UMLAUT': '',
    }
  },
  {
    'menuName': 'Programs',
    'menuItems': {
      'ipython': 'ipython',
      'vim': 'vim',
    }
  },
  {
    'menuName': 'Custom',
    'menuItems': {
      'whoami': 'whoami',
    }
  },
];

function sendKeyToConsole(keypress) {
  console.log('pressed: ' + keypress);
  const iframeWindow = document.getElementsByClassName('console-iframe')[0].contentWindow;
  iframeWindow.Anywhere.terminal.io.sendString(keypress);
}

ReactDOM.render(
  <ConsoleToolbar toolbarItems={toolbarItems} sendKey={sendKeyToConsole}/>,
  document.getElementsByClassName('console-toolbar')[0]
);
// alert('react should have finished rendering');

