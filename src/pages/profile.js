import React, { Component } from 'react';
import './styles/profile.scss';
import { Navbar } from '../components/navbar';
import { H1, H2, H4, Label1, Paragraph2, Paragraph3 } from 'baseui/typography';
import portrait from '../images/me4-sq.jpg';
import { Grid } from '../components/grid-system';

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
import { useStyletron } from 'baseui';

const ProfileSection = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <section
      className={css({
        gridColumn: 'span 4',
      })}
    >
      {children}
    </section>
  );
};

const Experiences = () => {
  return (
    <>
      <SectionHeading heading="Experiences" />
      {experiences.map(experience => (
        <ExperienceItem {...experience} />
      ))}
    </>
  );
};

const Education = () => {
  return (
    <>
      <SectionHeading heading="Education" />
      {education.map(experience => (
        <ExperienceItem {...experience} />
      ))}
    </>
  );
};

const Awards = () => {
  const [css, theme] = useStyletron();
  return (
    <>
      <SectionHeading heading="Awards" />
      {awards.map(award => (
        <ExperienceItem {...award} />
      ))}
    </>
  );
};

const SectionHeading = ({ heading = 'Heading' }) => {
  const [css, theme] = useStyletron();
  return <H2 marginBottom={theme.sizing.scale700}>{heading}</H2>;
};

const Technical = () => {
  return (
    <>
      <SectionHeading heading="Technical" />
      <Paragraph3>
        {techniques.join(', ')}
      </Paragraph3>
    </>
  );
};

const Interests = () => {
  return (
    <>
      <SectionHeading heading="Interests" />
      <Paragraph3 margin={0}>
        {interests.join(', ')}
      </Paragraph3>
    </>
  );
};

const Socials = () => {
  const [css, theme] = useStyletron();
  const dlChild = css({
    margin: 0,
    padding: 0,
    width: '50%',
  });
  return (
    <>
      <SectionHeading heading="Socials" />
      <div>
        <dl
          className={css({
            display: theme.display.flex,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          })}
        >
          {socials.map(({ place, url, text }) => (
            <>
              <dt className={dlChild}>
                <Paragraph3 margin={0} marginBottom={theme.sizing.scale300}>
                  {place}
                </Paragraph3>
              </dt>
              <dd className={dlChild}>
                <a
                  href={url}
                  className={css({
                    color: theme.colors.accent,
                    textDecoration: 'none',
                  })}
                >
                  <Paragraph3
                    margin={0}
                    marginBottom={theme.sizing.scale300}
                    color={'inherit'}
                  >
                    {text}
                  </Paragraph3>
                </a>
              </dd>
            </>
          ))}
        </dl>
      </div>
    </>
  );
};

const RecentlyVisited = () => {
  const [css, theme] = useStyletron();
  return (
    <>
      <SectionHeading heading="Recently Visited" />
      <ul
        className={css({
          listStyleType: 'none',
          lineHeight: '1.5',
          padding: 0,
        })}
      >
        {visited.map(( { flag, countryName } ) => (
          <li>{flag} {countryName}</li>
        ))}
      </ul>
    </>
  );
};

const ExperienceItem = ({
  place = 'Company',
  title = 'Senio Design Engineer',
  dateRange= 'December 2018 ~ July 2019',
  jobDescription = 'Works on building and maintaining uber.com',
}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        paddingBottom: theme.sizing.scale1000,
      })}
    >
      <Paragraph3 margin={0}>{place}</Paragraph3>
      <Paragraph3
        margin={0}
        marginBottom={theme.sizing.scale400}
        color={theme.colors.primary400}
      >
        {title}
      </Paragraph3>
      <Paragraph3 margin={0}>
        {dateRange}
      </Paragraph3>
      <Paragraph3 margin={0}>{jobDescription}</Paragraph3>
    </div>
  );
};

const IntroSection = () => {
  const [css, theme] = useStyletron();
  return (
    <section
      className={css({
        display: 'flex',
        position: 'fixed',
        top: 0,
        width: '100vw',
      })}
    >
      <header
        className={css({
          width: '50vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: `0 ${theme.sizing.scale3200}`,
        })}
      >
        <H1
          margin={0}
          marginBottom={theme.sizing.scale900}
          className={css({ fontSize: theme.sizing.scale1400 })}
        >
          {me.name}
        </H1>
        <H4 margin={0} color={theme.colors.accent}>
          {me.title}
        </H4>
        <Paragraph2>{me.description}</Paragraph2>
      </header>
      <img
        src={portrait}
        alt=""
        className={css({
          width: '50vw',
          height: '100vh',
          objectFit: 'cover',
        })}
      />
    </section>
  );
};

const ResumeHeader = () => {
  const [css, theme] = useStyletron();
  const aStyle = css({
    textDecoration: 'none',
    color: 'tomato',
  });
  return (
      <section
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <header>
          <H1 margin={0} className={css({ fontSize: theme.sizing.scale1400 })}>
            Résumé
          </H1>
        </header>
        <ul
          className={css({
            fontSize: theme.sizing.scale500,
            lineHeight: theme.sizing.scale800,
            listStyleType: 'none',
            textAlign: 'right',
          })}
        >
          <li>
            <a className={aStyle} href={me.fullDomain}>
              {me.domain}
            </a>
          </li>
          <li>
            <a
              className={aStyle}
              href={`mailto:${me.email}?subject=Hello Matthew`}
            >
              {me.email}
            </a>
          </li>
          <li>
            <a className={aStyle}>{me.phone}</a>
          </li>
        </ul>
      </section>
  )
}

const ResumeSection = () => {
  const [css, theme] = useStyletron();
  return (
    <article
      className={css({
        position: 'relative',
        background: theme.colors.primary50,
        top: `calc(100vh - ${theme.sizing.scale4800})`,
        margin: `0 ${theme.sizing.scale2400}`,
        marginBottom: theme.sizing.scale2400,
        padding: `${theme.sizing.scale3200} ${theme.sizing.scale1200}`,
      })}
    >
      <ResumeHeader/>
      <Grid>
        <ProfileSection>
          <Experiences />
        </ProfileSection>
        <ProfileSection>
          <Education />
          <Awards />
        </ProfileSection>
        <ProfileSection>
          <Technical />
          <Interests />
          <Socials />
          <RecentlyVisited />
        </ProfileSection>
      </Grid>
    </article>
  );
};

const Profile = () => {
  const [css, theme] = useStyletron();
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
