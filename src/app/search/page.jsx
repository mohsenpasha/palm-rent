import { DateBox } from "../components/DateBox";
import Header from "../components/Header";
import RoadMap from "../components/RoadMap";
import SingleCar from "../components/SingleCar";

export default function SearchResultPage(){
    return(
        <>
            <Header/>
            <div className="w-[90vw] m-auto">
                <RoadMap/>
                <DateBox/>
                <div className="flex w-[calc(25%-16px)] m-[40px]">
                    <SingleCar/>
                </div>
            </div>
        </>
    )
}