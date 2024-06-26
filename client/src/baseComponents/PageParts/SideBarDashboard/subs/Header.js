import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';

import Logo from '@/images/js-Images/general/Header/WideLogo.png';
import Robot from '@/images/js-Images/general/Header/robot.png';

import styles from '../SideBarDashboard.module.scss';

const Header = () => {
  const profile = useSelector((state) => state.profile);
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className="br-bottom-solid-2 br-gray-dark height-header">
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('pos-rel height-header width-px-100')}>
          {sideBarDashboardIsActive ? (
            <AppImage src={Logo} objectFit="contain" width={100} />
          ) : (
            <AppImage src={Robot} objectFit="contain" width={30} />
          )}
        </Div>
      </Div>
    </>
  );
};

export default Header;
