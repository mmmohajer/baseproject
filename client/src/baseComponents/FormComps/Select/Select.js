import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Select as BaseSelect } from 'basedesign-iswad';

import Label from '@/baseComponents/FormComps/Label';

import styles from './Select.module.scss';

const Select = ({
  val,
  setVal,
  selectIntialShownText,
  options,
  openOptionsDownWard,
  placeHolder,
  isRequired,
  labelText,
  errorMessage,
  errorHandler,
  hasMarginBottom = true,
  className
}) => {
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const [allOpts, setAllOpts] = useState([]);

  useEffect(() => {
    setAllOpts(options);
  }, [options]);

  return (
    <>
      <Div className={cx('pos-rel', hasMarginBottom && 'm-b-32', className)}>
        {labelText && <Label labelText={labelText} isRequired={isRequired} />}
        <Div
          className={cx('')}
          onClick={() => {
            if (errorHandler) {
              errorHandler('');
            }
          }}>
          <BaseSelect
            selectValue={val}
            setSelectValue={setVal}
            options={allOpts}
            fullWidth
            arrowIconFillColor="gray"
            arrowIconStrokeColor="gray"
            arrowIconScale={0.8}
            searchIconFillColor="gray"
            searchIconStrokeColor="gray"
            openOptionsDownWard={openOptionsDownWard}
            isOptionsActive={isOptionsActive}
            setIsOptionsActive={setIsOptionsActive}
            selectIntialShownText={selectIntialShownText}
            placeholder={placeHolder || ''}
            defaultViewClassName={cx(
              'width-per-100 p-l-16 p-r-16 mouse-hand br-all-solid-1 br-black br-rad-px-4 box-shadow-type-one height-px-40 f-s-px-12 flex flex--ai--center'
            )}
            SelectClickableClassName="width-per-100 height-vh-full pos-fix pos-fix--lt mouse-hand"
            className={cx('width-per-100 br-none height-px-40')}
            optionClassName={cx('p-all-7 mouse-hand bg-red-on-hover br-rad-px-5')}
            optinsContainerClassName={cx(
              'width-per-100 bg-white scroll-type-one br-all-solid-1 br-blue br-rad-px-5 max-height-px-200 of-y-auto z-1000 no-display pos-abs flex--dir--col',
              styles.optionsContainer
            )}
            searchContainerClassName="width-per-100"
            inputSearchClassName={cx(
              'width-per-100 box-shadow-type-one br-all-solid-1 br-blue p-all-10 z-100'
            )}
            placeHolderClassName={cx('f-s-px-12 text-gray')}
            iconSearchContainerClassName={cx(styles.iconSearchContainer)}
            optinsContainerToDownClassName={cx(styles.optionsContainerToDown)}
            optinsContainerToUpClassName={cx(styles.optionsContainerToUp)}
            optinsContainerIsActiveClassName={cx(styles.optionsContainerIsActive)}
            arrowContainerClassName={cx(styles.arrowContainer)}
          />
        </Div>
        <Div
          className={cx('global-error-message', errorMessage && 'global-error-message-is-active')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default Select;
