"use client";
import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import Lottie from "lottie-react";
import groovyWalkAnimation from "@/Components/LottieAnimation/projectjobsAnimation-1.json";
import Link from "next/link";

const postjobs = () => {
  return (
    <div className="sm:flex border px-10">
      <div className="sm:w-6/12  p-5">
        <p className="px-5 text-3xl font-serif my-5 text-indigo-700 ">
          Getting Started with Selling on Free-Flow: A Comprehensive Guide :
        </p>
        <hr className="mt-5 border "></hr>

        {/* ------------portion ---------- */}
        <div style={{ alignItems: "center" }} className="sm:flex px-3 py-1 ">
          <AiFillSafetyCertificate className="text-7xl text-green-500 " />
          <div className=" p-1 sm:ms-4">
            <p className="font-bold my-2  text-gray-600">
              Understanding Success
            </p>
            <p className="">
              Begin by researching successful profiles in your niche. Identify
              what sets them apart and how they present their services.
            </p>
          </div>
        </div>

        <div style={{ alignItems: "center" }} className="sm:flex px-3 py-1 ">
          <CgProfile className="text-4xl text-orange-500 " />
          <div className=" p-1 sm:ms-4">
            <p className="font-bold my-2 text-gray-600">
              Create your seller profile
            </p>
            <p>
              Add your profile picture, description, and professional
              information.
            </p>
          </div>
        </div>

        <div style={{ alignItems: "center" }} className="sm:flex px-3 py-1 ">
          <FiHome className="text-4xl text-fuchsia-700" />
          <div className=" p-1 sm:ms-4">
            <p className="font-bold my-2 text-gray-600">Publish your Gig</p>
            <p>
              Create a Gig of the service you’re offering and start selling
              instantly.
            </p>
          </div>
        </div>

        <Link href={"/postjobs/overview"}>
          <button className="btn bg-success w-5/12 text-white my-8">
            Continue
          </button>
        </Link>
      </div>

      <div style={{ alignItems: "center" }} className="sm:w-6/12  p-5 sm:flex">
        <Lottie animationData={groovyWalkAnimation} loop={true} />;
      </div>
    </div>
  );
};

export default postjobs;
