import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PngIcon from '@/baseComponents/PngIcon';
import Anchor from '@/baseComponents/Anchor';

import { COLORS } from '@/constants/vars';
import { PNG_ICON_TYPES } from '@/constants/devDesignVars';

import styles from '../TemporaryLanding.module.scss';

const Footer = () => {
  return (
    <>
      <Div type="flex" direction="vertical" className="bg-theme-two p-all-16">
        <Div className="text-center text-white m-b-16">Find Us Here</Div>
        <Div type="flex" hAlign="center">
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="width-px-30 height-px-30 m-r-8 br-rad-per-50 of-hidden mouse-hand">
            <Anchor to={'https://www.instagram.com/iswad.tech/'} internal={false}>
              <PngIcon type={PNG_ICON_TYPES.instagram} width={30} />
            </Anchor>
          </Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="width-px-30 height-px-30 m-r-8 br-rad-per-50 of-hidden mouse-hand">
            <Anchor to={'https://ca.linkedin.com/company/iswadtech'} internal={false}>
              <PngIcon type={PNG_ICON_TYPES.linkedIn} width={30} />
            </Anchor>
          </Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="width-px-30 height-px-30 m-r-8 br-rad-per-50 of-hidden mouse-hand">
            <Anchor to={'https://www.facebook.com/iswad.tech/'} internal={false}>
              <PngIcon type={PNG_ICON_TYPES.facebook} width={30} />
            </Anchor>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Footer;
