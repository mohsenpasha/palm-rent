'use client'
import { useDispatch } from "react-redux";
import { IconClose, IconTick2 } from "./Icons";
import { changeIsTranslatePopupOpen } from "@/redux/slices/globalSlice";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
export default function LanguageCurrencyPopup({params}){
    const locales = ['fa','en','ar','tr'];
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const t = useTranslations();
    const [currentLang,setCurrentLang] = useState('fa')
    useEffect(()=>{
        const currentLocale = locales.find(l => pathname.startsWith(`/${l}`)) || 'fa';
        setCurrentLang(currentLocale)
    },[])
    const dispatch = useDispatch()
    function closePopup(){
        dispatch(changeIsTranslatePopupOpen(false))
    }
    function changeLanguageHandler(lang) {
        

        const locales = ['fa', 'en', 'ar', 'tr'];
        let newPath = pathname;

        // حذف زبان فعلی از مسیر
        for (const l of locales) {
            if (newPath.startsWith(`/${l}/`) || newPath === `/${l}`) {
            newPath = newPath.replace(`/${l}`, '') || '/';
            break;
            }
        }

        // حفظ query string فعلی
        const currentParams = searchParams.toString();
        const fullPath = `/${lang}${newPath}${currentParams ? `?${currentParams}` : ''}`;

        router.push(fullPath, { scroll: false, shallow: true });
    }

    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div className="animate-opacity">
                <div onClick={closePopup} className="absolute w-full h-full bg-black opacity-40"></div>
            </div>
            <div className="bg-white sm:w-xl w-[90%] pb-6 absolute sm:top-1/2 left-1/2 sm:-translate-1/2 -translate-x-1/2 sm:bottom-auto bottom-0 sm:rounded-2xl rounded-t-2xl sm:animate-fade-in2 animate-fromBottom">
                <div className="border-b-[1px] border-[#B0B0B0CC] md:text-sm text-xs p-4 font-bold relative">
                    <span>
                        {t('settings')}
                    </span>
                    <span onClick={closePopup} className="absolute top-1/2 rtl:left-4 ltr:right-4 -translate-y-1/2 transition-all cursor-pointer rounded-sm sm:p-2 p-1">
                        <IconClose/>
                    </span>
                </div>
                <div className="flex justify-between md:text-sm sm:text-xs text-xs">
                    <div className="flex-1">
                        <div className="p-4 py-2">{t('chooselang')}</div>
                        <div className="flex flex-col">
                            <label href={`/fa/${pathname}`} className="flex relative items-center px-6 py-2 w-full gap-2 transition-all bg-transparent hover:bg-blue-50 cursor-pointer">
                                <input checked={'fa' == currentLang} onChange={(event)=>changeLanguageHandler(event.target.value)} name="language" value={'fa'} className="peer hidden" type="radio" />
                                <span className="size-8 inline-block peer-checked:hidden shadow-[inset_0_2px_3px_#0000000d] rounded-full bg-[#F5F4F2]"></span>
                                <span className="size-8 hidden peer-checked:inline-block rounded-full bg-[#F5F4F2] text-[#3B82F6]">
                                    <IconTick2/>
                                </span>
                                فارسی
                                <span className="absolute bottom-0 left-1/2 -translate-1/2 inline-block h-[1px] w-11/12 bg-[#E2E2E2]"></span>
                            </label>
                            <label href={`/en/${pathname}`} onClick={()=>changeLanguageHandler('en')} className="flex relative items-center px-6 py-2 w-full gap-2 transition-all bg-transparent hover:bg-blue-50 cursor-pointer">
                                <input checked={'en' == currentLang} onChange={(event)=>changeLanguageHandler(event.target.value)} name="language" value={'en'} className="peer hidden" type="radio" />
                                <span className="size-8 inline-block peer-checked:hidden shadow-[inset_0_2px_3px_#0000000d] rounded-full bg-[#F5F4F2]"></span>
                                <span className="size-8 hidden peer-checked:inline-block rounded-full bg-[#F5F4F2] text-[#3B82F6]">
                                    <IconTick2/>
                                </span>
                                English
                                <span className="absolute bottom-0 left-1/2 -translate-1/2 inline-block h-[1px] w-11/12 bg-[#E2E2E2]"></span>
                            </label>
                            <label href={`/ar/${pathname}`} className="flex relative items-center px-6 py-2 w-full gap-2 transition-all bg-transparent hover:bg-blue-50 cursor-pointer">
                                <input checked={'ar' == currentLang} onChange={(event)=>changeLanguageHandler(event.target.value)} name="language" value={'ar'} className="peer hidden" type="radio" />
                                <span className="size-8 inline-block peer-checked:hidden shadow-[inset_0_2px_3px_#0000000d] rounded-full bg-[#F5F4F2]"></span>
                                <span className="size-8 hidden peer-checked:inline-block rounded-full bg-[#F5F4F2] text-[#3B82F6]">
                                    <IconTick2/>
                                </span>
                                العربی
                                <span className="absolute bottom-0 left-1/2 -translate-1/2 inline-block h-[1px] w-11/12 bg-[#E2E2E2]"></span>
                            </label>
                            <label href={`/tr/${pathname}`} locale={'tr'} className="flex relative items-center px-6 py-2 w-full gap-2 transition-all bg-transparent hover:bg-blue-50 cursor-pointer">
                                <input checked={'tr' == currentLang} onChange={(event)=>changeLanguageHandler(event.target.value)} name="language" value={'tr'} className="peer hidden" type="radio" />
                                <span className="size-8 inline-block peer-checked:hidden shadow-[inset_0_2px_3px_#0000000d] rounded-full bg-[#F5F4F2]"></span>
                                <span className="size-8 hidden peer-checked:inline-block rounded-full bg-[#F5F4F2] text-[#3B82F6]">
                                    <IconTick2/>
                                </span>
                                Türkiye
                            </label>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="p-4 py-2">{t('choosecurrency')}</div>
                        <div className="flex flex-col">
                            <label className="flex relative items-center px-6 py-2 w-full gap-2 transition-all bg-transparent hover:bg-blue-50 cursor-pointer">
                                <input name="currency" className="peer hidden" type="radio" />
                                <span className="size-8 inline-block peer-checked:hidden shadow-[inset_0_2px_3px_#0000000d] rounded-full bg-[#F5F4F2]"></span>
                                <span className="size-8 hidden peer-checked:inline-block rounded-full bg-[#F5F4F2] text-[#3B82F6]">
                                    <IconTick2/>
                                </span>
                                USD
                                <span className="absolute bottom-0 left-1/2 -translate-1/2 inline-block h-[1px] w-11/12 bg-[#E2E2E2]"></span>
                            </label>
                            <label className="flex relative items-center px-6 py-2 w-full gap-2 transition-all bg-transparent hover:bg-blue-50 cursor-pointer">
                                <input name="currency" className="peer hidden" type="radio" />
                                <span className="size-8 inline-block peer-checked:hidden shadow-[inset_0_2px_3px_#0000000d] rounded-full bg-[#F5F4F2]"></span>
                                <span className="size-8 hidden peer-checked:inline-block rounded-full bg-[#F5F4F2] text-[#3B82F6]">
                                    <IconTick2/>
                                </span>
                                AED
                                <span className="absolute bottom-0 left-1/2 -translate-1/2 inline-block h-[1px] w-11/12 bg-[#E2E2E2]"></span>
                            </label>
                            <label className="flex relative items-center px-6 py-2 w-full gap-2 transition-all bg-transparent hover:bg-blue-50 cursor-pointer">
                                <input name="currency" className="peer hidden" type="radio" />
                                <span className="size-8 inline-block peer-checked:hidden shadow-[inset_0_2px_3px_#0000000d] rounded-full bg-[#F5F4F2]"></span>
                                <span className="size-8 hidden peer-checked:inline-block rounded-full bg-[#F5F4F2] text-[#3B82F6]">
                                    <IconTick2/>
                                </span>
                                EUR
                                <span className="absolute bottom-0 left-1/2 -translate-1/2 inline-block h-[1px] w-11/12 bg-[#E2E2E2]"></span>
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}