import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gradient-to-t from-cyan-200 to-cyan-50">
        <div className="text-center w-1/2 mx-auto py-8 lg:py-16">
          <h1 className="text-[24px] lg:text-[42px] pb-5 font-bold uppercase">
            Know About Free Flow
          </h1>
        </div>
      </div>
      <div className="bg-slate-100 hidden border-b-0 justify-center gap-16">
        <div className="menu py-6 text-lg cursor-pointer hover:text-blue-800">
          <p>Who We Are</p>
        </div>
        <div className="menu py-6 hover:text-blue-800 text-lg cursor-pointer">
          <p>Our Value System</p>
        </div>
      </div>
      {children}
    </>
  );
};

export default AboutLayout;
