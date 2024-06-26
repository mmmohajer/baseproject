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
          <a
            className={cx(
              'mouse-hand',
              anchorType === 1 && 'text-theme-one underline',
              anchorType === 2 && 'text-black underline',
              anchorType === 3 && 'text-off-black underline text-black-on-hover',
              anchorType === 4 && '',
              className
            )}>
            {children}
          </a>
        </Link>
      )}
      {!internal && (
        <a
          className={cx(
            'mouse-hand',
            anchorType === 1 && 'text-theme-one underline',
            anchorType === 2 && 'text-black underline',
            anchorType === 3 && 'text-black underline text-off-black-on-hover',
            anchorType === 4 && '',
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
