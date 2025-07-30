'use client'
import { useSelector } from "react-redux";
import { DateBox } from "../components/DateBox";
import Header from "../components/Header";
import PopupReels from "../components/PopupReels";
import RoadMap from "../components/RoadMap";
import { SearchBox } from "../components/SearchBox";
import SingleCar from "../components/SingleCar";
import InformationStep from "../components/InformationStep";
import { VoucherStep } from "../components/VoucherStep";
import SkeletonSingleCar from "../components/SkeletonSingleCar";
import SearchPopup from "../components/SearchPopup";
import SearchFilterPopup from "../components/SearchFilterPopup";
import DescriptionPopup from "../components/DescriptionPopup";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useRef, useState } from "react";

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
export default function SearchResultPage(){
    const timerRef = useRef(900)
    const [timerValue,setTimerValue] = useState('00:00')
    const descriptionPopup = useSelector((state)=>state.global.descriptionPopup)
    const isReelActive = useSelector((state) => state.reels.isReelActive)
    const isSearchOpen = useSelector((state) => state.global.isSearchOpen)
    const carList = useSelector((state) => state.carList.carList)
    const isFilterOpen = useSelector((state) => state.global.isFilterOpen)
    const roadMapStep = useSelector((state) => state.global.roadMapStep)
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
        timerStart()
        NProgress.start()
        const timeout = setTimeout(() => {
        NProgress.done()
        }, 300)
        return () => clearTimeout(timeout)
    },[])
    return(
        <>
            <Header/>
            <div className="absolute left-4 top-24 text-red-600 md:flex hidden">
                {timerValue}
            </div>
            <div className="w-[90vw] max-w-[1336px] m-auto">
                {roadMapStep < 3 && 
                    <>
                        <RoadMap step={roadMapStep}/>
                        <DateBox isSticky={roadMapStep == 2 ? true : false}/>
                    </>
                }
                {
                    roadMapStep == 1 &&
                    <>
                        <SearchBox/>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                                <SkeletonSingleCar/>
                            </div>
                            {carList.map((item,index)=>{
                                return(
                                    <div key={index} className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                                        <SingleCar data={item}/>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                }
                {roadMapStep == 2 &&
                    <InformationStep/>
                }
            </div>
            {roadMapStep == 3 &&
                <VoucherStep/>
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
        </>
    )
}