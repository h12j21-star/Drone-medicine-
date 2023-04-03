import React from 'react';
import Pharmacy from '../component/Pharmacy';
import { Section, Title } from '../component/style';

const PharmacyList = () => {
    
    return (
    <Section>
        <Title>주변 약국 리스트</Title>
        <Pharmacy/>
    </Section>    
    );
};

export default PharmacyList;