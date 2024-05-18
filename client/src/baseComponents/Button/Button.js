import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './Button.module.scss';

const Button = ({
  btnType = 1,
  iconType,
  iconColor,
  iconScale,
  isDisabled,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <BaseButton
        className={cx(isDisabled && styles.disableBtn, btnType === 1, className)}
        {...props}
        disabled={isDisabled}>
        <Div type="flex" hAlign="center">
          {iconType && (
            <Div type="flex" hAlign="center" vAlign="center" className="mr1">
              <Icon type={iconType} color={iconColor} scale={iconScale} />
            </Div>
          )}
          <Div>{children}</Div>
        </Div>
      </BaseButton>
    </>
  );
};

export default Button;
