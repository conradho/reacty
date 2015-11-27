import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import R from 'ramda';

class SingleButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isActive: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState({isActive: !this.state.isActive});
    this.props.onActiveChange();
  }
  render () {
    return (
      <Button
        active={this.state.isActive}
        bsStyle={this.props.buttonStyle}
        onClick={this.handleClick}
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
    this.onActiveChange = this.onActiveChange.bind(this);
  }
  onActiveChange (key) {
    console.log(`clicked ${key}`);
    this.setState({activeButton: key});
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
                onActiveChange={this.onActiveChange.bind(this, script.id)}
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
