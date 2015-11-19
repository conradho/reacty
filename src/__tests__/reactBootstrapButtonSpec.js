/*eslint-env jest */


import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// import { buttonsInstance } from '../reactBootstrapButton.jsx';
jest.dontMock('../reactBootstrapButton.jsx');
const ManyButtons = require('../reactBootstrapButton.jsx').ManyButtons;

describe('react-bootstrap button', () => {
  it('should create 7 buttons', () => {
    expect(TestUtils.isElement(<ManyButtons />)).toBe(true);

    const buttons = TestUtils.renderIntoDocument(<ManyButtons />);
    expect(TestUtils.isCompositeComponent(buttons)).toBe(true);

    const listOfButtonDomComponents = TestUtils.scryRenderedDOMComponentsWithTag(
        buttons, 'Button'
    );
    expect(listOfButtonDomComponents.length).toBe(7);
    expect(TestUtils.isDOMComponent(listOfButtonDomComponents[0])).toBe(true);
    // can call standard js functions on these dom components
    expect(listOfButtonDomComponents[1].textContent).toBe('Primary');

    // then can look at what is actually rendered into actual dom
    // use this to check state / property type stuff
    // const buttonsNode = ReactDOM.findDOMNode(buttons);
    // console.log(buttonsNode.innerHTML);
  });
});

