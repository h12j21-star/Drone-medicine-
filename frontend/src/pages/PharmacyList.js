import React from "react";
import Navigation from "../components/common/Navigation";
import { useDispatch } from "react-redux";
import { Pharmacy, position } from "../components/pharmacy/Pharmacy";
import { Section, Title } from "../style/PharmacyStyle";
import { ResetCart } from "../store/ItemSlice";


const PharmacyList = () => {
  let dispatch = useDispatch();
  dispatch(ResetCart());

  return (
    <>
      <Navigation prevUrl="/" />
      <Section>
        <Title>주변 약국 리스트</Title>
        <Pharmacy />
      </Section>
    </>
  );
};

export default PharmacyList;
