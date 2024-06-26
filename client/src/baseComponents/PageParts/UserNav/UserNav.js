import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Logout from '@/baseComponents/LoginRegister/Logout';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { hideUserNav } from '@/reducers/general/userNavIsActive';
import { lgDesignSize, smDesignSize, COLORS } from '@/constants/vars';

import { MENU_ITEMS } from './constants';
import MenuItem from './subs/MenuItem';
import styles from './UserNav.module.scss';

const UserNav = () => {
  const dispatch = useDispatch();
  const userNavIsActive = useSelector((state) => state.userNavIsActive);
  const curUserGroup = useSelector((state) => state.curUserGroup);

  return (
    <>
      {userNavIsActive && (
        <Div
          className="pos-fix pos-fix--lt bg-black width-per-100 height-vh-full op-30 z-10 mouse-hand"
          onClick={() => dispatch(hideUserNav())}
        />
      )}
      <Div
        className={cx(
          'pos-abs width-px-300 transition-one bg-white box-shadow-type-one p-all-16 text-black HeaderMobNavContainerZIndex',
          styles.container,
          userNavIsActive && styles.containerIsActive
        )}
        style={{ borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        {MENU_ITEMS?.map((item, idx) => {
          if (item?.allowedGroups?.includes(curUserGroup)) {
            return (
              <Div key={idx}>
                {!item?.showInDesktop ? (
                  <Div showIn={smDesignSize}>
                    <MenuItem item={item} />
                  </Div>
                ) : (
                  <MenuItem item={item} />
                )}
              </Div>
            );
          }
        })}
        <Logout>
          <Div
            type="flex"
            hAlign="center"
            className={cx('width-per-100 p-all-8 mouse-hand text-gray-dark')}>
            <Div type="flex" hAlign="center" vAlign="center" className="m-r-8 width-px-20">
              <Icon type={'right-from-bracket'} color={COLORS['gray-dark']} />
            </Div>
            <Div className="flex--gr--1">Logout</Div>
          </Div>
        </Logout>
      </Div>
    </>
  );
};

export default UserNav;
