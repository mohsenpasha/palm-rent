'use client'
import { useEffect, useRef, useState } from "react";
import { IconCalender, IconClock, IconLocation, IconSearch } from "./Icons";
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
import { Calendar } from "react-multi-date-picker"

// import DateObject from "react-multi-date-picker/classes/date_object"
import DateObject from "react-date-object"

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useDispatch, useSelector } from "react-redux";
import { changeCarDates } from "@/redux/slices/globalSlice";

export default function SearchBar(){
    const carDates = useSelector((state) => state.global.carDates)
    const [cityToggle,setCityToggle] = useState(false)
    const [dataToggle,setDateToggle] = useState(false)
    return(
        <>
            <div className="relative border-2 border-[#EAEAEA] bg-white rounded-2xl p-2 py-4 md:p-6 md:py-8">
                <div className="lg:text-2xl md:text-xl sm:text-lg  md:text-right text-center text-md font-bold mb-8">
                    اجاره آنلاین خودرو در همه شهر ها با بهترین قیمت
                </div>
                <div className="flex lg:gap-2 gap-4 items-end lg:flex-nowrap flex-wrap">
                    <div className="relative w-full lg:w-3/12 grow-0 flex flex-col gap-1">
                        <span className="text-sm">مقصد</span>
                        <div onClick={()=>setCityToggle(!cityToggle)} className="border-[1px] border-[#B5B5B5B2] flex items-center w-full rounded-xs md:rounded-lg p-3 px-2 text-[#4C4C4C] cursor-pointer gap-1">
                            <span className="size-6">
                                <IconLocation/>
                            </span>
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
                    <div className="relative lg:w-5/12 w-full sm:flex-nowrap flex-wrap sm:gap-4 flex-col sm:flex-row flex gap-2">
                        <div className="relative w-full grow-0 flex flex-col gap-1">
                            <span className="text-sm">تاریخ و زمان تحویل</span>
                            <div onClick={()=>setDateToggle(true)} className="border-[1px] border-[#B5B5B5B2] text-sm md:text-base flex items-center w-full rounded-xs md:rounded-lg text-[#4C4C4C] cursor-pointer justify-between">
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] gap-1 items-center">
                                    <IconClock/>
                                    <span>{carDates[0] || 'تاریخ'}</span>
                                </div>
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1 border-r-[1px] border-[#B5B5B5B2]">
                                    <IconCalender/> 
                                    <span>زمان</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full grow-0 flex flex-col gap-1">
                            <span className="text-sm">تاریخ و زمان عودت</span>
                            <div onClick={()=>setDateToggle(true)} className="border-[1px] border-[#B5B5B5B2] text-sm md:text-base flex items-center w-full rounded-xs md:rounded-lg text-[#4C4C4C] cursor-pointer justify-between">
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1">
                                    <IconClock/>
                                    <span>{carDates[1] || 'تاریخ'}</span>
                                </div>
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1 border-r-[1px] border-[#B5B5B5B2]">
                                    <IconCalender/> 
                                    <span>زمان</span>
                                </div>
                            </div>
                        </div>
                        <DatePicker2/>
                    </div>

                    <button className="lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                        <IconSearch/>
                        جستجوی خودرو ها
                    </button>
                </div>
            </div>
            
            {/* {dataToggle &&  */}
                {/* <DatePickerPopup closeToggle={()=>setDateToggle(false)}/> */}
            {/* } */}
        </>
    )
}

export function CityDropDown({children}){
    return(
        <div className="absolute z-10 animate-fade-in overflow-hidden -bottom-1 w-full translate-y-full bg-white flex flex-col min-w-32 rounded-lg border-[1px] border-[#cccccc] shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]">
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
                <span className="size-6">
                    <IconLocation/>
                </span>
                {text}
            </div>
        </div>
    )
}

// export function DatePickerPopup({closeToggle}) {
//   const [range, setRange] = useState(undefined);

//   return (
//     <div className="fixed z-[51] w-full h-full top-0 right-0">
//         <div onClick={closeToggle} className="absolute top-0 right-0 w-full h-full bg-black opacity-40 transition-all"></div>
//         <div className="md:min-w-[580px] md:max-h-[90vh] md:w-auto md:h-auto h-full w-full rounded-lg border-[#9E9E9E] border-[1px] bg-white absolute z-10 left-1/2 top-1/2 -translate-1/2 flex flex-col justify-between">
//             <span className="text-xl font-bold block md:p-4 p-4 pt-16">
//                 انتخاب زمان و تاریخ
//             </span>
//             <div className="flex w-full justify-between gap-2 p-2">
//                 <div className="bg-[#F5F4F2] rounded-lg flex-1 py-2 px-3 flex flex-col">
//                     <span className="text-xs text-[#75736F]">زمان تحویل</span>
//                     <input className="outline-0 w-fit" type="time" defaultValue={'10:00'}/>
//                 </div>
//                 <div className="bg-[#F5F4F2] rounded-lg flex-1 py-2 px-3 flex flex-col">
//                     <span className="text-xs text-[#75736F]">زمان عودت</span>
//                     <input className="outline-0 w-fit" type="time" defaultValue={'10:00'}/>
//                 </div>
//             </div>
//             <div className="p-4">
//                 <DayPicker
//                     mode="range"
//                     selected={range}
//                     onSelect={setRange}
//                     numberOfMonths={1}
//                     className="w-full"
//                     modifiersClassNames={{
//                         selected: 'text-white',
//                         range_start: 'sp-date-btn text-black sp-date-btn-start',
//                         range_end: 'sp-date-btn text-white  sp-date-btn-end',
//                         range_middle: 'rounded-none bg-[#A5C6FB] sp-middle-btn',
//                         months: 'flex'
//                     }}
//                     />
//             </div>

//                 {/* {range?.from && range?.to && (
//                     <p className="mt-2 text-sm text-gray-700">
//                     از <b>{range.from.toLocaleDateString()}</b> تا{' '}
//                     <b>{range.to.toLocaleDateString()}</b>
//                     </p>
//                 )} */}
//                 <div className="w-full rounded-lg border-[1px] border-[#cccccc] p-2 flex justify-between gap-2">
//                     <button onClick={closeToggle} className="flex-1 cursor-pointer bg-[#F5F4F2] rounded-xl py-3">لغو کردن</button>
//                     <button className="flex-1 cursor-pointer bg-[#3B82F6] text-white rounded-xl py-3">نمایش 800 پیشنهاد</button>
//                 </div>
//         </div>
        
//     </div>
//   );
// }


function convertToEnglishDigits(str) {
    if(!str) return
  return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
}


function parseShamsiDate(str) {
    const [y, m, d] = str.split("/").map(Number)
    return { year: y, month: m, day: d }
}

const daysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]

