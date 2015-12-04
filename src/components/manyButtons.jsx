import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import R from 'ramda';

class ManyButtons extends React.Component {

  constructor (props) {
    super(props);
    // or just this.state = {}
    this.state = {activeButton: null};
    // need this because es6 classes do not auto-bind
    // and onActiveChange calls this.setState
    this.boundOnActiveChange = R.bind(this.onActiveChange, this);
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
      <ButtonToolbar>
        {R.map(
          (script) => {
            return (
              <Button
                key={script.id}
                bsSize={this.props.buttonSize}
                bsStyle={script.style}
                // bind additional argument script.id as the key
                // and return function instead of calling it
                onClick={
                  R.partial(this.boundOnActiveChange, [ script.id ])
                }
                active={this.state.activeButton === script.id}
                >
                {script.name}
              </Button>
            );
          },
          this.props.scripts
        )}
      </ButtonToolbar>
    );
  }
}

export default ManyButtons;
