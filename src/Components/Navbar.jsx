"use client"
import Image from "next/image";
import  { useContext } from "react";
import logo from "../assets/icon.png";
import Link from "next/link";
import { AuthContextPro } from "./AuthProviderFiles/AuthProviderPro";

const Navbar = () => {
const {userProfile,logoutProfile} = useContext(AuthContextPro)


  return (
    <>
      <div className="navbar sticky top-0 z-10 bg-gradient-to-r drop-shadow from-slate-100 to-cyan-100 py-3 px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/findjobs">Find Jobs</Link>
              </li>
              <li>
                <Link href="/freelancer">Freelancer</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">SignUp</Link>
              </li>
            </ul>
            
          </div>
          <div className="flex gap-20">
            <div>
              <Link
                href="/"
                className="btn btn-ghost normal-case hover:bg-transparent text-xl"
              >
                <Image
                  width={30}
                  src={logo}
                  height={30}
                  alt="thumbnail"
                ></Image>{" "}
                Free Flow
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">

              <ul className="menu menu-horizontal text-[16px] font-medium px-1">
                <li className="border-x-2 border-black">
                  <Link href="/findjobs">Find Jobs</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/freelancer">Freelancer</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/about">About</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/solutions">Solutions</Link>
                </li>


              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn bg-cyan-600 hover:bg-cyan-900 text-white">
            Post Jobs
          </button>
          <div className="hidden md:block">
            <ul className="flex menu menu-horizontal gap-2 text-[16px] font-medium">


            
               { userProfile? <>
                
          <li  data-tip={userProfile?.displayName} className="tooltip  tooltip-bottom tooltip-success">
        <Image width={200} height={200} alt="" className='w-12 h-12  rounded-full mx-2 border-purple-700 border-2 p-1 ' src={userProfile?.photoURL} /></li>

                
                
                
                <li onClick={logoutProfile} className="btn bg-red-400 text-white ">Logout</li>

                </>
:<>
              
              <li className="border-r-2 px-2 border-black">
                <Link href={"/register"}>Signup</Link>
              </li>
              <li className="pr-2">
                <Link href={"/login"}>Login</Link>
              </li>

              </>
               }



            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
