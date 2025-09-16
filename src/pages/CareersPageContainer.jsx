import React from 'react';
import CareersPage from '../components/CareersPage';
import ApplyForm from '../components/ApplyForm';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';

const CareersPageContainer = () => {
    return (
        <Container>
            <CareersPage />
            <ApplyForm />
        </Container>
    );
};

export default CareersPageContainer;
