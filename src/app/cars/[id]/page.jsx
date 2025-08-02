'use client'
import CarSlider, { ImageGallery22 } from "@/app/components/CarSlider";
import DescriptionPopup from "@/app/components/DescriptionPopup";
import { IconInfo2, IconMoney } from "@/app/components/Icons";
import { FineDeposit, ReservedServices } from "@/app/components/InformationStep";
import SearchBar from "@/app/components/SearchBar";
import { SingleCarImageSection } from "@/app/components/SingleCarImageSection";
import SingleCarPopupGallery from "@/app/components/SingleCarPopupGallery";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function CarsPage(){
    const descriptionPopup = useSelector((state)=>state.global.descriptionPopup)
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    const isSingleGalleryOpen = useSelector((state)=>state.global.isSingleGalleryOpen)
    useEffect(()=>{
            NProgress.start()
            const timeout = setTimeout(() => {
            NProgress.done()
            }, 300)
            return () => clearTimeout(timeout)
        },[])
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div>
                    {!isUnderLg && 
                        <Image className="object-contain" src={'/images/search-bg.png'} height={320} width={1440} alt=""></Image>
                    }
                    <div className="lg:-mt-[120px] mt-8">
                        <SearchBar/>
                    </div>
                </div>
                <SingleCarImageSection/>
                <div className="flex gap-4 md:flex-nowrap flex-wrap my-4">
                    <PriceServiceBox/>
                    <CarInfoText/>
                </div>
                <div className="bg-white p-2 rounded-2xl">
                    <div className="lg:text-xl text-base py-2 font-bold">شاید دوست داشته باشید !</div>
                    <CarSlider/>
                </div>
            </div>
            {isSingleGalleryOpen && 
                <SingleCarPopupGallery/>
            } 
            {descriptionPopup.description && 
                <DescriptionPopup/>
            }
        </>
    )
}


export function PriceServiceBox(){
    return(
        <div className="border-[1px] w-full border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl bg-white">
            <div className="flex items-center lg:text-xl md:text-base text-sm font-semibold gap-2">
                <span className="size-7">
                    <IconMoney/>
                </span>
                قیمت تویوتا یاریس 2025 در دبی
            </div>
            <div className="bg-[#F4F4F4] w-full flex flex-col rounded-2xl my-2">   
                <SinglePrice title={'از 1 تا 6روز '} value={
                    <>
                        <span className="line-through text-[#A7A7A7]">140</span>
                        <span className="text-[#10B981]">98</span>
                        درهم روزانه
                    </>
                }/>
                <SinglePrice title={'از7  تا 19 وز '} value={
                    <>
                        <span className="line-through text-[#A7A7A7]">140</span>
                        <span className="text-[#10B981]">98</span>
                        درهم روزانه
                    </>
                }/>
                <SinglePrice title={'از 20  تا 29 روز '} value={
                    <>
                        <span className="line-through text-[#A7A7A7]">140</span>
                        <span className="text-[#10B981]">98</span>
                        درهم روزانه
                    </>
                }/>
                <SinglePrice title={'بیشتر از 30 روز'} value={
                    <>
                        <span className="line-through text-[#A7A7A7]">140</span>
                        <span className="text-[#10B981]">98</span>
                        درهم روزانه
                    </>
                }/>
            </div>
            <FineDeposit/>
            <ReservedServices/>
        </div>
    )
}
export function SinglePrice({title,value}){
    return(
        <div className="border-b-[1px] last:border-b-0 border-[#D4D4D480] p-5 flex justify-between xl:text-base text-sm">
            <div>{title}</div>
            <div className="flex gap-1 xl:text-lg text-base">
                {value}
            </div>
        </div>
    )
}
export function CarInfoText(){
    return(
        <div className="border-[1px] w-full border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl bg-white">
            <div className="flex items-center lg:text-xl md:text-base text-sm font-semibold gap-2">
                <IconInfo2/>
                اطلاعات خودرو
            </div>
            <div className="flex flex-col gap-2 my-6">
                <p className="xl:text-lg lg:text-base text-sm text-justify">
                    تویوتا یاریس ۲۰۲۴ یکی از خودروهای کامپکت و محبوب برای اجاره در دبی است این خودرو با طراحی زیبا و امکانات پیشرفته، تجربه ای راحت و مطمئن را برای رانندگان و مسافران فراهم می کند. اگر به دنبال اجاره خودرو در دبی هستید تویوتا یاریس یکی از بهترین گزینه ها برای شماست. این خودرو علاوه بر مصرف سوخت بهینه و امکانات ایمنی ،پیشرفته دارای فضای داخلی مدرن و طراحی جذاب است شرکت پالم رنت با ارائه خدمات بینظیر و پشتیبانی شبانه روزی بهترین تجربه اجاره خودرو را برای مشتریان خود فراهم می کند شما میتوانید با استفاده از خدمات اجاره خودرو در دبی از پالم رنت، سفری راحت و بی دغدغه را تجربه کنید.تویوتا یاریس ۲۰۲۴ یکی از خودروهای کامپکت و محبوب برای اجاره در دبی است این خودرو با طراحی زیبا و امکانات پیشرفته، تجربه ای راحت و مطمئن را برای رانندگان و مسافران فراهم می کند. اگر به دنبال اجاره خودرو در دبی هستید تویوتا یاریس یکی از بهترین گزینه ها برای شماست. این خودرو علاوه بر مصرف سوخت بهینه و امکانات ایمنی ،پیشرفته دارای فضای داخلی مدرن و طراحی جذاب است شرکت پالم رنت با ارائه خدمات بینظیر و پشتیبانی شبانه روزی بهترین تجربه اجاره خودرو را برای مشتریان خود فراهم می کند شما میتوانید با استفاده از خدمات اجاره خودرو در دبی از پالم رنت، سفری راحت و بی دغدغه را تجربه کنید.
                </p>
                <Link className="text-[#3B82F6] text-left text-xs my-2" href={'#'}>بیشتر بخوانید !</Link>
            </div>
        </div>
    )
}