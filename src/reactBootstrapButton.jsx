/*eslint-env commonjs */

import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class ManyButtons extends React.Component {
  render () {
    return (
      <ButtonToolbar>
        {/* Standard button */}
        <Button bsSize='small'>Default</Button>

        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
        <Button bsStyle='primary' bsSize='small'>Primary</Button>

        {/* Indicates a successful or positive action */}
        <Button bsStyle='success' bsSize='small'>Success</Button>

        {/* Contextual button for informational alert messages */}
        <Button bsStyle='info' bsSize='small'>Info</Button>

        {/* Indicates caution should be taken with this action */}
        <Button bsStyle='warning' bsSize='small'>Warning</Button>

        {/* Indicates a dangerous or potentially negative action */}
        <Button bsStyle='danger' bsSize='small'>Danger</Button>

        {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
        <Button bsStyle='link' bsSize='small'>Link</Button>
      </ButtonToolbar>
    );
  }
}
export { ManyButtons };
