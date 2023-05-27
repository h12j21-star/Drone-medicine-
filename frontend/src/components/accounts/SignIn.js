import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../style/fonts.css";
import {
  BlueBtn,
  LoginMainImg,
  MainDiv,
  MainInput,
  Result,
  TitleText,
} from "../../style/register";
const mainImg = "assets/drugStore.png";

const SignIn = () => {
  const baseUrl = "http://localhost:8080";
  const [loginResult, setLoginResult] = useState(null);
  const [ID, setID] = useState();
  const [PW, setPW] = useState();
  const navigate = useNavigate();
  useEffect(() => {});
  async function signInCheck() {
      let data = 0;
      await axios
          .get(baseUrl + "/api/userinfo/" + ID)
          .then((response) => {
              if (response.data.id === undefined) {
              } else if(response.data.pw === PW){
                  data = 1;
              }else{
                  data = -1; // wrong pw
              }
          })
          .catch((error) => {
              console.log(error);
          });

      return data;
  }
  const handleChange_ID = (e) => {
    e.preventDefault();
    setID(e.target.value);
  };

  const handleChange_PW = (e) => {
    e.preventDefault();
    setPW(e.target.value);
  };
  const _login = async () => {
    let IDCheck = await signInCheck();
    if (IDCheck === 0) {
      setLoginResult("ID not Found you need to sign up!");
    } else if (IDCheck === -1) {
      setLoginResult("wrong password");
    } else if (IDCheck === 1) {
      navigate("/pharmacy");
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
    <MainDiv className="mainDiv">
      <TitleText className="titleText">Drone medicine </TitleText>
      <LoginMainImg className="loginMainImg" src={mainImg} />

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
      <BlueBtn className="blueBtn" onClick={_login}>
        Login
      </BlueBtn>
      <Link
        to="/signup"
        className="signUpBtn"
        style={{
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        sign up
      </Link>
      <Result className="result">{loginResult}</Result>
    </MainDiv>
  );
};

export default SignIn;
