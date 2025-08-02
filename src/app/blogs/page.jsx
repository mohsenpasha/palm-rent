'use client'

import { useEffect, useState } from "react";
import { SingleBlogPost } from "../components/RecentBlogPosts";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function BlogsPage(){
    useEffect(()=>{
            NProgress.start()
            const timeout = setTimeout(() => {
            NProgress.done()
            }, 300)
            return () => clearTimeout(timeout)
        },[])
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="py-4">
                    <div className="text-center py-4 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]">
                        مجله پالم رنت
                    </div>
                    <div className="flex">
                        <div className="flex w-full flex-wrap gap-2">
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            <div className="lg:w-[calc(25%-8px)] md:w-[calc(33%-8px)] sm:w-[calc(50%-4px)] w-full border-[1px] border-[#0000001f] p-4 rounded-lg bg-white">
                                <SingleBlogPost smallFont={true} bigPost={true}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}