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
                    className={`transition-colors duration-500 ease-in-out ${
                        inView ? 'text-black' : 'text-gray-400'
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
                    <span
                        className="block font-semibold whitespace-nowrap"
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "clamp(1.8rem, 8vw + 1rem, 12.67694rem)",
                            fontWeight: 600,
                            lineHeight: "normal"
                        }}
                    >
                        {renderAnimatedText("WE BUILD", 0)}
                    </span>

                    {/* FUTURE-READY */}
                    <span
                        className="block font-semibold whitespace-nowrap"
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "clamp(1.4rem, 6.35vw + 0.8rem, 10.0625rem)",
                            fontWeight: 600,
                            lineHeight: "normal"
                        }}
                    >
                        {renderAnimatedText("FUTURE-READY", 8)} {/* Start after "WE BUILD" */}
                    </span>

                    {/* SOLUTIONS */}
                    <span
                        className="block font-semibold whitespace-nowrap"
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "clamp(1.8rem, 8vw + 1rem, 12.67694rem)",
                            fontWeight: 600,
                            lineHeight: "normal"
                        }}
                    >
                        {renderAnimatedText("SOLUTIONS", 20)} {/* Start after "FUTURE-READY" */}
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default FutureSolutions;
