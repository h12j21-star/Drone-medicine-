import { GlobalStyle } from "./style/GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store/store";
import { Provider } from "react-redux";
import Basket from "./pages/Basket";
import Delivery from "./pages/Delivery";
import PharmacyList from "./pages/PharmacyList";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
      <Provider store={store}>

            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/pharmacylist" element={<PharmacyList/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/delivery" element={<Delivery/>}/>    
            </Routes>
      </Provider>
  );
}

export default App;
