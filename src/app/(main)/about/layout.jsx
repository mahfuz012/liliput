import Link from "next/link";
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gradient-to-t from-cyan-200 to-cyan-50">
        <div className="text-center w-1/2 mx-auto py-10">
          <h1 className="text-[24px] lg:text-[42px] pb-5 font-bold">
            Know About Free Flow
          </h1>
        </div>
      </div>
      <div className="flex py-5 border-b-2 justify-around">
        <Link href="/about">
          <div className="menu text-lg font-semibold cursor-pointer hover:text-blue-800">
            <p>Who We Are</p>
          </div>
        </Link>
        <Link href="/about/values">
          <div className="menu hover:text-blue-800 text-lg font-semibold cursor-pointer">
            <p>Our Value System</p>
          </div>
        </Link>
      </div>
      {children}
    </>
  );
};

export default AboutLayout;
