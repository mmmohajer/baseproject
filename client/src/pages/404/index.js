import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivMinFullHeight from '@/baseComponents/DivMinFullHeight';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import NotFound from '@/components/PublicPages/NotFound';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <NotFound />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
