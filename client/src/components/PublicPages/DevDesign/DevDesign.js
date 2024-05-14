import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DevSection from './subs/DevSection';
import DisplaySurface from './subs/DisplaySurface';
import styles from './DevDesign.module.scss';

const DevDesign = () => {
  const [activeElements, setActiveElements] = useState('');

  return (
    <>
      <DevSection
        title="Surface"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplaySurface />
      </DevSection>
    </>
  );
};

export default DevDesign;
