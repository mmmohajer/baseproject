import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../UserNav.module.scss';

const MenuItem = ({ item, ...props }) => {
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        className={cx(
          'width-per-100 p-all-8 mouse-hand',
          activeMenu === item?.identifier ? 'text-black' : 'text-gray-dark'
        )}>
        <Div type="flex" hAlign="center" vAlign="center" className="m-r-8 width-px-20">
          <Icon
            type={item?.icon}
            color={activeMenu === item?.identifier ? 'black' : COLORS['gray-dark']}
          />
        </Div>
        <Div className="flex--gr--1">{item?.title}</Div>
      </Div>
    </>
  );
};

export default MenuItem;
