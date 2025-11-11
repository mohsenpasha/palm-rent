'use client'
import Image from "next/image";
import { IconBarcode, IconCalender2, IconCalenderTick, IconClock, IconContact, IconDownload, IconEmail, IconGlobalSearch, IconInfo2, IconInstagram, IconLocation, IconLocationTick, IconPerson2, IconPhone, IconReceipt, IconSmsTracking, IconTick2 } from "./Icons";
import { FineDeposit, PaymentDetail } from "./InformationStep";
import { useEffect, useState } from "react";
import { SingleCarOptions } from "./SingleCar";
import { useTranslations } from "next-intl";


function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString('fa-IR'); // فرمت فارسی
}


export function VoucherHead(){
    const t = useTranslations();
    return(
        <>
            <div className="flex justify-center my-4 items-center gap-2">
                <span className="lg:size-20 md:size-16 sm:size-12 size-10 text-[#10B981] inline-block">
                    <IconTick2/>
                </span>
                <div className="lg:text-xl md:text-lg sm:text-base text-sm font-bold text-center">
                    <div className="text-[#10B981] lg:text-[40px] md:text-2xl sm:text-xl text-lg">{t('resTitle')}</div>
                    <div>{t('resSubtitle')}</div>
                </div>
            </div>
            <div className="w-full lg:h-[80px] h-[66px] bg-[#EBEBEB] my-6 relative flex justify-center">
                <div className="absolute top-0 right-0 lg:w-[120px] md:w-[80px] w-[110px] bg-[url('/images/voucher-header-side.png')] bg-cover h-full"></div>
                <div className="absolute top-0 left-0 rotate-180 lg:w-[120px] md:w-[80px] w-[110px] bg-[url('/images/voucher-header-side.png')] bg-cover h-full"></div>
                <div className="lg:w-[calc(100%-200px)] md:w-[calc(100%-120px)] sm:w-[calc(100%-120px)] flex md:justify-between justify-center items-center text-[#383838] font-bold xl:text-lg lg:text-sm md:text-xs text-xs">
                    <div className="md:flex hidden">{t('bannerTitle')}</div>
                    <div className="flex items-center">
                        <Image className="filter-[invert(1)]" src={'/images/logo.png'} width={120} height={33} alt=""></Image>
                    </div>
                    <div className="md:flex hidden">{t('bannerTitle')}</div>
                </div>
            </div>
        </>
    )
}
export function PersonalInfoShow({name,resTime,phoneNumber,resCode,email,branch}){
    const [dateFormated,setDateFormated] = useState(['',''])
    useEffect(()=>{
        setDateFormated(formatDate(resTime).split(','))
    },[])
    const t = useTranslations();
    return(
        <div className="border flex flex-col border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl flex-1 bg-white">
            <div className="flex items-center lg:text-lg md:text-sm text-xs font-semibold gap-2">
                <IconContact/>
                {t('personalInfo')}
            </div>
            <div className="flex w-full flex-wrap bg-[#F8F8F8] rounded-2xl my-2 text-[#545454]">
                <PersonalInfoShowSingle title={
                    <>
                        <IconPerson2/>
                        {t('nameLastname')}:
                    </>
                } value={name}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconClock/>
                        {t('resTime')}
                    </>
                } value={dateFormated[1] + ' - ' + dateFormated[0]}/>
                <PersonalInfoShowSingle title={
                    <>
                        <span className="size-8">
                            <IconPhone/>
                        </span>
                        {t('phoneNumber')}:
                    </>
                } value={phoneNumber}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconBarcode/>
                        {t('resCode')}:
                    </>
                } value={resCode}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconEmail/>
                        {t('email')}:
                    </>
                } value={email}/>
                <PersonalInfoShowSingle title={
                    <>
                        <IconLocationTick/>
                        {t('branch')}:
                    </>
                } value={t(branch.toLowerCase())}/>
            </div>
        </div>
    )
}

export function PersonalInfoShowSingle({title,value}){
    return(
        <div className="sm:w-1/2 w-full sm:border-l-[1px] even:border-l-0 border-b-[1px] last:border-b-0 sm:nth-[5]:border-b-0 border-[#0000001f] flex items-center justify-between lg:py-8 py-4 px-4 lg:text-sm text-xs">
            <div className="flex gap-2 items-center">
                {title}
            </div>
            <div className="text-black">
                {value}
            </div>
        </div>
    )
}

