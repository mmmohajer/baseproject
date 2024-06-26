import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PercentageBar from '@/baseComponents/ReusableComps/PercentageBar';

import styles from '../DevDesign.module.scss';

function DisplayPercentageBar() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        <PercentageBar percentage={80} />
      </Div>
    </>
  );
}

export default DisplayPercentageBar;
