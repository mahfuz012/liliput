import React from 'react';

const TheBest = () => {
    return (
        <div>
             <div className="bg-[#F1FDF7] px-2 py-14 container  mx-auto">
      <h1 className="text-4xl mb-4 font-bold text-[#404145]">
        The best part? Everything.
      </h1>
    <div className="md:flex md:mx-auto md:items-center md:justify-between gap-8 w-full">
    <div className=" grid gap-6 md:w-1/2">
        <div>
          <h1 className="text-lg font-bold"> &#9989; Stick to your budget</h1>
          <p className="text-lg font-medium mt-1">
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">
            {" "}
            &#9989; Get quality work done quickly
          </h1>
          <p className="text-lg font-medium mt-1">
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">
            {" "}
            &#9989; Pay when you are happy
          </h1>
          <p className="text-lg font-medium mt-1">
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold"> &#9989; Count on 24/7 support</h1>
          <p className="text-lg font-medium mt-1">
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </p>
        </div>
      </div>
      <div className=" md:w-1/2">
      <iframe  width="480px" height="415" src="https://www.youtube-nocookie.com/embed/Og6U85Tv_qE?si=n0zfR3OpYjNFJ1AR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </div>
        </div>
    );
};

export default TheBest;