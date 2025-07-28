'use client'

import { useState } from "react";
import { SingleBlogPost } from "../components/RecentBlogPosts";

export default function BlogsPage(){
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
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