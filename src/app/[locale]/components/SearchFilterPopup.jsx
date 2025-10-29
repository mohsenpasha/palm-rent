'use client'
import { useDispatch, useSelector } from "react-redux";
import { IconClose, IconSearch2 } from "./Icons";

export default function SearchFilterPopup(){
  const [isPriceConfirmed,setIsPriceConfirmed] = useState(false)
  const t = useTranslations();
    const dispatch = useDispatch()
    function closePopup(){
        dispatch(changeFilterStatus(false))
    }
    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div className="animate-opacity">
              <div onClick={closePopup} className="absolute w-full h-full bg-black opacity-40"></div>
            </div>
            <div className="bg-white sm:w-xl w-[90%] pb-6 absolute sm:top-1/2 left-1/2 sm:-translate-1/2 -translate-x-1/2 sm:bottom-auto bottom-0 sm:rounded-2xl rounded-t-2xl sm:animate-fade-in2 animate-fromBottom">
                <div className="border-b-[1px] border-[#B0B0B0CC] md:text-sm text-xs p-4 font-bold relative">
                    <span>
                      {t('filters')}
                    </span>
                    <span onClick={closePopup} className="absolute top-1/2 rtl:left-4 ltr:right-4 -translate-y-1/2 transition-all cursor-pointer rounded-sm sm:p-2 p-1">
                        <IconClose/>
                    </span>
                </div>
                <div className="p-4">
                    <PriceRange isPriceConfirmed={isPriceConfirmed} closePopup={closePopup}/>
                </div>
              <div className="flex justify-center">
                <button onClick={()=>setIsPriceConfirmed(true)} className="bg-[#3B82F6] rounded-lg p-3 px-9 text-white font-bold w-fit cursor-pointer">تایید</button>
              </div>
            </div>
        </div>
    )
}

import { Range } from 'react-range'
import { useEffect, useState } from 'react'
import { changeFilterStatus } from "@/redux/slices/globalSlice";
import { useTranslations } from "next-intl";
import { changeSelectedPriceRange } from "@/redux/slices/searchSlice";

export function PriceRange({isPriceConfirmed,closePopup}){
  const dispatch = useDispatch()
  const t = useTranslations();
  const priceRange = useSelector((state)=> state.search.priceRange)
  const selectedPriceRange = useSelector((state)=> state.search.selectedPriceRange)
  const currency = useSelector((state)=> state.search.currency)
  const [minValue,setMinValue] = useState(null)
  const [maxValue,setMaxValue] = useState(null)
  const STEP = 10
  const MIN = Math.min(...priceRange)
  const MAX = Math.max(...priceRange)
  const [values, setValues] = useState([MIN, MAX])
  useEffect(()=>{
    console.log('component started')
    if(selectedPriceRange){
      setValues([Math.min(...selectedPriceRange),Math.max(...selectedPriceRange)])
    }
    else{
      setValues([Math.min(...priceRange),Math.max(...priceRange)])
    }
  },[])
  useEffect(()=>{
    if(!isPriceConfirmed) return
    dispatch(changeSelectedPriceRange(values))
    closePopup()
  },[isPriceConfirmed])
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

      <div className="flex justify-between text-xs mt-4 px-1 text-gray-600">
        <span>حداقل: {values[0].toLocaleString()} {t(currency)}</span>
        <span>حداکثر: {values[1].toLocaleString()} {t(currency)}</span>
      </div>
    </div>
  )
}
