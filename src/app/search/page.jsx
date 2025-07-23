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

export default function SearchResultPage(){
    const isReelActive = useSelector((state) => state.reels.isReelActive)
    const carList = useSelector((state) => state.carList.carList)
    console.log(carList)
    return(
        <>
            <Header/>
            <div className="w-[90vw] max-w-[1500px] m-auto">
                {/* <RoadMap/> */}
                {/* <DateBox/> */}
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
                {/* <InformationStep/> */}
            </div>
            {/* <VoucherStep/> */}
            {isReelActive && 
                <PopupReels/>
            }
        </>
    )
}