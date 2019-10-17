import React from 'react';
import renderer from 'react-test-renderer';
import { Nav } from '../nav';

describe('Should create Nav with children', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Nav>hello</Nav>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
