import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, ActivableElement } from 'basedesign-iswad';

import { SIDE_BAR_DASHBOARD_ITEMS } from '@/constants/sideBarDashboardItems';

import Header from './subs/Header';
import MenuItem from './subs/MenuItem';
import Toggler from './subs/Toggler';
import Separator from './subs/Separator';
import OtherItems from './subs/OtherItems';
import styles from './SideBarDashboard.module.scss';

const SideBarDashboard = () => {
  const dispatch = useDispatch();
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  const profile = useSelector((state) => state.profile);
  const curUserGroup = useSelector((state) => state.curUserGroup);

  return (
    <>
      <ActivableElement
        className={cx('of-y-auto  flex flex--dir--col flex--jc--between', styles.dashboard)}
        activeClassName={cx(styles.dashboardIsActive)}
        isActive={sideBarDashboardIsActive}>
        <Div type="flex" direction="vertical" className="flex--gr--1">
          <Header />
          <Div
            type="flex"
            direction="vertical"
            className="flex--gr--1 br-right-solid-2 br-gray-dark p-y-16">
            <Div type="flex" direction="vertical" distributedBetween className="flex--gr--1">
              <Div>
                {SIDE_BAR_DASHBOARD_ITEMS?.map((item, identifier) => {
                  if (item?.allowedGroups?.includes(curUserGroup)) {
                    return (
                      <Div className="m-b-16 p-x-16" key={identifier}>
                        <MenuItem menu={item} />
                      </Div>
                    );
                  }
                })}
              </Div>
              <Div>
                <Separator />
                <OtherItems />
              </Div>
            </Div>
          </Div>
        </Div>
        {/* <Separator /> */}
        <Toggler />
      </ActivableElement>
    </>
  );
};

export default SideBarDashboard;
