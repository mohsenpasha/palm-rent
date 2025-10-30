'use client'
import CarCategorySection from "@/app/[locale]/components/CarCategorySection";
import CommentSection from "@/app/[locale]/components/CommentSection";
import CommonQuestionSection from "@/app/[locale]/components/CommonQuestionSection";
import { RecentBlogPosts } from "@/app/[locale]/components/RecentBlogPosts";
import SearchBar from "@/app/[locale]/components/SearchBar";
import { SearchBox } from "@/app/[locale]/components/SearchBox";
import SearchFilterPopup from "@/app/[locale]/components/SearchFilterPopup";
import SearchPopup from "@/app/[locale]/components/SearchPopup";
import SingleCar from "@/app/[locale]/components/SingleCar";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import BranchDescriotion from "@/app/[locale]/components/BranchDescription";
import CarBrandSection from "@/app/[locale]/components/CarBrandSection";
import MoreTextSection from "@/app/[locale]/components/BranchMoreTextSection";
import SkeletonSingleCar from "../../components/SkeletonSingleCar";
import { addCarList, clearCarList } from "@/redux/slices/carListSlice";
import { changeSelectedCity } from "@/redux/slices/globalSlice";
import { postData } from "@/app/lib/PostData";
import { changePriceRange, changeSearchCurrency } from "@/redux/slices/searchSlice";


