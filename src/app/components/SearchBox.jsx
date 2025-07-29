'use client'
import { useState } from "react";
import { IconCarExtra, IconClose, IconCoupeCar, IconCrookCar, IconDiamond2, IconHandCoin, IconRocket, IconSearch2, IconSetting, IconSort, IconSort1, IconSort2, IconSort3, IconStandard, IconSuitcase, IconSuv } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterStatus, changeSearchStatus } from "@/redux/slices/globalSlice";

export function SearchBox(){
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    const dispatch = useDispatch()
    function openSearchPopup(){
        dispatch(changeSearchStatus(true))
    }
    function openFilterPopup(){
        dispatch(changeFilterStatus(true))
    }
    const [sortList,setSortList] = useState([
        {
            id:1,
            icon:<span className="flex size-[18px]"><IconSort1/></span>,
            title:'بدون دیپوزیت',
            selected:false
        },
        {
            id:2,
            icon:<IconSort2/>,
            title:'خودرو لوکس',
            selected:false
        },
        {
            id:3,
            icon:<IconSort3/>,
            title:'خودرو اقتصادی',
            selected:false
        }
    ])
    function sortChangeHandler(itemId){
        setSortList(sortList.map((item)=>{
            if(item.id != itemId) return item
            return {...item,selected:!item.selected}
        }))
    }
    return(
        <div className={`bg-white sticky ${isHeaderClose ? 'top-[10px]' : 'top-18'} z-30 transition-all rounded-lg shadow-[0_4px_20px_0px_rgba(0,0,0,.06)] p-4 my-6 text-nowrap`}>
            <div className="flex md:gap-2 gap-1 overflow-auto">
                {sortList.filter((item)=>item.selected == true).map((item,index)=>{
                        return(
                            <label key={index} className="flex gap-2 mb-2 select-none">
                                <input onChange={()=>sortChangeHandler(item.id)} checked={true} className="peer hidden" value={item.id} type="checkbox" />
                                <div className="p-2 py-1 rounded-lg bg-[#E3E3E3] transition-all peer-checked:bg-[#7CABF9] peer-checked:text-white flex gap-2 cursor-pointer items-center">
                                    {item.title}
                                    <span className="size-4 flex items-center">
                                        <IconClose/>
                                    </span>
                                </div>
                            </label>
                        )
                    })}
            </div>
            <div className="flex md:flex-nowrap flex-wrap items-center justify-between gap-2 lg:text-base md:text-sm text-xs">
                <div className="flex md:w-auto w-full items-center gap-2 lg:text-base md:text-sm text-xs">
                    <span className="flex">
                        <IconSort/>
                        مرتب سازی :
                    </span>
                    <div className="flex md:gap-2 gap-1 overflow-auto">
                        {sortList.filter((item)=>item.selected == false).map((item,index)=>{
                            return(
                                <label key={index} className="flex gap-2 select-none">
                                    <input checked={false} onChange={()=>sortChangeHandler(item.id)} className="peer hidden" value={item.id} type="checkbox" />
                                    <div className="p-2 py-1 rounded-lg bg-[#E3E3E3] transition-all peer-checked:bg-[#7CABF9] hover:bg-[#7CABF9] hover:text-white peer-checked:text-white flex gap-2 cursor-pointer items-center">
                                        {item.title}
                                        {item.icon}
                                    </div>
                                </label>
                            )
                        })}

                    </div>
                </div>
                <div className="flex gap-2 md:w-auto w-full justify-between">
                    <button onClick={openFilterPopup} className="flex items-center text-nowrap left-6 gap-2 text-sm cursor-pointer">
                        <IconSetting/>
                        <span className="">
                            فیلتر ها
                        </span>
                    </button>
                    <button onClick={openSearchPopup} className="flex bg-[#3B82F6] py-2 px-4 rounded-lg text-white justify-center items-center text-nowrap left-6 gap-2 text-sm cursor-pointer">
                        <span className="">
                            جستجو
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}