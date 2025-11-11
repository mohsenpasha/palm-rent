// app/layout.tsx
import "../globals.css";
import ReduxProvider from "./components/ReduxProvider";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

// حذف metadata استاتیک چون حالا از generateMetadata استفاده می‌کنیم
// export const metadata = {
//   title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
//   description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت!  رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
//   icons: {
//     icon: '/favicon.png',
//   },
// };

export default async function RootLayout({ children, params }) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale == 'fa' || locale == 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}