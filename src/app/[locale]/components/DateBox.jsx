import { useDispatch, useSelector } from "react-redux";
import { IconCalender, IconClock, IconEdit, IconSearch3, IconVideoTime } from "./Icons";
import { DatePickerBox, getDiffInShamsiDays } from "./SearchBar";
import { useEffect, useState } from "react";
import { changeIsDateSelectOpen } from "@/redux/slices/globalSlice";
import useDisableScroll from "@/app/hooks/useDisableScroll";
import { useTranslations } from "next-intl";
import { dateDifference } from "@/app/lib/getDateDiffrence";

function formatJalaaliDate(dateString) {
    try{
        if(14 != dateString.slice(0,2)) return dateString
        const [year, month, day] = dateString.split('/').map(Number);
        const monthNames = [
            'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
            'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
        ];
        
        return `${day} ${monthNames[month - 1]} ${year}`;
    }
    catch(err){
        return null
    }
}

export function DateBox({isSticky=false,timerValue}){
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    const carDates = useSelector((state)=> state.global.carDates)
    const returnTime = useSelector((state)=> state.global.returnTime)
    const deliveryTime = useSelector((state)=> state.global.deliveryTime)
    const isDateSelectOpen = useSelector((state) => state.global.isDateSelectOpen)
    const [carDayCount,setCarDayCount] = useState()
    const t = useTranslations();
    const dispatch = useDispatch()
    useEffect(()=>{
        setCarDayCount(dateDifference(carDates[0],carDates[1]).days)
    },[carDates])
    function openDateSelect(){
        dispatch(changeIsDateSelectOpen(true))
    }
    return(
        <>
            <div className={`${isSticky ? 'sticky mb-10' : ''} ${isHeaderClose ? 'top-0' : 'top-16'} transition-all z-30 w-full p-4 py-4 bg-white text-xs items-center justify-center gap-2 md:gap-0`}>
                <div className="lg:w-[90vw] md:w-[90vw] max-w-[1200px] m-auto flex items-center">
                    <div className="w-full flex lg:flex-row flex-col items-center sm:gap-0 gap-2 md:justify-between justify-center text-nowrap">
                        <div className="flex xl:w-2/3 w-full max-[400px]:gap-2 gap-4 gap-y-1 text-[#1A1A1A] max-[380px]:flex-wrap">
                            <div className="flex items-center lg:w-full w-fit gap-2">
                                <span className="flex items-center gap-2">
                                    <span className="max-sm:hidden">
                                        <IconCalender/>
                                    </span>
                                    <span className="xl:block hidden">
                                        {t('deliveryTD')}
                                    </span>
                                    <span className="xl:hidden block">
                                        {t('from')}
                                    </span>
                                </span>
                                <span className="flex sm:gap-2 gap-1">
                                    <div>
                                        {formatJalaaliDate(carDates[0]) || carDates[0]}
                                    </div>
                                    {t('hour')}
                                    <div>
                                        {deliveryTime}
                                    </div>
                                    {/* 3 مرداد ساعت 15:30 */}
                                </span>
                            </div>
                            <div className="flex items-center lg:w-full w-fit gap-2">
                                <span className="flex items-center gap-2">
                                    <IconCalender className={'sm:flex hidden'}/>
                                    <span className="xl:block hidden">
                                        {t('returnTD')}
                                    </span>
                                    <span className="xl:hidden block">
                                        {t('to')}
                                    </span>
                                </span>
                                <span className="flex sm:gap-2 gap-1">
                                    <div>
                                        {formatJalaaliDate(carDates[1]) || carDates[1]}
                                    </div>
                                    {t('hour')}
                                    <div>
                                        {returnTime}
                                    </div>
                                    {/* 3 مرداد ساعت 15:30 */}
                                </span>
                            </div>
                        </div>

                        <div className="items-center xl:w-1/3 w-full gap-2 flex text-[#6c7680] sm:text-xs text-[10px]">
                            <span className="flex items-center gap-2">
                                <span className="max-sm:hidden">
                                    <IconVideoTime/>
                                </span>
                                {t('rentDurationB')}
                            </span>
                            <span>
                                {carDayCount} {t('rentDurationA')} {t('dubai')} 
                            </span>
                        </div>
                    </div>

                    <button onClick={openDateSelect} className=" sm:bg-transparent bg-[#3B82F6] size-9 rounded-full text-white flex items-center justify-center text-nowrap gap-2 cursor-pointer rtl:sm:ml-[100px] ltr:sm:mr-[100px] shrink-0">
                        <IconSearch3 size="20"/>
                        <span className="sm:flex hidden sm:text-[#3B82F6] text-white">
                            {t('changeSearch')}
                        </span>
                    </button>
                    <div className="text-red-600 items-center gap-1 lg:flex hidden rlt:ml-8 ltr:mr-8">
                        {timerValue}
                        <span className="size-6 flex items-center">
                            <IconClock/>
                        </span>
                    </div>
                    </div>
                </div>
            {isDateSelectOpen && 
                <DatePopup/>
            }
        </>

    )
}

export function DatePopup(){
    useDisableScroll()
    const dispatch = useDispatch()
    function closeDateSelect(){
        dispatch(changeIsDateSelectOpen(false))
    }
    return(
        <div className="fixed w-[100vw] h-[100vw] top-0 right-0 z-50">
            <div className="animate-opacity">
                <div onClick={closeDateSelect} className="absolute top-0 right-0 w-full h-full bg-black opacity-60"></div>
            </div>
            {/* <div className="absolute left-1/2 top-1/2 -translate-1/2 bg-white z-10"> */}
                <DatePickerBox isPopup={true}/>
            {/* </div> */}
        </div>
    )
}