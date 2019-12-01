import React from 'react';
import renderer from 'react-test-renderer';
import { PostHeader } from '../';

const FIXTURE = {
  _key: '99cf0fa54eb7',
  _type: 'postHeader',
  eyebrow: {
    _type: 'label',
    text: 'Web Application',
  },
  mainText: {
    _type: 'label',
    text: 'Nike CMS',
  },
  projectOverview: {
    _type: 'projectOverviewSchema',
    client: {
      data: 'Google',
      type: 'default',
    },
    collaborators: {
      data: {
        items: [
          'Jimmy Soat (Creative Director)',
          'Stanley Yeung (Visual Designer)',
          'Jeffrey Qua (Developer)',
        ],
        type: 'list',
      },
    },
    company: {
      data: 'AKQA',
      type: 'default',
    },
    role: {
      data: 'Frontend Engineer',
      type: 'default',
    },
    resources: {
      data: {
        items: [
          {
            _key: '77fb5c027206',
            _type: 'link',
            href: 'https://www.github.com',
            text: 'Github',
          },
        ],
        type: 'link',
      },
    },
    technology: {
      data: {
        items: ['Angular'],
        type: 'list',
      },
    },
    when: {
      data: 'Feb 2014',
      type: 'default',
    },
  },
  subText: {
    _type: 'label',
    text: 'Some sub text here',
  },
};

describe('Page Renderer ', () => {
  it('should render postHeader', () => {
    const tree = renderer.create(<PostHeader {...FIXTURE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
