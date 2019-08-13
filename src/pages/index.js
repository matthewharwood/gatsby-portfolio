import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { styled } from "styletron-react";
import Hello from '../components/hello';
const Colored = styled("div", { color: "blue" });


const x: string = '1';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hello />
  < p > Welcome to your new Gatsby site. { x }</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
