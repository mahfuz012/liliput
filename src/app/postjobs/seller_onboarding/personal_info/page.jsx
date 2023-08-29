"use client";
import Buttonline from "@/Components/Buttonline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { languages } from "@/data/languages";
const personalInfo = () => {
  function Personalinfo(e) {
    e.preventDefault();
    const full_Name = e.target.firstname.value;
    const last_Name = e.target.lastname.value;
    const Display_Name = e.target.displayname.value;
    const Language = e.target.option.value;
    const Description = e.target.description.value;
    const personal_Information = {
      full_Name,
      last_Name,
      Display_Name,
      Description,
      Language,
    };

    localStorage.setItem("details", JSON.stringify(personal_Information));
    console.log(personal_Information);
  }

  return (
    <>
      <div className="">
        <Buttonline gives0={true} />
      </div>

      <div>
        <div className="border py-10 px-5 sm:w-10/12 container mx-auto bg-gray-100  text-center">
          <p className="text-gray-600 font-semibold text-3xl ">
            -- Personal Info --{" "}
          </p>
          <p className="text-gray-600 ">
            Tell us a bit about yourself. This information will appear on your
            public profile, so that potential buyers can get to know you better.
          </p>
        </div>
      </div>

      <div className="formsubmit mt-10">
        <form onSubmit={Personalinfo}>
          {/* ------------- */}
          <div
            style={{ alignItems: "center" }}
            className="flex justify-center "
          >
            <div className="sm:w-3/12">
              <p className="text-xl text-gray-700 flex ">
                Full Name
                <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                <span className="text-gray-500 italic text-sm mx-2 mt-2">
                  (Private)
                </span>{" "}
              </p>
            </div>

            <div className="sm:flex sm:w-8/12">
              <input
                placeholder="type your first name"
                name="firstname"
                type="text"
                className="border  border-gray-500 rounded-md p-2 mx-1 sm:w-5/12"
              />
              <input
                placeholder="type your last name"
                name="lastname"
                type="text"
                className="border  border-gray-500 rounded-md p-2 mx-1 sm:w-5/12"
              />
            </div>
          </div>

          {/* ---------------- */}
          <div
            style={{ alignItems: "center" }}
            className="flex justify-center my-5 "
          >
            <div className="sm:w-3/12">
              <p className="text-xl text-gray-700 flex ">
                Display Name
                <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
              </p>
            </div>

            <div className="sm:flex sm:w-8/12">
              <input
                placeholder="your Surname"
                name="displayname"
                type="text"
                className="border  border-gray-500 rounded-md p-2 mx-1 sm:w-4/12"
              />
            </div>
          </div>
          {/* ------------------ */}
          <div
            style={{ alignItems: "center" }}
            className="flex justify-center my-5"
          >
            <div className="sm:w-3/12">
              <p className="text-xl text-gray-700 flex ">
                Description
                <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
              </p>
            </div>

            <div className="sm:flex sm:w-8/12">
              <textarea
                placeholder="write a description within 200 character "
                name="description"
                className="border border-gray-500 rounded-md p-2 mx-1 sm:w-10/12"
              ></textarea>
            </div>
          </div>
          {/* -------------- */}

          <div
            style={{ alignItems: "center" }}
            className="flex justify-center my-5"
          >
            <div className="sm:w-3/12">
              <p className="text-xl text-gray-700 flex ">
                language
                <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
              </p>
            </div>

            <div className=" sm:w-8/12">
              <select
                name="option"
                className="border overflow-scroll border-gray-500 rounded-md p-2 mx-1 sm:w-4/12"
              >
                {languages.map((p, index) => (
                  <option className="" key={index}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className=" flex justify-end my-16 ">
            <Link href="/postjobs/seller_onboarding/professional_info">
              <input
                type="submit"
                value="Continue"
                className="btn mx-10  px-16 btn-success text-white"
              ></input>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default personalInfo;
