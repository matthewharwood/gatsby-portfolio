import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { styled } from "styletron-react";
import {Hello} from '../components/hello';
import { COLORS } from '../components/styles/styles';
import { Button } from "baseui/button";


const IndexPage = () => (
  <>
    <Hello color={COLORS.RED} />
    <Button onClick={() => alert("click")}>Hello</Button>
  </>
)

export default IndexPage
