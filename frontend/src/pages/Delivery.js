import Map from "../components/delivery/Map";
import DeliveryTime from "../components/delivery/DeliveryTime";
import Navigation from "../components/common/Navigation";
import { Pharmacy, position } from "../components/pharmacy/Pharmacy";

function Delivery() {
  return (
    <>
      <Navigation prevUrl={-1} />
      <DeliveryTime drugLat={position.latitude} drugLon={position.longitude} />
      <h3 style={{ textAlign: "center" }}>{position.name} 지도</h3>
      {console.log(position.latitude)};
      <Map drugLat={position.latitude} drugLon={position.longitude} />
    </>
  );
}

export default Delivery;
