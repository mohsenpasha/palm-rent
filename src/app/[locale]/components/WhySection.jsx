import Image from "next/image";
import { IconTick } from "./Icons";
import { useTranslations } from "next-intl";

export default function WhySection(){
    const t = useTranslations();
    return(
        <section className="bg-white py-16 my-16">
            <div className="w-[85vw] max-w-[1336px] m-auto">
                <div className="flex justify-between rtl:lg:text-right ltr:lg:text-left text-center">
                    <div className="lg:w-[580px]">
                        <div className="lg:text-xl md:text-lg text-base font-bold">
                            {t('whoAreWe')}
                        </div>
                        <div className="lg:text-[32px] md:text-[24px] text-xl font-bold my-4">{t('whyB')} <span className="text-[#3B82F6]">{t('palmRent')}</span> {t('whyA')}</div>
                        <p className="text-[#636363] md:text-sm sm:text-xs text-xs">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، </p>
                        <div className="flex lg:justify-between justify-around my-6 md:text-sm sm:text-xs text-xs sm:p-0 px-2">
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    پشتیبانی 24 ساعته
                                </span>
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    +2090 رضایت مشتری
                                </span>
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    مزیت شماره یک پالم رنت
                                </span>
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    مزیت شماره یک پالم رنت
                                </span>
                            </div>
                            <div className="flex flex-col gap-1 lg:ml-16">
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    +200 خودرو آماده به کار
                                </span>
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    مزیت شماره یک پالم رنت
                                </span>
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    مزیت شماره یک پالم رنت
                                </span>
                                <span className="flex items-center gap-1">
                                    <IconTick/>
                                    مزیت شماره یک پالم رنت
                                </span>
                             
                            </div>

                        </div>
                        <button className="bg-[#3B82F6] p-4 px-6 text-white h-[52px] rounded-lg md:rounded-xl flex items-center justify-center gap-2 cursor-pointer lg:m-0 m-auto">
                            {t('searchCar')}
                        </button>
                    </div>
                    <div className="lg:block hidden">
                        <Image src={'/images/why-section.png'} width={565} height={461} alt=""></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}