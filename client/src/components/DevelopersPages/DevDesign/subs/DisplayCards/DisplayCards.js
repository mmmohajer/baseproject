import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import ServiceCard from './subs/ServiceCard';
import TemporaryService from './subs/TemporaryService';
import CaseStudy from './subs/CaseStudy';
import CaseStudyInfo from './subs/CaseStudyInfo';
import BlogInfo from './subs/BlogInfo';
import HomeService from './subs/HomeService';
import HomeUnique from './subs/HomeUnique';
import AboutQulity from './subs/AboutQulity';
import AboutTeam from './subs/AboutTeam';
import ServiceStep from './subs/ServiceStep';
import styles from '../../DevDesign.module.scss';

function DisplayCards() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        {Object.keys(CARD_TYPES)?.map((item, idx) => {
          if (CARD_TYPES[item] === CARD_TYPES.serviceTest) {
            return <ServiceCard key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.temporaryService) {
            return <TemporaryService key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.caseStudy) {
            return <CaseStudy key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.caseStudyInfo) {
            return <CaseStudyInfo key={idx} />;
          }
          if (CARD_TYPES[item] === CARD_TYPES.blogInfo) {
            return <BlogInfo key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.homeService) {
            return <HomeService key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.homeUnique) {
            return <HomeUnique key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.aboutQuality) {
            return <AboutQulity key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.aboutTeam) {
            return <AboutTeam key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.serviceStep) {
            return <ServiceStep key={idx} />;
          }
        })}
      </Div>
    </>
  );
}

export default DisplayCards;
