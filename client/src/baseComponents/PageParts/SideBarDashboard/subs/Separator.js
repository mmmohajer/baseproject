import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../SideBarDashboard.module.scss';

const Separator = () => {
  return (
    <>
      <Div className={cx('width-per-100 bg-gray-dark br-bottom-solid-2 br-gray-dark')} />
    </>
  );
};

export default Separator;
