import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  className,
  buttonName,
  type,
  disabled = false,
  onClick,
  content,
}) => {
  return (
    <button
      className={className}
      name={buttonName}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonName: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  // content: PropTypes.string,
};
