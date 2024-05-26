import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Div } from 'basedesign-iswad';
// import { config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesUp,
  faSearch,
  faClose,
  faUpload,
  faCirclePlus,
  faCircleMinus,
  faCircleCheck,
  faAngleLeft,
  faAngleRight,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

import Dashboard from '@/images/js-Images/icons/svg/dashboard.svg';
// library.add(fab);

import { LIST_OF_ICONS } from '@/constants/devDesignVars';
function Icon({ type, color, width, scale, isBlock = true, className, ...props }) {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowIcon(true);
    }
  }, []);
  let iconTypes = {
    'angles-up': (
      <FontAwesomeIcon icon={faAnglesUp} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    search: (
      <FontAwesomeIcon icon={faSearch} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    close: (
      <FontAwesomeIcon icon={faClose} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    upload: (
      <FontAwesomeIcon icon={faUpload} style={{ color, width, transform: `scale(${scale})` }} />
    ),

    'instagram-fill': (
      <FontAwesomeIcon
        icon={faSquareInstagram}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),

    'circle-plus': (
      <FontAwesomeIcon icon={faCirclePlus} style={{ color, width, transform: `scale(${scale})` }} />
    ),

    'circle-minus': (
      <FontAwesomeIcon
        icon={faCircleMinus}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),

    'circle-check': (
      <FontAwesomeIcon
        icon={faCircleCheck}
        style={{ color, width, transform: `scale(${scale})` }}
      />
    ),

    'angle-left': (
      <FontAwesomeIcon icon={faAngleLeft} style={{ color, width, transform: `scale(${scale})` }} />
    ),

    'angle-right': (
      <FontAwesomeIcon icon={faAngleRight} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    check: <FontAwesomeIcon icon={faCheck} style={{ color, width, transform: `scale(${scale})` }} />
  };

  iconTypes['dashboard'] = (
    <Dashboard fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );

  return (
    <>
      {isBlock && (
        <Div type="flex" hAlign="center" vAlign="center" className={cx(className)} {...props}>
          {showIcon && iconTypes[type]}
        </Div>
      )}
      {!isBlock && showIcon ? iconTypes[type] : ''}
    </>
  );
}

Icon.propTypes = {
  type: PropTypes.oneOf(LIST_OF_ICONS),
  color: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  type: 'close',
  color: 'black',
  width: '16px'
};

export default Icon;
