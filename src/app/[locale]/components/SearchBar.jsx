'use client'
import { useEffect, useMemo, useRef, useState } from "react";
import { IconCalender, IconClock, IconLocation, IconSearch } from "./Icons";
import { Calendar } from "react-multi-date-picker"

import DateObject from "react-date-object"

import persian from "react-date-object/calendars/persian"
import gregorian from "react-date-object/calendars/gregorian"
import persian_fa from "react-date-object/locales/persian_fa"
import gregorian_en from "react-date-object/locales/gregorian_en"
import { useDispatch, useSelector } from "react-redux";
import { changeCarDates, changeDeliveryTime, changeIsDateJalili, changeIsDateSelectOpen, changeIsSearchPopupOpen, changePCarDates, changeReturnTime, changeSelectedCity } from "@/redux/slices/globalSlice";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { getLangUrl } from "@/app/lib/getLangUrl";

export default function SearchBar({isPopup=false}){
    const params = useParams()
    const carDates = useSelector((state) => state.global.carDates)
    const selectedCity = useSelector((state) => state.global.selectedCity)
    const branches = useSelector((state) => state.global.branches)
    const isDateSelectOpen = useSelector((state) => state.global.isDateSelectOpen)
    const deliveryTime = useSelector((state) => state.global.deliveryTime)
    const returnTime = useSelector((state) => state.global.returnTime)
    const [cityToggle,setCityToggle] = useState(false)
    const locale = useLocale();
    const t = useTranslations();
    const pathname = usePathname()
    const isBranchPage = pathname.includes('cars-rent')
    useEffect(()=>{
      if(!isBranchPage) return
      if(!carDates || (carDates && !carDates[0] || !carDates[1])){
        const nowGregorian = new DateObject({ calendar: gregorian, locale: gregorian_en });
        const nextWeekGregorian = new DateObject(nowGregorian).add(7, "days");
        const nowPersian = new DateObject({ calendar: persian, locale: persian_fa });
        const nextWeekPersian = new DateObject(nowPersian).add(7, "days");
        dispatch(changeCarDates([convertToEnglishDigits(nowPersian.format("YYYY/MM/DD")),convertToEnglishDigits(nextWeekPersian.format("YYYY/MM/DD"))]))
        // dispatch(changeCarDates([convertToEnglishDigits(nowGregorian.format("YYYY/MM/DD")),convertToEnglishDigits(nextWeekGregorian.format("YYYY/MM/DD"))]))
      }

    },[])
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
        dispatch(changeIsDateSelectOpen(true))
    }
    return(
        <>
            <div className={`${isPopup ? 'fixed w-screen h-screen top-0 right-0 z-50' : 'relative md:z-40 bg-white py-2 md:py-6'} border-2 border-[#0000001f] rounded-2xl`}>
              {isPopup &&
                <div onClick={closeSearchBar} className="absolute top-0 right-0 w-full h-full bg-[#00000066]">

                </div>
              }
              {!isPopup &&
                <div className="md:text-lg sm:text-base text-center md:text-right ltr:md:text-left text-sm font-bold border-b border-[#00000066] px-2 pb-4 md:px-6 mb-4">
                    {params.cityName ?
                        <h2>
                          {t('searchBarB')} {t(params.cityName)} {t('searchBarA')}
                        </h2>
                      :
                        <h2>
                          {t('searchBarTitle')}
                        </h2>
                    }
                    
                </div>
                }
                <div className={`flex lg:gap-2 gap-4 items-end lg:flex-nowrap flex-wrap px-2 md:px-6 ${isPopup ? `bg-white rounded-lg justify-center ${isDateSelectOpen ? 'md:w-10/12 w-full md:p-8 md:my-4' : 'p-8 w-10/12 my-4'} absolute  left-1/2 -translate-x-1/2` : ''}`}>
                    <div ref={citySelectRef} className="relative w-full lg:w-3/12 grow-0 flex flex-col gap-1">
                        <span className="text-xs">{t('city')}</span>
                        <div onClick={()=>params.cityName ? ()=>{} :setCityToggle(!cityToggle)} className={`${params.cityName && 'bg-gray-100'} border border-[#B5B5B5B2] flex items-center w-full rounded-xs md:rounded-lg p-3 px-2 text-[#4C4C4C] cursor-pointer gap-1`}>
                            <span className="size-6">
                                <IconLocation/>
                            </span>
                            {params.cityName ?
                                t(params.cityName)
                            :
                                selectedCity ? selectedCity.title : t('choose')
                            }
                        </div>
                        {cityToggle &&
                            <CityDropDown>
                              {branches.map((item,index)=>{
                                return(
                                  <SingleCityItem closeDropDown={()=>setCityToggle(false)} key={index} value={item}/>
                                )
                              })}
                            </CityDropDown>
                        }
                    </div>
                    <div className={`relative lg:w-6/12 w-full sm:flex-nowrap flex-wrap sm:gap-4 flex-col sm:flex-row flex gap-2`}>
                        <div onClick={openDateSelect} className="relative md:w-[calc(50%-8px)] w-full grow-0 md:shrink-0 flex flex-col gap-1">
                            <span className="text-xs">{t('deliveryTD')}</span>
                            <div className="border border-[#B5B5B5B2] text-xs md:text-sm flex items-center w-full rounded-xs md:rounded-lg text-[#4C4C4C] cursor-pointer justify-between">
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] gap-1 items-center">
                                    <IconClock/>
                                    <span>{carDates[0] || t('date')}</span>
                                </div>
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1 rtl:border-r ltr:border-l border-[#B5B5B5B2]">
                                    <IconCalender/> 
                                    <span>{deliveryTime || t('time')}</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={openDateSelect} className="relative md:w-[calc(50%-8px)] w-full grow-0 md:shrink-0 flex flex-col gap-1">
                            <span className="text-xs">{t('returnTD')}</span>
                            <div className="border border-[#B5B5B5B2] text-xs md:text-sm flex items-center w-full rounded-xs md:rounded-lg text-[#4C4C4C] cursor-pointer justify-between">
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1">
                                    <IconClock/>
                                    <span>{carDates[1] || t('date')}</span>
                                </div>
                                <div className="flex flex-1 p-3 px-2 text-[#4C4C4C] items-center gap-1 rtl:border-r ltr:border-l border-[#B5B5B5B2]">
                                    <IconCalender/> 
                                    <span>{returnTime || t('time')}</span>
                                </div>
                            </div>
                        </div>
                        {isDateSelectOpen && 
                            <DatePickerBox ref={ref}/>
                        }
                    </div>
                    {!isPopup ?
                    isBranchPage ? 
                        <Link href={'#search-section'} className="cursor-pointer lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                            <IconSearch/>
                            {t('searchCar')}
                        </Link>
                    :
                      (selectedCity && (carDates && (carDates[0] && carDates[1]))) ?
                        <Link href={`${locale}/search?branch_id=${selectedCity ? selectedCity.id : 1}&from=${carDates[0] + ' ' + deliveryTime}&to=${carDates[1] + ' ' + returnTime}`} className="cursor-pointer lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                            <IconSearch/>
                            {t('searchCar')}
                        </Link>
                        :
                        <button disabled onClick={closeSearchBar} className="lg:flex-1 -z-10 w-full bg-[#3B82F6] text-white h-[52px] rounded-xs md:rounded-lg flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                            {t('searchCar')}
                        </button>
                      :
                      <button onClick={closeSearchBar} className="cursor-pointer lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                          {t('done')}
                      </button>
                    }
                </div>
            </div>
        </>
    )
}





