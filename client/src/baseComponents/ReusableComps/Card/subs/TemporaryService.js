import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import FlipDiv from '@/baseComponents/ReusableComps/FlipDiv';
import FrontSide from '@/baseComponents/ReusableComps/FlipDiv/subs/FrontSide';
import BackSide from '@/baseComponents/ReusableComps/FlipDiv/subs/BackSide';
import List from '@/baseComponents/ReusableComps/List';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { LIST_OF_ICONS } from '@/constants/devDesignVars';

import styles from '../Card.module.scss';

const TemporaryService = ({ title, explanations, describtion }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <Div className="width-per-100">
        <FlipDiv
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          containerClassName="width-per-100 height-px-400">
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* Front Side */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          <FrontSide
            type="flex"
            direction="vertical"
            distributedBetween
            className="global-bg-grad-one p-all-16 text-white br-rad-px-8">
            <Heading type={4} className="height-px-150">
              {title}
            </Heading>
            <Div>{describtion}</Div>
            <Div type="flex" hAlign="end" vAlign="end" className="w-per-100">
              <Div className="" onClick={() => setIsFlipped(!isFlipped)}>
                <Icon type={LIST_OF_ICONS['circle-plus']} scale={1.2} />
              </Div>
            </Div>
          </FrontSide>
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* Back Side */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          <BackSide
            type="flex"
            direction="vertical"
            distributedBetween
            className="bg-gray-bright p-all-16 text-black f-s-regular br-rad-px-8 of-y-auto scroll-type-one">
            <Div>
              <List type={1} list={explanations} />
            </Div>
            <Div type="flex" hAlign="end" vAlign="end" className="w-per-100">
              <Div className="" onClick={() => setIsFlipped(!isFlipped)}>
                <Icon type={LIST_OF_ICONS['circle-minus']} scale={1.2} />
              </Div>
            </Div>
          </BackSide>
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
        </FlipDiv>
      </Div>
    </>
  );
};

export default TemporaryService;
