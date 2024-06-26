import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import styles from './Search.module.scss';

const Search = React.forwardRef(
  ({ closable = true, iconColor = 'gray', className, containerClassName, ...props }, ref) => {
    const [activeSearch, setActiveSearch] = useState(false);

    useEffect(() => {
      if (!closable) {
        setActiveSearch(true);
      }
    }, [closable]);

    return (
      <>
        <Div type="flex" className="width-per-100">
          <Div
            className={cx(
              'min-height-px-40 width-per-100 bg-white flex flex--jc--center flex--ai--center box-shadow-type-one',
              !closable ? 'global-row-reverse br-rad-px-6' : 'br-rad-px-50',
              styles.container,
              containerClassName
            )}>
            {closable ? (
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                onClick={() => setActiveSearch(!activeSearch)}
                className="mouse-hand width-px-40 height-px-30 br-rad-px-50 bg-silver">
                <Icon type={activeSearch ? 'close' : 'search'} scale={0.8} color="gray" />
              </Div>
            ) : (
              <Div className="mouse-hand m-r-8">
                <Icon
                  type="search"
                  scale={0.8}
                  color="gray"
                  className={cx(closable && 'mouse-hand')}
                />
              </Div>
            )}
            <input
              type="text"
              className={cx('', styles.input, activeSearch && styles.inputActive, className)}
              {...props}
            />
          </Div>
        </Div>
      </>
    );
  }
);

export default Search;
