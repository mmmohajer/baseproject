import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({ children }) => {
  return (
    <>
      <Div className="appContainer">{children}</Div>
    </>
  );
};

export default BaseTemplate;
