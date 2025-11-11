'use client'
import Image from "next/image";
import SingleCarPopupGallery from "../components/SingleCarPopupGallery";
import { useDispatch, useSelector } from "react-redux";
import { changeSingleGalleryStatus } from "@/redux/slices/globalSlice";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from "react";

export default function GalleryComponent({data}){
    const items = data.items
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    const isSingleGalleryOpen = useSelector((state)=>state.global.isSingleGalleryOpen)
    const dispatch = useDispatch()
    function openPopup(){
        dispatch(changeSingleGalleryStatus(true))
    }
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="flex py-4 flex-wrap gap-2">
                    {items.map((item,index)=>{
                        return(
                            <div key={index} onClick={openPopup} className="rounded-lg p-2 lg:w-[calc(25%-8px)] md:w-[calc(33%-4px)] w-[calc(50%-4px)] border border-[#cccccc] cursor-pointer bg-white">
                                <Image className="rounded-lg w-full h-full object-cover" src={item.photo} width={352} height={480} alt=""/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            {isSingleGalleryOpen &&
                <SingleCarPopupGallery data={data.items}/>
            }
        </>

    )
}