import React from 'react';

const FocusResearchSection = () => (
    <div className="bg-black shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-10">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Focus -</h2>
                {/* Content for Focus section goes here */}
            </div>
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Research</h2>
                <ul className="text-gray-400 space-y-2">
                    <li>Market Trends</li>
                    <li>Competitive Analysis</li>
                    <li>Business Insights</li>
                    <li>Cybersecurity Audit</li>
                    <li>Talent Mapping</li>
                    <li>UX Auditing</li>
                </ul>
            </div>
        </div>
    </div>
);

export default FocusResearchSection;
