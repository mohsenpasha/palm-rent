'use client'
import Image from "next/image";
import { IconArrowHandle, IconBag, IconGas, IconGearBox, IconPerson, IconPlay, IconSend, IconWhatsapp } from "./Icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeReelActive } from "@/redux/slices/reelsSlice";
import Link from "next/link";
import { getDiffInShamsiDays } from "./SearchBar";
import { changeRoadMapStep } from "@/redux/slices/globalSlice";

export default function SingleCar({data,noBtn = false}){
    console.log(data)   
    return(
        <div className="flex w-full flex-col rounded-2xl md:text-base text-sm border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-[10px]">
            <SingleCarGallery noBtn={noBtn}>
                {!noBtn && 
                    <div className="flex text-[#0B835C] text-[10px] absolute gap-2 text-nowrap top-2 right-2 w-full overflow-hidden flex-wrap">
                        {data.options.map((item,index)=>{
                            return(
                                <span key={index} className="py-1 px-2 rounded-4xl bg-white">{item}</span>
                            )
                        })}
                    </div>
                }
            </SingleCarGallery>
            <div className="text-left my-2 lg:text-xl sm:text-lg text-base">{data.title}</div>
            <SingleCarOptions data={data}/>
            <SingleCarPriceList priceList={data.priceList}/>
            {!noBtn && 
                <SingleCarButtonHolder2/>
            }
        </div>
    )
}

export function SingleCarGallery({children,noBtn}){
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
        // dispatch(changeReelActive(true))
    }
    function imageClickHandler(){
        
    }
    return(
        <div className="flex relative w-full h-[250px]">
            <div className="flex h-full">
                <div className="absolute w-full h-full top-0 right-0 rounded-lg -z-10">
                    <Image className={`${hoverList[0] ? 'z-10' : ''} rounded-lg w-full h-full object-cover absolute`} src={'/images/singlecar-2.jpg'} width={395} height={253} alt=''></Image>
                    <Image className={`${hoverList[1] ? 'z-10' : ''} rounded-lg w-full h-full object-cover absolute`} src={'/images/singlecar-3.jpg'} width={395} height={253} alt=''></Image>
                    <Image className={`${hoverList[2] ? 'z-10' : ''} rounded-lg w-full h-full object-cover absolute`} src={'/images/singlecar-1.png'} width={395} height={253} alt=''></Image>
                    <div className={`${hoverList[3] ? 'z-10' : ''} rounded-lg w-full h-full absolute`}>
                        <div className={`absolute w-full h-full rounded-lg ${hoverList[3] ? 'z-20' : ''} bg-[#000000aa] text-white flex flex-col items-center justify-center`}>
                            <span className="flex items-center justify-center border-2 border-white rounded-full size-16 rotate-135">
                                <IconArrowHandle/>
                            </span>
                            عکس های بیشتر
                        </div>
                        <Image className={`${hoverList[3] ? 'z-10' : ''} rounded-lg w-full h-full object-cover absolute`} src={'/images/singlecar-3.jpg'} width={395} height={253} alt=''></Image>
                    </div>
                </div>
                    <div className="z-20">
                        {children}
                    </div>

                <div className="absolute w-full h-full flex items-end flex-row-reverse p-2 cursor-pointer transition-all opacity-0 hover:opacity-100">
                    <div onMouseLeave={mouseLeaveHandler} onMouseMove={()=>galleryHoverHandler(0)} className="w-full h-full flex items-end group px-1">
                        <span className="w-full h-1 rounded-2xl bg-[#00000070] group-hover:bg-white transition-all"></span>
                    </div>
                    <div onMouseLeave={mouseLeaveHandler} onMouseMove={()=>galleryHoverHandler(1)} className="w-full h-full flex items-end group px-1">
                        <span className="w-full h-1 rounded-2xl bg-[#00000070] group-hover:bg-white transition-all"></span>
                    </div>
                    <div onMouseLeave={mouseLeaveHandler} onMouseMove={()=>galleryHoverHandler(2)} className="w-full h-full flex items-end group px-1">
                        <span className="w-full h-1 rounded-2xl bg-[#00000070] group-hover:bg-white transition-all"></span>
                    </div>
                    <div onMouseLeave={mouseLeaveHandler} onMouseMove={()=>galleryHoverHandler(3)} className="w-full h-full flex items-end group px-1">
                        <span className="w-full h-1 rounded-2xl bg-[#00000070] group-hover:bg-white transition-all"></span>
                    </div>
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
    return(
        <div className={`flex w-full text-[#787878] border-t-[1px] border-[#0000001F] pt-4 ${bigFont ? 'xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs filter-[brightness(0.5)]' :'text-xs'}`}>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-7 lg:size-6 md:size-5 size-4' :`size-4`}>
                    <IconGas/>
                </span>
                {data.gasType}
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-7 lg:size-6 md:size-5 size-4' :`size-4`}>
                    <IconGearBox/>
                </span>
                {data.gearbox}
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-7 lg:size-6 md:size-5 size-4' :`size-4`}>
                    <IconBag/>
                </span>
                {data.suitcase} چمدان
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <span className={bigFont ? 'xl:size-7 lg:size-6 md:size-5 size-4' :`size-4`}>
                    <IconPerson/>
                </span>
                {data.passengers} نفر
            </div>
        </div>
    )
}
export function SingleCarPriceList({priceList}){
    console.log(priceList)
    return(
        <div>
            {/* <div className="w-full border-b-[1px] border-[#0000001f] py-2">
                قیمت کرایه تویوتا یاریس 2024 دبی
            </div> */}
            <div className="flex flex-col gap-2 my-4 border-t-[1px] pt-2 border-[#0000001f]">
                {Object.entries(priceList).map(([key, { previousPrice, currentPrice }]) => (
                    <div key={key} className="flex justify-between">
                        <div>
                            {(() => {
                                const [from, to] = key.split(":");
                                return to.length === 0 ? (
                                    <>بیشتر {from} روز</>
                                ) : (
                                    <>از {from} تا {to} روز</>
                                );
                            })()}
                        </div>
                        <div className="lg:text-lg text-base flex gap-2">
                            <span className="text-[#A7A7A7] line-through">
                                {previousPrice}
                            </span>
                            <span className="text-[#10B981]">
                                {currentPrice}
                            </span>
                            درهم روزانه
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
                انتخاب خودرو
            </button>
            <Link href={`https://wa.me/971556061134?text=${encodeURIComponent(whatsappText)}`} target="_blank" className="rounded-xl py-2 flex justify-center gap-2 w-fit text-nowrap px-2 cursor-pointer bg-[#10B981] text-white">
                <IconWhatsapp/>
                واتس اپ
            </Link>
        </div>
    )
}
