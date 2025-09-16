import React from 'react';

const CybersecuritySection = () => (
    <div className="bg-black shadow-lg p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Cybersecurity -</h2>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Threat Detection & Response</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Incident Response</li>
                    <li>Continuous Monitoring</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Compliance & Audit</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Compliance Audits</li>
                    <li>Security Awareness Training</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Network Security</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Endpoint Security</li>
                    <li>Network Protection</li>
                </ul>
            </div>
            <div></div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Security</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Cloud Infrastructure Security</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Security Audits & Penetration Testing</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Vulnerability Patching</li>
                    <li>Security Audits</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
                <ul className="text-gray-400 space-y-2">
                    <li>Splunk</li>
                    <li>AWS Security Hub</li>
                    <li>Azure Security Center</li>
                    <li>Nessus</li>
                </ul>
            </div>
        </div>
    </div>
);

export default CybersecuritySection;
