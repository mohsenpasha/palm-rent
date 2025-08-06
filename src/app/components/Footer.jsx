'use client'
import Link from "next/link";
import { IconArrowDoubled, IconFacebook, IconLinkedIn, IconPhone, IconTwitter, IconYoutube } from "./Icons";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer(){
    const { t, i18n } = useTranslation();
    return(
        <footer className="bg-white pt-12 mt-12">
            <div className="w-[90vw] max-w-[1336px] m-auto">
                <div className="flex lg:flex-nowrap flex-wrap sm:gap-0 gap-4">
                    <div className="xl:w-3/12 lg:w-4/12 sm:w-1/2 w-full lg:px-6 md:px-4 px-2">
                        <div className="xl:text-base lg:text-sm mb-2">
                            {t('aboutUs')}
                        </div>
                        <p className="sm:text-xs text-[10px] text-justify font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <span className="text-xs text-[#313131]">{t('subscribeTitle')}</span>
                            <div className="border-[1px] border-[#D4D4D4] rounded-sm flex justify-between">
                                <input placeholder={t('email') + ' ...'} className="flex-1 px-2.5 outline-0" type="email" />
                                <button className="text-[#152D7C] bg-[#B9C4E6] h-9 px-3">{t('subscribe')}</button>
                            </div>
                        </div>
                    </div>
                    <span className="lg:flex hidden w-[1px] h-[50px] bg-[#C0C0C0]"></span>
                    <div className="lg:w-5/12 sm:w-1/2 w-full lg:px-6 md:px-4 px-2">
                        <div className="xl:text-base lg:text-sm mb-2">
                            {t('pages')}
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#303030] lg:text-sm md:text-xs text-xs">
                            <Link className="flex items-center w-[calc(50%-4px)]" href='/'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                {t('home')}
                            </Link>
                            {/* <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                شعبه های پالم رنت
                            </Link> */}
                            {/* <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                انواع خودرو ها
                            </Link> */}
                            <Link className="flex items-center w-[calc(50%-4px)]" href='/documents'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                {t('documents')}
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='/contact-us'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                {t('contactUs')}
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='/blogs'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                {t('blog')}
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='/gallery'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                {t('gallery')}
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='/about-us'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                {t('aboutUs')}
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='/rules'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                {t('rules')}
                            </Link>
                        </div>
                    </div>
                    <span className="lg:flex hidden w-[1px] h-[50px] bg-[#C0C0C0]"></span>
                    <div className="lg:w-3/12 lg:my-0 my-4 w-full lg:px-8">
                        <div className="xl:text-base lg:text-sm mb-2 flex lg:justify-start justify-center">
                            {t('licenses')}
                        </div>
                        <div className="flex lg:justify-start justify-center lg:gap-2 sm:gap-8 gap-2">
                            <Link className="size-[79px] shrink-0 border-[1px] border-[#0000001F] rounded-2xl flex justify-center items-center" href={'#'}>
                                <Image src={'/images/cer-1.png'} width={69} height={69} alt=""></Image>
                            </Link>
                            <Link className="size-[79px] shrink-0 border-[1px] border-[#0000001F] rounded-2xl flex justify-center items-center" href={'#'}>
                                <Image src={'/images/logo-samandehi.png'} width={69} height={69} alt=""></Image>
                            </Link>
                            <Link className="size-[79px] shrink-0 border-[1px] border-[#0000001F] rounded-2xl flex justify-center items-center" href={'#'}>
                                <Image src={'/images/enamad.png'} width={69} height={69} alt=""></Image>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center rounded-2xl bg-[#F4F4F4] md:justify-between justify-center my-4 py-4 px-6 md:gap-0 gap-4 md:flex-nowrap flex-wrap">
                    <Link className="text-[#1E40AF] items-center text-xl font-bold lg:flex hidden" href={'#'}>
                        <Image className="filter-[invert(1)]" src={'/images/logo.png'} width={150} height={80} alt="palmrent logo"></Image>
                        <div>{t('palmRent')}</div>
                    </Link>
                    <Link href={'tel:+989196784367'} className="bg-white md:w-auto w-full md:justify-start justify-center rounded-2xl flex text-[#1E40AF] px-10 py-3 items-center">
                        <span className="size-12">
                            <IconPhone/>
                        </span>
                        <div className="flex flex-col text-xs justify-center">
                            <span>
                                {t('phoneNumber')}
                            </span>
                            <span className="text-base">
                                09196784367
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center text-[#1E40AF] text-base gap-2 font-semibold">
                        <div className="md:inline hidden">
                            {t('followUs')}
                        </div>
                        <div className="flex gap-2">
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconYoutube/>
                            </Link>
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconLinkedIn/>
                            </Link>
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconTwitter/>
                            </Link>
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconFacebook/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center border-t-[1px] border-[#E4E4E4] flex items-center justify-center py-4 md:text-xs sm:text-[10px] text-[8px]">
                {t('copyright')}
            </div>
        </footer>
    )
}