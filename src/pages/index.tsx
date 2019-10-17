import React, { useState } from 'react';
import { Link } from 'gatsby';
import { HomeNavigation } from '../components/home-navigation';

export const ActiveVideoContext = React.createContext({
  activeVideoID: '0',
  setActiveVideoId: {},
});
const IndexPage = () => {
  const [activeVideoID, setActiveVideoId] = useState('0');
  return (
    <ActiveVideoContext.Provider value={{ activeVideoID, setActiveVideoId }}>
      <HomeNavigation />
    </ActiveVideoContext.Provider>
  );
};

export default IndexPage;
