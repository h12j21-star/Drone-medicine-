import React from "react";
import { useNavigate } from "react-router-dom";
import { PharmacyBtn, PharmacyImg, ClockImg, Pharmacyinfo } from "../../style/PharmacyStyle";

const clock = '/assets/clock.png';
const jong = '/assets/jong.png';
const chung = '/assets/chung.jpg';
const dong = '/assets/dong.png';
export const pharmacies = [
    {id:1, name:"태평 종로약국", img: jong, open:"09:00 - 21:00", address:"경기 성남시 수정구 탄리로 120 오거리빌딩", latitude:"37.4463796",longitude:"127.134314", call:"031-755-5518"},
    {id:2, name:"청년약국", img: chung, open:"10:00 - 21:00", address:"경기 성남시 수정구 성남대로 1330 일성오퍼스원 1층 청년약국", latitude:"37.4483877",longitude:"127.127119", call:"031-8039-7582"},
    {id:3, name:"동서울약국", img: dong, open:"09:00 - 21:00", address:"경기 성남시 수정구 복정로 86 104호", latitude:"37.4605966",longitude:"127.126947", call:"0507-1327-5398"}
];


const Pharmacy = () => {
    const navigate = useNavigate();

    function handleClick(name) {
        //navigate(`/${name}`);
    }

    const PharmacyItem = ({pharmacies }) => (

        <PharmacyBtn onClick={() => handleClick(pharmacies.name)}>
            <PharmacyImg src={pharmacies.img}/>
            <Pharmacyinfo>{pharmacies.name}<br/><br/><br/>{pharmacies.address}</Pharmacyinfo>
            <p><ClockImg src={clock}/> {pharmacies.open}</p>
            <p>{pharmacies.call}</p>
        </PharmacyBtn>
    );

    return(
        <>
            {pharmacies.map((pha) => (
            <PharmacyItem pharmacies={pha}/>
            ))}
        </>
    );
};

export default Pharmacy;