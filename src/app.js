import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import ManyButtons from './components/manyButtons.jsx';

const scripts = [
  {'id': 1, 'name': 'scripty1', 'style': 'default'},
  {'id': 2, 'name': 'scripty2', 'style': 'primary'},
  {'id': 3, 'name': 'touch me', 'style': 'danger'},
];
ReactDOM.render(
  <ManyButtons buttonSize='xsmall' scripts={scripts}/>,
  document.getElementsByClassName('sticky-footer--footer')[0]
);

// alert('react should have finished rendering');

const x = document.getElementsByClassName('console-iframe')[0].contentWindow.Anywhere.terminal;
x.io.sendString('ls\n');
