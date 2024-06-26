import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from './vars';

const generalItems = [
  {
    identifier: 'home',
    title: 'Home',
    to: PAGE_ROUTES.HOME,
    hasSubMenu: false,
    showInDesktop: false,
    showInMobile: false,
    isInApp: false,
    isInWeb: true
  },
  {
    identifier: 'our-services',
    title: 'Our Services',
    to: '/',
    hasSubMenu: true,
    showInDesktop: true,
    showInMobile: true,
    submenuTranslteX: '-100px',
    isInApp: false,
    isInWeb: true
  }
];

export const MENU_ITEMS = [...generalItems];

export const SUB_MENU_ITEMS = {
  'our-services': [
    {
      identifier: 'mvp-development',
      title: 'MVP Development',
      to: PAGE_ROUTES.HOME
    },

    {
      identifier: 'web-app-development',
      title: 'Customized Web/Mobile App Development',
      to: PAGE_ROUTES.HOME
    },

    {
      identifier: 'branding',
      title: 'Website Development & Branding',
      to: PAGE_ROUTES.HOME
    },

    {
      identifier: 'counselling',
      title: 'Counselling & Coaching',
      to: PAGE_ROUTES.HOME
    },

    {
      identifier: 'team-augmentation',
      title: 'Team Augmentation',
      to: PAGE_ROUTES.HOME
    }
  ]
};
