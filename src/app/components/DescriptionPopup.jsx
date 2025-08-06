import { useDispatch, useSelector } from "react-redux"
import useDisableScroll from "../hooks/useDisableScroll"
import { IconClose } from "./Icons"
import { changeDescriptionPopup } from "@/redux/slices/globalSlice"
import { useTranslation } from "react-i18next";

export default function DescriptionPopup(){
    const { t, i18n } = useTranslation();
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
            <div className="absolute top-1/2 animate-fade-in2 left-1/2 -translate-1/2 bg-white z-10 rounded-lg md:min-w-80 min-w-[80%] md:max-w-max max-w-[95%]">
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