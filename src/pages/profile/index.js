import React from 'react';
import { Navbar } from '../../components/navbar';
import { IntroSection } from '../../components/profile/intro-section';
import { ResumeSection } from '../../components/profile/resume-section';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div>
        <IntroSection />
        <ResumeSection />
      </div>
    </>
  );
};

export default Profile;