function getDaysSinceEpoch(date) {
    if(!date) return
  const { year, month, day } = parseShamsiDate(date)


  let totalDays = (year - 1) * 365

  totalDays += Math.floor((year - 1) / 4)

  for (let i = 0; i < month - 1; i++) {
    totalDays += daysInMonth[i]
  }

  totalDays += day

  return totalDays
}

function getDiffInShamsiDays(date1, date2) {
    if(!date1 || !date2) return
  return getDaysSinceEpoch(date2) - getDaysSinceEpoch(date1)
}





export function DatePicker2() {
    const carDates = useSelector((state) => state.global.carDates)
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const [hovered, setHovered] = useState(null)
    const [isValueSync,setIsValueSync] = useState(false)
    const [hoverText,setHoverText] = useState('تاریخ رفت')

    

    function hoverHandler(date){
        setHovered(date)
    }
    function changeHandler(data){
        if(data.length == 2){
            let dateDistance =  getDiffInShamsiDays(convertToEnglishDigits(data[1]?.format("YYYY/MM/DD")),convertToEnglishDigits(hovered?.format("YYYY/MM/DD")))
            if(dateDistance < 0){
                setValue([data[0]])
            }
            else{
                setValue(data)
            }
        }
        else{
            setValue(data)
        }        
    }
    useEffect(()=>{
        if(!isValueSync) return
        if(value.length == 0){
            dispatch(changeCarDates([]))
        }
        else{
            console.log(value.length)
            console.log(value)
            dispatch(changeCarDates(value.map((item,index)=>{
                return convertToEnglishDigits(item.format())
            })))
        }
        // console.log(value[0].format())
        // console.log(value[1].format())
    },[value])
    useEffect(()=>{
        const testValue = carDates.map(
        (d) =>
            new DateObject({
            date: d,
            format: "YYYY/MM/DD",
            calendar: persian,
            })
        )
        setValue(testValue)
        setIsValueSync(true)
    },[])
    useEffect(()=>{
        let dateDistance =  getDiffInShamsiDays(convertToEnglishDigits(value[0]?.format("YYYY/MM/DD")),convertToEnglishDigits(hovered?.format("YYYY/MM/DD")))
        if(dateDistance < 0){
            setHoverText('تاریخ رفت')
        }
        else{
            if(value.length == 1){
                setHoverText('تاریخ برگشت')
            }
            else{
                setHoverText('تاریخ رفت')
            }
        }
    },[hovered])
  return (
    <div className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2">
      <Calendar
        range
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
        value={value}
        minDate={new Date()}
        onChange={changeHandler}
        numberOfMonths={2}
        mapDays={({ date }) => {
          const isHovered = hovered?.format?.() === date.format()
          return {
            onMouseEnter: () => hoverHandler(date),
            onMouseLeave: () => setHovered(null),
            children: (
              <div style={{ position: "relative" }}>
                {/* Tooltip on hover */}
                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      top: -40,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#333",
                      color: "#fff",
                      padding: "4px 8px",
                      fontSize: "12px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      zIndex: 10,
                    }}
                  >
                    {hoverText}
                    {/* <br /> */}
                    {/* {`تاریخ برگشت: ${value?.[1]?.format?.() || "---"}`} */}
                  </div>
                )}
                <span>{date.day}</span>
              </div>
            ),
          }
        }}
      />
    </div>
  )
}