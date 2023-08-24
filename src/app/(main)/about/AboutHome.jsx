import React from "react";
import pic from "@/assets/pexels-fauxels-3184291.jpg";
import Image from "next/image";

const AboutHome = () => {
  return (
    <div className="bg-base-200 py-10 px-16">
      <div className="text-center mx-auto py-7">
        <h1 className="text-[18px] lg:text-[30px] pb-5 font-semibold uppercase">
          Who We Are
        </h1>
      </div>
      <div className="flex flex-col pb-10 lg:flex-row gap-10 lg:gap-20">
        <div className="container">
          <p>
            Free Flow is an expression of our beliefs that we hold close to our
            hearts. Its one thing to simply provide a platform where Employers
            and Freelancers can work together. Its another to do it in our own
            unique way. <br /> We strive to be the premier platform where professionals
            go to connect, collaborate, and get work done. We believe that the
            best work is done in a flexible and secure environment. With
            transparency comes trust, and with a community thats built on
            meritocracy, people are eager to set aside differences in geography,
            politics and religion to share and profit from economic
            opportunities. <br /> We have been working tirelessly to turn these
            aspirations into reality. We have developed a close bond with our
            users. As their needs have changed, we have evolved our platform to
            provide the tools and support they want. Our users teach us, we
            learn and we grow. We invite you to become a part of our expanding
            community!
          </p>
        </div>
        <div className="container lg:ml-16">
          <Image src={pic} width={460} alt="about logo"></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
