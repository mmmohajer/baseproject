import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { setElementsHeightStore } from '@/reducers/general/elementsHeightStore';

import Header from '@/baseComponents/Header';
import Footer from '@/baseComponents/Footer';
import DivMinFullHeight from '@/baseComponents/DivMinFullHeight';

import styles from './PageContainer.module.scss';

const PageContainer = ({
  pageIdentifier = '',
  pageSubNavIdentifier = '',
  hasHeader = true,
  hasFooter = true,
  children
}) => {
  const dispatch = useDispatch();
  const headerRef = useRef();
  const footerRef = useRef();
  const elementsHeightStore = useSelector((state) => state.elementsHeightStore);

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setActiveMenu(pageIdentifier));
  }, [pageIdentifier]);

  useEffect(() => {
    dispatch(setActiveSubMenu(pageSubNavIdentifier));
  }, [pageSubNavIdentifier]);

  useEffect(() => {
    const localElementsHeightStore = { ...elementsHeightStore };
    if (headerRef?.current?.clientHeight) {
      localElementsHeightStore['headerHeight'] = headerRef.current.clientHeight;
    }
    if (footerRef?.current?.clientHeight) {
      localElementsHeightStore['footerHeight'] = footerRef.current.clientHeight;
    }
    if (!headerRef?.current?.clientHeight) {
      localElementsHeightStore['headerHeight'] = 0;
    }
    if (!footerRef?.current?.clientHeight) {
      localElementsHeightStore['footerHeight'] = 0;
    }
    dispatch(setElementsHeightStore(localElementsHeightStore));
  }, [headerRef?.current?.clientHeight, footerRef?.current?.clientHeight]);

  return (
    <>
      <Div className={cx('')}>
        {hasHeader ? (
          <Div ref={(el) => (headerRef.current = el)}>
            <Header />
          </Div>
        ) : (
          ''
        )}
        <DivMinFullHeight className="flex flex--dir--col">{children}</DivMinFullHeight>
        <Div ref={(el) => (footerRef.current = el)}>{hasFooter && <Footer />}</Div>
      </Div>
    </>
  );
};

export default PageContainer;
