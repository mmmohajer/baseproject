import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Accordion from '@/baseComponents/Accordion';

import styles from '../DevDesign.module.scss';

const DevSection = ({
  title,
  activeElements,
  setActiveElements,
  isAlwaysActive = false,
  children
}) => {
  const headingOnClick = () => {
    let localActiveElements = [...activeElements];
    if (localActiveElements.includes(title)) {
      localActiveElements = localActiveElements.filter((item) => item !== title);
    } else {
      localActiveElements.push(title);
    }
    setActiveElements(localActiveElements);
  };

  return (
    <>
      <Div className="my1">
        <Div
          className="flex flex--jc--center flex--ai--center mouse-hand bgBlue p2 textBlack fs-r-2"
          onClick={headingOnClick}>
          {title}
        </Div>
        <Accordion isActive={isAlwaysActive || activeElements.includes(title)}>
          <Div
            type="flex"
            direction="vertical"
            hAlign="center"
            vAlign="center"
            className={cx('p1 w-per-100 flex--wrap bgGreen')}>
            {children || ''}
          </Div>
        </Accordion>
      </Div>
    </>
  );
};

export default DevSection;
