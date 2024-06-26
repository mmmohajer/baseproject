import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const CaseStudyInfo = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.caseStudyInfo}</Div>
        <Card
          type={CARD_TYPES.caseStudyInfo}
          title="User Help"
          description="Get assistance with template selection and customization."
          src="https://picsum.photos/300/300"
        />
      </Div>
    </>
  );
};

export default CaseStudyInfo;
