import React from "react";
import pic from "@/assets/value_center@2x.png";
import Image from "next/image";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandHoldingHand, FaHandsPraying } from "react-icons/fa6";
export const metadata = {
  title: "About Us | Free Flow",
};

const ValuesPage = () => {
  return (
    <>
      <div className="py-10">
        <div className="text-center mx-auto py-10 px-5 lg:px-20">
          <h1 className="text-[18px] mx-auto border-b-2 border-blue-800 w-1/4 pb-3 mb-5 lg:text-[32px] font-semibold">
            Our Value System
          </h1>
          <p>
            Our values drive everything we do, from the technology we use to the
            people we hire.
          </p>
        </div>
        <div className="grid grid-cols-1 my-10 lg:grid-cols-3 lg:justify-items-center gap-x-4 gap-y-10  px-2 lg:px-20">
          <div className="border-[1px] border-blue-500 rounded-3xl flex lg:gap-10 items-center px-5 lg:py-10">
            <div className="lg:pl-3">
              <h2 className="mb-2 lg:text-xl font-semibold">Trust</h2>
              <p>
                Nurturing a sense of confidence through transparent and secure
                transactions.
              </p>
            </div>
            <div className="border-2 border-gray-100 rounded-full drop-shadow-sm p-4 my-4">
              <FaRegHandshake className="h-12 w-12 text-blue-800" />
            </div>
          </div>
          <div className="lg:row-span-2 self-center hidden lg:block">
            <Image src={pic} width={320} height={277} alt="value"></Image>
          </div>
          <div className="border-[1px] border-blue-500 rounded-3xl flex lg:gap-10 items-center px-5 lg:py-10">
            <div className="lg:pl-3">
              <h2 className="mb-2 lg:text-xl font-semibold">Respect</h2>
              <p>
                Welcoming professionals from all walks of life and recognizing
                their individual needs.
              </p>
            </div>
            <div className="border-2 border-gray-100 rounded-full drop-shadow-sm p-4 my-4">
              <FaHandsPraying className="h-12 w-12 text-blue-800" />
            </div>
          </div>
          <div className="border-[1px] border-blue-500 rounded-3xl flex lg:gap-10 items-center px-5 lg:py-10">
            <div className="lg:pl-3">
              <h2 className="mb-2 lg:text-xl font-semibold">Accountability</h2>
              <p>
                Encouraging ownership of actions and interactions to ensure
                harmony on Guru.
              </p>
            </div>
            <div className="border-2 border-gray-100 rounded-full drop-shadow-sm p-4 my-4">
              <FaHandHoldingHand className="h-12 w-12 text-blue-800" />
            </div>
          </div>
          <div className="border-[1px] border-blue-500 rounded-3xl flex lg:gap-10 items-center px-5 lg:py-10">
            <div className="lg:pl-3">
              <h2 className="mb-2 lg:text-xl font-semibold">Integrity</h2>
              <p>Exemplifying fairness and ethical behavior in every aspect.</p>
            </div>
            <div className="border-2 border-gray-100 rounded-full drop-shadow-sm p-4 my-4">
              <FaHandsPraying className="h-12 w-12 text-blue-800" />
            </div>
          </div>
        </div>
        <div className="border-[1px] lg:mx-auto lg:w-[30%] mx-2 border-blue-500 rounded-3xl flex lg:gap-10 items-center px-5 lg:py-12">
          <div className="lg:pl-3">
            <h2 className="mb-2 lg:text-xl font-semibold">Tolerance</h2>
            <p>
              Practicing a resilient attitude and encouraging a positive work
              environment.
            </p>
          </div>
          <div className="border-2 border-gray-100 rounded-full drop-shadow-sm p-4 my-4">
            <FaRegHandshake className="h-12 w-12 text-blue-800" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuesPage;
