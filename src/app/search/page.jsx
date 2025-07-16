import Header from "../components/Header";
import SingleCar from "../components/SingleCar";

export default function SearchResultPage(){
    return(
        <>
            <Header/>
            <div className="flex w-[calc(25%-16px)] m-[40px]">
                <SingleCar/>
            </div>
        </>
    )
}