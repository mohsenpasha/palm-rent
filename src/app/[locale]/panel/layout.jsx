import Footer from "@/app/[locale]/components/Footer";
import Header from "@/app/[locale]/components/Header";

export const metadata = {
  title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
  description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت!  رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function PanelLayout({ children }) {
  return (
    <>
        <Header/>
        { children }
        <Footer/>
    </>
  );
}
