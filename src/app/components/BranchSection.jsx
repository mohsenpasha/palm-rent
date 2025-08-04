'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import { IconArrow, IconArrowHandle, IconWSOSD } from './Icons';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
export default function BranchSection(){
    const { t, i18n } = useTranslation();
    return(
        <section className='bg-[#F6F6F6] py-8'>
            <div className='w-[85vw] max-w-[1336px] m-auto'>
            <div className='text-center pb-6 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]'>
                {t('branches')}
            </div>
                <Slider/>
            </div>
        </section>
    )
}
export function Slider() {
    const { t, i18n } = useTranslation();
  return (
    <div dir='rtl' className='relative'>
        <Swiper
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            speed={3000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
                400: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
            }}
            >
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/dubai'} image={'/images/dubai.webp'} title={t('dubai')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/antalya'} image={'/images/antalya.webp'} title={t('antalya')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/kayseri'} image={'/images/kayseri-min.jpg'} title={t('kayseri')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/georgia'} image={'/images/georgia-min.jpg'} title={t('georgia')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/istanbul'} image={'/images/istanbul.webp'} title={t('istanbul')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/oman'} image={'/images/oman-min.jpg'} title={t('oman')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/kish'} image={'/images/kish-min.jpg'} title={t('kish')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/samsun'} image={'/images/samsun.webp'} title={t('samsun')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/ezmir'} image={'/images/ezmir.webp'} title={t('ezmir')}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'/cars-rent/ankara'} image={'/images/ankara.webp'} title={t('ankara')}/>
        </SwiperSlide>
        </Swiper>
        {/* <div className="swiper-button-next cursor-pointer custom-arrow absolute top-1/2 left-0 z-10 -translate-y-1/2 lg:-translate-x-1/2 rounded-full bg-white w-8 h-8 md:flex hidden items-center justify-center shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <IconArrow className={'rotate-90'}/>
        </div>
        <div className="swiper-button-prev cursor-pointer custom-arrow absolute top-1/2 right-0 z-10 -translate-y-1/2 lg:translate-x-1/2 rounded-full bg-white w-8 h-8 md:flex hidden items-center justify-center shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <IconArrow className={'-rotate-90'}/>
        </div> */}
    </div>
  );
}

export function SingleBranchCity({link,image,title}){
    return(
            <Link href={link} className='border-[1px] group border-[#0000001f] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src={image} width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute size-10 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] group-hover:text-white top-2 left-2 transition-all'>
                        <span className='flex size-4'>
                            <IconArrowHandle/>
                        </span>
                    </span>
                </div>
                <div className='border-[1px] border-[#0000001f] rounded-lg mt-2 p-3'>
                    {title}
                </div>
            </Link>
    )
}