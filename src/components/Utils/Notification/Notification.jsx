import React from 'react';

import './Notification.scss';
import classNames from 'classnames';

export const Notification = ({ message, className }) => {
  return (
    <div className={classNames('notification', className)}>
      <p>{message}</p>
    </div>
  );
};
