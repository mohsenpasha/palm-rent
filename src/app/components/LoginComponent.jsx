'use client'
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

export default function LoginComponent(){
    return(
        <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-[#F6F6F6]">
            <LoginBox>
                {/* <LoginStage1/> */}
                <LoginStage2/>
            </LoginBox>
        </div>
    )
}

export function LoginBox({children}){
    return(
        <div className="rounded-4xl bg-[#FFFFFF] flex p-8 flex-col gap-4 w-[487px]]">
            <Link className="w-full flex justify-center" href={'#'}>
                <Image className="filter-[invert(1)]" src="/images/logo.png" width={170} height={76} alt="logo"/>
            </Link>
            {children}
            <div className="flex justify-center gap-2 text-sm">
                دیدن <Link className="text-[#1E40AF]" href={'#'}>قوانین و مقررات</Link> و <Link href={'#'} className="text-[#1E40AF]">حریم خصوصی</Link>
            </div>
        </div>
    )
}

export function LoginStage1(){
    return(
        <div className="text-[#1A1A1A] flex flex-col gap-2">
            <div className="text-2xl font-bold">
                ورود به حساب کاربری
            </div>
            <div className="text-sm">
                لطفا برای ورود به حساب کاربری خود شماره موبایل خود را در کادر زیر وارد نمایید !
            </div>
            <div>
                <span>شماره موبایل</span>
                <div className="border-[1px] flex flex-row-reverse border-[#B0B0B0] rounded-xl">
                    <select dir="ltr" className="p-2 text-center outline-0" name="" id="">
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                    </select>
                    <input className="text-left border-l-[1px] w-full outline-0 border-[#919191] p-3" placeholder="091*********" type="text" />
                </div>
            </div>
            <button className="lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] py-3 my-3 rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                ورود به حساب کاربری
            </button>
        </div>
    )
}

export function LoginStage2(){
    const [inputValue,setInputValue] = useState(['','','','',''])
    const submitButton = useRef()
    const inputRef = useRef([])
    function inputChangeHandler(targetIndex,event){
        setInputValue(
            inputValue.map((item,index)=>{
                if(index == targetIndex && /^\d+$/.test(event.target.value)){
                    return event.target.value  
                }
                else{
                    return item
                }
            })
        )
        if(/^\d+$/.test(event.target.value)){
            if(inputRef.current.length - 1 == targetIndex){
                // submitButton.click()
                inputRef.current[targetIndex].blur()

            }
            else{
                inputRef.current[targetIndex + 1].focus()
                inputRef.current[targetIndex + 1].select()
            }
        }
    }

    return(
        <div className="text-[#1A1A1A] flex flex-col gap-2">
            <div className="text-2xl font-bold">
                کد تایید را وارد کنید
            </div>
            <div className="text-sm">
                کد تایید برای شماره <span>09101284</span> پیامک شد
            </div>
            <div>
                <span>شماره موبایل</span>
                <div className="flex lg:gap-4 md:gap-2 gap-1 flex-row-reverse rounded-xl">
                    {inputValue.map((item,index)=>{
                        return(
                            <input key={index} onClick={()=>inputRef.current[index].select()} ref={(el) => (inputRef.current[index] = el)} onInput={(event)=>inputChangeHandler(index,event)} maxLength={1} className="text-center border-[1px] ld:rounded-2xl rounded-lg max-w-[70px] lg:text-[40px] text-3xl border-[#B0B0B0] w-full outline-0 p-1" value={inputValue[index]} type="text" />
                        )
                    })}
                </div>
            </div>
            <button ref={submitButton} className="lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] py-3 my-3 rounded-xs md:rounded-lg flex items-center justify-center gap-2">
                تایید
            </button>
        </div>
    )
}
