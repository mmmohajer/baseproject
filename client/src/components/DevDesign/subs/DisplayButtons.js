import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { BUTTON_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayColors() {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        {BUTTON_TYPES.map((num, idx) => (
          <Button btnType={num} key={idx} className="m-r-16 max-width-px-200">
            Button type {num}
          </Button>
        ))}
      </Div>
    </>
  );
}

export default DisplayColors;
