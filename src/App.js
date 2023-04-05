// import { GlobalStyle } from "./style/GlobalStyle";
// import store from "./store/store";
// import { Provider } from "react-redux";
// import Basket from "./pages/Basket";
// import Delivery from "./pages/Delivery";
// import PharmacyList from "./pages/PharmacyList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
      <BrowserRouter>
      <div className="App">
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>}  />
        </Routes>
      </div>
      </BrowserRouter>
    // <>
    //   <Provider store={store}>
    //     <GlobalStyle />
    //     <div className="App">
    //       {/* <Basket /> */}
    //       {/* <Delivery /> */}
    //       <PharmacyList />
    //     </div>
    //   </Provider>
    // </>
  );
}

export default App;
