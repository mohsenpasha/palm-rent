'use client'
import CarSlider, { ImageGallery22 } from "@/app/[locale]/components/CarSlider";
import DescriptionPopup from "@/app/[locale]/components/DescriptionPopup";
import { IconInfo2, IconMoney } from "@/app/[locale]/components/Icons";
import { FineDeposit, ReservedServices } from "@/app/[locale]/components/InformationStep";
import SearchBar from "@/app/[locale]/components/SearchBar";
import { SingleCarImageSection } from "@/app/[locale]/components/SingleCarImageSection";
import SingleCarPopupGallery from "@/app/[locale]/components/SingleCarPopupGallery";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useTranslations } from "next-intl";
import { addCarList, clearCarList } from "@/redux/slices/carListSlice";


export default function SingleCarPage({data}){
    const dispatch = useDispatch()
    const [is404,setIs404] = useState(false)
    const descriptionPopup = useSelector((state)=>state.global.descriptionPopup)
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    const isSingleGalleryOpen = useSelector((state)=>state.global.isSingleGalleryOpen)
    useEffect(()=>{
        if(!data){
            setIs404(true)
        }
        dispatch(clearCarList())
        console.log(data.similar_cars)
        // dispatch(addCarList(data.similar_cars))
        NProgress.start()
            const timeout = setTimeout(() => {
            NProgress.done()
            }, 300)
            return () => clearTimeout(timeout)
        },[])
    if(is404){
        notFound()
    }
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
                <SingleCarImageSection data={data}/>
                <div className="flex gap-4 md:flex-nowrap flex-wrap my-4">
                    <PriceServiceBox data={data}/>
                    <CarInfoText text={data.text}/>
                </div>
                <div className="bg-white p-2 rounded-2xl">
                    <div className="lg:text-lg text-sm py-2 font-bold">شاید دوست داشته باشید !</div>
                    <CarSlider/>
                </div>
            </div>
            {isSingleGalleryOpen && 
                <SingleCarPopupGallery data={data.photos}/>
            } 
            {descriptionPopup.description && 
                <DescriptionPopup/>
            }
        </>
    )
}


export function PriceServiceBox({data}){
    const t = useTranslations();
    return(
        <div className="border w-full border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl bg-white">
            <div className="flex items-center lg:text-lg md:text-sm text-xs font-semibold gap-2">
                <span className="size-7">
                    <IconMoney/>
                </span>
                {t('price')} {data.title}
            </div>
            <div className="bg-[#F4F4F4] w-full flex flex-col rounded-2xl my-2">   
                {data.daily_price.map((item,index)=>{
                    return(
                        <SinglePrice key={index} title={item.title} value={
                            <>
                                {/* <span className="text-[#A7A7A7]">{item.price_off}%</span> */}
                                <span className="text-[#10B981]">{item.price}</span>
                                درهم روزانه
                            </>
                        }/>
                    )
                })}
            </div>
            <FineDeposit borderLess currency={'AED'} price={data.deposit}/>
            {/* <ReservedServices/> */}
        </div>
    )
}
export function SinglePrice({title,value}){
    return(
        <div className="border-b last:border-b-0 border-[#D4D4D480] p-5 flex justify-between xl:text-sm text-xs">
            <div>{title}</div>
            <div className="flex gap-1 xl:text-base text-sm">
                {value}
            </div>
        </div>
    )
}
export function CarInfoText({text}){
    return(
        <div className="border w-full border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl bg-white">
            <div className="flex items-center lg:text-lg md:text-sm text-xs font-semibold gap-2">
                <IconInfo2/>
                اطلاعات خودرو
            </div>
            <div className="flex flex-col gap-2 my-6">
                <p dangerouslySetInnerHTML={{ __html: text }} className="xl:text-base lg:text-sm text-xs text-justify">
                </p>
                {/* <Link className="text-[#3B82F6] text-left text-xs my-2" href={'#'}>بیشتر بخوانید !</Link> */}
            </div>
        </div>
    )
}