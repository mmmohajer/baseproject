import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { COMPANY_LINKS } from '../constants';
import styles from '../Footer.module.scss';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';

const Company = () => {
  return (
    <>
      <Div className="global-font-title f-b height-px-30">Company</Div>
      <Div className={cx('', styles.heightForText)}>
        {COMPANY_LINKS?.map((item, idx) => (
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

export default Company;
