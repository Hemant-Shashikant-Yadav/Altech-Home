import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailedSection = ({ title, image, paragraph1, paragraph2, paragraph3, sammary }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="bg-black shadow-lg py-8 lg:py-16">
            <div className=" w-full max-w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Image */}
                    <div className="flex items-center justify-center">
                        <img 
                            src={image} 
                            alt="Strategic visualization" 
                            className="rounded-2xl shadow-lg"
                            style={{
                                width: "35.5625rem",
                                height: "41.9375rem",
                                flexShrink: 0
                            }}
                        />
                    </div>

                    {/* Right Column - Text */}
                    <div className="flex flex-col space-y-8">
                        <h2 
                            style={{
                                width: "34.6875rem",
                                color: "#FFF",
                                fontFamily: "Montserrat",
                                fontSize: "1.5rem",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal"
                            }}
                        >
                            {title}
                        </h2>

                        {/* Mobile: Summary or Expanded */}
                        <div className="md:hidden">
                            {!expanded ? (
                                <>
                                    <p className="text-lg text-gray-400 leading-relaxed">{sammary}</p>
                                    <button
                                        className="text-blue-500 underline focus:outline-none mb-10"
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
                                style={{
                                    width: "34.6875rem",
                                    color: "#A0A0A0",
                                    fontFamily: "Montserrat",
                                    fontSize: "1rem",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "1.6",
                                    marginBottom: "1.5rem"
                                }}
                            >
                                {paragraph1} {paragraph2} {paragraph3}
                            </p>
                            <button
                                style={{
                                    display: "flex",
                                    width: "18.5rem",
                                    height: "4rem",
                                    padding: "0.625rem",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    flexShrink: 0,
                                    borderRadius: "3.5625rem",
                                    border: "2px solid #FFF",
                                    background: "#1B1B1B",
                                    cursor: "pointer",
                                    marginTop: "2.13rem"
                                }}
                                className="transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => navigate('/collaboration')}
                            >
                                <span
                                    style={{
                                        width: "8.9375rem",
                                        flexShrink: 0,
                                        color: "#FFF",
                                        fontFamily: "Montserrat",
                                        fontSize: "1.24663rem",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        lineHeight: "normal"
                                    }}
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
