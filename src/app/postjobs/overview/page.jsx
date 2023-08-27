"use client"
import Image from 'next/image';
import Link from 'next/link';


import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BsFillClipboardCheckFill, BsPersonVcard } from 'react-icons/bs';
import { GrSecure } from 'react-icons/gr';



const overview = () => {












    return (
        <>

        <div className='sm:flex'>

        <div className='sm:w-4/12  p-5'>
       <Image width={450} height={800} src={"https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"}
       
       className=' h-[500px] rounded-2xl' alt="" />
        </div>



        <div className='sm:w-7/12  p-5'>
<h1 className='text-3xl mt-10 text-gray-600 font-semibold'>What makes a successful <span className='text-bold text-red-500'>Free-Flow</span> profile?</h1>
<h1 className='my-3 text-gray-700'>Your first impression matters! Create a profile that will stand out from the crowd on Fiverr</h1>

<div className=' mt-10 sm:flex gap-5'>

<div className='border sm:w-3/12 p-5 rounded-2xl'>
<BsPersonVcard className='text-6xl text-indigo-400' />
<p className='mt-4 text-sm text-gray-700'>Take your time in creating your profile so it’s exactly as you want it to be.</p>
</div>

<div className='border sm:w-3/12 p-5 rounded-2xl'>
<BsFillClipboardCheckFill className='text-6xl text-pink-400' />
<p className='mt-4 text-sm text-gray-700'>Accurately describe your professional skills to help you get more work.</p>
</div>

<div className='border sm:w-3/12 p-5 rounded-2xl'>
<GrSecure className='text-6xl ' />
<p className='mt-4 text-sm text-gray-700'>You might need to verify your ID for community security</p>
</div>

<div className='border sm:w-3/12 p-5 rounded-2xl'>
<AiOutlineLink className='text-6xl text-green-400' />
<p className='mt-4 text-sm text-gray-700'>Add credibility by linking out to your relevant professional networks.</p>
</div>
</div>


<div className='mt-16'>
 <Link href={'/postjobs/seller_onboarding/personal_info'}><button className='btn btn-success text-white me-4'>Continue</button></Link>
    <Link href={'/postjobs'} className='text-blue-600'>Back</Link>
</div>


</div> 
</div>


       
       
 


        </>
    );
};

export default overview;