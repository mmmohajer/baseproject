import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';

import FacebookIcon from '@/images/js-Images/icons/png/facebook.png';

import styles from './PngIcon.module.scss';

const PngIcon = ({ type, width = 50, height = 50 }) => {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className="pos-rel of-hidden"
        style={{ width, height }}>
        {type === 'facebook' && <AppImage src={FacebookIcon} />}
      </Div>
    </>
  );
};

export default PngIcon;
