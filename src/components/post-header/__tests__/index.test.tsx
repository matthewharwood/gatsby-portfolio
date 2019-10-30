


import React from 'react';
import renderer from "react-test-renderer"
import {PostHeader} from "../"


const FIXTURE =  {
  _key: '99cf0fa54eb7',
  _type: 'postHeader',
  eyebrow: 'eyebrow',
  mainText: 'Test header',
  projectOverview: {
    _type: 'projectOverviewSchema',
    client: 'khatri',
    collaborators: [ 'Sangeet Khatri' ],
    company: 'Sanity',
    myRole: 'developer',
    resources: [ [Object] ],
    technology: [ 'graphql' ],
    when: 'January'
  },
  subText: 'Test SubText'
};

describe('Page Renderer ', () => {

  it('should render postHeader', () => {
    const tree = renderer
      .create(<PostHeader eyebrow={'eyebrow'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
