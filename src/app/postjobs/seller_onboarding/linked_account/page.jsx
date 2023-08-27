
"use client"
import { AuthContextPro } from '@/Components/AuthProviderFiles/AuthProviderPro';

import React, { Suspense, useContext } from 'react';
import { MdVerifiedUser } from 'react-icons/md'
import Buttonline from '@/Components/Buttonline';
import Link from 'next/link';
import Loading from '../professional_info/loading';




const linkedAccount = () => {


  

    const {userProfile,emailVerifySubmit} = useContext(AuthContextPro)

const datarevovery =     userProfile?.emailVerified
const email = userProfile?.email
console.log(userProfile);



function verifySubmit(e){
e.preventDefault()

emailVerifySubmit()
.then(res=>{
    window.localStorage.setItem('emailForSignIn', email);
    console.log(res);
})
.catch(error=>console.log(error))



}














    return (
        <Suspense fallback={Loading}>
        <>
        <div>
        <Buttonline gives0={true} gives1={true} gives2={true}  />
        </div>





        <div style={{alignItems:"center"}} 
className='sm:flex  gap-3 justify-center mt-16  font-semibold text-gray-600'>

<p>Email Address :</p>

<input disabled={true} type='text' className='border text-center  border-gray-500 rounded-md p-3 mx-1 sm:w-3/12' value={userProfile?.email}></input>
{
    datarevovery? <><p style={{alignItems:"center"}} className={`flex text-success`}><MdVerifiedUser  className='text-3xl text-success'/>
    Verified
    
    </p></>:userProfile?<span className='text-red-700'>Not verified</span>:<span className="loading loading-bars loading-lg"></span>
}


</div>

<div className='text-center mt-8'>

    <button onClick={verifySubmit}  disabled={userProfile?.emailVerified} className='btn bg-black text-white sm:w-2/12'>{

    userProfile?
     <>{userProfile?.emailVerified?"verified":"Verify"}</>
:<>{<span className="loading loading-bars loading-md"></span>}</>

}
</button>
<p className='my-5 font-bold '> -- You can skip it if you want or verify it later Thanks -- </p>


</div>


<div className='sm:flex justify-end mt-20'>
<Link href={"/postjobs/seller_onboarding/account_security"}
 className='sm:w-2/12 mx-10 text-white btn btn-success'>Continue
</Link>
</div>














        </>
        </Suspense>
    );
};

export default linkedAccount;