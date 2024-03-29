import React from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter } from 'basedesign-iswad';
import Image from 'next/image';

import styles from '../Card.module.scss';

const ServiceCard = ({ className, ...props }) => {
  return (
    <>
      <Card
        {...props}
        className={cx('boxShadowType1 bgWhite br-rad-px-10 of-y-hidden of-x-hidden', className)}>
        TestCard
      </Card>
    </>
  );
};

export default ServiceCard;
