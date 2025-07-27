'use client'
import Image from "next/image";
import { IconBarcode, IconCalender2, IconCalenderTick, IconClock, IconContact, IconDownload, IconEmail, IconGlobalSearch, IconInfo2, IconInstagram, IconLocation, IconLocationTick, IconPerson2, IconPhone, IconReceipt, IconSmsTracking, IconTick2 } from "./Icons";
import { FineDeposit, PaymentDetail } from "./InformationStep";
import { useState } from "react";
import { SingleCarOptions } from "./SingleCar";

export function VoucherStep(){
    return(
        <div>
            <VoucherHead/>
            <div className="lg:w-[85vw] sm:w-[90vw] w-[95vw] max-w-[1500px] m-auto">
                <div className="flex sm:flex-row flex-col-reverse flex-wrap gap-4 my-4">
                    <PersonalInfoShow/>
                    <div className="xl:w-1/3 md:w-3/12 w-full xl:text-lg text-sm text-center bg-white rounded-2xl flex flex-col items-center justify-between py-4">
                        <div className="text-[#DF900A]">تنها در صورت پرداخت این رسید قابل استفاده است</div>
                        <Image src={'/images/barcode.png'} width={306} height={287} alt=""></Image>
                        <button className="bg-[#3B82F61A] cursor-pointer rounded-lg flex items-center gap-4 py-2 px-4 text-[#3B82F6] mt-4">
                            <IconDownload/>
                            دانلود وچر
                        </button>
                    </div>
                </div>
                <ReservationDetail/>
                <div className="border-[1px] border-[#EBEBEB] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl my-4 flex-1 bg-white">
                    <PaymentDetail borderLess={true}/>
                    <FineDeposit borderLess={true}/>
                </div>
                <FinalDetail/>
                <SocialBox/>
            </div>
        </div>
    )
}
export function VoucherHead(){
    return(
        <>
            <div className="flex justify-center my-4 items-center gap-2">
                <span className="lg:size-20 md:size-16 sm:size-12 size-10 text-[#10B981] inline-block">
                    <IconTick2/>
                </span>
                <div className="lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-center">
                    <div className="text-[#10B981] lg:text-[40px] md:text-3xl sm:text-2xl text-xl">رزرو شما با موفقیت ثبت شد </div>
                    <div>اطلاعات رزرو شما در زیر آمده است</div>
                </div>
            </div>
            <div className="w-full lg:h-[80px] h-[66px] bg-[#EBEBEB] my-6 relative flex justify-center">
                <div className="absolute top-0 right-0 lg:w-[120px] md:w-[80px] w-[110px] bg-[url('/images/voucher-header-side.png')] bg-cover h-full"></div>
                <div className="absolute top-0 left-0 rotate-180 lg:w-[120px] md:w-[80px] w-[110px] bg-[url('/images/voucher-header-side.png')] bg-cover h-full"></div>
                <div className="lg:w-[calc(100%-200px)] md:w-[calc(100%-120px)] sm:w-[calc(100%-120px)] flex md:justify-between justify-center items-center text-[#383838] font-bold xl:text-xl lg:text-base md:text-sm text-xs">
                    <div className="md:flex hidden">شرکت بین المللی اجاره خودرو پالم رنت - وچر</div>
                    <div className="flex items-center">
                        <Image className="filter-[invert(1)]" src={'/images/logo.png'} width={120} height={33} alt=""></Image>
                    </div>
                    <div className="md:flex hidden">شرکت بین المللی اجاره خودرو پالم رنت - وچر</div>
                </div>
            </div>
        </>
    )
}
export function PersonalInfoShow(){
    return(
        <div className="border-[1px] flex flex-col border-[#EBEBEB] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl flex-1 bg-white">
            <div className="flex items-center lg:text-xl md:text-base text-sm font-semibold gap-2">
                <IconContact/>
                اطلاعات شخصی
            </div>
            <div className="flex w-full flex-wrap bg-[#F8F8F8] rounded-2xl my-2 text-[#545454]">
                <PersonalInfoShowSingle title={
                    <>
                        <IconPerson2/>
                        نام و نام خانوادگی :
                    </>
                } value={'علی جرفی'}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconClock/>
                        زمان رزرو:
                    </>
                } value={'12:30 -  1403/12/23'}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconPhone/>
                        شماره تماس:
                    </>
                } value={'09104992005'}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconBarcode/>
                        کد رزرو:
                    </>
                } value={'12824hjd823'}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconEmail/>
                        ایمیل:
                    </>
                } value={''}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconLocationTick/>
                        شعبه:
                    </>
                } value={'دبی'}/>
            </div>
        </div>
    )
}

