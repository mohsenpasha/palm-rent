import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "./Icons";

export function ApplicationSection(){
    return(
        <section className="lg:py-16 lg:mt-16">
            <div className="w-[85vw] max-w-[1336px] block m-auto">
                <div className="w-full border-[1px] bg-white border-[#EBF3FE] rounded-lg shadow-[0_4px_43px_0_#3B82F64D] flex lg:justify-between justify-center lg:px-16 px-8 py-8">
                    <div className="flex sm:flex-row flex-col items-center gap-4">
                        <div className="border-[1px] border-[#0000001F] rounded-lg p-2 flex flex-col gap-2">
                            <Image src={'/images/barcode.png'} width={200} height={200}/>
                            <div className="text-center font-bold">برای دانلود اسکن کنید</div>
                        </div>
                        <div className="flex flex-col gap-2 sm:items-start items-center md:text-base text-sm">
                            <div className="lg:text-2xl text-lg font-bold">اپلیکیشن پالم رنت</div>
                            <div>اجاره آنلاین خودرو سریع‌تر و مطمئن‌تر</div>
                            <Link className="flex items-center md:my-4 my-2  text-[#3b82f6]" href={'#'}>
                                <span>
                                    مشاهده لینک های دانلود
                                </span>
                                <IconArrow className={'rotate-90'}/>
                            </Link>
                            <div className="flex gap-2 text-[#959EA6] text-xs items-center">
                                <div className="flex size-[20px] items-center">
                                    <Image src={'/images/android-logo.png'} width={40} height={40} alt=""/>
                                </div>
                                <div className="flex size-[20px] items-center">
                                    <Image src={'/images/ios-logo.png'} width={40} height={40} alt=""/>
                                </div>
                                <div>قابلیت نصب روی Android و iOS</div>
                            </div>
                        </div>
                    </div>
                    <div className="max-h-[300px] lg:flex hidden items-end">
                        <div className="-mb-8">
                            <Image className="object-" src={'/images/application-d.png'} width={348} height={466} alt=""></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}