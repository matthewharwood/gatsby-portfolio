import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { mq } from '../styles';

const CodeComponent: FunctionComponent<{ code: string }> = ({ code }) => {
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

export default CodeComponent;
