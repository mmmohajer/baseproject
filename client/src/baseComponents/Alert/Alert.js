import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph, Alert as BaseAlert, AlertItem } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';

import { COLORS } from '@/constants/vars';
import { removeAlertItem } from '@/utils/notifications';

import styles from './Alert.module.scss';

const Alert = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <BaseAlert className={cx('AlertContainerZIndex pos-fix pos-fix--rt')}>
        {notifications.map((notif) => (
          <AlertItem
            key={notif.key}
            isActive={notif.isActive}
            className={cx(
              'm-ll-1 box-shadow-type-one br-rad-px-5 transition-type-1 bg-white m-b-8',
              notif?.type === 'success' && 'br-all-solid-3 br-success',
              notif?.type === 'error' && 'br-all-solid-3 br-red',
              notif?.type === 'warning' && 'br-all-solid-3 br-warning',
              styles.item
            )}
            activeClassName={cx(styles.itemIsActive)}>
            <Div className="width-per-100" direction="vertical" type="flex">
              <Close
                barHeight="30px"
                barColor=""
                iconColor={COLORS.grayDark}
                iconScale={0.8}
                onClick={() => removeAlertItem(dispatch, notif.key)}
              />
              <Paragraph className="p-all-8">{notif.message}</Paragraph>
            </Div>
          </AlertItem>
        ))}
      </BaseAlert>
    </>
  );
};

export default Alert;
