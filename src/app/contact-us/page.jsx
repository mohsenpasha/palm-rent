'use client'
import Image from "next/image"
import { FirstAboutSection } from "../about-us/page"


export default function ContactUsPage(){
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
                <div className="py-4">
                    <div className="text-center py-4 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]">
                        تماس با ما
                    </div>
                    <ContactUsForm/>
                    <FirstAboutSection/>
                </div>
            </div>
        </>

    )
}
export function ContactUsForm(){
    return(
        <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
            <div className="flex justify-between items-center gap-8 my-4">
                <div className="lg:w-6/12 w-full flex flex-col gap-4">
                    <div className="border-[1px] flex border-[#B0B0B0] bg-white rounded-lg w-full">
                        <input className="w-full outline-0 p-3" placeholder="نام شما*" type="text" />
                    </div>
                    <div className="border-[1px] flex border-[#B0B0B0] bg-white rounded-lg w-full">
                        <input className="w-full outline-0 p-3" placeholder="ایمیل شما*" type="text" />
                    </div>
                    <div className="border-[1px] flex border-[#B0B0B0] bg-white rounded-lg w-full">
                        <textarea className="w-full outline-0 p-3 resize-none h-32" name="" id="" placeholder="پیام*"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="text-white bg-[#3B82F6] py-2 px-4 rounded-lg flex items-center text-nowrap gap-2 cursor-pointer">
                            ارسال
                        </button>
                    </div>
                </div>
                <div className="lg:flex hidden">
                    <Image className="rounded-lg w-full object-cover" src={'/images/contact-us.jpg'} width={500} height={500} alt="" />
                </div>
            </div>
        </div>
    )
}