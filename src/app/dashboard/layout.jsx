import Image from "next/image";
import logo from "@/assets/icon.png";
import React from "react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Page content here */}
          <div className="my-5">{children}</div>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-blue-700 text-white drawer-button lg:hidden"
          >
            Menu
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 lg:ml-5 rounded-xl lg:my-5 w-64 h-full bg-gradient-to-t from-blue-600 to-cyan-700 text-white text-lg">
            {/* Sidebar content here */}
            <Link href="/">
              <div className="flex cursor-pointer items-center mt-4 mb-10 mx-auto gap-2 border-b-2 border-slate-200 pb-5">
                <Image width={50} height={50} src={logo} alt="logo"></Image>
                <h1 className="text-3xl text-slate-50 font-bold">Free Flow</h1>
              </div>
            </Link>
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Clients</a>
            </li>
            <li>
              <a>Invoices</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
