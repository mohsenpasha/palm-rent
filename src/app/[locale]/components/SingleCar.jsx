'use client'
import Image from "next/image";
import { IconArrowHandle, IconBag, IconGas, IconGearBox, IconPerson, IconPlay, IconSend, IconWhatsapp } from "./Icons";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeReelActive } from "@/redux/slices/reelsSlice";
import Link from "next/link";
import { getDiffInShamsiDays } from "./SearchBar";
import { changeRoadMapStep } from "@/redux/slices/globalSlice";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { dateDifference } from "@/app/lib/getDateDiffrence";
import { getLangUrl } from "@/app/lib/getLangUrl";

export default function SingleCar({data,noBtn = false}){
    const t = useTranslations();
    const optionList = useSelector((state)=>state.carList.optionList)
    const [isHovering,setIsHovering] = useState(false)
    return(
        <div className={`${isHovering && 'z-30'} flex w-full flex-col hover:scale-[97%] bg-white cursor-pointer transition-all rounded-2xl md:text-sm text-xs border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-[10px]`}>
            <SingleCarGallery imageList={data.images} noBtn={noBtn ? noBtn : data.video.length == 0}>
                {!noBtn && 
                    <div className="flex text-[#0B835C] text-[10px] absolute gap-2 text-nowrap top-2 rtl:right-2 ltr:left-2 w-full flex-wrap">
                        {data.options.map((item,index)=>{
                            return(
                                <div onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} className="py-1 group px-2 rounded-4xl bg-[#3b82f6] relative hover:scale-[105%] transition-all" key={index}>
                                    <span className="text-white font-bold">{t(optionList[item].title)}</span>
                                    <div className="absolute top-0 hidden group-hover:flex animate-opacity pb-3 z-50 left-1/2 -translate-x-1/2 -translate-y-full">
                                        <div className="bg-white min-w-64 max-w-64 whitespace-break-spaces text-justify text-xs rounded-lg border-[1px] p-2 border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
                                            {optionList[item].description}
                                            <div className="w-0 h-0 rotate-180 absolute bottom-0 left-1/2 border-l-16 border-r-16 border-t-0 border-b-16 border-l-transparent -translate-x-1/2 border-r-transparent border-b-white"></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
                {data.discount && 
                    <div className="absolute bottom-4 bg-[#DF900A] py-1.5 px-2.5 text-white right-0 rounded-lg rounded-r-[0]">
                        {data.discount}% {t('discount')}
                    </div>
                }
            </SingleCarGallery>
            <div className="text-left my-2 lg:text-lg sm:text-base text-sm">{data.title}</div>
            <SingleCarOptions data={data}/>
            <SingleCarPriceList priceList={data.priceList}/>
            {!noBtn && 
                <SingleCarButtonHolder2/>
            }
        </div>
    )
}

export function SingleCarGallery({children,noBtn,imageList}){
    const t = useTranslations();
    const dispatch = useDispatch()
    const [hoverList,setHoverList] = useState([true,false,false,false])
    function galleryHoverHandler(targetIndex){
        setHoverList(hoverList.map((item,index)=>{
            if(index == targetIndex){
                return true
            }
            else{
                return false
            }
        }))
    }
    function mouseLeaveHandler(){
        setHoverList([true,false,false,false])
    }
    function activateReel(){
        dispatch(changeReelActive(true))
    }
    return(
        <div className="flex relative z-10 w-full lg:h-[220px] h-[220px]">
            <div className="flex h-full">
                <div className="absolute w-full h-full top-0 right-0 rounded-lg -z-10">
                    {imageList.map((item,index)=>{
                        return(
                            (index != imageList.length - 1)?
                                <Image key={index} className={`${hoverList[index] ? 'z-10' : ''} rounded-lg w-full h-full object-cover absolute`} src={item} width={395} height={253} alt=''></Image>
                            :
                                <div key={index} href={'test'} className={`${hoverList[index] ? 'z-10' : ''} rounded-lg w-full h-full absolute`}>
                                    <div className={`absolute w-full h-full rounded-lg ${hoverList[index] ? 'z-20' : ''} bg-[#000000aa] text-white flex flex-col items-center justify-center`}>
                                        <span className="flex items-center justify-center border-2 border-white rounded-full size-16 rotate-135">
                                            <span className="flex size-6">
                                                <IconArrowHandle/>
                                            </span>
                                        </span>
                                        {t('morePic')}
                                    </div>
                                    <Image className={`${hoverList[index] ? 'z-10' : ''} rounded-lg w-full h-full object-cover absolute`} src={item} width={395} height={253} alt=''></Image>
                                </div>
                        )
                    })}
                </div>
                    <div className="z-20">
                        {children}
                    </div>

                <div className="absolute w-full h-full flex items-end flex-row-reverse p-2 cursor-pointer transition-all opacity-0 hover:opacity-100">
                    {imageList.map((_,index)=>{
                        return(
                            index != imageList.length - 1 ? 
                            <div key={index} onMouseLeave={mouseLeaveHandler} onMouseMove={()=>galleryHoverHandler(index)} className="w-full h-full flex items-end group px-1">
                                <span className="w-full h-1 rounded-2xl bg-[#00000070] group-hover:bg-white transition-all"></span>
                            </div>
                            :
                            <Link key={index} href={'test'} onMouseLeave={mouseLeaveHandler} onMouseMove={()=>galleryHoverHandler(index)} className="w-full h-full flex items-end group px-1">
                                <span className="w-full h-1 rounded-2xl bg-[#00000070] group-hover:bg-white transition-all"></span>
                            </Link>
                        )
                    })}
                </div>
            </div>
            {!noBtn && 
                <div onClick={activateReel} className="absolute left-2 bottom-2 cursor-pointer">
                    <IconPlay/>
                </div>
            }
        </div>
    )
}
export function SingleCarOptions({data,bigFont=false}){
    const t = useTranslations();
    return(
        <div className={`flex w-full text-[#787878] border-[#0000001F] pt-4 text-nowrap ${bigFont ? 'xl:text-base sm:text-sm text-xs filter-[brightness(0.5)]' :'text-xs border-t-[1px]'}`}>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-5 size-4' :`size-4`}>
                    <IconGas/>
                </span>
                {t(String(data.gasType == 'بنزین' ? 'petrol' : data.gasType).toLowerCase())}
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-5 size-4' :`size-4`}>
                    <IconGearBox/>
                </span>
                {t(data.gearBox)}
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-5 size-4' :`size-4`}>
                    <IconBag/>
                </span>
                {data.suitcase} {t('suitCase')}
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-5 size-4' :`size-4`}>
                    <IconPerson/>
                </span>
                {data.passengers} {t('people')}
            </div>
        </div>
    )
}
export function SingleCarPriceList({priceList}){
    const t = useTranslations();
    const [rentDay,setRentDay] = useState(null)
    const [finalDayPrice,setFinalDayPrice] = useState(null)
    const carDates = useSelector((state)=>state.global.carDates)
    
    // const router = useRouter();
    const pathname = usePathname()
    const locale = useLocale();
    const isInSearchPage = pathname == getLangUrl(locale) + '/search'
    const isBranchPage = pathname.includes('cars-rent')
    useEffect(()=>{
        if(isInSearchPage){
            Object.entries(priceList).map(([key,value])=>{
                if(key == '1'){
                    setFinalDayPrice(value)
                    setRentDay(dateDifference(carDates[0],carDates[1]).days)
                }
            })
        }
    },[carDates])
    // return(
    //     <div>
    //         test
    //     </div>
    // )
    console.log(finalDayPrice)
    return(
        <div>
            {/* <div className="w-full border-b-[1px] border-[#0000001f] py-2">
                قیمت کرایه تویوتا یاریس 2024 دبی
            </div> */}
            <div className="flex flex-col gap-2 my-4 border-t-[1px] pt-2 border-[#0000001f]">
                {Object.entries(priceList).length == 1 ?
                <div className="flex justify-between items-center">
                    <span>{t('BSPrice')} {rentDay} {t('day')}</span>
                    <div className="lg:text-base text-sm flex gap-2">
                        <span className="text-[#A7A7A7] line-through">
                            {finalDayPrice?.previousPrice != finalDayPrice?.currentPrice && finalDayPrice?.previousPrice}
                        </span>
                        <span className="text-[#10B981]">
                            {finalDayPrice?.currentPrice}
                        </span>
                        {t('AED')} {t('daily')}
                    </div>
                </div>
                : 
                
                Object.entries(priceList).map(([key, { previousPrice, currentPrice }]) => (
                    // <div key={key}>
                    //     {key}
                    // </div>
                    <div key={key} className="flex justify-between">
                        <div>
                            {(() => {
                                const [from, to] = key.split(":");
                                return to.length === 0 ? (
                                    <>{t('moreThan')} {from} {t('day')}</>
                                ) : (
                                    <>{t('from')} {from} {t('to')} {to} {t('day')}</>
                                );
                            })()}
                        </div>
                        <div className="lg:text-base text-sm flex gap-2">
                            <span className="text-[#A7A7A7] line-through">
                                {previousPrice}
                            </span>
                            <span className="text-[#10B981]">
                                {currentPrice}
                            </span>
                            {t('AED')} {t('daily')}
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}
export function SingleCarButtonHolder1(){
    return(
        <div className="flex w-full gap-4">
            <button className="border-[1px] border-[#629BF8] rounded-xl text-[#629BF8] py-2 flex justify-center gap-2 w-full cursor-pointer hover:bg-[#629BF8] transition-all hover:text-white hover:border-transparent">
                <IconSend/>
                رزرو فوری
            </button>
            <Link href="https://wa.me/989123456789?text=%D8%B3%D9%84%D8%A7%D9%85%20%D8%AE%D9%88%D8%B4%D9%85%20%D8%A7%D9%88%D9%85%D8%AF%DB%8C" target="_blank" className="border-[1px] border-[#10B981] rounded-xl text-[#10B981] py-2 flex justify-center gap-2 w-full cursor-pointer hover:bg-[#10B981] transition-all hover:text-white hover:border-transparent">
                <IconWhatsapp/>
                رزرو : واتس اپ
            </Link>
        </div>
    )
}
export function SingleCarButtonHolder2(){
    const t = useTranslations();
    const [whatsappText,setWhatsappText] = useState()
    const text = ''
    const carDates = useSelector((state)=> state.global.carDates)
    const deliveryTime = useSelector((state)=> state.global.deliveryTime)
    const returnTime = useSelector((state)=> state.global.returnTime)
    useEffect(()=>{
        setWhatsappText('سلام ، مایل هستم یک خودروی تویوتا یاریس در دبی از تاریخ ' + carDates[0] +' ساعت '+ deliveryTime +' تا '+ carDates[1] +' ساعت '+ returnTime +' به مدت '+ getDiffInShamsiDays(carDates[0],carDates[1]) +' روز رزرو کنم. لطفاً راهنمایی بفرمایید.')
    },[])
    // this is test for showing
    const dispatch = useDispatch()
    function nextStep(){
        dispatch(changeRoadMapStep(2))
    }
    return(
        <div className="flex w-full gap-2">
            <button onClick={nextStep} className="rounded-xl py-2 flex justify-center gap-2 w-full cursor-pointer bg-[#3B82F6] text-white">
                {t('chooseCar')}
            </button>
            <Link href={`https://wa.me/971556061134?text=${encodeURIComponent(whatsappText)}`} target="_blank" className="rounded-xl py-2 flex justify-center gap-2 w-fit text-nowrap px-2 cursor-pointer bg-[#10B981] text-white">
                <IconWhatsapp/>
                {t('whatsapp')}
            </Link>
        </div>
    )
}
