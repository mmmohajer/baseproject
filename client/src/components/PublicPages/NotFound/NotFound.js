import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center" className="flex--gr--1">
        <Div className="bgRed pXL brRadiusRounded">NotFound</Div>
      </Div>
    </>
  );
};

export default NotFound;
