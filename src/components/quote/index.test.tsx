import React from "react"
import renderer from "react-test-renderer"
import {Quote} from './';

describe("QuoteBlock", () => {
  it("should render default body value", () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
});

describe("QuoteBlock", () => {
  it("should render with body ", () => {
    const tree = renderer
      .create(<Quote  body={'"body description"'}/>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
});
