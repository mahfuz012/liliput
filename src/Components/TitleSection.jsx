import React from "react";

const TitleSection = ({ title }) => {
  return (
    <div className="text-center border-b-2 border-cyan-600 w-1/2 mx-auto mt-14 mb-10">
      <h1 className="text-4xl pb-5 font-bold uppercase">
        {title}
      </h1>
    </div>
  );
};

export default TitleSection;
