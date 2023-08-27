"use client"
import { useContext, useEffect } from "react";

import axios from "axios";
import { AuthContextPro } from "../AuthProviderFiles/AuthProviderPro";
import { useRouter } from "next/navigation";




const useMagicAxiosBoss = () => {
 const {logoutProfile} = useContext(AuthContextPro)   
 const compassing  =  useRouter()
   


const axiosMagic = axios.create({
       baseURL:"http://localhost:5000"
   })
   
   

useEffect(()=>{
   axiosMagic.interceptors.request.use((config)=>{
       const token = localStorage.getItem(`JWT-token`)
       if(token){
 config.headers.Authorization=`Bearer ${token}`

} 
       return config
       
   })
},[axiosMagic,logoutProfile,compassing]);




axiosMagic.interceptors.response.use((response)=>response,



async(error)=>{
   if(error.response && (error.response.status === 401 || error.response.status === 403)) {
       await logoutProfile();
       compassing.push('/login')
   }
   
   return Promise.reject(error);
}
)





   return [axiosMagic]
};

export default useMagicAxiosBoss;


























