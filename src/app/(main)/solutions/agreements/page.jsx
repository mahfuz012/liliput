import { BsHourglassSplit } from "react-icons/bs";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaCalendarAlt, FaTasks } from "react-icons/fa";
import React from "react";
export const metadata = {
  title: "Solutions | Free Flow",
};

const AgreementsPage = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-t from-cyan-200 to-cyan-50 text-center py-16">
        <h1 className="text-[26px] lg:text-[40px] mb-3 font-bold">
          Work Your Way With Agreements
        </h1>
        <h1 className="px-3">
          We offer flexibility with our Agreements so that you can define
          exactly how you want to work online.
        </h1>
      </div>
      <div className="text-center my-16">
        <h1 className=" text-3xl font-bold mt-12  m-4">Payment Terms</h1>
        <h1 className=" border-b-blue-600  w-12 border-2 my-4 mx-auto"></h1>
        <h1>Choose how and when payments will be made.</h1>
      </div>
      <div className="grid my-10 px-5 lg:px-10 grid-cols-1 md:grid-cols-2 gap-9 lg:gap-14">
        <div className="card border-t-2 relative  border-[#2777C6] h-80 lg:h-72  pt-8 bg-[#FFFFFF] rounded-none card-compact shadow-xl">
          <div className="px-4">
            <div className="my-2">
              <MdOutlinePriceChange className="w-16 text-[#2777C6] mx-auto h-16" />
            </div>
            <div className="">
              <h1 className="font-bold tex-2xl my-1"> Fixed Price</h1>
              <p className="mb-4">
                Create milestones for your job. Set due dates and amount to be
                paid for each milestone.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 absolute w-full bottom-0  py-4">
            <p className="px-4">
              Ideal for: Jobs with high budget consideration
            </p>
          </div>
        </div>
        <div className="card border-t-2 h-80 lg:h-72  border-[#2777C6] relative pt-8 bg-[#FFFFFF]  rounded-none card-compact shadow-xl">
          <div className="px-4">
            <div className="my-2">
              <BsHourglassSplit className="w-16 text-[#2777C6] mx-auto h-16"></BsHourglassSplit>
            </div>
            <div className="">
              <h1 className="font-bold tex-2xl my-1"> Hourly</h1>
              <p className="mb-4">
                Define hourly rate and weekly time limit for Time Tracker.
                Accurately log billable hours. Generate weekly invoices based on
                hours worked.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 absolute w-full bottom-0   py-4">
            <p className="px-4 ">
              Ideal for: Jobs which need flexibility with evolving job
              specifications
            </p>
          </div>
        </div>
        <div className="card border-t-2  h-80 lg:h-72  border-[#2777C6] relative pt-8 bg-[#FFFFFF]  rounded-none card-compact shadow-xl">
          <div className="px-4">
            <div className="my-2">
              <FaCalendarAlt className="w-16 text-[#2777C6] mx-auto h-16"></FaCalendarAlt>
            </div>
            <div className=" mt-2">
              <h1 className="font-bold tex-2xl my-1"> Recurring Payments</h1>
              <p className="mb-4">
                Set up jobs as retainers with this option. Payments can be made
                weekly, biweekly, monthly, or quarterly.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 absolute w-full bottom-0   py-4">
            <p className="px-4 ">
              Ideal for: Jobs with fixed payouts at a pre-defined interval
            </p>
          </div>
        </div>
        <div className="card border-t-2 h-80 lg:h-72  border-[#2777C6] relative pt-8 bg-[#FFFFFF]  rounded-none card-compact shadow-xl">
          <div className="px-4">
            <div className="my-2">
              <FaTasks className="w-16 text-[#2777C6] mx-auto h-16"></FaTasks>
            </div>
            <div className=" mt-2">
              <h1 className="font-bold tex-2xl my-1"> Task-Based</h1>
              <p className="mb-4">
                Create and assign tasks as required for ad-hoc freelance work.
                Payments can be made for a task once the job is done.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 absolute w-full bottom-0   py-4">
            <p className="px-4 ">
              Ideal for: Jobs with cost tracking at an individual task level
            </p>
          </div>
        </div>
      </div>
      <div className="text-center container mx-auto my-10 bg-[#F7F7F7] py-12">
        <h1 className=" text-3xl font-bold  my-4">Scope of Work</h1>
        <h1 className=" border-b-blue-600  w-12 border-2  my-4  mx-auto"></h1>
        <h1>Define the deliverables for the job, including:</h1>
        <div className="text-left mx-auto grid grid-cols-2 lg:grid-cols-5 justify-center p-5 gap-8 mt-6">
          <h1 className="text-lg font-bold ">&#9989; Understanding of the job
          </h1>
          <h1 className="text-lg font-bold">&#9989; Your solution</h1>
          <h1 className="text-lg font-bold">
            &#9989; Relevant files and tools
          </h1>
          <h1 className="text-lg font-bold">&#9989; Specific deliverables</h1>
          <h1 className="text-lg font-bold">&#9989; Timeframe and deadlines</h1>
        </div>
      </div>
    </div>
  );
};

export default AgreementsPage;
