import React from 'react';
import { Navbar } from '../../components/navbar';
import { IntroSection } from './intro-section';
import { ResumeSection } from './resume-section';

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
