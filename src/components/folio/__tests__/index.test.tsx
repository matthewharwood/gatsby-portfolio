import React from 'react';
import renderer from 'react-test-renderer';
import { Folio } from '../';

describe('Should create Nav with children', () => {
  it('renders correctly', () => {
    const FIXTURE = {
      text: 'Hello',
      index: '01',
      to: '/hello',
    };
    const tree = renderer
      .create(
        <Folio
          headline={'Good Morning Harwood'}
          subheadline={'A creative playground by'}
          link={{ href: '#', text: 'Matthew Harwood' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
