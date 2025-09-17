import { useDispatch, useSelector } from "react-redux"
import useDisableScroll from "@/app/hooks/useDisableScroll"
import { IconClose } from "./Icons"
import { changeDescriptionPopup } from "@/redux/slices/globalSlice"
import { useTranslations } from "next-intl";

export default function DescriptionPopup(){
    const t = useTranslations();
    const descriptionPopup = useSelector((state)=>state.global.descriptionPopup)

    useDisableScroll()
    const dispatch = useDispatch()
    function closePopup(){
        dispatch(changeDescriptionPopup({title:null,description:null}))
    }
    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div className="animate-opacity">
                <div onClick={closePopup} className="absolute w-full h-full top-0 right-0 bg-black opacity-40"></div>
            </div>
            <div className="bg-white sm:w-xl w-[90%] pb-6 absolute sm:top-1/2 left-1/2 sm:-translate-1/2 -translate-x-1/2 sm:bottom-auto bottom-0 sm:rounded-2xl rounded-t-2xl sm:animate-fade-in2 animate-fromBottom">
                <div className="w-full border-b-[1px] border-[#0000001F] p-2 flex justify-between items-center">
                    <span>
                        {t(descriptionPopup.title) || t('description')}
                    </span>
                    <span onClick={closePopup} className="size-4 flex items-center cursor-pointer">
                        <IconClose/>
                    </span>
                </div>
                <div className="p-2">
                    {descriptionPopup.description}
                </div>
            </div>
        </div>
    )
}