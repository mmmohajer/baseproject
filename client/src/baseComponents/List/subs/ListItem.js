import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../List.module.scss';

const ListItem = ({ item, isIconWhite, ...props }) => {
  return (
    <>
      <Div type="flex" vAlign="center" className="m-b-8" {...props}>
        <Div>
          <Div
            className={cx(
              'width-px-20 height-px-20 br-rad-per-50 box-shadow-type-1 pos-rel',
              isIconWhite ? 'bg-theme-one' : styles.type1CheckContainer
            )}>
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="width-px-20 height-px-20 pos-abs pos-abs--lt">
              <Icon
                type="dashboard"
                color={isIconWhite ? 'white' : COLORS['theme-one']}
                scale={0.9}
              />
            </Div>
          </Div>
        </Div>
        <Div className="m-l-8">
          <Div className={'fs-px-12'}>{item}</Div>
        </Div>
      </Div>
    </>
  );
};

export default ListItem;
