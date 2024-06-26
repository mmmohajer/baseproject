import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './PercentageBar.module.scss';

const PercentageBar = ({ percentage = 0 }) => {
  return (
    <>
      <Div className="width-per-100 bg-silver height-px-10">
        <Div className={cx('height-px-10', styles.bar)} style={{ width: `${percentage}%` }} />
      </Div>
    </>
  );
};

export default PercentageBar;
