'use client'
import { useSelector } from "react-redux";
import { DateBox } from "../components/DateBox";
import Header from "../components/Header";
import PopupReels from "../components/PopupReels";
import RoadMap from "../components/RoadMap";
import { SearchBox } from "../components/SearchBox";
import SingleCar from "../components/SingleCar";

export default function SearchResultPage(){
    const isReelActive = useSelector((state) => state.reels.isReelActive)
    return(
        <>
            <Header/>
            <div className="w-[90vw] m-auto">
                <RoadMap/>
                <DateBox/>
                <SearchBox/>
                <div className="flex flex-wrap gap-4">
                    <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                        <SingleCar/>
                    </div>
                    <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                        <SingleCar/>
                    </div>
                    <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                        <SingleCar/>
                    </div>
                    <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                        <SingleCar/>
                    </div>
                    <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                        <SingleCar/>
                    </div>
                    <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                        <SingleCar/>
                    </div>
                </div>
            </div>
            {isReelActive && 
                <PopupReels/>
            }
        </>
    )
}