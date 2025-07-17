'use client'
import Image from "next/image";
import { IconBag, IconGas, IconGearBox, IconPerson, IconPlay, IconSend, IconWhatsapp } from "./Icons";
import { useState } from "react";

export default function SingleCar(){
    return(
        <div className="flex w-full flex-col rounded-2xl md:text-base text-sm border-[1px] border-[#EBEBEB] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-[10px]">
            <SingleCarGallery>
                <div className="flex text-[#0B835C] text-[10px] absolute gap-2 text-nowrap top-2 right-2 w-full overflow-hidden flex-wrap">
                    <span className="py-1 px-2 rounded-4xl bg-white">بدون دیپوزیت</span>
                    <span className="py-1 px-2 rounded-4xl bg-white">تحویل رایگان</span>
                    <span className="py-1 px-2 rounded-4xl bg-white">بیمه رایگان</span>
                    <span className="py-1 px-2 rounded-4xl bg-white">کیلومتر نامحدود</span>
                </div>
            </SingleCarGallery>
            <div className="text-left my-2 lg:text-xl sm:text-lg text-base">Audi r8 2022</div>
            <SingleCarOptions/>
            <SingleCarPriceList/>
            <SingleCarButtonHolder2/>
        </div>
    )
}

export function SingleCarGallery({children}){
    const [hoverList,setHoverList] = useState([true,false,false])
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
        setHoverList([true,false,false])
    }
    return(
        <div className="flex relative w-full h-[250px]">
            <div className="flex h-full">
                <div className="absolute w-full h-full top-0 right-0 rounded-lg -z-10">
                    <Image className={`${hoverList[1] && 'z-10'} rounded-lg w-full h-full object-cover absolute`} src={'/images/singlecar-1.png'} width={395} height={253} alt=''></Image>
                    <Image className={`${hoverList[2] && 'z-10'} rounded-lg w-full h-full object-cover absolute`} src={'/images/singlecar-2.jpg'} width={395} height={253} alt=''></Image>
                    <Image className={`${hoverList[3] && 'z-10'} rounded-lg w-full h-full object-cover absolute`} src={'/images/singlecar-3.jpg'} width={395} height={253} alt=''></Image>
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
                </div>
            </div>
            <div className="absolute left-2 bottom-2 cursor-pointer">
                <IconPlay/>
            </div>
        </div>
    )
}
export function SingleCarOptions(){
    return(
        <div className="flex w-full text-[#787878] text-xs">
            <div className="w-full flex items-center gap-1 justify-center">
                <IconGas/>
                بنزین
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <IconGearBox/>
                اتوماتیک
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <IconBag/>
                3 چمدان
            </div>
            <div className="w-full flex items-center gap-1 justify-center">
                <IconPerson/>
                5 نفر
            </div>
        </div>
    )
}
export function SingleCarPriceList(){
    return(
        <div>
            <div className="w-full border-b-[1px] border-[#E2E2E2] py-4">
                قیمت کرایه تویوتا یاریس 2024 دبی
            </div>
            <div className="flex flex-col gap-2 my-4">
                <div className="flex justify-between">
                    <div>
                        از 1 تا 6 روز
                    </div>
                    <div className="lg:text-lg text-base flex gap-2">
                        <span className="text-[#A7A7A7] line-through">
                            140
                        </span>
                        <span className="text-[#10B981]">
                            98
                        </span>
                        درهم روزانه
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        از 1 تا 6 روز
                    </div>
                    <div className="lg:text-lg text-base flex gap-2">
                        <span className="text-[#A7A7A7] line-through">
                            140
                        </span>
                        <span className="text-[#10B981]">
                            98
                        </span>
                        درهم روزانه
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        از 1 تا 6 روز
                    </div>
                    <div className="lg:text-lg text-base flex gap-2">
                        <span className="text-[#A7A7A7] line-through">
                            140
                        </span>
                        <span className="text-[#10B981]">
                            98
                        </span>
                        درهم روزانه
                    </div>
                </div>
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
            <button className="border-[1px] border-[#10B981] rounded-xl text-[#10B981] py-2 flex justify-center gap-2 w-full cursor-pointer hover:bg-[#10B981] transition-all hover:text-white hover:border-transparent">
                <IconWhatsapp/>
                رزرو : واتس اپ
            </button>
        </div>
    )
}
export function SingleCarButtonHolder2(){
    return(
        <div className="flex w-full gap-2">
            <button className="rounded-xl py-2 flex justify-center gap-2 w-full cursor-pointer bg-[#3B82F6] text-white">
                انتخاب خودرو
            </button>
            <button className="rounded-xl py-2 flex justify-center gap-2 w-fit text-nowrap px-2 cursor-pointer bg-[#10B981] text-white">
                <IconWhatsapp/>
                واتس اپ
            </button>
        </div>
    )
}
