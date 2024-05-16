import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { lgDesignSize, smDesignSize } from '@/constants/vars';

import MobileHeader from './subs/Mobile/MobileHeader';
import DesktopHeader from './subs/Desktop/DesktopHeader';
import styles from './Header.module.scss';

const Header = ({ hasStickyHeader, changesThePage = true, headerColorType, isAppPage }) => {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  return (
    <>
      {scrollPosition > 0 && hasStickyHeader ? (
        <Div
          type="flex"
          distributedBetween
          vAlign="center"
          className={cx('w-per-100 pos-fix pos-fix--lt headerBgZIndex hasHeaderHeight')}
        />
      ) : (
        ''
      )}
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className={cx(
          'w-per-100 hasHeaderHeight',
          styles.headerContainer,
          hasStickyHeader && 'pos-fix pos-fix--lt headerZIndex'
        )}>
        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={smDesignSize}
          className="w-per-100">
          <MobileHeader changesThePage={changesThePage} isAppPage={isAppPage} />
        </Div>

        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={lgDesignSize}
          className={cx(
            'w-per-100 ml-auto mr-auto',
            isAppPage ? 'maxContainerWidthForApp' : 'maxContainerWidth'
          )}>
          <DesktopHeader changesThePage={changesThePage} isAppPage={isAppPage} />
        </Div>
      </Div>
    </>
  );
};

export default Header;
