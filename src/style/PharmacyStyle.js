import styled from 'styled-components';

const Section = styled.section`
    width: 80%;
    margin: 70px auto;
    text-align: center;
`;
const Title = styled.h1`
    background-color:#529DDF;
    font-size: 40px;
    border-radius: 10px;
    padding: 20px;
    display: inline-block;
`;
const PharmacyBtn = styled.button`
    width: 100%;
    margin: 40px auto 0;
    height: 280px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    font-size: 23px;
    border: 0;
    cursor: pointer;
`;

const Pharmacyinfo = styled.p`
    width: 27%;
`;

const PharmacyImg = styled.img`
    width: 230px;
    height: 220px;
    border-radius: 10px;
`;

const ClockImg = styled.img`
    width: 23px;
    height: 23px;
    border-radius: 50px;
`;

export{
    Section,
    Title,
    PharmacyBtn,
    Pharmacyinfo,
    PharmacyImg,
    ClockImg
};