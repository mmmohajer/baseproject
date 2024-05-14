import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';

import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';

import styles from './DisplaySurface.module.scss';

const DisplaySurface = () => {
  return (
    <>
      <Surface
        bgColor={SURFACE_COLOR_TYPES.brand}
        bgColorOnHover={SURFACE_COLOR_TYPES.brandSecondary}
        brColor={BORDER_COLOR_TYPES.gray}
        brColorOnHover={BORDER_COLOR_TYPES.success2}
        margins={{ left: SPACINGS.xs, right: SPACINGS.lr, top: SPACINGS.xxl, bottom: SPACINGS.md }}
        paddings={{ left: SPACINGS.sm, right: SPACINGS.lr, top: SPACINGS.xxl, bottom: SPACINGS.md }}
        brRadiusType={BORDER_RADIUS_TYPES.rounded}
        textColorType={TEXT_COLOR_TYPES.tertiary}
        textSizeType={TEXT_SIZE_TYPES.xxLarge}
        textFontType={TEXT_FONT_TYPES.regular}
        textColorOnHover={TEXT_COLOR_TYPES.primary}
        className="mouse-hand br-all-solid-3">
        Hello
      </Surface>
    </>
  );
};

export default DisplaySurface;
