import axios from "axios";
import React, { useState, useEffect } from "react";
import Navigation from "../../components/common/Navigation";

import {
  BlueBtn,
  LoginMainImg,
  MainDiv,
  MainInput,
  Result,
  TitleText,
} from "../../style/register";
import "../../style/fonts.css";

const SignUp = () => {
  const baseUrl = "http://localhost:8080";

  const [ID, setID] = useState();
  const [PW, setPW] = useState();
  const [PWCheck, setPWCheck] = useState();
  const [resultString, setResultString] = useState("");
  useEffect(() => {});
  async function getUserById() {
    let data = null;
    await axios
      .get(baseUrl + "/userinfo/" + ID)
      .then((response) => {
        if (response.data.id === undefined) {
        } else {
          data = response.data.id;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return data;
  }

  async function handleSubmit() {
    await axios
      .post(baseUrl + "/userinfo", {
        id: ID,
        pw: PW,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleChange_ID = (e) => {
    e.preventDefault();
    setID(e.target.value);
  };

  const handleChange_PW = (e) => {
    e.preventDefault();
    setPW(e.target.value);
  };
  const handleChange_PWCheck = (e) => {
    e.preventDefault();
    setPWCheck(e.target.value);
  };
  const _signUp = async () => {
    let IDCheck = await getUserById();
    if (PW !== PWCheck) {
      setResultString("Please Check your PW and PW check");
    } else if (IDCheck === null) {
      handleSubmit().then((r) => console.log("sign up success"));
      setResultString("sign up success");
    } else {
      setResultString("your ID already exist");
    }
  };

  // 비밀번호 감추는 기능
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordImg, setPasswordImg] = useState("/assets/invisible.png");
  const ChangePasswordVisible = () => {
    if (passwordVisible === true) {
      setPasswordType("text");
      setPasswordImg("/assets/visible.png");
    } else {
      setPasswordType("password");
      setPasswordImg("/assets/invisible.png");
    }
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Navigation page="signup" prevUrl="/" />
      <MainDiv className="mainDiv">
        <TitleText className="titleText">Sign up</TitleText>
        <MainInput
          className="mainInput"
          name="userId"
          type="text"
          placeholder="ID"
          onChange={handleChange_ID}
        />
        <label style={{ position: "relative" }}>
          <MainInput
            className="mainInput"
            name="userPW"
            type={passwordType}
            placeholder="PW"
            onChange={handleChange_PW}
          />
          <button
            style={{
              position: "absolute",
              top: "1rem",
              right: "1.5rem",
              border: "0",
              backgroundColor: "transparent",
            }}
            onClick={ChangePasswordVisible}
          >
            <img src={passwordImg} style={{ width: "20px" }} />
          </button>
        </label>
        <label style={{ position: "relative" }}>
          <MainInput
            className="mainInput"
            name="userPWCheck"
            type={passwordType}
            placeholder="PW Check"
            onChange={handleChange_PWCheck}
          />
          <button
            style={{
              position: "absolute",
              top: "1rem",
              right: "1.5rem",
              border: "0",
              backgroundColor: "transparent",
            }}
            onClick={ChangePasswordVisible}
          >
            <img src={passwordImg} style={{ width: "20px" }} />
          </button>
        </label>
        <BlueBtn className="blueBtn" onClick={_signUp}>
          sign up
        </BlueBtn>
        <Result className="result">{resultString}</Result>
      </MainDiv>
    </>
  );
};

export default SignUp;
