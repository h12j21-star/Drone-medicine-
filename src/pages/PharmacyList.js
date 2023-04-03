import React from "react";
import Pharmacy from "../components/pharmacy/Pharmacy";
import { Section, Title } from "../style/PharmacyStyle";

const PharmacyList = () => {
  return (
    <Section>
      <Title>주변 약국 리스트</Title>
      <Pharmacy />
    </Section>
  );
};

export default PharmacyList;
