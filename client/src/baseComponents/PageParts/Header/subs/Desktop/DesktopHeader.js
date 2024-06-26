import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Button from '@/baseComponents/ReusableComps/Button';
import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';
import { MEETING_LINK } from '@/constants/vars';

import Logo from '@/images/js-Images/general/Header/WideLogo.png';

import DesktopNav from './DesktopNav';
import AppUser from '../AppUser';
import styles from '../../Header.module.scss';

const DesktopHeader = ({ changesThePage, isAppPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

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
        {!isAppPage ? (
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('pos-rel height-header width-px-100')}>
            <AppImage src={Logo} objectFit="contain" width={100} />
          </Div>
        ) : (
          ''
        )}
      </Div>
      <Div type="flex" vAlign="center" className="m-l-32">
        <DesktopNav changesThePage={changesThePage} isAppPage={isAppPage} />
        {!isAppPage ? (
          <Div className="width-px-300">
            <Anchor to={MEETING_LINK} internal={false} anchorType={ANCHOR_TYPES.noEffect}>
              <Button>Book a Meeting</Button>
            </Anchor>
          </Div>
        ) : (
          ''
        )}

        {isAppPage ? <AppUser /> : ''}
      </Div>
    </>
  );
};

export default DesktopHeader;
