import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { join } from 'path';
import { useStyletron } from 'baseui';
import { Display1, Display4 } from 'baseui/typography';
const WorkItemWrapper = ({ children }) => {
  const [css, theme] = useStyletron();
  const c = css({
    height: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    listStyleType: 'none',
    margin: 0,
    padding: theme.sizing.scale1200,
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
    background: 'white',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  });
  return <ul className={c}>{children}</ul>;
};
const WorkItemLink = ({ node, children }) => {
  const [css, theme] = useStyletron();
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
      {children}
    </Link>
  );
};
const WorkItemHeader = ({ children }) => {
  const [css, theme] = useStyletron();
  const c = css({
    width: '50%',
  });
  return <header>{children}</header>;
};

const Work = ({
  data: {
    allSanityWork: { edges },
  },
}) => {
  return (
    <WorkItemsWrapper>
      {edges.map(({ node }, key) => {
        return (
          <WorkItemWrapper key={key}>
            <WorkItemLink node={node}>
              <WorkItemHeader>
                <Display1>{node.title}</Display1>
                <Display4>{node.description}</Display4>
              </WorkItemHeader>
            </WorkItemLink>
          </WorkItemWrapper>
        );
      })}
    </WorkItemsWrapper>
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
