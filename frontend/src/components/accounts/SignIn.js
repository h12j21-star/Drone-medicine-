import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useNavigate, Link } from "react-router-dom";

import {BlueBtn, LoginMainImg, MainDiv, MainInput, Result, TitleText} from "../../style/register";
const mainImg = 'assets/drugStore.png';
import "../style/fonts.css"

const SignIn = () => {
    const baseUrl = "http://localhost:8080";
    const [loginResult, setLoginResult] = useState(null);
    const [ID, setID] = useState();
    const [PW, setPW] = useState();
    const navigate = useNavigate();
    useEffect(() => {

    });
    async function signInCheck(){
        await axios
            .get(baseUrl+"/userinfo"+ID)
            .then((response) => {
                console.log(response.data);
                if(response.data == null){
                    return 0; //cannot find id
                }
                else if(PW == response.data.id) {
                    return 1;
                }else {
                    return -1; //wrong pw
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleChange_ID = (e)=>{
        e.preventDefault();
        setID(e.target.value);
    }

    const handleChange_PW = (e)=>{
        e.preventDefault();
        setPW(e.target.value);
    }
    const _login = () =>{
        if(signInCheck() === 0){
            setLoginResult("ID not Found you need to sign up!");

        }else if(signInCheck() === -1){
            setLoginResult("wrong password");
        }
        else{
            navigate("/pharmacylist");
        }

    }
    return (
        <MainDiv className = "mainDiv">
            <TitleText className="titleText">Drone medicine </TitleText>
            <LoginMainImg className="loginMainImg" src={mainImg} />

            <MainInput className="mainInput" name="userId" type="text"  placeholder="ID"  onChange={handleChange_ID} />
            <MainInput className="mainInput"  name="userPw" type="text" placeholder="PW" onChange={handleChange_PW} />
            <BlueBtn className="blueBtn" onClick={_login}>Login</BlueBtn>
            <Link to="/signup" className="signUpBtn" style={{textDecoration:"none"}}>sign up</Link>
            <Result className="result">{loginResult}</Result>
        </MainDiv>
    )
}

export default SignIn;
