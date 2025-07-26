'use client'
import { useEffect, useMemo, useRef, useState } from "react";
import { IconCalender, IconClock, IconLocation, IconSearch } from "./Icons";
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
import { Calendar } from "react-multi-date-picker"

// import DateObject from "react-multi-date-picker/classes/date_object"
import DateObject from "react-date-object"

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useDispatch, useSelector } from "react-redux";
import { changeCarDates, changeDeliveryTime, changeIsDateSelectOpen, changeIsSearchPopupOpen, changeReturnTime } from "@/redux/slices/globalSlice";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useClickOutside } from "../hooks/useClickOutside";
import Link from "next/link";

export default function SearchBar({isPopup=false}){
    const carDates = useSelector((state) => state.global.carDates)
    const isDateSelectOpen = useSelector((state) => state.global.isDateSelectOpen)
    const deliveryTime = useSelector((state) => state.global.deliveryTime)
    const returnTime = useSelector((state) => state.global.returnTime)
    const [cityToggle,setCityToggle] = useState(false)
    const [dataToggle,setDateToggle] = useState(false)
    function closeSearchBar(){
      dispatch(changeIsSearchPopupOpen(false))
    }
    const ref = useClickOutside(() => {
        closeDateSelect()
    });
    const dispatch = useDispatch()
    function closeDateSelect(){
        dispatch(changeIsDateSelectOpen(false))
    }
    function openDateSelect(){
        console.log('open')
        dispatch(changeIsDateSelectOpen(true))
    }
    function changeDeliveryTimeHandler(newTime){
        dispatch(changeDeliveryTime(newTime))
    }
    function changeReturnTimeHandler(newTime){
        dispatch(changeReturnTime(newTime))
    }
    return(
        <>
            <div className={`${isPopup ? 'fixed w-[100vw] h-[100vh] top-0 right-0 z-50' : 'relative md:z-10 bg-white p-2 py-4 md:p-6 md:py-8'} border-2 border-[#EAEAEA] rounded-2xl`}>
              {isPopup &&
                <div onClick={closeSearchBar} className="absolute top-0 right-0 w-full h-full bg-[#00000066]">

                </div>
              }
              {!isPopup &&
                <div className="lg:text-2xl md:text-xl sm:text-lg  md:text-right text-center text-md font-bold mb-8">
                    اجاره آنلاین خودرو در همه شهر ها با بهترین قیمت
                </div>
                }
                <div className={`flex lg:gap-2 gap-4 items-end lg:flex-nowrap flex-wrap ${isPopup ? `bg-white rounded-lg justify-center ${isDateSelectOpen ? 'md:w-10/12 w-full md:p-8 md:my-4' : 'p-8 w-10/12 my-4'} absolute  left-1/2 -translate-x-1/2` : ''}`}>
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
                    <div className={`relative lg:w-6/12 w-full sm:flex-nowrap flex-wrap sm:gap-4 flex-col sm:flex-row flex gap-2`}>
                        <div onClick={openDateSelect} className="relative md:w-[calc(50%-8px)] w-full grow-0 md:shrink-0 flex flex-col gap-1">
                            <span className="text-sm">تاریخ و زمان تحویل</span>
                            <div onClick={()=>setDateToggle(true)} className="border-[1px] border-[#B5B5B5B2] text-sm md:text-base flex items-center w-full rounded-xs md:rounded-lg text-[#4C4C4C] cursor-pointer justify-between">
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] gap-1 items-center">
                                    <IconClock/>
                                    <span>{carDates[0] || 'تاریخ'}</span>
                                </div>
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1 border-r-[1px] border-[#B5B5B5B2]">
                                    <IconCalender/> 
                                    <span>{deliveryTime || 'زمان'}</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={openDateSelect} className="relative md:w-[calc(50%-8px)] w-full grow-0 md:shrink-0 flex flex-col gap-1">
                            <span className="text-sm">تاریخ و زمان عودت</span>
                            <div onClick={()=>setDateToggle(true)} className="border-[1px] border-[#B5B5B5B2] text-sm md:text-base flex items-center w-full rounded-xs md:rounded-lg text-[#4C4C4C] cursor-pointer justify-between">
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1">
                                    <IconClock/>
                                    <span>{carDates[1] || 'تاریخ'}</span>
                                </div>
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1 border-r-[1px] border-[#B5B5B5B2]">
                                    <IconCalender/> 
                                    <span>{returnTime || 'زمان'}</span>
                                </div>
                            </div>
                        </div>
                        {isDateSelectOpen && 
                            <div ref={ref} className="bg-white md:absolute fixed w-[100vw] h-[100vh] md:w-auto md:h-auto top-0 right-0 md:top-auto md:right-auto md:z-auto z-50 md:bottom-0 bottom-[unset] md:translate-y-full md:left-1/2 md:-translate-x-1/2 shadow-[0_0_5px_#8798ad] rounded-lg p-4">
                                <div className="relative z-20 flex w-full justify-center gap-8">
                                    <div className="w-full md:w-auto">
                                        <span>زمان تحویل</span>
                                        <TimeSelectBox selected={deliveryTime} setSelected={changeDeliveryTimeHandler}/>
                                    </div>
                                    <div className="w-full md:w-auto">
                                        <span>زمان عودت</span>
                                        <TimeSelectBox selected={returnTime} setSelected={changeReturnTimeHandler}/>
                                    </div>
                                </div>
                                <div className="flex relative z-10 md:w-full m-auto sm:w-10/12 w-full justify-center md:my-auto my-6">
                                    <DatePicker2/>
                                </div>
                                <div className="w-10/12 md:w-full left-1/2 bottom-8 -translate-x-1/2 md:translate-x-0 absolute md:static flex justify-end">
                                    <button onClick={closeDateSelect} className="bg-[#3B82F6] text-white py-2 px-6 rounded-lg cursor-pointer w-full md:w-auto">
                                        تایید
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    {!isPopup ?
                      <Link href={'/search'} className="cursor-pointer lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                          <IconSearch/>
                          جستجوی خودرو ها
                      </Link>
                      :
                      <button onClick={closeSearchBar} className="cursor-pointer lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                          تایید
                      </button>
                    }
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

export function getDiffInShamsiDays(date1, date2) {
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
    const isUnderMd = useMediaQuery("(max-width: 767.9px)");

    

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
      <Calendar
        range
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
        value={value}
        minDate={new Date()}
        onChange={changeHandler}
        numberOfMonths={isUnderMd ? 1 : 2}
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
  )
}


const generateTimeOptions = () => {
  const options = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hh = h.toString().padStart(2, '0');
      const mm = m.toString().padStart(2, '0');
      options.push(`${hh}:${mm}`);
    }
  }
  return options;
};

export function TimeSelectBox({selected,setSelected}) {
  const allOptions = useMemo(() => generateTimeOptions(), []);
  const [search, setSearch] = useState('');
//   const [selected, setSelected] = useState('');
  const [showList, setShowList] = useState(false);

  const filteredOptions = useMemo(() => {
    return allOptions.filter((time) =>
      time.includes(search)
    );
  }, [search]);

  return (
    <div className="relative z-50 md:w-64 w-full text-sm">
      <div
        onClick={() => setShowList((prev) => !prev)}
        className="border rounded-lg px-4 py-2 cursor-pointer bg-white shadow-sm"
      >
        {selected || 'انتخاب زمان'}
      </div>

      {showList && (
        <div className="absolute w-full mt-1 border rounded-lg bg-white shadow-lg max-h-64 overflow-y-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border-b focus:outline-none"
            placeholder="جستجو..."
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.map((time) => (
              <li
                key={time}
                onClick={() => {
                  setSelected(time);
                  setShowList(false);
                  setSearch('');
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {time}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="px-4 py-2 text-gray-400">یافت نشد</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}