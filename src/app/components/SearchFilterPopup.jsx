'use client'
import { useDispatch } from "react-redux";
import { IconClose, IconSearch2 } from "./Icons";

export default function SearchFilterPopup(){
    const dispatch = useDispatch()
    function closePopup(){
        dispatch(changeFilterStatus(false))
    }
    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div onClick={closePopup} className="absolute w-full h-full bg-black opacity-40"></div>
            <div className="bg-white lg:w-[80%] sm:w-[90%] w-[95%] pb-6 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl rounded-bl-[0] rounded-br-[0]">
                <div className="border-b-[1px] border-[#B0B0B0CC] md:text-base text-sm p-4 font-bold relative">
                    <span>
                        فیلتر‌ها
                    </span>
                    <span onClick={closePopup} className="absolute top-1/2 left-4 -translate-y-1/2 border-[1px] transition-all border-red-600 hover:bg-red-600 hover:text-white cursor-pointer text-red-600 rounded-sm sm:p-2 p-1">
                        <IconClose/>
                    </span>
                </div>
                <div className="p-4">
                    <PriceRange/>
                </div>
            </div>
        </div>
    )
}

import { Range } from 'react-range'
import { useState } from 'react'
import { changeFilterStatus } from "@/redux/slices/globalSlice";

export function PriceRange(){
  const STEP = 100000
  const MIN = 0
  const MAX = 10000000

  const [values, setValues] = useState([1000000, 5000000])

  return (
    <div dir="ltr" className="w-full px-4">
      <div className="relative h-10 flex items-center">
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={values}
          onChange={setValues}
          renderTrack={({ props, children }) => {
            const [min, max] = values
            const percentLeft = (max / (MAX - MIN)) * 100
            const percentRight = (min / (MAX - MIN)) * 100

            return (
              <div
                {...props}
                style={{ ...props.style }}
                className="w-full h-2 bg-gray-300 rounded relative"
              >
                <div
                  className="absolute top-0 h-full bg-indigo-500 rounded"
                  style={{
                    right: `${100 - percentLeft}%`,
                    left: `${percentRight}%`,
                  }}
                />
                {children}
              </div>
            )
          }}
          renderThumb={({ props, index }) => {
            const { key, ...rest } = props
            return (
                <div key={key} {...rest}
                className="w-5 h-5 bg-indigo-600 rounded-full border-2 border-white shadow cursor-pointer"
                >
                <div className="absolute top-6 text-xs text-center text-gray-800 whitespace-nowrap">
                    {values[index].toLocaleString()}
                </div>
                </div>
            )
            }}
        />
      </div>

      <div className="flex justify-between text-sm mt-4 px-1 text-gray-600">
        <span>حداقل: {values[0].toLocaleString()} تومان</span>
        <span>حداکثر: {values[1].toLocaleString()} تومان</span>
      </div>
    </div>
  )
}
