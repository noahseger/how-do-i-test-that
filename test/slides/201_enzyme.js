/* eslint-disable no-unreachable */

const React = require('react');
const { expect } = require('chai');
const { shallow } = require('enzyme');

const Foo = require('src/components/Foo');

describe('Stateless Component', () => {

  it('renders a className', () => {
    throw new Error(`
      Class names are part of the contract for our components.

      Without them, we can't guarantee our CSS selectors work.

      We can test class names with chai-enzyme's className assertion.

      https://github.com/producthunt/chai-enzyme#classnamestr
    `);
    // Test that Foo is rendered with the className "foo".
    const wrapper = shallow(<Foo />);
    expect(wrapper).className('foo');
  });
});
