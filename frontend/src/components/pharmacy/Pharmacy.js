import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PharmacyBtn,
  PharmacyImg,
  ClockImg,
  Pharmacyinfo,
} from "../../style/PharmacyStyle";

const clock = "/assets/clock.png";
let position = { name: "", latitude: 0, longitude: 0 };

const Pharmacy = () => {
  const navigate = useNavigate();
  const [pharmacyList, setPharmacyList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/pharmacy")
      .then((res) => {
        setPharmacyList(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function handleClick(name, latitude, longitude, deliveryFee) {
    name = name.replace(" ", "");
    navigate(`/products/${name}`, {
      state: { latitude, longitude, deliveryFee },
    });
    console.log(name, latitude, longitude);
    position = { name: name, latitude: latitude, longitude: longitude };
  }

  const PharmacyItem = ({ pharmacyList }) => (
    <PharmacyBtn
      onClick={() =>
        handleClick(
          pharmacyList.name,
          pharmacyList.latitude,
          pharmacyList.longitude,
          pharmacyList.deliveryFee
        )
      }
    >
      <PharmacyImg
        src={`http://localhost:8081/api/pharmacy/images/${pharmacyList.img}`}
      />
      <Pharmacyinfo>
        {pharmacyList.name}
        <br />
        <br />
        <br />
        {pharmacyList.address}
      </Pharmacyinfo>
      <p>
        <ClockImg src={clock} /> {pharmacyList.open}
      </p>
      <p>{pharmacyList.call}</p>
    </PharmacyBtn>
  );
  return (
    <>
      {pharmacyList.map((pha) => (
        // <Link to={"/products"} style={{textDecoration: "none"}}>
        <PharmacyItem pharmacyList={pha} key={pha.id} />
        // </Link>
      ))}
    </>
  );
};

export { Pharmacy, position };
