import React, { useState } from 'react';
import { Link } from 'gatsby';
import { HomeNavigation } from '../components/home-navigation';
import { Folio } from '../components/folio';
export const ActiveVideoContext = React.createContext({
  activeVideoID: '0',
  setActiveVideoId: {},
});
const IndexPage = () => {
  const [activeVideoID, setActiveVideoId] = useState('0');
  return (
    <ActiveVideoContext.Provider value={{ activeVideoID, setActiveVideoId }}>
      <HomeNavigation />
      <Folio
        headline={'Good Morning Harwood'}
        subheadline={'A creative playground by'}
        link={{ href: '#', text: 'Matthew Harwood' }}
      />
    </ActiveVideoContext.Provider>
  );
};

export default IndexPage;
