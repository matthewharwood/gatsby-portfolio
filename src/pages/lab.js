import React, { Component } from 'react';
import { Navbar } from '../components/navbar';
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
import {useSpring, animated} from 'react-spring';
// import AniLink from "gatsby-plugin-transition-link/AniLink"


function MySpring({ children }) {
  const { current, mount } = useTransitionState();
  console.log(current.length, mount);
  const Animated = animated.div;
  const props = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: { duration: 1000 }
  });

  return <Animated style={props}>{children}</Animated>
}

class Lab extends Component {
  state = {};
  render() {
    return (
      <MySpring>
        <Navbar />
        <h1>Lab</h1>
        {/*<AniLink paintDrip to="/">*/}
        {/*  Go to home*/}
        {/*</AniLink>*/}
      </MySpring>
    );
  }
}

export default Lab;
