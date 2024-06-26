import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';
import { toggleSideBarDashboard } from '@/reducers/general/sidebarDashboardIsActive';

import styles from '../SideBarDashboard.module.scss';

const Toggler = () => {
  const dispatch = useDispatch();
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx(
          'pos-abs height-px-20 width-px-20 bg-white br-rad-px-5 box-shadow-type-one br-rad-per-50 br-all-solid-1 br-theme-one',
          styles.toggler,
          !sideBarDashboardIsActive && 'global-rotate-180',
          sideBarDashboardIsActive ? styles.togglerDashboardIsOpen : styles.togglerDashboardIsClose
        )}>
        <Div
          className={cx('mouse-hand text-silver')}
          onClick={() => dispatch(toggleSideBarDashboard())}>
          <Icon type="angle-left" color={COLORS['theme-one']} scale={0.6} />
        </Div>
      </Div>
    </>
  );
};

export default Toggler;
