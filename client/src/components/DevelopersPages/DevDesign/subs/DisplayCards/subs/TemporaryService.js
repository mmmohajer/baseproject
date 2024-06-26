import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const TemporaryService = ({ ...props }) => {
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
          title="MVP Development"
          describtion="Utilizing agile methodologies, we deliver tailored web and mobile app solutions."
          explanations={[
            'We offer comprehensive MVP development services, guiding you from ideation to product launch.',
            'With a focus on clear milestones and agile methodology, we ensure efficient and scalable development.',
            'Our team assists with UI/UX design, mobile and web app development, and AI implementation.',
            'Target Audience: Early-stage ideas, teams, investors seeking to invest in their product with a focus on development excellence.'
          ]}
        />
      </Div>
    </>
  );
};

export default TemporaryService;
