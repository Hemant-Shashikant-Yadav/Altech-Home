import React from 'react';

const TalentAcquisitionSection = () => (
    <div className="bg-black shadow-lg p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Talent Acquisition -</h2>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Sourcing</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Talent Mapping</li>
                    <li>Active Sourcing</li>
                    <li>Recruitment Automation</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Hiring</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>IT Staffing</li>
                    <li>Leadership Hiring</li>
                    <li>Contract Hiring</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategy</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Workforce Planning</li>
                    <li>Employer Branding</li>
                    <li>Skill Gap Analysis</li>
                </ul>
            </div>
            <div></div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Optimization</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Hiring Process Automation</li>
                    <li>Interview Frameworks</li>
                    <li>Recruitment Analytics</li>
                </ul>
            </div>
        </div>
    </div>
);

export default TalentAcquisitionSection;
