'use client'
import { useTranslations } from "next-intl";
import { IconDownload } from "../../components/Icons";
import { FineDeposit, PaymentDetail } from "../../components/InformationStep";
import { FinalDetail, PersonalInfoShow, ReservationDetail, SocialBox, VoucherHead } from "../../components/VoucherStep";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { notFound } from 'next/navigation';
import QRCode from 'react-qr-code';




export default function VoucherPage(){
    const [data,setData]= useState(null)
    const [is404,setIs404] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('');
    const [options,setOptions] = useState(['noDeposite','freeDelivery','unlimitedKilometers','freeinsurance'])
    async function fetchData(id){
        await fetch("https://palmrentcar.com/api/car/rent/"+id+"/en/receipt")
        .then((res) => res.json())
        .then((json) => {json.status == 404 ? setIs404(true) : setData(json.data)})
        .catch((err) => console.error(err));
    }
    // const router = useRouter();
    // const { id } = router.query;
    const params = useParams();
    const { id } = params
    console.log(id)
    useEffect(()=>{
        fetchData(id)
        setCurrentUrl(window.location.href);
    },[])
    const t = useTranslations();
    useEffect(()=>{
        if(!data) return
        let optionsHolder = []
        console.log(data)
        console.log(data.item.phone)
        if(data.item.insurance_complete_price == 0){
            optionsHolder.push('freeinsurance')
        }
        if(data.item.car_km != 'yes'){
            optionsHolder.push('unlimitedKilometers')
        }
        if(data.item.car_free_delivery == 'yes'){
            optionsHolder.push('freeDelivery')
        }
        if(data.item.car_deposit != 'yes'){
            optionsHolder.push('noDeposite')
        }
        setOptions(optionsHolder)
    },[data])
    if(is404) {
        notFound()  
    }
    return(
        <>
        {!data?
            <VoucherSkeleton/>
            :
            <div>
                <VoucherHead/>
                <div className="lg:w-[85vw] sm:w-[90vw] w-[95vw] max-w-[1336px] m-auto">
                    <div className="flex sm:flex-row flex-col-reverse flex-wrap gap-4 my-4">
                        <PersonalInfoShow branch={data.item.branch} email={data.item.email} name={data.item.name} phoneNumber={data.item.phone} resCode={data.item.code} resTime={data.item.created_date} />
                        <div className="xl:w-1/3 md:w-3/12 w-full xl:text-base text-xs text-center bg-white rounded-2xl flex flex-col items-center justify-between py-4">
                            <div className="text-[#DF900A]">{t('qrText')}</div>
                            {/* <Image src={'/images/barcode.png'} width={306} height={287} alt=""></Image> */}
                            <QRCode 
                                value={currentUrl}
                                size={200}
                                bgColor="#ffffff"
                                fgColor="#000000"
                                level="Q"
                            />
                            <button className="bg-[#3B82F61A] cursor-pointer rounded-lg flex items-center gap-4 py-2 px-4 text-[#3B82F6] mt-4">
                                <IconDownload/>
                                {t('downloadVoucher')}
                            </button>
                        </div>
                    </div>
                    <ReservationDetail 
                    deliveryPlace={data.item.rent_delivery}
                    from={data.item.rent_from}
                    resDays={data.item.rent_days}
                    returnPlace={data.item.rent_return}
                    to={data.item.rent_to}
                    car_gearbox={data.item.car_gearbox}
                    car_fuel={data.item.car_fuel}
                    bag_count={data.item.car_baggage}
                    person_count={data.item.car_person}
                    car_name={data.item.car_name}
                    car_year={data.item.car_year}
                    options={options}
                    image={data.item.photo}
                    />
                    <div className="border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl my-4 flex-1 bg-white">
                        <PaymentDetail data={data.item} currency={data.currency} borderLess={true} toman={data.toman}/>
                        {data.item.car_deposit == 'yes' && 
                            <FineDeposit price={data.item.car_deposit_price} currency={data.currency} borderLess={true}/>
                        }
                    </div>
                    <FinalDetail data={data.item} currency={data.currency} />
                    <SocialBox/>
                </div>     
            </div>
        }
        </>
    )
}

export function VoucherSkeleton(){
    return(
        <div>
            <div className="my-14 flex flex-col gap-2">
                <div className="animate-skeleton w-full h-20"></div>
                <div className="animate-skeleton w-full h-20"></div>
            </div>
            <div className="lg:w-[85vw] sm:w-[90vw] w-[95vw] max-w-[1336px] m-auto">
                <div className="flex sm:flex-row flex-col-reverse flex-wrap gap-4 my-4 h-96">
                    <div className="flex-1 h-full animate-skeleton rounded-lg">

                    </div>
                    <div className="xl:w-1/3 h-full animate-skeleton md:w-3/12 w-full xl:text-base text-xs text-center bg-white rounded-2xl flex flex-col items-center justify-between py-4">
                    </div>
                </div>
                <div className="flex h-96 bg-white rounded-lg my-8 p-8 gap-8">
                    <div className="w-5/12 animate-skeleton rounded-lg"></div>
                    <div className="flex flex-col h-full gap-2 flex-1">
                        <div className="animate-skeleton h-full rounded-lg"></div>
                        <div className="animate-skeleton h-full rounded-lg"></div>
                        <div className="animate-skeleton h-full rounded-lg"></div>
                        <div className="animate-skeleton h-full rounded-lg"></div>
                        <div className="animate-skeleton h-full rounded-lg"></div>
                    </div>
                </div>
                <div className="p-4 rounded-4xl my-4 flex-1 animate-skeleton h-[600px]"></div>
                <div className="p-4 rounded-4xl my-4 flex-1 animate-skeleton h-[300px]"></div>
                <div className="p-4 rounded-4xl my-4 flex-1 flex gap-8 w-full">
                    <div className="w-full h-20 animate-skeleton rounded-lg"></div>
                    <div className="w-full h-20 animate-skeleton rounded-lg"></div>
                    <div className="w-full h-20 animate-skeleton rounded-lg"></div>
                    <div className="w-full h-20 animate-skeleton rounded-lg"></div>
                    <div className="w-full h-20 animate-skeleton rounded-lg"></div>
                </div>
            </div>     
        </div>
    )
}