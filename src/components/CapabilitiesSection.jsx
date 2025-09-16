import React from 'react';

const CapabilitiesSection = () => (
    <div className="bg-black shadow-lg p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Capabilities -</h2>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>System Architecture</li>
                    <li>API Integration</li>
                    <li>DevOps</li>
                    <li>Security Optimization</li>
                    <li>Cloud Management</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Frontend Development</li>
                    <li>Mobile Development</li>
                    <li>UI/UX Enhancement</li>
                    <li>Platform Compatibility</li>
                    <li>Interactive Design</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Angular</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Tailwind</li>
                </ul>
            </div>
        </div>
    </div>
);

export default CapabilitiesSection;
