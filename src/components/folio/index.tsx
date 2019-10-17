import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { Paragraph4, H6 } from 'baseui/typography';

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
  const a = css({
    background: 'none',
    border: 'none',
    paddingTop: theme.sizing.scale500,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: theme.sizing.scale500,
  });

  return (
    <footer>
      <H6 color={'accent'}>{headline}</H6>
      <Paragraph4>
        <span>{subheadline}</span>
        <a className={a} href={link && link.href}>
          {' '}
          {link && link.text}
        </a>
      </Paragraph4>
    </footer>
  );
};

export { Folio };
