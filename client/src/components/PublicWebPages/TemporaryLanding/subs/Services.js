import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/DivWidthDynamic';
import Card from '@/baseComponents/Card';
import ResponsiveSwipeableSlider from '@/baseComponents/ResponsiveSwipeableSlider';
import Icon from '@/baseComponents/Icon';

import { CARD_TYPES, LIST_OF_ICONS } from '@/constants/devDesignVars';

import { SERVICES } from '../constants';
import styles from '../TemporaryLanding.module.scss';

const Services = () => {
  const parentRef = useRef();

  const [containerWidth, setContainerWidth] = useState(0);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(0);
  const [mustShowSlider, setMustShowSlider] = useState(true);
  const [automaticPlay, setAutomaticPlay] = useState(false);
  const [userSwiped, setUserSwiped] = useState(false);

  useEffect(() => {
    if (parentRef?.current?.clientWidth) {
      setParentWidth(parentRef.current.clientWidth);
    }
  }, [parentRef?.current?.clientWidth]);

  useEffect(() => {
    if (automaticPlay) {
      setTimeout(() => {
        setMoveRight(true);
        setTimeout(() => {
          setAutomaticPlay(false);
        }, 10);
      }, 5000);
    } else if (!automaticPlay && !userSwiped) {
      setTimeout(() => {
        setAutomaticPlay(true);
      }, 5000);
    }
  }, [automaticPlay, userSwiped]);

  return (
    <>
      <DivWidthDynamic
        setContainerWidth={setContainerWidth}
        className={cx('width-per-100 p-x-50 pos-rel global-container m-l-auto m-r-auto')}>
        {containerWidth ? (
          <ResponsiveSwipeableSlider
            moveRight={moveRight}
            setMoveRight={setMoveRight}
            moveLeft={moveLeft}
            setMoveLeft={setMoveLeft}
            moveToItemWithNum={moveToItemWithNum}
            setMoveToItemWithNum={setMoveToItemWithNum}
            mustShowSlider={mustShowSlider}
            setMustShowSlider={setMustShowSlider}
            setUserSwiped={setUserSwiped}
            isSwipeable={true}
            isDraggable={true}>
            {SERVICES?.map((item, idx) => (
              <Div key={idx} className="width-px-275 m-r-16">
                <Card
                  type={CARD_TYPES.temporaryService}
                  title={item?.title}
                  describtion={item?.describtion}
                  explanations={item?.explanations}
                />
              </Div>
            ))}
          </ResponsiveSwipeableSlider>
        ) : (
          ''
        )}

        {/* -------------------------------------- */}
        {/* -------------------------------------- */}
        {/* Buttons */}
        {/* -------------------------------------- */}
        {/* -------------------------------------- */}
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="pos-abs width-px-30 height-px-30 br-rad-per-50 box-shadow-type-one bg-theme-one mouse-hand"
          style={{ left: '10px', top: '50%', transform: `traslateY(-50%)` }}
          onClick={() => {
            setMoveRight(true);
            setUserSwiped(true);
          }}>
          <Icon type={LIST_OF_ICONS['angle-left']} color={'black'} scale={0.7} />
        </Div>

        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="pos-abs width-px-30 height-px-30 br-rad-per-50 box-shadow-type-one bg-theme-one mouse-hand"
          style={{ right: '10px', top: '50%', transform: `traslateY(-50%)` }}
          onClick={() => {
            setMoveLeft(true);
            setUserSwiped(true);
          }}>
          <Icon type={LIST_OF_ICONS['angle-right']} color={'black'} scale={0.7} />
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default Services;
