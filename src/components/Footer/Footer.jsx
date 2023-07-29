import React from 'react';

import { Container } from '../Utils/Container';
import { FooterColumnLinks } from './FooterColumnLinks';
import { Icon } from '../Utils/Icon';

import { columnLinks } from './utils/columnLinks';

import './Footer.scss';
import classNames from 'classnames';

export const Footer = () => {
  const [firstColumnLinks, secondColumnLinks, thirdColumnLinks, ,] =
    columnLinks;

  return (
    <footer className="footer">
      <Container>
        <div className="footer__list">
          <FooterColumnLinks array={firstColumnLinks} />
          <FooterColumnLinks array={secondColumnLinks} />
          <FooterColumnLinks array={thirdColumnLinks} />
          <div className="footer__container">
            <div className="footer__links">
              <a
                className={classNames('footer__title', 'footer__text')}
                href="#"
              >
                Stay connected
              </a>
              <div className="footer__links-icons">
                <Icon iconHref="#instagram" className="footer__icon" />
                <Icon iconHref="#facebook" className="footer__icon" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
