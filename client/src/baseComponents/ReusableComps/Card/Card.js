import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import TemporaryService from './subs/TemporaryService';
import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return <>{type === CARD_TYPES.temporaryService && <TemporaryService {...props} />}</>;
};

export default Card;
