import React, { Component } from 'react';
import { Navbar } from '../components/navbar';
import {StatefulList} from 'baseui/dnd-list';

class Lab extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <h1>Lab</h1>

        <StatefulList
          initialState={{
            items: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Donec ornare.',
              'Morbi malesuada id ante ac tincidunt. Phasellus at varius enim, fringilla pretium lorem. Integer placerat, est in aliquam tempus, ex urna hendrerit quam, eu sagittis nulla lorem eu magna.',
              'Morbi nibh nunc.',
              'Nunc consequat erat id ante mollis tincidunt in a nulla.',
            ],
          }}
          onChange={console.log}
        />
      </>
    );
  }
}

export default Lab;
