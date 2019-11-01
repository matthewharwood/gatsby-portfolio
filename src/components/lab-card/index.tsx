import React from 'react';
import { H3 } from 'baseui/typography';
import { useStyletron } from 'baseui';

const LabCardWrapper = ({ isImage, children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        backgroundColor: theme.colors.primary50,
        boxShadow: theme.lighting.shadow600,
        position: 'relative',
        height: isImage ? '430px' : '215px',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.sizing.scale1200,
        marginBottom: theme.sizing.scale1200,
      })}
    >
      {children}
    </div>
  );
};

const LabCardImage = ({ image }) => {
  const [css, theme] = useStyletron();
  return (
    <img
      src={image}
      alt=""
      className={css({
        position: 'relative',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      })}
    />
  );
};

const LabCardContents = ({ isImage, title, tags }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: `${theme.colors.primary50}E6`,
        height: isImage ? '50%' : '100%',
      })}
    >
      <div
        className={css({
          padding: theme.sizing.scale700,
        })}
      >
        <Tags tags={tags}/>
        <H3>{title}</H3>
      </div>
    </div>
  );
};

const Tags = ({ tags }) => {
  const [css, theme] = useStyletron();
  return (
    <div className={css({
      height: theme.sizing.scale700,
    })}>
      {tags.map(tag => (
        <div
          className={css({
            fontSize: theme.sizing.scale500,
            backgroundColor: theme.colors.primary300,
            fontWeight: 'bold',
            padding: `${theme.sizing.scale0} ${theme.sizing.scale300}`,
            borderRadius: theme.sizing.scale100,
            color: theme.colors.mono1000,
            display: 'inline-block',
            marginRight: theme.sizing.scale300,
          })}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

const LabCard = ({ ui, data = {} }) => {
  const [css,theme] = useStyletron();
  const image = data.image || null;
  const tags = data.tags || [];
  const title = data.title || 'Test Title 1';

  const isImage = image !== null;
  return (
    <div className={css({
        width:'100%',
        gridColumn: 'span 4',
        border: '1px solid black',
    })}>
      <LabCardWrapper isImage={isImage}>
        <LabCardImage image={image} />
        <LabCardContents isImage={isImage} title={title} tags={tags} />
    </LabCardWrapper>
    </div>
  );
};

export default LabCard;