export function PersonalInfoShowSingle({title,value}){
    return(
        <div className="sm:w-1/2 w-full sm:border-l-[1px] even:border-l-0 border-b-[1px] last:border-b-0 sm:nth-[5]:border-b-0 border-[#E6E6E6] flex items-center justify-between lg:py-8 py-4 px-4 lg:text-base text-sm">
            <div className="flex gap-2 items-center">
                {title}
            </div>
            <div className="text-black">
                {value}
            </div>
        </div>
    )
}

export function ReservationDetail(){
    const [options,setOptions] = useState(['بدون دیپوزیت','تحویل رایگان','بیمه رایگان','کیلومتر نامحدود'])
    return(
        <div className="border-[1px] flex md:flex-nowrap flex-wrap lg:gap-12 gap-6 border-[#EBEBEB] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl flex-1 bg-white">
            <div className="md:w-1/2 w-full flex flex-col gap-4">
                <div className="flex justify-between">
                    <div className="flex gap-2 lg:text-xl md:text-base text-sm font-semibold items-center">
                        <IconReceipt/>
                        جزئیات رزرو
                    </div>
                    <div>
                        AUDI R8 2022
                    </div>
                </div>
                <div className="relative w-full">
                    <Image className={`rounded-lg w-full h-full object-cover`} src={'/images/singlecar-1.png'} width={581} height={307} alt=''></Image>
                    <div className="flex text-[#0B835C] text-[10px] absolute gap-2 text-nowrap top-2 right-2 w-full overflow-hidden flex-wrap">
                        {options.map((item,index)=>{
                            return(
                                <span key={index} className="py-1 px-2 rounded-4xl bg-white">{item}</span>
                            )
                        })}
                    </div>
                </div>
                <div className="sm:w-10/12 w-full m-auto">
                    <SingleCarOptions data={{gasType:'بنزین',gearBox:'اتوماتیک',suitcase:3,passengers:3}} />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-around gap-2">
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconCalenderTick/>
                    </span>
                    تاریخ و ساعت تحویل :
                 </>   
                } value={'12:30 -  1403/12/23'}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconCalenderTick/>
                    </span>
                    تاریخ و ساعت عودت:
                 </>   
                } value={'12:30 -  1403/12/23'}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C] size-8">
                        <IconLocation/>
                    </span>
                    محل تحویل :
                 </>   
                } value={'فرودگاه دبی ترمینال یک'}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconLocationTick/>
                    </span>
                    محل عودت :
                 </>   
                } value={'هتل در دبی (هیلتون)'}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconCalender2/>
                    </span>
                    تعداد روز رزرو شده :
                 </>   
                } value={'3 روز'}/>
            </div>
        </div>
    )
}

export function SingleReservationDetail({title,value}){
    return(
        <div className="flex bg-[#F4F4F4] rounded-2xl lg:py-4 py-3 lg:px-6 md:px-4 px-2 xl:text-lg lg:text-base sm:text-sm text-xs items-center justify-between">
            <div className="flex items-center lg:gap-4 gap-2">
                {title}
            </div>
            <div className="text-[#545454]">
                {value}
            </div>
        </div>
    )
}

