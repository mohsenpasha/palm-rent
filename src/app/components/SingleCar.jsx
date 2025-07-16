import Image from "next/image";
import { IconBag, IconGas, IconGearBox, IconPerson, IconPlay } from "./Icons";

export default function SingleCar(){
    return(
        <div className="flex w-full flex-col rounded-lg border-[1px] border-[#EBEBEB] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-[10px]">
            <SingleCarGallery>
                <div className="flex text-[#0B835C] text-[10px] absolute gap-2 text-nowrap top-2 right-2">
                    <span className="py-1 px-2 rounded-4xl bg-white">بدون دیپوزیت</span>
                    <span className="py-1 px-2 rounded-4xl bg-white">تحویل رایگان</span>
                    <span className="py-1 px-2 rounded-4xl bg-white">بیمه رایگان</span>
                    <span className="py-1 px-2 rounded-4xl bg-white">کیلومتر نامحدود</span>
                </div>
            </SingleCarGallery>
            <div className="text-left my-2 text-xl">Audi r8 2022</div>
            <SingleCarOptions/>
            <SingleCarPriceList/>

        </div>
    )
}

export function SingleCarGallery({children}){
    return(
        <div className="flex relative w-full h-[250px]">
            <div className="flex h-full">
                <div className="absolute w-full h-full top-0 right-0 rounded-lg -z-10">
                    <Image className="rounded-lg w-full h-full object-cover" src={'/images/singlecar-1.png'} width={395} height={253} alt=''></Image>
                    {children}
                </div>

                <div className="w-full h-full">
                    <div className="w-full h-2 bg-white rounded-2xl">

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
                    <div className="text-lg flex gap-2">
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
                    <div className="text-lg flex gap-2">
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
                    <div className="text-lg flex gap-2">
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
export function SingleCarButtonHolder(){
    return(
        <div>
            <button className=""></button>
        </div>
    )
}