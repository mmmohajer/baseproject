import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx('w-px-40 height-px-40 bgRed br-rad-per-50 mouse-hand')}
        onClick={() => window.scrollTo(0, 0)}>
        <Icon type="angles-up" color="white" />
      </Div>
    </>
  );
};

export default ScrollToTop;