export function FinalDetail(){
    return(
        <div className="border-[1px] flex gap-6 border-[#EBEBEB] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl flex-1 bg-white flex-col xl:text-lg lg:text-base md:text-sm text-xs">
            <div className="flex gap-2 items-center text-black lg:text-xl md:text-base text-sm font-semibold">
                <IconInfo2/>
                اطلاعات تکمیلی
            </div>
            <ul className="list-disc pr-6 text-[#1B3A9F]">
                <li>اجاره یک دستگاه هیوندای اکسنت ۲۰۲٤ </li>
                <li>از ۱۲:۰۰۱٦/۱۱/۱۴۰۳ تا ۲۰/۱۱/۱۴۰۳ ١٦:٠٠ به مدت ۵ روز</li>
                <li>مانده (حساب پرداخت هنگام تحویل خودرو) : ٥٢٥,٠٠ درهم</li>
            </ul>
            <ul className="list-disc pr-6 text-[#333333] flex flex-col gap-4">
                <li>لطفا توجه داشته باشید که هنگام تحویل خودرو همراه داشتن اصل پاسپورت و گواهینامه بین المللی الزامی است.</li>
                <li>لطفاً در انتخاب شماره ترمینال دقت نمایید و مطمئن شوید که شماره صحیح را انتخاب کرده.اید در صورت مغایرت هزینه اضافی بر عهده شما خواهد بود و ممکن است تاخیر در تحویل خودرو رخ دهد.</li>
                <li>هزینه پارکینگ فرودگاه به عهده مشتری میباشد و در مبلغ اجاره خودرو محاسبه نمیشود لطفاً هنگام تحویل و بازگشت خودرو، هزینه های مربوط به پارکینگ را خودتان پرداخت نمایید.لطفا توجه داشته باشید که هنگام تحویل خودرو همراه داشتن اصل پاسپورت و گواهینامه بین المللی الزامی است.</li>
                <li>لطفاً در انتخاب شماره ترمینال دقت نمایید و مطمئن شوید که شماره صحیح را انتخاب کرده.اید در صورت مغایرت هزینه اضافی بر عهده شما خواهد بود و ممکن است تاخیر در تحویل خودرو رخ دهد.</li>
                <li>هزینه پارکینگ فرودگاه به عهده مشتری میباشد و در مبلغ اجاره خودرو محاسبه نمیشود لطفاً هنگام تحویل و بازگشت خودرو، هزینه های مربوط به پارکینگ را خودتان پرداخت نمایید.</li>
            </ul>
        </div>
    )
}

export function SocialBox(){
    return(
        <div className="flex justify-between my-12 xl:text-xl md:text-base sm:text-sm text-xs font-bold flex-wrap gap-4">
            <div className="py-3 px-6 lg:w-auto sm:w-[calc(50%-8px)] w-full justify-center bg-[#FFFFFF66] rounded-2xl flex items-center gap-4 text-[#3B82F6] shadow-[inset_-8px_-8px_8px_0_#FFFFFF12,inset_-8px_-8px_8px_0_#C2C2C212,0_4px_14px_-4px_#10B98140]">
                palmrent.com
                <IconGlobalSearch/>
            </div>
            <div className="py-3 px-6 lg:w-auto sm:w-[calc(50%-8px)] w-full justify-center bg-[#FFFFFF66] rounded-2xl flex items-center gap-4 text-[#1E40AF] shadow-[inset_-8px_-8px_8px_0_#FFFFFF12,inset_-8px_-8px_8px_0_#C2C2C212,0_4px_14px_-4px_#1E40AF40]">
                info@palmrent.com
                <IconSmsTracking/>
            </div>
            <div className="py-3 px-6 lg:w-auto sm:w-[calc(50%-8px)] w-full justify-center bg-[#FFFFFF66] rounded-2xl flex items-center gap-4 text-[#7544DC] shadow-[inset_-8px_-8px_8px_0_#FFFFFF12,inset_-8px_-8px_8px_0_#C2C2C212,0_4px_14px_-4px_#7245DD40]">
                Palm.rent
                <IconInstagram/>
            </div>
            <div className="py-3 px-6 lg:w-auto sm:w-[calc(50%-8px)] w-full justify-center bg-[#FFFFFF66] rounded-2xl flex items-center gap-4 text-[#10B981] shadow-[inset_-8px_-8px_8px_0_#FFFFFF12,inset_-8px_-8px_8px_0_#C2C2C212,0_4px_14px_-4px_#10B98140]">
                +9104992043
                <span className="size-8 flex">
                    <IconPhone/>
                </span>
            </div>
        </div>
    )
}