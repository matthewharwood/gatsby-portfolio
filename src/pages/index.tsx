import React, { useState } from 'react';
import { Link } from 'gatsby';
import { WorkTemplate } from '../templates/workTemplate';

export const ActiveVideoContext = React.createContext('0');
const IndexPage = () => {
  const [activeVideoID, setActiveVideoId] = useState('0');
  return (
    <ActiveVideoContext.Provider value={{ activeVideoID, setActiveVideoId }}>
      <Link to="/work/work-1">Go to Work-1</Link>
    </ActiveVideoContext.Provider>
  );
};

export default IndexPage;
