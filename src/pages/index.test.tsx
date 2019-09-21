import React from "react"
import renderer from "react-test-renderer"
import IndexPage from './';

describe("Hello", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<IndexPage />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})