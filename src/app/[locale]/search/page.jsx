'use client'
import { useDispatch, useSelector } from "react-redux";
import { DateBox } from "../components/DateBox";
import Header from "../components/Header";
import PopupReels from "../components/PopupReels";
import RoadMap from "../components/RoadMap";
import { SearchBox } from "../components/SearchBox";
import SingleCar from "../components/SingleCar";
import InformationStep from "../components/InformationStep";
import SkeletonSingleCar from "../components/SkeletonSingleCar";
import SearchPopup from "../components/SearchPopup";
import SearchFilterPopup from "../components/SearchFilterPopup";
import DescriptionPopup from "../components/DescriptionPopup";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { postData } from "@/app/lib/PostData";
import { notFound } from "next/navigation";
import { addCarList, clearCarList } from "@/redux/slices/carListSlice";
import { changeCarDates } from "@/redux/slices/globalSlice";
import { changeBranchId, changePriceRange, changeSearchCurrency, changeSearchTitle, changeSelectedCategories, changeSelectedPriceRange, changeSort, changeToman } from "@/redux/slices/searchSlice";
import SingleCar2 from "../components/SingleCar2";
import { SearchBox2 } from "../components/SearchBox2";

export function getUrlParamsEasy(search = window.location.search) {
    const params = {};
    const urlParams = new URLSearchParams(search);
    
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
    return params;
}



function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function convertToInt(array) {
    return array.map(Number);
}

