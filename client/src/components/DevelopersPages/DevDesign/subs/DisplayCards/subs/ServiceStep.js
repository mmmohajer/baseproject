import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const ServiceStep = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.serviceStep}</Div>
        <Card
          type={CARD_TYPES.serviceStep}
          title="Trustworthy"
          description="We build strong, reliable relationships with our clients, ensuring transparency and integrity in all our dealings."
          iconType="dashboard"
        />
      </Div>
    </>
  );
};

export default ServiceStep;
