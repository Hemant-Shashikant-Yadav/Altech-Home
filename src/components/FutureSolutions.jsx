import React from 'react';
import { useInView } from 'react-intersection-observer';

const FutureSolutions = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const renderAnimatedText = (text, baseDelay = 0) => {
        return text.split('').map((char, index) => {
            const delay = (baseDelay + index) * 0.1; // 100ms delay between each letter
            return (
                <span
                    key={index}
                    className={`transition-colors duration-500 ease-in-out ${inView ? 'text-black' : 'text-gray-400'
                        }`}
                    style={{
                        transitionDelay: inView ? `${delay}s` : '0s',
                        letterSpacing: '0',
                        display: 'inline-block',
                        lineHeight: '1'
                    }}
                >
                    {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for spaces */}
                </span>
            );
        });
    };

    return (
        <div
            className="bg-white flex items-center justify-center w-full "
            style={{
                maxWidth: "90rem",
                height: "clamp(30rem, 65vw + 20rem, 82.8125rem)",
                flexShrink: 0,
                margin: "0 auto"
            }}
        >
            <div
                ref={ref}
                style={{
                    width: "82.5rem",
                    maxWidth: "100%"
                }}
            >
                <h1 className="leading-none">
                    {/* WE BUILD */}
                    <div
                        className="block font-semibold whitespace-nowrap"
                        style={{
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            lineHeight: "normal"
                        }}
                        className="text-[3rem] md:text-[5.9rem] lg:text-[12.67694rem]"
                    >
                        {renderAnimatedText("WE BUILD", 0)}
                    </div>

                    {/* FUTURE-READY */}
                    <div
                        className="block font-semibold whitespace-nowrap"
                        style={{
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            lineHeight: "normal"
                        }}
                        className="text-[2.4rem] md:text-[4.8rem] lg:text-[10rem]"
                    >
                        {renderAnimatedText("FUTURE-READY", 8)} {/* Start after "WE BUILD" */}
                    </div>

                    {/* SOLUTIONS */}
                    <div
                        className="block font-semibold whitespace-nowrap"
                        style={{
                            fontFamily: "Montserrat",
                            // fontSize: "clamp(1.8rem, 8vw + 1rem, 15rem)",
                            fontWeight: 600,
                            lineHeight: "normal"
                        }}
                        className="text-[3rem] md:text-[5.8rem] lg:text-[12.67694rem]"
                    >
                        {renderAnimatedText("SOLUTIONS", 20)} {/* Start after "FUTURE-READY" */}
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default FutureSolutions;
