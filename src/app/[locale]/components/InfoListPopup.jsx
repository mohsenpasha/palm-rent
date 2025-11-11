import { useDispatch } from "react-redux"
import useDisableScroll from "@/app/hooks/useDisableScroll"
import { IconClose } from "./Icons"
import { changeIsInfoListOpen } from "@/redux/slices/globalSlice"

export default function InfoListPopup(){
    const dispatch = useDispatch()
    useDisableScroll()
    function closePopup(){
        dispatch(changeIsInfoListOpen(false))
    }
    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div className="animate-opacity">
                <div onClick={closePopup} className="absolute w-full h-full top-0 right-0 bg-black opacity-40"></div>
            </div>
            <div className="absolute top-1/2 animate-fade-in2 left-1/2 -translate-1/2 bg-white z-10 rounded-lg md:min-w-80 min-w-[80%] md:max-w-max max-w-[95%]">
                <div className="w-full border-b-[1px] border-[#0000001F] p-2 flex justify-between items-center">
                    <span>
                        انتخاب از لیست
                    </span>
                    <span onClick={closePopup} className="size-4 flex items-center cursor-pointer">
                        <IconClose/>
                    </span>
                </div>
                <div className="p-2 flex flex-col gap-2">
                    <div className="bg-[#F9F9F9] text-[#353535] rounded-lg p-2 cursor-pointer text-center border border-[#0000001F] transition-all hover:bg-[#E9E9E9]">
                        <div>
                            محسن پاشا
                        </div>
                        <div>
                            09101741258
                        </div>
                        <div>
                            test@gmail.com
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] text-[#353535] rounded-lg p-2 cursor-pointer text-center border border-[#0000001F] transition-all hover:bg-[#E9E9E9]">
                        <div>
                            محسن پاشا
                        </div>
                        <div>
                            09101741258
                        </div>
                        <div>
                            test@gmail.com
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] text-[#353535] rounded-lg p-2 cursor-pointer text-center border border-[#0000001F] transition-all hover:bg-[#E9E9E9]">
                        <div>
                            محسن پاشا
                        </div>
                        <div>
                            09101741258
                        </div>
                        <div>
                            test@gmail.com
                        </div>
                    </div>
                </div>
                {/* <div className="p-4 flex items-center justify-center font-bold">
                    اطلاعاتی وارد نشده است
                </div> */}
            </div>
        </div>
    )
}