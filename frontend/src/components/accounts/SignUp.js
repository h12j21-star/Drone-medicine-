import axios from "axios";
import React, { useState, useEffect } from "react";
import Navigation from '../../components/common/Navigation';

import {BlueBtn, LoginMainImg, MainDiv, MainInput, Result, TitleText} from "../../style/register";
import '../../style/fonts.css';

const SignUp = () => {
    const baseUrl = "http://localhost:8082";

    const [ID, setID] = useState();
    const [PW, setPW] = useState();
    const [PWCheck, setPWCheck] = useState();
    const [resultString, setResultString] = useState('');
    useEffect(() => {

    });
async function getUserById(){
    let data = null;
    await axios
        .get(baseUrl+"/userinfo/"+ID)
        .then((response) => {
            if(response.data.id === undefined){
            }else{
                data = response.data.id;
            }
        })
        .catch((error) => {
            console.log(error)
        })
    return data;
}

async function  handleSubmit(){
    await axios
        .post(baseUrl+"/userinfo",{
            id:ID,
            pw:PW
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error);
        });

    }
    const handleChange_ID = (e)=>{
        e.preventDefault();
        setID(e.target.value);
    }

    const handleChange_PW = (e)=>{
        e.preventDefault();
        setPW(e.target.value);
    }
    const handleChange_PWCheck = (e)=>{
        e.preventDefault();
        setPWCheck(e.target.value);
    }
    const _signUp =  async () => {
        let IDCheck = await getUserById();
        if (PW !== PWCheck) {
            setResultString('Please Check your PW and PW check');
        } else if (IDCheck === null) {
            handleSubmit().then(r => console.log("sign up success"));
            setResultString('sign up success');
        } else {
            setResultString('your ID already exist');

        }
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
                <MainInput
                    className="mainInput"
                    name="userPw"
                    type="text"
                    placeholder="PW"
                    onChange={handleChange_PW}
                />
                <MainInput
                    className="mainInput"
                    name="userPwCheck"
                    type="text"
                    placeholder="PW Check"
                    onChange={handleChange_PWCheck}

                />
                <BlueBtn className="blueBtn" onClick={_signUp}>
                    sign up
                </BlueBtn>
                <Result className="result">{resultString}</Result>
            </MainDiv>
        </>
    );
}

export default SignUp;
