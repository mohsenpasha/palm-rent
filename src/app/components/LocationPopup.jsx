import { useEffect, useState } from "react"
import { IconClose, IconTick2 } from "./Icons"
import { useDispatch, useSelector } from "react-redux"
import { changeDeliveryLocation, changeIsLocationPopupOpen, changeReturnLocation } from "@/redux/slices/globalSlice"
import { useTranslation } from "react-i18next";

export default function LocationPopup({isReturn}){
    const { t, i18n } = useTranslation();
    const [isDesiredChecked,setIsDesiredChecked] = useState(false)
    const deliveryLocation = useSelector((state)=>state.global.deliveryLocation)
    const returnLocation = useSelector((state)=>state.global.returnLocation)
    const allLocations = useSelector((state)=>state.global.locations)
    const dispatch = useDispatch()
    function closePopup(){
        dispatch(changeIsLocationPopupOpen(false))
    }
    function inputChangeHandler(targetValue){
        if(targetValue == 'desired'){
            setIsDesiredChecked(true)
            if(isReturn){
                dispatch(changeReturnLocation({isDesired:true,location:''}))
            }
            else{
                dispatch(changeDeliveryLocation({isDesired:true,location:''}))
            }
        }
        else{
            setIsDesiredChecked(false)
            if(isReturn){
                dispatch(changeReturnLocation({isDesired:false,location:targetValue}))
            }
            else{
                dispatch(changeDeliveryLocation({isDesired:false,location:targetValue}))
            }
        }
    }
    function desiredInputChangeHandler(inputValue){
        if(isReturn){
            dispatch(changeReturnLocation({isDesired:true,location:inputValue}))
        }
        else{
            dispatch(changeDeliveryLocation({isDesired:true,location:inputValue}))
        }
    }
    useEffect(()=>{
        if(isReturn){
            if(returnLocation.isDesired){
                setIsDesiredChecked(true)
            }
        }
        else{
            if(deliveryLocation.isDesired){
                setIsDesiredChecked(true)
            }
        }
    },[])
    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div className="animate-opacity">
                <div onClick={closePopup} className="absolute w-full h-full top-0 right-0 bg-black opacity-40"></div>
            </div>
            <div className="absolute top-1/2 animate-fade-in2 left-1/2 -translate-1/2 bg-white z-10 rounded-lg md:min-w-80 min-w-[80%] md:max-w-max max-w-[95%]">
                <div className="w-full border-b-[1px] border-[#0000001F] p-2 flex justify-center items-center">
                    <span>
                        {isReturn ? t('chooseRetLoc') : t('chooseDelLoc')}
                    </span>
                    {/* <span onClick={closePopup} className="size-4 flex items-center cursor-pointer">
                        <IconClose/>
                    </span> */}
                </div>
                <div className="p-2 flex flex-col">
                    {allLocations.map((item,index)=>{
                        return(
                            <label key={index} className="flex gap-2 items-center cursor-pointer p-2">
                                <input checked={isReturn ? !returnLocation.isDesired && returnLocation.location == item.id : !deliveryLocation.isDesired && deliveryLocation.location == item.id} onChange={(event)=>inputChangeHandler(event.target.value)} type="radio" value={item.id} name="location" className="peer hidden" />
                                <div className="md:size-[28px] sm:size-[26px] size-[24px] text-[#3B82F6] rounded-sm overflow-hidden relative hidden peer-checked:flex">
                                    <div className="absolute z-1 w-full h-full border-[6px] border-[#3B82F6] top-0 right-0"></div>
                                    <IconTick2 className={'absolute z-10'}/>
                                </div>
                                <div className="md:size-[28px] sm:size-[26px] size-[24px] border-2 border-[#3B82F6] rounded-sm overflow-hidden relative peer-checked:hidden"
                                >
                                </div>
                                <div>{t(item.title)}</div>
                            </label>
                            )
                    })}
                    <label className="flex gap-2 items-center cursor-pointer p-2">
                        <input checked={isReturn ? returnLocation.isDesired : deliveryLocation.isDesired} onChange={(event)=>inputChangeHandler(event.target.value)} type="radio" name="location" value={'desired'} className="peer hidden" />
                        <div className="md:size-[28px] sm:size-[26px] size-[24px] text-[#3B82F6] rounded-sm overflow-hidden relative hidden peer-checked:flex">
                            <div className="absolute z-1 w-full h-full border-[6px] border-[#3B82F6] top-0 right-0"></div>
                            <IconTick2 className={'absolute z-10'}/>
                        </div>
                        <div className="md:size-[28px] sm:size-[26px] size-[24px] border-2 border-[#3B82F6] rounded-sm overflow-hidden relative peer-checked:hidden"
                        >
                        </div>
                        <div>{t('optionalLocation')}</div>
                    </label>
                    <div className={`${isDesiredChecked ? 'max-h-36 opacity-100 pt-0' : 'max-h-0 opacity-0 pt-4'} transition-all duration-300 overflow-hidden`}>
                        <div>{t('optionalTitle')}</div>
                        <div className="w-full border-[1px] border-[#0000001F] rounded-lg">
                            <input value={isDesiredChecked ? (isReturn ? returnLocation.location : deliveryLocation.location) || "" : ''} onChange={(event)=>desiredInputChangeHandler(event.target.value)} className="w-full p-2 outline-0" type="text" placeholder={t('location')} />
                        </div>
                    </div>
                    
                    <button onClick={closePopup} className="w-full cursor-pointer m-auto bg-[#3B82F6] rounded-lg text-[#FFFFFF] p-2 lg:text-lg sm:text-base text-xs my-2 mt-4">
                        {t('done')}
                    </button>
                </div>
            </div>
        </div>
    )
}