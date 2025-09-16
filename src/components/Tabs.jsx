import { title } from 'motion/react-client';
import React, { useState } from 'react';

const tabs = [
    {
        id: 'strategy',
        name: "Strategy",
        title: (
            <>
                <span style={{ color: '#000' }}>Strategic solutions</span>
                <span style={{ color: '#5B5B5B' }}> designed to accelerate progress and maximize impact.</span>
            </>
        ),
    },
    {
        id: 'engineering',
        name: "Engineering",
        title: (
            <>
                <span style={{ color: '#5B5B5B' }}>Building technology that's </span>
                <span style={{ color: '#000' }}>scalable, dependable</span>
                <span style={{ color: '#5B5B5B' }}>, and designed for impact.</span>
            </>
        ),
    },
    {
        id: 'cybersecurity',
        name: "Cyber Security",
        title: (
            <>
                <span style={{ color: '#5B5B5B' }}>Powering safe growth with </span>
                <span style={{ color: '#000' }}>seamless, enterprise-grade</span>
                <span style={{ color: '#5B5B5B' }}> cybersecurity.</span>
            </>
        ),
    },
    {
        id: 'talentAcquisition',
        name: "Talent Acquisition",
        title: (
            <>
                <span style={{ color: '#5B5B5B' }}>Powering your business with </span>
                <span style={{ color: '#000' }}>the right talent</span>
                <span style={{ color: '#5B5B5B' }}>, at the right time.</span>
            </>
        ),
    },
];

const Tabs = ({ activeTab, onTabChange }) => {

    return (
        <div className="bg-white font-sans">
            <div className="">
                <div
                    className="
                        flex flex-wrap lg:flex-nowrap justify-start items-center
                        mb-8
                    "
                    style={{
                        gap: '1.31rem',
                    }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className="transition-colors duration-300 cursor-pointer whitespace-nowrap"
                            style={{
                                color: activeTab === tab.id ? '#FFF' : '#8A8A8A',
                                fontFamily: 'Montserrat',
                                fontSize: '1.24663rem',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: 'normal',
                                padding: '0.625rem 1.35rem',
                                borderRadius: '3.5625rem',
                                border: '2px solid #C8C8C8',
                                background: activeTab === tab.id ? '#1d1d1d' : '#FFF',
                                minWidth: 'max-content',
                            }}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="relative my-10">
                    <hr className="w-full border-gray-900" style={{
                        background: 'linear-gradient(to right, transparent, #b6b6b6, transparent)',
                        height: '2px',
                        border: 'none',
                    }} />
                </div>
                <div className="">
                    <h2 
                        style={{
                            width: '52rem',
                            color: '#000',
                            fontFamily: 'Montserrat',
                            fontSize: '3rem',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                        }}
                        className="mb-[6.62rem]"
                    >
                        {tabs.find(tab => tab.id === activeTab)?.title || ''}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
