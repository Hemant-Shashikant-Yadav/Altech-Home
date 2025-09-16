import React from "react";

const Review = () => {
  return (
    <div className="bg-white pt-[5.63rem] lg:pt-[10.63rem] font-[Montserrat]">
      {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
      <div className="w-full max-w-[74.25rem] mx-auto">
        {/* Mobile Layout - Stack vertically */}
        <div className="flex flex-col lg:hidden text-black">
          {/* Heading */}
          <h2 className="text-[2rem] font-semibold leading-normal mb-6 text-center">
            Great experience with Altecht team
          </h2>

          {/* Image */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-[20rem] h-[20rem] overflow-hidden shadow-xl">
              <img
                src="All Images Landing page Altecht/Productlead.png"
                alt="Rohan Mehta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-[1rem] font-normal leading-normal tracking-[0.11rem] mb-6  px-4">
            Their structured yet flexible process made collaboration smooth and
            efficient. From kick-off to final handoff, the quality of work and
            speed of delivery was top-notch.
          </p>

          {/* Name + Designation */}
          <div className="text-center">
            <h3 className="text-[1rem] font-medium leading-normal tracking-[0.11rem]">
              Rohan Mehta
            </h3>
            <p className="text-[1rem] font-normal leading-normal tracking-[0.11rem]">
              Product Lead, AXIS
            </p>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex justify-center items-start gap-[5.81rem]">
          {/* Left Section - Text */}
          <div className="flex flex-col text-black h-[25.125rem]">
            {/* Content Container */}
            <div className="flex-1">
              {/* Heading */}
              <h2 className="max-w-[24.875rem] text-[2rem] font-semibold leading-normal mb-[1.69rem]">
                Great experience with Altecht team
              </h2>

              {/* Paragraph */}
              <p className="max-w-[26.4375rem] text-[1rem] font-normal leading-normal tracking-[0.11rem]">
                Their structured yet flexible process made collaboration smooth and
                efficient. From kick-off to final handoff, the quality of work and
                speed of delivery was top-notch.
              </p>
            </div>

            {/* Name + Designation */}
            <div className="max-w-[26.4375rem] mt-auto">
              <h3 className="text-[1rem] font-medium leading-normal tracking-[0.11rem]">
                Rohan Mehta
              </h3>
              <p className="text-[1rem] font-normal leading-normal tracking-[0.11rem]">
                Product Lead, AXIS
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-end">
            <div className="w-full max-w-[26.1875rem] h-[25.125rem] overflow-hidden shadow-xl">
              <img
                src="All Images Landing page Altecht/Productlead.png"
                alt="Rohan Mehta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
