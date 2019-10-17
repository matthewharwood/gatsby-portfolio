import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink } from '../nav-link';

describe('Should create Nav with children', () => {
  it('renders correctly', () => {
    const FIXTURE = {
      text: 'Hello',
      index: '01',
      to: '/hello',
    };
    const tree = renderer.create(<NavLink {...FIXTURE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
