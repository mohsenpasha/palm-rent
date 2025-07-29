import "./globals.css";
import ReduxProvider from "./components/ReduxProvider";


export const metadata = {
  title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
  description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت!  رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