export default function BranchPage(){
    const dispatch = useDispatch()
    const searchRef = useRef()
    const loadingRef = useRef(true)
    const firstTime = useRef(true)
    const params = useParams()
    const [isLoading,setIsLoading] = useState(false)
    const [hasMore,setHasMore] = useState(true)
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    const isSearchOpen = useSelector((state) => state.global.isSearchOpen)
    const isFilterOpen = useSelector((state) => state.global.isFilterOpen)
    const cities = useSelector((state) => state.global.cities)
    const carList = useSelector((state) => state.carList.carList)
    const search_title = useSelector((state) => state.search.search_title)
    const search_sort = useSelector((state) => state.search.sort)
    const priceRange = useSelector((state) => state.search.selectedPriceRange)
    const selectedCategories = useSelector((state) => state.search.selectedCategories)
    const carDates = useSelector((state) => state.global.carDates)

    // const { cityName } = await params;
    const cityName = params['cityName']
    console.log(cities[cityName])
    const [recivedData,setRecivedData] = useState()
    function scrollHandler(){
        if(!hasMore || loadingRef.current) return
        if(searchRef.current.getBoundingClientRect().bottom - window.innerHeight <= 100){
            if(!hasMore) return
            setIsLoading(true)
            loadingRef.current = true
        }
    }
    useEffect(()=>{
        dispatch(changeSelectedCity(cities[cityName]))
        window.addEventListener('scroll',scrollHandler)
        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll',scrollHandler)
        }
    },[])
    useEffect(()=>{
        setRecivedData(null)
        dispatch(clearCarList())
        setIsLoading(true)
        firstTime.current = true
        loadingRef.current = true
    },[search_title,search_sort,priceRange,selectedCategories])
    function fetchData(){
        if(!recivedData && !firstTime.current) return
        let url = 'https://palmrentcar.com/api/car/filter/en'
        // dispatch(changeCarDates([params.from.split(' ')[0],params.to.split(' ')[0]]))
        // dispatch(changeBranchId(branch_id))
        let payload = {
            from : carDates[0],
            to : carDates[1],
            branch_id : cities[cityName],
        }
        if(search_title){
            payload.search_title = search_title
        }
        if(search_sort){
            payload.sort = search_sort
        }
        if(priceRange){
            payload.min_p = Math.min(...priceRange)
            payload.max_p = Math.max(...priceRange)
        }
        if(selectedCategories.length != 0){
            payload['cat_id'] = selectedCategories
        }
        firstTime.current = false
        if(!!recivedData){
            const currentPage = parseInt(recivedData.data.page)
            const perPage = parseInt(recivedData.data.per_page)
            const carCount = parseInt(recivedData.data.count_cars)
            const carRecivedCount = (currentPage * perPage) + 3
            if(carRecivedCount >= carCount){
                setHasMore(false)
                setIsLoading(false)
                loadingRef.current = false
                return
            }
            payload.page = currentPage + 1
        }
        postData(url,payload)
        .then(data => {
            setRecivedData(data)
            setIsLoading(false)
            loadingRef.current = false
        })
    .catch(error => console.error('خطا:', error));
    }
    useEffect(()=>{
            if(!recivedData) return
            dispatch(changePriceRange([recivedData.data.max_price,recivedData.data.min_price]))
            dispatch(changeSearchCurrency(recivedData.data.currency))
            dispatch(addCarList(recivedData.data.cars))
        },[recivedData])
    useEffect(()=>{
        if(!carDates) return
        dispatch(clearCarList())
        setRecivedData(null)
        setIsLoading(true)
    },[carDates])
    useEffect(()=>{
        if(!isLoading) return
        fetchData()
    },[isLoading])
    const [rules,setRules] = useState([
          {
              q:'قیمت بنزین در دبی چقدر است؟',
              a:'قیمت بنزین در دبی در ژانوبه 2024\nای پلاس (اکتان 97) 2/77درهم،\nاسپشیال (اکتان 95) 2/85 درهم (پیشنهادی)\nسوپر (اکتان 98) 2/96درهم\nدیزل 3/19 درهم است.'
          },
          {
              q:'آیا می‌توانم در دبی بدون گواهی رانندگی خودرو اجاره کنم؟',
              a:'رانندگی بدون گواهینامه در اجاره خودرو غیرقانونی است  و با جریمه نقدی یا حتی حبس ممکن است متجاوز مواجه شود. همچنین، در صورت وقوع حادثه، بیمه هزینه‌های خسارت را پوشش نمی‌دهد. رعایت قوانین حائز اهمیت است تا مشکلات حقوقی و مالی جلوگیری شود.'
          },
          {
              q:'چگونه و از کجا می‌توانم سیم‌کارت بخرم؟ و آیا واقعاً نیاز به آن دارم؟',
              a:'به طور معمول، در فرودگاه ممکن است یک سیم‌کارت رایگان با ۲ گیگابایت اینترنت به شما هدیه داده شود. اما اگر این امکان وجود ندارد، می‌توانید از غرفه‌های شرکت اتصالات که در تمام نقاط دبی فعالیت دارند، سیم‌کارت خود را تهیه کنید. برای یک بسته اینترنتی ۷ روزه، هزینه تقریبی میان ۷۰ الی ۱۰۰ درهم است. حتماً توصیه می‌شود که سیم‌کارت را دریافت کنید، زیرا برای استفاده از سرویس‌هایی مانند گوگل‌مپ و یافتن مسیرها، اتصال به اینترنت ضروری است.'
          },
      ])
    useEffect(()=>{
        NProgress.start()
        const timeout = setTimeout(() => {
        NProgress.done()
        }, 300)
        return () => clearTimeout(timeout)
    },[])
    return(
        <>
        <div className="xl:w-[85vw] w-[95vw] max-w-[1336px] block m-auto">
            <div>
                {!isUnderLg && 
                    <Image className="object-contain" src={'/images/search-bg.png'} height={320} width={1440} alt=""></Image>
                }
                <div className="lg:-mt-[120px] mt-8">
                    <SearchBar/>
                </div>
            </div>
            <BranchDescriotion/>
            <CarCategorySection/>
            <CarBrandSection/>
            <div id="search-section">
                <SearchBox/>
                <div ref={searchRef} className="flex flex-wrap gap-4">
                    {carList.map((item,index)=>{
                        return(
                            <div key={index} className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                                <SingleCar data={item}/>
                            </div>
                        )
                    })}
                    {hasMore && isLoading &&
                        Array(3).fill(null).map((_,index)=>{
                            return(
                                <div key={index} className="flex xl:w-[calc(33%-12px)] md:w-[calc(50%-8px)] w-full">
                                    <SkeletonSingleCar singlePrice={true}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <CommentSection/>
            <CommonQuestionSection rules={rules} setRules={setRules}/>
            <RecentBlogPosts/>
            <MoreTextSection/>
        </div>
            {isSearchOpen && 
                <SearchPopup/>
            }
            {isFilterOpen && 
                <SearchFilterPopup/>
            }
        </>
    )
}