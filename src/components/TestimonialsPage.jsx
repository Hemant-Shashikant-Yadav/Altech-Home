import React from "react";

// Reusable TestimonialCard Component
const TestimonialCard1 = ({
  imgSrc,
  companyName,
  quote,
  authorName,
  authorTitle,
  className,
}) => {
  return (
    <div
      className={`relative bg-white border border-gray-200/80 shadow-md flex-shrink-0 ${
        className || ""
      } w-full sm:w-[28.64788rem]`}
      style={{
        height: "46.01475rem",
      }}
    >
      {/* Image */}
      <div className="mx-auto mt-[1.26rem] flex justify-center">
        <img
          src={imgSrc}
          alt={`${authorName}, ${authorTitle}`}
          className="w-[21.76rem] lg:w-[25.08544rem] h-auto object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image";
          }}
        />
      </div>

      <div className="px-[1.5rem]">
        {/* Company Name */}
        <h3
          className="font-[Montserrat]"
          style={{
            marginTop: "2.97rem",
            color: "#000",
            fontSize: "2.37494rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {companyName}
        </h3>

        {/* Testimonial Quote */}
        <p
          className="font-[Montserrat]"
          style={{
            marginTop: "2.95rem",
            color: "#616161",
            fontSize: "1.1875rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            width: "23.30425rem",
          }}
        >
          "{quote}"
        </p>

        {/* Author Information */}
        <div style={{ marginTop: "2.81rem" }}>
          <p className="font-[Montserrat] font-semibold text-[#000] text-[1.0625rem] leading-normal">
            {authorName}
          </p>
          <p className="font-[Montserrat] text-sm text-gray-500">
            {authorTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const testimonials = [
    {
      imgSrc: "All Images Landing page Altecht/c1.png",
      companyName: "Karmic",
      quote:
        "“With Altecht’s custom solutions, we built a seamless platform that connects people and amplifies our mission.”",
      authorName: "Manindar K. S",
      authorTitle: "Director of Engineering, Karmic",
    },
    {
      imgSrc: "All Images Landing page Altecht/c2.png",
      companyName: "Off-Thrd",
      quote:
        "“Altecht helped us launch a stylish, scalable e-commerce platform that matches our brand’s energy.”",
      authorName: "M. D. Poleki",
      authorTitle: "Product Lead, Off-Thrd",
    },
    {
      imgSrc: "All Images Landing page Altecht/c3.png",
      companyName: "Wedify",
      quote:
        "“From planning to booking, Altecht designed an intuitive app that makes event management effortless.”",
      authorName: "Suwannee",
      authorTitle: "IT Infrastructure Lead, Nutone",
    },
    {
      imgSrc: "All Images Landing page Altecht/c4.png",
      companyName: "Smart Kisaan",
      quote:
        "“Their tech made farming smarter—easy access to tools, data, and services for real impact on the ground.”",
      authorName: "Maneesh P.",
      authorTitle: "Enterpreneur, Smart Kisan",
    },
  ];

  return (
    <div className="font-[Montserrat] antialiased text-gray-900 mt-[5rem] lg:mt-[18rem] mb-[7.08rem]">
      {/* Main Heading */}
      <div className="mb-[2.4rem]">
        <h1 className="font-semibold max-w-[58.4375rem] h-[16.8125rem] mx-auto text-5xl lg:text-[4.76488rem] tracking-[0.52413rem] leading-tight ">
          Helping <span className="text-[#777]">ambitious</span> <br />
          <span className="text-[#777]">brands</span> bring big <br />
          ideas to life
        </h1>
      </div>

      <div
        className="flex flex-wrap justify-center mx-auto mt-[3.94rem] lg:mt-[3.94rem]"
        style={{
          columnGap: "1.04rem",
          rowGap: "1.71rem",
          maxWidth: "122rem",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard1
            key={index}
            imgSrc={testimonial.imgSrc}
            companyName={testimonial.companyName}
            quote={testimonial.quote}
            authorName={testimonial.authorName}
            authorTitle={testimonial.authorTitle}
            className={
              index === 0
                ? "lg:mt-[3.94rem]" // 1st card offset down
                : index === 3
                ? "lg:-mt-[3.94rem]" // 4th card offset up
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
