'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import { IconArrow, IconArrowHandle, IconWSOSD } from './Icons';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useTranslations } from 'next-intl';
export default function BranchSection(){
    const t = useTranslations();
    const branches = useSelector((state)=>state.global.branches)
    return(
        <section className='bg-[#F6F6F6] py-8'>
            <div className='w-[85vw] max-w-[1336px] m-auto'>
                
            <div className='text-center pb-6 md:text-xl sm:text-lg text-base font-bold text-[#3B82F6]'>
                {t('branches')}
            </div>
                {!branches ?
                    <div>loading</div>
                 :
                    <Slider/>
                }
            </div>
        </section>
    )
}
export function Slider() {
    const branches = useSelector((state)=>state.global.branches)
    const t = useTranslations();
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
                {branches && branches.map((item,index)=>{
                    return(
                        <SwiperSlide>
                            <SingleBranchCity link={'/cars-rent/dubai'} image={item.photo} title={item.title}/>
                        </SwiperSlide>
                    )
                })}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
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
// export function BranchSkelton(){
//     return(
//         <div className='flex'>
//             <div className='border-[1px] group border-[#0000001f] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
//                 <Image className='w-full rounded-lg object-cover h-[140px]' src={image} width={218} height={181} alt=''></Image>
//                 <div className='absolute left-2 top-2'>
//                     <IconWSOSD/>
//                     <span className='absolute size-10 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] group-hover:text-white top-2 left-2 transition-all'>
//                         <span className='flex size-4'>
//                             <IconArrowHandle/>
//                         </span>
//                     </span>
//                 </div>
//                 <div className='border-[1px] border-[#0000001f] rounded-lg mt-2 p-3'>
//                     {title}
//                 </div>
//             </div>
//         </div>
//     )
// }

export function SingleBranchCity({link,image,title}){
    return(
            <Link href={link} className='border-[1px] group border-[#0000001f] bg-white inline-block w-full rounded-lg overflow-hidden relative p-2 cursor-pointer'>
                <div className='w-full max-sm:aspect-square'>
                    <Image className='w-full rounded-lg object-cover h-full md:h-[140px]' src={image} width={218} height={181} alt=''></Image>
                </div>
                <div className='absolute left-2 top-2 sm:size-[72px] size-[40px]'>
                    <IconWSOSD/>
                    <span className='absolute sm:size-10 size-5 flex items-center justify-center rounded-full group-hover:bg-[#3B82F6] group-hover:text-white top-2 left-2 transition-all'>
                        <span className='flex size-3 sm:size-6'>
                            <IconArrowHandle/>
                        </span>
                    </span>
                </div>
                <div className='border-[1px] border-[#0000001f] rounded-lg mt-2 p-3 md:text-base sm:text-sm text-xs'>
                    {title}
                </div>
            </Link>
    )
}