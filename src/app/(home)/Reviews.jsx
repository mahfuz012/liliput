"use client";
import TitleSection from "@/Components/TitleSection";
import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import reviews from "@/data/reviews";

const Reviews = () => {
  return (
    <section className="my-10">
      <TitleSection title="What our Clients say about free flow"></TitleSection>
      <Swiper
        autoplay
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper container mx-auto rounded-2xl px-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="mx-24 my-10 flex flex-col items-center">
              <FaQuoteRight className="text-4xl"></FaQuoteRight>
              <h1 className="p-10">{review.review}</h1>
              <h2 className="text-lg uppercase text-blue-700">{review.name}</h2>
              <p className="text-lg">{review.profile}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
