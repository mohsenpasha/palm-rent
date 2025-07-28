'use client'
import { useEffect, useMemo, useRef, useState } from "react";
import { IconCalender, IconClock, IconLocation, IconSearch } from "./Icons";
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
import { Calendar } from "react-multi-date-picker"

// import DateObject from "react-multi-date-picker/classes/date_object"
import DateObject from "react-date-object"

import persian from "react-date-object/calendars/persian"
import gregorian from "react-date-object/calendars/gregorian"
import persian_fa from "react-date-object/locales/persian_fa"
import gregorian_en from "react-date-object/locales/gregorian_en"

import { useDispatch, useSelector } from "react-redux";
import { changeCarDates, changeDeliveryTime, changeIsDateJalili, changeIsDateSelectOpen, changeIsSearchPopupOpen, changeReturnTime, changeSelectedCity } from "@/redux/slices/globalSlice";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useClickOutside } from "../hooks/useClickOutside";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SearchBar({isPopup=false}){
    const carDates = useSelector((state) => state.global.carDates)
    const isDateJalili = useSelector((state) => state.global.isDateJalili)
    const selectedCity = useSelector((state) => state.global.selectedCity)
    const cities = useSelector((state) => state.global.cities)
    const isDateSelectOpen = useSelector((state) => state.global.isDateSelectOpen)
    const deliveryTime = useSelector((state) => state.global.deliveryTime)
    const returnTime = useSelector((state) => state.global.returnTime)
    const [cityToggle,setCityToggle] = useState(false)
    const [dataToggle,setDateToggle] = useState(false)
    const datePickerRef = useRef()
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    function closeSearchBar(){
      dispatch(changeIsSearchPopupOpen(false))
    }
    const ref = useClickOutside(() => {
        closeDateSelect()
    });
    const citySelectRef = useClickOutside(() => {
        setCityToggle(false)
    });
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
    function toggleIsJalili(){
      dispatch(changeCarDates([]))
      console.log(carDates)
      dispatch(changeIsDateJalili(!isDateJalili))
    }
    return(
        <>
            <div className={`${isPopup ? 'fixed w-[100vw] h-[100vh] top-0 right-0 z-50' : 'relative md:z-10 bg-white py-2 md:py-6'} border-2 border-[#0000001f] rounded-2xl`}>
              {isPopup &&
                <div onClick={closeSearchBar} className="absolute top-0 right-0 w-full h-full bg-[#00000066]">

                </div>
              }
              {!isPopup &&
                <div className="md:text-xl sm:text-lg text-center md:text-right text-md font-bold border-b-[1px] border-[#00000066] px-2 pb-4 md:px-6 mb-4">
                    اجاره آنلاین خودرو در همه شهر ها با بهترین قیمت
                </div>
                }
                <div className={`flex lg:gap-2 gap-4 items-end lg:flex-nowrap flex-wrap px-2 md:px-6 ${isPopup ? `bg-white rounded-lg justify-center ${isDateSelectOpen ? 'md:w-10/12 w-full md:p-8 md:my-4' : 'p-8 w-10/12 my-4'} absolute  left-1/2 -translate-x-1/2` : ''}`}>
                    <div ref={citySelectRef} className="relative w-full lg:w-3/12 grow-0 flex flex-col gap-1">
                        <span className="text-sm">مقصد</span>
                        <div onClick={()=>setCityToggle(!cityToggle)} className="border-[1px] border-[#B5B5B5B2] flex items-center w-full rounded-xs md:rounded-lg p-3 px-2 text-[#4C4C4C] cursor-pointer gap-1">
                            <span className="size-6">
                                <IconLocation/>
                            </span>
                            {t(selectedCity) || 'انتخاب کنید'}
                        </div>
                        {cityToggle &&
                            <CityDropDown>
                              {cities.map((item,index)=>{
                                return(
                                  <SingleCityItem closeDropDown={()=>setCityToggle(false)} key={index} value={item}/>
                                )
                              })}
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
                            <div ref={ref} className="bg-white md:absolute fixed w-[100vw] h-[100vh] md:w-auto md:h-auto top-0 right-0 md:top-auto md:right-auto md:z-auto z-50 md:bottom-0 bottom-[unset] md:translate-y-full md:left-1/2 md:-translate-x-1/2 border-[1px] border-[#0000001f] rounded-lg lg:max-w-[524px]">
                                <div className="p-2 px-4 flex justify-end border-b-[1px] border-[#0000001f] text-[#3b82f6] text-xs">
                                  {/* <button onClick={goToToday} className="cursor-pointer bg-transparent border-transparent p-1 rounded-sm transition-all hover:bg-[#F2F9FF] hover:border-[#C9E3F8] border-[1px]">
                                    <span>برو امروز</span>
                                  </button> */}
                                  <button onClick={toggleIsJalili} className="flex items-center gap-0.5 cursor-pointer bg-transparent border-transparent p-1 rounded-sm transition-all hover:bg-[#F2F9FF] hover:border-[#C9E3F8] border-[1px]">
                                    <span className="size-4 flex items-center">
                                      <IconCalender/>
                                    </span>
                                    <span>{isDateJalili ? 'تقویم میلادی' : 'تقویم شمسی'}</span>
                                  </button>
                                </div>
                                <div className="relative z-20 flex w-full justify-center gap-8 border-b-[1px] border-[#0000001f] p-4 px-2">
                                    <div className="w-full md:w-auto">
                                        <span>زمان تحویل</span>
                                        <TimeSelectBox selected={deliveryTime} setSelected={changeDeliveryTimeHandler}/>
                                    </div>
                                    <div className="w-full md:w-auto">
                                        <span>زمان عودت</span>
                                        <TimeSelectBox selected={returnTime} setSelected={changeReturnTimeHandler}/>
                                    </div>
                                </div>
                                <div dir={isDateJalili ? "rtl" : "ltr"} className="date-picker-holder flex relative z-10 md:w-full m-auto sm:w-10/12 w-full justify-center md:my-auto p-4 my-6">
                                    <DatePicker2 datePickerRef={datePickerRef}/>
                                </div>
                                <div className="w-10/12 md:w-full left-1/2 bottom-8 -translate-x-1/2 justify-between md:translate-x-0 absolute md:static flex border-t-[1px] items-center border-[#0000001f] px-4 py-2">
                                  <div className="md:flex hidden text-xs">
                                    <div>تحویل <span className="font-bold text-sm">{carDates[0] || 'انتخاب کنید'}</span> -</div>
                                    <div>عودت <span className="font-bold text-sm">{carDates[1]}</span></div>
                                  </div>
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
        </>
    )
}

export function CityDropDown({children}){
    return(
        <div className="absolute z-10 animate-fade-in overflow-hidden -bottom-1 w-full translate-y-full bg-white flex flex-col min-w-32 rounded-lg border-[1px] border-[#cccccc] shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]">
            <div className="max-h-80 overflow-auto">
                {children}
            </div>
        </div>
    )
}


export function SingleCityItem({value,closeDropDown}){
    const dispatch = useDispatch()
    function changeCity(){
      dispatch(changeSelectedCity(value))
      closeDropDown()
    }
    const { t, i18n } = useTranslation();
    return(
        <div onClick={changeCity} className="text-[#4b5259] text-nowrap px-3 transition-all hover:bg-[#f2f9ff] last-of-type:border-0 flex items-center cursor-pointer">
            <div className="flex border-b-[1px] border-[#0000001f] w-full gap-1 py-4">
                <span className="size-6">
                    <IconLocation/>
                </span>
                {t(value)}
            </div>
        </div>
    )
}


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





export function DatePicker2({datePickerRef}) {
    const carDates = useSelector((state) => state.global.carDates)
    const isDateJalili = useSelector((state) => state.global.isDateJalili)
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const [hovered, setHovered] = useState(null)
    const [isValueSync,setIsValueSync] = useState(false)
    const [hoverText,setHoverText] = useState('تاریخ رفت')
    const isUnderMd = useMediaQuery("(max-width: 767.9px)");
    const [currentDate, setCurrentDate] = useState(new DateObject());
    function hoverHandler(date){
        setHovered(date)
    }
    // const goToToday = () => {
    //   console.log('shit')
    //   setCurrentDate(new DateObject());
    // };
    useEffect(()=>{
      setValue([])
    },[isDateJalili])
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
            dispatch(changeCarDates(value.map((item,index)=>{
                console.log(item)
                return convertToEnglishDigits(item.format())
            })))
        }
    },[value])
    useEffect(()=>{
      console.log(carDates)
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
    <>
      <Calendar
        range
        weekDays={isDateJalili ? ["ش", "ی", "د", "س", "چ", "پ", "ج"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        ref={datePickerRef}
        calendar={isDateJalili ? persian : gregorian}
        locale={isDateJalili ? persian_fa : gregorian_en}
        format={"YYYY/MM/DD"}
        value={value}
        minDate={new Date()}
        onChange={changeHandler}
        numberOfMonths={isUnderMd ? 1 : 2}
        currentDate={currentDate}
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
                    {/* {`تاریخ برگشت: ${value?.[1]?.format?.() || "---"}`} */}
                  </div>
                )}
                <span>{date.day}</span>
              </div>
            ),
          }
        }}
      />
    </>

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
  const timeSelectRef = useClickOutside(()=>{
    setShowList(false)
  })
  const filteredOptions = useMemo(() => {
    return allOptions.filter((time) =>
      time.includes(search)
    );
  }, [search]);

  return (
    <div ref={timeSelectRef} className="relative z-50 md:w-52 w-full text-sm">
      <div
        onClick={() => setShowList((prev) => !prev)}
        className="border rounded-lg px-4 py-2 cursor-pointer bg-white shadow-sm"
      >
        {selected || 'انتخاب زمان'}
      </div>

      {showList && (
        <div className="absolute w-full mt-1 border rounded-lg bg-white shadow-lg max-h-[380px] overflow-y-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border-b focus:outline-none"
            placeholder="جستجو..."
          />
          <ul className="max-h-[332px] overflow-y-auto">
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