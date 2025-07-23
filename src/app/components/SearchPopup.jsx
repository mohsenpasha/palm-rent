'use client'
import { useDispatch } from "react-redux";
import { IconClose, IconSearch2 } from "./Icons";
import { changeSearchStatus } from "@/redux/slices/globalSlice";

export default function SearchPopup(){
    const dispatch = useDispatch()
    function closePopup(){
        dispatch(changeSearchStatus(false))
    }
    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div onClick={closePopup} className="absolute w-full h-full bg-black opacity-40"></div>
            <div className="bg-white lg:w-[80%] sm:w-[90%] w-[95%] pb-6 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl rounded-bl-[0] rounded-br-[0]">
                <div className="border-b-[1px] border-[#B0B0B0CC] md:text-base text-sm p-4 font-bold relative">
                    <span>
                        جستجو خودرو
                    </span>
                    <span onClick={closePopup} className="absolute top-1/2 left-4 -translate-y-1/2 border-[1px] transition-all border-red-600 hover:bg-red-600 hover:text-white cursor-pointer text-red-600 rounded-sm sm:p-2 p-1">
                        <IconClose/>
                    </span>
                </div>
                <div className="p-4">
                    <div className="bg-[#F4F4F4] rounded-xl flex items-center p-4 py-3 relative">
                        <span>
                            <IconSearch2/>
                        </span>
                        <input className="w-full px-4 outline-0" type="search" placeholder="جستجوی خودرو" />
                    </div>
                </div>
            </div>
        </div>
    )
}