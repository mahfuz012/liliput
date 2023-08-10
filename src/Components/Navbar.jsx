import Image from "next/image";
import React from "react";
import logo from "../assets/icon.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar sticky top-0 z-10 bg-gradient-to-r from-slate-100 to-cyan-100 py-4">
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
                <a>Find Jobs</a>
              </li>
              <li>
                <a>Freelancer</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Solutions</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-20">
            <div>
              <a className="btn btn-ghost normal-case text-xl">
                <Image
                  width={30}
                  src={logo}
                  height={30}
                  alt="thumbnail"
                ></Image>{" "}
                Free Flow
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal text-[16px] px-1">
                <li className="border-r-2 border-black">
                  <a>Find Jobs</a>
                </li>
                <li className="border-r-2 border-black">
                  <a>Freelancer</a>
                </li>
                <li className="border-r-2 border-black">
                  <a>About</a>
                </li>
                <li className="border-r-2 border-black">
                  <a>Solutions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn bg-cyan-600 text-white">Post Jobs</button>
          <div>
            <ul className="flex menu menu-horizontal gap-2 text-[16px]">
              <li className="border-r-2 px-2 border-black">
                <a>Signup</a>
              </li>
              <li className="pr-2">
                <a>login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
