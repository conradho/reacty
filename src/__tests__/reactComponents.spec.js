/*eslint-env jest */


import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Button, ButtonToolbar } from 'react-bootstrap';
import R from 'ramda';

// import { buttonsInstance } from '../reactBootstrapButton.jsx';
jest.dontMock('../reactComponents.jsx');
const reactComponents = require('../reactComponents.jsx');
const ManyButtons = reactComponents.ManyButtons;
const SingleButton = reactComponents.SingleButton;

// const Button = reactBootstrap.Button;

describe('basic stuff', () => {
  it('can become an element', () => {
    expect(TestUtils.isElement(<ManyButtons />)).toBe(true);
  });
});

describe('ManyButtons react component', () => {
  const mockScripts = [
    {'id': 1, 'name': 'scripty1', 'style': 'default'},
    {'id': 2, 'name': 'scripty2', 'style': 'primary'},
    {'id': 3, 'name': 'touch me', 'style': 'danger'},
  ];

  const buttons = TestUtils.renderIntoDocument(
    <ManyButtons scripts={mockScripts}/>
  );

  it('can render into a composite component when passed correct props', () => {
    expect(TestUtils.isCompositeComponent(buttons)).toBe(true);
  });

  it('can render into the correct number of buttons', () => {
    const listOfButtonDomComponents = TestUtils.scryRenderedDOMComponentsWithTag(
        buttons, 'button'
    );
    expect(listOfButtonDomComponents.length).toBe(mockScripts.length);

    // can call standard js functions (eg: outerHTML) on dom components
    expect(TestUtils.isDOMComponent(listOfButtonDomComponents[0])).toBe(true);
    expect(listOfButtonDomComponents[1].textContent).toBe('scripty2');

    // jasmine.addMatchers({    // eslint-disable-line no-undef
    //   toHaveClass: () => {
    //     return { compare: (actual, expectedClass) => {
    //         // if you don't unmock a shitload of things (eg: unmock node_packages/j* dont ask me why)
    //         // you actually need to look at .prop instead, but it is frowned upon...
    //         // instead just look at the react component instead of the rendered dom element
    //         return {pass: actual.className.indexOf(expectedClass) > -1}
    //     }}
    //   },
    // });
    // expect(singleButton).toHaveClass('active');
  });

  it('can change isActive state of SingleButton when clicked', () => {
    const listOfSingleButtonComponents = TestUtils.scryRenderedComponentsWithType(
      buttons, SingleButton
    );
    for (let button of listOfSingleButtonComponents) {
      expect(button.state.isActive).toBe(false);
    }

    const listOfBootstrapButtonComponents = TestUtils.scryRenderedComponentsWithType(
      buttons, Button
    );
    for (let button of listOfBootstrapButtonComponents) {
      expect(button.props.active).toBe(false);
    }

    // TestUtils.Simulate.click(singleButton);
    // check that the single clicked button now is active
  });
});

describe('ManyButtons react component', () => {
  const mockScripts = [
    {'id': 1, 'name': 'scripty1', 'style': 'default'},
    {'id': 2, 'name': 'scripty2', 'style': 'primary'},
    {'id': 3, 'name': 'touch me', 'style': 'danger'},
  ];
  it('first cut at shallow render', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<ManyButtons scripts={mockScripts}/>);
    const result = shallowRenderer.getRenderOutput();

    expect(result.type).toBe(ButtonToolbar);
    expect(result.props.children.length).toBe(mockScripts.length);

    R.map((child) => {
      // expect(TestUtils.isElementOfType(child, SingleButton)).toBe(true);
      expect(child.type).toBe(SingleButton);
    })(result.props.children);

    expect(result.props.children[1]).toEqual(
      <SingleButton key='2' name='scripty2' buttonStyle='primary'/>
    );
  });
});

