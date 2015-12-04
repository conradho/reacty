
import React from 'react';
import R from 'ramda';



class ConsoleButtons extends React.Component {

  constructor (props) {
    super(props);
    this.state = {}
  }

  handleClick (keypress) {
    console.log('hi' + keypress);
    const x = document.getElementsByClassName('console-iframe')[0].contentWindow.Anywhere.terminal;
    x.io.sendString('ls\n');
  }

  render () {
    return (
      <div>
        {R.map(
          (script) => {
            return (
              <button
                key={script.id}
                onClick={
                  R.partial(this.handleClick, [ script.id ])
                }
                >
                {script.name}
              </button>
            );
          },
          this.props.shortcuts
        )}
      </div>
    );
  }
}

export default ConsoleButtons;
