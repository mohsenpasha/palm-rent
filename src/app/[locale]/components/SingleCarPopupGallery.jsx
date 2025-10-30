// 'use client'
// import Image from "next/image";
// import { useState } from "react";
// import { IconArrowHandle, IconClose } from "./Icons";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
// import { useDispatch } from "react-redux";
// import { changeSingleGalleryStatus } from "@/redux/slices/globalSlice";

// export default function SingleCarPopupGallery(){
//     const dispatch = useDispatch()
//     function closePopup(){
//         dispatch(changeSingleGalleryStatus(false))
//     }
//     const [sliderIndex,setSliderIndex] = useState(0)
//     function changeSlider(dir){
//         console.log(dir)
//         if(dir == 'next'){
//             if(sliderIndex > 0){
//                 setSliderIndex(sliderIndex - 1)
//             }
//             else{
//                 setSliderIndex(2)
//             }
//         }
//         else{
//             if(sliderIndex < 2){
//                 setSliderIndex(sliderIndex + 1)
//             }
//             else{
//                 setSliderIndex(0)
//             }
//         }
//     }
//     return(
//         <div className="fixed top-0 right-0 w-[100vw] h-[100vh] bg-black z-50">
//             <div className="w-[100vw] h-[100vh] overflow-hidden">
//                 <div style={{transform:`translateX(${100 * sliderIndex}%)`}} className="flex items-center duration-300 h-full transition-all">
//                     <div className="relative w-[100vw] h-[100vh] shrink-0">
//                         <SingleImageScroll src={'/images/singlecar-1.png'}/>
//                     </div>
//                     <div className="relative w-[100vw] h-[100vh] shrink-0">
//                         <SingleImageScroll src={'/images/singlecar-2.jpg'}/>
//                     </div>
//                     <div className="relative w-[100vw] h-[100vh] shrink-0">
//                         <SingleImageScroll src={'/images/singlecar-3.jpg'}/>
//                     </div>
//                 </div>
//             </div>
//             <div onClick={()=>changeSlider('next')} className="absolute top-1/2 right-2 size-[50px] text-white flex items-center justify-center rounded-lg bg-[#ffffff26] hover:bg-[#ffffff4d] cursor-pointer">
//                 <span className="size-[16px] flex rotate-135 items-center justify-center">
//                     <IconArrowHandle/>
//                 </span>
//             </div>
//             <div onClick={()=>changeSlider('prev')} className="absolute top-1/2 left-2 size-[50px] text-white flex items-center justify-center rounded-lg bg-[#ffffff26] hover:bg-[#ffffff4d] cursor-pointer">
//                 <span className="size-[16px] flex -rotate-45 items-center justify-center">
//                     <IconArrowHandle/>
//                 </span>
//             </div>
//             <div onClick={closePopup} className="absolute right-2 top-2 size-[50px] text-white flex items-center justify-center rounded-lg bg-[#ffffff26] hover:bg-[#ffffff4d] cursor-pointer">
//                 <IconClose/>
//             </div>
//         </div>
//     )
// }

// function SingleImageScroll({src}){
//     return(
//         <TransformWrapper
//             initialScale={1}
//             minScale={1}
//             maxScale={3}
//             wheel={{ step: 0.1 }}
//             doubleClick={{ disabled: true }}
//             >
//             {({ zoomIn, zoomOut, resetTransform }) => (
//                 <>
//                 {/* Optional Zoom Controls */}
//                 <div className="absolute top-4 left-4 z-50 flex gap-2 font-bold text-xl">
//                     <button onClick={()=>zoomIn()} className="size-[50px] text-white flex items-center pt-1 justify-center rounded-lg bg-[#ffffff26] hover:bg-[#ffffff4d] cursor-pointer">+</button>
//                     <button onClick={()=>zoomOut()} className="size-[50px] text-white flex items-center pt-1 justify-center rounded-lg bg-[#ffffff26] hover:bg-[#ffffff4d] cursor-pointer">-</button>
//                     {/* <button onClick={resetTransform} className="bg-white/20 px-2 py-1 text-white rounded">Reset</button> */}
//                 </div>

//                 <TransformComponent>
//                     <div className="relative w-[100vw] h-[100vh]">
//                     <Image
//                         className="object-contain"
//                         src={src}
//                         fill
//                         alt=""
//                     />
//                     </div>
//                 </TransformComponent>
//                 </>
//             )}
//         </TransformWrapper>
//     )
// }











"use client"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDisableScroll from "@/app/hooks/useDisableScroll";
import { changeSingleGalleryStatus } from "@/redux/slices/globalSlice";

const slides = [
  { src: "/images/singlecar-1.png" },
  { src: "/images/singlecar-2.jpg" },
  { src: "/images/singlecar-3.jpg" },
  {
    type: "video",
    width: 1280,
    height: 720,
    poster: "/images/singlecar-2.jpg",
    sources: [{ src: "/videos/test-vid-2.mp4", type: "video/mp4" }],
  },
];

export default function SingleCarPopupGallery() {
    useDisableScroll()
    return(
        <SingleCarPopupGallerySupport/>
    )
}

export function SingleCarPopupGallerySupport(){
    const isSingleGalleryOpen = useSelector((state)=>state.global.isSingleGalleryOpen)
    const [autoPlay, setAutoPlay] = useState(true);
    const [loop, setLoop] = useState(true);
    const dispatch = useDispatch()
    function closeGallery(){
        dispatch(changeSingleGalleryStatus(false))
    }
  return (
    <>
      <button onClick={() => setOpen(true)}>نمایش گالری</button>
      <Lightbox
        open={isSingleGalleryOpen}
        close={closeGallery}
        video={{
          autoPlay,
          loop,
        }}
        slides={slides}
        plugins={[Thumbnails, Video]}
      />
    </>
  );
}