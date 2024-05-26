import React from 'react';
import cx from 'classnames';

import ActivateUserComponent from '@/baseComponents/ActivateUser';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <ActivateUserComponent />
      </Seo>
    </PublicRoute>
  );
};

export function getStaticParams() {
  return ['token'];
}

export default Index;
