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
                    className={`transition-colors duration-500 ease-in-out ${inView ? 'text-black' : 'text-gray-400'} inline-block leading-none`}
                    style={{
                        transitionDelay: inView ? `${delay}s` : '0s',
                        letterSpacing: '0',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for spaces */}
                </span>
            );
        });
    };

    return (
        <div className="bg-white flex items-center justify-center w-full  h-[clamp(30rem,65vw+20rem,82.8125rem)] flex-shrink-0 mx-auto">
            <div ref={ref} className="w-[82.5rem] max-w-full">
                <h1 className="leading-none">
                    {/* WE BUILD */}
                    <div className="block font-semibold whitespace-nowrap text-[2rem] md:text-[5.9rem] lg:text-[12.67694rem] font-montserrat leading-normal">
                        {renderAnimatedText("WE BUILD", 0)}
                    </div>

                    {/* FUTURE-READY */}
                    <div className="block font-semibold whitespace-nowrap text-[2rem] md:text-[4.8rem] lg:text-[10rem] font-montserrat leading-normal">
                        {renderAnimatedText("FUTURE-READY", 8)} {/* Start after "WE BUILD" */}
                    </div>

                    {/* SOLUTIONS */}
                    <div className="block font-semibold whitespace-nowrap text-[2rem] md:text-[5.8rem] lg:text-[12.67694rem] font-montserrat leading-normal">
                        {renderAnimatedText("SOLUTIONS", 20)} {/* Start after "FUTURE-READY" */}
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default FutureSolutions;
