'use client'
import CarCategorySection from "@/app/components/CarCategorySection";
import CommentSection from "@/app/components/CommentSection";
import CommonQuestionSection from "@/app/components/CommonQuestionSection";
import { RecentBlogPosts } from "@/app/components/RecentBlogPosts";
import SearchBar from "@/app/components/SearchBar";
import { SearchBox } from "@/app/components/SearchBox";
import SearchFilterPopup from "@/app/components/SearchFilterPopup";
import SearchPopup from "@/app/components/SearchPopup";
import SingleCar from "@/app/components/SingleCar";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


export default function BranchPage(){
    const params = useParams()
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    const isSearchOpen = useSelector((state) => state.global.isSearchOpen)
    const isFilterOpen = useSelector((state) => state.global.isFilterOpen)
    const carList = useSelector((state) => state.carList.carList)
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
    useEffect(()=>{
        NProgress.start()
        const timeout = setTimeout(() => {
        NProgress.done()
        }, 300)
        return () => clearTimeout(timeout)
    },[])
    return(
        <>
        <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
            <div>
                {!isUnderLg && 
                    <Image className="object-contain" src={'/images/search-bg.png'} height={320} width={1440} alt=""></Image>
                }
                <div className="lg:-mt-[120px] mt-8">
                    <SearchBar/>
                </div>
            </div>
            <CarCategorySection/>
            <SearchBox/>
            <div className="flex flex-wrap gap-4">
                {/* <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full"> */}
                    {/* <SkeletonSingleCar/> */}
                {/* </div> */}
                {carList.map((item,index)=>{
                    return(
                        <div key={index} className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                            <SingleCar data={item}/>
                        </div>
                    )
                })}
            </div>
            <CommentSection/>
            <CommonQuestionSection rules={rules} setRules={setRules}/>
            <RecentBlogPosts/>
        </div>
            {isSearchOpen && 
                <SearchPopup/>
            }
            {isFilterOpen && 
                <SearchFilterPopup/>
            }
        </>
    )
}