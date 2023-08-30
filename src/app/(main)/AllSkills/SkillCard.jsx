import React from "react";

const SkillCard = ({ skill }) => {
  const { category, skills, total } = skill;
  return (
    <div>
      <div className="py-10 text-center border-gray-100 border-2 shadow-md">
        <h1 className="text-xl font-semibold pb-2">{category}</h1>
        <p>{total}</p>
        <div className="mt-10 pl-5 space-y-3 text-start">
          {skills.map((skill, index) => (
            <p className="hover:text-blue-700 cursor-pointer" key={index}>
              {skill}
            </p>
          ))}
        </div>
        <div className="mt-8 mb-5">
          <button className="btn bg-base-100 border border-blue-800 hover:bg-base-200 text-blue-800">
            View More Freelancers
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
