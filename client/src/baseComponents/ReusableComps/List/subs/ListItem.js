import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import { COLORS } from '@/constants/vars';
import { LIST_OF_ICONS } from '@/constants/devDesignVars';

import styles from '../List.module.scss';

const ListItem = ({ item, isIconWhite = false, ...props }) => {
  return (
    <>
      <Div type="flex" vAlign="start" className="m-b-8" {...props}>
        <Div className="p-t-8">
          <Icon
            type={LIST_OF_ICONS['circle-check']}
            color={isIconWhite ? 'white' : COLORS['theme-one']}
            scale={1}
          />
        </Div>

        <Div className="m-l-8">
          <Paragraph className={'fs-px-8'}>{item}</Paragraph>
        </Div>
      </Div>
    </>
  );
};

export default ListItem;
