import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import ContactForm from 'src/TestComponents/ContactForm';

import { USER_GROUPS } from '@/constants/userGroups';
import { PRODUCTION } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={PRODUCTION ? [USER_GROUPS.DEVELOPER] : ['Public']}>
      <Seo title="Mohammad Mohajer">
        <PageContainer
          pageIdentifier="home"
          // pageSubNavIdentifier=""
          // pageDashboardIdentifier=""
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}
          // hasSideBarDashboard={true}
          changesThePage={false}>
          <ContactForm />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
