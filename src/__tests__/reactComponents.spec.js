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

  it('can turn on isActive state of SingleButton when clicked', () => {
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

    const listOfButtonDomComponents = TestUtils.scryRenderedDOMComponentsWithTag(
        buttons, 'button'
    );
    const secondButton = listOfButtonDomComponents[1];

    console.log(`before ${buttons.state.activeButton}`);
    TestUtils.Simulate.click(secondButton);
    console.log(`after ${buttons.state.activeButton}`);
    expect(listOfSingleButtonComponents[1].state.isActive).toBe(true);
    expect(listOfBootstrapButtonComponents[1].props.active).toBe(true);
  });
});

describe('ManyButtons react component', () => {
  const mockScripts = [
    {'id': 1, 'name': 'scripty1', 'style': 'default'},
    {'id': 2, 'name': 'scripty2', 'style': 'primary'},
    {'id': 3, 'name': 'touch me', 'style': 'danger'},
  ];
  it('can test with shallow render', () => {
    const reactManyButtonsElement = <ManyButtons scripts={mockScripts}/>;
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(reactManyButtonsElement);
    const result = shallowRenderer.getRenderOutput();

    expect(result.type).toBe(ButtonToolbar);
    expect(result.props.children.length).toBe(mockScripts.length);

    R.map((child) => {
      // expect(TestUtils.isElementOfType(child, SingleButton)).toBe(true);
      expect(child.type).toBe(SingleButton);
    })(result.props.children);

    const secondChild = result.props.children[1];
    expect(secondChild).toEqual(
      <SingleButton
        key='2'
        name='scripty2'
        buttonStyle='primary'
        // on one hand, this doesn't really test anything
        // on the other hand, this is never true unless you pass it in
        onActiveChange={secondChild.props.onActiveChange}
      />
    );
  });
});

