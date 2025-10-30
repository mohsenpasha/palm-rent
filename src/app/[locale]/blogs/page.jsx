'use client'

import { useEffect, useRef, useState } from "react";
import { SingleBlogPost, SkeletonSingleBlogPost } from "../components/RecentBlogPosts";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useLocale, useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, changeHasMore, changeNextUrl, changePageNumber, resetBlog } from "@/redux/slices/blogSlice";

export default function BlogsPage(){
    const locale = useLocale();
    const  blogs = useSelector((state)=> state.blog.blogs)
    const  hasMore = useSelector((state)=> state.blog.hasMore)
    const  nextUrl = useSelector((state)=> state.blog.nextUrl)
    const  pageNumber = useSelector((state)=> state.blog.pageNumber)
    const blogRef = useRef()
    const t = useTranslations();
    const dispacth = useDispatch()
    // const [blogs,setBlogs] = useState()
    const [isLoading,setIsLoading] = useState(false)
    function getData(){
        if(!hasMore) return
        fetch("https://palmrentcar.com/api/blogs/" + locale + `?page=${pageNumber}`)
        .then((res) => res.json())
        .then((json) => {
            setIsLoading(false)
            dispacth(addBlog(json.data.items))
            dispacth(changeHasMore(json.data.has_more))
        })
        .catch((err) => console.error(err));
    }
    function scrollHandler(){
        if(!hasMore || isLoading) return
        if(blogRef.current.getBoundingClientRect().bottom - window.innerHeight <= 100){
            if(!hasMore) return
            setIsLoading(true)
        }
    }
    useEffect(()=>{
        if(!hasMore){
            setIsLoading(false)
        }
    },[hasMore])
    useEffect(()=>{
        if(!isLoading) return
        dispacth(changePageNumber(pageNumber + 1))
    },[isLoading])
    useEffect(()=>{
        setIsLoading(false)
    },[blogs])
    useEffect(()=>{
        if(!isLoading) return
        getData()
    },[pageNumber])
    function reset_blog(){
        dispacth(resetBlog())
        setTimeout(()=>{
            getData()
        },200)
    }
    useEffect(()=>{
        NProgress.start()
        const timeout = setTimeout(() => {
            NProgress.done()
        }, 300)
        reset_blog()
        // dispacth(changeNextUrl("https://palmrentcar.com/api/blogs/" + locale + `?page=${pageNumber}`))
        window.addEventListener('scroll',scrollHandler)
        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll',scrollHandler)
        }
        },[])
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="py-4">
                    <div className="text-center py-4 md:text-xl sm:text-lg text-base font-bold text-[#3B82F6]">
                        {t('blog')}
                    </div>
                    <div ref={blogRef} className="flex w-full flex-wrap gap-2">
                        {!blogs ?
                        Array(8).fill(null).map((_,index)=>{
                            return(
                                <div key={index} className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                    <SkeletonSingleBlogPost/>
                                </div>
                            )
                        })
                    :
                        blogs?.map((item,index)=>{
                            return(
                                <div key={index} className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                    <SingleBlogPost title={item.title} description={item.text} photo={item.photo} smallFont={true} bigPost={true}/>
                                </div>
                        )
                    })}
                        {
                            hasMore && isLoading &&  Array(4).fill(null).map((_,index)=>{
                            return(
                                <div key={index} className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                    <SkeletonSingleBlogPost/>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}