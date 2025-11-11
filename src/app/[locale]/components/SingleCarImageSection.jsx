import Image from "next/image";
import { SingleCarOptions } from "./SingleCar";
import { IconCalender, IconSend, IconStickyNote, IconWhatsapp } from "./Icons";
import { useDispatch } from "react-redux";
import { changeSingleGalleryStatus } from "@/redux/slices/globalSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function SingleCarImageSection(){
    const path = usePathname()
    const dispatch = useDispatch()
    function popupGalleryHandler(){
        dispatch(changeSingleGalleryStatus(true))
    }
    const [whatsappText,setWhatsappText] = useState()
    useEffect(()=>{
        setWhatsappText(`سلام بنده علاقه‌مند به رزرو خودرو (Renault Megane 2024) در (استانبول) هستم و درخواست دارم تا اطلاعات تکمیلی و شرایط اجاره را در اختیارم قرار دهید. https://palmrentcar.com${path}`)
    },[])
    return(
        <div className="border w-full border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] sm:px-4 px-2 py-4 rounded-4xl bg-white my-4">
            <div className="flex justify-between w-full md:text-sm text-xs">
                <div>
                    تویوتا یاریس 2025
                </div>
                <div>
                    TOYOTA YARIS 2025
                </div>
            </div>
            <div className="rounded-2xl flex xl:h-[324px] lg:h-[290px] md:h-[260px] sm:h-[200px] gap-1 my-4 sm:flex-nowrap flex-wrap">
                <div className="sm:w-8/12 w-full h-full flex gap-1">
                    <div className="w-8/12 sm:h-full h-[140px] flex relative sm:rounded-2xl sm:rounded-bl-[0] sm:rounded-tl-[0]">
                        <video loop onClick={()=>popupGalleryHandler()} className="w-full object-cover rounded-[inherit]" autoPlay muted src="/videos/test-vid-1.mp4"></video>
                        {/* <Image onClick={()=>popupGalleryHandler()} className="w-full object-cover rounded-[inherit]" src={'/images/singlecar-1.png'} fill={true} alt=""></Image> */}
                    </div>
                    <div className="w-4/12 sm:h-full h-[140px] flex flex-col gap-1">
                        <div className="relative flex-1 w-full">
                            <Image onClick={()=>popupGalleryHandler()} className="w-full object-cover rounded-[inherit]" src={'/images/singlecar-1.png'} fill={true} alt=""></Image>
                        </div>
                        <div className="relative flex-1 w-full">
                            <Image onClick={()=>popupGalleryHandler()} className="w-full object-cover rounded-[inherit]" src={'/images/singlecar-1.png'} fill={true} alt=""></Image>
                        </div>
                    </div>
                </div>
                <div className="sm:w-2/12 w-[calc(50%-2px)] sm:h-full h-[140px] flex relative">
                    <Image onClick={()=>popupGalleryHandler()} className="w-full object-cover rounded-[inherit]" src={'/images/singlecar-1.png'} fill={true} alt=""></Image>
                </div>
                <div className="sm:w-2/12 w-[calc(50%-2px)] sm:h-full h-[140px] flex relative sm:rounded-2xl rounded-br-[0] rounded-tr-[0]">
                    <Image onClick={()=>popupGalleryHandler()} className="w-full object-cover rounded-[inherit]" src={'/images/singlecar-1.png'} fill={true} alt=""></Image>
                </div>
            </div>
            <div className="flex justify-between w-full md:flex-nowrap flex-wrap">
                <div className="flex md:w-1/2 w-full text-4xl md:py-0 pb-4">
                    <SingleCarOptions bigFont data={{gasType:'بنزین',gearbox:'اتوماتیک',suitcase:3,passengers:3}} />
                </div>
                <div className="md:w-1/2 w-full flex md:gap-4 sm:gap-2 gap-1 justify-end md:text-sm text-xs">
                    {/* <button className="text-white rounded-2xl border border-[#204887] bg-[#204887] flex gap-2 py-3 px-4">
                        <IconStickyNote/>
                        رزرو آنلاین
                    </button> */}
                    <button className="text-[#3B82F6] md:w-auto w-full md:rounded-2xl sm:rounded-xl rounded-lg justify-center border border-[#3B82F6] hover:text-white hover:bg-[#3B82F6] bg-transparent flex gap-2 py-3 px-4 outline-0 cursor-pointer transition-all">
                        <IconSend/>
                        رزرو فوری
                    </button>
                    <Link href={`https://wa.me/971556061134?text=${encodeURIComponent(whatsappText)}`} className="text-[#10B981] md:w-auto w-full md:rounded-2xl sm:rounded-xl rounded-lg justify-center border border-[#10B981] hover:text-white hover:bg-[#10B981] bg-transparent flex gap-2 py-3 px-4 outline-0 cursor-pointer transition-all">
                        <IconWhatsapp/>
                        واتس اپ
                    </Link>
                </div>
            </div>
        </div>
    )
}