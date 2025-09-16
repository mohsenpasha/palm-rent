import Image from "next/image";
import { IconHeartTick, IconLogin2 } from "./Icons";

export function LoginRequired(){
    return(

        <div className="w-full flex flex-col justify-center items-center my-20">
            <div className="flex flex-col gap-3 items-center">
                <Image src="/images/loginReq.png" width={232} height={182} alt=""/>
                <div className="font-bold">
                    برای این قسمت از برنامه لطفا وارد شوید !
                </div>
                <a className="bg-[#3B82F6] text-white flex rounded-lg p-4 justify-center items-center gap-2 w-full" href="">
                    <IconLogin2/>
                    ورود به برنامه
                </a>
            </div>
        </div>
    )
}

export function EmptyList(){
    return(

        <div className="w-full flex flex-col justify-center items-center my-20">
            <div className="flex flex-col gap-2 items-center">
                <IconHeartTick/>
                <div className="font-bold">
                    لیست خالی میباشد !
                </div>
                <div className="text-[#898989]">
                    هیچ خودرویی در لیست شما وجود ندارد ...
                </div>
                <a className="bg-[#3B82F6] text-white flex rounded-lg p-4 justify-center items-center gap-2 w-full" href="">
                    مشاهده خودروها 
                </a>
            </div>
        </div>
    )
}