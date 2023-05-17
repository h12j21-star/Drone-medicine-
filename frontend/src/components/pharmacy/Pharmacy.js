import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PharmacyBtn,
  PharmacyImg,
  ClockImg,
  Pharmacyinfo,
} from "../../style/PharmacyStyle";

const clock = "/assets/clock.png";


const Pharmacy = () => {
  const navigate = useNavigate();
  const [pharmacyList, setPharmacyList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/pharmacylist")
      .then((res) => {
        console.log(res);
        setPharmacyList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function handleClick(latitude, longitude) {
    navigate('/products', { state: { latitude, longitude } });
  }
    
    const PharmacyItem = ({ pharmacyList }) => (
      <PharmacyBtn onClick={() => handleClick(pharmacyList.latitude, pharmacyList.longitude)}>
        <PharmacyImg src={pharmacyList.img} />
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

export default Pharmacy;
