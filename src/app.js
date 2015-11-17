import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { buttonsInstance } from './reactBootstrapButton.jsx';
import { HelloWorld, CommentBox } from './reactComponents.jsx';

ReactDOM.render(
  buttonsInstance,
  document.getElementById('buttony')
);

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('example')
);

var data = [
  {author: 'conrad', text: 'msg from conrad'},
  {author: 'jordan', text: 'msg from jordan'}
];
ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('commentBoxy')
);
// alert('react should have rendered');

function abc () {
  return 1;
}
abc();
abc();
abc();
function nop () {
  return;
}
var abc = [ 1, 2, 3 ];
