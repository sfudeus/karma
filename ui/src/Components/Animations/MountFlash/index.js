import React from "react";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import "./index.css";

const MountFlash = ({ children, duration, ...props }) => (
  <CSSTransition
    classNames="components-animation-flash"
    timeout={120}
    enter={true}
    appear={true}
    {...props}
  >
    {children}
  </CSSTransition>
);
MountFlash.propTypes = {
  children: PropTypes.node.isRequired
};

export { MountFlash };
