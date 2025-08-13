import { useDispatch, useSelector } from "react-redux";
import { IconCalender, IconClock, IconEdit, IconVideoTime } from "./Icons";
import SearchBar, { DatePickerBox, getDiffInShamsiDays } from "./SearchBar";
import { useEffect, useState } from "react";
import { changeIsDateSelectOpen } from "@/redux/slices/globalSlice";
import useDisableScroll from "../hooks/useDisableScroll";
import { useTranslation } from "react-i18next";

export function DateBox({isSticky=false,timerValue}){
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    const carDates = useSelector((state)=> state.global.carDates)
    const returnTime = useSelector((state)=> state.global.returnTime)
    const deliveryTime = useSelector((state)=> state.global.deliveryTime)
    const isDateSelectOpen = useSelector((state) => state.global.isDateSelectOpen)
    const [carDayCount,setCarDayCount] = useState()
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    useEffect(()=>{
        setCarDayCount(getDiffInShamsiDays(carDates[0],carDates[1]))
    },[carDates])
    function openDateSelect(){
        dispatch(changeIsDateSelectOpen(true))
    }
    return(
        <>
            <div className={`${isSticky ? 'sticky mb-10' : ''} ${isHeaderClose ? 'top-0' : 'top-16'} transition-all z-30 w-full p-4 py-4 bg-white text-xs items-center justify-center gap-2 md:gap-0`}>
                <div className="lg:w-[90vw] md:w-[90vw] max-w-[1200px] m-auto flex items-center">
                    <div className="w-full flex md:flex-row flex-col items-center sm:gap-0 gap-2 md:justify-between justify-center">
                        <div className="flex xl:w-2/3 w-full gap-4">
                            <div className="flex items-center lg:w-full w-fit gap-2">
                                <span className="flex items-center gap-2">
                                    <IconCalender/>
                                    <span className="xl:block hidden">
                                        {t('deliveryTD')}
                                    </span>
                                    <span className="xl:hidden block">
                                        {t('from')}
                                    </span>
                                </span>
                                <span className="flex gap-2">
                                    <div>
                                        {carDates[0]}
                                    </div>
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
                                <span className="flex gap-2">
                                    <div>
                                        {carDates[1]}
                                    </div>
                                    <div>
                                        {returnTime}
                                    </div>
                                    {/* 3 مرداد ساعت 15:30 */}
                                </span>
                            </div>
                        </div>

                        <div className="items-center xl:w-1/3 w-full gap-2 flex">
                            <span className="flex items-center gap-2">
                                <IconVideoTime/>
                                {t('rentDurationB')}
                            </span>
                            <span>
                                {carDayCount} {t('rentDurationA')} {t('dubai')} 
                            </span>
                        </div>
                    </div>

                    <button onClick={openDateSelect} className="sm:text-[#3B82F6] sm:bg-transparent bg-[#3B82F6] p-1 rounded-lg text-white flex items-center text-nowrap gap-2 cursor-pointer size-8">
                        <IconEdit/>
                        <span className="sm:flex hidden">
                            {t('changeSearch')}
                        </span>
                    </button>
                    <div className="text-red-600 items-center gap-1 lg:flex hidden rtl:mr-8 ltr:ml-8">
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