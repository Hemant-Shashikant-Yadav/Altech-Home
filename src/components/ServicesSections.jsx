import React from 'react';
import Section from './Section';

const ServicesSections = ({ sections }) => {
    return (
        <div className='w-full max-w-full overflow-hidden'>
            <Section {...sections.strategy} />
            <Section {...sections.engineering} />
            <Section {...sections.cybersecurity} />
            <Section {...sections.talentAcquisition} />
        </div>
    );
};

export default ServicesSections;
