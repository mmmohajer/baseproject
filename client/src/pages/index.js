import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import TemporaryLanding from '@/components/PublicWebPages/TemporaryLanding';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo>
        <PageContainer
          pageIdentifier="home"
          hasHeader={false}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <TemporaryLanding />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
