import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { Paragraph4, Label4 } from 'baseui/typography';

type FolioProps = {
  headline: string;
  subheadline: string;
  link: {
    href: string;
    text: string;
  };
};

const Folio: FunctionComponent<FolioProps> = ({
  headline,
  subheadline,
  link,
}) => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  const a = css({
    borderLeft: 'none',
    paddingTop: theme.sizing.scale500,
    paddingLeft: 0,
    paddingRight: 0,
  });

  return (
    <footer
      className={css({
        display: theme.display.none,
        [lg]: {
          display: theme.display.block,
          fontSize: theme.sizing.scale500,
          borderLeft: `${theme.sizing.scale100} solid ${theme.colors.accent}`,
          paddingLeft: theme.sizing.scale700,
          transform: 'rotate(-90deg)',
          transformOrigin: 'left bottom',
          position: theme.positions.fixed,
          bottom: 0,
          left: 0,
          marginLeft: theme.sizing.scale3200,
        },
      })}
    >
      <Label4 $as="span" className={css({ color: theme.colors.accent })}>
        {headline}
      </Label4>
      <Paragraph4 margin={0}>
        <Label4
          $as="span"
          className={css({
            color: theme.colors.primary600,
          })}
        >
          {subheadline}
        </Label4>
        <Label4 $as="a" className={a} href={link && link.href}>
          {' '}
          {link && link.text}
        </Label4>
      </Paragraph4>
    </footer>
  );
};

export { Folio };
