import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCarButtonHolder2, SingleCarGallery, SingleCarOptions, SingleCarPriceList } from "./SingleCar";
import { useLocale, useTranslations } from "next-intl";
import { IconArrow, IconArrowHandle, IconDiscount, IconWhatsapp } from "./Icons";
import Link from "next/link";
import Image from "next/image";
import { getDiffInShamsiDays } from "./SearchBar";
import { usePathname } from "next/navigation";
import { getLangUrl } from "@/app/lib/getLangUrl";
import { dateDifference } from "@/app/lib/getDateDiffrence";

export default function SingleCar2({data,noBtn = false}){
    // const data = recivedData.data
    // console.log(data)
    // console.log(data.options)
    // const data = {
    //     id:1164,
    //     title:"Kia seltos 2023",
    //     gearBox:"automatic",
    //     passengers:5,
    //     priceList:{'1':{
    //             previousPrice:143,
    //             currentPrice:129
    //         }
    //     },
    //     images:[
    //         "https://palmrentcar.com/assets/uploads/car/car/1402-12-16/photos/photos-d09c69e08ef87a34a0598847639001ba.webp",
    //         "https://palmrentcar.com/assets/uploads/car/car/1402-12-16/photos/photos-8a80a5d2651f49fd84e670b2f996c878.webp",
    //         "https://palmrentcar.com/assets/uploads/car/car/1402-12-16/photos/photos-8e30c86302c67a2fb50928960266de57.webp",
    //         "https://palmrentcar.com/assets/uploads/car/car/1402-12-16/photos/photos-05878cdd7f8aca9e36dd838c01a0e507.webp"
    //     ],
    //     options:[
    //         1,2
    //     ],
    //     suitcase:4,
    //     gasType:"petrol",
    //     discount:10,
    //     video:"https://palmrentcar.com/assets/uploads/car/car/1404-08-08/video/video-68a2a978ac99a28577c4679ec255d3c7.mp4",
    // }
    // if(!data) return
    // console.log(data)
    const t = useTranslations();
    const optionList = useSelector((state)=>state.carList.optionList)
    const [isHovering,setIsHovering] = useState(false)
    return(
        <div className={`${isHovering && 'z-30'} flex w-full flex-col bg-white cursor-pointer transition-all rounded-2xl md:text-sm text-xs border border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] max-md:pl-0 p-2.5`}>
            <SingleCarGallery2 imageList={data.images} noBtn={true}>
                <div className="flex text-[#0B835C] text-[10px] absolute gap-2 text-nowrap top-2 rtl:right-2 ltr:left-2 w-full flex-wrap">
                    {data.options.map((item,index)=>{
                        return(
                            <div onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} className="sm:py-1 py-0.5 group sm:px-2 px-1.5 rounded-4xl bg-[#F1F1F1] relative hover:scale-[105%] transition-all border border-white" key={index}>
                                <span className="text-[#4E4E4E] font-bold">{t(optionList[item].title)}</span>
                                <div className="absolute top-0 hidden group-hover:flex animate-opacity pb-3 z-50 left-1/2 -translate-x-1/2 -translate-y-full">
                                    <div className="bg-white min-w-64 max-w-64 whitespace-break-spaces text-justify text-xs rounded-lg border p-2 border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
                                        {optionList[item].description}
                                        <div className="w-0 h-0 rotate-180 absolute bottom-0 left-1/2 border-l-16 border-r-16 border-t-0 border-b-16 border-l-transparent -translate-x-1/2 border-r-transparent border-b-white"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {data.discount && 
                    <div className="absolute bottom-6 left-2 bg-[#81A800] py-1.5 px-2.5 text-white rounded-lg flex items-center gap-1">
                        <IconDiscount size="20"/>
                        {data.discount}% {t('discount')}
                    </div>
                }

            </SingleCarGallery2>
            <div className="pl-2.5 flex flex-col">
                <div className="text-left my-2 lg:text-lg sm:text-base text-sm">{data.title}</div>
                <SingleCarOptions data={data}/>
                <SingleCarPriceList2 priceList={data.priceList}/>
                <SingleCarButtonHolder3/>
            </div>
        </div>
    )
}

export function SingleCarGallery2({children,noBtn,imageList}){
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
            <div className="flex h-full max-md:overflow-y-auto max-md:z-10 hide-scrollbar">
                <div className="md:absolute max-md:flex w-full h-full top-0 right-0 rounded-lg -z-10 max-md:gap-2">
                    {imageList.map((item,index)=>{
                        return(
                            // (index != imageList.length - 1)?
                                <Image key={index} className={`${hoverList[index] ? 'z-10' : ''} md:rounded-lg max-md:first:rounded-r-lg max-md:last-of-type:rounded-l-lg w-full h-full object-cover md:absolute ${(index != imageList.length - 1) ? '' : 'md:hidden'}`} src={item} width={395} height={253} alt=''></Image>
                            // :
                                // <Image key={index} className={`${hoverList[index] ? 'z-10' : ''} md:rounded-lg w-full h-full object-cover md:hidden md:absolute`} src={item} width={395} height={253} alt=''></Image>

                        )
                    })}
                    <Link href={'test'} className={`flex md:hidden flex-col items-center justify-center text-black text-nowrap relative gap-2 font-bold px-4`}>
                        <span className="flex items-center justify-center bg-[#F1F1F1] rounded-full size-8">
                            <span className="flex size-4 rotate-90 items-center justify-center">
                                <IconArrow/>
                            </span>
                        </span>
                        {t('moredetail')}
                    </Link>
                    <div className={`${hoverList[imageList.length - 1] ? 'z-10' : ''} rounded-lg w-full h-full max-md:hidden md:absolute`}>
                        <div className={`absolute w-full h-full rounded-lg ${hoverList[imageList.length - 1] ? 'z-20' : ''} bg-[#000000aa] text-white flex flex-col items-center justify-center`}>
                            <span className="flex items-center justify-center border-2 border-white rounded-full size-16 rotate-135">
                                <span className="flex size-6">
                                    <IconArrowHandle/>
                                </span>
                            </span>
                            {t('moredetail')}
                        </div>
                        <Image className={`${hoverList[imageList.length - 1] ? 'z-10' : ''} rounded-lg w-full h-full object-cover md:absolute`} src={imageList[imageList.length-1]} width={395} height={253} alt=''></Image>
                    </div>
                </div>
                    <div className="z-20">
                        {children}
                    </div>

                <div className="absolute w-full h-full md:flex items-end flex-row-reverse p-2 cursor-pointer transition-all opacity-0 hover:opacity-100 hidden">
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
export function SingleCarButtonHolder3(){
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
            <Link href={`https://wa.me/971556061134?text=${encodeURIComponent(whatsappText)}`} target="_blank" className="rounded-xl py-2 flex justify-center gap-2 w-fit items-center text-nowrap px-2 cursor-pointer bg-[#10B9811A] border border-[#10B98180] text-[#10B981]">
                <IconWhatsapp/>
                {t('whatsapp')}
            </Link>
        </div>
    )
}

export function SingleCarPriceList2({priceList}){
    const t = useTranslations();
    const [rentDay,setRentDay] = useState(null)
    const [finalDayPrice,setFinalDayPrice] = useState(null)
    const carDates = useSelector((state)=>state.global.carDates)

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
    console.log(finalDayPrice)
    return(
        <div>
            <div className="flex flex-col gap-2 my-4 border-t pt-2 border-[#0000001f]">
                <div className="flex justify-between items-center">
                    <span>{t('BSPrice')} {rentDay} {t('day')} :</span>
                    <div className="lg:text-base text-sm flex gap-2">
                        <span className="text-[#A7A7A7] line-through">
                            {finalDayPrice?.previousPrice != finalDayPrice?.currentPrice && finalDayPrice?.previousPrice}
                        </span>
                        <span className="text-[#3B82F6] font-bold">
                            {finalDayPrice?.currentPrice}
                        </span>
                        {t('AED')}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span>{t('sum')} {rentDay} {t('dayres')} :</span>
                    <div className="lg:text-base text-sm flex gap-2">
                        <span className="text-[#A7A7A7] line-through">
                            {(finalDayPrice?.previousPrice != finalDayPrice?.currentPrice && finalDayPrice?.previousPrice) * rentDay}
                        </span>
                        <span>
                            {(finalDayPrice?.currentPrice) * rentDay}
                        </span>
                        {t('AED')}
                    </div>
                </div>
                {/* <div className="flex justify-end text-right">
                    {300} {t('toman')} =
                </div> */}
            </div>
        </div>
    )
}