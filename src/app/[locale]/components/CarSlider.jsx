'use client'
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper/modules';

import 'swiper/css';
import { IconArrow } from './Icons';
import SingleCar from "./SingleCar";
import { useSelector } from "react-redux";
export default function CarSlider() {
    const carList = useSelector((state) => state.carList.carList)
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
    }, [swiperInstance]);

  return (
    <div className='relative xl:w-full md:w-11/12 w-full m-auto'>
        <Swiper spaceBetween={10} slidesPerView={1.3} modules={[Navigation,Pagination ]} pagination={{ clickable: true,el: paginationRef.current }} navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }} 
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            breakpoints={{
                600: {
                slidesPerView: 2.2,
                },
                768: {
                slidesPerView: 2.5,
                },
                1024: {
                slidesPerView: 3,
                },
                1280: {
                slidesPerView: 4,
                },
            }}
            >
                {carList.map((item,index)=>{
                        return(
                            <SwiperSlide>
                                <SingleCar noBtn={true} data={item}/>
                            </SwiperSlide>
                        )
                    })}

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