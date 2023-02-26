import React from "react";
import PropTypes from "prop-types";
const StyledButton = ({ title, onClick }) => {
  return (
    <button
      style={{
        fontSize: "50px",
        margin: "80px",
        padding: "20px",
        width: "80px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
StyledButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default StyledButton;
