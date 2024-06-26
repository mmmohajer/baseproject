import { LIST_OF_ICONS, PNG_ICON_TYPES } from '@/constants/devDesignVars';
import { PAGE_ROUTES } from '@/constants/vars';

export const COMPANY_LINKS = [
  { title: 'Home', url: PAGE_ROUTES.HOME },
  { title: 'About Us', url: PAGE_ROUTES.HOME },
  { title: 'Case Studies', url: PAGE_ROUTES.HOME }
];

export const LEARN_MORE_LINKS = [
  { title: 'MVP Development', url: `${PAGE_ROUTES.HOME}` },
  { title: 'App Development', url: `${PAGE_ROUTES.HOME}` },
  { title: 'Counselling', url: `${PAGE_ROUTES.HOME}` },
  { title: 'Branding', url: `${PAGE_ROUTES.HOME}` },
  { title: 'Team Augmentation', url: `${PAGE_ROUTES.HOME}` }
];

export const CONTACT = [
  { icon: LIST_OF_ICONS.phone, value: '+1(226)977-0855' },
  { icon: LIST_OF_ICONS.envelope, value: 'info@iswad.tech' }
];

export const FOLLOW = [
  { icon: PNG_ICON_TYPES.instagram, url: 'https://www.instagram.com/iswad.tech/' },
  { icon: PNG_ICON_TYPES.facebook, url: 'https://www.facebook.com/iswad.tech/' },
  { icon: PNG_ICON_TYPES.linkedIn, url: 'https://ca.linkedin.com/company/iswadtech' }
];
