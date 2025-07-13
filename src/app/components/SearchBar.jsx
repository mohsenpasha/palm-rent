'use client'
import { useState } from "react";
import { IconLocation } from "./Icons";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function SearchBar(){
    const [cityToggle,setCityToggle] = useState(false)
    return(
        <div className="relative border-2 border-[#EAEAEA] bg-white rounded-2xl p-6 py-8">
            <div className="text-2xl font-bold mb-8">
                اجاره آنلاین خودرو در همه شهر ها با بهترین قیمت
            </div>
            <div className="flex">
                <div className="relative flex-3/12 grow-0 flex flex-col gap-1">
                    <span className="text-sm">شهر</span>
                    <div onClick={()=>setCityToggle(!cityToggle)} className="border-[1px] border-[#B5B5B5B2] flex items-center w-full rounded-xl p-3 px-2 text-[#4C4C4C] cursor-pointer gap-1">
                        <IconLocation/>
                        دبی
                    </div>
                    {cityToggle &&
                        <CityDropDown>
                            <SingleCityItem href={'test'} text={'تهران'}/>
                            <SingleCityItem href={'test'} text={'تهران'}/>
                            <SingleCityItem href={'test'} text={'تهران'}/>
                            <SingleCityItem href={'test'} text={'تهران'}/>
                            <SingleCityItem href={'test'} text={'تهران'}/>
                        </CityDropDown>
                    }
                </div>
                <div>
                    {/* <MyDatePicker/> */}
                    <DatePickerPopup/>
                </div>
            </div>
        </div>
    )
}

export function CityDropDown({children}){
    return(
        <div className="absolute animate-fade-in overflow-hidden -bottom-1 w-full translate-y-full bg-white flex flex-col min-w-32 rounded-lg border-[1px] border-[#cccccc] shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]">
            <div className="max-h-60 overflow-auto">
                {children}
            </div>
        </div>
    )
}


export function SingleCityItem({text,href}){
    return(
        <div href={href} className="text-[#4b5259] text-nowrap px-3 transition-all hover:bg-[#f2f9ff] last-of-type:border-0 flex items-center cursor-pointer">
            <div className="flex border-b-[1px] border-[#0000001f] w-full gap-1 py-4">
                <IconLocation/>
                {text}
            </div>
        </div>
    )
}

export function DatePickerPopup() {
  const [range, setRange] = useState(undefined);

  return (
    <div className="fixed z-[51] w-full h-full top-0 right-0">
        <div className="absolute top-0 right-0 w-full h-full bg-black opacity-40 transition-all"></div>
        <div className="min-w-[580px] max-h-[90vh] rounded-lg border-[#9E9E9E] border-[1px] bg-white absolute z-10 left-1/2 top-1/2 -translate-1/2">
            <span className="text-xl font-bold p-4 block">
                انتخاب زمان و تاریخ
            </span>
            <div className="flex w-full justify-between gap-2 p-2">
                <div className="bg-[#F5F4F2] rounded-lg flex-1 py-2 px-3 flex flex-col">
                    <span className="text-xs text-[#75736F]">زمان تحویل</span>
                    <input className="outline-0 w-fit" type="time" defaultValue={'10:00'}/>
                </div>
                <div className="bg-[#F5F4F2] rounded-lg flex-1 py-2 px-3 flex flex-col">
                    <span className="text-xs text-[#75736F]">زمان عودت</span>
                    <input className="outline-0 w-fit" type="time" defaultValue={'10:00'}/>
                </div>
            </div>
            <div className="p-4">
                <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={setRange}
                    numberOfMonths={1}
                    className="w-full"
                    modifiersClassNames={{
                        selected: 'text-white',
                        range_start: 'sp-date-btn text-black sp-date-btn-start',
                        range_end: 'sp-date-btn text-white  sp-date-btn-end',
                        range_middle: 'rounded-none bg-[#A5C6FB] sp-middle-btn',
                        months: 'flex'
                    }}
                    />
            </div>

                {/* {range?.from && range?.to && (
                    <p className="mt-2 text-sm text-gray-700">
                    از <b>{range.from.toLocaleDateString()}</b> تا{' '}
                    <b>{range.to.toLocaleDateString()}</b>
                    </p>
                )} */}
                <div className="w-full rounded-lg border-[1px] border-[#cccccc] p-2 flex justify-between gap-2">
                    <button className="flex-1 cursor-pointer bg-[#F5F4F2] rounded-xl py-3">لغو کردن</button>
                    <button className="flex-1 cursor-pointer bg-[#3B82F6] text-white rounded-xl py-3">نمایش 800 پیشنهاد</button>
                </div>
        </div>
        
    </div>
  );
}