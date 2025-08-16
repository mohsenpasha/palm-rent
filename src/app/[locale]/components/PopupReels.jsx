'use client'
import { useEffect, useRef, useState } from "react"
import { IconArrow, IconClose, IconMute, IconPlay2, IconUnMute } from "./Icons"
import { useMediaQuery } from "@/app/hooks/useMediaQuery"
import { useDispatch, useSelector } from "react-redux"
import { changeActiveIndex, changeReelActive } from "@/redux/slices/reelsSlice"
import useDisableScroll from "@/app/hooks/useDisableScroll"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function PopupReels(){
    const dispatch = useDispatch()
    const reelList = useSelector((state)=>state.reels.reelList)
    const sliderIndex = useSelector((state) => state.reels.activeIndex)
    const [isMuted,setIsmuted] = useState(true)
    const isUnderSm = useMediaQuery("(max-width: 639.9px)");
    const [sliderTransition,setSliderTransition] = useState(0)
    const touchStartY = useRef(0)
    const sliderIndexRef = useRef(0)
    const reelsRef = useRef([])
    const isSliderLocked = useRef(false)
    useDisableScroll()
    function closePopupReels(){
        dispatch(changeActiveIndex(0))
        dispatch(changeReelActive(false))
    }
    function setSliderIndex(index){
        dispatch(changeActiveIndex(index))
    }
    function wheelHandler(event){
        if(event.wheelDelta > 0){
            moveUp()
        }
        else{
            moveDown()
        }
    }

    function touchStartHandler(event){
        touchStartY.current = event.touches[0].clientY
    }
    function touchMoveHandler(event){
        if(event.touches[0].clientY - touchStartY.current > 0){
            moveUp()
        }
        else{
            moveDown()
        }
        
    }
    function touchEndHandler(){
        touchStartY.current = 0
    }
    function tDisableSlider(){
        isSliderLocked.current = true
        setTimeout(()=>{
            isSliderLocked.current = false
        },300)
    }

    function moveDown(){
        if(isSliderLocked.current) return
        tDisableSlider()
        if(reelList.length - 1 > sliderIndexRef.current){
            sliderIndexRef.current = sliderIndexRef.current + 1
            setSliderIndex(sliderIndexRef.current)
        }
    }
    function moveUp(){
        if(isSliderLocked.current) return
        tDisableSlider()
        if(sliderIndexRef.current > 0){
            sliderIndexRef.current = sliderIndexRef.current - 1
            setSliderIndex(sliderIndexRef.current)
        }
    }
    useEffect(()=>{
        reelsRef.current[sliderIndex].querySelector('video').play()
        window.addEventListener('wheel', wheelHandler, { passive: true })
        window.addEventListener('touchstart', touchStartHandler)
        window.addEventListener('touchmove', touchMoveHandler)
        window.addEventListener('touchend', touchEndHandler)
        return () => {
            window.removeEventListener('wheel', wheelHandler)
            window.removeEventListener('touchstart', touchStartHandler)
            window.removeEventListener('touchmove', touchMoveHandler)
            window.removeEventListener('touchend', touchEndHandler)
        }
    },[])
    useEffect(()=>{
        let tr;
        if(isUnderSm){
            tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top) * -1
        }
        else{
            tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top - ((window.innerHeight * 5) / 100)) * -1
        }
        setSliderTransition(sliderTransition + tr)
        reelsRef.current.map((item,index)=>{
            item.querySelector('video').muted = isMuted
            if(sliderIndex == index){
                item.querySelector('video').play()
            }
            else{
                item.querySelector('video').pause()
            }
        })
    },[sliderIndex])
    useEffect(()=>{
        let tr;
        if(isUnderSm){
            tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top) * -1
        }
        else{
            tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top - ((window.innerHeight * 5) / 100)) * -1
        }
        setSliderTransition(sliderTransition + tr)
    },[isUnderSm])
    useEffect(()=>{
            reelsRef.current.map((item,index)=>{
                item.querySelector('video').muted = isMuted
            })
    },[isMuted])

    return(
        <div className="fixed z-50 w-[100vw] h-[100vh] top-0 right-0">
            <div onClick={closePopupReels} className="absolute w-full h-full bg-black opacity-85"></div>
            <div className="sm:h-[90vh] h-[100vh] absolute left-1/2 top-1/2 -translate-1/2 flex gap-2">
                <div className="text-white z-20 flex flex-col h-full sm:static right-2 top-6 absolute justify-between">
                    <div className="flex flex-col gap-2">
                        <div onClick={closePopupReels} className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer">
                            <IconClose className={'w-[16px]'}/>
                        </div>
                        <div onClick={()=>setIsmuted(!isMuted )} className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer">
                            {isMuted ? 
                                <IconMute className={'w-[16px]'}/>
                                :
                                <IconUnMute className={'w-[16px]'}/>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button disabled={sliderIndex <= 0} onClick={moveUp} className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer disabled:hover:bg-[#ffffff26] disabled:opacity-70 disabled:cursor-auto">
                            <IconArrow className={'rotate-180'}/>
                        </button>
                        <button disabled={reelList.length - 1 <= sliderIndex} onClick={moveDown} className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer disabled:hover:bg-[#ffffff26] disabled:opacity-70 disabled:cursor-auto">
                            <IconArrow className={''}/>
                        </button>
                    </div>
                    <div className="h-[100px]"></div>
                </div>
                <div style={{transform: `translateY(${sliderTransition}px)`}} className="transition-all duration-200">
                    {reelList.map((item,index)=>{
                        return(
                            <SingleReel video={item} key={index} activeIndex={sliderIndex} reelIndex={index} ref={reelsRef}/>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export function SingleReel({ref,reelIndex,activeIndex,video}){
    const t = useTranslations();
    const [isPaused,setIsPaused] = useState(false)
    function videoToggle(){
        if(ref.current[reelIndex].querySelector('video').paused){
            ref.current[reelIndex].querySelector('video').play()
            setIsPaused(false)
        }
        else{
            ref.current[reelIndex].querySelector('video').pause()
            setIsPaused(true)
        }
    }
    useEffect(()=>{
        if(activeIndex == reelIndex){
            setIsPaused(false)
        }
    },[activeIndex])
    return(
        <div onClick={videoToggle} ref={(el) => (ref.current[reelIndex] = el)} className="relative sm:h-[90vh] sm:w-[410px] h-[100vh] w-[100vw] sm:rounded-lg bg-white first:mt-0 my-4">
            {isPaused &&
                <span className="absolute top-1/2 left-1/2 -translate-1/2 size-[60px] flex items-center justify-center bg-[#00000066] rounded-full text-white">
                    <IconPlay2/>
                </span>
            }
            <video loop muted className="w-full h-full object-cover sm:rounded-lg" src={video}>Your browser does not support the video tag.</video>
            <div onClick={(event)=>event.stopPropagation()} className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#21262d] w-[calc(100%-16px)] rounded-lg p-2 flex justify-between">
                <Link href={'#'} className="flex w-auto bg-[#3B82F6] outline-0 py-2 px-8 rounded-lg text-white justify-center items-center text-nowrap left-6 gap-2 text-xs cursor-pointer">{t('rent')}</Link>
                <div className="flex flex-col items-end gap-1">
                    <div>
                        <div className="text-white gap-1 flex">
                            <span>100</span>
                            <span>{t('AED')}</span>
                        </div>
                    </div>
                    <div className="text-[#8c98ab] sm:text-xs text-[10px]">
                        Bentley Continental GTC V12 (White), 2021
                    </div>
                </div>
            </div>
        </div>
    )
}