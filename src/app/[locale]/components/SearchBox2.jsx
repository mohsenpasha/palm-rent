'use client'
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon2Person, Icon7Plus, IconArrow, IconArrowHandle, IconBag2, IconBenefit, IconBrand, IconBusiness, IconClose, IconCoupe, IconCrook, IconDollar, IconEconemy, IconFilter, IconGas2, IconGearBox2, IconLuxury, IconNoDeposite, IconSearch2, IconSearch3, IconSetting, IconSort, IconSort1, IconSort2, IconSort3, IconSport, IconStandard, IconSuv, IconTick, IconTick2, IconTick3 } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterStatus } from "@/redux/slices/globalSlice";
import { useLocale, useTranslations } from "next-intl";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { useDebounce } from "@/app/hooks/useDebounce";
import { changeSearchTitle, changeSort, toggleSelectedCategory } from "@/redux/slices/searchSlice";
import { useQueryParams } from "@/app/hooks/useAddQueryParam";
import { getUrlParamsEasy } from "../search/page";
import { usePathname } from "next/navigation";
import { getLangUrl } from "@/app/lib/getLangUrl";
import useDisableScroll from "@/app/hooks/useDisableScroll";

export function SearchBox2(){
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    const carDates = useSelector((state)=> state.global.carDates)
    const searchOrder = useSelector((state)=> state.search.sort)
    const priceRange = useSelector((state)=> state.search.priceRange)
    const selectedPriceRange = useSelector((state)=> state.search.selectedPriceRange)
    const [filterPopup,setFilterPopup] = useState(false)
    const notToRemove = useRef([])
    const [isSortOpen,setIsSortOpen] = useState(false)
    const t = useTranslations();
    const searchTitle = useSelector((state)=> state.search.search)
    const dispatch = useDispatch()
    const [searchValue,setSearchValue] = useState('')
    const debouncedSearchTerm = useDebounce(searchValue, 500);
    const selectedCategories = useSelector((state)=> state.search.selectedCategories)
    const locale = useLocale();
    const pathname = usePathname()
    
    const isInSearchPage = pathname == getLangUrl(locale) + '/search'
    // const useEffectStatus = useRef(true)
    // const { addQueryParam, removeQueryParam } = useAddQueryParam();
    const { updateURL } = useQueryParams();
    useEffect(()=>{
        const params = getUrlParamsEasy()
        let dontRemove = []
        Object.entries(params).map(([key,value])=>{
            if(key == 'search_title'){
                setSearchValue(value)
            }
            dontRemove.push(key)
        })
        notToRemove.current = dontRemove
    },[])
    useLayoutEffect(() => {
        let newParams = {}
        let paramsToRemove = []
        if(!debouncedSearchTerm) {
            paramsToRemove.push('search_title')
        }
        else{
            newParams.search_title = debouncedSearchTerm
        }
        if(!searchOrder) {
            paramsToRemove.push('sort')
        }
        else{
            newParams.sort = searchOrder
        }
        if(!selectedPriceRange) {
            paramsToRemove.push('min_p')
            paramsToRemove.push('max_p')
        }
        else{
            newParams.min_p = Math.min(...selectedPriceRange).toString()
            newParams.max_p = Math.max(...selectedPriceRange).toString()
        }
        const filteredParamsToRemove = paramsToRemove.filter(
            item => !notToRemove.current.includes(item)
        );
        if(isInSearchPage){
            updateURL(newParams,filteredParamsToRemove)
        }
        notToRemove.current = []
        dispatch(changeSearchTitle(searchValue))
    }, [debouncedSearchTerm,searchOrder,selectedPriceRange]);
    useLayoutEffect(()=>{
        console.log(carDates)
        let newParams = {}
        newParams.from = carDates[0]
        newParams.to = carDates[1]
        updateURL(newParams,[])
    },[carDates])
    useEffect(()=>{
        dispatch(changeSearchTitle(debouncedSearchTerm))
    },[debouncedSearchTerm])
    function changeSortType(sortType){
        let sort = ''
        dispatch(changeSort(sortType))
        closeSortPopup()
    }
    function openSortPopup(){
        setIsSortOpen(true)
    }
    function closeSortPopup(){
        setIsSortOpen(false)
    }
    const sortRef = useClickOutside(()=>{
        closeSortPopup()
    })
    function openFilterPopup(){
        dispatch(changeFilterStatus(true))
    }
    function clearSort(event){
        event.stopPropagation()
        dispatch(changeSort(null))
    }
    const [sortList,setSortList] = useState([
        {
            id:14,
            icon:<IconNoDeposite/>,
            title:'noDeposite',
            selected:false
        },
        {
            id:3,
            icon:<IconEconemy/>,
            title:'economicCar',
            selected:false
        },
        {
            id:13,
            icon:<IconLuxury/>,
            title:'luxCar',
            selected:false
        },
        {
            id:15,
            icon:<Icon7Plus/>,
            title:'sevenplus',
            selected:false
        },
        {
            id:19,
            icon:<IconSport/>,
            title:'sport',
            selected:false
        },
        {
            id:18,
            icon:<IconBusiness/>,
            title:'business',
            selected:false
        },
        {
            id:21,
            icon:<IconCrook/>,
            title:'crook',
            selected:false
        },
        {
            id:17,
            icon:<IconStandard/>,
            title:'standard',
            selected:false
        },
        {
            id:9,
            icon:<IconSuv/>,
            title:'suv',
            selected:false
        },
        {
            id:20,
            icon:<IconCoupe/>,
            title:'coupe',
            selected:false
        },
    ])
    function sortChangeHandler(itemId){
        dispatch(toggleSelectedCategory(itemId))
        setSortList(sortList.map((item)=>{
            if(item.id != itemId) return item
            return {...item,selected:!item.selected}
        }))
    }
    return(
        <>
            <div className={`bg-white z-30 transition-all sm:rounded-lg rounded-none sm:shadow-[0_4px_20px_0px_rgba(0,0,0,.06)] max-sm:pt-0 p-4 sm:my-6 max-sm:border-t-0 text-nowrap border border-[#E0E0E0]`}>
                <div className="sm:rounded-xl rounded-lg flex items-center p-4 sm:py-2 py-1 relative mb-2 border border-[#B5B5B5CC]">
                    <span className="text-black size">
                        <IconSearch3 size="20"/>
                    </span>
                    <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} className="w-full px-2 outline-0 placeholder:text-[#2b2f33]" type="search" placeholder={t('carSearch')} />
                    {/* {priceRange && (priceRange[0] | priceRange[1]) &&
                        <button onClick={openFilterPopup} className="flex items-center text-nowrap left-6 gap-2 text-xs cursor-pointer">
                            <IconSetting/>
                        </button>
                    } */}
                    <div className="flex items-center gap-1 text-[#75736F]">
                        <button onClick={()=>setFilterPopup(true)} className="flex items-center gap-1 rtl:border-l-2 ltr:border-r-2 border-black px-2 cursor-pointer">
                            <span className="text-[#626262]">
                                <span className="sm:hidden">
                                    <IconFilter size="22"/>
                                </span>
                                <span className="max-sm:hidden">
                                    <IconFilter size="20"/>
                                </span>
                            </span>
                            <span className="max-sm:hidden text-sm">
                                {t('filters')}
                            </span>
                        </button>
                        <div className="flex relative">
                            <button onClick={openSortPopup} className="flex items-center gap-1 cursor-pointer">
                                <span className="text-[#626262]">
                                    <span className="max-sm:hidden">
                                        <IconSort size='22'/>
                                    </span>
                                    <span className="sm:hidden">
                                        <IconSort size='20'/>
                                    </span>
                                </span>
                                <span className="max-sm:hidden text-sm">
                                    {searchOrder ? t(searchOrder) : t('sort')}
                                </span>
                                {searchOrder && 
                                    <span onClick={(event)=>clearSort(event)} className={`size-4 transition-all flex items-center overflow-hidden`}>
                                        <IconClose/>
                                    </span>
                                }
                            </button>
                            {isSortOpen && 
                                <div ref={sortRef} className=" bottom-0 left-1/2 -translate-x-1/2 translate-y-full absolute pt-2">
                                    <div className="flex flex-col bg-white p-2 border border-[#cccccc] rounded-lg">
                                        {/* <div onClick={()=>changeSortType('sort1')} className="text-[#4b5259] p-2 px-3 text-nowrap border-b-[1px] lg:border-b-0 hover:bg-[#f8fafb] lg:rounded-lg cursor-pointer">{t('sort1')}</div> */}
                                        <div onClick={()=>changeSortType('price_min')} className="text-[#4b5259] p-2 px-3 text-nowrap border-b lg:border-b-0 hover:bg-[#f8fafb] lg:rounded-lg cursor-pointer">{t('price_min')}</div>
                                        <div onClick={()=>changeSortType('price_max')} className="text-[#4b5259] p-2 px-3 text-nowrap border-b lg:border-b-0 hover:bg-[#f8fafb] lg:rounded-lg cursor-pointer">{t('price_max')}</div>
                                        <div className="w-0 h-0 absolute top-0 left-1/2 border-l-8 border-r-8 border-t-0 border-b-8 border-l-transparent -translate-x-1/2 border-r-transparent border-b-[#EFEFEF]"></div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full block overflow-auto hide-scrollbar">
                    <div className="flex md:gap-2 gap-1">
                        {sortList.filter((item)=>item.selected == true).map((item,index)=>{
                            return(
                                <label key={index} className="flex gap-2 mb-2 select-none">
                                    <input onChange={()=>sortChangeHandler(item.id)} checked={true} className="peer hidden" value={item.id} type="checkbox" />
                                    <div className="p-2 h-[33px] rounded-lg transition-all text-xs peer-checked:bg-[#3B82F61A] border border-[#0077db] peer-checked:text-[#0077db] flex gap-2 cursor-pointer items-center">
                                        {t(item.title)}
                                        <span className="size-3 flex items-center text-[#0077db]">
                                            <IconClose/>
                                        </span>
                                    </div>
                                </label>
                                )
                            })}
                    </div>
                </div>
                <div className="block md:flex-nowrap flex-wrap items-center justify-between gap-2 lg:text-sm md:text-xs text-xs">
                    <div className="flex md:w-auto w-full items-start gap-2 lg:text-sm md:text-xs text-xs">
                        <div className="w-full block overflow-auto hide-scrollbar">
                            <div className="flex md:gap-2 gap-1">
                                {sortList.filter((item)=>item.selected == false).map((item,index)=>{
                                    return(
                                        <label key={index} className="flex gap-2 select-none">
                                            <input checked={false} onChange={()=>sortChangeHandler(item.id)} className="peer hidden" value={item.id} type="checkbox" />
                                            <div className="p-2 h-[33px] rounded-lg border text-xs border-[#0000001f] text-[#4b5259] transition-all peer-checked:bg-[#7CABF9] hover:bg-[#3B82F61A] hover:text-[#3B82F6] peer-checked:text-white flex gap-2 cursor-pointer items-center">
                                                {item.icon}
                                                {t(item.title)}
                                            </div>
                                        </label>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {filterPopup &&
                <SearchPopupFilter closePopup={()=>setFilterPopup(false)}/>
            }
        </>
    )
}

export function SearchPopupFilter({closePopup}){
    useDisableScroll()
    const t = useTranslations();
    const carBrands = ['تویوتا','مرسدس بنز','کیا','میتسوبیشی','فراری','میتسوبیشی','تویوتا','مرسدس بنز','کیا','میتسوبیشی','فراری','میتسوبیشی']
    const benefit = ['بدون ودیعه','تایید فوری','پیشنهاد ویژه','تحویل درب هتل','تحویل در فرودگاه']
    return(
        <div className="fixed w-screen h-screen top-0 right-0 z-500">
            <div className="animate-opacity">
                <div onClick={closePopup} className="absolute w-full h-full top-0 right-0 bg-black opacity-40"></div>
            </div>
            <div className="bg-white sm:w-xl w-[90%] pb-6 absolute sm:top-1/2 left-1/2 sm:-translate-1/2 -translate-x-1/2 sm:bottom-auto bottom-0 sm:rounded-2xl rounded-none max-sm:h-screen max-sm:w-screen sm:animate-fade-in2 animate-from-right">
                <div className="w-full border-b border-[#0000001F] p-4 flex justify-between items-center font-bold">
                    <div className="flex items-center sm:gap-2 gap-3">
                        <span onClick={closePopup} className="sm:flex hidden items-center justify-center cursor-pointer rounded-full size-6 border-2 border-black">
                            <span className="size-3 flex items-center">
                                <IconClose/>
                            </span>
                        </span>
                        <span onClick={closePopup} className="text-[#3D3D3D] sm:hidden flex size-5 cursor-pointer">
                            <IconArrowHandle className={'rotate-135'}/>
                        </span>
                        <span>
                            {t('filters')}
                            {/* {t(descriptionPopup.title) || t('description')} */}
                        </span>
                    </div>
                    <div className="text-[#3B82F6] cursor-pointer"> 
                        حذف همه فیلتر ها
                    </div>
                </div>
                <div className="sm:max-h-[80vh] h-full overflow-y-auto">
                    <PopupBox title={'بازه قیمتی'} icon={<IconDollar/>} showMore={false}>
                        <div className="flex items-center gap-2 py-2">
                            <CInput placeholder="حداقل">
                                <input type="text" className="w-full peer outline-0" placeholder="" />
                            </CInput>
                            <CInput placeholder="حداکثر">
                                <input type="text" className="w-full peer outline-0" placeholder="" />
                            </CInput>
                        </div>
                    </PopupBox>
                    <PopupBox title={'برند'} icon={<IconBrand/>}>
                    <div className="flex flex-col gap-1">
                        {carBrands.map((item,index)=>{
                            return(
                                <CCheckBox key={index} title={item}>
                                    <input type="checkbox" className="peer hidden" />
                                </CCheckBox>
                            )
                        })}
                    </div>
                    </PopupBox>
                    <PopupBox title={'گیربکس'} icon={<IconGearBox2/>} showMore={false}>
                        <div className="flex gap-2">
                            <CCheckBox2 title={'اتوماتیک'}>
                                <input type="checkbox" className="peer hidden" />
                            </CCheckBox2>
                            <CCheckBox2 title={'دستی'}>
                                <input type="checkbox" className="peer hidden" />
                            </CCheckBox2>
                        </div>
                    </PopupBox>
                    <PopupBox title={'نوع سوخت'} icon={<IconGas2/>} showMore={false}>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <CCheckBox2 title={'بنزینی'}>
                                    <input type="checkbox" className="peer hidden" />
                                </CCheckBox2>
                                <CCheckBox2 title={'گازوئیلی'}>
                                    <input type="checkbox" className="peer hidden" />
                                </CCheckBox2>
                            </div>
                            <div className="flex gap-2">
                                <CCheckBox2 title={'برقی'}>
                                    <input type="checkbox" className="peer hidden" />
                                </CCheckBox2>
                                <CCheckBox2 title={'هایبریدی'}>
                                    <input type="checkbox" className="peer hidden" />
                                </CCheckBox2>
                            </div>
                        </div>
                    </PopupBox>
                    <PopupBox title={'تعداد نفرات'} icon={<Icon2Person/>} showMore={false}>
                        <div className="flex flex-col gap-1">
                            {Array(8).fill(null).map((_,index)=>{
                                return(
                                    <CCheckBox key={index} title={index + 1 + ((index + 1) == 8 ? '+' : '')}>
                                        <input type="checkbox" className="peer hidden" />
                                    </CCheckBox>
                                )
                            })}
                        </div>
                    </PopupBox>
                    <PopupBox title={'ظرفیت چمدان'} icon={<IconBag2/>} showMore={false}>
                        <div className="flex flex-col gap-1">
                            {Array(5).fill(null).map((_,index)=>{
                                return(
                                    <CCheckBox key={index} title={index + 1 + ((index + 1) == 5 ? '+' : '')}>
                                        <input type="checkbox" className="peer hidden" />
                                    </CCheckBox>
                                )
                            })}
                        </div>
                    </PopupBox>
                    <PopupBox title={'امکانات و شرایط رزرو'} icon={<IconBenefit/>} showMore={false}>
                        <div className="flex flex-col gap-2">
                            {benefit.map((item,index)=>{
                                return(
                                    <CCheckBox key={index} title={item}>
                                        <input type="checkbox" className="peer hidden" />
                                    </CCheckBox>
                                )
                            })}
                        </div>
                    </PopupBox>

                    {/* {descriptionPopup.description} */}
                </div>
            </div>
        </div>
    )
}

function PopupBox({title,icon,children,showMore=true}){
    const [isActive,setIsActive] = useState(true)
    const [isShowingMore,setIsShowingMore] = useState(false)
    return(
        <div className="flex flex-col border-b border-[#E8E8E8] last:border-b-0 p-4 py-3">
            <div onClick={()=>setIsActive(!isActive)} className="flex justify-between w-full font-bold text-[#626262] cursor-pointer">
                <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-black">
                        {title}
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <span className={`${isActive ? 'rotate-180' : 'rotate-0'} transition-all`}>
                        <IconArrow/>
                    </span>
                </div>
            </div>
            <div className={`${isActive ? isShowingMore ? 'max-h-[1000px]  mt-4' : 'max-h-[200px] mt-4' : 'max-h-0 mt-0'} overflow-hidden transition-all relative`}>
                {children}
                {showMore && !isShowingMore &&
                    <>
                        <div className="absolute w-full h-14 bg-[linear-gradient(to_top,white,transparent)] bottom-4 right-0"></div>
                        <div onClick={()=>setIsShowingMore(true)} className="flex justify-center items-end w-full absolute bottom-0 right-0 bg-white cursor-pointer text-[#3B82F6]">
                            نمایش بیشتر
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default function CCheckBox({children,title}){
    return(
        <label className="flex cursor-pointer sm:text-base text-sm items-center gap-2 text-s dark:text-s_dark">
            {children}
            <div className="size-6 transition-all border-2 rounded-lg border-n8 dark:border-n8_dark flex items-center justify-center text-transparent border-[#D5D7DA] bg-transparent peer-checked:border-[#3B82F6] peer-checked:bg-[#3B82F6]">
                <span className="">
                    <IconTick3/>
                </span>
            </div>
            {title}
        </label>
    )
}
function CCheckBox2({title,children}){
    return(
        <label className="w-full">
            {children}
            <div className="flex justify-center items-center border-2 border-[#DEDEDE] peer-checked:border-[#3B82F6] text-[#323232] p-2 rounded-lg cursor-pointer transition-all">
                {title}
            </div>
        </label>
    )
}

function CInput({children,placeholder}){
    return(
        <label className="relative border border-[#DEDEDE] rounded-lg flex items-center py-3 px-2">
            <div className="flex-1">
                {children}
                <span className="absolute top-0 -translate-y-1/2 px-2 right-3 scale-50 bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent text-[#BABABA] transition-all">{placeholder}</span>
            </div>
            <span className="text-[#A1A1A1]">درهم</span>
        </label>
    )
}