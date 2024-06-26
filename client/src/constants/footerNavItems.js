import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from './vars';

const adminFooterNavItems = [
  {
    identifier: 'dashboard',
    title: 'Dashboard',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'gauge',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  },
  {
    identifier: 'admin-blogs',
    title: 'Blogs',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'newspaper',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  }
];

export const FOOTER_NAV_ITEMS = [...adminFooterNavItems];
