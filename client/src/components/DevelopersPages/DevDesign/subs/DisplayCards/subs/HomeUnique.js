import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES, PNG_ICON_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const HomeUnique = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.homeUnique}</Div>
        <Card
          type={CARD_TYPES.homeUnique}
          iconType={PNG_ICON_TYPES.unique1}
          title="Scalability & Clean Code"
          description="We prioritize scalable solutions and clean, maintainable code, ensuring seamless integration and support for your company’s growth over time."
        />
      </Div>
    </>
  );
};

export default HomeUnique;
