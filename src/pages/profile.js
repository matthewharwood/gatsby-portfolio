import React, { Component } from 'react';
import './styles/profile.scss';

import {
  awards,
  education,
  experiences,
  me,
  techniques,
  interests,
  socials,
  visited,
} from '../content/profile/profile';

const Profile = () => {
  return (
    <div>
      <section className="section">
        <header class="header">
          <h2 class="h2">{me.name}</h2>
          <h3 class="h3">{me.title}</h3>
          <p class="p">{me.description}</p>
        </header>
        <div class="portrait"></div>
      </section>
      <article class="resume">
        <header class="resumeHeader">
          <h2 class="h2">Résumé</h2>
        </header>
        <section class="contact">
          <ul class="ul">
            <li>
              <a class="a" href={me.fullDomain}>
                {me.domain}
              </a>
            </li>
            <li>
              <a class="a" href={`mailto:${me.email}?subject=Hello Matthew`}>
                {me.email}
              </a>
            </li>
            <li>
              <a class="a">{me.phone}</a>
            </li>
          </ul>
        </section>
        <section class="experience">
          {/* <StandardBlock title={'Experiences'} data={experiences} /> */}
        </section>
        <section class="education">
          {/* <StandardBlock title={'Education'} data={education} /> */}
          {/* <StandardBlock title={'Awards'} data={awards} /> */}
        </section>
        <aside class="aside">
          {/* <StandardList title={'Technical'} data={techniques} /> */}
          {/* <StandardList title={'Interests'} data={interests} /> */}
          {/* <StandardTable title={'Socials'} data={socials} /> */}
          {/* <StandardVisitedList title={'Recently Visited'} data={visited} /> */}
        </aside>
      </article>
    </div>
  );
};

export default Profile;
