getJsContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    echo """import React from \"react\";
import cx from \"classnames\";
import { Div } from \"basedesign-iswad\";

import Surface from '@/baseComponents/Surface';

import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';


import styles from \"./$compName.module.scss\";

const $compName = () => {
  return (
    <>
      <Surface>$compName</Surface>
    </>
  );
};

export default $compName;
"""
}

getJsPageContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    echo """import React from \"react\";
import cx from \"classnames\";
import { Div } from \"basedesign-iswad\";

import PublicRoute from \"@/components/PublicRoute\";
import RoleBasedRoute from \"@/components/RoleBasedRoute\";
import Seo from \"@/components/Seo\";
import PageContainer from \"@/components/PageContainer\";

import { USER_GROUPS } from \"@/constants/userGroups\";
import { IS_STAGING_ENV } from \"config\";

import styles from \"./$compName.module.scss\";

const $compName = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo title=\"$compName | App\">
        <PageContainer pageIdentifier=\"$compName\">
          <Div className=\"\">$compName</Div>
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default $compName;
"""
}

getAppsContext() {
local appName=$1

echo """from django.apps import AppConfig


class AppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = '$appName'
"""
}

getUrlsContext() {
echo """from django.urls import path, include
from rest_framework import routers
"""
}

getTestFileContext() {
  local compName=$1

  echo """import React from \"react\";
import { render as renderRTL, screen, fireEvent } from \"@testing-library/react\";
import $compName from \"../$compName\";
import * as reactRedux from \"react-redux\";
import { BrowserRouter } from \"react-router-dom\";

const render = (component) =>
  renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock(\"react-redux\", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe(\"Test $compName Component\", () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test(\"\", () => {
    render(<$compName />);

    expect(screen.getByText(/$compName/i)).toBeInTheDocument();
  });
});

"""
}