export function ReservationDetail({from,to,deliveryPlace,returnPlace,resDays,car_gearbox,car_fuel,bag_count,person_count,options=[],car_name,car_year,image}){
    const [fromDate,setFromDate] = useState(['',''])
    const [toDate,setToDate] = useState(['',''])
    useEffect(()=>{
       setFromDate(formatDate(from).split(','))
       setToDate(formatDate(to).split(','))
    },[])
    const t = useTranslations();
    // const [options,setOptions] = useState(['noDeposite','freeDelivery','unlimitedKilometers','freeinsurance'])
    return(
        <div className="border flex md:flex-nowrap flex-wrap lg:gap-12 gap-6 border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl flex-1 bg-white">
            <div className="md:w-1/2 w-full flex flex-col gap-4">
                <div className="flex justify-between">
                    <div className="flex gap-2 lg:text-lg md:text-sm text-xs font-semibold items-center">
                        <IconReceipt/>
                        {t('resDetail')}
                    </div>
                    <div>
                        {car_name + ' ' + car_year}
                    </div>
                </div>
                <div className="relative w-full max-h-[350px] animate-skeleton">
                    <Image className={`rounded-lg w-full h-full object-cover`} src={image} width={581} height={307} alt=''></Image>
                    <div className="flex text-[#0B835C] text-[10px] absolute gap-2 text-nowrap top-2 rtl:right-2 ltr:left-2 w-full overflow-hidden flex-wrap">
                        {options.map((item,index)=>{
                            return(
                                <span key={index} className="py-1 px-2 rounded-4xl bg-white">{t(item)}</span>
                            )
                        })}
                    </div>
                </div>
                <div className="sm:w-10/12 w-full m-auto">
                    <SingleCarOptions data={{gasType:car_fuel,gearBox:String(car_gearbox),suitcase:bag_count,passengers:person_count}} />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-around gap-2">
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconCalenderTick/>
                    </span>
                    {t('deliveryTD')} :
                 </>   
                } value={fromDate[1] + ' - ' + fromDate[0]}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconCalenderTick/>
                    </span>
                    {t('returnTD')} :
                 </>   
                } value={toDate[1] + ' - ' + toDate[0]}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C] size-8">
                        <IconLocation/>
                    </span>
                    {t('deliveryLoc')}
                 </>   
                } value={t(String(deliveryPlace))}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconLocationTick/>
                    </span>
                    {t('returnLoc')}
                 </>   
                //  t('location2')
                } value={t(returnPlace)}/>
                <SingleReservationDetail title={
                 <>
                    <span className="text-[#7C7C7C]">
                        <IconCalender2/>
                    </span>
                    {t('resDayCount')}
                 </>   
                } value={resDays + " " + t('days')}/>
            </div>
        </div>
    )
}

export function SingleReservationDetail({title,value}){
    return(
        <div className="flex bg-[#F4F4F4] rounded-2xl lg:py-4 py-3 lg:px-6 md:px-4 px-2 xl:text-base lg:text-sm sm:text-xs text-xs items-center justify-between">
            <div className="flex items-center lg:gap-4 gap-2">
                {title}
            </div>
            <div className="text-[#545454]">
                {value}
            </div>
        </div>
    )
}

export function FinalDetail({data,currency}){
    const [startDate,setStartDate]  = useState([])
    const [endDate,setEndDate]  = useState([])
    useEffect(()=>{
        setEndDate(formatDate(data.rent_from).split(','))
        setStartDate(formatDate(data.rent_to).split(','))

    },[])
    const t = useTranslations();
    return(
        
        <div className="border flex gap-6 border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl flex-1 bg-white flex-col xl:text-base lg:text-sm md:text-xs text-xs">
            <div className="flex gap-2 items-center text-black lg:text-lg md:text-sm text-xs font-semibold">
                <IconInfo2/>
                {t('additionalInformation')}
            </div>
            <ul className="list-disc rtl:pr-6 ltr:pl-6 text-[#1B3A9F]">
                <li>اجاره یک دستگاه {data.car_name}  {data.car_year} </li>
                <li>{t('from')} {startDate[1] + ' - ' + startDate[0]} {t('to')} {endDate[1] + ' - ' + endDate[0]} {t('for')} {data.rent_days} {t('days')}</li>
                <li>{t('debt')} : {data.balance} {t(currency)}</li>
            </ul>
            <ul className="list-disc rtl:pr-6 ltr:pl-6 text-[#333333] flex flex-col gap-4">
                <li>{t('additionalInfo1')}</li>
                <li>{t('additionalInfo2')}</li>
                <li>{t('additionalInfo3')}</li>
                <li>{t('additionalInfo4')}</li>
                <li>{t('additionalInfo5')}</li>
            </ul>
        </div>
    )
}

export function SocialBox(){
    return(
        <div className="flex justify-between my-12 xl:text-lg md:text-sm sm:text-xs text-xs font-bold flex-wrap gap-4">
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