import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Link from 'next/link';

import styles from './Anchor.module.scss';

const Anchor = ({
  anchorType = 1,
  to,
  internal = true,
  target = '_blank',
  className,
  children,
  ...props
}) => {
  return (
    <>
      {internal && (
        <Link href={to} {...props}>
          <a className={cx(anchorType === 1 && styles.anchor1, className)}>{children}</a>
        </Link>
      )}
      {!internal && (
        <a
          className={cx(
            anchorType === 1 && styles.anchor1,

            className
          )}
          href={to}
          target={target}
          {...props}>
          {children}
        </a>
      )}
    </>
  );
};

export default Anchor;
