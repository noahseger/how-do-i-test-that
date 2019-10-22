/* eslint-disable no-unreachable */

const React = require('react');
const { expect } = require('chai');
const { shallow } = require('enzyme');

const Foo = require('src/components/Foo');

describe('Component with lifecycles', () => {

  it('probably does something on mount', () => {
    throw new Error(`
      We can use super secret Enzyme stuff to test lifecycles.
    `);
    // Test that Foo is rendered with the className "foo".
    const wrapper = shallow(<Foo />, { lifecycleExperimental: true });
    expect(wrapper).to.have.done.something;
  });

  it('needs jsdom to do anything that touches DOM nodes', () => {
    throw new Error(`
      See the SELF test config as an example.
    `);
  });
});
