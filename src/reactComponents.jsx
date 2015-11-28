import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import R from 'ramda';

class SingleButton extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <Button
        active={this.props.isActive}
        bsStyle={this.props.buttonStyle}
        onClick={this.props.onActiveChange}
        >
        {this.props.name}
      </Button>
    );
  }
}

class ManyButtons extends React.Component {
  constructor (props) {
    super(props);
    this.state = {activeButton: null};
    // need this because es6 classes do not auto-bind
    // and onActiveChange calls this.setState
    this.boundedOnActiveChange = R.bind(this.onActiveChange, this);
  }
  onActiveChange (key) {
    // console.log(`clicked ${key}`);
    // console.log(`old active ${this.state.activeButton}`);
    this.setState({
      activeButton: (key === this.state.activeButton) ? null : key,
    });
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
                // bind additional argument script.id as the key
                // and return function instead of calling it
                onActiveChange={
                  R.partial(this.boundedOnActiveChange, [ script.id ])
                }
                isActive={this.state.activeButton === script.id}
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
