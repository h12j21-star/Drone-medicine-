import Map from "../components/delivery/Map";
import DeliveryTime from "../components/delivery/DeliveryTime";

function Delivery() {
  return (
    <>
      <DeliveryTime drugLat={37.4484002} drugLon={127.1271451} />
      <Map drugLat={37.4484002} drugLon={127.1271451} />
    </>
  );
}

export default Delivery;
