"use client";

import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import { updateProfile } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const RegistrationPage = () => {
  const { createRegister, userProfile } = useContext(AuthContextPro);
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitFunction(data) {
    const displayName = data.text;
    const email = data.email;
    const url = data.url;
    const password = data.password;

    createRegister(email, password, url, displayName)
      .then((credentialUser) => {
        updateProfile(credentialUser.user, {
          displayName: displayName,
          photoURL: String(url),
        })
          .then(() => {
            console.log("Profile updated successfully.");
          })
          .catch((error) => {
            console.log("Error updating profile: ", error);
          });

        swal({
          text: `Hi ${userProfile?.displayName}, Successfully completed Registration`,
          icon: "success",
        });

        reset();
      })
      .catch((error) => {
        const errorNotice = error.message;
        console.log(errorNotice);
        if (errorNotice) {
          swal("You are Using same email!", "Try Another gmail");
        }
      });
  }

  // ---------------------------------------------------------------------------

  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password should be at least 6 characters long";
    }

    if (!/[A-Z]/.test(value)) {
      return "Password should contain at least one capital letter";
    }

    if (!/[!@#$%^&*]/.test(value)) {
      return "Password should contain at least one special character (!@#$%^&*)";
    }

    return null;
  };

  const password = watch("password");

  return (
    <div className="my-10 container mx-auto border">
      <div className="flex justify-center py-10 border-2">
        <form
          onSubmit={handleSubmit(submitFunction)}
          className="p-5 text-center "
        >
          <h1 className="text-gray-600 pb-5 text-3xl font-bold mb-2">
            Registration
          </h1>
          <div className="flex flex-col items-center">
            <input
              {...register("text", { required: true })}
              className="border border-blue-300 w-full sm:w-80 my-2 p-2 "
              type="text"
              placeholder="Type your Name"
              name="text"
            />
            {errors.text && (
              <span className="text-sm text-red-700 ">
                Please fill this field
              </span>
            )}

            <input
              {...register("email", { required: true })}
              className="border border-blue-300  w-full sm:w-80 my-2 p-2 "
              type="email"
              placeholder="Type your Email"
              name="email"
            />
            {errors.email && (
              <span className="text-sm text-red-700 ">
                Please fill this field
              </span>
            )}

            <input
              {...register("url")}
              className="border border-blue-300 w-full sm:w-80 my-2 p-2 "
              type="url"
              placeholder="Type your Profile URL"
              name="url"
            />
            {errors.url && (
              <span className="text-sm text-red-700 ">
                Please fill this field
              </span>
            )}

            <input
              {...register("password", {
                required: true,
                validate: validatePassword,
              })}
              className=" border-blue-300 w-full sm:w-80 border my-2 p-2"
              type="password"
              placeholder="Type your password"
              name="password"
            />
            {errors.password && (
              <span className="text-sm text-red-700 ">
                {errors.password.message}
              </span>
            )}

            <input
              {...register("confirm", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords don't match",
              })}
              className=" border-blue-300 w-full sm:w-80 border my-2 p-2"
              type="password"
              placeholder="Confirm your password"
              name="confirm"
            />
            {errors.confirm && (
              <span className="text-sm text-red-700 ">
                {errors.confirm.message}
              </span>
            )}

            <input
              value="Register"
              className="w-52  my-2 p-2  bg-blue-600 text-white"
              type="submit"
            />
          </div>

          <p className="mt-2 mb-3 px-12 sm:px-5">
            if you have registered account before, click
            <Link
              href={"/login"}
              className="font-bold text-xl mx-1 text-blue-700"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
