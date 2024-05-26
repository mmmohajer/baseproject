import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Header from './subs/Header';
import Services from './subs/Services';
import WhoWeAre from './subs/WhoWeAre';
import Footer from './subs/Footer';
import styles from './TemporaryLanding.module.scss';

const TemporaryLanding = () => {
  return (
    <>
      <Header />
      <Div className="width-per-100" style={{ marginTop: '200px' }}>
        <Services />
      </Div>
      <Div className="m-t-100">
        <WhoWeAre />
      </Div>
      <Div className="m-t-100">
        <Footer />
      </Div>
    </>
  );
};

export default TemporaryLanding;
