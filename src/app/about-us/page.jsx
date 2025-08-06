'use client'

import Link from "next/link"
import { useEffect } from "react"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Trans, useTranslation } from "react-i18next"

export default function AboutUsPage(){
    const { t, i18n } = useTranslation();
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
                <div className="py-4">
                    <div className="text-center py-4 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]">
                        {t('aboutUs')}
                    </div>
                    <FirstAboutSection/>
                </div>
            </div>
        </>

    )
}

export function FirstAboutSection(){
    const { t, i18n } = useTranslation();
    return(
        <section>
            <div className="xl:w-[60vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] bg-white rounded-lg p-4">
                    <div className="text-center lg:text-2xl md:text-lg text-base font-bold my-4">
                        {t('AboutPalmRent')}
                    </div>
                    <div className="border-[2px] border-dashed border-[#00cec9] rounded-lg p-4 bg-[linear-gradient(135deg,#f1f2f6,#ffffff)] flex flex-col gap-4 text-[#212529] lg:text-base sm:text-base text-sm">
                        <div>
                            <h3 className="lg:text-2xl md:text-lg text-base text-[#00b894]">{t('dubaiServices')}</h3>
                            <p>
                                <Trans i18nKey="dubaiDescription" />
                            </p>
                        </div>
                        <div>
                            <h3 className="lg:text-2xl md:text-lg text-base text-[#e17055]">{t('turkeyServices')}</h3>
                            <p>
                                <Trans i18nKey="turkeyDescription" />
                            </p>
                        </div>
                        <div>
                            <h3 className="lg:text-2xl md:text-lg text-base text-[#0984e3]">{t('omanServices')}</h3>
                            <p>
                                <Trans i18nKey="omanDescription" />
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-4">
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#ecf0f1] text-[#212529]">
                            <h3 className="lg:text-2xl md:text-lg text-base font-bold">{t('tehranBranch')}</h3>
                            <p className="lg:text-base md:text-base sm:text-sm text-xs">{t('tehranBranchAddress')}</p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://wa.me/989211284055'}>+989211284055</Link>
                        </div>
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#fff3e0] text-[#212529]">
                            <h3 className="lg:text-2xl md:text-lg text-base font-bold">{t('ahwazBranch')}</h3>
                            <p className="lg:text-base md:text-base sm:text-sm text-xs">{t('ahwazBranchAddress')}</p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://wa.me/989211384055'}>+989211384055</Link>
                        </div>
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#e0f7fa] text-[#212529]">
                            <h3 className="lg:text-2xl md:text-lg text-base font-bold">{t('dubaiBranch')}</h3>
                            <p className="lg:text-base md:text-base sm:text-sm text-xs">{t('dubaiBranchAddress')}</p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://wa.me/971556061134'}>+971556061134</Link>
                        </div>
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#fbe9f0] text-[#212529] text-center">
                            <h3 className="lg:text-2xl md:text-lg text-base font-bold">{t('palmRentInsta')}</h3>
                            <p className="lg:text-base md:text-base sm:text-sm text-xs"><Trans i18nKey="palmRentInstaSub" /></p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://instagram.com/palm.rent'}>@palm.rent</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}