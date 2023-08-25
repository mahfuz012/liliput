"use client";

import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
export const metadata = {
  title: "Login | Free Flow",
};

const LoginPage = () => {
  const {
    resetpasswordsubmit,
    loginProfile,
    userProfile,
    registerWithGoogle,
    registerWithFacebook,
  } = useContext(AuthContextPro);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function googleregister() {
    registerWithGoogle()
      .then((res) => {
        const dataAll = res.user;
        console.log(dataAll);
        // When  you would use banckend then use this data ============

        // const url = dataAll.photoURL
        // const displayName = dataAll.displayName
        // const email = dataAll.email
        // const googleDataProvider = { email, url, displayName }
      })

      .catch((error) => console.log(error));
  }

  const difref = useRef();
  function resetsubmit() {
    resetpasswordsubmit(difref.current.value)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  function faceboookdopen() {
    registerWithFacebook()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  function loginSubmit(data) {
    const email = data.email;
    const password = data.password;

    loginProfile(email, password)
      .then((credenAccount) => {
        console.log(credenAccount);
        swal({
          title: "Login is Successfull",
          icon: "success",
        });

        reset();
      })
      .catch((error) => {
        console.log(error);
        const errorCodes = error.code;
        if (errorCodes === "auth/wrong-password") {
          swal({
            title: "password not match, please again?",

            icon: "warning",
            dangerMode: true,
          });
        } else if (errorCodes === "auth/user-not-found") {
          swal({
            title: "You have no account, register Now?",

            icon: "warning",
            dangerMode: true,
          });
        }
      });
  }

  return (
    <div
      style={{ alignItems: "center" }}
      className="sm:flex px-5 sm:justify-center "
    >
      <div className="sm:w-5/12  px-10 sm:px-0 ">
        <form
          onSubmit={handleSubmit(loginSubmit)}
          className="mt-5 pt-5 sm:text-center"
        >
          <h1 className="text-grey-700 text-3xl font-bold my-5">Login User</h1>
          <div style={{ alignItems: "center" }} className="flex flex-col ">
            <input
              {...register("email", { required: true })}
              className="border  w-full sm:w-80 my-2 p-2"
              type="email"
              placeholder="Type your email"
              name="email"
            />
            {errors.email && (
              <span className="text-red-700 -mt-1">
                Please enter your email
              </span>
            )}

            <input
              {...register("password", { required: true })}
              className="w-full sm:w-80  border my-2 p-2"
              type="password"
              placeholder="Type your password"
              name="password"
            />

            {errors.password && (
              <span className="text-red-700 -mt-1">
                Please enter your password
              </span>
            )}

            <input
              className=" w-full text-xl sm:w-52 rounded-2 my-2 p-2 rounded-md text-white bg-purple-800"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        <div className=" text-center">
          <p onClick={resetsubmit} className="btn btn-success">
            reset
          </p>
          <p className="my-5 sm:px-5">
            you havent registered yet,
            <Link
              href={"/register"}
              className="font-bold text-xl mx-1 text-green-700"
            >
              Registration
            </Link>
          </p>
        </div>

        <div className="sm:flex justify-center mb-5 gap-2">
          <button
            onClick={googleregister}
            className="btn bg-base-100 border-black  my-2 sm:my-0 w-full sm:w-1/5 text-black"
          >
            <FcGoogle className="text-xl" />
          </button>
          <button
            onClick={faceboookdopen}
            className="btn bg-base-100 border-black  my-2 sm:my-0 w-full sm:w-1/5 text-black"
          >
            <BiLogoFacebookCircle className="text-xl text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
