import React, { useState } from 'react';
import { Link } from 'gatsby';
import { HomeNavigation } from '../components/home-navigation';
import { Folio } from '../components/folio';
import { RunningHeader } from '../components/running-header';
import { Boner } from '../components/boner';

export const ActiveVideoContext = React.createContext({
  activeVideoID: '0',
  setActiveVideoId: {},
});
const IndexPage = () => {
  const [activeVideoID, setActiveVideoId] = useState('0');
  return (
    <ActiveVideoContext.Provider value={{ activeVideoID, setActiveVideoId }}>
      <RunningHeader />
      <HomeNavigation />
      <Boner />
      <Folio
        headline={'Good Morning Harwood'}
        subheadline={'A creative playground by'}
        link={{ href: '#', text: 'Matthew Harwood' }}
      />
    </ActiveVideoContext.Provider>
  );
};

export default IndexPage;
