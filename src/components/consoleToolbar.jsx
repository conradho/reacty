
import React from 'react';
import R from 'ramda';



class ConsoleToolbar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {currentMenu: 0};
  }

  handleClick (keypress) {
    console.log('hi' + keypress);
    const x = document.getElementsByClassName('console-iframe')[0].contentWindow.Anywhere.terminal;
    x.io.sendString('ls\n');
  }

  render () {
    return (
      <div>
        <button
          className="console-toolbar--button console-toolbar--button__important"
          >
          {this.props.toolbarItems[0].menuName}
        </button>
        {R.map(
          (menuItem) => {
            return (
              <button
                className="console-toolbar--button console-toolbar--button__normal"
                >
                {menuItem[0]}
              </button>
            );
          },
          R.toPairs(this.props.toolbarItems[0].menuItems)
        )}
      </div>
    );
  }
}

export default ConsoleToolbar;
