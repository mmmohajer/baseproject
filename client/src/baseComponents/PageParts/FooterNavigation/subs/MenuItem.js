import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';
import { setActiveDashboardMenu } from '@/reducers/general/activeDashboardMenu';

import styles from '../FooterNavigation.module.scss';

const MenuItem = ({ item, ...props }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const activeDashboardMenu = useSelector((state) => state.activeDashboardMenu);

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        direction="vertical"
        className="mouse-hand height-px-30 width-px-30"
        {...props}
        onClick={() => {
          router.push(item?.to);
          dispatch(setActiveDashboardMenu(item?.identifier));
        }}>
        <Icon
          type={item?.icon}
          scale={1.5}
          color={activeDashboardMenu === item?.identifier ? 'black' : COLORS['gray-dark']}
        />
        <Div
          className={cx(
            'm-t-8 f-s-px-10',
            activeDashboardMenu === item?.identifier ? 'text-black' : 'text-gray-dark'
          )}>
          {item?.title}
        </Div>
      </Div>
    </>
  );
};

export default MenuItem;
