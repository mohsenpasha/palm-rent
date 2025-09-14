'use client'
import Image from "next/image"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { IconFacebook, IconInstagram2, IconPerson3, IconPhone, IconSend, IconTwitter, IconYoutube, Shape1, Shape2 } from "../components/Icons"
import Link from "next/link"

export default function ContactUsPage(){
    const t = useTranslations();
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    return(
        <>
        <div className="w-full relative pb-24 overflow-hidden">
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="py-4">
                    <ContactUsForm/>
                </div>
            </div>
            <div className="absolute -bottom-14 right-0 2xl:block hidden">
                <Shape1/>
            </div>
            <div className="absolute -bottom-14 left-0 2xl:block hidden rotate-180">
                <Shape1 orange/>
            </div>
        </div>
        </>

    )
}
export function ContactUsForm(){
    const t = useTranslations();
    return(
        <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1100px]">
            <div className="bg-white rounded-2xl shadow-[2px_10px_28px_0px_#3C6DE333] flex flex-col justify-center items-center px-8 py-4">
                <h1 className="text-center py-4 md:text-xl sm:text-lg text-base font-bold text-[#3B82F6] border-b-2 border-[#3B82F6] inline-block">
                    {t('contactUs')}
                </h1>
                <div className="flex my-4 flex-wrap justify-between gap-4">
                    <InputCustom placeholder="نام و نام خانوادگی" icon={<IconPerson3/>}/>
                    <InputCustom placeholder="نام و نام خانوادگی" icon={<IconPerson3/>}/>
                    <InputCustom placeholder="نام و نام خانوادگی" icon={<IconPerson3/>}/>
                    <select className="flex border-[1px] border-[#0000001f] bg-[#F8F8F8] rounded-lg items-center md:w-[calc(50%-16px)] w-full p-4 text-[#8A8A8A]" name="" id="">
                        <option value="">تعیین ساعت تماس</option>
                    </select>
                    <textarea className="resize-none border-[1px] h-32 border-[#0000001f] outline-0 bg-[#F8F8F8] rounded-lg items-center w-full p-4" name="" placeholder="متن پیام شما ...." id=""></textarea>
                </div>
                <div className="flex gap-2 w-full flex-wrap">
                    <Link href={'tel:09104992002'} className="border-[#3B82F6] text-[#3B82F6] border-[1px] flex items-center justify-center rounded-lg md:w-1/2 w-full py-3 gap-2 cursor-pointer">
                        09104992002
                        <span className="flex size-6">
                            <IconPhone/> 
                        </span>
                    </Link>
                    <button className="bg-[#3B82F6] flex items-center justify-center text-white rounded-lg flex-1 py-3 gap-2 cursor-pointer">
                        ارسال پیام
                        <IconSend/> 
                    </button>
                </div>
                <div className="flex flex-wrap md:flex-nowrap w-full mt-4 gap-4">
                    <div className="lg:w-1/2 w-full flex flex-col justify-around">
                            <div className="w-10/12 text-lg">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه  
                            </div>
                            <a href="tel:+919870215600">+91 9870215600</a>
                            <a href="mailto:hello@info.com.ng">hello@info.com.ng</a>
                            <div className="flex gap-4 text-[#0F001A] items-center">
                                <Link href=''>
                                    <IconTwitter/>
                                </Link>
                                <Link href=''>
                                    <IconFacebook/>
                                </Link>
                                <Link href=''>
                                    <IconInstagram2/>
                                </Link>
                                <Link href=''>
                                    <IconYoutube/>
                                </Link>
                            </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <iframe className="w-full rounded-lg border-[#0000001f] border-[1px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.286880035899!2d55.32567002826321!3d25.26038228893468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d002cbd3ea1%3A0x762e560ffb0eb942!2z2KfYrNin2LHZhyDYrtmI2K_YsdmIINiv2LEg2K_YqNuMINm-2KfZhNmFINix2YbYqiB8IFBhbG0gUmVudCBEdWJhaQ!5e0!3m2!1sfa!2snl!4v1757848741332!5m2!1sfa!2snl" height="230" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function InputCustom({icon,placeholder='',type='text'}){
    return(
        <div className="flex border-[1px] border-[#0000001f] bg-[#F8F8F8] rounded-lg items-center md:w-[calc(50%-16px)] w-full">
            <input className="outline-0 border-0 p-4 flex-1 placeholder:text-[#8A8A8A]" type={type} placeholder={placeholder}/>
            <span className="text-[#8A8A8A] ml-2">
                {icon}
            </span>
        </div>
    )
}