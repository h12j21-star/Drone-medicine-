import Map from '../components/delivery/Map';
import DeliveryTime from '../components/delivery/DeliveryTime';
import Navigation from '../components/common/Navigation';

function Delivery() {
    return (
        <>
            <Navigation prevUrl="/products" />
            <DeliveryTime drugLat={37.4484002} drugLon={127.1271451} />
            <Map drugLat={37.4484002} drugLon={127.1271451} />
        </>
    );
}

export default Delivery;
