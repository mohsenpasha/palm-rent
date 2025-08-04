'use client'
import { useEffect, useState } from "react";
import BranchSection from "./components/BranchSection";
import CarCategorySection from "./components/CarCategorySection";
import CommentSection from "./components/CommentSection";
import CommonQuestionSection from "./components/CommonQuestionSection";
import DescriptionSection from "./components/DescriptionSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingFirstView from "./components/LandingFirstView";
import { RecentBlogPosts } from "./components/RecentBlogPosts";
import { Why2Section } from "./components/Why2Section";
import WhySection from "./components/WhySection";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ApplicationSection } from "./components/ApplicationSection";
// import '../i18n/index'

NProgress.configure({ showSpinner: false })
export default function Home() {
      useEffect(()=>{
        NProgress.start()
        const timeout = setTimeout(() => {
          NProgress.done()
        }, 300)
        return () => clearTimeout(timeout)
      },[])
      const [rules,setRules] = useState([
          {
              q:'قیمت بنزین در دبی چقدر است؟',
              a:'قیمت بنزین در دبی در ژانوبه 2024\nای پلاس (اکتان 97) 2/77درهم،\nاسپشیال (اکتان 95) 2/85 درهم (پیشنهادی)\nسوپر (اکتان 98) 2/96درهم\nدیزل 3/19 درهم است.'
          },
          {
              q:'آیا می‌توانم در دبی بدون گواهی رانندگی خودرو اجاره کنم؟',
              a:'رانندگی بدون گواهینامه در اجاره خودرو غیرقانونی است  و با جریمه نقدی یا حتی حبس ممکن است متجاوز مواجه شود. همچنین، در صورت وقوع حادثه، بیمه هزینه‌های خسارت را پوشش نمی‌دهد. رعایت قوانین حائز اهمیت است تا مشکلات حقوقی و مالی جلوگیری شود.'
          },
          {
              q:'چگونه و از کجا می‌توانم سیم‌کارت بخرم؟ و آیا واقعاً نیاز به آن دارم؟',
              a:'به طور معمول، در فرودگاه ممکن است یک سیم‌کارت رایگان با ۲ گیگابایت اینترنت به شما هدیه داده شود. اما اگر این امکان وجود ندارد، می‌توانید از غرفه‌های شرکت اتصالات که در تمام نقاط دبی فعالیت دارند، سیم‌کارت خود را تهیه کنید. برای یک بسته اینترنتی ۷ روزه، هزینه تقریبی میان ۷۰ الی ۱۰۰ درهم است. حتماً توصیه می‌شود که سیم‌کارت را دریافت کنید، زیرا برای استفاده از سرویس‌هایی مانند گوگل‌مپ و یافتن مسیرها، اتصال به اینترنت ضروری است.'
          },
      ])
  return (
    <>
      <Header />
      <LandingFirstView/>
      {/* <CarCategorySection/> */}
      <BranchSection/>
      <WhySection/>
      <ApplicationSection/>
      <CommonQuestionSection rules={rules} setRules={setRules}/>
      <CommentSection/>
      <Why2Section/>
      <DescriptionSection/>
      <RecentBlogPosts/>
      <Footer/>
      
    </>
  );
}
