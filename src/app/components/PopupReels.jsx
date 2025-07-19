'use client'
import { useEffect, useRef, useState } from "react"
import { IconArrow, IconClose, IconMute, IconPlay2, IconUnMute } from "./Icons"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function PopupReels(){
    const [reelList,setReelList] = useState(['/videos/test-vid-1.mp4','/videos/test-vid-2.mp4','/videos/test-vid-1.mp4','/videos/test-vid-2.mp4','/videos/test-vid-1.mp4','/videos/test-vid-2.mp4','/videos/test-vid-1.mp4','/videos/test-vid-2.mp4'])
    const [isMuted,setIsmuted] = useState(true)
    const isUnderSm = useMediaQuery("(max-width: 639.9px)");
    const [sliderIndex,setSliderIndex] = useState(0)
    const [sliderTransition,setSliderTransition] = useState(0)
    const touchStartY = useRef(0)
    const sliderIndexRef = useRef(0)
    const reelsRef = useRef([])
    const isSliderLocked = useRef(false)
    
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
        console.log(isUnderSm)
        let tr;
        if(isUnderSm){
            console.log('isundersm')
            tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top) * -1
        }
        else{
            console.log('not under')
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
            console.log('isundersm')
            tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top) * -1
        }
        else{
            console.log('not under')
            tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top - ((window.innerHeight * 5) / 100)) * -1
        }
        console.log(sliderTransition,tr)
        setSliderTransition(sliderTransition + tr)
    },[isUnderSm])
    useEffect(()=>{
            reelsRef.current.map((item,index)=>{
                item.querySelector('video').muted = isMuted
            })
    },[isMuted])

    return(
        <div className="fixed z-50 w-[100vw] h-[100vh] top-0 right-0">
            <div className="absolute w-full h-full bg-black opacity-85"></div>
            <div className="sm:h-[90vh] h-[100vh] absolute left-1/2 top-1/2 -translate-1/2 flex gap-2">
                <div className="text-white z-20 flex flex-col h-full sm:static right-2 top-6 absolute justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer">
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
        </div>
    )
}