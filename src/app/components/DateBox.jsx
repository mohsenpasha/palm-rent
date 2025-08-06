import { useDispatch, useSelector } from "react-redux";
import { IconCalender, IconEdit, IconVideoTime } from "./Icons";
import SearchBar, { DatePickerBox, getDiffInShamsiDays } from "./SearchBar";
import { useEffect, useState } from "react";
import { changeIsDateSelectOpen } from "@/redux/slices/globalSlice";
import useDisableScroll from "../hooks/useDisableScroll";
import { useTranslation } from "react-i18next";

export function DateBox({isSticky=false}){
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
            <div className={`${isSticky ? 'sticky mb-10' : 'my-4'} ${isHeaderClose ? 'top-8' : 'top-18'} transition-all z-30 w-full p-4 py-4 rounded-2xl bg-[#EBEBEB] flex md:flex-row flex-col text-sm items-center justify-center gap-2 md:gap-0`}>
                <div className="flex items-center w-full gap-2 lg:justify-start justify-center">
                    <span className="flex items-center gap-2">
                        <IconCalender className={'sm:flex hidden'}/>
                        {t('deliveryTD')}
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
                <div className="flex items-center w-full gap-2 lg:justify-start justify-center">
                    <span className="flex items-center gap-2">
                        <IconCalender className={'sm:flex hidden'}/>
                        {t('returnTD')}
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
                <div className="items-center w-full gap-2 xl:flex hidden">
                    <span className="flex items-center gap-2">
                        <IconVideoTime/>
                        {t('rentDurationB')}
                    </span>
                    <span>
                        {carDayCount} {t('rentDurationA')} {t('dubai')} 
                    </span>
                </div>
                <button onClick={openDateSelect} className="text-[#3B82F6] flex items-center text-nowrap gap-2 cursor-pointer">
                    <IconEdit/>
                    <span className="flex lg:flex md:hidden">
                        {t('changeSearch')}
                    </span>
                </button>
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