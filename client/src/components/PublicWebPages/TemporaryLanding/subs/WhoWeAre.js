import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import DivWidthDynamic from '@/baseComponents/DivWidthDynamic';
import Paragraph from '@/baseComponents/Paragraph';

import whoWeAreImg from '@/images/js-Images/general/TemporaryPage/WhoWeAre.png';

import styles from '../TemporaryLanding.module.scss';

const WhoWeAre = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <DivWidthDynamic
        type="flex"
        direction={containerWidth < 1000 ? 'vertical' : 'horizontal'}
        hAlign="center"
        className="global-container p-x-16"
        setContainerWidth={setContainerWidth}>
        <Div
          className={cx(
            'width-per-100 max-width-px-600 of-hidden',
            containerWidth < 1000 ? '' : 'br-rad-px-20'
          )}>
          <AppImage src={whoWeAreImg} heightOverWidthAsprctRatio={1} />
        </Div>
        <Div
          type="flex"
          vAlign="center"
          className={cx('width-per-100 z-10', containerWidth < 1000 ? '' : 'br-rad-px-20')}
          style={{
            marginLeft: containerWidth < 1000 ? 0 : '-80px',
            maxWidth: containerWidth < 1000 ? '600px' : `${containerWidth / 2}px`
          }}>
          <Div
            className={cx(
              'bg-gray-bright box-shadow-type-one p-all-32',
              containerWidth < 1000 ? '' : 'br-rad-px-20'
            )}>
            {' '}
            <Paragraph className="p-b-32">
              At ISWAD (Intelligent System Web App Development), we're on a mission to transform
              visions into reality through cutting-edge technology and strategic guidance. Founded
              in 2021 by Mohammad Mahdi Mohajer, ISWAD is dedicated to empowering startups and
              established businesses alike with bespoke software solutions that exceed expectations.{' '}
            </Paragraph>
            <Paragraph className="">
              Future Vision: Leading AI Implementation in Healthcare 🤖💊 <br />
              ISWAD is committed to pioneering AI solutions for the healthcare industry, aiming to
              revolutionize patient care, diagnosis, and treatment through innovative technology
            </Paragraph>
          </Div>
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default WhoWeAre;
