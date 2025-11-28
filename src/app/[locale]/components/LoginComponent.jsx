'use client'
import { postData } from "@/app/lib/PostData"
import { removeLeadingZero } from "@/app/lib/removeLeadingZero"
import { changeIsStage2, changePhoneNumber } from "@/redux/slices/loginSlice"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function LoginComponent(){
    const  isStage2 = useSelector((state)=> state.login.isStage2)
    // const [isLoginStage2,setIsLoginStage2] = useState(false)
    return(
        <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
            <LoginBox>
                {!isStage2 ?
                    <LoginStage1/>
                :
                    <LoginStage2/>
                }
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
            <div className="flex justify-center gap-2 text-xs">
                دیدن <Link className="text-[#1E40AF]" href={'#'}>قوانین و مقررات</Link> و <Link href={'#'} className="text-[#1E40AF]">حریم خصوصی</Link>
            </div>
        </div>
    )
}


export function LoginStage1(){
    const  phoneNumber = useSelector((state)=> state.login.phoneNumber)
    const dispacth = useDispatch()
    const [isPhoneValid,setIsPhoneValid] = useState(false)
    function isOnlyDigits(value){
        return /^\d+$/.test(value);
    }
    
    function isValidIranianPhoneNumber(phone) {
        if (!phone) return false;
        const cleaned = phone.toString().replace(/[\s\-\(\)\.]/g, '');
        const patterns = [
            /^9\d{9}$/,
            /^09\d{9}$/,
            /^989\d{9}$/,
            /^\+989\d{9}$/,
            /^00989\d{9}$/
        ];
        
        return patterns.some(pattern => pattern.test(cleaned));
    }
    function inputHandler(newData){
        if(newData.length == 0){
         dispacth(changePhoneNumber(newData))
         setIsPhoneValid(false)
         return
        }
        if(!isOnlyDigits(newData)) return
        setIsPhoneValid(isValidIranianPhoneNumber(newData))
        dispacth(changePhoneNumber(newData))
    }
    function submitHandler(){
        setIsPhoneValid(false)
        let url = 'https://palmrentcar.com/api/login/post/1?mobile=' + removeLeadingZero(phoneNumber)
        postData(url).then(data => {
            setIsPhoneValid(true)
            dispacth(changeIsStage2(true))
        })
        .catch(error => setIsPhoneValid(true));
    }
    return(
        <form onSubmit={(event)=>event.preventDefault()} className="text-[#1A1A1A] flex flex-col gap-2">
            <div className="text-xl font-bold">
                ورود به حساب کاربری
            </div>
            <div className="text-xs">
                لطفا برای ورود به حساب کاربری خود شماره موبایل خود را در کادر زیر وارد نمایید !
            </div>
            <div>
                <span>شماره موبایل</span>
                <div className="border flex flex-row-reverse border-[#B0B0B0] rounded-xl">
                    <select dir="ltr" className="p-2 text-center outline-0" name="" id="">
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                    </select>
                    <input dir="ltr" maxLength={11} value={phoneNumber} onChange={(event)=>inputHandler(event.target.value)} className="text-left border-l w-full outline-0 border-[#919191] p-3" placeholder="091*********" type="text" />
                </div>
            </div>
            <button disabled={!isPhoneValid} onClick={submitHandler} type="submit" className="lg:flex-1 w-full bg-[#3B82F6] text-white h-[52px] py-3 my-3 rounded-xs md:rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50  disabled:cursor-not-allowed">
                ورود به حساب کاربری
            </button>
        </form>
    )
}

export function LoginStage2(){
    const  phoneNumber = useSelector((state)=> state.login.phoneNumber)
    const [isBtnDisabled,setIsBtnDisabled] = useState(true)
    const dispacth = useDispatch()
    const [inputValue,setInputValue] = useState(['','','','',''])
    const submitButton = useRef()
    const inputRef = useRef([])
    const targetIndexRef = useRef()
    function inputChangeHandler(targetIndex,event){
        targetIndexRef.current = targetIndex
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
    useEffect(()=>{
        if(inputValue.join('').length == 5){
            console.log('test')
            setIsBtnDisabled(false)
            if(targetIndexRef.current == 4){
                submitHandler()
            }
        }
    },[inputValue])
    function submitHandler(){
        setIsBtnDisabled(true)
        let url = 'https://palmrentcar.com/api/login/post/2?mobile=' + removeLeadingZero(phoneNumber) + '&verify_code=' + inputValue.join('')
        postData(url).then(data => {
            console.log(data.status)
            if(data.status == 200){

            }
            else{
                alert(data.message)
                setIsBtnDisabled(false)
                dispacth(changeIsStage2(true))
            }
        })
        .catch(error =>{
            alert(error)
            setIsBtnDisabled(false)
        });
    }
    return(
        <div className="text-[#1A1A1A] flex flex-col gap-2">
            <div className="text-xl font-bold">
                کد تایید را وارد کنید
            </div>
            <div className="text-xs">
                کد تایید برای شماره <span>09101284</span> پیامک شد
            </div>
            <div>
                <span>شماره موبایل</span>
                <div className="flex lg:gap-4 md:gap-2 gap-1 flex-row-reverse rounded-xl">
                    {inputValue.map((item,index)=>{
                        return(
                            <input key={index} onClick={()=>inputRef.current[index].select()} ref={(el) => (inputRef.current[index] = el)} onInput={(event)=>inputChangeHandler(index,event)} maxLength={1} className="text-center border ld:rounded-2xl rounded-lg max-w-[70px] lg:text-[40px] text-2xl border-[#B0B0B0] w-full outline-0 p-1" value={inputValue[index]} type="text" />
                        )
                    })}
                </div>
            </div>
            <button disabled={isBtnDisabled} ref={submitButton} onClick={submitHandler} className="lg:flex-1 w-full cursor-pointer bg-[#3B82F6] text-white h-[52px] py-3 my-3 rounded-xs md:rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                تایید
            </button>
        </div>
    )
}
