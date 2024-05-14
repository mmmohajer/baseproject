import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';

import styles from './Surface.module.scss';

const Surface = ({
  bgColor = SURFACE_COLOR_TYPES.primary,
  bgColorOnHover = '',
  brColor = '',
  brColorOnHover = '',
  margins = {},
  paddings = {},
  brRadiusType = '',
  textSizeType = TEXT_SIZE_TYPES.regular,
  textFontType = TEXT_FONT_TYPES.regular,
  textColorType = TEXT_COLOR_TYPES.primary,
  textColorOnHover = '',
  children,
  className,
  ...props
}) => {
  const [marginClasses, setMarginClasses] = useState('');
  const [paddingClasses, setPaddingClasses] = useState('');

  useEffect(() => {
    let localMargins = '';
    if (margins?.left) {
      localMargins += `mL${margins?.left} `;
    }
    if (margins?.right) {
      localMargins += `mR${margins?.right} `;
    }

    if (margins?.top) {
      localMargins += `mT${margins?.top} `;
    }

    if (margins?.bottom) {
      localMargins += `mB${margins?.bottom} `;
    }

    if (margins?.all) {
      localMargins += `mAll${margins?.all} `;
    }

    if (margins?.x) {
      localMargins += `mX${margins?.x}`;
    }

    if (margins?.y) {
      localMargins += `mY${margins?.y}`;
    }

    setMarginClasses(localMargins);
  }, [margins]);

  useEffect(() => {
    let localPaddings = '';
    if (paddings?.left) {
      localPaddings += `pL${paddings?.left} `;
    }
    if (paddings?.right) {
      localPaddings += `pR${paddings?.right} `;
    }

    if (paddings?.top) {
      localPaddings += `pT${paddings?.top} `;
    }

    if (paddings?.bottom) {
      localPaddings += `pB${paddings?.bottom} `;
    }

    if (paddings?.all) {
      localPaddings += `pAll${paddings?.all} `;
    }

    if (paddings?.x) {
      localPaddings += `pX${paddings?.x} `;
    }

    if (paddings?.y) {
      localPaddings += `pY${paddings?.y} `;
    }

    setPaddingClasses(localPaddings);
  }, [paddings]);

  return (
    <>
      <Div
        className={cx(
          bgColor && `bg${bgColor}`,
          bgColorOnHover && `bg${bgColorOnHover}OnHover`,
          brColor && `br${brColor}`,
          brColorOnHover && `br${brColorOnHover}OnHover`,
          brRadiusType && `brRadius${brRadiusType}`,
          textSizeType && `text${textSizeType}`,
          textFontType && `text${textFontType}`,
          textColorType && `text${textColorType}`,
          textColorOnHover && `text${textColorOnHover}OnHover`,
          marginClasses && marginClasses,
          paddingClasses && paddingClasses,
          className
        )}
        {...props}>
        {children}
      </Div>
    </>
  );
};

export default Surface;
