import React, { Fragment } from "react";

import "../../images/astro.jpg";
import "../../images/blue.jpg";
import "../../images/dear.jpg";
import "../../images/mr-robot.jpg";
import "../../images/mr-robot-1.jpg";
import "../../images/psyco.jpg";
import "../../images/pubg.jpg";
import "../../images/skull.jpg";

export const Content = ({ image, alt, size }) => {
  const img = require(`../../images/${image}`);

  const dimension = {
    width: "100%",
    height: "90%",
    borderRadius: "10px 10px 0 0 ",
  };
  return (
    <Fragment>
      <img alt={alt} src={img} style={dimension} />
    </Fragment>
  );
};
