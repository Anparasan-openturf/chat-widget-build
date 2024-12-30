import React from "react";
import PropTypes from "prop-types";

function ConditionalRenderer({ condition, children, defaultComponent }) {
  if (!condition) {
    if (defaultComponent) {
      const DefaultComponent = defaultComponent;
      return <DefaultComponent />;
    }
    return null;
  }

  return <>{children}</>;
}

ConditionalRenderer.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  defaultComponent: PropTypes.elementType,
};

export default ConditionalRenderer;
