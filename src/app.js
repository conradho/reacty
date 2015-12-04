import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import ConsoleButtons from './components/consoleButtons.jsx';

const shortcuts = [
  {'id': 1, 'name': 'Navigation'},
  {'id': 2, 'name': 'Keypresses'},
  {'id': 3, 'name': 'Common Commands'},
  {'id': 4, 'name': 'Start "apps"'},
  {'id': 5, 'name': 'Custom'},
];

ReactDOM.render(
  <ConsoleButtons shortcuts={shortcuts}/>,
  document.getElementsByClassName('sticky-footer--footer')[0]
);
// alert('react should have finished rendering');

const x = document.getElementsByClassName('console-iframe')[0].contentWindow.Anywhere.terminal;
x.io.sendString('ls\n');
