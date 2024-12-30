import React from "react";
import PropTypes from "prop-types";

const SwitchCaseRenderer = ({ cases, defaultComponent }) => {
  for (let i = 0; i < cases.length; i++) {
    if (cases[i].condition) {
      const CaseComponent = cases[i].component;
      return <CaseComponent />;
    }
  }

  if (defaultComponent) {
    const DefaultComponent = defaultComponent;
    return <DefaultComponent />;
  }

  return null;
};

SwitchCaseRenderer.propTypes = {
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      condition: PropTypes.bool.isRequired,
      component: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  defaultComponent: PropTypes.elementType,
};

export default SwitchCaseRenderer;
