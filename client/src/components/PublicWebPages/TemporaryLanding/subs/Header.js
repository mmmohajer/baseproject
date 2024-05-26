import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Heading } from 'basedesign-iswad';

import Paragraph from '@/baseComponents/Paragraph';
import InputWithButton from '@/baseComponents/InputWithButton';
import AppImage from '@/baseComponents/AppImage';

import useApiCalls from '@/hooks/useApiCalls';
import { WEB_SUBSCRIBER_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { setModalType } from '@/reducers/general/modalType';
import { setModalHeader } from '@/reducers/general/modalHeader';
import { isValidEmail } from '@/utils/helpers';

import logo from '@/images/js-Images/general/Header/Header-Logo.png';

import styles from '../TemporaryLanding.module.scss';
import { setModalProps } from '@/reducers/general/modalProps';
import { MODAL_TYPES } from '@/constants/devDesignVars';

const Header = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const customValidation = () => {
    let validated = true;
    if (!email) {
      validated = false;
      addAlertItem(dispatch, 'Email is required to submit your information.', 'error');
      return false;
    }
    if (!isValidEmail(email)) {
      validated = false;
      addAlertItem(dispatch, 'Please enter a correct email address.', 'error');
    }
    return validated;
  };
  // -----------------------------------------------------------
  // -----------------------------------------------------------
  const [sendSubscriberReq, setSendSubscriberReq] = useState(false);
  const bodyData = {
    email
  };
  const { data, error } = useApiCalls({
    sendReq: sendSubscriberReq,
    setSendReq: setSendSubscriberReq,
    method: 'POST',
    url: WEB_SUBSCRIBER_API_ROUTE,
    bodyData
  });
  useEffect(() => {
    if (data) {
      if (data?.success) {
        setEmail('');
        dispatch(
          setModalProps({
            message: `Thank you for subscribing to our website! We're excited to have you on board. You'll be the first to know when our main web pages are ready and when we have exciting updates to share. Stay tuned for more information and feel free to reach out if you have any questions. Welcome to our community!`
          })
        );
        dispatch(setModalType(MODAL_TYPES['prompt-message']));
      }
    }
  }, [data]);
  // -----------------------------------------------------------
  // -----------------------------------------------------------

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        direction="vertical"
        className="w-per-100 global-bg-grad-one p-x-20 p-y-48 pos-rel">
        <Heading type={1} className="text-white m-b-48 max-width-700">
          We’re Coming Soon
        </Heading>
        <Paragraph isCentralized className="text-black m-b-48 max-width-px-700">
          Our website is currently undergoing exciting renovations to enhance your browsing
          experience. In the meantime, feel free to reach out to us via email at info@iswad.tech for
          any inquiries or assistance. Thank you for visiting, and we look forward to unveiling our
          revamped site soon!
        </Paragraph>
        <Div className="width-per-100 max-width-px-700">
          <InputWithButton
            val={email}
            setVal={setEmail}
            placeHolder="Email"
            name="email"
            id="temp-page-email"
            btnText="Notify Me"
            onBtnClick={() => {
              if (customValidation()) {
                setSendSubscriberReq(true);
              }
            }}
          />
        </Div>
        <Div className={cx('width-px-350 pos-abs', styles.headerLogo)}>
          <AppImage src={logo} objectFit="contain" heightOverWidthAsprctRatio={0.3} />
        </Div>
      </Div>
    </>
  );
};

export default Header;
