import React, { Fragment } from 'react';

export const Content = ({ image, alt, size }) => {
  const img = image;

  const dimension = {
    width: '100%',
    height: '90%',
    borderRadius: '10px 10px 0 0 ',
    objectFit: 'cover',
  };
  const path = image;
  return (
    <Fragment>
      <img alt={size} src={path} style={dimension} />
    </Fragment>
  );
};
