import React from 'react';
import { HeaderLinks } from '../HeaderLinks';

import './Dropdown.scss';

export const Dropdown = ({ isVisible }) => {
  return (
    isVisible && (
      <div className="dropdown">
        <div className="dropdown__container">
          <HeaderLinks />
        </div>
      </div>
    )
  );
};
