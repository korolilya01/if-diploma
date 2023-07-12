import React from 'react';

import './Notification.scss';

export const Notification = ({ message }) => {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};
