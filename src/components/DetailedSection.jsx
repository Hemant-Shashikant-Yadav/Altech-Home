import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailedSection = ({ title, image, paragraph1, paragraph2, paragraph3, sammary }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleDiscussClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/collaboration');
    };

    return (
        <div className="bg-black shadow-lg pb-10py-8 lg:py-16">
            <div className=" w-full max-w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-10 items-center">
                    {/* Left Column - Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={image}
                            alt="Strategic visualization"
                            className="rounded-2xl shadow-lg w-full h-auto md:w-[28rem] lg:w-[35.5625rem] object-cover"
                            style={{
                                maxHeight: "41.9375rem",
                                aspectRatio: "0.85",
                                flexShrink: 0
                            }}
                        />
                    </div>

                    {/* Right Column - Text */}
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        <h2
                            className="text-white font-montserrat text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] font-semibold leading-tight md:leading-normal max-w-full md:max-w-[28rem] lg:max-w-[34.6875rem]"
                        >
                            {title}
                        </h2>

                        {/* Mobile: Summary or Expanded */}
                        <div className="md:hidden">
                            {!expanded ? (
                                <>
                                    <p className="text-[1rem] text-[#A0A0A0] leading-[1.6] font-montserrat">{sammary}</p>
                                    <button
                                        className="text-[#007AEC] text-[1rem] underline focus:outline-none mb-6 mt-4 font-montserrat"
                                        onClick={() => setExpanded(true)}
                                    >
                                        View More
                                    </button>
                                    <button
                                        className="flex items-center justify-center w-48 h-12 text-white border-2 border-white rounded-full bg-gray-900 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                                        onClick={() => navigate('/collaboration')}
                                    >
                                        Let's Discuss
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 ml-2 transform -rotate-45"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="text-lg text-gray-400 leading-relaxed">{paragraph1}</p>
                                    <p className="text-lg text-gray-400 leading-relaxed">{paragraph2}</p>
                                    <p className="text-lg text-gray-400 leading-relaxed">{paragraph3}</p>
                                    <button
                                        className="text-blue-500 underline mt-4 focus:outline-none mb-10"
                                        onClick={() => setExpanded(false)}
                                    >
                                        View Less
                                    </button>
                                    <button
                                        className="flex items-center justify-center w-48 h-12 text-white border-2 border-white rounded-full bg-gray-900 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                                        onClick={() => navigate('/collaboration')}
                                    >
                                        Let's Discuss
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 ml-2 transform -rotate-45"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Desktop: Always show full content */}
                        <div className="hidden md:flex flex-col">
                            <p
                                className="text-[#A0A0A0] font-montserrat text-[1rem] md:text-[0.9375rem] lg:text-[1rem] font-normal leading-[1.6] mb-6 max-w-full md:max-w-[28rem] lg:max-w-[34.6875rem]"
                            >
                                {paragraph1} {paragraph2} {paragraph3}
                            </p>
                            <button
                                className="flex justify-center items-center gap-3 w-[16rem] md:w-[17rem] lg:w-[18.5rem] h-[3.5rem] md:h-[3.75rem] lg:h-[4rem] px-4 rounded-[3.5625rem] border-2 border-white bg-[#1B1B1B] cursor-pointer mt-6 md:mt-8 lg:mt-[2.13rem] transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={handleDiscussClick}
                            >
                                <span
                                    className="text-white font-montserrat text-[1rem] md:text-[1.125rem] lg:text-[1.24663rem] font-semibold whitespace-nowrap"
                                >
                                    Let's Discuss
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="28"
                                    viewBox="0 0 29 28"
                                    fill="none"
                                    style={{
                                        width: "1.22713rem",
                                        height: "1.22713rem",
                                        transform: "rotate(-42.597deg)",
                                        flexShrink: 0
                                    }}
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.1565 9.39408L8.68293 18.0978C8.30894 18.4416 8.28404 19.0246 8.62748 19.3982C8.97134 19.7721 9.55435 19.7971 9.92788 19.4536L19.4732 10.6848C19.4909 10.801 19.4946 10.9202 19.4852 11.0396C19.2291 14.1941 18.8303 19.1025 18.8303 19.1025C18.789 19.6088 19.1664 20.0528 19.6728 20.0941C20.1791 20.1353 20.6236 19.7575 20.6648 19.2511C20.6648 19.2511 21.0636 14.3436 21.3202 11.1887C21.3951 10.2621 21.0853 9.34591 20.4629 8.6554C19.8401 7.9653 18.9612 7.56234 18.0319 7.54158L9.87053 7.35971C9.36296 7.34796 8.94089 7.75103 8.92956 8.25905C8.91867 8.76666 9.32133 9.18827 9.82935 9.19961L17.9907 9.38148C18.0462 9.38294 18.1016 9.387 18.1565 9.39408Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedSection;
