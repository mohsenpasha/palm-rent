import Footer from "@/app/[locale]/components/Footer";
import Header from "@/app/[locale]/components/Header";
// import { useParams } from "next/navigation";

// export const metadata = {
//   title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
//   description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت!  رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
//   icons: {
//     icon: '/favicon.png',
//   },
// };

export default async function BranchLayout({ children,params }) {
  const { cityName } = await params;
  const cityList = ["dubai", "istanbul", "kayseri", "kish", "ezmir", "georgia", "oman", "samsun", "antalya", "ankara"]
  if(!cityList.includes(cityName)) return
  return (
    <>
        <Header/>
        { children }
        <Footer/>
    </>
  );
}
