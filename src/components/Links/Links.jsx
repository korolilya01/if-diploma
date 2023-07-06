import React from 'react';

import PropTypes from 'prop-types';

export const Links = ({ content, href = '#', className }) => (
  <a className={className} href={href}>
    {content}
  </a>
);

Links.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  href: PropTypes.string,
};
