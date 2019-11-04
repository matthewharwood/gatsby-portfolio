import React, { useState } from 'react';
import { HomeNavigation } from '../components/home-navigation';
import { Folio } from '../components/folio';
import { RunningHeader } from '../components/running-header';
import { Boner } from '../components/boner';
import { useStyletron } from 'baseui';
import { Layer } from 'baseui/layer';

const layerRef = React.createRef();

export const ActiveVideoContext = React.createContext({
  activeVideoID: '0',
  setActiveVideoId: {},
});
const IndexPage = () => {
  const [activeVideoID, setActiveVideoId] = useState('0');
  const [css] = useStyletron();
  return (
    <ActiveVideoContext.Provider value={{ activeVideoID, setActiveVideoId }}>
      <main
        className={css({
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        })}
      >
        <RunningHeader />
        <HomeNavigation />
        <Boner />
        <Folio
          headline={'Good Morning Harwood'}
          subheadline={'A creative playground by'}
          link={{ href: '#', text: 'Matthew Harwood' }}
        />
      </main>
    </ActiveVideoContext.Provider>
  );
};

export default IndexPage;
