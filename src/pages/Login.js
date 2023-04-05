
import {
    MainDiv,
    TitleText,
    LoginMainImg,
    MainInput,
    BlueBtn,
    Result
}from "../style/register";

import "../style/fonts.css"
import React, { useState, useEffect } from 'react';
import {useNavigate, Link } from "react-router-dom";
import {findAccount} from "../components/accounts/Accounts";

const mainImg = 'assets/drugStore.png';

function Login(){
//여기서 배열같은 것을확인하고, 추가되어 있으면 다음 페이지로 없으면 오류를 띄워주기. 그리고 추가는 sign up 에서 한다.
    const [loginResult, setLoginResult] = useState(null);
    const [inputs, setInputs] = useState({
        userId: '',
        userPw: ''
    });
    const { userId, userPw } = inputs;
    const navigate = useNavigate();
    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };
    useEffect(()  => {
        document.body.classList.add('login__body');
    
        return () => {
            document.body.classList.remove('login__body');
        };
    });

    const _login = () =>{
        if(findAccount(userId,userPw) === 0){
            setLoginResult("ID not Fount you need to sign up!");

        }else if(findAccount(userId,userPw) === -1){
            setLoginResult("wrong password");
        }
        else{
            navigate("/pharmacylist");
            //페이지 이동하기
        }

   }    
    return(
        <MainDiv className = "mainDiv">
            <TitleText className="titleText">Drone medicine </TitleText>
            <LoginMainImg className="loginMainImg" src={mainImg} />

            <MainInput className="mainInput" name="userId" type="text"  placeholder="ID"  onChange={onChange}  value={userId}/>
            <MainInput className="mainInput"  name="userPw" type="text" placeholder="PW" onChange={onChange}  value={userPw}/>
            <BlueBtn className="blueBtn" onClick={_login}>Login</BlueBtn>
            <Link to="/signup" className="signUpBtn">sign up</Link>
            <Result className="result">{loginResult}</Result>
        </MainDiv>
    );
}
export default Login