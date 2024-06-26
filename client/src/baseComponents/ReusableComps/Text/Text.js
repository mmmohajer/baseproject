import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div, Text as BaseText } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';
import DivConvertTextToHtml from '@/baseComponents/ReusableComps/DivConvertTextToHtml';

import { COLORS } from '@/constants/vars';

import styles from './Text.module.scss';
import { LIST_OF_ICONS } from '@/constants/devDesignVars';

const Text = ({
  textMessage,
  initialCount = 1,
  countJump = 1,
  initialTextContainerHeight = '100px',
  showViewAll = true,
  iconColor = COLORS['theme-two'],
  className,
  ...props
}) => {
  const textRef = useRef();

  const [isTruncated, setIsTruncated] = useState(true);
  const [mustBeTruncated, setMustBeTruncated] = useState(true);
  const [arrayOfVocabs, setArrayOfVocabs] = useState([]);
  const [count, setCount] = useState(initialCount);
  const [shownText, setShownText] = useState('');
  const [textContainerHeight, setTextContainerHeight] = useState(initialTextContainerHeight);

  useEffect(() => {
    if (textMessage) {
      setArrayOfVocabs(textMessage.split(' '));
    }
  }, [textMessage]);

  useEffect(() => {
    if (
      count === arrayOfVocabs.length &&
      textRef.current.scrollHeight <= textRef.current.clientHeight
    ) {
      setShownText(arrayOfVocabs.join(' '));
      setMustBeTruncated(false);
    } else {
      setShownText(arrayOfVocabs.slice(0, count).join(' '));
      if (textRef.current.scrollHeight > textRef.current.clientHeight) {
        setMustBeTruncated(true);
        setShownText(arrayOfVocabs.slice(0, count - 5 * countJump).join(' '));
        setIsTruncated(true);
      } else {
        if (count + countJump < arrayOfVocabs.length) {
          setCount(count + countJump);
        } else {
          setCount(arrayOfVocabs.length);
        }
      }
    }
  }, [arrayOfVocabs, count, textRef?.current?.clientWidth]);

  useEffect(() => {
    if (textRef?.current) {
      if (textRef.current.scrollHeight > textRef.current.clientHeight) {
        setIsTruncated(true);
      }
    }
  }, [textRef?.current?.clientWidth]);

  useEffect(() => {
    if (isTruncated) {
      setTextContainerHeight(initialTextContainerHeight);
    } else {
      setTextContainerHeight(textRef?.current?.scrollHeight + 20);
    }
  }, [isTruncated]);

  return (
    <>
      <Div
        ref={(el) => (textRef.current = el)}
        style={{ height: textContainerHeight }}
        className={cx(
          'pos-rel width-per-100 pos-rel p-b-temp-7 global-paragraph global-paragraph-justified',
          styles.textContainer,
          className
        )}
        {...props}>
        <Div style={{ display: 'inline' }}>{shownText}</Div>
        {mustBeTruncated && isTruncated && !showViewAll ? <>...</> : ''}
        {mustBeTruncated && isTruncated && showViewAll ? (
          <>
            ...{' '}
            <span
              className="mouse-hand width-px-20 height-px-20 m-x-8"
              onClick={() => {
                setIsTruncated(false);
                setShownText(arrayOfVocabs.join(' '));
              }}>
              <Icon
                isBlock={false}
                type={LIST_OF_ICONS['circle-plus']}
                color={iconColor}
                scale={1.2}
              />
            </span>
          </>
        ) : (
          ''
        )}

        {mustBeTruncated && !isTruncated && showViewAll ? (
          <>
            <span
              className="mouse-hand m-l-8"
              onClick={() => {
                setIsTruncated(true);
                setTimeout(() => {
                  setShownText(arrayOfVocabs.slice(0, count - 5 * countJump).join(' '));
                }, 300);
              }}>
              <Icon
                isBlock={false}
                type={LIST_OF_ICONS['circle-minus']}
                color={iconColor}
                scale={1.2}
              />
            </span>
          </>
        ) : (
          ''
        )}
      </Div>
    </>
  );
};

export default Text;
