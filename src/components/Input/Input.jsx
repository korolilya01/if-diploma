import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Input = memo(function Input({
  id,
  inputClassName,
  labelClassName,
  type,
  name,
  labelId,
  content,
  placeholder,
  value,
  onChange,
  required = null,
}) {
  return (
    <>
      <label htmlFor={labelId} className={labelClassName}>
        {content}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  labelId: PropTypes.string,
  placeholder: PropTypes.string,
  // content: PropTypes.string,
  onChange: PropTypes.func,
};
