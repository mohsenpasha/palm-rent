'use client'
import CarCategorySection from "@/app/components/CarCategorySection";
import CommentSection from "@/app/components/CommentSection";
import CommonQuestionSection from "@/app/components/CommonQuestionSection";
import { RecentBlogPosts } from "@/app/components/RecentBlogPosts";
import SearchBar from "@/app/components/SearchBar";
import { SearchBox } from "@/app/components/SearchBox";
import SearchFilterPopup from "@/app/components/SearchFilterPopup";
import SearchPopup from "@/app/components/SearchPopup";
import SingleCar from "@/app/components/SingleCar";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function BranchPage(){
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    const isSearchOpen = useSelector((state) => state.global.isSearchOpen)
    const isFilterOpen = useSelector((state) => state.global.isFilterOpen)
    const carList = useSelector((state) => state.carList.carList)

    return(
        <>
        <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
            <div>
                {!isUnderLg && 
                    <Image className="object-contain" src={'/images/search-bg.png'} height={320} width={1440} alt=""></Image>
                }
                <div className="lg:-mt-[120px] mt-8">
                    <SearchBar/>
                </div>
            </div>
            <CarCategorySection/>
            <SearchBox/>
            <div className="flex flex-wrap gap-4">
                {/* <div className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full"> */}
                    {/* <SkeletonSingleCar/> */}
                {/* </div> */}
                {carList.map((item,index)=>{
                    return(
                        <div key={index} className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                            <SingleCar data={item}/>
                        </div>
                    )
                })}
            </div>
            <CommentSection/>
            <CommonQuestionSection/>
            <RecentBlogPosts/>
        </div>
            {isSearchOpen && 
                <SearchPopup/>
            }
            {isFilterOpen && 
                <SearchFilterPopup/>
            }
        </>
    )
}