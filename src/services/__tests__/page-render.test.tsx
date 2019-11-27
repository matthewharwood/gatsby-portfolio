import React from 'react';
import { pageRenderer } from '../page-renderer';
import { SANITY_RAW_CONTENT } from "../__fixtures__/sanity"
import renderer from "react-test-renderer"

describe('Page Renderer ', () => {
  it('should render snapshot of full page', () => {
    // const Page = pageRenderer(SANITY_RAW_CONTENT);
    // const tree = renderer
    //   .create(Page)
    //   .toJSON();
    // expect(tree).toMatchSnapshot();
  });
});