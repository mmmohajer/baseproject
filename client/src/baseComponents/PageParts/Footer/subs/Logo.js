import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';

import Favicon from '@/images/js-Images/general/Footer/favicon.png';

import styles from '../Footer.module.scss';

const Logo = () => {
  return (
    <>
      <Div vAlign="center" type="flex" className="height-per-100">
        <Div className="width-px-50 height-px-50">
          <AppImage src={Favicon} />
        </Div>
        <Div className="m-l-8">Intelligent System Web App Development</Div>
      </Div>
    </>
  );
};

export default Logo;
