import Footer from "../components/Footer";
import Header from "../components/Header";
import { ResNavigationBar } from "../components/ResponseNavigationBar";
export const metadata = {
  title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
  description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت!  رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
  icons: {
    icon: '/favicon.png',
  },
};

export default async function MyOrderLayout({ children }) {
  return (
    <>
        <Header/>
            {children}
            <ResNavigationBar/>
        <Footer/>
    </>
  );
}
