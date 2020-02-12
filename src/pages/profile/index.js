import React, { useState } from 'react';
import { IntroSection } from '../../components/profile/intro-section';
import { ResumeSection } from '../../components/profile/resume-section';
import { useStyletron } from 'baseui';
import { useMediaQuery } from '../../components/utils/use-media-query';
import { Navigation } from '../../components/navigation';

const Profile = () => {
  const [, theme] = useStyletron();
  const isLarge = useMediaQuery(theme.mediaQuery.large);
  const [active, updateActive] = useState(false);
  const toggle = () => updateActive(!active);
  const close = () => updateActive(false);
  return (
    <>
      <Navigation
        isLarge={isLarge}
        toggle={toggle}
        active={active}
        close={close}
      />
      <div>
        <IntroSection />
        <ResumeSection />
      </div>
    </>
  );
};

export default Profile;
