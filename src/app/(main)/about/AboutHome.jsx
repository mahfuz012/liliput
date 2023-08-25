import React from "react";
import pic from "@/assets/pexels-fauxels-3184291.jpg";
import Image from "next/image";
import { FaRankingStar } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const AboutHome = () => {
  return (
    <>
      <div className="bg-gray-50 py-10 px-16">
        <div className="text-center mx-auto py-10">
          <h1 className="text-[18px] mx-auto border-b-2 border-blue-800 w-1/4 pb-3 lg:text-[32px] font-semibold">
            Who We Are
          </h1>
        </div>
        <div className="flex flex-col pb-10 lg:flex-row gap-10 lg:gap-20">
          <div className="container">
            <p>
              Free Flow is an expression of our beliefs that we hold close to
              our hearts. Its one thing to simply provide a platform where
              Employers and Freelancers can work together. Its another to do it
              in our own unique way. <br /> We strive to be the premier platform
              where professionals go to connect, collaborate, and get work done.
              We believe that the best work is done in a flexible and secure
              environment. With transparency comes trust, and with a community
              thats built on meritocracy, people are eager to set aside
              differences in geography, politics and religion to share and
              profit from economic opportunities. <br /> We have been working
              tirelessly to turn these aspirations into reality. We have
              developed a close bond with our users. As their needs have
              changed, we have evolved our platform to provide the tools and
              support they want. Our users teach us, we learn and we grow. We
              invite you to become a part of our expanding community!
            </p>
          </div>
          <div className="container lg:ml-16">
            <Image src={pic} width={460} alt="about logo"></Image>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center gap-10 mx-auto my-14">
        <div className="flex border-t-4 drop-shadow-md rounded-xl border-blue-800 lg:w-1/2 gap-5 bg-slate-50 py-7 px-3 mx-4 lg:mr-56">
          <div className="ml-3">
            <FaRankingStar className="h-12 w-12 text-blue-800" />
          </div>
          <div>
            <h2 className="text-xl mb-2 font-semibold">Our Mission</h2>
            <p>
              To bring Employers and Freelancers together from around the globe
              to get work done.
            </p>
          </div>
        </div>
        <div className="flex border-t-4 drop-shadow-md rounded-xl border-blue-800 lg:w-1/2 gap-5 bg-slate-50 py-7 px-3 mx-4">
          <div className="ml-3">
            <TbTargetArrow className="h-12 w-12 text-blue-800" />
          </div>
          <div>
            <h2 className="text-xl mb-2 font-semibold">Our Vision</h2>
            <p>
              To help build a better world thats interconnected for prosperity
              and wired for peace.
            </p>
          </div>
        </div>
        <div className="flex border-t-4 drop-shadow-md rounded-xl border-blue-800 lg:w-1/2 gap-5 bg-slate-50 py-7 px-3 mx-4 lg:ml-56">
          <div className="ml-3">
            <HiOutlineSpeakerphone className="h-12 w-12 text-blue-800" />
          </div>
          <div>
            <h2 className="text-xl mb-2 font-semibold">Our Preposition</h2>
            <p>
              Connect, collaborate, and get work done in a safe and flexible
              online environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
