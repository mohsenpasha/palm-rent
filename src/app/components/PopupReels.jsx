'use client'
import { useEffect, useRef, useState } from "react"
import { IconArrow, IconClose, IconMute, IconUnMute } from "./Icons"

export default function PopupReels(){
    const [reelList,setReelList] = useState(['/videos/test-vid-1.mp4','/videos/test-vid-2.mp4'])
    const [isMuted,setIsmuted] = useState(false)
    const [sliderIndex,setSliderIndex] = useState(0)
    const [sliderTransition,setSliderTransition] = useState(0)
    const reelsRef = useRef([])
    function moveDown(){
        console.log('move down')
        setSliderIndex(sliderIndex + 1)
    }
    function moveUp(){
        console.log('move down')
        if(sliderIndex > 0){
            setSliderIndex(sliderIndex - 1)
        }
    }
    useEffect(()=>{
        let tr = (reelsRef.current[sliderIndex].getBoundingClientRect().top - ((window.innerHeight * 5) / 100)) * -1
        setSliderTransition(sliderTransition + tr)
    },[sliderIndex])
    return(
        <div className="fixed z-50 w-[100vw] h-[100vh] top-0 right-0">
            <div className="absolute w-full h-full bg-black opacity-85"></div>
            <div className="h-[90vh] absolute left-1/2 top-1/2 -translate-1/2 flex gap-2">
                <div className="text-white z-20 flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer">
                            <IconClose className={'w-[16px]'}/>
                        </div>
                        <div onClick={()=>setIsmuted(!isMuted )} className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer">
                            {isMuted ? 
                                <IconUnMute className={'w-[16px]'}/>
                            :
                                <IconMute className={'w-[16px]'}/>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div onClick={moveUp} className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer">
                            <IconArrow className={'rotate-180'}/>
                        </div>
                        <div onClick={moveDown} className="text-white w-[50px] h-[50px] flex items-center justify-center transition-all p-3 bg-[#ffffff26] rounded-lg hover:bg-[#ffffff46] cursor-pointer">
                            <IconArrow className={''}/>
                        </div>
                    </div>
                    <div className="h-[100px]"></div>
                </div>
                <div style={{transform: `translateY(${sliderTransition}px)`}} className="transition-all duration-200">
                    {reelList.map((item,index)=>{
                        return(
                            <SingleReel video={item} key={index} reelIndex={index} ref={reelsRef}/>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export function SingleReel({ref,reelIndex,video}){
    return(
        <div ref={(el) => (ref.current[reelIndex] = el)} className="h-[90vh] w-[410px] rounded-lg bg-white first:mt-0 my-4">
            <video className="w-full h-full object-cover rounded-lg" src={video}></video>
        </div>
    )
}