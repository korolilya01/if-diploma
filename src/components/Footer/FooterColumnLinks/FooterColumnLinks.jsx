import React from 'react';

import { Links } from '../../Utils/Links';

import classNames from 'classnames';

export const FooterColumnLinks = ({ array }) => {
  return (
    <div className="footer__container">
      <div className="footer__links">
        {array.map((item) => (
          <Links
            key={item.id}
            content={item.title}
            className={classNames(
              item.id === 1 ? 'footer__title' : '',
              'footer__text',
            )}
          />
        ))}
      </div>
    </div>
  );
};
