'use client'
import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "./Icons";
import { useTranslations } from "next-intl";

export function ApplicationSection(){
    const t = useTranslations();
    return(
        <section className="lg:py-16 lg:mt-16">
            <div className="xl:w-[85vw] w-[95vw] max-w-[1336px] block m-auto">
                <div className="w-full border bg-white border-[#EBF3FE] rounded-lg shadow-[0_4px_43px_0_#3B82F64D] flex lg:justify-between justify-center lg:px-16 px-8 py-8">
                    <div className="flex sm:flex-row flex-col items-center gap-4">
                        <div className="border border-[#0000001F] rounded-lg p-2 flex flex-col gap-2">
                            <Image src={'/images/barcode.png'} width={200} height={200} alt=""/>
                            <div className="text-center font-bold">{t('downloadScan')}</div>
                        </div>
                        <div className="flex flex-col gap-2 sm:items-start items-center md:text-sm text-xs">
                            <div className="lg:text-xl text-base font-bold">{t('applicationTitle')}</div>
                            <div>{t('slogan')}</div>
                            <Link className="flex items-center md:my-4 my-2  text-[#3b82f6]" href={'#'}>
                                <span>
                                    {t('downloadLink')}
                                </span>
                                <IconArrow className={'rotate-90'}/>
                            </Link>
                            <div className="flex gap-2 text-[#959EA6] text-xs items-center">
                                <div className="flex size-[20px] items-center">
                                    <Image src={'/images/android-logo.png'} width={40} height={40} alt=""/>
                                </div>
                                <div className="flex size-[20px] items-center">
                                    <Image src={'/images/ios-logo.png'} width={40} height={40} alt=""/>
                                </div>
                                <div>{t('androidIos')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="max-h-[300px] lg:flex hidden items-end">
                        <div className="-mb-8">
                            <Image className="object-" src={'/images/application-d.png'} width={348} height={466} alt=""></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}