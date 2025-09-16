import React from "react";
import { Link } from "react-router-dom";

const EmailArrowButton = () => (
  <div className="w-[7.25rem] h-[3.375rem] relative flex-shrink-0 cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7.25rem"
      height="3.375rem"
      viewBox="0 0 116 54"
      fill="none"
      className="absolute top-0 left-0"
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_footer_arrow)">
        <rect width="116" height="54" rx="27" fill="#007AEC" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.6366 18.2686L45.3253 38.7668C44.4445 39.5766 44.3859 40.9496 45.1947 41.8294C46.0045 42.7101 47.3776 42.7688 48.2573 41.9599L70.7377 21.3083C70.7793 21.5821 70.788 21.8627 70.766 22.144C70.1627 29.5731 69.2235 41.133 69.2235 41.133C69.1264 42.3255 70.0152 43.3712 71.2076 43.4683C72.4001 43.5654 73.4469 42.6756 73.544 41.4831C73.544 41.4831 74.4831 29.9252 75.0875 22.4951C75.2639 20.313 74.5343 18.1551 73.0685 16.5289C71.6017 14.9037 69.5317 13.9546 67.3431 13.9057L48.1222 13.4774C46.9268 13.4497 45.9328 14.399 45.9061 15.5955C45.8805 16.7909 46.8288 17.7839 48.0253 17.8106L67.2462 18.2389C67.3769 18.2423 67.5074 18.2519 67.6366 18.2686Z"
          fill="white"
        />
      </g>
      <rect
        x="1"
        y="1"
        width="114"
        height="52"
        rx="26"
        stroke="white"
        strokeWidth="2"
      />
      <defs>
        <clipPath id="clip0_footer_arrow">
          <rect width="116" height="54" rx="27" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

const UpArrowButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4.3125rem"
    height="4.3125rem"
    viewBox="0 0 69 69"
    fill="none"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <rect x="0.5" y="0.5" width="68" height="68" rx="34" fill="black" />
    <rect x="0.5" y="0.5" width="68" height="68" rx="34" stroke="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.2267 23.4004L33.2172 49.1562C33.2172 50.1733 34.0139 51 34.9944 51C35.976 51 36.7739 50.1745 36.7739 49.1586L36.7846 23.2088C36.9731 23.3402 37.1474 23.4962 37.305 23.6719C41.4569 28.3238 47.917 35.5627 47.917 35.5627C48.5833 36.3096 49.7084 36.3551 50.4293 35.6647C51.1501 34.9743 51.194 33.8074 50.5277 33.0605C50.5277 33.0605 44.0687 25.8228 39.9168 21.1696C38.6969 19.8037 36.9885 19.0187 35.1924 19.0003C33.3962 18.9831 31.6736 19.7324 30.4288 21.0738L19.4966 32.8554C18.8161 33.5875 18.8375 34.7557 19.5452 35.4608C20.253 36.1647 21.3793 36.1426 22.0598 35.4092L32.9919 23.6277C33.0666 23.5478 33.1449 23.4716 33.2267 23.4004Z"
      fill="white"
    />
  </svg>
);

