import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { CONTACT } from '../constants';
import styles from '../Footer.module.scss';

const Contact = () => {
  return (
    <>
      <Div className="global-font-title f-b height-px-30">Contact</Div>
      <Div className={cx(styles.heightForText, '')}>
        {CONTACT?.map((item, idx) => (
          <Div type="flex" vAlign="center" key={idx} className="m-b-8">
            <Div>
              <Icon type={item?.icon} color={'white'} />
            </Div>
            <Div>{item?.value}</Div>
          </Div>
        ))}
      </Div>
    </>
  );
};

export default Contact;
