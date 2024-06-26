import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from '@/constants/vars';

const adminMenuItems = [
  {
    identifier: 'settings',
    title: 'Settings',
    icon: 'gear',
    showInDesktop: false,
    to: PAGE_ROUTES.DASHBOARD,
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  }
];

export const MENU_ITEMS = [...adminMenuItems];
