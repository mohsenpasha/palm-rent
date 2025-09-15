'use client'

import { useEffect } from "react"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useTranslations } from "next-intl"
import { IconAboutBack, IconLocationTick} from "../components/Icons"
import Image from "next/image"
import Link from "next/link"
import { SocialBox } from "../components/VoucherStep"

export default function AboutUsPage(){
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
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                    <FirstAboutSection/>
                    <AboutServices/>
            </div>
            <AboutBranchSection/>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <SocialBox/>
            </div>
        </>

    )
}

export function FirstAboutSection(){
    const t = useTranslations();
    return(
        <div className="relative w-full xl:mt-16 xl:h-[80vh]">
            <div className="absolute h-[682px] xl:flex hidden -z-1 top-1/2 -translate-y-1/2 right-0">
                <IconAboutBack/>
            </div>
            <div className="flex w-full gap-8 justify-between items-center">
                <div className="xl:p-8 p-4 flex flex-col gap-4 items-center">
                    <div className="py-4 md:text-4xl lg:text-2xl sm:text-xl text-lg font-bold xl:w-[500px] flex flex-col xl:text-right text-center gap-4">
                        <div className="text-[#3B82F6]">
                            {t('aboutUs')}
                        </div>
                        تضمین بهترین قیمت و آسانترین روش اجاره خودرو
                    </div>
                    <div className="text-sm text-[#333333]">
                        و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، 
                    </div>
                    <button className="bg-[#3B82F6] rounded-lg p-3 px-9 text-white font-bold w-fit">
                        مشاهده بیشتر
                    </button>
                </div>
                <div className="shrink-0 xl:h-[580px] h-[400px] xl:flex hidden">
                    <Image className="h-full object-contain" src="/images/about-1.png" width={580} height={530} alt=""/>
                </div>
            </div>
        </div>
    )
}

export function AboutServices(){
    return(
        <div className="mt-20 relative">
            <Image className="absolute w-full object-cover -z-10 left-0 top-0 lg:block hidden" src={'/images/glob-map.png'} width={960} height={484} alt=""></Image>
            <div className="flex lg:pt-64 gap-4 lg:flex-nowrap flex-wrap justify-center">
                <AboutSingleService title={'خدمات ما در دبی'} description={'دفتر پالم رنت در دبی یکی از فعال‌ترین مراکز اجاره خودرو در امارات است که با ارائه خدماتی چون بدون دپوزیت، بدون محدودیت کیلومتر، بیمه رایگان و پشتیبانی ۲۴ ساعته، تجربه‌ای کاملاً بی‌دغدغه را برای مسافران و ساکنان فراهم می‌کند.'} image={'/images/about-ser-1.png'}/>
                <AboutSingleService title={'خدمات ما در ترکیه'} description={'ما در استانبول ترکیه نیز خدمات خود را به‌صورت گسترده ارائه می‌دهیم. بدون نیاز به دپوزیت یا هرگونه ودیعه، و بدون هیچ‌گونه محدودیت در کیلومتر، تنها کافی‌ست هزینه اجاره را پرداخت کنید. خودروها شامل اقتصادی، خانوادگی و SUV هستند و با پشتیبانی فارسی‌زبان عرضه می‌شوند.'} image={'/images/about-ser-2.png'}/>
                <AboutSingleService title={'خدمات ما در عمان'} description={'در مسقط عمان نیز پالم رنت آماده ارائه خودروهای روز دنیا است. با امکان تحویل در فرودگاه، رزرو سریع آنلاین، بیمه پایه رایگان و پشتیبانی تلفنی، سفر شما در عمان آسان و لذت‌بخش خواهد بود.'} image={'/images/about-ser-3.png'}/>
            </div>
        </div>
    )
}

export function AboutSingleService({title,description,image}){
    return(
        <div className="border-[1px] bg-white lg:flex-1 lg:w-auto md:w-[calc(50%-16px)] w-full border-[#0000001f] rounded-lg shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] lg:h-[400px] flex flex-col justify-between overflow-hidden lg:gap-0 md:gap-4 gap-2">
            <div>
                <div className="p-4 text-[#3B82F6] text-2xl font-bold">
                    {title}
                </div>
                <div className="px-4 text-[#333333] lg:text-base text-sm">
                    {description}
                </div>
            </div>
            <div className="w-full">
                <Image className="w-full object-cover" src={image} width={416} height={208} alt=""/>
            </div>
        </div>
    )
}

export function AboutBranchSection(){
    return(
        <div className="my-8 bg-[#EBF3FE] relative 2xl:h-[540px] h-[460px]">
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="flex justify-between gap-4 flex-col lg:w-1/2">
                <div className="flex flex-col mt-8 xl:pl-8">
                    <div className="text-[#3B82F6] lg:text-3xl text-xl font-bold">
                        شعبات دفاتر پالم رنت
                    </div>
                    <div className="text-[#262626] sm:text-base text-sm">
                        پالم رنت بزرگترین پلتفرم اجاره خودرو دارای 3 شعبه در تهران ، اهواز و دبی میباشدشما در هرجایی ک باشید میتوانید خودرو خود را اجاره کنید
                    </div>
                </div>
                <div className="flex flex-col gap-4 2xl:mt-16">
                    <SingleAboutBranch/>
                    <SingleAboutBranch/>
                    <SingleAboutBranch/>
                </div>
                </div>
            </div>
            <div className="absolute left-0 top-0 h-full lg:flex hidden xl:w-1/2 w-5/12 justify-end">
                <Image className="h-full object-cover" src="/images/about-branch.png" width={700} height={550} alt=""/>
            </div>
        </div>
    )
}
export function SingleAboutBranch(){
    return(
        <div className="flex items-center gap-4">
            <div className="size-[60px] rounded-full bg-white items-center justify-center text-[#3B82F6] sm:flex hidden">
                <IconLocationTick/>
            </div>
            <div className="flex flex-col sm:text-base text-sm">
                <div className="text-[#3B82F6]">شعبه تهران</div>
                <div>
                    بزرگراه صیاد شیرازی، میدان حسین‌آباد، جنب بانک ملل. دفتر تولید محتوا پالم رنت
                </div>
                <Link href="tel:+989211284055">+989211284055</Link>
            </div>
        </div>
    )
}