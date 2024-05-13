import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Loading from '@/baseComponents/Loading';
import Alert from '@/baseComponents/Alert';
import Modal from '@/baseComponents/Modal';

import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({ children }) => {
  const loading = useSelector((state) => state.loading);

  return (
    <>
      {loading > 0 ? <Loading /> : ''}
      {/* <Alert /> */}
      {/* <Modal /> */}
      <Div className="appContainer">{children}</Div>
    </>
  );
};

export default BaseTemplate;