export default function SearchResultPage(){
    const searchRef = useRef()
    const loadingRef = useRef(true)
    const firstTime = useRef(true)
    const urlFirstTime = useRef(true)
    const [isLoading,setIsLoading] = useState(true)
    const [hasMore,setHasMore] = useState(true)
    const dispatch = useDispatch()
    const [is404,setIs404]  = useState(false)
    const [recivedData,setRecivedData] = useState()
    const timerRef = useRef(900)
    const [timerValue,setTimerValue] = useState('00:00')
    const descriptionPopup = useSelector((state)=>state.global.descriptionPopup)
    const isReelActive = useSelector((state) => state.reels.isReelActive)
    const isSearchOpen = useSelector((state) => state.global.isSearchOpen)
    const carDates = useSelector((state) => state.global.carDates)
    const carList = useSelector((state) => state.carList.carList)
    const isFilterOpen = useSelector((state) => state.global.isFilterOpen)
    const roadMapStep = useSelector((state) => state.global.roadMapStep)
    const branch_id = useSelector((state) => state.search.branch_id)
    const search_title = useSelector((state) => state.search.search_title)
    const search_sort = useSelector((state) => state.search.sort)
    const priceRange = useSelector((state) => state.search.selectedPriceRange)
    const selectedCategories = useSelector((state) => state.search.selectedCategories)
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    const [searchDisable,setSearchDisable] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const stickyRef = useRef(null);
    // function scrollHandler(){
    //     console.log(stickyRef.current)
    // }
    useEffect(()=>{
        setRecivedData(null)
        dispatch(clearCarList())
        setIsLoading(true)
        firstTime.current = true
        loadingRef.current = true
        setSearchDisable(true)
    },[search_title,search_sort,priceRange,selectedCategories,carDates])
    function fetchData(){
        if(!recivedData && !firstTime.current) return
        let url = 'https://palmrentcar.com/api/car/filter/en'
        const params = getUrlParamsEasy()
        if(!params.from,!params.to,!params.branch_id){
            setIs404(true)
            return
        }
        dispatch(changeBranchId(branch_id))
        if(urlFirstTime.current){
            dispatch(changeCarDates([params.from.split(' ')[0],params.to.split(' ')[0]]))
            if(params.search_title){
                dispatch(changeSearchTitle(params.search_title))
            }
            if(params.sort){
                dispatch(changeSort(params.sort))
            }
            if(params.min_p && params.max_p){
                dispatch(changeSelectedPriceRange([params.min_p,params.max_p]))
            }
            if(params.categories){
                dispatch(changeSelectedCategories(convertToInt(params.categories?.split(','))))
            }
        }
        let payload = {
            from : carDates[0] || params.from,
            to : carDates[1] || params.to,
            branch_id : params.branch_id,
        }
        if((urlFirstTime.current && params.search_title) || search_title){
            payload.search_title = (urlFirstTime.current && params.search_title) || search_title
        }
        if((urlFirstTime.current && params.sort) || search_sort){
            payload.sort = (urlFirstTime.current && params.sort) || search_sort
        }
        if((urlFirstTime.current && (params.min_p && params.max_p)) || priceRange){
            payload.min_p = (urlFirstTime.current && params.min_p) || Math.min(...priceRange)
            payload.max_p = (urlFirstTime.current && params.max_p) || Math.max(...priceRange)
        }
        if((urlFirstTime.current && (params.categories)) || selectedCategories.length != 0){
            console.log((urlFirstTime.current && params.categories?.split(',')),selectedCategories)
            payload['cat_id'] = (urlFirstTime.current && params.categories?.split(',')) || selectedCategories
        }
        if(selectedCategories.length != 0){
            payload['cat_id'] = convertToInt(selectedCategories)
        }
        urlFirstTime.current = false
        firstTime.current = false
        if(!!recivedData){
            const currentPage = parseInt(recivedData.data.page)
            const perPage = parseInt(recivedData.data.per_page)
            const carCount = parseInt(recivedData.data.count_cars)
            const carRecivedCount = (currentPage * perPage) + 3
            if(carRecivedCount >= carCount){
                setHasMore(false)
                setIsLoading(false)
                loadingRef.current = false
                return
            }
            payload.page = currentPage + 1
        }
        postData(url,payload)
        .then(data => {
            setSearchDisable(false)
            setRecivedData(data)
            setIsLoading(false)
            loadingRef.current = false
        })
    .catch(error => console.error('خطا:', error));
    }
    function scrollHandler(){
        const scrollPoint = stickyRef.current.offsetTop - window.pageYOffset
        if(scrollPoint <= 4 && scrollPoint != 0){
            if(hasAnimated) return
            setIsSticky(true)
            setHasAnimated(true)
        }
        else if(stickyRef.current.getBoundingClientRect().top > 65){
            setIsSticky(false)
            setHasAnimated(false)
        }
        if(!hasMore || loadingRef.current) return
        if(searchRef.current.getBoundingClientRect().bottom - window.innerHeight <= 100){
            if(!hasMore) return
            setIsLoading(true)
            loadingRef.current = true
        }
    }
    useEffect(()=>{
        if(!isLoading) return
        fetchData()
    },[isLoading])
    function timerStart(){
        setTimeout(()=>{
            const second = pad(timerRef.current % 60,2)
            const minute = pad(parseInt(timerRef.current / 60),2)
            setTimerValue(minute + ':' + second)
            timerRef.current = timerRef.current - 1
            if(timerRef.current >= 0){
                timerStart()
            }
        },1000)
    }
    useEffect(()=>{

        fetchData()
        // dispatch(addCarList())
        timerStart()
        NProgress.start()
        const timeout = setTimeout(() => {
        NProgress.done()
        }, 300)
        window.addEventListener('scroll',scrollHandler)
        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll',scrollHandler)
        }
    },[])
    useEffect(()=>{
        if(!recivedData) return
        dispatch(changePriceRange([recivedData.data.max_price,recivedData.data.min_price]))
        dispatch(changeSearchCurrency(recivedData.data.currency))
        dispatch(addCarList(recivedData.data.cars))
    },[recivedData])

    if(is404) {
            notFound()
        }
    return(
        <>
            <Header shadowLess/>
                    <DateBox timerValue={timerValue} isSticky={roadMapStep == 2 ? true : false}/>
                    <div className="sm:w-[90vw] max-w-[1336px] m-auto relative my-4">
                        {roadMapStep < 3 && 
                            <>
                                <RoadMap step={roadMapStep}/>
                            </>
                        }
                    </div>
                    <div
                        ref={stickyRef}
                        className={`
                            sticky 
                            ${isHeaderClose ? 'top-0' : 'top-16'} 
                            transition-all z-21 mb-2 sm:w-[90vw] 
                            max-w-[1336px] max-sm:pt-2 max-sm:bg-white 
                            m-auto
                            duration-500
                            ${isSticky ? 'animate-fade-in [animation-duration:.4s]' : ''}
                        `}
                        >
                        <SearchBox2/>
                        {searchDisable &&
                            <div className="w-full h-full bg-white opacity-50 absolute top-0 z-20"></div>
                        }
                    </div>
                    {
                        roadMapStep == 1 &&
                        <>
                            {/* <div className="w-[90vw] max-w-[1336px] m-auto relative"> */}
                            {/* </div> */}
                            <div className="md:w-[90vw] max-md:overflow-x-hidden max-w-[1336px] m-auto relative">
                                <div ref={searchRef} className="flex flex-wrap sm:gap-4 gap-1">
                                    {carList.map((item,index)=>{
                                        return(
                                            <div key={index} className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                                                <SingleCar2 data={item}/>
                                            </div>
                                        )
                                    })}
                                    {hasMore && isLoading &&
                                        Array(3).fill(null).map((_,index)=>{
                                            return(
                                                <div key={index} className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                                                    <SkeletonSingleCar singlePrice={true}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    }
                    {roadMapStep == 2 &&
                        <InformationStep/>
                    }
            {isReelActive && 
                <PopupReels/>
            }
            {isSearchOpen && 
                <SearchPopup/>
            }
            {isFilterOpen && 
                <SearchFilterPopup/>
            }
            {descriptionPopup.description && 
                <DescriptionPopup/>
            }
            
            <Footer/>
        </>
    )
}