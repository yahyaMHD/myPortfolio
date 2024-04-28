import React from "react";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const client1 = require("../assets/images/c1.jpg");
const client2 = require("../assets/images/c2.jpg");

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSection = () => {
  return (
    <div className=" bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <div>

      </div>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
      >
        <ClientReview
          image={client1}
          name={"Tibani Mohamed"}
          role={"mobile devloper"}
        />
        <ClientReview
          image={client2}
          name={"Tibani Mohamed"}
          role={"web devloper"}
        />
      </Carousel>
      ;
    </div>
  );
};

export default ReviewSection;
