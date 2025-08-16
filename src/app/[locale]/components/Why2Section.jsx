import Image from "next/image";
import Link from "next/link";
import { IconCurveArrow } from "./Icons";
import { useTranslations } from "next-intl";

export function Why2Section(){
    const t = useTranslations();
    return(
        <section>
            <div className="w-[90vw] max-w-[1336px] m-auto">
                <div className="flex sm:flex-nowrap flex-wrap bg-white p-6 justify-between rounded-2xl items-center font-bold">
                    <div className="sm:w-auto w-full text-center lg:text-right my-2 gap-2">
                        <div className="text-[#3B82F6] lg:text-[32px] md:text-xl">
                            {t('whySection2Title')}
                        </div>
                        <div className="text-[#545454]">{t('whySection2Sub')}</div>
                    </div>
                    <div className="flex w-full sm:w-auto">
                        <div className="text-[#1E40AF] lg:text-xl text-lg font-bold relative flex-col items-end ml-10 mt-2 text-nowrap lg:block hidden">
                            <span>{t('rate')}</span>
                            <IconCurveArrow className={'-translate-x-1/2 absolute left-0'}/>
                        </div>
                         <Link className="bg-white flex items-center justify-center rounded-2xl shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] md:w-80 sm:w-60 w-full lg:w-auto" href={'https://www.google.com/maps/place/Renty+-+Rent+Luxury+Car+in+Dubai/@25.1608085,55.2372231,17z/data=!4m8!3m7!1s0x3e5f6985ae4b1d7d:0x1fea6bf21aa114ba!8m2!3d25.1608085!4d55.2372231!9m1!1b1!16s%2Fg%2F11h4cqq5n4?hl=en'}>
                            <Image src={'/images/google-point.png'} width={369} height={115} alt=''></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}