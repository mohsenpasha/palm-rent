'use client'
import 'nprogress/nprogress.css'
import Image from 'next/image'
import { IconArrow, IconBag, IconGas, IconGearBox, IconHeart, IconPerson } from '../components/Icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'


export default function FavPage(){
    return(
        <>
            <PageNavBar text={'مورد علاقه های من'} backUrl={'/panel'}/>
            <div className='xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]'>
                <div className="flex my-8 gap-2 flex-wrap">
                    {/* <SingleFavCar/> */}
                    <div className='xl:w-[calc(33%-8px)] md:w-[calc(50%-8px)] w-full'>
                        <SingleFavCar/>
                    </div>
                    <div className='xl:w-[calc(33%-8px)] md:w-[calc(50%-8px)] w-full'>
                        <SingleFavCar/>
                    </div>              
                </div>
            </div>
        </>
    )
}

export function SingleFavCar(){
    const t = useTranslations();
    return(
        <div className='flex h-[120px] w-full bg-white rounded-lg p-3 gap-2'>
            <div className='flex sm:h-full h-auto sm:size-auto size-[100px] shrink-0'>
                <Image className='size-full object-cover rounded-lg' src={"/images/singlecar-2.jpg"} width={200} height={200} alt=""/>
            </div>
            <div className='flex flex-col h-full justify-between w-full'>
                <div>
                    <div className='flex w-full justify-between items-center'>
                        <div className='font-bold w-10/12 md:text-base text-sm truncate'>
                            تویوتا یاریس 2024 دبی
                        </div>
                        <div className='flex size-6'>
                            <IconHeart active/>
                        </div>
                    </div>
                    <div className='text-[10px] text-[#2C3131]'>
                        Audi r8 2022
                    </div>
                </div>
                <FavCarOptions/>
            </div>
        </div>
    )
}


export function FavCarOptions(){
    const t = useTranslations();
    return(
        <div className={`flex w-full text-[#787878] text-nowrap flex-wrap gap-1`}>
            <SingleFavCarOption icon={<IconGas/>} text={t('gasoline')}/>
            <SingleFavCarOption icon={<IconGearBox/>} text={t('geared')}/>
            <SingleFavCarOption icon={<IconBag/>} text={<>3 {t('suitCase')}</>}/>
            <SingleFavCarOption icon={<IconPerson/>} text={<>4 {t('people')}</>}/>
        </div>
    )
}

export function SingleFavCarOption({icon,text}){
    return(
        <div className="w-[calc(50%-16px)] flex items-center gap-1 text-sm">
            <span className={`size-3`}>
                {icon}
            </span>
            {text}
        </div>
    )
}

export function PageNavBar({text,backUrl}){
    return(
        <div className='flex p-3 gap-2 border-b border-[#0000001f] bg-white items-center text-[#333333] font-bold'>
            <Link href={backUrl} className='size-[42px] rounded-full border border-[#0000001f] flex items-center justify-center -rotate-90'>
                <IconArrow/>
            </Link>
            <div>{text}</div>
        </div>
    )
}