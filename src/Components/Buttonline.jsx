"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { PiNumberCircleOneFill } from 'react-icons/pi';
import { PiNumberCircleTwoFill } from 'react-icons/pi';
import { PiNumberCircleThreeFill } from 'react-icons/pi';
import { PiNumberCircleFourFill } from 'react-icons/pi';




const Buttonline = ({gives1,gives2,gives3,gives0}) => {

const [match,setmatch] = useState(false)
const [match2,setmatch1] = useState(false)
const [match3,setmatch2] = useState(false)
const [match4,setmatch3] = useState(false)

useEffect(()=>{

const matc1 =  gives0
const matc2 = gives1 
const matc3 =  gives2 
const matc4 =  gives3 

setmatch(matc1)
setmatch1(matc2)
setmatch2(matc3)
setmatch3(matc4)




},[])






    return (
        <>
        <div className='flex mt-6 justify-center border p-3'>


       <Link href={'/postjobs/seller_onboarding/personal_info'}>  <button style={{alignItems:'center'}} className={`mx-2 font-semibold flex ${match && "text-success"} `}>
            <PiNumberCircleOneFill
      className={`text-3xl mx-2 ${match?"text-success":"text-gray-500"}  `}/>
            Personal Info
            <BiRightArrow  className={`text-3xl mx-2 ${match?"text-success":"text-gray-500" } `}   />
            </button></Link> 


           <Link href={'/postjobs/seller_onboarding/professional_info'}><button style={{alignItems:'center'}} className={`mx-2 font-semibold flex ${match2?"text-success":"text-gray-500"}`}>

            <PiNumberCircleTwoFill  className='text-3xl mx-2'/>
            Professional Info
            <BiRightArrow className={`text-2xl mx-1  ${match2?"text-success":"text-gray-500"}`} />
            </button></Link> 
            




           <Link href={'/postjobs/seller_onboarding/linked_account'}> <button style={{alignItems:'center'}} className={`mx-2 font-semibold flex ${match3?"text-success":"text-gray-500"}`}>

            <PiNumberCircleThreeFill   className={`text-3xl mx-2 ${match3?"text-success":"text-gray-500"}  `}/>
            Linked Accounts
            <BiRightArrow className={`text-2xl mx-1  ${match3?"text-success":"text-gray-500"}`} />
            </button> </Link>



            <Link href={'/postjobs/seller_onboarding/account_security'}><button style={{alignItems:'center'}} className={`mx-2 font-semibold flex ${match4?"text-success":"text-gray-500"}`}>
            <PiNumberCircleFourFill  className={`text-3xl mx-2 ${match4?"text-success":"text-gray-500"}  `}/>
            Acount Security
            <BiRightArrow className={`text-2xl mx-1  ${match4?"text-success":"text-gray-500"}`} />
            </button></Link>
        </div>
        </>
    );
};

export default Buttonline;