export function DatePickerBox({ref,isPopup=false}){
  const t = useTranslations();
  const isDateJalili = useSelector((state) => state.global.isDateJalili)
  const deliveryTime = useSelector((state) => state.global.deliveryTime)
  const returnTime = useSelector((state) => state.global.returnTime)
  const pCarDates = useSelector((state) => state.global.pCarDates)
  const locale = useLocale()
  const pathname = usePathname()
  const isInHomePage = pathname == (getLangUrl(locale).length == 0 ? '/' : getLangUrl(locale))
  const dispatch = useDispatch()
  function changeDeliveryTimeHandler(newTime){
        dispatch(changeDeliveryTime(newTime))
    }
    function changeReturnTimeHandler(newTime){
        dispatch(changeReturnTime(newTime))
    }
    function toggleIsJalili(){
      dispatch(changeCarDates([]))
      dispatch(changeIsDateJalili(!isDateJalili))
    }
    function closeDateSelect(){
        changeCarDatesValue()
        setTimeout(()=>{
          dispatch(changeIsDateSelectOpen(false))
        },100)
    }
    function changeCarDatesValue(){
      if(!pCarDates || pCarDates.length != 2) return
      dispatch(changeCarDates(pCarDates))
    }
    useEffect(()=>{
      if(!isInHomePage) return
      changeCarDatesValue()
    },[pCarDates])
  return(
    <div ref={ref} className={`bg-white w-screen h-screen md:w-auto ${!isPopup ? 'animate-opacity2 md:absolute fixed md:z-auto z-50 md:translate-y-full md:left-1/2 md:-translate-x-1/2 md:top-auto md:bottom-0 md:h-auto xl:min-w-[642px] bottom-[unset] md:right-auto top-0 right-0' : 'md:h-fit fixed top-1/2 left-1/2 -translate-1/2 animate-fade-in2'} border border-[#0000001f] rounded-lg`}>
      <div className="p-2 px-4 flex justify-end border-b border-[#0000001f] text-[#3b82f6] text-xs">
        {/* <button onClick={goToToday} className="cursor-pointer bg-transparent border-transparent p-1 rounded-sm transition-all hover:bg-[#F2F9FF] hover:border-[#C9E3F8] border">
          <span>برو امروز</span>
        </button> */}
        <button onClick={toggleIsJalili} className="flex items-center gap-0.5 cursor-pointer bg-transparent border-transparent p-1 rounded-sm transition-all hover:bg-[#F2F9FF] hover:border-[#C9E3F8] border">
          <span className="size-4 flex items-center">
            <IconCalender/>
          </span>
          <span>{isDateJalili ? t('gregorianDate') : t('jaliliDate')}</span>
        </button>
      </div>
      <div className="relative z-20 flex w-full justify-center gap-8 border-b border-[#0000001f] p-4 px-2">
          <div className="w-full md:w-auto">
              <span>{t('deliveryT')}</span>
              <TimeSelectBox selected={deliveryTime} setSelected={changeDeliveryTimeHandler}/>
          </div>
          <div className="w-full md:w-auto">
              <span>{t('returnT')}</span>
              <TimeSelectBox selected={returnTime} setSelected={changeReturnTimeHandler}/>
          </div>
      </div>
      <div dir={isDateJalili ? "rtl" : "ltr"} className="date-picker-holder flex relative z-10 m-auto sm:w-8/12 w-11/12 justify-center md:my-auto p-4 my-6">
          <DatePicker2/>
      </div>
      <div className="w-10/12 md:w-full left-1/2 bottom-8 -translate-x-1/2 justify-between md:translate-x-0 absolute md:static flex border-t items-center border-[#0000001f] px-4 py-2">
        <div className="md:flex hidden text-xs">
          <div>{t('delivery')} <span className="font-bold text-xs">{pCarDates[0] || t('choose')}</span> -</div>
          <div>{t('return')} <span className="font-bold text-xs">{pCarDates[1]}</span></div>
        </div>
        <button disabled={!pCarDates || (pCarDates && (!pCarDates[0] || !pCarDates[1]))} onClick={closeDateSelect} className="bg-[#3B82F6] text-white py-2 px-6 rounded-lg cursor-pointer w-full md:w-auto transition-all disabled:opacity-50">
          {t('done')}
        </button>
      </div>
  </div>
  )
}


