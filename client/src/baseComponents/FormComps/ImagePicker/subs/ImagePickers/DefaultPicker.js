import React from 'react';
import cx from 'classnames';
import { Div, Input, Label as BaseLabel } from 'basedesign-iswad';

import Label from '@/baseComponents/FormComps/Label';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';

import DefaultImagePreview from '../ImagePreviews/DefaultImagePreview';
import styles from '../../ImagePicker.module.scss';

const DefaultPicker = ({
  labelText,
  isRequired,
  fileChangeHandler,
  src,
  setSrc,
  setFile,
  setFileName,
  inputFileField,
  errorMessage,
  errorHandler,
  setInitialSrc,
  previewer = 'default',
  hasMarginBottom = true,
  className
}) => {
  return (
    <>
      <Div
        className={cx('pos-rel', hasMarginBottom && 'm-b-32', className)}
        onClick={() => {
          if (errorHandler) {
            errorHandler('');
          }
        }}>
        {labelText && <Label labelText={labelText} isRequired={isRequired} />}
        <Div type="flex" hAlign="start" vAlign="center" className={cx('')}>
          <BaseLabel>
            <Input
              type="file"
              onChange={fileChangeHandler}
              className="no-display"
              accept=".jpg,.jpeg,.png,.heic,.webp"
              ref={(el) => (inputFileField.current = el)}
            />
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx(styles.iconContainer)}
              color="#ccc">
              <Icon type="upload" color={COLORS['gray-dark']} scale={4} />
            </Div>
          </BaseLabel>
          {previewer === 'default' ? (
            <DefaultImagePreview
              src={src}
              setSrc={setSrc}
              setFile={setFile}
              setFileName={setFileName}
              inputFileField={inputFileField}
              setInitialSrc={setInitialSrc}
            />
          ) : (
            ''
          )}
        </Div>
        <Div
          className={cx('global-error-message', errorMessage && 'global-error-message-is-active')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default DefaultPicker;
