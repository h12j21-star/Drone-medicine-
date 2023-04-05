
import {
    MainDiv,
    TitleText,
    LoginMainImg,
    MainInput,
    BlueBtn,
    Result
}from "../style/register";

import "../style/fonts.css"
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {addAccount,findAccount} from "../components/accounts/Accounts";
import { useEffect } from "react";

function SignUp(){
    const [inputs, setInputs] = useState({
        userId: '',
        userPw: '',
        userPwCheck:''
    });
    const[resultString,setResultString] = useState("");
    const { userId, userPw, userPwCheck } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };
    const Reset = () => {
        setInputs({
            userId: '',
            userPw: '',
            userPwCheck:''
        })
    };
    const _signUp = () => {
        if (userPw !== userPwCheck){
            setResultString("Please Check your PW and PW check");

        }
        else if(findAccount(userId,userPw)!==0){
            setResultString("your ID already exist");

        }else{
            addAccount(userId,userPw);
            Reset();
            setResultString("sign up success");
        }
    };
    const navigate = useNavigate();
    return(
        <MainDiv className = "mainDiv">
            <TitleText className="titleText">Sign up</TitleText>
            <MainInput className="mainInput" name="userId"  type="text"  placeholder="ID"  onChange={onChange} value={userId}/>
            <MainInput className="mainInput"  name="userPw"  type="text" placeholder="PW" onChange={onChange} value={userPw} />
            <MainInput className="mainInput"   name="userPwCheck"  type="text" placeholder="PW Check" onChange={onChange} value={userPwCheck}/>
            <BlueBtn className="blueBtn"  onClick={_signUp}>sign up</BlueBtn>
            <Result className="result">{resultString}</Result>
        </MainDiv>
    );
}
export default SignUp