'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import { IconArrow, IconArrowHandle, IconWSOSD } from './Icons';
import Image from 'next/image';
import Link from 'next/link';
export default function BranchSection(){
    return(
        <section className='my-4 bg-[#F6F6F6] lg:pt-[92px] py-12 md:py-16'>
            <div className='w-[85vw] m-auto'>
            <div className='text-center pb-12 lg:text-[32px] md:text-2xl text-lg font-bold text-[#3B82F6]'>
                شعبه های پالم رنت
            </div>
                <Slider/>
            </div>
        </section>
    )
}
export function Slider() {
  return (
    <div className='relative'>
        <Swiper spaceBetween={10} slidesPerView={1} modules={[Navigation]} loop={true} navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }} 
            breakpoints={{
                400: {
                slidesPerView: 2,
                },
                768: {
                slidesPerView: 3,
                },
                1024: {
                slidesPerView: 4,
                },
                1280: {
                slidesPerView: 5,
                },
            }}
            >
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/dubai.webp'} title={'شعبه دبی'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/antalya.webp'} title={'آنتالیا ترکیه'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/kayseri-min.jpg'} title={'قیصریه ترکیه'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/georgia-min.jpg'} title={'تفلیس گرجستان'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/istanbul.webp'} title={'شعبه استانبول'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/oman-min.jpg'} title={'شعبه عمان'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/kish-min.jpg'} title={'شعبه کیش'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/samsun.webp'} title={'سامسون ترکیه'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/ezmir.webp'} title={'ازمیر ترکیه'}/>
        </SwiperSlide>
        <SwiperSlide>
            <SingleBranchCity link={'#'} image={'/images/ankara.webp'} title={'آنکارا ترکیه'}/>
        </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next cursor-pointer custom-arrow absolute top-1/2 left-0 z-10 -translate-y-1/2 lg:-translate-x-1/2 rounded-full bg-white w-8 h-8 md:flex hidden items-center justify-center shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <IconArrow className={'rotate-90'}/>
        </div>
        <div className="swiper-button-prev cursor-pointer custom-arrow absolute top-1/2 right-0 z-10 -translate-y-1/2 lg:translate-x-1/2 rounded-full bg-white w-8 h-8 md:flex hidden items-center justify-center shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <IconArrow className={'-rotate-90'}/>
        </div>
    </div>
  );
}

export function SingleBranchCity({link,image,title}){
    return(
            <Link href={link} className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src={image} width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] group-hover:text-white top-0 left-0 transition-all'>
                        <IconArrowHandle/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    {title}
                </div>
            </Link>
    )
}