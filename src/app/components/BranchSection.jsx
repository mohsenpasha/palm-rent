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
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/dubai.webp' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    شعبه دبی
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/antalya.webp' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    آنتالیا ترکیه
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/kayseri-min.jpg' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    قیصریه ترکیه
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/georgia-min.jpg' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    تفلیس گرجستان
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/istanbul.webp' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    شعبه استانبول
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/oman-min.jpg' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    شعبه عمان
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/kish-min.jpg' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    شعبه کیش
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/samsun.webp' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    سامسون ترکیه
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/ezmir.webp' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    ازمیر ترکیه
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="#" className='border-[1px] group border-[#E2E2E2] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <Image className='w-full rounded-lg object-cover h-[140px]' src='/images/ankara.webp' width={218} height={181} alt=''></Image>
                <div className='absolute left-2 top-2'>
                    <IconWSOSD/>
                    <span className='absolute w-13 h-13 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] top-0 left-0 transition-all'>
                        <IconArrowHandle className={'transition-all group-hover:filter-[brightness(10)]'}/>
                    </span>
                </div>
                <div className='border-[1px] border-[#E2E2E2] rounded-lg mt-2 p-3'>
                    آنکارا ترکیه
                </div>
            </Link>
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