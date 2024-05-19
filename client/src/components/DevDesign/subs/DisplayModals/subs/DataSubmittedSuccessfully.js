import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { setModalType } from '@/reducers/general/modalType';

import styles from '../../../DevDesign.module.scss';

const DataSubmittedSuccessfully = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className={'width-px-300 m-l-auto m-r-auto m-b-8'}
        onClick={() => dispatch(setModalType('data-submitted-successfully'))}>
        Show moal of type data-submitted-successfully
      </Button>
    </>
  );
};

export default DataSubmittedSuccessfully;