const Footer = () => {
  const navLinks = {
    col1: [
      { name: "About", path: "/know-more" },
      { name: "Work", path: "/work" },
      { name: "Careers", path: "/careers" }
    ],
    col2: [
      { name: "Contact", path: "/collaboration" },
      { name: "Services", path: "/services" },
      { name: "Clients", path: "/client" }
    ],
  };

  return (
    <>
      {/* Mobile Footer */}
      <footer
        className="lg:hidden w-full bg-black text-white px-[1rem] py-[2rem]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {/* Social Media Icons */}
        <div className="flex justify-center mb-[2rem]">
          <div className="w-[12rem] h-[2.5rem] border border-white rounded-[2rem] bg-black flex justify-center items-center gap-[2rem]">
            <a
              href="#"
              aria-label="Our Google page"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/Google.png"
                alt="Google"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </a>
            <a
              href="#"
              aria-label="Our Instagram profile"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/Instagram.png"
                alt="Instagram"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </a>
            <a
              href="#"
              aria-label="Our LinkedIn profile"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/linkedin_svgrepo.com.svg"
                alt="LinkedIn"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </a>
          </div>
        </div>

        {/* Enquiry Section */}
        <div className="flex items-center justify-center gap-[0.5rem] mb-[2rem]">
          <img
            src="/All Images Landing page Altecht/Phone.png"
            alt="Phone"
            className="w-[1.5rem] h-[1.5rem]"
          />
          <span className="text-[1rem] font-medium">Enquiry: 956-167-6342</span>
        </div>

        {/* Email with Right-aligned Icon */}
        <div className="flex flex-col items-center justify-between mb-[2rem]">
          <h2 className="text-[1.5rem] sm:text-[2rem] font-medium">
            Hello@Altecht.com
          </h2>
          <button aria-label="Send email" className="self-end mr-5">
            <div className="w-[3.5rem] h-[1.6rem] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.5rem"
                height="1.6rem"
                viewBox="0 0 116 54"
                fill="none"
                className="absolute top-0 left-0"
              >
                <g clipPath="url(#clip0_mobile_footer)">
                  <rect width="116" height="54" rx="27" fill="#007AEC" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M67.6366 18.2686L45.3253 38.7668C44.4445 39.5766 44.3859 40.9496 45.1947 41.8294C46.0045 42.7101 47.3776 42.7688 48.2573 41.9599L70.7377 21.3083C70.7793 21.5821 70.788 21.8627 70.766 22.144C70.1627 29.5731 69.2235 41.133 69.2235 41.133C69.1264 42.3255 70.0152 43.3712 71.2076 43.4683C72.4001 43.5654 73.4469 42.6756 73.544 41.4831C73.544 41.4831 74.4831 29.9252 75.0875 22.4951C75.2639 20.313 74.5343 18.1551 73.0685 16.5289C71.6017 14.9037 69.5317 13.9546 67.3431 13.9057L48.1222 13.4774C46.9268 13.4497 45.9328 14.399 45.9061 15.5955C45.8805 16.7909 46.8288 17.7839 48.0253 17.8106L67.2462 18.2389C67.3769 18.2423 67.5074 18.2519 67.6366 18.2686Z"
                    fill="white"
                  />
                </g>
                <rect
                  x="1"
                  y="1"
                  width="114"
                  height="52"
                  rx="26"
                  stroke="white"
                  strokeWidth="2"
                />
                <defs>
                  <clipPath id="clip0_mobile_footer">
                    <rect width="116" height="54" rx="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
        </div>

        {/* Navigation Links - 2 Columns */}
        <div className="grid justify-items-center grid-cols-2 gap-x-[2rem] gap-y-[1rem] mb-[2rem]">
          {navLinks.col1.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[1rem] font-medium hover:opacity-75 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          {navLinks.col2.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[1rem] font-medium hover:opacity-75 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col items-center gap-[0.75rem] mb-[1.5rem] text-center">
          <a href="#" className="text-[0.875rem] hover:opacity-75">
            Privacy Policy
          </a>
          <a href="#" className="text-[0.875rem] hover:opacity-75">
            SiteMap
          </a>
          <span className="text-[0.875rem]">
            @2025, Altecht. All Rights Reserved.
          </span>
        </div>

        {/* Scroll Up Icon */}
        <div className="flex justify-center">
          <button
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 69 69"
              fill="none"
              className="flex-shrink-0"
            >
              <rect
                x="0.5"
                y="0.5"
                width="68"
                height="68"
                rx="34"
                fill="black"
              />
              <rect
                x="0.5"
                y="0.5"
                width="68"
                height="68"
                rx="34"
                stroke="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.2267 23.4004L33.2172 49.1562C33.2172 50.1733 34.0139 51 34.9944 51C35.976 51 36.7739 50.1745 36.7739 49.1586L36.7846 23.2088C36.9731 23.3402 37.1474 23.4962 37.305 23.6719C41.4569 28.3238 47.917 35.5627 47.917 35.5627C48.5833 36.3096 49.7084 36.3551 50.4293 35.6647C51.1501 34.9743 51.194 33.8074 50.5277 33.0605C50.5277 33.0605 44.0687 25.8228 39.9168 21.1696C38.6969 19.8037 36.9885 19.0187 35.1924 19.0003C33.3962 18.9831 31.6736 19.7324 30.4288 21.0738L19.4966 32.8554C18.8161 33.5875 18.8375 34.7557 19.5452 35.4608C20.253 36.1647 21.3793 36.1426 22.0598 35.4092L32.9919 23.6277C33.0666 23.5478 33.1449 23.4716 33.2267 23.4004Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer
        className="hidden lg:block w-full mx-auto px-[0.25rem] sm:px-[0.375rem] md:px-[3.75rem] h-[43.875rem] bg-black text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex flex-col items-center flex-shrink-0 h-full">
          {/* Social Media Bar */}
          <div
            className="w-[17.75rem] h-[3rem] border border-white rounded-[3.125rem] bg-black flex justify-center items-center gap-[3.125rem] flex-shrink-0"
            style={{ marginTop: "3rem" }}
          >
            <a
              href="#"
              aria-label="Our Google page"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/Google.png"
                alt="Google"
                className="w-[2.375rem] h-[2.375rem]"
              />
            </a>
            <a
              href="#"
              aria-label="Our Instagram profile"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/Instagram.png"
                alt="Instagram"
                className="w-[2.375rem] h-[2.375rem]"
              />
            </a>
            <a
              href="#"
              aria-label="Our LinkedIn profile"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/linkedin_svgrepo.com.svg"
                alt="LinkedIn"
                className="w-[2.375rem] h-[2.375rem]"
              />
            </a>
          </div>

          {/* Main Content */}
          <div
            className="flex-grow w-full flex justify-between"
            style={{ marginTop: "6.375rem" }}
          >
            <div
              className="flex justify-between items-start w-full"
              style={{ gap: "5.625rem" }}
            >
              {/* Left: Links */}
              <div
                className="grid grid-cols-2 mt-[5rem]"
                style={{ gap: "5.625rem" }}
              >
                <div className="flex flex-col space-y-6">
                  {navLinks.col1.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col space-y-6">
                  {navLinks.col2.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Email & Button */}
              <div className="flex items-end flex-col">
                <h2 className="text-[4rem] font-medium leading-normal whitespace-nowrap">
                  Hello@Altecht.com
                </h2>
                <button aria-label="Send email">
                  <EmailArrowButton />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="w-full relative h-[4.3125rem]"
            style={{ marginTop: "11rem", marginBottom: "1.44rem" }}
          >
            {/* Left: Enquiry */}
            <div
              className="flex items-center absolute left-0 bottom-0"
              style={{ gap: "0.56rem", marginTop: "1.88rem" }}
            >
              <img
                src="/All Images Landing page Altecht/Phone.png"
                alt="Phone"
                className="w-[2.5rem] h-[2.5rem]"
              />
              <span className="text-[1.5rem] font-medium leading-normal">
                Enquiry: 956-167-6342
              </span>
            </div>

            {/* Center: Up Arrow - Absolutely centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
              <button
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <UpArrowButton />
              </button>
            </div>

            {/* Right: Links & Copyright */}
            <div
              className="flex text-sm font-light text-right absolute right-0 bottom-0"
              style={{ gap: "1.37rem" }}
            >
              <a href="#">Privacy Policy</a>
              <a href="#">SiteMap</a>
              <span>@2025, Altecht. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
