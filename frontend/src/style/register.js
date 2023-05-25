import styled from "styled-components";

const MainDiv = styled.div`
  position: absolute;
  display: inline-flex;
  display: -webkit-inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const TitleText = styled.h2`
  font-family: "GmarketSansMedium", sans-serif;
  font-weight: bold;
  font-size: calc(40px + 1vw);
  margin-bottom: 30px;
`;
const LoginMainImg = styled.img`
  height: 40%;
  margin: 0;
`;
const MainInput = styled.input`
  margin: 15px;
  padding-left: 20px;
  width: 230px;
  height: 35px;
  border: 0;
  border-radius: 10px;
  outline: none;
  background-color: rgb(233, 233, 233);
  font-family: "Poppins", sans-serif;
`;

const BlueBtn = styled.button`
  width: 220px;
  height: 59px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #529ddf;
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;
const Result = styled.p`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 15px;
  margin-top: 10px;
  color: #454545;
`;
export { MainDiv, TitleText, LoginMainImg, MainInput, BlueBtn, Result };
