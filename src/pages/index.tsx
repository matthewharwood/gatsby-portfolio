import React, { useState } from 'react';
import { Link } from 'gatsby';

export const ActiveVideoContext = React.createContext({activeVideoID: '0', setActiveVideoId: {} });
const IndexPage = () => {
  const [activeVideoID, setActiveVideoId] = useState('0');
  return (
    <ActiveVideoContext.Provider value={{ activeVideoID, setActiveVideoId }}>
      <Link to="/work/work-1">Go to Work-1</Link>
    </ActiveVideoContext.Provider>
  );
};

export default IndexPage;
