import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import { showUserNav } from '@/reducers/general/userNavIsActive';
import { USER_GROUPS } from '@/constants/userGroups';

import styles from '../Header.module.scss';

const AppUser = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const curUserGroup = useSelector((state) => state.curUserGroup);

  return (
    <>
      <Div type="flex" vAlign="center" className="">
        <Div className="one-line m-r-8 f-s-px-12 max-width-px-250">
          {profile?.user?.first_name} {profile?.user?.last_name}
        </Div>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="width-px-40 height-px-40 mouse-hand"
          onClick={() => dispatch(showUserNav())}>
          {!profile?.photo ? (
            <Icon type="circle-user" scale={2.5} color={COLORS['theme-two']} />
          ) : (
            <AppImage
              src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${profile.photo}`}
              width={40}
              height={40}
              objectFit="contain"
            />
          )}
        </Div>
      </Div>
    </>
  );
};

export default AppUser;
