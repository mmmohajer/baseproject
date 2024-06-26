import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ResponsiveSwipeableSlider from '@/baseComponents/ReusableComps/ResponsiveSwipeableSlider';
import ResponsiveSwipeableSliderItem from '@/baseComponents/ReusableComps/ResponsiveSwipeableSlider/subs/ResponsiveSwipeableSliderItem';

import styles from '../DevDesign.module.scss';

const DisplayResponsiveSwipeableSlider = () => {
  const parentRef = useRef();

  const [parentWidth, setParentWidth] = useState(0);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(0);
  const [mustShowSlider, setMustShowSlider] = useState(true);
  const [automaticPlay, setAutomaticPlay] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [userSwiped, setUserSwiped] = useState(false);

  useEffect(() => {
    if (parentRef?.current?.clientWidth) {
      setParentWidth(parentRef.current.clientWidth);
    }
  }, [parentRef?.current?.clientWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          setAutomaticPlay(true);
          return 0;
        }
        return prevPercentage + (10 / 20000) * 100;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (automaticPlay) {
      setMoveRight(true);
      const timeout = setTimeout(() => {
        setAutomaticPlay(false);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [automaticPlay]);

  return (
    <>
      <Div
        ref={(el) => (parentRef.current = el)}
        className={cx('width-per-100 m-l-auto m-r-auto dir-ltr', styles.landingContainer)}>
        {parentWidth ? (
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
            <ResponsiveSwipeableSliderItem className="pos-rel">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className={cx('bg-blue height-px-40 text-white')}
                style={{ width: parentWidth }}>
                1
              </Div>
            </ResponsiveSwipeableSliderItem>

            <ResponsiveSwipeableSliderItem className="pos-rel">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className={cx('bg-red height-px-40 text-white')}
                style={{ width: parentWidth }}>
                2
              </Div>
            </ResponsiveSwipeableSliderItem>

            <ResponsiveSwipeableSliderItem className="pos-rel">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className={cx('bg-green height-px-40 text-white')}
                style={{ width: parentWidth }}>
                3
              </Div>
            </ResponsiveSwipeableSliderItem>
          </ResponsiveSwipeableSlider>
        ) : (
          ''
        )}
      </Div>
    </>
  );
};

export default DisplayResponsiveSwipeableSlider;
