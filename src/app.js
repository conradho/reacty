
import React from 'react';
import { render } from 'react-dom';
import { buttonsInstance } from './reactBootstrapButton.jsx'
import { CommentBox } from './reactComponents.jsx'

render(
  buttonsInstance,
  document.getElementById('buttony')
);

render(
  <CommentBox />,
  document.getElementById('commentBoxy')
);

// alert('react should have rendered');