export function CityDropDown({children}){
    return(
        <div className="absolute z-10 animate-fade-in overflow-hidden -bottom-1 w-full translate-y-full bg-white flex flex-col min-w-32 rounded-lg border border-[#cccccc] shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]">
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
  const t = useTranslations();
    return(
        <div onClick={changeCity} className="text-[#4b5259] text-nowrap px-3 transition-all hover:bg-[#f2f9ff] last-of-type:border-0 flex items-center cursor-pointer">
            <div className="flex border-b border-[#0000001f] w-full gap-1 py-4">
                <span className="size-6">
                    <IconLocation/>
                </span>
                {value.title}
            </div>
        </div>
    )
}


export function convertToEnglishDigits(str) {
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

export function DatePicker2({}) {
    const t = useTranslations();
    const carDates = useSelector((state) => state.global.carDates)
    const pCarDates = useSelector((state) => state.global.pCarDates)
    const isDateJalili = useSelector((state) => state.global.isDateJalili)
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const [hovered, setHovered] = useState(null)
    const [isValueSync,setIsValueSync] = useState(false)
    const [hoverText,setHoverText] = useState(t('goneDate'))
    const isUnderMd = useMediaQuery("(max-width: 767.9px)");
    const [currentDate, setCurrentDate] = useState(new DateObject());
    function hoverHandler(date){
        setHovered(date)
    }
    useEffect(()=>{
      setValue([])
    },[isDateJalili])
    function changeHandler(data){

        if(data.length == 2){
            const date1 = convertToEnglishDigits(data[0]?.format("YYYY/MM/DD"));
            const date2 = convertToEnglishDigits(data[1]?.format("YYYY/MM/DD"));
            
            if(date1 === date2) {
                // اگر دو تاریخ یکسان بودند، فقط تاریخ اول را نگه دار
                setValue([data[0]]);
                return;
            }
            
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
          dispatch(changePCarDates([]))
        }
        else{
          dispatch(changePCarDates(
            value.map((item)=>{
                return convertToEnglishDigits(item.format())
            })
          ))
        }
    },[value])
    useEffect(()=>{
        // if(!carDates || (carDates && !carDates[0] || !carDates[1])) return
        dispatch(changeCarDates(carDates))
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
            setHoverText(t('goneDate'))
        }
        else{
            if(value.length == 1){
                setHoverText(t('returnDate'))
            }
            else{
                setHoverText(t('goneDate'))
            }
        }
    },[hovered])
  return (
    <>
      <Calendar
        range
        weekDays={isDateJalili ? ["ش", "ی", "د", "س", "چ", "پ", "ج"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
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
    <div ref={timeSelectRef} className="relative z-50 md:w-52 w-full text-xs">
      <div
        onClick={() => setShowList((prev) => !prev)}
        className="border rounded-lg px-4 py-2 cursor-pointer bg-white shadow-sm"
      >
        {selected || t('chooseTime')}
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