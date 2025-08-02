'use client'
import { useState } from "react"
import { IconCarCat1, IconCarCat2, IconCarCat3, IconCarCat4, IconCarCat5, IconCarCat6, IconCarCat7, IconCarCat8 } from "./Icons"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function CarCategorySection() {
  const [carList] = useState([
    { name: 'ون', icon: <IconCarCat1 /> },
    { name: 'ماشین برقی', icon: <IconCarCat2 /> },
    { name: 'بیزینسی', icon: <IconCarCat3 /> },
    { name: 'خودرو کروک', icon: <IconCarCat4 /> },
    { name: 'افرودی', icon: <IconCarCat5 /> },
    { name: 'اسپورت', icon: <IconCarCat6 /> },
    { name: 'اقتصادی', icon: <IconCarCat7 /> },
    { name: 'ماشین لوکس', icon: <IconCarCat8 /> },
  ])

  return (
    <section>
      <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px] overflow-hidden my-16">
        <div className="text-center text-xl font-semibold mb-6">
          دسته بندی خودرو ها
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2.5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            640: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          className="!py-2"
        >
          {carList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-between gap-2 rounded-2xl bg-white w-full py-4 shadow-md">
                {item.icon}
                <div className="text-sm font-medium">
                  {item.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}