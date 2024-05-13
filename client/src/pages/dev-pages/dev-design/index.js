import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import DevDesign from '@/components/PublicPages/DevDesign';
import NotFound from '@/components/PublicPages/NotFound';

import { USER_GROUPS } from '@/constants/userGroups';
import { PRODUCTION } from 'config';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>{PRODUCTION ? <NotFound /> : <DevDesign />}</PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
