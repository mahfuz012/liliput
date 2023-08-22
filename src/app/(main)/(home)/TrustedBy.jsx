import React from "react";

const TrustedBy = () => {
  return (
    <div className="mx-auto px-2">
      <h1 className="text-4xl mb-4 font-medium">
        Trusted by leading brands and startups
      </h1>
      <div className=" gap-6 md:flex justify-between items-center">
        <div className="bg-[#FFFFFF] shadow-xl shadow-slate-400 card card-compact mt-4 sm:h-[700px] lg:h-[500px] w-full rounded-lg p-5 font-medium">
          <h1 className="my-3 ml-5 text-lg">Nasdaq</h1>
          <h1 className="my-3  text-lg">
            “Flow enables us to differentiate ourselves from our competitors and
            produce content at a higher caliber.”
          </h1>
          <h1 className=" text-xl">Josh Machiz, Chief Digital Officer</h1>
          <p className="  text-xl">Results</p>
          <hr className="my-1" />
          <h1 className="my-3  text-lg">Emmy Winning</h1>
          <p className="  text-xl">Facebook Watch program</p>
          <h1 className="my-3  text-lg">Millions</h1>
          <p className="  text-xl">
            of impressions generated per client per IPO
          </p>
        </div>
        <div className="bg-[#FFFFFF] shadow-xl shadow-slate-400 card card-compact mt-4 sm:h-[700px] lg:h-[500px] w-full rounded-lg p-5  font-medium">
          <h1 className="my-3 ml-5 text-lg">Microsoft</h1>
          <h1 className="my-3  text-lg">
            “One of the advantages of utilizing freelancers is finding talent
            with different skills quickly as our needs change.”
          </h1>
          <h1 className=" text-xl">
            Carol Taylor, Director of Content Experience
          </h1>
          <p className=" text-xl">Results</p>
          <hr className="my-1" />
          <h1 className="my-3   text-lg">50% Faster</h1>
          <p className=" text-xl">launch of projects</p>
          <h1 className="my-3   text-lg">10,000</h1>
          <p className=" text-xl">projects completed</p>
        </div>
        <div className="bg-[#FFFFFF] shadow-xl shadow-slate-400 card card-compact mt-4 sm:h-[700px] lg:h-[500px] w-full rounded-lg p-5  font-medium">
          <h1 className="my-3 ml-5 text-lg">Google</h1>
          <h1 className="my-3   text-lg">
            “Clients love Flow. On the site, freelance professionals can browse
            jobs posted by prospective clients from all over the world. ”
          </h1>
          <h1 className="  text-xl">
            Mr James, Director of Content Experience
          </h1>
          <p className="  text-xl">Results</p>
          <hr className="my-1" />
          <h1 className="my-3  text-lg">Very Good</h1>
          <p className="  text-xl">launch of projects</p>
          <h1 className="my-3  text-lg">20,000</h1>
          <p className="  text-xl">projects completed</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
