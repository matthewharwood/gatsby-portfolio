import React, { FunctionComponent } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { H1, H3, Label1 } from 'baseui/typography';
import { mq, display } from '../components/styles';
import { Section, Container } from '../components/grid-system';
import { useStyletron } from 'baseui';

const LabTemplate = () => {
  return (
    <>
      <Navbar />
      <Section>
        <PageHeader
          headline={'Lab Title'}
          subline={'This is subline for the title'}
        />
        <ImageSection image={'https://via.placeholder.com/900x800'} />
        <CenteredHeading heading={'This is a sub-heading in Lab Template'} />
        <ImageGallery
          images={[
            {
              id: '1',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-1',
            },
            {
              id: '2',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-2',
            },
            {
              id: '3',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-3',
            },
            {
              id: '4',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-4',
            },
            {
              id: '5',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-5',
            },
            {
              id: '6',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-6',
            },
            {
              id: '7',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-7',
            },
            {
              id: '8',
              src: 'https://via.placeholder.com/320x240',
              altText: 'image-8',
            },
          ]}
        />
        <CodeComponent
          code={`
  import React from 'react';
  const TestComponent = () => {
    return (
      <div>This is a sample code</div>
    )
  }
  export default TestComponent;
          `}
        />
      </Section>
      <Footer />
    </>
  );
};

const PageHeader: FunctionComponent<{ headline: string; subline: string }> = ({
  headline,
  subline,
}) => {
  return (
    <>
      <H1 marginBottom={0}>{headline}</H1>
      <Label1 marginTop={0}>{subline}</Label1>
    </>
  );
};

const ImageSection: FunctionComponent<{ image: string }> = ({ image }) => {
  const [css, theme] = useStyletron();
  return (
    <Container>
      <img
        className={css({
          width: '100%',
          marginTop: theme.sizing.scale1200,
          marginBottom: theme.sizing.scale1200,
          [mq.lg]: {
            marginTop: 0,
          },
        })}
        src={image}
        alt=""
      />
    </Container>
  );
};

const CenteredHeading: FunctionComponent<{ heading: string }> = ({
  heading,
}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        textAlign: 'center',
      })}
    >
      <H3>{heading}</H3>
    </div>
  );
};

type imageType = {
  src: string;
  id: string;
  altText: string;
};

const ImageGallery: FunctionComponent<{ images: Array<imageType> }> = ({
  images,
}) => {
  const [css, theme] = useStyletron();
  const { sm, md, lg } = mq;

  const gridStyle = css({
    display: display.grid,
    gridTemplateColumns: 'repeat(1, 1fr)',
    marginTop: theme.sizing.scale2400,
    marginBottom: theme.sizing.scale2400,
    gridGap: theme.sizing.scale800,
    [sm]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    [md]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [lg]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  });

  const imgStyle = css({
    width: '100%',
  });

  return (
    <div className={gridStyle}>
      {images.map(image => (
        <img
          key={image.id}
          className={imgStyle}
          src={image.src}
          alt={image.altText}
        />
      ))}
    </div>
  );
};

const CodeComponent: FunctionComponent<{code:string}> = ({ code }) => {
  const [css, theme] = useStyletron();

  const c = css({
    paddingTop: `${theme.sizing.scale900}`,
    paddingBottom: `${theme.sizing.scale900}`,
    paddingLeft: `${theme.sizing.scale1200}`,
    background: theme.colors.primary100,
    borderLeft: `${theme.sizing.scale100} solid ${theme.colors.negative300}`,
    color: theme.colors.primary600,
    fontSize: theme.sizing.scale600,
    lineHeight: theme.sizing.scale800,
    overflowX: 'auto',
    [mq.md]: {
      paddingLeft: `${theme.sizing.scale2400}`,
    },
  });

  return (
    <pre className={c}>
      <code>{code}</code>
    </pre>
  );
};

export default LabTemplate;
