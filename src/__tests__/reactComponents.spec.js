/*eslint-env jest */


import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// import { buttonsInstance } from '../reactBootstrapButton.jsx';
jest.dontMock('../reactComponents.jsx');
const ManyButtons = require('../reactComponents.jsx').ManyButtons;

describe('ManyButtons react component', () => {

  const mockScripts = [
    {'id': 1, 'name': 'scripty1', 'style': 'default'},
    {'id': 2, 'name': 'scripty2', 'style': 'primary'},
    {'id': 3, 'name': 'touch me', 'style': 'danger'},
  ];

  it('can become an element', () => {
    expect(TestUtils.isElement(<ManyButtons />)).toBe(true);
  });

  it('can render into a composite component when passed correct props', () => {
    const buttons = TestUtils.renderIntoDocument(
      <ManyButtons scripts={mockScripts}/>
    );
    expect(TestUtils.isCompositeComponent(buttons)).toBe(true);
  });

  it('can render into the correct number of buttons', () => {
    const buttons = TestUtils.renderIntoDocument(
      <ManyButtons scripts={mockScripts}/>
    );
    const listOfButtonDomComponents = TestUtils.scryRenderedDOMComponentsWithTag(
        buttons, 'Button'
    );
    expect(listOfButtonDomComponents.length).toBe(3);
    expect(TestUtils.isDOMComponent(listOfButtonDomComponents[0])).toBe(true);
    // can call standard js functions on these dom components
    expect(listOfButtonDomComponents[1].textContent).toBe('scripty2');

    // then can look at what is actually rendered into actual dom
    // use this to check state / property type stuff
    // const buttonsNode = ReactDOM.findDOMNode(buttons);
    // console.log(buttonsNode.innerHTML);
  });
});

