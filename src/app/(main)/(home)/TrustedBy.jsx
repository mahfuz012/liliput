import TitleSection from '@/Components/TitleSection';
import React from 'react';

const TrustedBy = () => {
    return (
        <div className="mx-auto max-w-[1600px] mb-12 px-4 md:px-14">
       
       
          <TitleSection title="Trusted by leading brands " />
       
        <div className=" mt-6 gap-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-between items-center">
          <div className="bg-[#FFFFFF] shadow-md hover:shadow-xl hover:shadow-slate-400 shadow-slate-400 card card-compact  border-gray-300 mt-4 sm:h-[500px] lg:h-[490px]  w-full rounded-lg p-5 font-medium">
            <h1 className="my-3 ml-5 text-lg">Nasdaq</h1>
            <h1 className="my-3  text-lg">
              “Flow enables us to differentiate ourselves from our competitors and
              produce content at a higher caliber.”
            </h1>
            <h1 className=" text-xl">
              Josh Machiz, Chief Digital Officer
            </h1>
            <p className="  text-xl">Results</p>
            <hr className="my-1" />
            <h1 className="my-3  text-lg">Emmy Winning</h1>
            <p className="  text-xl">Facebook Watch program</p>
            <h1 className="my-3  text-lg">Millions</h1>
            <p className="  text-xl">
              of impressions generated per client per IPO
            </p>
          </div>
          <div className="bg-[#D0FAFE] shadow-md hover:shadow-xl hover:shadow-slate-400 shadow-slate-400 card card-compact  border-gray-300 mt-4 sm:h-[500px] lg:h-[490px]  w-full rounded-lg p-5 font-medium">
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
            <p className=" text-xl">
            projects completed
            </p>
          </div>
          <div className="bg-[#FFFFFF] shadow-md hover:shadow-xl hover:shadow-slate-400 shadow-slate-400 card card-compact  border-gray-300 mt-4 sm:h-[500px] lg:h-[490px]  w-full rounded-lg p-5 font-medium">
            <h1 className="my-3 ml-5 text-lg">Google</h1>
            <h1 className="my-3   text-lg">
              “Clients love Flow.
  On the site, freelance professionals can browse jobs posted by prospective clients from all over the world. ”
            </h1>
            <h1 className="  text-xl">
              Mr James, Director of Content Experience 
            </h1>
            <p className="  text-xl">Results</p>
            <hr className="my-1" />
            <h1 className="my-3  text-lg">Very Good</h1>
            <p className="  text-xl">launch of projects</p>
            <h1 className="my-3  text-lg">20,000</h1>
            <p className="  text-xl">
            projects completed
            </p>
          </div>
        </div>
      </div>
    );
};

export default TrustedBy;