import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Criteria = () => {
  const criterias = [
    {
      id: 1,
      title: "Programming & Development",
      total: "321486 Freelancers",
    },
    {
      id: 2,
      title: "Writing & Translation",
      total: "158946 Freelancers",
    },
    {
      id: 3,
      title: "Design & Art",
      total: "213596 Freelancers",
    },
    {
      id: 4,
      title: "Administrative & Secretarial",
      total: "864321 Freelancers",
    },
    {
      id: 5,
      title: "Sales & Marketing",
      total: "761236 Freelancers",
    },
    {
      id: 6,
      title: "Engineering & Architecture",
      total: "53654 Freelancers",
    },
    {
      id: 7,
      title: "Business & Finance",
      total: "55246 Freelancers",
    },
    {
      id: 8,
      title: "Education & Training",
      total: "32456 Freelancers",
    },
    {
      id: 9,
      title: "Legal",
      total: "61478 Freelancers",
    },
  ];
  return (
    <div className="my-20">
      <div className="text-center border-b-2 border-cyan-600 w-1/4 mx-auto mt-14 mb-10">
        <h1 className="text-4xl pb-5 font-bold uppercase">
          Find Top Freelancers
        </h1>
      </div>
      <div className="container mx-auto px-10 grid gap-5 grid-cols-1 lg:grid-cols-3">
        {criterias.map(({ id, title, total }) => (
          <div
            key={id}
            className="py-10 text-center border-gray-100 border-2 shadow-md hover:shadow-xl"
          >
            <p>{title}</p>
            <p>{total}</p>
            <p className="cursor-pointer mt-2 flex justify-center items-center gap-1 text-blue-600 font-semibold hover:text-blue-900">
              Find <FaArrowRight />
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn bg-cyan-600 hover:bg-cyan-900 text-white">
          See More
        </button>
      </div>
    </div>
  );
};

export default Criteria;
