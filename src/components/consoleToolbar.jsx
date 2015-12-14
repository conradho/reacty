
import React from 'react';
import R from 'ramda';



class ConsoleToolbar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {currentMenu: 0};
    // es6 does not auto-bind
    this.handleMenuClick = R.bind(this.handleMenuClick, this);
    this.handleClick = R.bind(this.handleClick, this);
  }

  handleMenuClick (keypress) {
    this.setState({
      currentMenu: (this.state.currentMenu + 1) % this.props.toolbarItems.length
    });
  }

  handleClick (keypress) {
    this.props.sendKey(keypress);
  }

  render () {
    return (
      <div>
        <button
          className="console-toolbar--button console-toolbar--button__important"
          onClick={this.handleMenuClick}
          >
          {this.props.toolbarItems[this.state.currentMenu].menuName}
        </button>
        {R.addIndex(R.map)(
          (menuItem, idx) => {
            return (
              <button
                key={idx}
                className="console-toolbar--button console-toolbar--button__normal"
                onClick={R.partial(this.handleClick, [menuItem[1]])}
                >
                {menuItem[0]}
              </button>
            );
          },
          R.toPairs(this.props.toolbarItems[this.state.currentMenu].menuItems)
        )}
      </div>
    );
  }
}

export default ConsoleToolbar;
