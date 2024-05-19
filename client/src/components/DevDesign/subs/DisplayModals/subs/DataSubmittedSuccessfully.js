import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { MODAL_TYPES } from '@/constants/devDesignVars';
import { setModalType } from '@/reducers/general/modalType';

import styles from '../../../DevDesign.module.scss';

const DataSubmittedSuccessfully = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className={'width-px-300 m-l-auto m-r-auto m-b-8'}
        onClick={() => dispatch(setModalType(MODAL_TYPES.dataSubmittedSuccessfully))}>
        Show moal of type {MODAL_TYPES.dataSubmittedSuccessfully}
      </Button>
    </>
  );
};

export default DataSubmittedSuccessfully;
