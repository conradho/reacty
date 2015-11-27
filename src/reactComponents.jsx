import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import R from 'ramda';

class SingleButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isActive: false};
  }
  render () {
    return (
      <Button
        active={this.state.isActive}
        bsStyle={this.props.buttonStyle}
        >
        {this.props.name}
      </Button>
    );
  }
}

class ManyButtons extends React.Component {
  constructor (props) {
    super(props);
    this.state = {activeButton: 1};
  }
  render () {
    return (
      <ButtonToolbar bsSize='small'>
        {R.map(
          (script) => {
            return (
              <SingleButton
                key={script.id}
                name={script.name}
                buttonStyle={script.style}
              />
            );
          },
          this.props.scripts
        )}
      </ButtonToolbar>
    );
  }
}
export { SingleButton, ManyButtons };
