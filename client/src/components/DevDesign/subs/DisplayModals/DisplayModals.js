import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { MODAL_TYPES } from '@/constants/devDesignVars';

import DataSubmittedSuccessfully from './subs/DataSubmittedSuccessfully';
import styles from '../../DevDesign.module.scss';

const DisplayModals = () => {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-1 width-per-90 flex--wrap', styles.card)}>
        {Object.keys(MODAL_TYPES)?.map((item, idx) => {
          if (item === 'dataSubmittedSuccessfully') {
            return (
              <Div key={idx}>
                <DataSubmittedSuccessfully />
              </Div>
            );
          }
        })}
      </Div>
    </>
  );
};

export default DisplayModals;
