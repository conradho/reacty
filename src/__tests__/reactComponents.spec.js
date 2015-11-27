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


describe('ManyButtons react component', () => {
  it('can convert into a react-element', () => {
    expect(TestUtils.isElement(<ManyButtons />)).toBe(true);
  });

  const mockScripts = [
    {'id': 1, 'name': 'scripty1', 'style': 'default'},
    {'id': 2, 'name': 'scripty2', 'style': 'primary'},
    {'id': 3, 'name': 'touch me', 'style': 'danger'},
  ];

  describe('shallow render', () => {
    const reactManyButtonsElement = <ManyButtons scripts={mockScripts}/>;
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(reactManyButtonsElement);
    const result = shallowRenderer.getRenderOutput();

    it('is a bootstrap ButtonToolbar', () => {
      expect(result.type).toBe(ButtonToolbar);
    });
    it('has the correct number of children', () => {
      expect(result.props.children.length).toBe(mockScripts.length);
    });
    it('has children with the correct type', () => {
      R.map((child) => {
        // expect(TestUtils.isElementOfType(child, SingleButton)).toBe(true);
        expect(child.type).toBe(SingleButton);
      })(result.props.children);
    });
    it('has child with the correct properties', () => {
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

  const buttons = TestUtils.renderIntoDocument(
    <ManyButtons scripts={mockScripts}/>
  );
  describe('deeper render', () => {
    it('turns into a composite component if given correct props', () => {
      expect(TestUtils.isCompositeComponent(buttons)).toBe(true);
    });

    it('has the correct number of buttons', () => {
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
  });

  describe('clicking', () => {
    const listOfSingleButtonComponents = TestUtils.scryRenderedComponentsWithType(
      buttons, SingleButton
    );
    const listOfBootstrapButtonComponents = TestUtils.scryRenderedComponentsWithType(
      buttons, Button
    );
    it('instantiates with nothing active', () => {
      for (let button of listOfSingleButtonComponents)
        expect(button.state.isActive).toBe(false);
      for (let button of listOfBootstrapButtonComponents)
        expect(button.props.active).toBe(false);
    });

    it('switches state when clicked', () => {
      const listOfButtonDomComponents = TestUtils.scryRenderedDOMComponentsWithTag(
          buttons, 'button'
      );
      const secondButton = listOfButtonDomComponents[1];
      // console.log(`before ${buttons.state.activeButton}`);
      TestUtils.Simulate.click(secondButton);
      // console.log(`after ${buttons.state.activeButton}`);
      expect(listOfSingleButtonComponents[1].state.isActive).toBe(true);
      expect(listOfBootstrapButtonComponents[1].props.active).toBe(true);
    });
  });
});

