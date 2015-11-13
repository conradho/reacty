/*eslint-env commonjs */

import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
const buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button bsSize="small">Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary" bsSize="small">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success" bsSize="small">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info" bsSize="small">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning" bsSize="small">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger" bsSize="small">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link" bsSize="small">Link</Button>
  </ButtonToolbar>
);
ReactDOM.render(
  buttonsInstance,
  document.getElementById('buttony')
);
