'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper/modules';

import 'swiper/css';
import { IconArrow, IconArrowHandle, IconWSOSD } from './Icons';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
export default function CommentSection(){
    return(
        <section className='my-32 bg-[#F6F6F6] py-20 pb-24'>
            <div className='w-[85vw] m-auto'>
                <div className='md:text-right text-center pb-12 lg:text-[32px] md:text-2xl text-lg font-bold text-[#3B82F6]'>
                    نظرات مشتریان عزیز
                </div>
                <CommentSlider/>
            </div>
        </section>
    )
}

export function CommentSlider() {
const paginationRef = useRef(null);
const [swiperInstance, setSwiperInstance] = useState(null);
    useEffect(() => {
        if (
        swiperInstance &&
        paginationRef.current &&
        swiperInstance.params.pagination &&
        typeof swiperInstance.params.pagination !== 'boolean'
        ) {
        swiperInstance.params.pagination.el = paginationRef.current;
        swiperInstance.pagination.init();
        swiperInstance.pagination.render();
        swiperInstance.pagination.update();
        }
        console.log(swiperInstance)
    }, [swiperInstance]);

  return (
    <div className='relative'>
        <Swiper spaceBetween={10} slidesPerView={1} modules={[Navigation,Pagination ]} pagination={{ clickable: true,el: paginationRef.current }} navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }} 
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            // onBeforeInit={(swiper) => {
            //     // if (swiper.params.pagination) {
            //         swiper.params.pagination.el = paginationRef.current;
            //     // }
            // }}
            breakpoints={{
                400: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 2,
                },
                1280: {
                slidesPerView: 3,
                },
            }}
            >
            <SwiperSlide>
                <SliderSingleComment image={'/images/comment-p-3.png'} personName={'عباس احمدی'} personFrom={'مشتری استانبول'} 
                comment={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، '}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderSingleComment image={'/images/comment-p-2.png'} personName={'مطهره عزیزی'} personFrom={'مشتری کیش'} 
                comment={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، '}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderSingleComment image={'/images/comment-p-1.png'} personName={'زینب قادری'} personFrom={'مشتری دبی'} 
                comment={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، '}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderSingleComment image={'/images/comment-p-3.png'} personName={'عباس احمدی'} personFrom={'مشتری استانبول'} 
                comment={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، '}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderSingleComment image={'/images/comment-p-2.png'} personName={'مطهره عزیزی'} personFrom={'مشتری کیش'} 
                comment={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، '}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderSingleComment image={'/images/comment-p-1.png'} personName={'زینب قادری'} personFrom={'مشتری دبی'} 
                comment={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، '}/>
            </SwiperSlide>
        </Swiper>
        <div ref={paginationRef} className="swiper-pagination" />
        <div className="swiper-button-next hover:bg-[linear-gradient(#4554AF,#3B82F6)] group transition-all cursor-pointer custom-arrow absolute top-1/2 -left-2 z-10 -translate-y-1/2 -translate-x-full rounded-full bg-white w-8 h-8 md:flex hidden items-center justify-center shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <IconArrow className={'rotate-90 group-hover:filter-[invert(1)] transition-all'}/>
        </div>
        <div className="swiper-button-prev hover:bg-[linear-gradient(#4554AF,#3B82F6)] group transition-all cursor-pointer custom-arrow absolute top-1/2 -right-2 z-10 -translate-y-1/2 translate-x-full rounded-full bg-white w-8 h-8 md:flex hidden items-center justify-center shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <IconArrow className={'-rotate-90 group-hover:filter-[invert(1)] transition-all'}/>
        </div>
    </div>
  );
}
export function SliderSingleComment({image,personName,personFrom,comment}){
    return(
            <div className='bg-white p-7 w-full lg:rounded-4xl md:rounded-2xl rounded-lg md:gap-6 gap-3 flex flex-col'>
                <div className='flex w-full items-center gap-2'>
                    <div className='shrink-0'>
                        <Image className='rounded-full' src={image} width={63} height={63} alt=''></Image>
                    </div>
                    <div className='h-full flex flex-col justify-center'>
                        <div className='md:text-xl sm:text-lg text-base font-bold'>{personName}</div>
                        <div className='md:text-sm text-xs'>{personFrom}</div>
                    </div>
                </div>
                <p className='text-[#363636] sm:text-sm text-xs leading-[180%]'>{comment}</p>
            </div>
    )
}