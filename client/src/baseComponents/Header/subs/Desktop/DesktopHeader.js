import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage/AppImage';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';

import Logo from '@/images/js-Images/general/Header/Header-Logo.png';

import DesktopNav from './DesktopNav';
import styles from '../../Header.module.scss';

const DesktopHeader = ({ changesThePage, isAppPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Div
        className="mouse-hand"
        onClick={() => {
          dispatch(setActiveMenu('/home'));
          dispatch(setActiveSubMenu(''));
          if (changesThePage) {
            router.push('/');
          } else {
            window.scrollTo(0, 0);
          }
        }}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('pos-rel hasHeaderHeight of-hidden', styles.desktopHeaderLogoContainer)}>
          <AppImage src={Logo} objectFit="cover" />
        </Div>
      </Div>
      <Div className="ml4">
        <DesktopNav changesThePage={changesThePage} isAppPage={isAppPage} />
      </Div>
    </>
  );
};

export default DesktopHeader;
