
import { render } from 'react-dom';
import { buttonsInstance } from './reactBootstrapButton.jsx'

render(
  buttonsInstance,
  document.getElementById('buttony')
);

alert('react should have rendered');
