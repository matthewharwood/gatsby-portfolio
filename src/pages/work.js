import React from 'react';
import { graphql, Link } from 'gatsby';
import { join } from 'path';
import { useStyletron } from 'baseui';
import { Display1, Display4 } from 'baseui/typography';
import { Button, SIZE } from 'baseui/button';
import { Navbar } from '../components/navbar';

const WorkItemWrapper = ({ children }) => {
  const [css, theme] = useStyletron();
  const c = css({
    height: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    listStyleType: 'none',
    margin: 0,
    paddingTop: 0,
    [theme.mediaQuery.large]: {
      paddingBottom: theme.sizing.scale1600,
      paddingLeft: theme.sizing.scale1600,
      paddingRight: theme.sizing.scale1600,
    },
  });
  const inner = css({
    width: '100%',
    height: '100%',
    background: theme.colors.mono200,
  });
  return (
    <li className={c}>
      <div className={inner}>{children}</div>
    </li>
  );
};

const WorkItemsWrapper = ({ children }) => {
  const [css, theme] = useStyletron();
  const c = css({
    background: theme.colors.white,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  });
  return <ul className={c}>{children}</ul>;
};
const WorkItemLink = ({ node, children }) => {
  const [css] = useStyletron();
  const templateKeyMap = {
    workTemplate: 'work',
    labTemplate: 'lab',
  };
  const c = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
  });
  return (
    <Link
      className={c}
      to={join(templateKeyMap[node.templateKey], node.slug.current)}
    >
      {children}{' '}
    </Link>
  );
};
const WorkItemHeader = ({ children }) => {
  const [css, theme] = useStyletron();
  const c = css({ display: 'grid', gap: theme.sizing.scale1000 });
  return <header className={c}>{children}</header>;
};

const Work = ({
  data: {
    allSanityWork: { edges },
  },
}) => {
  const [css, theme] = useStyletron();
  console.log();
  return (
    <>
      <Navbar />
      <WorkItemsWrapper>
        {' '}
        {edges.map(({ node }, key) => {
          return (
            <WorkItemWrapper key={key} first={key === 0}>
              <WorkItemLink node={node}>
                <WorkItemHeader>
                  <div
                    className={css({
                      width: '100%',
                      [theme.mediaQuery.large]: {
                        width: '66%',
                        margin: '0 auto',
                      },
                    })}
                  >
                    <Display1
                      font={['font750', 'font950', 'font950', 'font1450']}
                    >
                      {node.title}
                    </Display1>
                  </div>
                  <div className={css({ width: '80%', margin: '0 auto' })}>
                    <Display4
                      font={['font450', 'font550', 'font750', 'font750']}
                    >
                      {node.description}
                    </Display4>
                  </div>
                  <div className={css({ width: '15%', margin: '0 auto' })}>
                    <Button size={SIZE.large}>Enter</Button>
                  </div>
                </WorkItemHeader>
              </WorkItemLink>
            </WorkItemWrapper>
          );
        })}{' '}
      </WorkItemsWrapper>
    </>
  );
};

export const PageQuery = graphql`
  {
    allSanityWork {
      edges {
        node {
          id
          description
          title
          templateKey
          slug {
            current
          }
        }
      }
    }
  }
`;

export default Work;
