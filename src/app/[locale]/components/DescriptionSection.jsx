'use client'
import Image from "next/image";
import { IconCoupon, IconDiamond, IconFewCars, IconGlobCar, IconHandBreak, IconLuxCar, IconStars } from "./Icons";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function DescriptionSection(){
    const t = useTranslations();
    const [carTransition,setCarTransition] = useState(0)
    const sectionRef = useRef()
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);

        return () => {
        document.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    const scrollHandler = () => {
        const elmTop = sectionRef.current.getBoundingClientRect().top
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if(elmTop < window.innerHeight / 2 && elmTop > 0){
            setCarTransition(elmTop)
        }
    };
    return(
        <section ref={sectionRef} className="my-12">
            <div className="w-[85vw] max-w-[1336px] m-auto">
                <div className="md:flex hidden rtl:md:justify-between ltr:md:justify-start justify-center items-center overflow-hidden">
                    <div className="text-[#3B82F6] lg:text-3xl md:text-2xl font-bold lg:max-w-[400px] md:max-w-[300px] lg:leading-18 rtl:md:text-right ltr:md:text-left text-center">
                        {t('slogan2')}
                    </div>
                    <div style={{transform:`translateX(${carTransition}px)`}} className="md:block hidden">
                        <Image src={'/images/company-car.png'} width={360} height={190} alt=""></Image>
                    </div>
                </div>
                <div className="flex gap-4 lg:flex-nowrap flex-wrap lg:justify-between justify-center">
                    <DescriptionItem 
                        title={t('reasonTitle1')}
                        text={t('reasonDescription1')}
                        icon={<IconDiamond/>}
                    />
                    <DescriptionItem 
                        title={t('reasonTitle2')}
                        text={t('reasonDescription2')}
                        icon={<IconLuxCar/>}
                        />
                    <DescriptionItem 
                        title={t('reasonTitle3')}
                        text={t('reasonDescription3')}
                        icon={<IconGlobCar/>}
                        />
                </div>
                <div className="flex my-16 gap-4 lg:flex-nowrap flex-wrap">
                    <OptionItem icon={<IconCoupon/>} title={t('whyOption1')}/>
                    <OptionItem icon={<IconHandBreak/>} title={t('whyOption2')}/>
                    <OptionItem icon={<IconFewCars/>} title={t('whyOption3')}/>
                    <OptionItem icon={<IconStars/>} title={t('whyOption4')}/>
                </div>
            </div>
            
        </section>
    )
}
export function DescriptionItem({icon,title,text}){
    return(
        <div className="bg-white p-[30px] lg:w-[calc(33%-16px)] md:w-[calc(50%-16px)] rtl:md:text-right ltr:md:text-left text-center w-full border border-[#F4F4F4] rounded-2xl flex flex-col gap-2 shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <div className="h-12 flex justify-center md:justify-start">
                {icon}
            </div>
            <div className="lg:text-base md:text-sm text-xs">{title}</div>
            <p className="text-[#5D5D5D] lg:text-base md:text-sm text-xs leading-8">{text}</p>
        </div>
    )
}

export function OptionItem({icon,title}){
    return(
        <div className="rounded-2xl lg:w-full md:w-[calc(50%-16px)] w-full md:text-sm text-xs bg-white p-4 gap-4 flex items-center">
            {icon}
            {title}
        </div>
    )
}