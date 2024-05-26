import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const TemporaryServiceCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.temporaryService}</Div>
        <Card
          type={CARD_TYPES.temporaryService}
          title="Customized Web/Mobile App Development"
          describtion="Utilizing agile methodologies, we deliver tailored web and mobile app solutions."
          explanations={[
            'Utilizing agile methodologies, we deliver tailored web and mobile app solutions.',
            'Clients can track progress and integrate third-party services seamlessly.',
            'Our expertise extends to data analysis and AI-driven solutions, enabling businesses to thrive.',
            'Target Audience: Small to medium-sized businesses and startups seeking cost-effective, efficient development solutions.'
          ]}
        />
      </Div>
    </>
  );
};

export default TemporaryServiceCard;
