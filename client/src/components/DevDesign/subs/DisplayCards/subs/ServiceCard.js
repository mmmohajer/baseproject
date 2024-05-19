import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import styles from '../../../DevDesign.module.scss';

const ServiceCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32"
        {...props}>
        <Div className="m-b-8">Type: service</Div>
        <Card type="service" />
      </Div>
    </>
  );
};

export default ServiceCard;
