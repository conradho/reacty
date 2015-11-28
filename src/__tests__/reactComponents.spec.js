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


describe('ManyButtons react component', () => {
  it('can convert into a react-element', () => {
    expect(TestUtils.isElement(<ManyButtons />)).toBe(true);
  });

  const mockScripts = [
    {'id': 'idy1', 'name': 'scripty1', 'style': 'default'},
    {'id': 'idy2', 'name': 'scripty2', 'style': 'primary'},
    {'id': 'idy3', 'name': 'touch me', 'style': 'danger'},
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
        // expect(TestUtils.isElementOfType(child, Button)).toBe(true);
        expect(child.type).toBe(Button);
      })(result.props.children);
    });
    it('has child with the correct properties', () => {
      const secondChild = result.props.children[1];
      expect(secondChild).toEqual(
        <Button
          key='idy2'
          bsStyle='primary'
          // on one hand, this doesn't really test anything
          // on the other hand, this is never true unless you pass it in
          onClick={secondChild.props.onClick}
          active={false}
          >
          scripty2
        </Button>
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
    const listOfBootstrapButtonComponents = TestUtils.scryRenderedComponentsWithType(
      buttons, Button
    );
    const listOfButtonDomComponents = TestUtils.scryRenderedDOMComponentsWithTag(
        buttons, 'button'
    );

    it('instantiates with nothing active', () => {
      for (let button of listOfBootstrapButtonComponents) {
        expect(button.props.active).toBe(false);
      }
      expect(buttons.state.activeButton).toBe(null);
    });

    it('switches state when clicked', () => {
      const secondButton = listOfButtonDomComponents[1];

      TestUtils.Simulate.click(secondButton);
      expect(buttons.state.activeButton).toBe('idy2');
      expect(listOfBootstrapButtonComponents[1].props.active).toBe(true);

      TestUtils.Simulate.click(secondButton);
      expect(buttons.state.activeButton).toBe(null);
      expect(listOfBootstrapButtonComponents[1].props.active).toBe(false);
    });

    it('clears other active buttons when clicked', () => {
      TestUtils.Simulate.click(listOfButtonDomComponents[1]);
      TestUtils.Simulate.click(listOfButtonDomComponents[2]);

      expect(listOfBootstrapButtonComponents[1].props.active).toBe(false);
      expect(listOfBootstrapButtonComponents[2].props.active).toBe(true);
    });
  });
});
