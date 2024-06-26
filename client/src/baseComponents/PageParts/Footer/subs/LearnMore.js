import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { LEARN_MORE_LINKS } from '../constants';
import styles from '../Footer.module.scss';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';

const LearnMore = () => {
  return (
    <>
      <Div className="global-font-title f-b height-px-30">Learn More</Div>
      <Div className={cx(styles.heightForText)}>
        {LEARN_MORE_LINKS?.map((item, idx) => (
          <Div key={idx} className="m-b-8">
            <Anchor
              to={item?.url}
              internal
              anchorType={ANCHOR_TYPES.noEffect}
              className={'text-white'}>
              {item?.title}
            </Anchor>
          </Div>
        ))}
      </Div>
    </>
  );
};

export default LearnMore;
