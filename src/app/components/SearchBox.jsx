'use client'
import { useState } from "react";
import { IconCarExtra, IconClose, IconCoupeCar, IconCrookCar, IconDiamond2, IconHandCoin, IconRocket, IconSearch2, IconSetting, IconSort, IconSort1, IconSort2, IconSort3, IconStandard, IconSuitcase, IconSuv } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterStatus, changeSearchOrder, changeSearchStatus } from "@/redux/slices/globalSlice";
import { useClickOutside } from "../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

export function SearchBox(){
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    const searchOrder = useSelector((state)=> state.global.searchOrder)
    const [isSortOpen,setIsSortOpen] = useState(false)
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    function changeSortType(sortType){
        dispatch(changeSearchOrder(sortType))
        closeSortPopup()
    }
    function openSortPopup(){
        setIsSortOpen(true)
    }
    function closeSortPopup(){
        setIsSortOpen(false)
    }
    const sortRef = useClickOutside(()=>{
        console.log('clicked outside')   
        closeSortPopup()
    })
    // function openSearchPopup(){
    //     dispatch(changeSearchStatus(true))
    // }
    function openFilterPopup(){
        dispatch(changeFilterStatus(true))
    }
    function clearSort(event){
        event.stopPropagation()
        dispatch(changeSearchOrder(null))
    }
    const [sortList,setSortList] = useState([
        {
            id:1,
            icon:<span className="flex size-[18px]"><IconSort1/></span>,
            title:'noDeposite',
            selected:false
        },
        {
            id:2,
            icon:<IconSort2/>,
            title:'luxCar',
            selected:false
        },
        {
            id:3,
            icon:<IconSort3/>,
            title:'economicCar',
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
            <div className="bg-[#F4F4F4] rounded-xl flex items-center p-4 py-3 relative mb-2">
                <span>
                    <IconSearch2/>
                </span>
                <input className="w-full px-4 outline-0" type="search" placeholder={t('carSearch')} />
                <button onClick={openFilterPopup} className="flex items-center text-nowrap left-6 gap-2 text-sm cursor-pointer">
                    <IconSetting/>
                </button>
            </div>
            <div className="flex md:gap-2 gap-1 overflow-auto">
                {sortList.filter((item)=>item.selected == true).map((item,index)=>{
                        return(
                            <label key={index} className="flex gap-2 mb-2 select-none">
                                <input onChange={()=>sortChangeHandler(item.id)} checked={true} className="peer hidden" value={item.id} type="checkbox" />
                                <div className="p-2 py-1 rounded-lg bg-[#E3E3E3] transition-all peer-checked:bg-[#7CABF9] peer-checked:text-white flex gap-2 cursor-pointer items-center">
                                    {t(item.title)}
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
                    <div className="flex relative">
                        <span onClick={openSortPopup} className="flex items-center gap-1 p-2 py-1 rounded-lg bg-[#E3E3E3] cursor-pointer">
                            <IconSort/>
                            {t(searchOrder) || t('sort')}
                            {searchOrder && 
                                <span onClick={(event)=>clearSort(event)} className={`size-4 transition-all flex items-center overflow-hidden`}>
                                    <IconClose/>
                                </span>
                            }
                        </span>
                        {isSortOpen && 
                            <div ref={sortRef} className=" bottom-0 left-1/2 -translate-x-1/2 translate-y-full absolute pt-2">
                                <div className="flex flex-col bg-white p-2 border-[1px] border-[#cccccc] rounded-lg">
                                    <div onClick={()=>changeSortType('sortType1')} className="text-[#4b5259] p-2 px-3 text-nowrap border-b-[1px] lg:border-b-0 hover:bg-[#f8fafb] lg:rounded-lg cursor-pointer">{t('sort1')}</div>
                                    <div onClick={()=>changeSortType('sortType2')} className="text-[#4b5259] p-2 px-3 text-nowrap border-b-[1px] lg:border-b-0 hover:bg-[#f8fafb] lg:rounded-lg cursor-pointer">{t('sort2')}</div>
                                    <div onClick={()=>changeSortType('sortType3')} className="text-[#4b5259] p-2 px-3 text-nowrap border-b-[1px] lg:border-b-0 hover:bg-[#f8fafb] lg:rounded-lg cursor-pointer">{t('sort3')}</div>
                                    <div className="w-0 h-0 absolute top-0 left-1/2 border-l-8 border-r-8 border-t-0 border-b-8 border-l-transparent -translate-x-1/2 border-r-transparent border-b-[#EFEFEF]"></div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="flex md:gap-2 gap-1 overflow-auto">
                        {sortList.filter((item)=>item.selected == false).map((item,index)=>{
                            return(
                                <label key={index} className="flex gap-2 select-none">
                                    <input checked={false} onChange={()=>sortChangeHandler(item.id)} className="peer hidden" value={item.id} type="checkbox" />
                                    <div className="p-2 py-1 rounded-lg bg-[#E3E3E3] transition-all peer-checked:bg-[#7CABF9] hover:bg-[#7CABF9] hover:text-white peer-checked:text-white flex gap-2 cursor-pointer items-center">
                                        {t(item.title)}
                                        {item.icon}
                                    </div>
                                </label>
                            )
                        })}

                    </div>
                </div>
                {/* <div className="flex gap-2 md:w-auto w-full justify-between">
                    <button onClick={openSearchPopup} className="flex bg-[#3B82F6] py-2 px-4 rounded-lg text-white justify-center items-center text-nowrap left-6 gap-2 text-sm cursor-pointer">
                        <span className="">
                            جستجو
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    )
}