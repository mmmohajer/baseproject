import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import Loading from '@/baseComponents/Loading';

import useApiCalls from '@/hooks/useApiCalls';
import { ACTIVATE_USER_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { loginUser } from '@/utils/auth';
import { PAGE_ROUTES } from '@/constants/vars';

import styles from './ActivateUser.module.scss';

const ActivateUser = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const router = useRouter();

  const [token, setToken] = useState('');
  const [pageAfterAuth, setPageAfterAuth] = useState('');
  const [userId, setUserId] = useState('');
  const [sendActivateReq, setSendActivateReq] = useState(false);
  const bodyData = {
    userId,
    token
  };

  const { data, error } = useApiCalls({
    sendReq: sendActivateReq,
    setSendReq: setSendActivateReq,
    method: 'POST',
    url: ACTIVATE_USER_API_ROUTE,
    bodyData,
    showLoading: true,
    showErrorMessage: true
  });

  useEffect(() => {
    if (router?.query?.token) {
      const localToken = router.query.token;
      setToken(localToken);
    }
    if (router?.query?.page) {
      setPageAfterAuth(router.query.page);
    }
  }, [router]);

  useEffect(() => {
    if (isAuthenticated?.isChecked && isAuthenticated?.authenticated) {
      if (!pageAfterAuth) {
        router.push(`${PAGE_ROUTES.DASHBOARD}`);
      } else if (pageAfterAuth === 'volunteer_profile') {
        router.push(`${PAGE_ROUTES.BUSINESS_EMPLOYEE.VOLUNTEERING}/profile`);
      } else if (pageAfterAuth === 'volunteer_recommendations_for_employees') {
        router.push(`${PAGE_ROUTES.BUSINESS_EMPLOYEE.VOLUNTEERING}?tab=recommendations`);
      } else if (pageAfterAuth === 'volunteer_events_for_employees') {
        router.push(`${PAGE_ROUTES.BUSINESS_EMPLOYEE.VOLUNTEERING}?tab=recommendations`);
      } else if (pageAfterAuth.includes('my-impact')) {
        const montDate = router?.query?.month_date;
        if (montDate) {
          router.push(`${PAGE_ROUTES.BUSINESS_EMPLOYEE.MY_IMPACT}?month_date=${montDate}`);
        } else {
          router.push(`${PAGE_ROUTES.BUSINESS_EMPLOYEE.MY_IMPACT}`);
        }
      } else {
        router.push(`${PAGE_ROUTES.DASHBOARD}`);
      }
    }
  }, [isAuthenticated, pageAfterAuth, router]);

  useEffect(() => {
    if (token) {
      let decoded;
      try {
        decoded = jwt_decode(token);
      } catch (e) {
        decoded = false;
      }
      if (decoded?.exp && Date.now() <= decoded.exp * 1000 && decoded?.user_id) {
        setUserId(decoded.user_id);
      } else {
        addAlertItem(
          dispatch,
          'Sorry, we are unable to activate your registration. That might be because your token has been expired.',
          'error'
        );
        router.push(PAGE_ROUTES.LOGIN);
      }
    }
  }, [token]);

  useEffect(() => {
    if (token && userId) {
      setSendActivateReq(true);
    }
  }, [token, userId]);

  useEffect(() => {
    if (data) {
      if (data.is_activated) {
        // addAlertItem(
        //   dispatch,
        //   'Congrats! you have successfully activated your registration with us!',
        //   'success'
        // );
        if (data.access && data.refresh) {
          loginUser(data.access, data.refresh, dispatch);
        }
      }
    }
  }, [data]);
  useEffect(() => {
    if (error?.data || error?.data?.message) {
      router.push(PAGE_ROUTES.LOGIN);
    }
  }, [error]);

  return (
    <>
      <Div type="flex" hAlign="center" vAlign="center" direction="vertical" className="flex--gr--1">
        {!token ? (
          <Div className="w-per-100">
            <Div className="text-center textGrayDark">
              In order to activate your account you must have a proper token being sent from your
              email address.
            </Div>
            <Div type="flex" hAlign="center" className="mt2">
              <Div
                className="textThemeOne text-underline mouse-hand"
                onClick={() => router.push(PAGE_ROUTES.LOGIN)}>
                Login/Register
              </Div>
            </Div>
          </Div>
        ) : (
          <Div className="w-per-100">
            <Div type="flex" hAlign="center" className="w-per-100">
              <Loading type={2} width={100} height={100} />
            </Div>
            <Div type="flex" hAlign="center" className="text-center textGrayDark">
              Logging into your account ...
            </Div>
          </Div>
        )}
      </Div>
    </>
  );
};

export default ActivateUser;
