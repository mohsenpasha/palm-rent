import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fa', 'en', 'ar', 'tr'],  
  defaultLocale: 'fa',
  localePrefix: 'as-needed',
  localeDetection: false,
  // Used when no locale matches
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/contact': '/contact'
    // اگر بخوای برای هر زبان جدا تعریف کنی هم میشه
    // '/about': {
    //   fa: '/about',
    //   en: '/about',
    //   ar: '/about',
    //   tr: '/about'
    // }
  }

});